import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/SiteHeader";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  validateSearch: z.object({ mode: z.enum(["signin", "signup"]).optional().default("signin") }),
  head: () => ({ meta: [{ title: "Sign In · Mughal EV Tech" }] }),
  component: AuthPage,
});

function FloatingInput({ label, type = "text", value, onChange, error }: any) {
  return (
    <label className="block relative">
      <input type={type} value={value} onChange={onChange} placeholder=" "
        className={`peer w-full bg-transparent border-b ${error ? "border-destructive" : "border-border focus:border-accent"} outline-none py-3 text-base transition-colors`} />
      <span className="absolute left-0 top-3 text-foreground/50 text-base transition-all duration-200 pointer-events-none peer-focus:-translate-y-5 peer-focus:text-[11px] peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-accent peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:uppercase">{label}</span>
      {error && <span className="block mt-2 text-[11px] text-destructive animate-fade-up">{error}</span>}
    </label>
  );
}

function AuthPage() {
  const { mode: initial } = Route.useSearch();
  const [mode, setMode] = useState<"signin" | "signup">(initial);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { setMode(initial); }, [initial]);
  useEffect(() => { supabase.auth.getSession().then(({ data }) => { if (data.session) navigate({ to: "/admin" }); }); }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: any = {};
    if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Enter a valid email address.";
    if (password.length < 6) errs.password = "At least 6 characters.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/verify` } });
        if (error) throw error;
        toast.success("Account created — check your email to verify.");
        navigate({ to: "/verify", search: { email } as any });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back.");
        navigate({ to: "/admin" });
      }
    } catch (err: any) { toast.error(err.message || "Authentication failed."); }
    finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen bg-background text-foreground text-ui">
      <SiteHeader />
      <section className="max-w-md mx-auto px-6 pt-20 pb-32">
        <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">{mode === "signin" ? "Daakhla — Sign In" : "Naya Khaata — Create Account"}</div>
        <h1 className="mt-3 text-display text-4xl md:text-5xl">{mode === "signin" ? "Welcome back." : "Join the atelier."}</h1>
        <form onSubmit={onSubmit} className="mt-12 space-y-8">
          <FloatingInput label="Email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} error={errors.email} />
          <FloatingInput label="Password" type="password" value={password} onChange={(e: any) => setPassword(e.target.value)} error={errors.password} />
          <button type="submit" disabled={loading} className="w-full py-4 bg-foreground text-background uppercase tracking-[0.2em] text-[12px] hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-50">
            {loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Account"}
          </button>
        </form>
        <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="mt-8 text-[12px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition">
          {mode === "signin" ? "Naya hain? Create an account →" : "Already a member? Sign in →"}
        </button>
      </section>
    </div>
  );
}