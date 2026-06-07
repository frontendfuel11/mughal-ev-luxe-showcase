export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-12 text-ui text-sm text-foreground/60">
        <div>
          <div className="text-display text-2xl text-foreground">Mughal EV Tech</div>
          <p className="mt-3 max-w-xs">Pakistan's bespoke gallery for elite electric vehicle components.</p>
        </div>
        <div>
          <div className="uppercase tracking-[0.2em] text-xs text-foreground/80 mb-3">Rabta — Contact</div>
          <p>Showroom · Lahore, Pakistan</p>
          <p>mughalevtech@gmail.com</p>
        </div>
        <div className="md:text-right text-xs uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Mughal EV Tech
        </div>
      </div>
    </footer>
  );
}