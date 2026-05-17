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

const metrics = [
  { label: "Global markets", value: 100, suffix: "+" },
  { label: "Authorized partners", value: 45, suffix: "+" },
  { label: "Buyer support", value: 24, suffix: "/7" },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Your Trusted Source</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Your Trusted Source for Authentic Cosmetics &amp; Skincare Worldwide
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Cosmetics &amp; Skincare Distr is a leading sourcing and distribution company based in Canada, specializing in pre-ordering high-demand beauty,
              skincare, and cosmetics products directly from official distributors. We provide authentic, premium products to a wide range of clients,
              including wholesalers, department stores, beauty retailers, and individual consumers worldwide.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="glass rounded-3xl p-6 shadow-luxe">
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{metric.label}</div>
                  <div className="mt-4 flex items-end gap-2">
                    <Counter end={metric.value} suffix={metric.suffix} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-luxe">
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80"
                alt="Premium product packaging and logistics"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 left-0 glass rounded-3xl p-6 shadow-luxe max-w-md animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Logistics &amp; Warehousing</div>
              <div className="font-display text-3xl mt-3">Toronto HQ · Export-ready operations</div>
              <p className="mt-3 text-sm text-muted-foreground">A premium distribution platform with bonded storage, customs-ready packaging and global freight coordination.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-10">
            <div className="glass rounded-3xl p-10 shadow-luxe">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Mission</div>
              <h3 className="mt-4 font-display text-3xl">Our mission is to connect clients with authentic beauty and skincare products, ensuring quality, reliability, and transparency throughout the supply chain.</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We strive to simplify the sourcing process by working directly with official distributor brands, offering pre-order options, and guaranteeing that all products are 100% genuine and safe.
              </p>
            </div>

            <div className="glass rounded-3xl p-10 shadow-luxe">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Vision</div>
              <h3 className="mt-4 font-display text-3xl">We aim to be a global leader in cosmetics and skincare distribution, expanding our network of trusted brands and clients.</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                By continuously sourcing new and in-demand products, we help our clients access premium beauty solutions while maintaining authenticity, affordability, and efficiency.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-3xl p-10 shadow-luxe">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">What We Do</div>
              <ul className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <li>Direct sourcing from official distributors</li>
                <li>Worldwide shipping</li>
                <li>Authentic product supply</li>
                <li>Wholesale and retail distribution</li>
                <li>Verified distribution operations</li>
              </ul>
            </div>

            <div className="glass rounded-3xl p-10 shadow-luxe">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Our Values</div>
              <ul className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <li>Authenticity</li>
                <li>Reliability</li>
                <li>Global Reach</li>
                <li>Client-Centric Service</li>
                <li>Growth &amp; Innovation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="glass rounded-3xl p-10 shadow-luxe">
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Why Choose Us</div>
            <h3 className="mt-4 font-display text-3xl">Premium sourcing with trusted distributor relationships and full-service global support.</h3>
            <ul className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <li>Direct Distributor Connections</li>
              <li>Pre-Order Model</li>
              <li>Worldwide Shipping</li>
              <li>Trusted Distribution Experience</li>
              <li>Comprehensive Product Range</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-3xl p-10 shadow-luxe">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Global Distribution</div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our commercial logistics platform supports export-ready packaging, customs clearance and bonded warehousing across key trade corridors. We connect Toronto procurement with verified delivery networks in Europe, Asia and the Americas.
              </p>
            </div>
            <div className="glass rounded-3xl p-10 shadow-luxe">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Our Goal</div>
              <h3 className="mt-4 font-display text-3xl">Expand globally while simplifying authentic beauty sourcing for wholesalers, retailers, and consumers.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
