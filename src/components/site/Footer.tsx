export function Footer() {
  return (
    <footer className="bg-gradient-noir text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-tight">
            Maison<span className="text-gradient-gold">.</span>Beauté
          </div>
          <p className="mt-4 text-sm text-ivory/60 max-w-sm leading-relaxed">
            Canadian-headquartered distribution of authentic cosmetics, oral care and healthcare for global wholesale buyers.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-ivory/50 mb-4">Catalog</div>
          <ul className="space-y-2 text-sm">
            {["Skincare","Hair Care","Makeup","Fragrances","Personal Care"].map(c => (
              <li key={c}><a href="#categories" className="text-ivory/80 hover:text-rose-gold transition-colors">{c}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-ivory/50 mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="text-ivory/80 hover:text-rose-gold transition-colors">About</a></li>
            <li><a href="/services" className="text-ivory/80 hover:text-rose-gold transition-colors">Services</a></li>
            <li><a href="#faq" className="text-ivory/80 hover:text-rose-gold transition-colors">FAQ</a></li>
            <li><a href="#contact" className="text-ivory/80 hover:text-rose-gold transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-ivory/50">
          <div>© {new Date().getFullYear()} Maison Beauté. All rights reserved.</div>
          <div>Toronto · Amsterdam · Dubai</div>
        </div>
      </div>
    </footer>
  );
}
