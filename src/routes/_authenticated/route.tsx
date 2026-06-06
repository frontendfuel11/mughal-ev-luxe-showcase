import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();

    // Not logged in → go to sign in
    if (error || !data.user) {
      throw redirect({ to: "/auth", search: { mode: "signin" } as any });
    }

    // Email not confirmed → go to verify page
    if (!data.user.email_confirmed_at) {
      throw redirect({
        to: "/verify",
        search: { email: data.user.email, reason: "unverified" } as any,
      });
    }

    // Check admin role
    const { data: role } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", data.user.id)
      .eq("role", "admin")
      .maybeSingle();

    // Not admin → go home
    if (!role) {
      throw redirect({ to: "/", search: { forbidden: "1" } as any });
    }

    return { user: data.user };
  },
  component: () => <Outlet />,
});
