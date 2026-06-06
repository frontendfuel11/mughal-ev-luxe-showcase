import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link, u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { a as useQueryClient, u as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { S as SiteHeader } from "./SiteHeader-BW1cxOlc.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-BHF0Z8aT.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-Dw85PN79.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowLeft, f as CircleCheck, g as CircleX, h as ShieldOff, i as ShieldCheck } from "../_libs/lucide-react.mjs";
import { o as objectType, b as booleanType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
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
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const listUsers = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("392804649a7ada2fdee0597dc35f31b4c801d9f28e2d2a70c1a0ca8d817cfe5f"));
const setUserAdmin = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
  userId: stringType().uuid(),
  admin: booleanType()
}).parse(input)).handler(createSsrRpc("2dbf334ca7bde700fa93ce47268e3db4f707c920da4c5f80915082d50b962d52"));
function AdminUsers() {
  const qc = useQueryClient();
  const fetchUsers = useServerFn(listUsers);
  const toggleAdmin = useServerFn(setUserAdmin);
  const {
    data: users = [],
    isLoading
  } = useQuery({
    queryKey: ["admin", "users"],
    queryFn: () => fetchUsers({})
  });
  const mutation = useMutation({
    mutationFn: (vars) => toggleAdmin({
      data: vars
    }),
    onSuccess: () => {
      toast.success("Role updated.");
      qc.invalidateQueries({
        queryKey: ["admin", "users"]
      });
    },
    onError: (e) => toast.error(e.message ?? "Failed to update role.")
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground text-ui", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin", className: "inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to Catalog"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-foreground/50", children: "Sadasiyat — Members" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-display text-5xl md:text-6xl", children: "Users" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-foreground/60 max-w-xl", children: "Promote or demote admins. Verified accounts can sign in; unverified accounts must confirm their email first." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 border-t border-border/60", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-24 text-center text-foreground/50 text-sm", children: "Loading…" }) : users.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-24 text-center text-foreground/50 text-sm", children: "No users yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60", children: users.map((u) => {
        const isAdmin = u.roles.includes("admin");
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid grid-cols-[1fr_auto_auto] gap-6 items-center py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-lg truncate", children: u.email || "(no email)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-foreground/50", children: [
              u.verified ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-accent", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" }),
                " Verified"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-destructive", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3 w-3" }),
                " Unverified"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(u.created_at).toLocaleDateString() })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] uppercase tracking-[0.2em] px-3 py-1 border ${isAdmin ? "border-accent text-accent" : "border-border text-foreground/60"}`, children: isAdmin ? "Admin" : "User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => mutation.mutate({
            userId: u.id,
            admin: !isAdmin
          }), disabled: mutation.isPending, className: "inline-flex items-center gap-2 px-4 py-2 border border-border text-[12px] uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition disabled:opacity-50", children: isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldOff, { className: "h-4 w-4" }),
            " Demote"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
            " Promote"
          ] }) })
        ] }, u.id);
      }) }) })
    ] })
  ] });
}
export {
  AdminUsers as component
};
