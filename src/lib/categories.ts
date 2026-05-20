// Master category data for Cosmetics Distr distribution platform
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
    kicker: "Cosmetics Distr · Beauty",
    description:
      "Authorized European wholesale of luxury skincare, makeup and fragrances — from clinical dermo-cosmetics to couture houses.",
    heroImg:
      "https://aakarfragrance.com/assets/img/portfolio/3.jpg",
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
      { t: "Vitamin C Brightening Serum", brand: "La Roche-Posay", size: "30ml", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop", description: "Stabilized 10% pure vitamin C serum that visibly brightens and evens skin tone." },
      { t: "Hyaluronic Daily Moisturizer", brand: "CeraVe", size: "473ml", img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop", description: "Lightweight, oil-free moisturizer with three essential ceramides." },
      { t: "Mineral SPF50+ Sunscreen", brand: "Bioderma", size: "40ml", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop", description: "Photostable broad-spectrum SPF50+ with 100% mineral filters." },
      { t: "Velvet Matte Lipstick", brand: "Maybelline", size: "3.9g", img: "https://img.magnific.com/free-photo/close-up-collection-make-up-beauty-products_23-2148620012.jpg?semt=ais_hybrid&w=740&q=80", description: "Long-wearing matte lipstick with weightless cream-to-powder finish." },
      { t: "Niacinamide 10% + Zinc 1%", brand: "The Ordinary", size: "30ml", img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop", description: "High-strength vitamin and mineral blemish formula." },
      { t: "Thermal Spring Water Mist", brand: "Vichy", size: "150ml", img: "https://t4.ftcdn.net/jpg/01/68/51/55/360_F_168515550_AYObBKUuUS3k0fleEsBI0yxVGVYOm5nm.jpg", description: "Mineralizing thermal water from Vichy, France." },
      { t: "Rose Eau de Parfum", brand: "Lancôme", size: "100ml", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop", description: "An elegant Damask rose composition crafted in Grasse." },
      { t: "Bond Repair Treatment", brand: "Kérastase", size: "100ml", img: "https://www.instyle.com/thmb/izw2UyeCDGJvuOwGU9pOsz3aM_4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ExclusiveLead_Hair_221-ecd7cf58e8fe4252bc461380a6682142.jpg", description: "Patented bond-building treatment for chemically treated hair." },
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
    kicker: "Cosmetics Distr · Oral",
    description:
      "From dental-pharmacy bestsellers to enamel-repair innovations — a complete oral care portfolio for retail, pharmacy and dental distribution.",
    heroImg:
      "https://cosmeticscience.net/wp-content/uploads/2024/07/AdobeStock_366763950-scaled.jpeg",
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
      { t: "Whitening Mint Toothpaste", brand: "Marvis", size: "75ml", img: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/toothpaste/7/q/l/75-whitening-mint-toothpaste-3-8-ounces-1-na-marvis-original-imah7a3nfsz2atfh.jpeg?q=70", description: "Italian luxury toothpaste with intense mint and whitening complex." },
      { t: "Enamel Repair Toothpaste", brand: "Sensodyne", size: "75ml", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1L34cOdU4yvV45cwECitIY_BiWmj0yT8tw&s", description: "Daily enamel repair formula clinically proven for sensitive teeth." },
      { t: "Pro 5000 Electric Toothbrush", brand: "Oral-B", size: "1 unit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpiUBIkVqP9OsZBZ6LER6vllCVBFqhDNW1ag&s", description: "Bluetooth-enabled oscillating brush with pressure sensor." },
      { t: "Cool Mint Mouthwash", brand: "Listerine", size: "1L", img: "https://cdn.grofers.com/da/cms-assets/cms/product/rc-upload-1778250493653-893.jpg", description: "Antibacterial mouthwash with four essential oils. 24-hour protection." },
      { t: "CS 5460 Ultra Soft Brush", brand: "Curaprox", size: "1 unit", img: "https://cdn01.pharmeasy.in/dam/products_otc/G28849/curaprox-cs-5460-ultra-soft-tooth-brush-pack-of-4-2-1722338273.jpg", description: "5,460 ultra-soft Curen filaments for gentle plaque removal." },
      { t: "Gum Protection Toothpaste", brand: "Parodontax", size: "75ml", img: "https://m.media-amazon.com/images/I/615oM6vpFXL.jpg", description: "Daily fluoride toothpaste clinically proven to reduce bleeding gums." },
      { t: "Caries Protection Rinse", brand: "Elmex", size: "400ml", img: "https://static.beautytocare.com/cdn-cgi/image/width=200,height=200,f=auto/media/catalog/product//e/l/elmex-caries-protection-oral-elixir-400ml.jpg", description: "Amine fluoride mouth rinse for daily caries protection." },
      { t: "Biorepair Plus Sensitive", brand: "Biorepair", size: "75ml", img: "https://m.media-amazon.com/images/I/71J5280tlsL.jpg", description: "Microrepair technology repairs enamel and dentin surface." },
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
    kicker: "Cosmetics Distr · Health",
    description:
      "Authorized international distribution of OTC pharmaceuticals, medical devices and consumer healthcare from the world's leading manufacturers.",
    heroImg:
      "https://www.cardinalhealth.com/content/dam/corp/products/professional-products/medical-products/grid/grid-square-advanced-wound-care.jpg",
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
      { t: "Surgical Mask Type IIR (box of 50)", brand: "Hartmann", size: "50 pcs", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXNfsN9WA6tEBrlaMOGoJWyZXpXy_tmj-5w&s", description: "EN 14683 Type IIR three-layer surgical mask with BFE ≥ 98%." },
      { t: "Sterile Gauze Compress 10×10", brand: "Essity", size: "100 pcs", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwy5Ts56PenQ5Np1C_TWjg28N3sMnXhNJeQ&s", description: "Sterile non-woven gauze compress for wound care." },
      { t: "Vitamin D3 1000 IU", brand: "Bayer", size: "60 tabs", img: "https://cdn01.pharmeasy.in/dam/products_otc/R04843/briyo-supplements-vitamin-d3-1000-iu-softgels-bone-health-support-and-muscle-function-90-softgels-6.01-1771916918.jpg", description: "Daily vitamin D3 supplement for bone and immune health." },
      { t: "Glucose Test Strips", brand: "Abbott", size: "50 pcs", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87vrZboHR6o4q5kRgRneNxBvSYS-VmG-B6Q&s", description: "FreeStyle compatible blood glucose test strips." },
      { t: "Disposable Examination Gloves", brand: "Becton Dickinson", size: "100 pcs", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFYS15ADb7mOq4pzVJCpDSDz0KXMHwZrJvg&s", description: "Powder-free nitrile examination gloves, CE & FDA." },
      { t: "Digital Thermometer", brand: "Philips Healthcare", size: "1 unit", img: "https://cdn.moglix.com/p/WqqHJbDikodWj-xxlarge.jpg", description: "Clinical-grade digital thermometer, 10-second reading." },
      { t: "Insulin Pen Needles 4mm", brand: "Novo Nordisk", size: "100 pcs", img: "https://m.media-amazon.com/images/I/617ngZyQj6L.jpg", description: "Ultra-thin pen needles compatible with all standard insulin pens." },
      { t: "Wound Care Adhesive Bandages", brand: "Johnson & Johnson", size: "100 pcs", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLgXIHMBsaMrICg8m3s4yml-XangTr-Pntw&s", description: "Sterile adhesive bandages, hypoallergenic, latex-free." },
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
