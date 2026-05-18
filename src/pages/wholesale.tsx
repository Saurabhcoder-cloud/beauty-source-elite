import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Wholesale } from "@/components/site/Wholesale";
import { PageFrame } from "@/components/site/PageFrame";
import { Seo } from "@/components/site/Seo";

export default function WholesalePage() {
  return (
    <PageFrame>
      <Seo
        title="Wholesale | Cosmetics Distr"
        description="Request wholesale pricing and export-ready logistics for authentic cosmetics, oral care and healthcare products. Cosmetics Distr handles carton, pallet and container orders with verified distributor support."
        path="/wholesale"
      />
      <Nav />

      <section className="relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-24 bg-gradient-to-b from-[#f8efea] via-[#f5ece6] to-[#efe3dc] text-[#1f1a17]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] rounded-full bg-[#d9b7a7]/20 blur-3xl animate-glow" />

          <div className="absolute right-0 top-16 h-[420px] w-[420px] rounded-full bg-[#f0d9c8]/20 blur-3xl animate-glow" />

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#ead8cf]/70 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 grid gap-10 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/50 backdrop-blur-xl border border-[#d8c3b7] px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#7b6a5f] shadow-lg">
              <span className="h-2 w-2 rounded-full bg-[#d8a48f] animate-pulse" />
              Luxury wholesale pricing with enterprise logistics.
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Premium wholesale quotes for global beauty,
              healthcare and oral care distribution.
            </h1>

            <p className="max-w-2xl text-lg text-[#5f5148] leading-relaxed">
              Request packaging, freight and pricing plans for cartons,
              pallets or containers — all backed by authorized distributor
              documentation and global logistics support.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Fast response", value: "24h" },
                { label: "Export-ready", value: "100%" },
                { label: "Market access", value: "80+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl p-6 shadow-2xl border border-[#d8c3b7] bg-white/50 backdrop-blur-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="text-3xl font-display">
                    {item.value}
                  </div>

                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-[#7b6a5f]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border border-[#d8c3b7] bg-white/40">
              <img
                src="https://www.cardinalhealth.com/content/dam/corp/products/professional-products/medical-products/grid/grid-square-advanced-wound-care.jpg"
                alt="Clinical healthcare and distribution logistics"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            <div className="rounded-3xl p-6 shadow-2xl absolute -bottom-16 right-0 max-w-sm bg-white/60 backdrop-blur-xl border border-[#d8c3b7] animate-fade-up">
              <div className="text-xs uppercase tracking-[0.3em] text-[#7b6a5f]">
                Secure supply
              </div>

              <div className="mt-3 font-display text-3xl text-[#1f1a17]">
                Verified container availability
              </div>

              <p className="mt-3 text-sm text-[#5f5148] leading-relaxed">
                Full container, pallet and carton sourcing supported
                by bonded warehousing and dedicated seller relationships.
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