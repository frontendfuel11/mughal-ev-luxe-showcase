import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./client-hEFflyU7.mjs";
function SiteHeader() {
  const [authed, setAuthed] = reactExports.useState(false);
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const loadUser = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      setAuthed(!!session);
      setEmail(session?.user?.email ?? null);
      if (!session?.user) {
        setIsAdmin(false);
        return;
      }
      const { data: roleData, error } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle();
      console.log("Admin Role:", roleData);
      console.log("Role Error:", error);
      setIsAdmin(!!roleData);
    };
    loadUser();
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(() => {
      loadUser();
    });
    return () => subscription.unsubscribe();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40", children: [
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between text-ui", children: [
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          className: "text-display text-xl tracking-tight font-bold",
          children: [
            "Mughal",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "·" }),
            "EV "
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.18em] text-foreground/70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/",
            activeProps: { className: "text-foreground" },
            activeOptions: { exact: true },
            className: "hover:text-foreground transition",
            children: "Ghar"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/gallery",
            activeProps: { className: "text-foreground" },
            className: "hover:text-foreground transition",
            children: "Namaish"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/about",
            activeProps: { className: "text-foreground" },
            className: "hover:text-foreground transition",
            children: "Hamara Tareef"
          }
        ),
        isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/admin",
            className: "hover:text-foreground transition",
            children: "Daftar"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: authed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        email && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            title: email,
            className: "hidden sm:inline max-w-[220px] truncate text-[12px] tracking-[0.05em] text-foreground border border-border/60 rounded-full px-3 py-1",
            children: email
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: async () => {
              await supabase.auth.signOut();
              window.location.href = "/";
            },
            className: "text-[12px] uppercase tracking-[0.18em] text-foreground/60 hover:text-foreground transition",
            children: "Sign Out"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/auth",
            search: { mode: "signin" },
            className: "text-[12px] uppercase tracking-[0.18em] text-foreground/60 hover:text-foreground transition",
            children: "Sign In"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/auth",
            search: { mode: "signup" },
            className: "text-[12px] uppercase tracking-[0.18em] px-4 py-2 bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors",
            children: "Create Account"
          }
        )
      ] }) })
    ] })
  ] });
}
export {
  SiteHeader as S
};
