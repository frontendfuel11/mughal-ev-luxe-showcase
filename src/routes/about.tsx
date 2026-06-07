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
        <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Hamara Taruf — About Us</div>
        <h1 className="mt-4 text-display text-5xl md:text-7xl leading-[1.02] max-w-4xl">A quiet atelier for Pakistan's electric future.</h1>
        <p className="mt-10 max-w-2xl text-foreground/70 leading-relaxed text-lg">Mughal EV Tech is a Lahore-born specialist in elite electric vehicle components — from precision motors and BMS modules to bespoke battery cells curated for performance and longevity.</p>
      </section>
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-16 border-t border-border/60">
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Bani — Founder</div>
          <h2 className="mt-3 text-display text-3xl md:text-4xl">Muhammad Imran baig</h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">Two decades of automotive electrical engineering, distilled into Pakistan's first showcase-grade catalog of premium EV components.</p>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Rabta — Contact</div>
          <div className="mt-3 space-y-4 text-foreground/80">
            <a href="mailto:info@mughalev.pk" className="flex items-center gap-3 hover:text-accent transition"><Mail className="h-4 w-4" /> mughalevtech@gmail.com</a>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Showroom · Bilal Gunj , Lahore , Pakistan</div>
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
         <iframe className="h-full w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3399.001745563548!2d74.3027!3d31.579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c9821e9124d%3A0xa94971f520d14d47!2sH8H3%2BJ37%2C%20Bilal%20Ganj%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1780828450922!5m2!1sen!2s"   />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}