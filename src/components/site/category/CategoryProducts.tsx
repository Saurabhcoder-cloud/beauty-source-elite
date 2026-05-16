import { useState } from "react";
import type { Category } from "@/lib/categories";
import { QuickView, type Product } from "../QuickView";

export function CategoryProducts({ cat }: { cat: Category }) {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <section id="cat-products" className="py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Featured References</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              {cat.name} <span className="italic" style={{ color: cat.accent }}>highlights</span>
            </h2>
          </div>
          <a href="/wholesale" className="text-sm underline-offset-4 hover:underline text-foreground/70">
            Request the full {cat.name.toLowerCase()} catalog →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {cat.products.map((p) => (
            <button
              key={p.t}
              type="button"
              onClick={() => setActive({ ...p, price: "Wholesale" })}
              className="product-card group rounded-2xl bg-card overflow-hidden hover-lift text-left"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/50">
                <img src={p.img} alt={p.t} className="h-full w-full object-cover" loading="lazy" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to top, ${cat.accent}66, transparent)` }}
                />
                <span className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-center rounded-full bg-ivory text-noir text-xs font-medium py-2.5">
                  Quick View
                </span>
              </div>
              <div className="p-4">
                <div className="text-xs tracking-widest uppercase text-muted-foreground">{p.brand}</div>
                <div className="mt-1 font-display text-lg leading-tight line-clamp-2">{p.t}</div>
                <div className="mt-2 text-xs font-medium" style={{ color: cat.accent }}>Wholesale on request</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <QuickView product={active} onClose={() => setActive(null)} />
    </section>
  );
}
