const cats = [
  { t: "Skincare", img: "https://aakarfragrance.com/assets/img/portfolio/3.jpg" },
  { t: "Hair Care", img: "https://images.unsplash.com/photo-1626015449802-d031cd24bd8d?w=900&q=80" },
  { t: "Makeup", img: "https://images.unsplash.com/photo-1522335789203-aaa1f15a5045?w=900&q=80" },
  { t: "Fragrances", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&q=80" },
  { t: "Personal Care", img: "https://images.unsplash.com/photo-1599725321468-50f23971763f?w=900&q=80" },
  { t: "Healthcare", img: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=900&q=80" },
];

export function Categories() {
  return (
    <section id="categories" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Curated Catalog</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              Six categories, <span className="italic text-gradient-gold">infinite combinations</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Build your private label, retail shelf or pharmacy assortment from a single trusted source.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cats.map((c, i) => (
            <a
              href="#contact"
              key={c.t}
              className="product-card group relative overflow-hidden rounded-3xl aspect-[5/6] md:aspect-[4/5] hover-lift block"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img src={c.img} alt={c.t} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-ivory">
                <div className="font-display text-3xl">{c.t}</div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                  Explore range
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
