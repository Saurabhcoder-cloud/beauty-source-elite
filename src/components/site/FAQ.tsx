import { useState } from "react";

const faqs = [
  { q: "Are all products 100% authentic?", a: "Yes. Every reference is sourced through authorized channels with full documentation, batch codes and certificates of authenticity available on request." },
  { q: "Do you offer wholesale pricing?", a: "Absolutely. Pricing is tiered by volume — from carton minimums to full container loads. Submit an inquiry and our team replies within one business day." },
  { q: "Is worldwide shipping available?", a: "We dispatch to 80+ countries via air, sea and express courier. Incoterms are flexible: EXW, FOB, CIF or DDP depending on your needs." },
  { q: "What are the typical MOQs?", a: "MOQ varies depending on the product category and brand requirements. Our sourcing desk provides exact minimums for each brand and destination on enquiry." },
  { q: "Do you have brand authorizations?", a: "Yes — we hold direct authorizations and supply agreements with European manufacturers and authorized distributors. Documentation provided upon contract." },
  { q: "What are your delivery timelines?", a: "Average dispatch is within 48 hours of cleared payment. Express orders ship same-day. Sea freight transit times depend on destination port." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Frequently Asked</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Everything you need to know</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg md:text-xl">{f.q}</span>
                  <span className={`shrink-0 h-9 w-9 rounded-full bg-foreground text-background flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
