import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { ProductForm } from "@/components/ProductForm";
import { fetchProduct } from "@/lib/products";

export const Route = createFileRoute("/_authenticated/admin/$id/edit")({
  head: () => ({ meta: [{ title: "Edit Piece · Mughal EV Tech" }] }),
  component: EditPiece,
});

function EditPiece() {
  const { id } = Route.useParams();
  const { data: product, isLoading } = useQuery({ queryKey: ["product", id], queryFn: () => fetchProduct(id) });
  return (
    <div className="min-h-screen bg-background text-foreground text-ui">
      <SiteHeader />
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-32">
        <Link to="/admin" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition"><ArrowLeft className="h-3 w-3" /> Back</Link>
        <h1 className="mt-6 text-display text-5xl">Refine the piece.</h1>
        <div className="mt-12">{isLoading ? <p className="text-foreground/50">Loading…</p> : product ? <ProductForm existing={product} /> : <p>Not found.</p>}</div>
      </section>
    </div>
  );
}