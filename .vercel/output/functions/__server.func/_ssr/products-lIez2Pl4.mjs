import { s as supabase } from "./client-NCQ83WsF.mjs";
import "./index-DRbMtvul.mjs";
import "./server-BPcoE4GY.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
async function fetchProducts() {
  const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}
async function fetchProduct(id) {
  const { data, error } = await supabase.from("products").select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return data;
}
export {
  fetchProduct,
  fetchProducts
};
