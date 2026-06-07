import { a4 as TSS_SERVER_FUNCTION, a5 as createServerFn } from "./server-BPcoE4GY.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-CBkqrzGF.mjs";
import { o as objectType, b as booleanType, s as stringType } from "./types-DBxYw-g_.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./index-DRbMtvul.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
async function assertAdmin(supabase, userId) {
  const {
    data,
    error
  } = await supabase.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin").maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Forbidden: admin access required");
}
const listUsers_createServerFn_handler = createServerRpc({
  id: "392804649a7ada2fdee0597dc35f31b4c801d9f28e2d2a70c1a0ca8d817cfe5f",
  name: "listUsers",
  filename: "src/lib/admin-users.functions.ts"
}, (opts) => listUsers.__executeServer(opts));
const listUsers = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(listUsers_createServerFn_handler, async ({
  context
}) => {
  await assertAdmin(context.supabase, context.userId);
  const {
    supabaseAdmin
  } = await import("./client.server-xHirR9fs.mjs");
  const {
    data: usersData,
    error: uErr
  } = await supabaseAdmin.auth.admin.listUsers({
    perPage: 200
  });
  if (uErr) throw new Error(uErr.message);
  const {
    data: roles,
    error: rErr
  } = await supabaseAdmin.from("user_roles").select("user_id, role");
  if (rErr) throw new Error(rErr.message);
  const roleMap = /* @__PURE__ */ new Map();
  for (const r of roles ?? []) {
    const arr = roleMap.get(r.user_id) ?? [];
    arr.push(r.role);
    roleMap.set(r.user_id, arr);
  }
  return usersData.users.map((u) => ({
    id: u.id,
    email: u.email ?? "",
    verified: !!u.email_confirmed_at,
    created_at: u.created_at,
    roles: roleMap.get(u.id) ?? []
  }));
});
const setUserAdmin_createServerFn_handler = createServerRpc({
  id: "2dbf334ca7bde700fa93ce47268e3db4f707c920da4c5f80915082d50b962d52",
  name: "setUserAdmin",
  filename: "src/lib/admin-users.functions.ts"
}, (opts) => setUserAdmin.__executeServer(opts));
const setUserAdmin = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
  userId: stringType().uuid(),
  admin: booleanType()
}).parse(input)).handler(setUserAdmin_createServerFn_handler, async ({
  data,
  context
}) => {
  await assertAdmin(context.supabase, context.userId);
  if (data.userId === context.userId && !data.admin) {
    throw new Error("You cannot remove your own admin role.");
  }
  const {
    supabaseAdmin
  } = await import("./client.server-xHirR9fs.mjs");
  if (data.admin) {
    const {
      error
    } = await supabaseAdmin.from("user_roles").upsert({
      user_id: data.userId,
      role: "admin"
    }, {
      onConflict: "user_id,role"
    });
    if (error) throw new Error(error.message);
  } else {
    const {
      error
    } = await supabaseAdmin.from("user_roles").delete().eq("user_id", data.userId).eq("role", "admin");
    if (error) throw new Error(error.message);
  }
  return {
    ok: true
  };
});
export {
  listUsers_createServerFn_handler,
  setUserAdmin_createServerFn_handler
};
