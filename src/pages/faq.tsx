import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FAQ } from "@/components/site/FAQ";

export default function FAQPage() {
  return (
    <main className="bg-background text-foreground overflow-x-clip">
      <Nav />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-72 w-72 rounded-full bg-champagne/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blush/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Frequently Asked</p>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-tight">
              Authentic sourcing, logistics and wholesale distribution answers.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Explore our enterprise-grade FAQ page for verified product sourcing, global shipping and MOQ guidance across our premium distribution services.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
