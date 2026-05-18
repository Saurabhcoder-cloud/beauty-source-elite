import { CATEGORIES } from "@/lib/categories";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CategoryHero } from "@/components/site/category/CategoryHero";
import { CategoryBrands } from "@/components/site/category/CategoryBrands";
import { CategoryProducts } from "@/components/site/category/CategoryProducts";
import { CategoryCTA } from "@/components/site/category/CategoryCTA";
import { Seo } from "@/components/site/Seo";

const cat = CATEGORIES.cosmetics;

export default function Cosmetics() {
  return (
    <main className={`bg-background text-foreground overflow-x-clip ${cat.themeClass}`}>
      <Seo
        title="Cosmetics & Skincare Wholesale | Cosmetics Distr"
        description="Cosmetics Distr supplies authorized European cosmetics and skincare wholesale products with container-ready export logistics and premium distributor sourcing."
        path="/cosmetics"
      />
      <Nav />
      <CategoryHero cat={cat} />
      <CategoryBrands cat={cat} />
      <CategoryProducts cat={cat} />
      <CategoryCTA cat={cat} />
      <Footer />
    </main>
  );
}
