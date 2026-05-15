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
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe">
            <img
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=80"
              alt="Distribution warehouse"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-12 glass rounded-2xl p-6 shadow-luxe max-w-xs">
            <div className="text-xs tracking-widest uppercase text-muted-foreground">Since 2012</div>
            <div className="font-display text-2xl mt-1">European HQ · Global Reach</div>
            <div className="text-sm text-muted-foreground mt-2">Warehouses in Paris, Warsaw and Dubai.</div>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">About Us</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
            A house built on <span className="italic text-gradient-gold">authenticity</span>, scale and discretion
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            For over a decade, Maison Beauté has supplied the world's most discerning beauty retailers,
            pharmacy chains and private-label brands with verified, traceable cosmetics from the world's
            most coveted houses. We negotiate at source, store under temperature control, and ship under
            full chain-of-custody documentation.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <Counter end={1200} suffix="+" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Buyers</div>
            </div>
            <div>
              <Counter end={80} suffix="+" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Countries</div>
            </div>
            <div>
              <Counter end={250} suffix="+" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Brands</div>
            </div>
            <div>
              <Counter end={48} suffix="h" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Avg Dispatch</div>
            </div>
            <div>
              <Counter end={99} suffix="%" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">On-Time</div>
            </div>
            <div>
              <Counter end={12} />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Years Trading</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
