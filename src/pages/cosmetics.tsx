import { CATEGORIES } from "@/lib/categories";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CategoryHero } from "@/components/site/category/CategoryHero";
import { CategoryBrands } from "@/components/site/category/CategoryBrands";
import { CategoryProducts } from "@/components/site/category/CategoryProducts";
import { CategoryCTA } from "@/components/site/category/CategoryCTA";

const cat = CATEGORIES.cosmetics;

export default function Cosmetics() {
  return (
    <main className={`bg-background text-foreground overflow-x-clip ${cat.themeClass}`}>
      <Nav />
      <CategoryHero cat={cat} />
      <CategoryBrands cat={cat} />
      <CategoryProducts cat={cat} />
      <CategoryCTA cat={cat} />
      <Footer />
    </main>
  );
}
