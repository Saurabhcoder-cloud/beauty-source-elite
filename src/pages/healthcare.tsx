import { CATEGORIES } from "@/lib/categories";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CategoryHero } from "@/components/site/category/CategoryHero";
import { CategoryBrands } from "@/components/site/category/CategoryBrands";
import { CategoryProducts } from "@/components/site/category/CategoryProducts";
import { CategoryCTA } from "@/components/site/category/CategoryCTA";

const cat = CATEGORIES.healthcare;

export default function Healthcare() {
  return (
    <main className={`bg-background text-foreground overflow-x-clip ${cat.themeClass}`}>
      <Nav />
      <CategoryHero cat={cat} />

      {/* Regulatory trust bar */}
      <section className="border-y border-border bg-secondary/30 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {["GDP Certified", "ISO 13485", "CE Marked", "FDA Registered", "WHO Compliant", "Cold Chain 2–8°C"].map((c) => (
            <span key={c} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              {c}
            </span>
          ))}
        </div>
      </section>

      <CategoryBrands cat={cat} />
      <CategoryProducts cat={cat} />
      <CategoryCTA cat={cat} />
      <Footer />
    </main>
  );
}
