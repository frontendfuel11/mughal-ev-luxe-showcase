import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useMatchRoute, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useQueryClient, u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as SiteHeader } from "./SiteHeader-C6bQemkq.mjs";
import { fetchProducts } from "./products-4vbApuqf.mjs";
import { s as supabase } from "./client-hEFflyU7.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { U as Users, P as Plus, d as Pencil, e as Trash2 } from "../_libs/lucide-react.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function AdminLayout() {
  const matchRoute = useMatchRoute();
  const isExact = matchRoute({
    to: "/admin",
    fuzzy: false
  });
  if (!isExact) return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, {});
}
function AdminDashboard() {
  const qc = useQueryClient();
  const {
    data: products = []
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  });
  async function remove(id) {
    if (!confirm("Delete this piece?")) return;
    const {
      error
    } = await supabase.from("products").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Removed.");
    qc.invalidateQueries({
      queryKey: ["products"]
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground text-ui", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-foreground/50", children: "Daftar — Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-display text-5xl md:text-6xl", children: "Catalog" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/users", className: "inline-flex items-center gap-2 px-6 py-3 border border-border uppercase tracking-[0.2em] text-[12px] hover:border-accent hover:text-accent transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
            " Users"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/new", className: "inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background uppercase tracking-[0.2em] text-[12px] hover:bg-accent hover:text-accent-foreground transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            " New Piece"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 border-t border-border/60", children: products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-24 text-center text-foreground/50 text-sm", children: "No pieces yet. Add the first one." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid grid-cols-[80px_1fr_auto] gap-6 items-center py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 bg-secondary overflow-hidden", children: p.images[0] ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.images[0], alt: "", className: "w-full h-full object-cover" }) : null }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-xl", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/50 mt-1", children: [
            p.category || "—",
            " ",
            p.price ? `· ${p.price}` : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/$id/edit", params: {
            id: p.id
          }, className: "h-10 w-10 grid place-items-center border border-border hover:border-accent transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(p.id), className: "h-10 w-10 grid place-items-center border border-border hover:border-destructive hover:text-destructive transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
        ] })
      ] }, p.id)) }) })
    ] })
  ] });
}
export {
  AdminLayout as component
};
