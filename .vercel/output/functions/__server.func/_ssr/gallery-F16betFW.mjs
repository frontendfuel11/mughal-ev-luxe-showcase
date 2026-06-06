import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as SiteHeader } from "./SiteHeader-BW1cxOlc.mjs";
import { S as SiteFooter } from "./SiteFooter-CT7sU5AC.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { fetchProducts } from "./products-nStxe-c1.mjs";
import { S as Search, E as Eye } from "../_libs/lucide-react.mjs";
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
function ProductCard({ p }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group relative w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$id", params: { id: p.id }, className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-[4/5] bg-secondary overflow-hidden", children: [
      p.images[0] ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.images[0], alt: p.name, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]", loading: "lazy" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center text-foreground/15 text-display text-6xl", children: "EV" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 h-9 w-9 grid place-items-center bg-background/90 backdrop-blur border border-border/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) }),
      p.category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] px-2 py-1 bg-background/90 backdrop-blur", children: p.category })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-baseline justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display text-lg md:text-xl truncate", children: p.name }),
      p.price && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.18em] text-foreground/60 shrink-0", children: p.price })
    ] })
  ] }) });
}
function Gallery() {
  const [q, setQ] = reactExports.useState("");
  const {
    data: products = [],
    isLoading
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  });
  const filtered = reactExports.useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return products;
    return products.filter((p) => p.name.toLowerCase().includes(s) || (p.category ?? "").toLowerCase().includes(s) || (p.description ?? "").toLowerCase().includes(s));
  }, [products, q]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground text-ui", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1400px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-foreground/50", children: "Namaish — Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-display text-5xl md:text-7xl", children: "The Atelier" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 group flex items-center gap-3 border-b border-border focus-within:border-accent transition-colors py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-foreground/40 group-focus-within:text-accent transition-colors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search by name, category, spec…", className: "flex-1 bg-transparent outline-none text-base placeholder:text-foreground/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/40", children: [
          filtered.length,
          " pieces"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-[1400px] mx-auto px-6 md:px-10 pb-32", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-32 text-center text-foreground/40 text-sm", children: "Loading collection…" }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-dashed border-border py-32 text-center text-foreground/50 text-sm", children: "No pieces match. Try another search." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { p }, p.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Gallery as component
};
