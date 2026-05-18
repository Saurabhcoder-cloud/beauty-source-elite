import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FAQ } from "@/components/site/FAQ";
import { PageFrame } from "@/components/site/PageFrame";
import { Seo } from "@/components/site/Seo";

export default function FAQPage() {
  return (
    <PageFrame>
      <Seo
        title="FAQ | Cosmetics Distr"
        description="Frequently asked questions about authentic cosmetics distribution, European skincare suppliers, wholesale oral care sourcing, MOQ and global export logistics from Cosmetics Distr."
        path="/faq"
      />
      <Nav />

      <section className="relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] rounded-full bg-champagne/15 blur-3xl animate-glow" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blush/15 blur-3xl animate-glow" />
          <div className="absolute inset-x-0 top-[35%] h-px bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent opacity-60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 grid gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-end">
          <div className="space-y-8">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Frequently Asked</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              The premium sourcing, fulfillment and luxury distribution intelligence you need.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Discover enterprise-grade answers to questions about authenticity, shipping, MOQ, logistics and worldwide wholesale support.
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="glass rounded-3xl p-8 shadow-luxe border border-border max-w-md">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Need a tailored answer?</div>
              <div className="mt-4 font-display text-3xl">Contact our sourcing desk directly</div>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                Our team responds to premium wholesale enquiries with verified documentation, pricing and shipping guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="relative py-16 sm:py-20">
        <div className="glass rounded-3xl p-10 shadow-luxe border border-border mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Still curious?</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">Our expert team can validate stock, logistics and brand authorizations for your order.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Whether you need MOQ details, shipping timelines or destination-specific customs assistance, our commercial support team is ready to guide your premium purchase.
              </p>
            </div>
            <div className="space-y-4">
              <a href="/contact" className="inline-flex w-full items-center justify-center rounded-full bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-accent transition shadow-luxe">
                Speak with Sales
              </a>
              <a href="/wholesale" className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background/80 px-8 py-4 text-sm font-medium hover:border-foreground/60 transition shadow-luxe">
                Request wholesale pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageFrame>
  );
}
