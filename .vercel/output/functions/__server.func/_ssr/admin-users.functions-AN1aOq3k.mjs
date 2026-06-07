import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-B7N1Qe6K.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-DC5eSQ96.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, b as booleanType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
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
  } = await import("./client.server-D5ro3rAQ.mjs");
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
  } = await import("./client.server-D5ro3rAQ.mjs");
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
