import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageFrame } from "@/components/site/PageFrame";
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
    <PageFrame>
      <Nav />
      <section className="relative overflow-hidden pb-20 sm:pb-28 pt-24 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-0 h-[520px] w-[520px] rounded-full bg-blush/25 blur-3xl animate-glow" />
          <div className="absolute top-20 right-0 h-[420px] w-[420px] rounded-full bg-champagne/25 blur-3xl animate-glow" />
          <div className="absolute inset-x-0 top-[35%] h-px bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent opacity-60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 grid gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Enterprise logistics for premium wholesale sourcing.
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Strategic sourcing, logistics and premiere commercial distribution for global buyers.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Cosmetics & Skincare Distr delivers an immersive product sourcing experience for authorized cosmetics, oral care and healthcare brands — with vetted suppliers, export-ready shipping and enterprise-grade account service.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={buildWhatsAppUrl("Hello Cosmetics & Skincare Distr, I would like to discuss your services and wholesale supply options.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-accent transition-all duration-300 shadow-luxe"
              >
                Contact Sales
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#service-process" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 backdrop-blur-md px-7 py-3.5 text-sm font-medium hover:border-foreground/60 transition-all shadow-luxe">
                Service Process
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-luxe border border-border bg-card">
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80"
                alt="Premium beauty and healthcare supply chain"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="glass rounded-3xl p-6 shadow-luxe absolute -bottom-16 left-0 max-w-md animate-fade-up">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Sourcing advantage</div>
              <div className="mt-3 font-display text-3xl">Verified inventory across 80+ markets</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A digital-first sourcing desk with premium distributor relationships and a luxury-level fulfilment mindset.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6">
        <div className="glass rounded-3xl p-8 shadow-luxe border border-border grid gap-4 sm:grid-cols-3">
          {[
            { label: "Premium customer care", value: "24/7" },
            { label: "Global freight partners", value: "40+" },
            { label: "Verified product lines", value: "100%" },
          ].map((item) => (
            <div key={item.label} className="space-y-3">
              <div className="text-3xl font-display">{item.value}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-rose-gold/15 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 mt-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Trusted capabilities</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">A premium services portfolio for discerning wholesale buyers.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From authorized sourcing to customs-ready logistics, every service is crafted for enterprise buyers who require compliance, speed and luxury experience.
              </p>
            </div>
            <div className="grid gap-6">
              {services.map((service) => (
                <div key={service.title} className="glass rounded-3xl p-10 shadow-luxe hover-lift transition-transform">
                  <div className="h-12 w-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={service.icon} /></svg>
                  </div>
                  <h3 className="font-display text-2xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageFrame>
  );
}
