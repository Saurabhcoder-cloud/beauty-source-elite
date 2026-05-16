import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Wholesale } from "@/components/site/Wholesale";
import { PageFrame } from "@/components/site/PageFrame";

export default function WholesalePage() {
  return (
    <PageFrame>
      <Nav />
      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-noir text-ivory">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] rounded-full bg-rose-gold/20 blur-3xl animate-glow" />
          <div className="absolute right-0 top-16 h-[420px] w-[420px] rounded-full bg-champagne/20 blur-3xl animate-glow" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-noir/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-ivory/70">
              <span className="h-2 w-2 rounded-full bg-rose-gold animate-pulse" />
              Luxury wholesale pricing with enterprise logistics.
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Premium wholesale quotes for global beauty, healthcare and oral care distribution.
            </h1>
            <p className="max-w-2xl text-lg text-ivory/70 leading-relaxed">
              Request packaging, freight and pricing plans for cartons, pallets or containers — all backed by authorized distributor documentation and global logistics support.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Fast response", value: "24h" },
                { label: "Export-ready", value: "100%" },
                { label: "Market access", value: "80+" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-3xl p-6 shadow-luxe border border-ivory/10">
                  <div className="text-3xl font-display">{item.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-ivory/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-luxe border border-ivory/10 bg-card/20">
              <img
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&q=80"
                alt="High-end container shipping and global logistics"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="glass rounded-3xl p-6 shadow-luxe absolute -bottom-16 right-0 max-w-sm animate-fade-up">
              <div className="text-xs uppercase tracking-[0.3em] text-ivory/60">Secure supply</div>
              <div className="mt-3 font-display text-3xl">Verified container availability</div>
              <p className="mt-3 text-sm text-ivory/70 leading-relaxed">
                Full container, pallet and carton sourcing supported by bonded warehousing and dedicated seller relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Wholesale />
      <Footer />
    </PageFrame>
  );
}
