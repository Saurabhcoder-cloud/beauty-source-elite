import { useMemo, useState } from "react";
import { CATEGORY_LIST, type CategoryKey } from "@/lib/categories";

type Filter = "all" | CategoryKey;

const ALL = CATEGORY_LIST.flatMap((c) => c.brands.map((b) => ({ b, key: c.key, accent: c.accent })));

export function BrandDirectory() {
  const [filter, setFilter] = useState<Filter>("all");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    const base = filter === "all" ? ALL : ALL.filter((x) => x.key === filter);
    const filtered = q ? base.filter((x) => x.b.toLowerCase().includes(q.toLowerCase())) : base;
    // dedupe + sort
    const seen = new Set<string>();
    return filtered
      .filter((x) => (seen.has(x.b) ? false : (seen.add(x.b), true)))
      .sort((a, b) => a.b.localeCompare(b.b));
  }, [filter, q]);

  return (
    <section id="brand-directory" className="py-20 sm:py-24 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Global Directory</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              {ALL.length}+ <span className="italic text-gradient-gold">authorized brands</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search brand…"
              className="flex-1 md:w-64 rounded-full bg-background border border-border focus:border-accent outline-none px-5 py-2.5 text-sm"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {(["all", ...CATEGORY_LIST.map((c) => c.key)] as Filter[]).map((f) => {
            const cat = CATEGORY_LIST.find((c) => c.key === f);
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-xs uppercase tracking-widest transition-all ${
                  active ? "bg-foreground text-background shadow-luxe" : "bg-background border border-border hover:border-foreground/40"
                }`}
                style={active && cat ? { background: cat.accent, color: "white" } : undefined}
              >
                {f === "all" ? "All" : cat!.name}
              </button>
            );
          })}
          <span className="ml-auto text-xs text-muted-foreground self-center">{items.length} results</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {items.map((x) => (
            <div
              key={x.b}
              className="group relative rounded-xl border border-border bg-card h-20 flex items-center justify-center px-3 hover-lift overflow-hidden text-center"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `radial-gradient(circle at 50% 100%, ${x.accent}22, transparent 70%)` }}
              />
              <span className="relative font-display text-sm md:text-base text-foreground/80 group-hover:text-foreground transition-colors leading-tight">
                {x.b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
