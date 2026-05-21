const brands = [
  [
  "La Roche-Posay",
  "The Ordinary",
  "Olaplex",
  "Bioderma",
  "CeraVe",
  "Vichy",
  "Garnier",
  "L'Oréal",
  "Maybelline",
  "Victoria's Secret",

  "L'Oréal Paris",
  "Nivea",
  "Lancôme",
  "Eucerin",
  "Dove",
  "Estée Lauder",
  "Clinique",
  "Avène",
  "Chanel Beauty",
  "Dior Beauty",
  "Charlotte Tilbury",
  "Kérastase",
  "KIKO Milano",
  "Essence",
  "Catrice",
  "MAC Cosmetics",
  "Yves Saint Laurent Beauté",
  "Caudalie",
  "L'Occitane en Provence",
  "Weleda",
  "Uriage",
  "Rimmel London",
  "NYX Professional Makeup",

  "Colgate",
  "Marvis",
  "Oral-B",
  "Sensodyne",
  "Parodontax",
  "Elmex",
  "Meridol",
  "Signal",
  "Aquafresh",
  "Corsodyl",
  "Zendium",
  "Curaprox",
  "Jordan",
  "Listerine",
  "TePe",
  "GUM",
  "Vitis",
  "Biorepair",
  "Blend-a-med",
  "Odol-med3",
  "Pearls & Dents",
  "Lacalut",
  "Regenerate",
  "TheraBreath",
  "Hello",
  "Arm & Hammer",
  "CB12",
  "Denivit",
  "Dr. Best",
  "Swissdent",

  "Johnson & Johnson",
  "Bayer",
  "Pfizer",
  "Sanofi",
  "Roche",
  "Novartis",
  "GlaxoSmithKline (GSK)",
  "AstraZeneca",
  "Merck",
  "Abbott",
  "AbbVie",
  "Boehringer Ingelheim",
  "Novo Nordisk",
  "Eli Lilly",
  "Teva",
  "Fresenius",
  "Siemens Healthineers",
  "Philips Healthcare",
  "GE HealthCare",
  "Medtronic",
  "Stryker",
  "Becton Dickinson (BD)",
  "Zimmer Biomet",
  "Coloplast",
  "Hartmann",
  "Essity",
  "Procter & Gamble Health",
  "Haleon",
  "Viatris",
  "Takeda",
];

export function Brands() {
  const loop = [...brands, ...brands];
  return (
    <section id="brands" className="py-20 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 mb-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Authorized Distribution</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Partnered with the world's most loved brands</h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary/80 to-transparent z-10" />
        <div className="flex gap-4 animate-scroll-x w-max">
          {loop.map((b, i) => (
            <div
              key={i}
              className="shrink-0 w-56 h-24 rounded-2xl glass flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-soft"
            >
              <span className="font-display text-xl tracking-tight text-foreground/80">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
