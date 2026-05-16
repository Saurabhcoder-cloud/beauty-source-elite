import { createFileRoute } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/categories";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CategoryHero } from "@/components/site/category/CategoryHero";
import { CategoryBrands } from "@/components/site/category/CategoryBrands";
import { CategoryProducts } from "@/components/site/category/CategoryProducts";
import { CategoryCTA } from "@/components/site/category/CategoryCTA";

const cat = CATEGORIES["oral-care"];
const TITLE = "Oral Care Wholesale — Colgate, Oral-B, Marvis | Maison Beauté";
const DESC = "Premium oral care wholesale: Colgate, Oral-B, Sensodyne, Marvis, Curaprox, Listerine and 30+ brands for pharmacies, dental clinics and retail chains.";

export const Route = createFileRoute("/oral-care")({
  component: Page,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: cat.heroImg },
    ],
    links: [{ rel: "canonical", href: "/oral-care" }],
  }),
});

function Page() {
  return (
    <main className={`bg-background text-foreground overflow-x-clip ${cat.themeClass}`}>
      {/* Floating bubbles */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute top-1/4 left-[10%] h-3 w-3 rounded-full bg-cyan-300/40 animate-bubble" />
        <div className="absolute top-1/2 left-[80%] h-2 w-2 rounded-full bg-cyan-200/50 animate-bubble" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 left-[30%] h-4 w-4 rounded-full bg-sky-200/30 animate-bubble" style={{ animationDelay: "4s" }} />
      </div>
      <Nav />
      <CategoryHero cat={cat} />
      <CategoryBrands cat={cat} />
      <CategoryProducts cat={cat} />
      <CategoryCTA cat={cat} />
      <Footer />
    </main>
  );
}
