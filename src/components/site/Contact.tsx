import { useState } from "react";
import { buildMailto, buildWhatsAppUrl, SALES_EMAIL } from "@/lib/sales";

function Field({ label, type = "text", as = "input", name, value, onChange }: { label: string; type?: string; as?: "input" | "textarea"; name: string; value: string; onChange: (v: string) => void }) {
  const filled = value.length > 0;
  const common = "peer w-full bg-transparent outline-none border-b border-foreground/20 focus:border-accent transition-colors py-3 text-foreground";
  return (
    <label className="relative block">
      {as === "textarea" ? (
        <textarea name={name} rows={4} value={value} onChange={(e) => onChange(e.target.value)} className={common} />
      ) : (
        <input name={name} type={type} value={value} onChange={(e) => onChange(e.target.value)} className={common} />
      )}
      <span
        className={`pointer-events-none absolute left-0 transition-all duration-300 text-muted-foreground ${
          filled ? "-top-2 text-xs text-accent" : "top-3 text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

function ContactDetail({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="group flex items-center justify-between gap-4 rounded-3xl border border-border bg-background/70 px-5 py-5 transition hover:border-accent">
      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
        <div className="mt-2 text-sm font-semibold text-foreground">{value}</div>
      </div>
      {href ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground transition group-hover:translate-x-1">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      ) : null}
    </div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  ) : (
    content
  );
}

const offices = [
  {
    title: "Headquarters",
    location: "249 Murray Ross Parkway, North York, Ontario, M3J0G4, Canada",
    badge: "Toronto HQ",
  },
  {
    title: "Branch Office",
    location: "Paris, France",
    badge: "EU Operations",
  },
];

const supportHighlights = [
  "Authorized distributor connectivity",
  "Pre-order sourcing for high-demand beauty products",
  "Export-ready documentation and customs coordination",
  "Worldwide freight and DDP support",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", country: "", message: "" });
  const set = <K extends keyof typeof form>(k: K, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const buildBody = () =>
`Hello Cosmetics & Skincare Distr,

${form.message || "I'd like to discuss an international wholesale opportunity."}

— Name: ${form.name}
— Company: ${form.company}
— Email: ${form.email}
— Destination country: ${form.country}`;

  const subject = `Inquiry from ${form.company || form.name || "website visitor"}`;

  const onEmail = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = buildMailto(subject, buildBody());
  };

  const onWhatsApp = () => {
    window.open(buildWhatsAppUrl(buildBody()), "_blank");
  };

  return (
    <section id="contact" className="py-28 bg-gradient-blush relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,224,208,0.25),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.12),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-6 space-y-20">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-8">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Contact & Support</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Premium global contact for authentic cosmetics and skincare distribution
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Cosmetics &amp; Skincare Distr is a Canadian-based sourcing and distribution company that supports wholesalers,
              retailers, department stores and consumers worldwide. Talk to our team for direct sourcing, verified authenticity,
              and international logistics support.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-3xl p-8 shadow-luxe border border-border">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Enterprise Support</div>
                <div className="mt-4 font-display text-3xl">Global distribution coverage</div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Strategic logistics, bonded warehousing, and export-ready documentation for premium beauty shipments from Toronto to the world.
                </p>
              </div>
              <div className="glass rounded-3xl p-8 shadow-luxe border border-border">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Quick Connect</div>
                <div className="mt-4 font-display text-3xl">WhatsApp priority access</div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Use our dedicated WhatsApp channel for immediate commercial inquiries and wholesale availability checks.
                </p>
              </div>
            </div>
            <div className="glass rounded-3xl p-8 shadow-luxe border border-border">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact details</div>
              <div className="mt-6 grid gap-4">
                <ContactDetail label="Email" value={SALES_EMAIL} href={`mailto:${SALES_EMAIL}`} />
                <ContactDetail label="Phone" value="202-555-0188" href="tel:2025550188" />
                <ContactDetail label="WhatsApp" value="+1 807 695 6835" href={buildWhatsAppUrl("Hello Cosmetics & Skincare Distr, I'd like to enquire about wholesale pricing.")} />
                <ContactDetail label="Office hours" value="Mon–Fri · 09:00–17:00 ET" />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(255,230,215,0.2),transparent_30%)] shadow-luxe">
            <img
              src="https://images.unsplash.com/photo-1498079023802-8a7b8c9cf6b2?w=1200&q=80"
              alt="Executive logistics and warehouse operations"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir/80 to-transparent p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Global Operations</div>
              <div className="mt-3 font-display text-3xl text-white">Toronto and Paris office network</div>
              <p className="mt-3 max-w-md text-sm text-white/80">
                Direct sourcing from official distributors, supported by bonded warehousing and customs coordination across Europe and North America.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="glass rounded-3xl p-8 md:p-10 shadow-luxe border border-border">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Office Network</div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {offices.map((office) => (
                  <div key={office.title} className="rounded-3xl bg-background/70 p-6 border border-border shadow-luxe">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{office.title}</p>
                          <div className="mt-3 text-xl font-semibold text-foreground">{office.badge}</div>
                        </div>
                        <span className="rounded-full bg-foreground/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-foreground">
                          {office.badge}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">{office.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 md:p-10 shadow-luxe border border-border">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Distribution Support</div>
              <h3 className="mt-4 font-display text-3xl">International logistics and verified sourcing</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our international distribution support includes global freight coordination, export documentation,
                pre-order availability, and compliance with authorized distributor requirements.
              </p>
              <ul className="mt-6 space-y-4 text-muted-foreground text-sm">
                {supportHighlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-foreground text-background flex items-center justify-center">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7"/></svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form onSubmit={onEmail} className="glass rounded-3xl p-8 md:p-10 shadow-luxe border border-border space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Reach Our Team</p>
              <h3 className="mt-3 font-display text-3xl">Submit a direct inquiry</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Full name" value={form.name} onChange={(v) => set("name", v)} />
              <Field name="company" label="Company" value={form.company} onChange={(v) => set("company", v)} />
              <Field name="email" type="email" label="Business email" value={form.email} onChange={(v) => set("email", v)} />
              <Field name="country" label="Destination country" value={form.country} onChange={(v) => set("country", v)} />
            </div>
            <Field name="message" as="textarea" label="Brands, volumes, requirements" value={form.message} onChange={(v) => set("message", v)} />
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="submit"
                className="w-full rounded-full bg-foreground text-background py-4 text-sm font-medium hover:bg-accent transition-colors shadow-luxe"
              >
                Send via Email
              </button>
              <button
                type="button"
                onClick={onWhatsApp}
                className="w-full rounded-full bg-[#25D366] text-white py-4 text-sm font-medium hover:bg-[#1ebe57] transition-colors shadow-luxe inline-flex items-center justify-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/></svg>
                Send via WhatsApp
              </button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Use our dedicated WhatsApp line for priority wholesale service and live availability updates.
            </p>
          </form>
        </div>
      </div>

      <a
        href={buildWhatsAppUrl("Hello Cosmetics & Skincare Distr, I'd like to enquire about wholesale pricing.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-luxe flex items-center justify-center hover:scale-110 transition-transform"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
      </a>
    </section>
  );
}
