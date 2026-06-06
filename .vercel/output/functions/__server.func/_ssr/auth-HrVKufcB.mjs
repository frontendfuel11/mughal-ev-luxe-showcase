import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./client-BtLc1A20.mjs";
import { S as SiteHeader } from "./SiteHeader-BW1cxOlc.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as Route$8 } from "./router-CSrtkTmY.mjs";
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
function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  error
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, value, onChange, placeholder: " ", className: `peer w-full bg-transparent border-b ${error ? "border-destructive" : "border-border focus:border-accent"} outline-none py-3 text-base transition-colors` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-3 text-foreground/50 text-base transition-all duration-200 pointer-events-none peer-focus:-translate-y-5 peer-focus:text-[11px] peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:uppercase", children: label }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-2 text-[11px] text-destructive animate-fade-up", children: error })
  ] });
}
function AuthPage() {
  const {
    mode: initial
  } = Route$8.useSearch();
  const [mode, setMode] = reactExports.useState(initial);
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(false);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    setMode(initial);
  }, [initial]);
  reactExports.useEffect(() => {
    supabase.auth.getSession().then(({
      data
    }) => {
      if (data.session) navigate({
        to: "/admin"
      });
    });
  }, [navigate]);
  async function onSubmit(e) {
    e.preventDefault();
    const errs = {};
    if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Enter a valid email address.";
    if (password.length < 6) errs.password = "At least 6 characters.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    try {
      if (mode === "signup") {
        const {
          error
        } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/verify`
          }
        });
        if (error) throw error;
        toast.success("Account created — check your email to verify.");
        navigate({
          to: "/verify",
          search: {
            email
          }
        });
      } else {
        const {
          error
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;
        toast.success("Welcome back.");
        navigate({
          to: "/admin"
        });
      }
    } catch (err) {
      toast.error(err.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground text-ui", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-md mx-auto px-6 pt-20 pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-foreground/50", children: mode === "signin" ? "Daakhla — Sign In" : "Naya Khaata — Create Account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-display text-4xl md:text-5xl", children: mode === "signin" ? "Welcome back." : "Join the atelier." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-12 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), error: errors.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), error: errors.password }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "w-full py-4 bg-foreground text-background uppercase tracking-[0.2em] text-[12px] hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-50", children: loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Account" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode(mode === "signin" ? "signup" : "signin"), className: "mt-8 text-[12px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition", children: mode === "signin" ? "Naya hain? Create an account →" : "Already a member? Sign in →" })
    ] })
  ] });
}
export {
  AuthPage as component
};
