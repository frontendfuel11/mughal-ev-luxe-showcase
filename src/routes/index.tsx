import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { fetchProducts } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mughal EV Tech — Elite Electric Vehicle Components" },
      { name: "description", content: "Pakistan's bespoke gallery of high-performance EV spare parts. Scan, explore, specify." },
      { property: "og:title", content: "Mughal EV Tech" },
      { property: "og:description", content: "Elite electric vehicle components, curated as a luxury showcase." },
    ],
  }),
  component: Index,
});

function Index() {
  const { data: products = [] } = useQuery({ queryKey: ["products"], queryFn: () => import("@/lib/products").then(m => m.fetchProducts()) });
  const featured = products.slice(0, 3);
  const logos = ["EV·MOTOR", "VOLT·CORE", "NEXUS·BMS", "AERO·CELL", "QUANTUM·DRIVE", "ION·FORGE", "TESLA·LAB", "LUMEN·EV"];

  return (
    <div className="min-h-screen bg-background text-foreground text-ui">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-32 md:pb-48 relative z-10">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-foreground/50 animate-fade-up">
            <span className="h-px w-10 bg-accent" />
            Est. Pakistan · Electric Vehicle Atelier
          </div>
          <h1 className="mt-8 text-display text-[44px] md:text-[88px] leading-[0.95] font-bold max-w-5xl animate-fade-up">
            Engineered for the silent revolution.
          </h1>
          <p className="mt-8 max-w-xl text-foreground/60 text-base md:text-lg leading-relaxed animate-fade-up">
            A bespoke showcase of elite electric vehicle spare parts. Each component is photographed, specified and presented for the connoisseur.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 animate-fade-up">
            <Link to="/gallery" className="px-8 py-4 bg-foreground text-background text-[12px] uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-colors">
              Namaish Dekhein — View Gallery
            </Link>
            <Link to="/about" className="px-8 py-4 border border-foreground/30 text-[12px] uppercase tracking-[0.2em] hover:border-foreground transition-colors">
              Hamara Tareef
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-6 md:-bottom-10 left-0 right-0 overflow-hidden">
          <div className="text-display font-black leading-none whitespace-nowrap text-foreground/[0.05] text-[26vw]">
            MUGHAL·EV
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 py-10 overflow-hidden bg-foreground text-background">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...logos, ...logos, ...logos].map((l, i) => (
            <span key={i} className="text-display text-2xl md:text-3xl mx-12 opacity-70">
              {l}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Muntakhab — Selected</div>
            <h2 className="mt-3 text-display text-4xl md:text-6xl">The Collection</h2>
          </div>
          <Link to="/gallery" className="hidden md:block text-[12px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition">All Pieces →</Link>
        </div>

        {featured.length === 0 ? (
          <div className="border border-dashed border-border py-24 text-center text-foreground/50">
            <p className="text-sm">The collection is being curated. Sign in to add the first piece.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((p) => (
              <Link key={p.id} to="/product/$id" params={{ id: p.id }} className="group">
                <div className="aspect-[4/5] w-full bg-secondary overflow-hidden">
                  {p.images[0] ? (
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-foreground/20 text-display text-5xl">EV</div>
                  )}
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="text-display text-xl">{p.name}</h3>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/50">{p.category || "—"}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}