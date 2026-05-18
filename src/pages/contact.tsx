import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";
import { PageFrame } from "@/components/site/PageFrame";
import { Seo } from "@/components/site/Seo";

export default function ContactPage() {
  return (
    <PageFrame>
      <Seo
        title="Contact | Cosmetics Distr"
        description="Contact Cosmetics Distr for verified wholesale sourcing, export-ready logistics and direct distributor pricing for cosmetics, skincare, oral care and healthcare buyers."
        path="/contact"
      />
      <Nav />

      <section className="relative overflow-hidden pt-32 pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-0 h-[500px] w-[500px] rounded-full bg-blush/20 blur-3xl animate-glow" />

          <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-champagne/25 blur-3xl animate-glow" />

          <div className="absolute inset-x-0 top-[35%] h-px bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent opacity-60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="space-y-8">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Contact & Support
            </p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Premium global connectivity for authenticated beauty and healthcare distribution.
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Connect with our international sourcing desk for direct distributor pricing,
              export-ready logistics and priority support across retail, pharmacy and wholesale channels.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "HQ", value: "Toronto" },
                { label: "Coverage", value: "80+ countries" },
                { label: "Support", value: "24/7" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-3xl p-6 shadow-luxe border border-border"
                >
                  <div className="text-3xl font-display">
                    {item.value}
                  </div>

                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-[520px]">
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-luxe border border-border bg-card">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
                  alt="Luxury distribution and customer support"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="glass rounded-3xl p-6 shadow-luxe mt-6 lg:absolute lg:-bottom-10 lg:right-0 max-w-sm animate-fade-up">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Priority line
                </div>

                <div className="mt-3 font-display text-3xl">
                  Direct wholesale contact
                </div>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Reach our sales desk immediately with your order details
                  and destination requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </PageFrame>
  );
}