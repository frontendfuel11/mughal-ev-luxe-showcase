import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as SiteHeader } from "./SiteHeader-BW1cxOlc.mjs";
import { P as ProductForm } from "./ProductForm-DxNlKm_D.mjs";
import { fetchProduct } from "./products-nStxe-c1.mjs";
import { c as Route } from "./router-Bgqfnzu1.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowLeft } from "../_libs/lucide-react.mjs";
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
function EditPiece() {
  const {
    id
  } = Route.useParams();
  const {
    data: product,
    isLoading
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id)
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground text-ui", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-3xl mx-auto px-6 pt-12 pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin", className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3 w-3" }),
        " Back"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-display text-5xl", children: "Refine the piece." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50", children: "Loading…" }) : product ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProductForm, { existing: product }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Not found." }) })
    ] })
  ] });
}
export {
  EditPiece as component
};
