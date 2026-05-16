import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl">
      {v.toLocaleString()}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-7xl px-6 space-y-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Company Overview</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              Canadian-based global distribution for <span className="italic text-gradient-gold">cosmetics, oral care and healthcare</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Maison Beauté is a Toronto-headquartered sourcing and distribution partner, serving wholesalers, retailers,
              department stores, online sellers and boutique buyers with direct, authorized products from official distributors.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We operate a verified pre-order sourcing model, supported by a global supply chain that spans sourcing desks,
              bonded warehousing and freight partners in North America, Europe, the Middle East and Asia.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe">
              <img
                src="https://images.unsplash.com/photo-1495121605193-b116b5b09a41?w=1200&q=80"
                alt="Warehouse distribution and logistics"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 right-0 glass rounded-3xl p-6 shadow-luxe max-w-xs">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Trusted by enterprise buyers</div>
              <div className="font-display text-3xl mt-2">Canada HQ · Global Reach</div>
              <p className="mt-3 text-sm text-muted-foreground">Verified sourcing for cosmetics, oral care and healthcare brands in 100+ markets.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="glass rounded-3xl p-10 shadow-luxe">
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Mission</div>
            <h3 className="mt-4 font-display text-3xl">To make premium branded supply chains transparent, compliant and scalable for global retailers.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We bring order to cross-border distribution with verified partners, authorized sourcing and complete export compliance.
            </p>
          </div>
          <div className="glass rounded-3xl p-10 shadow-luxe">
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Vision</div>
            <h3 className="mt-4 font-display text-3xl">To be the most trusted distributor for authentic beauty and healthcare brands across international markets.</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From Toronto to retail shelves worldwide, our goal is a seamless route from official distributor to buyer.
            </p>
          </div>
          <div className="glass rounded-3xl p-10 shadow-luxe">
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Core Values</div>
            <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <li>Authenticity in every shipment</li>
              <li>Operational excellence across borders</li>
              <li>Verified supply chains and documentation</li>
              <li>Customer-first wholesale partnerships</li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Global Distribution</p>
              <h3 className="mt-3 font-display text-3xl">A logistics platform built for global export and partner support.</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our international network includes vetted freight partners, bonded storage and local customs expertise. We support DDP, CIF, FOB and EXW arrangements
                with fully audited export paperwork and pre-clearance where required.
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">International Network</p>
              <h3 className="mt-3 font-display text-3xl">Authorized distributors, brand partners and global sales desks.</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We work with premium cosmetics, oral care and healthcare suppliers through official distribution channels, offering wholesale buyers a secured route to inventory.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Wholesalers served", value: "Retail, pharmacy, boutiques, ecommerce" },
              { label: "Primary categories", value: "Cosmetics, skincare, oral care, healthcare" },
              { label: "Service model", value: "Pre-order sourcing with verified availability" },
              { label: "Authenticity", value: "100% authorized stock with CoA upon request" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-3xl p-6 shadow-luxe">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.label}</div>
                <div className="mt-3 text-xl font-semibold text-foreground">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass rounded-3xl p-8 shadow-luxe">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why Choose Us</div>
            <ul className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <li>Direct sourcing from official distributors and authorized vendors.</li>
              <li>Verified supply chain with batch traceability and export documentation.</li>
              <li>Flexible MOQ guidance per category and brand requirements.</li>
              <li>End-to-end logistics coordination for global wholesale orders.</li>
            </ul>
          </div>
          <div className="glass rounded-3xl p-8 shadow-luxe">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Pre-order Sourcing</div>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Premium beauty references are secured in advance from our partner networks, ensuring availability and verified quality before shipment.
            </p>
          </div>
          <div className="glass rounded-3xl p-8 shadow-luxe">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Verified Distribution Experience</div>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our team combines sourcing expertise with customs, warehousing and delivery capabilities for a seamless international wholesale experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
