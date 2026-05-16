import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { buildWhatsAppUrl } from "@/lib/sales";

const services = [
  {
    title: "Global Product Sourcing",
    description: "Direct sourcing from authorized distributors, manufacturers and brand partners for cosmetics, skincare, oral care and healthcare.",
    icon: "M3 3h18v18H3V3z",
  },
  {
    title: "Distributor Partnerships",
    description: "Established relationships with licensed distributors across Europe, North America and Asia to secure premium product allocation.",
    icon: "M12 2l4 7H8l4-7z",
  },
  {
    title: "Wholesale Supply",
    description: "Tiered wholesale pricing from carton minimums to full container loads, with market-specific margin support.",
    icon: "M5 12h14M12 5l7 7-7 7",
  },
  {
    title: "International Shipping",
    description: "Air, sea and express logistics with export-ready documentation, DDP support and customs coordination.",
    icon: "M4 7h16M5 12h14M6 17h12",
  },
  {
    title: "Pre-order Fulfillment",
    description: "Secure allocations ahead of launch, with quality checks and availability confirmation before purchase.",
    icon: "M5 5h14v14H5V5z",
  },
  {
    title: "Retail & Wholesale Support",
    description: "Dedicated account service for retail buyers, pharmacy chains, ecommerce and boutique importers.",
    icon: "M12 3l9 6-9 6-9-6 9-6z",
  },
];

const steps = [
  {
    title: "1. Source officially",
    description: "We secure product allocations from authorized distributors and manufacturers with verified documentation.",
  },
  {
    title: "2. Validate authenticity",
    description: "Batch traceability, quality verification and certificate review are completed before confirmation.",
  },
  {
    title: "3. Prepare logistics",
    description: "Customs, export paperwork and packaging are finalized for the chosen route and destination.",
  },
  {
    title: "4. Ship globally",
    description: "Freight partners handle air, sea or express delivery to retail, pharmacy and distribution centers worldwide.",
  },
  {
    title: "5. Support buyers",
    description: "Our wholesale desk remains available through order processing, tracking and post-delivery follow-up.",
  },
];

export default function Services() {
  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <Nav />
      <section className="relative overflow-hidden pb-28 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,216,188,0.24),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Services</p>
              <h1 className="mt-3 font-display text-5xl md:text-6xl leading-tight">
                Strategic sourcing and logistics for international wholesale buyers
              </h1>
              <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Maison Beauté delivers a premium end-to-end services platform for authorized cosmetics, oral care and healthcare distribution.
                From procurement to customs clearance, our Canadian-based team supports global buyers with enterprise-grade accuracy.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={buildWhatsAppUrl("Hello Maison Beauté, I would like to discuss your services and wholesale supply options.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover:bg-[#1ebe57] transition"
                >
                  Contact Sales
                </a>
                <a href="#service-process" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 px-6 py-3 text-sm font-medium hover:border-foreground/60 transition">
                  Service Process
                </a>
              </div>
            </div>
            <div className="glass rounded-3xl p-8 shadow-luxe">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Trusted capabilities</div>
              <div className="mt-8 space-y-6">
                <div className="rounded-3xl bg-background/70 p-6 border border-border">
                  <div className="font-display text-2xl">100% Authentic</div>
                  <p className="mt-3 text-muted-foreground text-sm">
                    Each shipment is confirmed against authorized distribution contracts and arrives with full traceability.
                  </p>
                </div>
                <div className="rounded-3xl bg-background/70 p-6 border border-border">
                  <div className="font-display text-2xl">Verified logistics</div>
                  <p className="mt-3 text-muted-foreground text-sm">
                    Pre-booked freight, customs-ready paperwork and bundled export services for seamless cross-border delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Service portfolio</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">A full suite of wholesale distribution services</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="glass rounded-3xl p-10 shadow-luxe hover:-translate-y-1 transition-transform">
                  <div className="h-12 w-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={service.icon} /></svg>
                  </div>
                  <h3 className="font-display text-2xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="service-process" className="mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Process Timeline</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">How our distribution service works</h2>
            </div>
            <div className="grid gap-6">
              {steps.map((step, index) => (
                <div key={step.title} className="glass rounded-3xl p-8 shadow-luxe grid md:grid-cols-[auto_1fr] gap-6 items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background font-display text-xl">{index + 1}</div>
                  <div>
                    <h3 className="font-display text-2xl">{step.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 grid lg:grid-cols-2 gap-10 items-center rounded-3xl bg-gradient-blush/10 p-12 shadow-luxe">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Premium support</p>
              <h2 className="mt-3 font-display text-4xl leading-tight">Corporate-grade support for international buyers</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our team is structured to support retail and wholesale buyers with dedicated account management,
                logistics coordination and full documentation for customs clearance.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Dedicated account service",
                "Pre-export quality review",
                "Global freight coordination",
                "Dual-language documentation support",
              ].map((item) => (
                <div key={item} className="glass rounded-3xl p-6 border border-border">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
