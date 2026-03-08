"use client";

import { navItems } from "./data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#7C3AED]/10 bg-[#FEF3C7]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#accueil" className="flex items-center gap-3">
          <img src="/img/logo.png" alt="Logo LADATOU" className="h-12 w-12 object-contain" />
          <div className="text-center">
            <div className="text-lg font-black tracking-[0.18em] text-[#FF6B35]">LADATOU</div>
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-[#FF6B35]/80">Tout à 2€</div>
            <div className="mt-1 h-[2px] w-full bg-[#FF6B35]/70 rounded-full" />
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-[#4C1D95] transition hover:text-[#FF6B35]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#infos"
          className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(255,107,53,0.28)] transition hover:bg-[#7C3AED]"
        >
          Nous rendre visite
        </a>
      </div>
    </header>
  );
}
