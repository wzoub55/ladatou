"use client";

import { motion } from "framer-motion";
import { MapPin, Clock3, ArrowRight } from "lucide-react";
import ParticleField from "./ParticleField";

export default function InfosSection() {
  return (
    <section id="infos" className="relative overflow-hidden bg-[#5B21B6] text-white">
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

      <ParticleField variant="dark" />

      <div className="relative px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-extrabold text-white/95 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm">
              <MapPin className="h-4 w-4" /> Infos pratiques
            </div>
            <h2 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Venez nous <span className="text-[#FF6B35]">rendre visite</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Retrouvez facilement LADATOU à Kaweni et préparez votre visite avec toutes les informations essentielles.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-[2rem] border border-white/8 bg-white/8 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[#FF6B35] text-white shadow-[0_16px_36px_rgba(255,107,53,0.35)]">
                  <MapPin className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Adresse</h3>
                  <p className="mt-3 text-xl leading-9 text-white/88">
                    Impasse Maharaja
                    <br />
                    Kaweni
                    <br />
                    Mamoudzou – Mayotte
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[1.7rem] bg-[linear-gradient(180deg,rgba(168,85,247,0.28)_0%,rgba(124,58,237,0.5)_100%)] p-8 shadow-inner">
                <div className="flex min-h-[220px] flex-col items-center justify-center rounded-[1.4rem] border border-white/10 bg-white/5 text-center">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#FF6B35] text-white shadow-[0_16px_40px_rgba(255,107,53,0.28)]">
                    <MapPin className="h-9 w-9" />
                  </div>
                  <p className="mt-6 text-3xl font-black text-white sm:text-4xl">Kaweni, Mamoudzou</p>
                  <p className="mt-3 text-base text-white/65">Mayotte</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="rounded-[2rem] border border-white/8 bg-white/8 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[#A855F7] text-white shadow-[0_16px_36px_rgba(168,85,247,0.32)]">
                  <Clock3 className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-black text-white">Horaires</h3>
                  <div className="mt-4 space-y-4 text-lg">
                    <div className="flex items-center justify-between gap-6 border-b border-white/8 pb-3 text-white/88">
                      <span>Lundi – Samedi</span>
                      <span className="font-black text-white">9h30 – 17h00</span>
                    </div>
                    <div className="flex items-center justify-between gap-6 text-white/56">
                      <span>Dimanche</span>
                      <span className="font-bold">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Impasse+Maharaja+Kaweni+Mamoudzou+Mayotte"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-[1.3rem] bg-[#FF6B35] px-6 py-5 text-lg font-black text-white shadow-[0_18px_44px_rgba(255,107,53,0.32)] transition hover:bg-white hover:text-[#5B21B6]"
              >
                <MapPin className="h-5 w-5" /> Itinéraire Google Maps <ArrowRight className="h-5 w-5" />
              </a>

              <div className="mt-6 flex items-center justify-center gap-3 text-lg text-white/72">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span>Ouvert aujourd&apos;hui</span>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8 text-center text-xl text-white/52">
                Parking disponible à proximité du magasin
              </div>
            </motion.div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-5">
            <span className="h-1 w-20 rounded-full bg-[#FF6B35]" />
            <span className="h-4 w-4 rounded-full bg-white/25" />
            <span className="h-1 w-20 rounded-full bg-[#FF6B35]" />
          </div>
        </div>
      </div>
    </section>
  );
}
