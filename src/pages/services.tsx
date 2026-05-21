import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageFrame } from "@/components/site/PageFrame";
import { buildWhatsAppUrl } from "@/lib/sales";
import { Seo } from "@/components/site/Seo";

const heroImages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/85/CHANEL_No5_parfum.jpg",
    alt: "Chanel No.5 luxury fragrance bottle on a premium editorial background",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/60/Olaplex_%2851211203815%29.jpg",
    alt: "Olaplex salon-grade hair care packaging for premium wholesale sourcing",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/MAC_pink_lipstick.jpg",
    alt: "MAC Cosmetics lipstick in luxury cosmetic retail placement",
  },
];

const services = [
  {
    title: "Authorized Brand Sourcing",
    description: "Curated access to premium brand allocations from Chanel, Dior, MAC, Olaplex and leading healthcare manufacturers.",
    icon: "M3 3h18v18H3V3z",
    image: heroImages[1].src,
  },
  {
    title: "Luxury Wholesale Allocation",
    description: "Flexible carton, pallet and container orders with transparent pricing, premium packaging and global resale readiness.",
    icon: "M12 2l4 7H8l4-7z",
  },
  {
    title: "Cross-Border Logistics",
    description: "Export-ready customs coordination, DDP service and international freight control for beauty and healthcare shipments.",
    icon: "M4 7h16M5 12h14M6 17h12",
    image: heroImages[0].src,
  },
  {
    title: "Retail & Pharmacy Enablement",
    description: "Dedicated wholesale account service for premium retailers, pharmacies and cross-border importers.",
    icon: "M5 12h14M12 5l7 7-7 7",
  },
  {
    title: "Verified Product Quality",
    description: "Batch-level authentication, quality inspection and documentation before products are released for shipment.",
    icon: "M5 5h14v14H5V5z",
    image: heroImages[2].src,
  },
  {
    title: "Launch & Pre-Order Support",
    description: "Secure allocations ahead of launch with premium release planning and buyer-facing product storytelling.",
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
      <Seo
        title="Services | Cosmetics Distr"
        description="Cosmetics Distr provides premium sourcing, authorized distributor partnerships, wholesale supply and international shipping for cosmetics, oral care and healthcare buyers."
        path="/services"
      />
      <Nav />

      <section className="relative overflow-hidden pb-24 sm:pb-32 pt-24 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-44 left-4 h-[520px] w-[520px] rounded-full bg-blush/20 blur-3xl animate-glow" />
          <div className="absolute top-12 right-10 h-[420px] w-[420px] rounded-full bg-champagne/20 blur-3xl animate-glow" />
          <div className="absolute inset-x-0 top-[32%] h-px bg-gradient-to-r from-transparent via-rose-gold/35 to-transparent opacity-60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1fr_1.05fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Global sourcing for luxury beauty and healthcare brands.
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Global sourcing and wholesale distribution for the world’s leading beauty and healthcare brands.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Every service is delivered with authorized sourcing, wholesale partnerships, international logistics and enterprise distribution for premium retail and pharmacy customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={buildWhatsAppUrl("Hello Cosmetics Distr, I would like to discuss your services and wholesale supply options.")}
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
                See the process
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: "18+", label: "Global brand partners" },
                { value: "35", label: "Freight corridors" },
                { value: "12", label: "Distribution hubs" },
              ].map((metric) => (
                <div key={metric.label} className="glass rounded-3xl border border-border p-5 shadow-luxe">
                  <div className="text-3xl font-display">{metric.value}</div>
                  <div className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-luxe border border-border bg-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/85/CHANEL_No5_parfum.jpg"
                alt="Chanel fragrance packaging and luxury wholesale sourcing"
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
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-rose-gold/10 blur-3xl animate-glow" />
          <div className="absolute -bottom-16 right-0 h-[360px] w-[360px] rounded-full bg-champagne/15 blur-3xl animate-glow" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 mt-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="glass relative overflow-hidden rounded-[2.5rem] border border-border p-6 shadow-luxe">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/10 via-transparent to-transparent opacity-80" />
                <div className="absolute -top-10 -left-10 h-44 w-44 rounded-full bg-blush/20 blur-3xl" />
                <div className="absolute -bottom-10 right-6 h-36 w-36 rounded-full bg-champagne/20 blur-3xl" />
                <div className="relative grid gap-5">
                  <div className="overflow-hidden rounded-[2rem] border border-border bg-noir/5">
                    <img src={heroImages[1].src} alt={heroImages[1].alt} className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="overflow-hidden rounded-[2rem] border border-border bg-noir/5">
                      <img src={heroImages[0].src} alt={heroImages[0].alt} className="h-48 w-full object-cover" loading="lazy" />
                    </div>
                    <div className="overflow-hidden rounded-[2rem] border border-border bg-noir/5">
                      <img src={heroImages[2].src} alt={heroImages[2].alt} className="h-48 w-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className="glass rounded-[2rem] border border-border p-6 text-sm text-muted-foreground shadow-luxe">
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Visual composition</div>
                    <p className="mt-3 leading-relaxed">
                      A premium editorial composition of cosmetics, wellness and logistics imagery to anchor the service portfolio in luxury direction.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="glass rounded-[2rem] border border-border p-6 shadow-luxe hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-foreground text-background mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={service.icon} /></svg>
                  </div>
                  <h3 className="font-display text-xl mb-2">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-20 text-center">
        <div className="space-y-6 mx-auto max-w-3xl">
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Partner showcase</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">Premium brand partnerships and curated global distribution visibility.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From fragrance maisons to authorized healthcare manufacturers, our relationships are presented with refined editorial polish and confidence.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { brand: "Chanel", label: "Elite fragrance distribution" },
            { brand: "Dior Beauty", label: "Luxury category sourcing" },
            { brand: "Olaplex", label: "Salon-grade hair care" },
            { brand: "Johnson & Johnson", label: "Healthcare essentials" },
            { brand: "MAC Cosmetics", label: "Makeup line rollout" },
            { brand: "Dove", label: "Personal care allocation" },
            { brand: "Nivea", label: "Consumer hygiene supply" },
            { brand: "Abbott", label: "Diagnostic and medical supply" },
          ].map((partner, index) => (
            <motion.div
              key={partner.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="glass rounded-[2rem] border border-border p-6 shadow-luxe hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-lg font-display">{partner.brand}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">{partner.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="service-process" className="relative overflow-hidden mx-auto max-w-7xl px-6 pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-rose-gold/15 to-transparent" />
        <div className="relative grid gap-14 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="relative">
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Product sourcing story</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mt-4">A wholesale sourcing process that feels like a luxury editorial narrative.</h2>
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed mt-4">
              Our process is structured to reassure international buyers with transparency, quality control and premium supply chain execution from inquiry to delivery.
            </p>
            <div className="relative mt-10 pl-8">
              <div className="absolute left-3 top-14 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent to-transparent" />
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="relative overflow-hidden rounded-[2.5rem] border border-border bg-background/80 p-6 shadow-luxe"
                  >
                    <div className="absolute -left-10 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background font-display text-sm shadow-soft">
                      {index + 1}
                    </div>
                    <div className="relative ml-6">
                      <h3 className="font-display text-xl">{step.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[3rem] border border-border bg-card p-8 shadow-luxe"
          >
            <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-blush/25 blur-3xl animate-glow" />
            <div className="absolute -bottom-16 right-10 h-48 w-48 rounded-full bg-champagne/20 blur-3xl animate-glow" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-noir/5">
              <img
                src={heroImages[2].src}
                alt={heroImages[2].alt}
                className="h-[460px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/10 to-transparent" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-6 top-6 glass rounded-3xl border border-border p-4 text-right text-sm text-muted-foreground shadow-luxe"
              >
                <div className="uppercase tracking-[0.3em] text-[0.65rem]">Dashboard insight</div>
                <div className="mt-3 font-display text-xl">Global allocation visibility</div>
              </motion.div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mt-8">
              {[
                { label: "Inventory visibility", value: "Real-time" },
                { label: "Shipment lanes", value: "35+" },
                { label: "Compliance checks", value: "100%" },
                { label: "Buyer support", value: "24/7" },
              ].map((metric) => (
                <div key={metric.label} className="glass rounded-[1.8rem] border border-border p-5 shadow-soft">
                  <div className="text-2xl font-display">{metric.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-[2rem] border border-border p-5">
                <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Logistics node</div>
                <div className="mt-3 font-display text-2xl">Regional hub</div>
              </div>
              <div className="glass rounded-[2rem] border border-border p-5">
                <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Export readiness</div>
                <div className="mt-3 font-display text-2xl">Market-ready</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageFrame>
  );
}
