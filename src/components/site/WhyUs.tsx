const features = [
  { t: "100% Authentic", d: "Every batch traceable to its authorized source.", icon: "M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" },
  { t: "Verified Suppliers", d: "Direct contracts with European manufacturers.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { t: "Worldwide Shipping", d: "Air, sea & express to 80+ countries.", icon: "M3.6 9h16.8M3.6 15h16.8M11 3a17 17 0 000 18M13 3a17 17 0 010 18M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { t: "Quality Assurance", d: "Lab-tested, temperature-controlled storage.", icon: "M9 12l2 2 4-4m5.6-2.6A9 9 0 1112 3a9 9 0 018.6 6.4z" },
  { t: "Fast Fulfillment", d: "Average dispatch within 48 hours.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { t: "Wholesale Pricing", d: "Tiered margins from MOQ to container loads.", icon: "M12 8c-1.66 0-3 .9-3 2s1.34 2 3 2 3 .9 3 2-1.34 2-3 2m0-8V6m0 12v-2M8 12h.01M16 12h.01" },
];

export function WhyUs() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-blush opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Why Maison Beauté</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">A standard the industry trusts</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.t}
              className="group relative glass rounded-3xl p-8 hover-lift overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose-gold/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-2xl mb-2">{f.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
