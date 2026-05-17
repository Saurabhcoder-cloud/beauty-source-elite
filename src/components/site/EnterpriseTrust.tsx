const pillars = [
  { t: "Supplier Verification", d: "Authorized products sourced through official distributor contracts and audited supply chains.", icon: "M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { t: "Authenticity Assurance", d: "Full batch traceability, certificates of authenticity and compliance documentation on request.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { t: "Logistics Network", d: "Toronto-based export coordination paired with EU bonded warehousing and DDP-ready freight partners.", icon: "M3 7h13l5 5v5h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3V7z" },
  { t: "Global Sourcing", d: "Procurement desks across Canada, Europe, Middle East and Asia with direct access to Tier-1 manufacturers.", icon: "M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" },
  { t: "Wholesale Fulfillment", d: "From carton to 40ft container. Multilingual packaging, neutral export documentation and custom clearance support.", icon: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0l-2 7H6l-2-7m16 0H4" },
  { t: "Regulatory Coverage", d: "CE, FDA, CPP and destination-specific compliance for cosmetics, oral care and healthcare shipments.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
];

export function EnterpriseTrust() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Enterprise Trust</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Built for <span className="italic text-gradient-gold">institutional buyers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.t}
              className="group relative rounded-3xl border border-border bg-card p-7 hover-lift animate-fade-up overflow-hidden"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-blush/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-12 w-12 rounded-2xl glass flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={p.icon} /></svg>
              </div>
              <div className="relative font-display text-2xl">{p.t}</div>
              <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
