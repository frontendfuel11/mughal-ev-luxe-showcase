import { r as reactExports, W as jsxRuntimeExports } from "./server-BPcoE4GY.mjs";
import { R as Route$a, t as toast, L as Link } from "./router-DCcxI6VO.mjs";
import { s as supabase } from "./client-NCQ83WsF.mjs";
import { S as SiteHeader } from "./SiteHeader-uTG05msC.mjs";
import { c as createLucideIcon } from "./createLucideIcon-CosNdi4e.mjs";
import { M as Mail } from "./mail-CDTLGArq.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./types-DBxYw-g_.mjs";
import "./index-DRbMtvul.mjs";
const __iconNode$1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
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
