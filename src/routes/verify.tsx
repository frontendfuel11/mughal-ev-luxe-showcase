import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Check, Mail, AlertTriangle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/SiteHeader";
import { toast } from "sonner";

export const Route = createFileRoute("/verify")({
  validateSearch: z.object({ email: z.string().optional(), reason: z.string().optional() }),
  head: () => ({ meta: [{ title: "Verify Email · Mughal EV Tech" }] }),
  component: Verify,
});

function Verify() {
  const { email, reason } = Route.useSearch();
  const [verified, setVerified] = useState(false);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { if (data.session?.user?.email_confirmed_at) setVerified(true); });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session?.user?.email_confirmed_at) {
        setVerified(true);
        toast.success("Your email is verified.");
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  useEffect(() => {
    if (reason === "unverified") {
      toast.error("Email not verified. Please verify your email to access the admin panel.");
    }
  }, [reason]);
  async function resend() {
    if (!email) return toast.error("Email not provided.");
    const { error } = await supabase.auth.resend({ type: "signup", email });
    if (error) toast.error(error.message); else toast.success("Verification email sent.");
  }
  return (
    <div className="min-h-screen bg-background text-foreground text-ui">
      <SiteHeader />
      <section className="max-w-md mx-auto px-6 pt-24 pb-32 text-center">
        {verified ? (
          <>
            <div className="mb-8 flex items-center justify-center gap-2 rounded-md border border-accent/40 bg-accent/10 text-accent px-4 py-3 text-[12px] uppercase tracking-[0.18em]">
              <Check className="h-4 w-4" /> You are verified
            </div>
            <div className="mx-auto h-20 w-20 rounded-full grid place-items-center bg-accent text-accent-foreground animate-fade-up"><Check className="h-9 w-9" strokeWidth={3} /></div>
            <h1 className="mt-8 text-display text-4xl">Verified.</h1>
            <p className="mt-4 text-foreground/60">Your email has been confirmed.</p>
            <Link to="/admin" className="mt-10 inline-block px-8 py-4 bg-foreground text-background uppercase tracking-[0.2em] text-[12px] hover:bg-accent hover:text-accent-foreground transition-colors">Enter Dashboard</Link>
          </>
        ) : (
          <>
            {reason === "unverified" && (
              <div className="mb-8 flex items-center justify-center gap-2 rounded-md border border-destructive/40 bg-destructive/10 text-destructive px-4 py-3 text-[12px] uppercase tracking-[0.18em]">
                <AlertTriangle className="h-4 w-4" /> Email not verified — admin access blocked
              </div>
            )}
            <div className="mx-auto h-20 w-20 rounded-full grid place-items-center border border-border animate-fade-up"><Mail className="h-8 w-8 text-foreground/60" /></div>
            <h1 className="mt-8 text-display text-4xl">Check your inbox.</h1>
            <p className="mt-4 text-foreground/60">We sent a verification link to {email ? <span className="text-foreground">{email}</span> : "your email"}. Open it to activate your account.</p>
            <button onClick={resend} className="mt-10 text-[12px] uppercase tracking-[0.2em] underline underline-offset-4 hover:text-accent transition">Resend verification email</button>
          </>
        )}
      </section>
    </div>
  );
}