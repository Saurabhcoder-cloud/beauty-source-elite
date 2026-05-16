import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { About } from "@/components/site/About";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <Nav />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-72 w-72 rounded-full bg-blush/30 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-champagne/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">About Cosmetics &amp; Skincare Distr</p>
              <h1 className="mt-4 font-display text-5xl md:text-6xl leading-tight">
                Enterprise-grade distribution for authentic beauty and skincare brands.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                A premium Canadian-based sourcing company offering verified pre-order access to high-demand cosmetics, skincare, oral care and healthcare products worldwide.
              </p>
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-luxe">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"
                alt="Premium warehouse and distribution operations"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <About />
      <Footer />
    </main>
  );
}
