import { useState } from "react";
import { buildMailto, buildWhatsAppUrl } from "@/lib/sales";

const BRANDS = ["La Roche-Posay","The Ordinary","Olaplex","Bioderma","CeraVe","Vichy","Garnier","L'Oréal","Maybelline","Victoria's Secret","Other / Mixed"];
const VOLUMES = ["1–10 cartons","10–50 cartons","50–200 cartons","Full pallet","Full container (20ft)","Full container (40ft)"];
const CONTACTS = ["Email","WhatsApp","Phone call","Video meeting"] as const;
type Contact = typeof CONTACTS[number];

export function Wholesale() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    brand: BRANDS[0],
    volume: VOLUMES[0],
    contact: "Email" as Contact,
    notes: "",
  });

  const buildBody = () =>
`New wholesale pricing request

— Company: ${form.company}
— Contact name: ${form.name}
— Email: ${form.email}
— Phone / WhatsApp: ${form.phone}
— Destination country: ${form.country}
— Brand of interest: ${form.brand}
— Volume: ${form.volume}
— Preferred contact method: ${form.contact}

Notes:
${form.notes || "(none)"}`;

  const subject = `Wholesale request — ${form.brand} · ${form.volume}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const useWa = form.contact === "WhatsApp";
    const url = useWa ? buildWhatsAppUrl(buildBody()) : buildMailto(subject, buildBody());
    window.open(url, useWa ? "_blank" : "_self");
  };

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <section id="wholesale" className="py-28 bg-gradient-champagne relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,oklch(0.96_0.04_30),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">For Buyers & Distributors</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
            Request <span className="italic text-gradient-gold">wholesale</span> pricing
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Tell us what you need — brand, volume and destination — and our wholesale desk will reply
            within one business day with tiered pricing, MOQ, lead times and shipping options.
          </p>

          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Tiered pricing from carton to container loads",
              "Authentic stock with full documentation",
              "Delivery in EXW, FOB, CIF or DDP",
              "Reply within 24 business hours",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-foreground text-background flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7"/></svg>
                </span>
                <span className="text-foreground/80">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 shadow-luxe space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Text label="Company" required value={form.company} onChange={(v) => set("company", v)} />
            <Text label="Full name" required value={form.name} onChange={(v) => set("name", v)} />
            <Text label="Business email" type="email" required value={form.email} onChange={(v) => set("email", v)} />
            <Text label="Phone / WhatsApp" value={form.phone} onChange={(v) => set("phone", v)} />
            <Text label="Destination country" required value={form.country} onChange={(v) => set("country", v)} />
            <Select label="Brand of interest" value={form.brand} onChange={(v) => set("brand", v)} options={BRANDS} />
            <Select label="Order volume" value={form.volume} onChange={(v) => set("volume", v)} options={VOLUMES} />
            <Select label="Preferred contact" value={form.contact} onChange={(v) => set("contact", v as Contact)} options={CONTACTS as unknown as string[]} />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Notes (SKUs, deadlines…)</label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
              className="w-full rounded-2xl bg-background/60 border border-border focus:border-accent outline-none px-4 py-3 text-sm transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-foreground text-background py-4 text-sm font-medium hover:bg-accent transition-colors shadow-luxe"
          >
            Send to Sales Team
          </button>
          <p className="text-xs text-center text-muted-foreground">
            Sent via your preferred channel — opens email or WhatsApp prefilled with your request.
          </p>
        </form>
      </div>
    </section>
  );
}

function Text({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}{required && <span className="text-accent"> *</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl bg-background/60 border border-border focus:border-accent outline-none px-4 py-3 text-sm transition-colors"
      />
    </label>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl bg-background/60 border border-border focus:border-accent outline-none px-4 py-3 text-sm transition-colors appearance-none bg-no-repeat bg-[right_1rem_center]"
        style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>\")" }}
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
