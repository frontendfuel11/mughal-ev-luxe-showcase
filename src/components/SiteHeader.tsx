import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function SiteHeader() {
const [authed, setAuthed] = useState(false);
const [isAdmin, setIsAdmin] = useState(false);
const [email, setEmail] = useState<string | null>(null);

useEffect(() => {
const loadUser = async () => {
const {
data: { session },
} = await supabase.auth.getSession();

  setAuthed(!!session);
  setEmail(session?.user?.email ?? null);

  if (!session?.user) {
    setIsAdmin(false);
    return;
  }

  const { data: roleData, error } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", session.user.id)
    .eq("role", "admin")
    .maybeSingle();

  console.log("Admin Role:", roleData);
  console.log("Role Error:", error);

  setIsAdmin(!!roleData);
};

loadUser();

const {
  data: { subscription },
} = supabase.auth.onAuthStateChange(() => {
  loadUser();
});

return () => subscription.unsubscribe();

}, []);

return ( <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40"> <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between text-ui"> <Link
       to="/"
       className="text-display text-xl tracking-tight font-bold"
     >
Mughal<span className="text-accent">·</span>EV </Link>

    <nav className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.18em] text-foreground/70">
      <Link
        to="/"
        activeProps={{ className: "text-foreground" }}
        activeOptions={{ exact: true }}
        className="hover:text-foreground transition"
      >
        Ghar
      </Link>

      <Link
        to="/gallery"
        activeProps={{ className: "text-foreground" }}
        className="hover:text-foreground transition"
      >
        Namaish
      </Link>

      <Link
        to="/about"
        activeProps={{ className: "text-foreground" }}
        className="hover:text-foreground transition"
      >
        Hamara Tareef
      </Link>

      {isAdmin && (
        <Link
          to="/admin"
          className="hover:text-foreground transition"
        >
          Daftar
        </Link>
      )}
    </nav>

    <div className="flex items-center gap-3">
      {authed ? (
        <>
          {email && (
            <span
              title={email}
              className="hidden sm:inline max-w-[220px] truncate text-[12px] tracking-[0.05em] text-foreground/70 border border-border/60 rounded-full px-3 py-1"
            >
              {email}
            </span>
          )}

          <button
            onClick={async () => {
              await supabase.auth.signOut();
              window.location.href = "/";
            }}
            className="text-[12px] uppercase tracking-[0.18em] text-foreground/60 hover:text-foreground transition"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <Link
            to="/auth"
            search={{ mode: "signin" } as any}
            className="text-[12px] uppercase tracking-[0.18em] text-foreground/60 hover:text-foreground transition"
          >
            Sign In
          </Link>

          <Link
            to="/auth"
            search={{ mode: "signup" } as any}
            className="text-[12px] uppercase tracking-[0.18em] px-4 py-2 bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Create Account
          </Link>
        </>
      )}
    </div>
  </div>
</header>

);
}
