const products = [
  { t: "Vitamin C Brightening Serum", brand: "La Roche-Posay", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80", price: "Wholesale" },
  { t: "Hyaluronic Daily Moisturizer", brand: "CeraVe", img: "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=800&q=80", price: "Wholesale" },
  { t: "Mineral SPF50+ Sunscreen", brand: "Bioderma", img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80", price: "Wholesale" },
  { t: "Rose Eau de Parfum 100ml", brand: "Maison Privée", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80", price: "Wholesale" },
  { t: "Bond Repair Hair Treatment", brand: "Olaplex", img: "https://images.unsplash.com/photo-1626015449802-d031cd24bd8d?w=800&q=80", price: "Wholesale" },
  { t: "Niacinamide 10% + Zinc", brand: "The Ordinary", img: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&q=80", price: "Wholesale" },
  { t: "Thermal Spring Mist", brand: "Vichy", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80", price: "Wholesale" },
  { t: "Velvet Matte Lipstick", brand: "Maybelline", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80", price: "Wholesale" },
];

export function Products() {
  return (
    <section id="products" className="py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Featured Catalog</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Best-selling references</h2>
          </div>
          <a href="#contact" className="text-sm underline-offset-4 hover:underline text-foreground/70">
            Request the full catalog →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.t} className="product-card group rounded-2xl bg-card overflow-hidden hover-lift">
              <div className="relative aspect-square overflow-hidden bg-blush/30">
                <img src={p.img} alt={p.t} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <a
                  href="#contact"
                  className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-center rounded-full bg-ivory text-noir text-xs font-medium py-2.5"
                >
                  Request Inquiry
                </a>
              </div>
              <div className="p-4">
                <div className="text-xs tracking-widest uppercase text-muted-foreground">{p.brand}</div>
                <div className="mt-1 font-display text-lg leading-tight line-clamp-2">{p.t}</div>
                <div className="mt-2 text-xs text-accent font-medium">{p.price} pricing on request</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
