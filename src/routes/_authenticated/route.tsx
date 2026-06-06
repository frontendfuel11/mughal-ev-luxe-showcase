import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated")({
ssr: false,

beforeLoad: async () => {
const {
data: { user },
error,
} = await supabase.auth.getUser();

// Not logged in
if (error || !user) {
  throw redirect({
    to: "/auth",
    search: { mode: "signin" } as any,
  });
}

// Email not verified
if (!user.email_confirmed_at) {
  throw redirect({
    to: "/verify",
    search: {
      email: user.email,
      reason: "unverified",
    } as any,
  });
}

// Check admin role
const { data: roleData, error: roleError } = await supabase
  .from("user_roles")
  .select("*")
  .eq("user_id", user.id)
  .eq("role", "admin")
  .maybeSingle();

console.log("Current User:", user.id);
console.log("Role Data:", roleData);
console.log("Role Error:", roleError);

if (roleError) {
  console.error("Role lookup failed:", roleError);

  throw redirect({
    to: "/",
  });
}

if (!roleData) {
  throw redirect({
    to: "/",
    search: { forbidden: "1" } as any,
  });
}

return {
  user,
  isAdmin: true,
};

},

component: () => <Outlet />,
});
