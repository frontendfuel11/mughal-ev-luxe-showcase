import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ShieldCheck, ShieldOff, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { listUsers, setUserAdmin } from "@/lib/admin-users.functions";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/users")({
  head: () => ({ meta: [{ title: "Users · Mughal EV Tech" }] }),
  component: AdminUsers,
});

function AdminUsers() {
  const qc = useQueryClient();
  const fetchUsers = useServerFn(listUsers);
  const toggleAdmin = useServerFn(setUserAdmin);

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["admin", "users"],
    queryFn: () => fetchUsers({}),
  });

  const mutation = useMutation({
    mutationFn: (vars: { userId: string; admin: boolean }) =>
      toggleAdmin({ data: vars }),
    onSuccess: () => {
      toast.success("Role updated.");
      qc.invalidateQueries({ queryKey: ["admin", "users"] });
    },
    onError: (e: any) => toast.error(e.message ?? "Failed to update role."),
  });

  return (
    <div className="min-h-screen bg-background text-foreground text-ui">
      <SiteHeader />
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-32">
        <Link
          to="/admin"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Catalog
        </Link>
        <div className="mt-6">
          <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">Sadasiyat — Members</div>
          <h1 className="mt-3 text-display text-5xl md:text-6xl">Users</h1>
          <p className="mt-4 text-foreground/60 max-w-xl">
            Promote or demote admins. Verified accounts can sign in; unverified accounts must confirm their email first.
          </p>
        </div>
        <div className="mt-16 border-t border-border/60">
          {isLoading ? (
            <div className="py-24 text-center text-foreground/50 text-sm">Loading…</div>
          ) : users.length === 0 ? (
            <div className="py-24 text-center text-foreground/50 text-sm">No users yet.</div>
          ) : (
            <ul className="divide-y divide-border/60">
              {users.map((u) => {
                const isAdmin = u.roles.includes("admin");
                return (
                  <li key={u.id} className="grid grid-cols-[1fr_auto_auto] gap-6 items-center py-5">
                    <div className="min-w-0">
                      <div className="text-display text-lg truncate">{u.email || "(no email)"}</div>
                      <div className="mt-1 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                        {u.verified ? (
                          <span className="inline-flex items-center gap-1 text-accent">
                            <CheckCircle2 className="h-3 w-3" /> Verified
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-destructive">
                            <XCircle className="h-3 w-3" /> Unverified
                          </span>
                        )}
                        <span>{new Date(u.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className={`text-[11px] uppercase tracking-[0.2em] px-3 py-1 border ${isAdmin ? "border-accent text-accent" : "border-border text-foreground/60"}`}>
                      {isAdmin ? "Admin" : "User"}
                    </span>
                    <button
                      onClick={() => mutation.mutate({ userId: u.id, admin: !isAdmin })}
                      disabled={mutation.isPending}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border text-[12px] uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition disabled:opacity-50"
                    >
                      {isAdmin
                        ? (<><ShieldOff className="h-4 w-4" /> Demote</>)
                        : (<><ShieldCheck className="h-4 w-4" /> Promote</>)}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
