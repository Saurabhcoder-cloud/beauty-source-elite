import type { Category } from "@/lib/categories";

export function CategoryHero({ cat }: { cat: Category }) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl animate-glow opacity-60"
          style={{ background: `radial-gradient(circle, ${cat.accent}55, transparent 70%)` }}
        />
        <div
          className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full blur-3xl animate-glow opacity-50"
          style={{ background: `radial-gradient(circle, ${cat.accent}33, transparent 70%)`, animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-foreground/70 mb-8">
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: cat.accent }} />
            {cat.kicker}
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            {cat.name.split(" & ")[0]}
            {cat.name.includes(" & ") && (
              <>
                {" & "}
                <span className="italic" style={{ color: cat.accent }}>
                  {cat.name.split(" & ")[1]}
                </span>
              </>
            )}
            {!cat.name.includes(" & ") && (
              <>
                <br />
                <span className="italic" style={{ color: cat.accent }}>{cat.tagline}</span>
              </>
            )}
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">{cat.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#cat-products" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-luxe">
              Explore Range
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="/wholesale" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 backdrop-blur-md px-7 py-3.5 text-sm font-medium hover:border-foreground/60 transition">
              Request Pricing
            </a>
          </div>

          <div className="mt-14 grid grid-cols-4 gap-6 max-w-xl">
            {cat.stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl">{s.v}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
          <div
            className="absolute inset-0 -z-10 m-auto h-80 w-80 rounded-full blur-3xl opacity-50"
            style={{ background: cat.accent }}
          />
          <div className="glass rounded-3xl p-3 shadow-luxe absolute top-0 right-12 w-72 animate-float">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={cat.heroImg} alt={cat.name} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="px-2 pt-3 pb-1">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{cat.kicker}</div>
              <div className="font-display text-lg leading-tight">{cat.tagline}</div>
            </div>
          </div>
          <div className="glass rounded-3xl p-5 shadow-luxe absolute bottom-6 left-0 w-64 animate-float-slow" style={{ animationDelay: "1s" }}>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Distribution</div>
            <ul className="space-y-2 text-sm">
              {cat.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: cat.accent }} />
                  <span className="text-foreground/80">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
