import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./client-hEFflyU7.mjs";
import { S as SiteHeader } from "./SiteHeader-C6bQemkq.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Route$a } from "./router-Cxdazprl.mjs";
import { C as Check, T as TriangleAlert, M as Mail } from "../_libs/lucide-react.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zod.mjs";
function Verify() {
  const {
    email,
    reason
  } = Route$a.useSearch();
  const [verified, setVerified] = reactExports.useState(false);
  reactExports.useEffect(() => {
    supabase.auth.getSession().then(({
      data
    }) => {
      if (data.session?.user?.email_confirmed_at) setVerified(true);
    });
    const {
      data: sub
    } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session?.user?.email_confirmed_at) {
        setVerified(true);
        toast.success("Your email is verified.");
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  reactExports.useEffect(() => {
    if (reason === "unverified") {
      toast.error("Email not verified. Please verify your email to access the admin panel.");
    }
  }, [reason]);
  async function resend() {
    if (!email) return toast.error("Email not provided.");
    const {
      error
    } = await supabase.auth.resend({
      type: "signup",
      email
    });
    if (error) toast.error(error.message);
    else toast.success("Verification email sent.");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground text-ui", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-md mx-auto px-6 pt-24 pb-32 text-center", children: verified ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center justify-center gap-2 rounded-md border border-accent/40 bg-accent/10 text-accent px-4 py-3 text-[12px] uppercase tracking-[0.18em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
        " You are verified"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-20 w-20 rounded-full grid place-items-center bg-accent text-accent-foreground animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-9 w-9", strokeWidth: 3 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-8 text-display text-4xl", children: "Verified." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-foreground/60", children: "Your email has been confirmed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "mt-10 inline-block px-8 py-4 bg-foreground text-background uppercase tracking-[0.2em] text-[12px] hover:bg-accent hover:text-accent-foreground transition-colors", children: "Enter Dashboard" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      reason === "unverified" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center justify-center gap-2 rounded-md border border-destructive/40 bg-destructive/10 text-destructive px-4 py-3 text-[12px] uppercase tracking-[0.18em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
        " Email not verified — admin access blocked"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-20 w-20 rounded-full grid place-items-center border border-border animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-8 w-8 text-foreground/60" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-8 text-display text-4xl", children: "Check your inbox." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-foreground/60", children: [
        "We sent a verification link to ",
        email ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: email }) : "your email",
        ". Open it to activate your account."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: resend, className: "mt-10 text-[12px] uppercase tracking-[0.2em] underline underline-offset-4 hover:text-accent transition", children: "Resend verification email" })
    ] }) })
  ] });
}
export {
  Verify as component
};
