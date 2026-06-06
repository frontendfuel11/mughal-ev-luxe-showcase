import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function SiteHeader() {
  const [authed, setAuthed] = useState(false);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setAuthed(!!data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => setAuthed(!!session));
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between text-ui">
        <Link to="/" className="text-display text-xl tracking-tight font-bold">
          Mughal<span className="text-accent">·</span>EV
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.18em] text-foreground/70">
          <Link to="/" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }} className="hover:text-foreground transition">Ghar</Link>
          <Link to="/gallery" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Namaish</Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Hamara Tareef</Link>
          {authed ? (
            <Link to="/admin" className="hover:text-foreground transition">Daftar</Link>
          ) : null}
        </nav>
        <div className="flex items-center gap-3">
          {authed ? (
            <button
              onClick={async () => { await supabase.auth.signOut(); }}
              className="text-[12px] uppercase tracking-[0.18em] text-foreground/60 hover:text-foreground transition"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link to="/auth" search={{ mode: "signin" } as any} className="text-[12px] uppercase tracking-[0.18em] text-foreground/60 hover:text-foreground transition">
                Sign In
              </Link>
              <Link to="/auth" search={{ mode: "signup" } as any} className="text-[12px] uppercase tracking-[0.18em] px-4 py-2 bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors">
                Create Account
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}