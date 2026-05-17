const features = [
  { t: "Official Distributor Network", d: "Direct relationships with authorized suppliers and master distributors.", icon: "M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" },
  { t: "Global Product Sourcing", d: "Premium cosmetics, oral care and healthcare sourced across verified supply chains.", icon: "M3.6 9h16.8M3.6 15h16.8M11 3a17 17 0 000 18M13 3a17 17 0 010 18M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { t: "Pre-order Fulfillment", d: "Secure pre-order sourcing for hard-to-find launches and seasonal allocations.", icon: "M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { t: "Logistics Coordination", d: "Customs-ready export documentation, bonded warehousing and freight planning.", icon: "M3 7h13l5 5v5h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3V7z" },
  { t: "Retail & Wholesale Support", d: "Dedicated account service for department stores, boutiques, ecommerce and pharmacy chains.", icon: "M9 12l2 2 4-4m5.6-2.6A9 9 0 1112 3a9 9 0 018.6 6.4z" },
  { t: "Authenticity Guarantee", d: "Every shipment arrives with full traceability and quality verification.", icon: "M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-blush opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Why Cosmetics Distr</p>
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
