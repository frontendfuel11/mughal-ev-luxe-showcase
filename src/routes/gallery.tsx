import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts } from "@/lib/products";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Namaish — Gallery · Mughal EV Tech" },
      { name: "description", content: "Browse the full curated catalog of EV components." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [q, setQ] = useState("");
  const { data: products = [], isLoading } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return products;
    return products.filter(p =>
      p.name.toLowerCase().includes(s) ||
      (p.category ?? "").toLowerCase().includes(s) ||
      (p.description ?? "").toLowerCase().includes(s)
    );
  }, [products, q]);

  return (
    <div className="min-h-screen bg-background text-foreground text-ui">
      <SiteHeader />
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Namaish — Gallery</div>
        <h1 className="mt-3 text-display text-5xl md:text-7xl">The Atelier</h1>
        <div className="mt-12 group flex items-center gap-3 border-b border-border focus-within:border-accent transition-colors py-3">
          <Search className="h-4 w-4 text-foreground/40 group-focus-within:text-accent transition-colors" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, category, spec…"
            className="flex-1 bg-transparent outline-none text-base placeholder:text-foreground/30"
          />
          <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/40">{filtered.length} pieces</span>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-32">
        {isLoading ? (
          <div className="py-32 text-center text-foreground/40 text-sm">Loading collection…</div>
        ) : filtered.length === 0 ? (
          <div className="border border-dashed border-border py-32 text-center text-foreground/50 text-sm">
            No pieces match. Try another search.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}