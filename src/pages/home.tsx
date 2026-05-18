import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Brands } from "@/components/site/Brands";
import { MasterCategories } from "@/components/site/MasterCategories";
import { Categories } from "@/components/site/Categories";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Wholesale } from "@/components/site/Wholesale";
import { BrandDirectory } from "@/components/site/BrandDirectory";
import { WorldDistribution } from "@/components/site/WorldDistribution";
import { EnterpriseTrust } from "@/components/site/EnterpriseTrust";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Seo } from "@/components/site/Seo";

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <Seo
        title="Cosmetics Distr — Global Distributor of Cosmetics, Oral Care & Healthcare"
        description="Cosmetics Distr is a Canadian-based global distributor of authentic cosmetics, oral care and healthcare products. We provide wholesale sourcing, verified EU distribution and export-ready logistics for retailers and importers worldwide."
        path="/"
        keywords={["authentic cosmetics distributor", "European skincare supplier", "oral care wholesale distributor", "wholesale beauty products", "healthcare distribution", "global beauty wholesaler"]}
      />
      <Nav />
      <Hero />
      <MasterCategories />
      <Brands />
      <Categories />
      <WhyUs />
      <About />
      <Products />
      <BrandDirectory />
      <WorldDistribution />
      <EnterpriseTrust />
      <Wholesale />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
