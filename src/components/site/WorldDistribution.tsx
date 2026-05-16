const regions = [
  { name: "Europe", countries: "EU · UK · CH · NO", coverage: "98%" },
  { name: "Middle East", countries: "UAE · KSA · Qatar · Kuwait", coverage: "95%" },
  { name: "Africa", countries: "Morocco · Nigeria · SA · Egypt", coverage: "82%" },
  { name: "Asia-Pacific", countries: "HK · SG · KR · JP · AU", coverage: "90%" },
  { name: "Americas", countries: "USA · CA · MX · BR · CL", coverage: "88%" },
  { name: "CIS & Eurasia", countries: "KZ · UZ · GE · AM", coverage: "78%" },
];

// Pre-computed dot positions (approximate world map)
const dots = [
  { x: 22, y: 35 }, { x: 25, y: 30 }, { x: 28, y: 40 }, { x: 30, y: 32 },
  { x: 48, y: 28 }, { x: 50, y: 35 }, { x: 52, y: 32 }, { x: 55, y: 40 },
  { x: 58, y: 38 }, { x: 62, y: 45 }, { x: 70, y: 38 }, { x: 75, y: 42 },
  { x: 78, y: 48 }, { x: 80, y: 35 }, { x: 85, y: 55 }, { x: 88, y: 62 },
  { x: 18, y: 55 }, { x: 25, y: 65 }, { x: 30, y: 70 }, { x: 35, y: 60 },
  { x: 45, y: 55 }, { x: 50, y: 65 }, { x: 55, y: 60 }, { x: 60, y: 70 },
  { x: 12, y: 30 }, { x: 15, y: 45 }, { x: 8, y: 50 }, { x: 20, y: 80 },
  { x: 90, y: 40 }, { x: 92, y: 50 },
];

export function WorldDistribution() {
  return (
    <section id="world" className="py-28 bg-gradient-noir text-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.74 0.10 35 / 0.6), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-ivory/60">Worldwide Distribution</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl leading-tight">
            Shipped to <span className="italic text-gradient-gold">100+ countries</span>
          </h2>
          <p className="mt-5 text-ivory/70">
            A Canadian-managed global logistics network with Toronto HQ, bonded carrier partners and DDP-ready freight lanes for premium wholesale imports.
          </p>
        </div>

        {/* Map */}
        <div className="relative aspect-[2/1] rounded-3xl glass-dark overflow-hidden mb-16">
          <div className="absolute inset-0">
            {dots.map((d, i) => (
              <div key={i} className="absolute" style={{ left: `${d.x}%`, top: `${d.y}%` }}>
                <span className="absolute -inset-2 rounded-full bg-rose-gold/40 blur-md animate-glow" style={{ animationDelay: `${i * 0.12}s` }} />
                <span className="relative block h-1.5 w-1.5 rounded-full bg-rose-gold" />
              </div>
            ))}
            {/* Connection arcs */}
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 50">
              <defs>
                <linearGradient id="arc" x1="0" x2="1">
                  <stop offset="0" stopColor="oklch(0.74 0.10 35)" stopOpacity="0" />
                  <stop offset="0.5" stopColor="oklch(0.74 0.10 35)" stopOpacity="0.6" />
                  <stop offset="1" stopColor="oklch(0.74 0.10 35)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M 48 14 Q 60 5 75 21" stroke="url(#arc)" strokeWidth="0.2" fill="none" />
              <path d="M 48 14 Q 35 8 22 17" stroke="url(#arc)" strokeWidth="0.2" fill="none" />
              <path d="M 48 14 Q 40 28 30 35" stroke="url(#arc)" strokeWidth="0.2" fill="none" />
              <path d="M 48 14 Q 70 30 88 31" stroke="url(#arc)" strokeWidth="0.2" fill="none" />
            </svg>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[10px] uppercase tracking-widest text-ivory/50">
            <span>Toronto HQ</span>
            <span>Real-time freight network</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((r) => (
            <div key={r.name} className="glass-dark rounded-2xl p-6 hover-lift">
              <div className="flex items-center justify-between">
                <div className="font-display text-2xl">{r.name}</div>
                <div className="text-xs glass rounded-full px-3 py-1 text-ivory">{r.coverage}</div>
              </div>
              <div className="mt-3 text-sm text-ivory/60">{r.countries}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
