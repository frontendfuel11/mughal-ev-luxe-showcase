import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as SiteHeader } from "./SiteHeader-K_mwnoUs.mjs";
import { S as SiteFooter } from "./SiteFooter-tkqApNud.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./client-BtLc1A20.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function Index() {
  const {
    data: products = []
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => import("./products-nStxe-c1.mjs").then((m) => m.fetchProducts())
  });
  const featured = products.slice(0, 3);
  const logos = ["EV·MOTOR", "VOLT·CORE", "NEXUS·BMS", "AERO·CELL", "QUANTUM·DRIVE", "ION·FORGE", "TESLA·LAB", "LUMEN·EV"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground text-ui", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-32 md:pb-48 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-foreground/50 animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-accent" }),
          "Est. Pakistan · Electric Vehicle Atelier"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-8 text-display text-[44px] md:text-[88px] leading-[0.95] font-bold max-w-5xl animate-fade-up", children: "Engineered for the silent revolution." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-foreground/60 text-base md:text-lg leading-relaxed animate-fade-up", children: "A bespoke showcase of elite electric vehicle spare parts. Each component is photographed, specified and presented for the connoisseur." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap gap-4 animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "px-8 py-4 bg-foreground text-background text-[12px] uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-colors", children: "Namaish Dekhein — View Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "px-8 py-4 border border-foreground/30 text-[12px] uppercase tracking-[0.2em] hover:border-foreground transition-colors", children: "Hamara Tareef" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-6 md:-bottom-10 left-0 right-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display font-black leading-none whitespace-nowrap text-foreground/[0.05] text-[26vw]", children: "MUGHAL·EV" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/40 py-10 overflow-hidden bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap w-max", children: [...logos, ...logos, ...logos].map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display text-2xl md:text-3xl mx-12 opacity-70", children: l }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-foreground/50", children: "Muntakhab — Selected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-display text-4xl md:text-6xl", children: "The Collection" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "hidden md:block text-[12px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition", children: "All Pieces →" })
      ] }),
      featured.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-dashed border-border py-24 text-center text-foreground/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "The collection is being curated. Sign in to add the first piece." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: featured.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$id", params: {
        id: p.id
      }, className: "group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] w-full bg-secondary overflow-hidden", children: p.images[0] ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.images[0], alt: p.name, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-foreground/20 text-display text-5xl", children: "EV" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-baseline justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display text-xl", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/50", children: p.category || "—" })
        ] })
      ] }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};
