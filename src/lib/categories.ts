// Master category data for Maison Beauté distribution platform
export type CategoryKey = "cosmetics" | "oral-care" | "healthcare";

export type CategoryProduct = {
  t: string;
  brand: string;
  img: string;
  size: string;
  description: string;
};

export type Category = {
  key: CategoryKey;
  slug: string;
  name: string;
  tagline: string;
  kicker: string;
  description: string;
  heroImg: string;
  accent: string; // hex used in inline gradients
  themeClass: string; // class applied to <section>/<main> to swap accent token
  brands: string[];
  products: CategoryProduct[];
  stats: { v: string; l: string }[];
  highlights: string[];
};

export const CATEGORIES: Record<CategoryKey, Category> = {
  cosmetics: {
    key: "cosmetics",
    slug: "/cosmetics",
    name: "Cosmetics & Skincare",
    tagline: "Editorial luxury beauty",
    kicker: "Maison Beauté · Beauty",
    description:
      "Authorized European wholesale of luxury skincare, makeup and fragrances — from clinical dermo-cosmetics to couture houses.",
    heroImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80",
    accent: "#b08968",
    themeClass: "theme-cosmetics",
    brands: [
      "L'Oréal Paris","Nivea","Garnier","Maybelline New York","La Roche-Posay",
      "Lancôme","Vichy","CeraVe","Eucerin","Dove","Estée Lauder","Clinique",
      "Bioderma","Avène","Chanel Beauty","Dior Beauty","Charlotte Tilbury",
      "Kérastase","The Ordinary","KIKO Milano","Essence","Catrice","MAC Cosmetics",
      "Yves Saint Laurent Beauté","Caudalie","L'Occitane en Provence","Weleda",
      "Uriage","Rimmel London","NYX Professional Makeup",
    ],
    products: [
      { t: "Vitamin C Brightening Serum", brand: "La Roche-Posay", size: "30ml", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80", description: "Stabilized 10% pure vitamin C serum that visibly brightens and evens skin tone." },
      { t: "Hyaluronic Daily Moisturizer", brand: "CeraVe", size: "473ml", img: "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=800&q=80", description: "Lightweight, oil-free moisturizer with three essential ceramides." },
      { t: "Mineral SPF50+ Sunscreen", brand: "Bioderma", size: "40ml", img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80", description: "Photostable broad-spectrum SPF50+ with 100% mineral filters." },
      { t: "Velvet Matte Lipstick", brand: "Maybelline", size: "3.9g", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80", description: "Long-wearing matte lipstick with weightless cream-to-powder finish." },
      { t: "Niacinamide 10% + Zinc 1%", brand: "The Ordinary", size: "30ml", img: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&q=80", description: "High-strength vitamin and mineral blemish formula." },
      { t: "Thermal Spring Water Mist", brand: "Vichy", size: "150ml", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80", description: "Mineralizing thermal water from Vichy, France." },
      { t: "Rose Eau de Parfum", brand: "Lancôme", size: "100ml", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80", description: "An elegant Damask rose composition crafted in Grasse." },
      { t: "Bond Repair Treatment", brand: "Kérastase", size: "100ml", img: "https://images.unsplash.com/photo-1626015449802-d031cd24bd8d?w=800&q=80", description: "Patented bond-building treatment for chemically treated hair." },
    ],
    stats: [
      { v: "30+", l: "Luxury Houses" },
      { v: "2.5K+", l: "References" },
      { v: "80+", l: "Countries" },
      { v: "24h", l: "Quote Reply" },
    ],
    highlights: [
      "Authorized European sourcing",
      "Full batch traceability & COA",
      "Container, pallet or carton volumes",
      "EXW · FOB · CIF · DDP delivery",
    ],
  },

  "oral-care": {
    key: "oral-care",
    slug: "/oral-care",
    name: "Oral Care",
    tagline: "Clinical freshness, premium finish",
    kicker: "Maison Beauté · Oral",
    description:
      "From dental-pharmacy bestsellers to enamel-repair innovations — a complete oral care portfolio for retail, pharmacy and dental distribution.",
    heroImg:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=1200&q=80",
    accent: "#22b8cf",
    themeClass: "theme-oral",
    brands: [
      "Colgate","Marvis","Oral-B","Sensodyne","Parodontax","Elmex","Meridol",
      "Signal","Aquafresh","Corsodyl","Zendium","Curaprox","Jordan","Listerine",
      "TePe","GUM","Vitis","Biorepair","Blend-a-med","Odol-med3","Pearls & Dents",
      "Lacalut","Regenerate","TheraBreath","Hello","Arm & Hammer","CB12",
      "Denivit","Dr. Best","Swissdent",
    ],
    products: [
      { t: "Whitening Mint Toothpaste", brand: "Marvis", size: "75ml", img: "https://images.unsplash.com/photo-1559591935-c6c92c6ff6c5?w=800&q=80", description: "Italian luxury toothpaste with intense mint and whitening complex." },
      { t: "Enamel Repair Toothpaste", brand: "Sensodyne", size: "75ml", img: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&q=80", description: "Daily enamel repair formula clinically proven for sensitive teeth." },
      { t: "Pro 5000 Electric Toothbrush", brand: "Oral-B", size: "1 unit", img: "https://images.unsplash.com/photo-1612886623306-c89c2fcd6c0e?w=800&q=80", description: "Bluetooth-enabled oscillating brush with pressure sensor." },
      { t: "Cool Mint Mouthwash", brand: "Listerine", size: "1L", img: "https://images.unsplash.com/photo-1556228852-80c7debbfc6c?w=800&q=80", description: "Antibacterial mouthwash with four essential oils. 24-hour protection." },
      { t: "CS 5460 Ultra Soft Brush", brand: "Curaprox", size: "1 unit", img: "https://images.unsplash.com/photo-1559591935-c6c92c6ff6c5?w=800&q=80", description: "5,460 ultra-soft Curen filaments for gentle plaque removal." },
      { t: "Gum Protection Toothpaste", brand: "Parodontax", size: "75ml", img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80", description: "Daily fluoride toothpaste clinically proven to reduce bleeding gums." },
      { t: "Caries Protection Rinse", brand: "Elmex", size: "400ml", img: "https://images.unsplash.com/photo-1556228852-80c7debbfc6c?w=800&q=80", description: "Amine fluoride mouth rinse for daily caries protection." },
      { t: "Biorepair Plus Sensitive", brand: "Biorepair", size: "75ml", img: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&q=80", description: "Microrepair technology repairs enamel and dentin surface." },
    ],
    stats: [
      { v: "30+", l: "Brands" },
      { v: "1.2K+", l: "SKUs" },
      { v: "60+", l: "Dental Chains" },
      { v: "ISO", l: "Certified" },
    ],
    highlights: [
      "Pharmacy & dental clinic supply",
      "Cold-chain & humidity controlled",
      "Multilingual packaging on request",
      "Private label & co-pack available",
    ],
  },

  healthcare: {
    key: "healthcare",
    slug: "/healthcare",
    name: "Healthcare",
    tagline: "Pharmaceutical-grade distribution",
    kicker: "Maison Beauté · Health",
    description:
      "Authorized international distribution of OTC pharmaceuticals, medical devices and consumer healthcare from the world's leading manufacturers.",
    heroImg:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80",
    accent: "#2563eb",
    themeClass: "theme-healthcare",
    brands: [
      "Johnson & Johnson","Bayer","Pfizer","Sanofi","Roche","Novartis",
      "GlaxoSmithKline","AstraZeneca","Merck","Abbott","AbbVie",
      "Boehringer Ingelheim","Novo Nordisk","Eli Lilly","Teva","Fresenius",
      "Siemens Healthineers","Philips Healthcare","GE HealthCare","Medtronic",
      "Stryker","Becton Dickinson","Zimmer Biomet","Coloplast","Hartmann",
      "Essity","Procter & Gamble Health","Haleon","Viatris","Takeda",
    ],
    products: [
      { t: "Surgical Mask Type IIR (box of 50)", brand: "Hartmann", size: "50 pcs", img: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&q=80", description: "EN 14683 Type IIR three-layer surgical mask with BFE ≥ 98%." },
      { t: "Sterile Gauze Compress 10×10", brand: "Essity", size: "100 pcs", img: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?w=800&q=80", description: "Sterile non-woven gauze compress for wound care." },
      { t: "Vitamin D3 1000 IU", brand: "Bayer", size: "60 tabs", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80", description: "Daily vitamin D3 supplement for bone and immune health." },
      { t: "Glucose Test Strips", brand: "Abbott", size: "50 pcs", img: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?w=800&q=80", description: "FreeStyle compatible blood glucose test strips." },
      { t: "Disposable Examination Gloves", brand: "Becton Dickinson", size: "100 pcs", img: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&q=80", description: "Powder-free nitrile examination gloves, CE & FDA." },
      { t: "Digital Thermometer", brand: "Philips Healthcare", size: "1 unit", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", description: "Clinical-grade digital thermometer, 10-second reading." },
      { t: "Insulin Pen Needles 4mm", brand: "Novo Nordisk", size: "100 pcs", img: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?w=800&q=80", description: "Ultra-thin pen needles compatible with all standard insulin pens." },
      { t: "Wound Care Adhesive Bandages", brand: "Johnson & Johnson", size: "100 pcs", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", description: "Sterile adhesive bandages, hypoallergenic, latex-free." },
    ],
    stats: [
      { v: "30+", l: "Manufacturers" },
      { v: "GDP", l: "Certified Logistics" },
      { v: "100+", l: "Export Markets" },
      { v: "24/7", l: "Cold Chain" },
    ],
    highlights: [
      "GDP-compliant pharmaceutical logistics",
      "Full regulatory documentation (CE, CPP, FSC)",
      "Validated cold-chain 2–8 °C & ambient",
      "Tender & government procurement support",
    ],
  },
};

export const CATEGORY_LIST: Category[] = [
  CATEGORIES.cosmetics,
  CATEGORIES["oral-care"],
  CATEGORIES.healthcare,
];
