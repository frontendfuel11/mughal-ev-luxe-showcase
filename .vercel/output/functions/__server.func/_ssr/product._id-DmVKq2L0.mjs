import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as SiteHeader } from "./SiteHeader-BW1cxOlc.mjs";
import { S as SiteFooter } from "./SiteFooter-CT7sU5AC.mjs";
import { fetchProduct } from "./products-nStxe-c1.mjs";
import { b as Route$4 } from "./router-Bgqfnzu1.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowLeft, b as ChevronLeft, c as ChevronRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/zod.mjs";
function ProductPage() {
  const {
    id
  } = Route$4.useParams();
  const {
    data: p,
    isLoading
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id)
  });
  const [idx, setIdx] = reactExports.useState(0);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-40 text-center text-foreground/40", children: "Loading…" })
  ] });
  if (!p) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-40 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60", children: "Piece not found." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "mt-6 inline-block text-sm uppercase tracking-[0.2em] underline", children: "Back to gallery" })
    ] })
  ] });
  const images = p.images.length > 0 ? p.images : [""];
  const current = images[idx] || "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground text-ui", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3 w-3" }),
      " Wapas — Back to Gallery"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1400px] mx-auto px-6 md:px-10 py-12 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] w-full bg-secondary overflow-hidden", children: [
          current ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: current, alt: p.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-foreground/15 text-display text-7xl", children: "EV" }),
          images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIdx((idx - 1 + images.length) % images.length), className: "absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center bg-background/90 backdrop-blur border border-border hover:bg-accent hover:text-accent-foreground transition", "aria-label": "Previous", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIdx((idx + 1) % images.length), className: "absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center bg-background/90 backdrop-blur border border-border hover:bg-accent hover:text-accent-foreground transition", "aria-label": "Next", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) })
          ] })
        ] }),
        images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-5 gap-3", children: images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIdx(i), className: `aspect-square overflow-hidden border ${i === idx ? "border-accent" : "border-border/40 hover:border-foreground/40"} transition-colors`, children: src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-secondary" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:pt-8", children: [
        p.category && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-foreground/50", children: p.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-display text-4xl md:text-6xl leading-[1.05]", children: p.name }),
        p.price && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/50", children: "Qeemat — Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display text-2xl text-foreground", children: p.price })
        ] }),
        p.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-foreground/70 leading-relaxed max-w-prose", children: p.description }),
        p.specs && Object.keys(p.specs).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 border-t border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-foreground/50 mt-6 mb-2", children: "Tafseelat — Specifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "divide-y divide-border/50", children: Object.entries(p.specs).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 py-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-foreground/60 uppercase tracking-[0.12em] text-[12px]", children: k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-foreground", children: String(v) })
          ] }, k)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ProductPage as component
};
