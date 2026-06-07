import { r as reactExports, W as jsxRuntimeExports } from "./server-BPcoE4GY.mjs";
import { u as useNavigate, t as toast } from "./router-DCcxI6VO.mjs";
import { s as supabase } from "./client-NCQ83WsF.mjs";
import { c as createLucideIcon } from "./createLucideIcon-CosNdi4e.mjs";
import { T as Trash2 } from "./trash-2-C-GtkHSG.mjs";
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
function fileToDataUrl(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(String(r.result));
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}
function ProductForm({ existing }) {
  const navigate = useNavigate();
  const [name, setName] = reactExports.useState(existing?.name ?? "");
  const [category, setCategory] = reactExports.useState(existing?.category ?? "");
  const [price, setPrice] = reactExports.useState(existing?.price ?? "");
  const [description, setDescription] = reactExports.useState(existing?.description ?? "");
  const [images, setImages] = reactExports.useState(existing?.images ?? []);
  const [specPairs, setSpecPairs] = reactExports.useState(
    existing?.specs ? Object.entries(existing.specs).map(([k, v]) => ({ k, v: String(v) })) : [{ k: "", v: "" }]
  );
  const [saving, setSaving] = reactExports.useState(false);
  async function onFiles(files) {
    if (!files) return;
    const next = [];
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
      specPairs.filter((s) => s.k.trim()).map((s) => [s.k.trim(), s.v])
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
      owner_id: user.user.id
    };
    const res = existing ? await supabase.from("products").update(payload).eq("id", existing.id) : await supabase.from("products").insert(payload);
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
  const inputCls = "w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-[15px] transition-colors";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/60", children: "Name *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), className: inputCls })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/60", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: category,
            onChange: (e) => setCategory(e.target.value),
            placeholder: "Motor · BMS · Cell…",
            className: inputCls
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/60", children: "Price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: price,
            onChange: (e) => setPrice(e.target.value),
            placeholder: "PKR 450,000",
            className: inputCls
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/60", children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: description,
          onChange: (e) => setDescription(e.target.value),
          rows: 4,
          className: inputCls + " resize-none"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-3", children: "Images (from your device)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center gap-3 px-5 py-4 border border-dashed border-border cursor-pointer hover:border-accent transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] uppercase tracking-[0.2em]", children: "Upload images" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "file",
            accept: "image/*",
            multiple: true,
            className: "hidden",
            onChange: (e) => onFiles(e.target.files)
          }
        )
      ] }),
      images.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-4 md:grid-cols-6 gap-3", children: images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setImages(images.filter((_, j) => j !== i)),
            className: "absolute top-1 right-1 h-7 w-7 grid place-items-center bg-background/90 border border-border hover:text-destructive",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" })
          }
        )
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-3", children: "Specifications" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        specPairs.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_1fr_auto] gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: s.k,
              onChange: (e) => {
                const n = [...specPairs];
                n[i].k = e.target.value;
                setSpecPairs(n);
              },
              placeholder: "Key",
              className: inputCls
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: s.v,
              onChange: (e) => {
                const n = [...specPairs];
                n[i].v = e.target.value;
                setSpecPairs(n);
              },
              placeholder: "Value",
              className: inputCls
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSpecPairs(specPairs.filter((_, j) => j !== i)),
              className: "h-11 w-11 grid place-items-center border border-border hover:border-destructive hover:text-destructive transition",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
            }
          )
        ] }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSpecPairs([...specPairs, { k: "", v: "" }]),
            className: "text-[12px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition",
            children: "+ Add spec"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-6 border-t border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: save,
          disabled: saving,
          className: "px-8 py-4 bg-foreground text-background uppercase tracking-[0.2em] text-[12px] hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-50",
          children: saving ? "Saving…" : existing ? "Save changes" : "Publish piece"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => navigate({ to: "/admin" }),
          className: "px-8 py-4 border border-border uppercase tracking-[0.2em] text-[12px] hover:border-foreground transition",
          children: "Cancel"
        }
      )
    ] })
  ] });
}
export {
  ProductForm as P
};
