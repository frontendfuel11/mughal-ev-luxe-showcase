import { Link } from "@tanstack/react-router";
import { Eye } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <div className="group relative w-full">
      <Link to="/product/$id" params={{ id: p.id }} className="block">
        <div className="relative w-full aspect-[4/5] bg-secondary overflow-hidden">
          {p.images[0] ? (
            <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-foreground/15 text-display text-6xl">EV</div>
          )}
          <span className="absolute top-3 right-3 h-9 w-9 grid place-items-center bg-background/90 backdrop-blur border border-border/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Eye className="h-4 w-4" />
          </span>
          {p.category && (
            <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] px-2 py-1 bg-background/90 backdrop-blur">
              {p.category}
            </span>
          )}
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-3">
          <h3 className="text-display text-lg md:text-xl truncate">{p.name}</h3>
          {p.price && <span className="text-[11px] uppercase tracking-[0.18em] text-foreground/60 shrink-0">{p.price}</span>}
        </div>
      </Link>
    </div>
  );
}