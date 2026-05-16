export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blush/40 blur-3xl animate-glow" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-champagne/40 blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,oklch(0.94_0.04_30),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-foreground/70 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Canadian HQ · Global wholesale distribution
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Authentic luxury
            <br />
            <span className="italic text-gradient-gold">cosmetics, oral care</span>
            <br />
            and healthcare distribution
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Sourced through licensed distributor channels, verified for authenticity and ready to ship under
            complete export documentation to retailers, pharmacies and distributors in 100+ markets.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-accent transition-all duration-300 shadow-luxe"
            >
              Explore Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 backdrop-blur-md px-7 py-3.5 text-sm font-medium hover:border-foreground/60 transition-all"
            >
              Request Wholesale Pricing
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "1.2K+", l: "Buyers" },
              { v: "80+", l: "Countries" },
              { v: "100%", l: "Authentic" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating product cards */}
        <div className="lg:col-span-5 relative h-[560px] hidden lg:block">
          <FloatingCard
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80"
            title="Hydrating Serum"
            sub="Vitamin C · 30ml"
            className="absolute top-0 right-12 w-64 animate-float"
          />
          <FloatingCard
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80"
            title="Glow Essence"
            sub="Niacinamide · 50ml"
            className="absolute top-44 left-0 w-56 animate-float-slow"
            style={{ animationDelay: "1s" }}
          />
          <FloatingCard
            src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80"
            title="Rose Eau de Parfum"
            sub="Limited · 100ml"
            className="absolute bottom-0 right-0 w-60 animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute inset-0 -z-10 m-auto h-80 w-80 rounded-full bg-rose-gold/30 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  src,
  title,
  sub,
  className,
  style,
}: {
  src: string;
  title: string;
  sub: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`glass rounded-3xl p-3 shadow-luxe ${className ?? ""}`} style={style}>
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-blush/40">
        <img src={src} alt={title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="px-2 pt-3 pb-1">
        <div className="font-display text-lg leading-tight">{title}</div>
        <div className="text-xs text-muted-foreground tracking-wide">{sub}</div>
      </div>
    </div>
  );
}
