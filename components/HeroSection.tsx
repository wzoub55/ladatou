"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import ParticleField from "./ParticleField";

function MascotPlaceholder() {
  return (
    <div className="relative">
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, -1.5, 1.5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/img/logo.png"
          alt="Mascotte LADATOU"
          className="mx-auto h-auto w-full max-w-[340px] object-contain"
        />
      </motion.div>
      <div className="absolute -left-4 top-8 h-14 w-14 rounded-full bg-[#FF6B35]/20 blur-xl" />
      <div className="absolute -right-2 bottom-6 h-16 w-16 rounded-full bg-[#7C3AED]/20 blur-xl" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="accueil" className="relative isolate overflow-hidden">
      <ParticleField variant="light" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,107,53,0.10),transparent_26%),radial-gradient(circle_at_82%_20%,rgba(124,58,237,0.12),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(124,58,237,0.08),transparent_32%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="order-2 relative z-10 lg:order-1"
        >
          <MascotPlaceholder />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="order-1 relative z-10 lg:order-2"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/15 bg-white/70 px-4 py-2 text-sm font-extrabold text-[#7C3AED] shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" /> Nouveau magasin à Kaweni
          </div>
          <h1 className="max-w-xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-[#4C1D95] sm:text-6xl lg:text-7xl">
            Le magasin <span className="text-[#FF6B35]">où tout est à 2€</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#4C1D95]/80 sm:text-xl">
            Le magasin qui fait plaisir à toute la famille avec une expérience chaleureuse, joyeuse et moderne.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#magasin"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-7 py-4 text-base font-extrabold text-white shadow-[0_14px_34px_rgba(255,107,53,0.28)] transition hover:bg-[#7C3AED]"
            >
              Découvrir le magasin <ArrowRight className="h-4 w-4" />
            </a>
            <div className="inline-flex items-center justify-center rounded-full bg-white/70 px-5 py-4 text-sm font-black text-[#7C3AED] shadow-sm backdrop-blur">
              100% des produits à 2€
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
