"use client";

import { motion } from "framer-motion";
import { Store, ArrowRight } from "lucide-react";

export default function MagasinSection() {
  return (
    <section id="magasin" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.2rem] bg-[linear-gradient(135deg,#7C3AED_0%,#5B21B6_40%,#FF6B35_100%)] p-4 shadow-[0_24px_80px_rgba(91,33,182,0.16)]"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem]">
            <img
              src="/img/magasin.jpeg"
              alt="Magasin LADATOU"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B21B6]/70 via-transparent to-transparent" />

            {/* Badge 2€ partout en haut à gauche */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-5 top-5 rounded-full bg-[#FF6B35] px-4 py-2 text-sm font-black text-white shadow-xl"
            >
              2€ partout
            </motion.div>

            {/* Badges catégories en bas sur l'image */}
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#5B21B6] px-4 py-2 text-sm font-bold text-white shadow-sm">Maison</span>
              <span className="rounded-full bg-[#FF6B35] px-4 py-2 text-sm font-bold text-white shadow-sm">Cuisine</span>
              <span className="rounded-full bg-[#7C3AED] px-4 py-2 text-sm font-bold text-white shadow-sm">Enfants</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.3em] text-[#7C3AED]">Le magasin</p>
          <h2 className="text-3xl font-black tracking-tight text-[#4C1D95] sm:text-4xl">Découvrez le magasin LADATOU</h2>
          <p className="mt-5 text-lg leading-8 text-[#4C1D95]/80">
            LADATOU est le nouveau magasin discount familial de Mayotte. Des centaines d&apos;articles du quotidien, tous au même prix : 2€.
          </p>
          <p className="mt-4 text-base leading-7 text-[#4C1D95]/80">
            L&apos;univers visuel mélange identité joyeuse, confort de navigation et codes premium pour créer un site de marque moderne, rassurant et mémorable.
          </p>
          <a
            href="#infos"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-6 py-4 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(255,107,53,0.28)] transition hover:bg-[#7C3AED]"
          >
            Voir l&apos;adresse <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
