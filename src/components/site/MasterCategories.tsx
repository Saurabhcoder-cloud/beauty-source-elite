import { Link } from "react-router-dom";
import { CATEGORY_LIST } from "@/lib/categories";

export function MasterCategories() {
  return (
    <section id="master" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Three Divisions · One Platform</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              A global house for <span className="italic text-gradient-gold">beauty, oral & health</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From luxury skincare and prestige fragrance to pharmaceutical-grade healthcare — one sourcing partner, one contract, one invoice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CATEGORY_LIST.map((c, i) => (
            <Link
              key={c.key}
              to={c.slug}
              className="group relative overflow-hidden rounded-3xl aspect-[5/6] sm:aspect-[3/4] hover-lift block animate-fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <img src={c.heroImg} alt={c.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to top, ${c.accent}88, transparent 60%)` }}
              />
              <div className="absolute inset-x-0 bottom-0 p-8 text-ivory">
                <div className="text-[11px] uppercase tracking-[0.3em] opacity-80">{c.kicker}</div>
                <div className="font-display text-4xl mt-2 leading-none">{c.name}</div>
                <p className="mt-3 text-sm opacity-80 max-w-xs line-clamp-2">{c.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm border-b border-ivory/40 pb-1 group-hover:gap-3 transition-all">
                  Enter {c.name.split(" ")[0]}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
              </div>
              <div className="absolute top-6 right-6 text-[10px] uppercase tracking-widest text-ivory/70 glass-dark rounded-full px-3 py-1">
                {c.brands.length}+ brands
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
