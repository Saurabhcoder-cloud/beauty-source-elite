import { useEffect, useState } from "react";

const reviews = [
  { name: "Aisha Khan", role: "Beauty Buyer · Glamour Stores", flag: "🇦🇪", country: "UAE", text: "We consolidated our supply through Cosmetics & Skincare Distr. Authenticity, paperwork and timing are all flawless." },
  { name: "Marcus Lindgren", role: "Founder · Nordic Apothecary", flag: "🇸🇪", country: "Sweden", text: "Their European brand portfolio is unmatched. Margins finally make sense at our volume." },
  { name: "Priya Shah", role: "Procurement · Lotus Pharma", flag: "🇮🇳", country: "India", text: "Every batch arrives temperature-controlled with full COA. They feel like an in-house team." },
  { name: "Lucía Romero", role: "Director · Belleza Madrid", flag: "🇪🇸", country: "Spain", text: "Discreet, premium, and obsessive about authenticity. A rare combination in this industry." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-gradient-noir text-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-rose-gold/40 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-champagne/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-ivory/60">Verified Buyers</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">Loved by retailers in 80+ countries</h2>

        <div className="mt-14 relative min-h-[260px]">
          {reviews.map((r, idx) => (
            <div
              key={r.name}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="mx-auto text-rose-gold opacity-70">
                <path d="M7.17 6.17A5 5 0 002 11v7h7v-7H5a3 3 0 013-3V6.17h-.83zm10 0A5 5 0 0012 11v7h7v-7h-4a3 3 0 013-3V6.17h-.83z" />
              </svg>
              <p className="mt-6 text-xl md:text-2xl font-display leading-relaxed italic">
                "{r.text}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="text-2xl">{r.flag}</span>
                <div className="text-left">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-ivory/60">{r.role} · {r.country}</div>
                </div>
                <span className="ml-3 inline-flex items-center gap-1 rounded-full bg-ivory/10 px-3 py-1 text-[10px] uppercase tracking-widest">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4-1.4-1.4L11 11.2 10.4 10.6 9 12z"/></svg>
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Review ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "bg-rose-gold w-10" : "bg-ivory/30 w-4"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
