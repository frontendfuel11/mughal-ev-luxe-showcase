import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Trash2, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { Product } from "@/lib/products";

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(String(r.result));
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}

export function ProductForm({ existing }: { existing?: Product }) {
  const navigate = useNavigate();
  const [name, setName] = useState(existing?.name ?? "");
  const [category, setCategory] = useState(existing?.category ?? "");
  const [price, setPrice] = useState(existing?.price ?? "");
  const [description, setDescription] = useState(existing?.description ?? "");
  const [images, setImages] = useState<string[]>(existing?.images ?? []);
  const [specPairs, setSpecPairs] = useState<{ k: string; v: string }[]>(
    existing?.specs
      ? Object.entries(existing.specs).map(([k, v]) => ({ k, v: String(v) }))
      : [{ k: "", v: "" }],
  );
  const [saving, setSaving] = useState(false);

  async function onFiles(files: FileList | null) {
    if (!files) return;
    const next: string[] = [];
    for (const f of Array.from(files)) {
      if (f.size > 4 * 1024 * 1024) {
        toast.error(`${f.name} is over 4MB.`);
        continue;
      }
      next.push(await fileToDataUrl(f));
    }
    setImages((prev) => [...prev, ...next]);
  }

  async function save() {
    if (!name.trim()) return toast.error("Name is required.");
    setSaving(true);
    const specs = Object.fromEntries(
      specPairs.filter((s) => s.k.trim()).map((s) => [s.k.trim(), s.v]),
    );
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) {
      setSaving(false);
      return toast.error("Not signed in.");
    }
    const payload = {
      name: name.trim(),
      category: category.trim() || null,
      price: price.trim() || null,
      description: description.trim() || null,
      images,
      specs,
      owner_id: user.user.id,
    };
    const res = existing
    ? await supabase.from("products").update(payload).eq("id", existing.id)
    : await supabase.from("products").insert(payload);
  
  console.log("USER", user.user);
  console.log("PAYLOAD", payload);
  console.log("SUPABASE RESPONSE", res);
  
  setSaving(false);
  
  if (res.error) {
    console.error(res.error);
    toast.error(res.error.message);
    return;
  }
    toast.success(existing ? "Updated." : "Added to catalog.");
    navigate({ to: "/admin" });
  }

  const inputCls =
    "w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-[15px] transition-colors";

  return (
    <div className="space-y-10">
      <div className="grid md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">Name *</span>
          <input value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
        </label>
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">
            Category
          </span>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Motor · BMS · Cell…"
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">Price</span>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="PKR 450,000"
            className={inputCls}
          />
        </label>
      </div>
      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">
          Description
        </span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className={inputCls + " resize-none"}
        />
      </label>
      <div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-3">
          Images (from your device)
        </div>
        <label className="inline-flex items-center gap-3 px-5 py-4 border border-dashed border-border cursor-pointer hover:border-accent transition">
          <Upload className="h-4 w-4" />
          <span className="text-[12px] uppercase tracking-[0.2em]">Upload images</span>
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => onFiles(e.target.files)}
          />
        </label>
        {images.length > 0 && (
          <div className="mt-4 grid grid-cols-4 md:grid-cols-6 gap-3">
            {images.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden border border-border">
                <img src={src} alt="" className="w-full h-full object-cover" />
                <button
                  onClick={() => setImages(images.filter((_, j) => j !== i))}
                  className="absolute top-1 right-1 h-7 w-7 grid place-items-center bg-background/90 border border-border hover:text-destructive"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-3">
          Specifications
        </div>
        <div className="space-y-2">
          {specPairs.map((s, i) => (
            <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2">
              <input
                value={s.k}
                onChange={(e) => {
                  const n = [...specPairs];
                  n[i].k = e.target.value;
                  setSpecPairs(n);
                }}
                placeholder="Key"
                className={inputCls}
              />
              <input
                value={s.v}
                onChange={(e) => {
                  const n = [...specPairs];
                  n[i].v = e.target.value;
                  setSpecPairs(n);
                }}
                placeholder="Value"
                className={inputCls}
              />
              <button
                onClick={() => setSpecPairs(specPairs.filter((_, j) => j !== i))}
                className="h-11 w-11 grid place-items-center border border-border hover:border-destructive hover:text-destructive transition"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
          <button
            onClick={() => setSpecPairs([...specPairs, { k: "", v: "" }])}
            className="text-[12px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition"
          >
            + Add spec
          </button>
        </div>
      </div>
      <div className="flex gap-3 pt-6 border-t border-border/60">
        <button
          onClick={save}
          disabled={saving}
          className="px-8 py-4 bg-foreground text-background uppercase tracking-[0.2em] text-[12px] hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-50"
        >
          {saving ? "Saving…" : existing ? "Save changes" : "Publish piece"}
        </button>
        <button
          onClick={() => navigate({ to: "/admin" })}
          className="px-8 py-4 border border-border uppercase tracking-[0.2em] text-[12px] hover:border-foreground transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
