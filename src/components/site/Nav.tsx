import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORY_LIST } from "@/lib/categories";

const sections = [
  { href: "/wholesale", label: "Wholesale" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div
        className={`mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "glass rounded-full mx-4 md:mx-auto px-6 py-3 shadow-soft" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight">
            Maison<span className="text-gradient-gold">.</span>Beauté
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm" onMouseLeave={() => setMega(false)}>
          <div
            className="relative"
            onMouseEnter={() => setMega(true)}
          >
            <button className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1">
              Categories
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${mega ? "rotate-180" : ""}`}><path d="M6 9l6 6 6-6"/></svg>
            </button>
            {mega && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[760px] animate-fade-up">
                <div className="glass rounded-3xl p-6 shadow-luxe grid grid-cols-3 gap-4">
                  {CATEGORY_LIST.map((c) => (
                    <Link
                      key={c.key}
                      to={c.slug}
                      onClick={() => setMega(false)}
                      className="group relative rounded-2xl overflow-hidden aspect-[4/5] hover-lift"
                    >
                      <img src={c.heroImg} alt={c.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                        <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">{c.kicker}</div>
                        <div className="font-display text-xl leading-tight mt-1">{c.name}</div>
                        <div className="mt-2 text-[11px] opacity-70 line-clamp-2">{c.brands.slice(0, 4).join(" · ")}</div>
                        <div className="mt-3 inline-flex items-center gap-1 text-xs">
                          Explore
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                        </div>
                      </div>
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: `linear-gradient(to top, ${c.accent}66, transparent)` }}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/services" className="text-foreground/70 hover:text-foreground transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>

          {sections.map((l) => (
            <Link key={l.href} to={l.href} className="text-foreground/70 hover:text-foreground transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link to="/wholesale" className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors">
          Request Pricing
        </Link>

        <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="md:hidden rounded-full p-2 hover:bg-muted">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-2 glass rounded-2xl p-4 animate-fade-up">
          <div className="flex flex-col gap-1 text-sm">
            <div className="px-2 pt-1 pb-2 text-[10px] uppercase tracking-widest text-muted-foreground">Categories</div>
            {CATEGORY_LIST.map((c) => (
              <Link key={c.key} to={c.slug} onClick={() => setOpen(false)} className="py-2 px-2 rounded-md hover:bg-muted flex items-center gap-3">
                <span className="h-2 w-2 rounded-full" style={{ background: c.accent }} />
                {c.name}
              </Link>
            ))}
            <div className="px-2 pt-3 pb-2 text-[10px] uppercase tracking-widest text-muted-foreground">More</div>
            <Link to="/services" onClick={() => setOpen(false)} className="py-2 px-2 rounded-md hover:bg-muted">Services</Link>
            {sections.map((l) => (
              <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="py-2 px-2 rounded-md hover:bg-muted">{l.label}</Link>
            ))}
            <Link to="/wholesale" onClick={() => setOpen(false)} className="mt-2 text-center rounded-full bg-foreground text-background px-5 py-2.5">Request Pricing</Link>
          </div>
        </div>
      )}
    </header>
  );
}
