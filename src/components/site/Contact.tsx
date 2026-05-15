import { useState } from "react";

function Field({ label, type = "text", as = "input", name }: { label: string; type?: string; as?: "input" | "textarea"; name: string }) {
  const [v, setV] = useState("");
  const filled = v.length > 0;
  const common = "peer w-full bg-transparent outline-none border-b border-foreground/20 focus:border-accent transition-colors py-3 text-foreground";
  return (
    <label className="relative block">
      {as === "textarea" ? (
        <textarea name={name} rows={3} value={v} onChange={(e) => setV(e.target.value)} className={common} />
      ) : (
        <input name={name} type={type} value={v} onChange={(e) => setV(e.target.value)} className={common} />
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

export function Contact() {
  return (
    <section id="contact" className="py-28 bg-gradient-blush relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.95_0.05_60),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Get in Touch</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
            Let's build your <span className="italic text-gradient-gold">beauty business</span> together
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Tell us what you need — brands, volumes, destination — and our wholesale desk will reply within
            one business day with pricing and availability.
          </p>

          <div className="mt-10 space-y-5">
            <ContactRow icon="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z M12 7v5l3 2" label="Headquarters" value="14 Rue Saint-Honoré, 75001 Paris, France" />
            <ContactRow icon="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" label="Email" value="wholesale@maisonbeaute.com" href="mailto:wholesale@maisonbeaute.com" />
            <ContactRow icon="M20 15.5A8.38 8.38 0 0117 17a8.5 8.5 0 01-7-7 8.38 8.38 0 011.5-3M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" label="WhatsApp" value="+33 1 23 45 67 89" href="https://wa.me/33123456789" />
            <ContactRow icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" label="Hours" value="Mon–Fri · 9:00–18:00 CET" />
          </div>

          <div className="mt-10 rounded-3xl overflow-hidden border border-border h-56 shadow-soft">
            <iframe
              title="Maison Beauté headquarters"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.32%2C48.85%2C2.36%2C48.87&layer=mapnik"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted. Our wholesale desk will reply shortly."); }}
          className="glass rounded-3xl p-8 md:p-10 shadow-luxe space-y-2 self-start"
        >
          <h3 className="font-display text-2xl mb-4">Wholesale inquiry</h3>
          <Field name="name" label="Full name" />
          <Field name="company" label="Company" />
          <Field name="email" type="email" label="Business email" />
          <Field name="country" label="Destination country" />
          <Field name="message" as="textarea" label="Brands, volumes, requirements" />
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-foreground text-background py-4 text-sm font-medium hover:bg-accent transition-colors shadow-luxe"
          >
            Send Inquiry
          </button>
          <p className="text-xs text-muted-foreground text-center pt-2">
            Or message us instantly on WhatsApp — replies within minutes.
          </p>
        </form>
      </div>

      <a
        href="https://wa.me/33123456789"
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

function ContactRow({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  const Inner = (
    <>
      <div className="h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={icon}/></svg>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-foreground">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-4 hover:opacity-80 transition-opacity">{Inner}</a>
  ) : (
    <div className="flex items-center gap-4">{Inner}</div>
  );
}
