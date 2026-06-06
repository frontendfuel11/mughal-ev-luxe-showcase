import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { fetchProduct } from "@/lib/products";

export const Route = createFileRoute("/product/$id")({
  head: () => ({ meta: [{ title: "Piece · Mughal EV Tech" }] }),
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useParams();
  const { data: p, isLoading } = useQuery({ queryKey: ["product", id], queryFn: () => fetchProduct(id) });
  const [idx, setIdx] = useState(0);

  if (isLoading) return (
    <div className="min-h-screen bg-background"><SiteHeader /><div className="py-40 text-center text-foreground/40">Loading…</div></div>
  );
  if (!p) return (
    <div className="min-h-screen bg-background"><SiteHeader />
      <div className="py-40 text-center"><p className="text-foreground/60">Piece not found.</p>
        <Link to="/gallery" className="mt-6 inline-block text-sm uppercase tracking-[0.2em] underline">Back to gallery</Link>
      </div>
    </div>
  );

  const images = p.images.length > 0 ? p.images : [""];
  const current = images[idx] || "";

  return (
    <div className="min-h-screen bg-background text-foreground text-ui">
      <SiteHeader />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-10">
        <Link to="/gallery" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition">
          <ArrowLeft className="h-3 w-3" /> Wapas — Back to Gallery
        </Link>
      </div>
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20">
        <div>
          <div className="relative aspect-[4/5] w-full bg-secondary overflow-hidden">
            {current ? (
              <img src={current} alt={p.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-foreground/15 text-display text-7xl">EV</div>
            )}
            {images.length > 1 && (
              <>
                <button onClick={() => setIdx((idx - 1 + images.length) % images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center bg-background/90 backdrop-blur border border-border hover:bg-accent hover:text-accent-foreground transition" aria-label="Previous">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setIdx((idx + 1) % images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center bg-background/90 backdrop-blur border border-border hover:bg-accent hover:text-accent-foreground transition" aria-label="Next">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className="mt-4 grid grid-cols-5 gap-3">
              {images.map((src, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`aspect-square overflow-hidden border ${i === idx ? "border-accent" : "border-border/40 hover:border-foreground/40"} transition-colors`}>
                  {src ? <img src={src} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full bg-secondary" />}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="lg:pt-8">
          {p.category && <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">{p.category}</div>}
          <h1 className="mt-3 text-display text-4xl md:text-6xl leading-[1.05]">{p.name}</h1>
          {p.price && (
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/50">Qeemat — Price</span>
              <span className="text-display text-2xl text-foreground">{p.price}</span>
            </div>
          )}
          {p.description && <p className="mt-8 text-foreground/70 leading-relaxed max-w-prose">{p.description}</p>}
          {p.specs && Object.keys(p.specs).length > 0 && (
            <div className="mt-12 border-t border-border/60">
              <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50 mt-6 mb-2">Tafseelat — Specifications</div>
              <dl className="divide-y divide-border/50">
                {Object.entries(p.specs).map(([k, v]) => (
                  <div key={k} className="grid grid-cols-2 py-3 text-sm">
                    <dt className="text-foreground/60 uppercase tracking-[0.12em] text-[12px]">{k}</dt>
                    <dd className="text-foreground">{String(v)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}