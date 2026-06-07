import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { S as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster } from "../_libs/sonner.mjs";
import { s as supabase } from "./client-BtLc1A20.mjs";
import { o as objectType, s as stringType, e as enumType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const appCss = "/assets/styles-ChPsxPt4.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mughal EV Tech" },
      { name: "description", content: "Deal in All kind of Evee parts" },
      { name: "author", content: "EV" },
      { property: "og:title", content: "EV" },
      { property: "og:description", content: "selling all kind of Evee parts" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center", theme: "light" })
  ] });
}
const $$splitComponentImporter$a = () => import("./verify-BMy45ndl.mjs");
const Route$a = createFileRoute("/verify")({
  validateSearch: objectType({
    email: stringType().optional(),
    reason: stringType().optional()
  }),
  head: () => ({
    meta: [{
      title: "Verify Email · Mughal EV Tech"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./gallery-glc7C9B_.mjs");
const Route$9 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Namaish — Gallery · Mughal EV Tech"
    }, {
      name: "description",
      content: "Browse the full curated catalog of EV components."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./auth-Dc4e8u42.mjs");
const Route$8 = createFileRoute("/auth")({
  validateSearch: objectType({
    mode: enumType(["signin", "signup"]).optional().default("signin")
  }),
  head: () => ({
    meta: [{
      title: "Sign In · Mughal EV Tech"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./about-DjO3ci8Z.mjs");
const Route$7 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Hamara Tareef — About · Mughal EV Tech"
    }, {
      name: "description",
      content: "Heritage, craft and showroom of Mughal EV Tech, Pakistan."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./route-BFsOu0JM.mjs");
const Route$6 = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const {
      data,
      error
    } = await supabase.auth.getUser();
    if (error || !data.user) {
      throw redirect({
        to: "/auth",
        search: {
          mode: "signin"
        }
      });
    }
    if (!data.user.email_confirmed_at) {
      throw redirect({
        to: "/verify",
        search: {
          email: data.user.email,
          reason: "unverified"
        }
      });
    }
    const {
      data: role
    } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id).eq("role", "admin").maybeSingle();
    if (!role) {
      throw redirect({
        to: "/",
        search: {
          forbidden: "1"
        }
      });
    }
    return {
      user: data.user
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./index-D1m2E7Va.mjs");
const Route$5 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Mughal EV Tech — Elite Electric Vehicle Components"
    }, {
      name: "description",
      content: "Pakistan's bespoke gallery of high-performance EV spare parts. Scan, explore, specify."
    }, {
      property: "og:title",
      content: "Mughal EV Tech"
    }, {
      property: "og:description",
      content: "Elite electric vehicle components, curated as a luxury showcase."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./product._id-BoBLJ9tL.mjs");
const Route$4 = createFileRoute("/product/$id")({
  head: () => ({
    meta: [{
      title: "Piece · Mughal EV Tech"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admin-Cng7Gcjc.mjs");
const Route$3 = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [{
      title: "Dashboard · Mughal EV Tech"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admin.users-D1KYSP_7.mjs");
const Route$2 = createFileRoute("/_authenticated/admin/users")({
  head: () => ({
    meta: [{
      title: "Users · Mughal EV Tech"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.new-DM3d8YJT.mjs");
const Route$1 = createFileRoute("/_authenticated/admin/new")({
  head: () => ({
    meta: [{
      title: "New Piece · Mughal EV Tech"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin._id.edit-CniCLdDJ.mjs");
const Route = createFileRoute("/_authenticated/admin/$id/edit")({
  head: () => ({
    meta: [{
      title: "Edit Piece · Mughal EV Tech"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const VerifyRoute = Route$a.update({
  id: "/verify",
  path: "/verify",
  getParentRoute: () => Route$b
});
const GalleryRoute = Route$9.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$b
});
const AuthRoute = Route$8.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$b
});
const AboutRoute = Route$7.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$b
});
const AuthenticatedRouteRoute = Route$6.update({
  id: "/_authenticated",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const ProductIdRoute = Route$4.update({
  id: "/product/$id",
  path: "/product/$id",
  getParentRoute: () => Route$b
});
const AuthenticatedAdminRoute = Route$3.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedAdminUsersRoute = Route$2.update({
  id: "/users",
  path: "/users",
  getParentRoute: () => AuthenticatedAdminRoute
});
const AuthenticatedAdminNewRoute = Route$1.update({
  id: "/new",
  path: "/new",
  getParentRoute: () => AuthenticatedAdminRoute
});
const AuthenticatedAdminIdEditRoute = Route.update({
  id: "/$id/edit",
  path: "/$id/edit",
  getParentRoute: () => AuthenticatedAdminRoute
});
const AuthenticatedAdminRouteChildren = {
  AuthenticatedAdminNewRoute,
  AuthenticatedAdminUsersRoute,
  AuthenticatedAdminIdEditRoute
};
const AuthenticatedAdminRouteWithChildren = AuthenticatedAdminRoute._addFileChildren(AuthenticatedAdminRouteChildren);
const AuthenticatedRouteRouteChildren = {
  AuthenticatedAdminRoute: AuthenticatedAdminRouteWithChildren
};
const AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
  AboutRoute,
  AuthRoute,
  GalleryRoute,
  VerifyRoute,
  ProductIdRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$a as R,
  Route$8 as a,
  Route$4 as b,
  Route as c,
  router as r
};
