const cats = [
  { t: "Skincare", img: "https://www.ceraveindia.com/-/media/project/loreal/brand-sites/cerave/americas/in/scx/products/pdp/packshots/facial-moisturising-lotion-spf-30/facial-moisturising-lotion-spf30-lg.jpg?rev=-1?w=500&hash=819CA52CA47BC3DFA5D9B049549EA0BC", alt: "Skincare products from CeraVe, La Roche-Posay, Bioderma, Vichy and The Ordinary" },
  { t: "Hair Care", img: "https://www.lorealprofessionnel.in/-/media/project/loreal/brand-sites/lp/apac/in/hair-care/absolut-repair-molecular/pdp/pre-treatment/slider1.jpg?rev=10321e9c706c47bea0502b6a0793ef43&cx=0.5&cy=0.48&cw=360&ch=520&hash=9AF7F822376F060452067F3E44BA629B", alt: "Salon-grade haircare products from Olaplex, Kérastase and L'Oréal Professionnel" },
  { t: "Makeup", img: "https://m.media-amazon.com/images/I/71-v-KtaZ2L.jpg", alt: "Branded makeup packaging from MAC, Maybelline, NYX, Dior and Charlotte Tilbury" },
  { t: "Fragrances", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrFmndn4Olx2V9GiLhROCruhlW1Fw1lgGaA&s", alt: "Luxury fragrance brands including Chanel, Dior, YSL and Victoria's Secret" },
  { t: "Personal Care", img: "https://m.media-amazon.com/images/I/51xh13glUzS.jpg", alt: "Personal care essentials from Dove, Nivea, Garnier and Eucerin" },
  { t: "Healthcare", img: "https://gcaremedics.com/cdn/shop/files/omnifix-e-5x1011.webp?v=1768860962&width=533", alt: "Healthcare packaging from Abbott, Bayer, Johnson & Johnson, Hartmann and BD" },
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
              <img src={c.img} alt={c.alt ?? c.t} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
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
