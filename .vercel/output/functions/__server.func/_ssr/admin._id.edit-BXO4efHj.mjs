import { W as jsxRuntimeExports } from "./server-BPcoE4GY.mjs";
import { f as Route2, L as Link } from "./router-DCcxI6VO.mjs";
import { u as useQuery } from "./useQuery-BMoZw-FP.mjs";
import { S as SiteHeader } from "./SiteHeader-uTG05msC.mjs";
import { P as ProductForm } from "./ProductForm-D5RjNfCV.mjs";
import { fetchProduct } from "./products-lIez2Pl4.mjs";
import { A as ArrowLeft } from "./arrow-left-Cz_qjN8_.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./types-DBxYw-g_.mjs";
import "./client-NCQ83WsF.mjs";
import "./index-DRbMtvul.mjs";
import "./createLucideIcon-CosNdi4e.mjs";
import "./trash-2-C-GtkHSG.mjs";
function EditPiece() {
  const {
    id
  } = Route2.useParams();
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
