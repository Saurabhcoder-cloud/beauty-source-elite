import { useEffect } from "react";
import { buildMailto, buildWhatsAppUrl } from "@/lib/sales";

export type Product = {
  t: string;
  brand: string;
  img: string;
  price: string;
  description?: string;
  size?: string;
  origin?: string;
};

export function QuickView({ product, onClose }: { product: Product | null; onClose: () => void }) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const subject = `Wholesale inquiry: ${product.t} (${product.brand})`;
  const body = `Hello Cosmetics & Skincare Distr,

I'd like to request wholesale pricing and availability for the following product:

• Brand: ${product.brand}
• Product: ${product.t}
${product.size ? `• Size: ${product.size}\n` : ""}
Please share your MOQ requirements — MOQ varies depending on the product category and brand requirements, along with tiered pricing, lead time and shipping options.

Thank you.`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${product.t}`}
    >
      <div className="absolute inset-0 bg-noir/70 backdrop-blur-md" />
      <div
        className="relative w-full max-w-4xl bg-card rounded-3xl overflow-hidden shadow-luxe grid md:grid-cols-2 max-h-[90vh] overflow-y-auto animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="relative bg-blush/40 aspect-square md:aspect-auto">
          <img src={product.img} alt={product.t} className="absolute inset-0 h-full w-full object-cover" />
        </div>

        <div className="p-8 md:p-10 flex flex-col">
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{product.brand}</div>
          <h3 className="mt-2 font-display text-3xl leading-tight">{product.t}</h3>

          <div className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            In stock · Ready to ship
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed text-sm">
            {product.description ??
              "Sourced directly from the authorized European manufacturer. Each batch arrives with full documentation including certificate of authenticity, batch codes, and lab analysis. Temperature-controlled storage and chain-of-custody shipping included."}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Size</dt>
              <dd className="mt-1">{product.size ?? "Standard retail"}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Origin</dt>
              <dd className="mt-1">{product.origin ?? "European Union"}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">MOQ</dt>
              <dd className="mt-1">MOQ varies depending on the product category and brand requirements.</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Pricing</dt>
              <dd className="mt-1 text-accent font-medium">On request</dd>
            </div>
          </dl>

          <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={buildMailto(subject, body)}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              Request Inquiry
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a
              href={buildWhatsAppUrl(body)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium hover:border-foreground/60 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
