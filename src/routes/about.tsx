import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "Hamara Tareef — About · Mughal EV Tech" }, { name: "description", content: "Heritage, craft and showroom of Mughal EV Tech, Pakistan." }] }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground text-ui">
      <SiteHeader />
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-20">
        <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Hamara Tareef — About Us</div>
        <h1 className="mt-4 text-display text-5xl md:text-7xl leading-[1.02] max-w-4xl">A quiet atelier for Pakistan's electric future.</h1>
        <p className="mt-10 max-w-2xl text-foreground/70 leading-relaxed text-lg">Mughal EV Tech is a Lahore-born specialist in elite electric vehicle components — from precision motors and BMS modules to bespoke battery cells curated for performance and longevity.</p>
      </section>
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-16 border-t border-border/60">
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Bani — Founder</div>
          <h2 className="mt-3 text-display text-3xl md:text-4xl">Muhammad Mughal</h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">Two decades of automotive electrical engineering, distilled into Pakistan's first showcase-grade catalog of premium EV components.</p>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Rabta — Contact</div>
          <div className="mt-3 space-y-4 text-foreground/80">
            <a href="mailto:info@mughalev.pk" className="flex items-center gap-3 hover:text-accent transition"><Mail className="h-4 w-4" /> info@mughalev.pk</a>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Showroom · Hall Road, Lahore, Pakistan</div>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a href="#" className="h-11 w-11 grid place-items-center border border-border/60 hover:border-accent hover:text-accent transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="h-11 w-11 grid place-items-center border border-border/60 hover:border-accent hover:text-accent transition"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 border-t border-border/60">
        <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50 mb-6">Maqam — Location</div>
        <div className="aspect-[16/9] w-full overflow-hidden border border-border/60 grayscale contrast-125">
          <iframe title="Mughal EV Tech showroom" src="https://www.openstreetmap.org/export/embed.html?bbox=74.31%2C31.55%2C74.36%2C31.58&layer=mapnik&marker=31.5651%2C74.3187" className="w-full h-full" loading="lazy" />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}