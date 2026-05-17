import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { About } from "@/components/site/About";
import { PageFrame } from "@/components/site/PageFrame";

export default function AboutPage() {
  return (
    <PageFrame>
      <Nav />

      <section className="relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-44 left-1/2 h-[560px] w-[560px] rounded-full bg-champagne/20 blur-3xl animate-glow" />
          <div className="absolute -bottom-28 right-0 h-[520px] w-[520px] rounded-full bg-blush/20 blur-3xl animate-glow" />
          <div className="absolute inset-x-0 top-[30%] h-1 bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent opacity-50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 grid gap-10 sm:gap-12 lg:gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Authentic sourcing. Global luxury distribution.
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              The enterprise partner for authenticated beauty, skincare and healthcare distribution.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We combine premier distributor relationships, global logistics and export-ready service to bring high-demand products to buyers worldwide with luxury-level precision.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Markets", value: "100+" },
                { label: "Partners", value: "45+" },
                { label: "Response", value: "24/7" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-3xl p-6 shadow-luxe border border-border">
                  <div className="text-3xl font-display">{stat.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-luxe">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aaa1f15a5045?w=1200&q=80"
                alt="High-end product sourcing and distribution"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="glass rounded-3xl p-6 shadow-luxe absolute -bottom-12 left-0 max-w-md animate-fade-up">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Executive operations</div>
              <div className="mt-3 font-display text-3xl">Premium logistics and export-ready coordination</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Bonded storage, prioritized customs clearance and a global distribution network built for luxury brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Footer />
    </PageFrame>
  );
}
