"use client";

import { MapPin, Instagram, Facebook, Music2 } from "lucide-react";
import { navItems } from "./data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#5B21B6] text-white">
      <div className="absolute inset-x-0 top-0 h-20 bg-[#FEF3C7]" />
      <div className="relative h-24 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 180"
          className="absolute inset-x-0 top-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,70 C220,130 420,30 720,55 C980,78 1180,25 1440,65 L1440,180 L0,180 Z"
            fill="#5B21B6"
          />
        </svg>
      </div>

      <div className="relative px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pb-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/4 p-6 backdrop-blur-sm md:p-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-4">
                <img src="/img/logo.png" alt="Logo LADATOU" className="h-14 w-14 object-contain" />
                <div>
                  <div className="text-3xl font-black tracking-tight text-white">LADATOU</div>
                  <div className="mt-1 text-lg font-extrabold text-[#FF6B35]">TOUT À 2€</div>
                </div>
              </div>

              <p className="mt-6 max-w-md text-lg leading-8 text-white/72">
                Le magasin discount familial de Mayotte où tous les articles sont vendus à seulement 2€.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-black text-white">Contact</h3>
                <div className="mt-5 flex items-start gap-4 text-white/82">
                  <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-[#FF6B35]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <p className="text-xl leading-9 text-white/78">
                    Impasse Maharaja
                    <br />
                    Kaweni, Mamoudzou
                    <br />
                    Mayotte
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                {[
                  { label: "Instagram", icon: Instagram },
                  { label: "Facebook", icon: Facebook },
                  { label: "TikTok", icon: Music2 },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href="#"
                      aria-label={item.label}
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/8 text-white/80 transition hover:bg-white/14 hover:text-white"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:pl-10">
              <h3 className="text-xl font-black text-white">Navigation</h3>
              <div className="mt-6 flex flex-col gap-5 text-2xl text-white/72">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-base text-white/50">© 2026 LADATOU – Mamoudzou – Mayotte. Tous droits réservés.</p>
            <div className="inline-flex items-center gap-3 self-start rounded-full bg-[#FF6B35]/16 px-4 py-3 text-base font-bold text-white/88">
              <span className="rounded-full bg-[#FF6B35] px-3 py-1 text-[#FEF3C7]">2€</span>
              <span>Tout à 2€</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
