import type { Category } from "@/lib/categories";

export function CategoryCTA({ cat }: { cat: Category }) {
  return (
    <section className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${cat.accent}, transparent 60%)` }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Distribution & Export</p>
        <h2 className="mt-3 font-display text-4xl md:text-6xl leading-tight">
          Move <span className="italic" style={{ color: cat.accent }}>{cat.name.toLowerCase()}</span><br/>volumes worldwide.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          From a single carton to full 40ft containers — our wholesale desk replies within one business day with tiered pricing, MOQ varies depending on the product category and brand requirements, lead times and export documentation.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
          {cat.highlights.map((h) => (
            <div key={h} className="glass rounded-2xl p-5 flex gap-3 items-start">
              <span className="mt-1 h-6 w-6 shrink-0 rounded-full flex items-center justify-center text-white" style={{ background: cat.accent }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7"/></svg>
              </span>
              <span className="text-sm text-foreground/80">{h}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="/#wholesale" className="rounded-full bg-foreground text-background px-8 py-4 text-sm font-medium shadow-luxe hover:opacity-90 transition">
            Request Wholesale Pricing
          </a>
          <a href="/#contact" className="rounded-full border border-foreground/20 bg-background/40 backdrop-blur-md px-8 py-4 text-sm font-medium hover:border-foreground/60 transition">
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}
