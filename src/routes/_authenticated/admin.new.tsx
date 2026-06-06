import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { ProductForm } from "@/components/ProductForm";

export const Route = createFileRoute("/_authenticated/admin/new")({
  head: () => ({ meta: [{ title: "New Piece · Mughal EV Tech" }] }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground text-ui">
      <SiteHeader />
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-32">
        <Link
          to="/admin"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition"
        >
          <ArrowLeft className="h-3 w-3" /> Back
        </Link>
        <h1 className="mt-6 text-display text-5xl">Curate a new piece.</h1>
        <div className="mt-12">
          <ProductForm />
        </div>
      </section>
    </div>
  ),
});
