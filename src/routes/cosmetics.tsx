import { createFileRoute } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/categories";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CategoryHero } from "@/components/site/category/CategoryHero";
import { CategoryBrands } from "@/components/site/category/CategoryBrands";
import { CategoryProducts } from "@/components/site/category/CategoryProducts";
import { CategoryCTA } from "@/components/site/category/CategoryCTA";

const cat = CATEGORIES.cosmetics;
const TITLE = "Cosmetics & Skincare Wholesale — Maison Beauté";
const DESC = "Authorized wholesale of L'Oréal, La Roche-Posay, Lancôme, Chanel Beauty, The Ordinary and 30+ luxury houses. Shipped to 80+ countries.";

export const Route = createFileRoute("/cosmetics")({
  component: Page,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: cat.heroImg },
    ],
    links: [{ rel: "canonical", href: "/cosmetics" }],
  }),
});

function Page() {
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
