import type { Category } from "@/lib/categories";

export function CategoryBrands({ cat }: { cat: Category }) {
  const loop = [...cat.brands, ...cat.brands];
  return (
    <section className="py-24 border-y border-border bg-secondary/40 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Authorized Partnerships</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl">
          {cat.brands.length}+ <span className="italic" style={{ color: cat.accent }}>premium brands</span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary/80 to-transparent z-10" />
        <div className="flex gap-4 animate-scroll-x w-max">
          {loop.map((b, i) => (
            <div
              key={i}
              className="shrink-0 w-56 h-24 rounded-2xl glass flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-soft group"
              style={{ boxShadow: `0 0 0 0 ${cat.accent}00` }}
            >
              <span className="font-display text-xl tracking-tight text-foreground/80 text-center px-3 group-hover:text-foreground transition">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Brand grid */}
      <div className="mx-auto max-w-7xl px-6 mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {cat.brands.map((b, i) => (
            <div
              key={b}
              className="group relative rounded-xl border border-border bg-card/60 backdrop-blur-sm h-20 flex items-center justify-center px-3 hover-lift cursor-default overflow-hidden"
              style={{ animationDelay: `${i * 20}ms` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `radial-gradient(circle at 50% 100%, ${cat.accent}22, transparent 70%)` }}
              />
              <span className="relative font-display text-base text-center text-foreground/80 group-hover:text-foreground transition-colors">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
