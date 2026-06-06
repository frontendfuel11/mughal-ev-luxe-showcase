import { supabase } from "@/integrations/supabase/client";

export type Product = {
  id: string;
  owner_id: string;
  name: string;
  category: string | null;
  description: string | null;
  price: string | null;
  specs: Record<string, string> | null;
  images: string[];
  created_at: string;
  updated_at: string;
};

export async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Product[];
}

export async function fetchProduct(id: string): Promise<Product | null> {
  const { data, error } = await supabase.from("products").select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return data as Product | null;
}