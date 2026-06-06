import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { fetchProducts } from "@/lib/products";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [{ title: "Dashboard · Mughal EV Tech" }] }),
  component: Admin,
});

function Admin() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const { data: products = [] } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });
  async function remove(id: string) {
    if (!confirm("Delete this piece?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Removed.");
    qc.invalidateQueries({ queryKey: ["products"] });
  }
  return (
    <div className="min-h-screen bg-background text-foreground text-ui">
      <SiteHeader />
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-32">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Daftar — Dashboard</div>
            <h1 className="mt-3 text-display text-5xl md:text-6xl">Catalog</h1>
          </div>
          <button onClick={() => navigate({ to: "/admin/new" })} className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background uppercase tracking-[0.2em] text-[12px] hover:bg-accent hover:text-accent-foreground transition-colors">
            <Plus className="h-4 w-4" /> New Piece
          </button>
        </div>
        <div className="mt-16 border-t border-border/60">
          {products.length === 0 ? (
            <div className="py-24 text-center text-foreground/50 text-sm">No pieces yet. Add the first one.</div>
          ) : (
            <ul className="divide-y divide-border/60">
              {products.map((p) => (
                <li key={p.id} className="grid grid-cols-[80px_1fr_auto] gap-6 items-center py-5">
                  <div className="h-20 w-20 bg-secondary overflow-hidden">{p.images[0] ? <img src={p.images[0]} alt="" className="w-full h-full object-cover" /> : null}</div>
                  <div>
                    <div className="text-display text-xl">{p.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/50 mt-1">{p.category || "—"} {p.price ? `· ${p.price}` : ""}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link to="/admin/$id/edit" params={{ id: p.id }} className="h-10 w-10 grid place-items-center border border-border hover:border-accent transition"><Pencil className="h-4 w-4" /></Link>
                    <button onClick={() => remove(p.id)} className="h-10 w-10 grid place-items-center border border-border hover:border-destructive hover:text-destructive transition"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}