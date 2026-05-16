// Central sales contact config — change once, applies to all CTAs
export const SALES_EMAIL = "sales@cosmeticsdistr.com";
export const SALES_WHATSAPP = "18076956835"; // international format, no +

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${SALES_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export function buildMailto(subject: string, body: string) {
  return `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
