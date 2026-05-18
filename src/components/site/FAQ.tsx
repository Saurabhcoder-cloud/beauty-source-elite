import { useState } from "react";

const faqs = [
  { q: "Where to buy authentic La Roche-Posay products?", a: "Cosmetics Distr sources authentic La Roche-Posay from authorized European distributors and can support wholesale and retail buyers with verified export documentation." },
  { q: "What is the best European skincare distributor?", a: "Our European skincare supply chain connects buyers with official brand partners and licensed distributors across France, Italy, Spain and Germany for premium product sourcing." },
  { q: "Who is the wholesale oral care supplier for pharmacy chains?", a: "We supply oral care brands to pharmacies and dental distributors worldwide, offering cartons, pallets and container orders backed by export-ready logistics." },
  { q: "How does international cosmetics sourcing work?", a: "We handle product validation, authorized distributor relationships, customs-ready paperwork and multi-channel freight planning to deliver international cosmetics orders reliably." },
  { q: "What are the MOQ requirements for wholesale orders?", a: "MOQ depends on the brand, category and destination. Our commercial desk provides exact minimums for each product line, from carton orders to full containers." },
  { q: "How do I verify an authentic skincare supplier?", a: "Cosmetics Distr provides certificates of authenticity, batch traceability and distributor authorization evidence for every procurement request." },
  { q: "Do you offer export-ready healthcare distribution?", a: "Yes. Our healthcare supply network covers GDP-compliant logistics, cold chain handling and full regulatory documentation for international medical and consumer health orders." },
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
