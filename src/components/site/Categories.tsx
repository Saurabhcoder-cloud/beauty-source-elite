const cats = [
  { t: "Skincare", img: "https://aakarfragrance.com/assets/img/portfolio/3.jpg" },
  { t: "Hair Care", img: "https://www.instyle.com/thmb/izw2UyeCDGJvuOwGU9pOsz3aM_4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ExclusiveLead_Hair_221-ecd7cf58e8fe4252bc461380a6682142.jpg" },
  { t: "Makeup", img: "https://img.magnific.com/free-photo/close-up-collection-make-up-beauty-products_23-2148620012.jpg?semt=ais_hybrid&w=740&q=80" },
  { t: "Fragrances", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPE8fGO_s-UnhUeETzmbPu85q_WDvAslGdDg&s" },
  { t: "Personal Care", img: "https://t4.ftcdn.net/jpg/01/68/51/55/360_F_168515550_AYObBKUuUS3k0fleEsBI0yxVGVYOm5nm.jpg" },
  { t: "Healthcare", img: "https://www.cardinalhealth.com/content/dam/corp/products/professional-products/medical-products/grid/grid-square-advanced-wound-care.jpg" },
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
              href="/contact"
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
