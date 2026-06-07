import { a7 as useMatchRoute, W as jsxRuntimeExports, a2 as Outlet } from "./server-BPcoE4GY.mjs";
import { c as useQueryClient, L as Link, t as toast } from "./router-DCcxI6VO.mjs";
import { u as useQuery } from "./useQuery-BMoZw-FP.mjs";
import { S as SiteHeader } from "./SiteHeader-uTG05msC.mjs";
import { fetchProducts } from "./products-lIez2Pl4.mjs";
import { s as supabase } from "./client-NCQ83WsF.mjs";
import { c as createLucideIcon } from "./createLucideIcon-CosNdi4e.mjs";
import { T as Trash2 } from "./trash-2-C-GtkHSG.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./types-DBxYw-g_.mjs";
import "./index-DRbMtvul.mjs";
const __iconNode$2 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
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
