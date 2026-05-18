import { useState } from "react";
import { QuickView, type Product } from "./QuickView";

const products: Product[] = [
  { t: "Vitamin C Brightening Serum", brand: "La Roche-Posay", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop", price: "Wholesale", size: "30ml", description: "Stabilized 10% pure vitamin C serum that visibly brightens and evens skin tone. Formulated with neurosensine to soothe sensitivity. Dermatologically tested, suitable for daily morning use." },
  { t: "Hyaluronic Daily Moisturizer", brand: "CeraVe", img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop", price: "Wholesale", size: "473ml", description: "Lightweight, oil-free moisturizer with three essential ceramides and hyaluronic acid. Provides 24-hour hydration while restoring the skin barrier. Non-comedogenic, fragrance-free." },
  { t: "Mineral SPF50+ Sunscreen", brand: "Bioderma", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop", price: "Wholesale", size: "40ml", description: "Photostable broad-spectrum SPF50+ with 100% mineral filters. Tinted finish suitable for sensitive and intolerant skin. Reef-safe formulation." },
  { t: "Rose Eau de Parfum", brand: "Lancôme", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop", price: "Wholesale", size: "100ml", description: "An elegant Damask rose composition with notes of bergamot, peony and white musk. Crafted in Grasse and aged for six months. Limited annual production." },
  { t: "Bond Repair Hair Treatment", brand: "Olaplex", img: "https://www.instyle.com/thmb/izw2UyeCDGJvuOwGU9pOsz3aM_4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ExclusiveLead_Hair_221-ecd7cf58e8fe4252bc461380a6682142.jpg", price: "Wholesale", size: "100ml", description: "Patented bond-building treatment that repairs broken disulfide bonds caused by chemical, thermal and mechanical damage. Salon-grade results at home." },
  { t: "Niacinamide 10% + Zinc 1%", brand: "The Ordinary", img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop", price: "Wholesale", size: "30ml", description: "High-strength vitamin and mineral blemish formula. Reduces appearance of blemishes and congestion while balancing visible sebum activity." },
  { t: "Thermal Spring Water Mist", brand: "Vichy", img: "https://t4.ftcdn.net/jpg/01/68/51/55/360_F_168515550_AYObBKUuUS3k0fleEsBI0yxVGVYOm5nm.jpg", price: "Wholesale", size: "150ml", description: "Mineralizing thermal water from Vichy, France. Fortifies, soothes and protects sensitive skin. Pure, fragrance-free, suitable after sun exposure or shaving." },
  { t: "Velvet Matte Lipstick", brand: "Maybelline", img: "https://img.magnific.com/free-photo/close-up-collection-make-up-beauty-products_23-2148620012.jpg?semt=ais_hybrid&w=740&q=80", price: "Wholesale", size: "3.9g", description: "Long-wearing matte lipstick with weightless cream-to-powder finish. Saturated pigment in a curated palette of 24 shades. Cruelty-free." },
];

export function Products() {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 sm:py-24 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Featured Catalog</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Best-selling references</h2>
          </div>
          <a href="/wholesale" className="text-sm underline-offset-4 hover:underline text-foreground/70">
            Request the full catalog →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {products.map((p) => (
            <button
              key={p.t}
              type="button"
              onClick={() => setActive(p)}
              className="product-card group rounded-2xl bg-card overflow-hidden hover-lift text-left"
            >
              <div className="relative aspect-square overflow-hidden bg-blush/30">
                <img src={p.img} alt={p.t} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-center rounded-full bg-ivory text-noir text-xs font-medium py-2.5">
                  Quick View
                </span>
              </div>
              <div className="p-4">
                <div className="text-xs tracking-widest uppercase text-muted-foreground">{p.brand}</div>
                <div className="mt-1 font-display text-lg leading-tight line-clamp-2">{p.t}</div>
                <div className="mt-2 text-xs text-accent font-medium">{p.price} pricing on request</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <QuickView product={active} onClose={() => setActive(null)} />
    </section>
  );
}
