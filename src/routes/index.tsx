import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Brands } from "@/components/site/Brands";
import { Categories } from "@/components/site/Categories";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Wholesale } from "@/components/site/Wholesale";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Maison Beauté — Authentic Luxury Cosmetics & Skincare Distribution";
const DESC = "European wholesale distributor of authentic luxury cosmetics, skincare and fragrances. La Roche-Posay, The Ordinary, Olaplex, Bioderma & more — shipped to 80+ countries.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "cosmetics wholesale supplier, authentic skincare distributor, luxury beauty products, wholesale skincare, original fragrances, European skincare brands, premium cosmetics supplier" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Maison Beauté",
          url: "/",
          description: DESC,
          address: {
            "@type": "PostalAddress",
            streetAddress: "14 Rue Saint-Honoré",
            addressLocality: "Paris",
            postalCode: "75001",
            addressCountry: "FR",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <Brands />
      <Categories />
      <WhyUs />
      <About />
      <Products />
      <Wholesale />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
