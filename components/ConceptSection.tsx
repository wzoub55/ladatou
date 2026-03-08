"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { conceptCards } from "./data";

export default function ConceptSection() {
  return (
    <section id="concept" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={`concept-star-${i}`}
            className={`absolute ${i % 2 === 0 ? "text-[#FF6B35]/80" : "text-[#7C3AED]/75"}`}
            style={{ left: `${4 + ((i * 13) % 92)}%`, top: `${10 + ((i * 11) % 76)}%` }}
            animate={{ opacity: [0.18, 0.5, 0.18], scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
            transition={{ duration: 3.2 + (i % 4), repeat: Infinity, delay: i * 0.14 }}
          >
            <Star className="h-3.5 w-3.5 fill-current" />
          </motion.div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`concept-dot-${i}`}
            className={`absolute h-4 w-4 rounded-full ${i % 2 === 0 ? "bg-[#7C3AED]/18" : "bg-[#FF6B35]/18"}`}
            style={{ left: `${6 + ((i * 15) % 88)}%`, top: `${12 + ((i * 9) % 72)}%` }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-white/70 px-5 py-3 text-sm font-extrabold text-[#FF6B35] shadow-[0_12px_30px_rgba(255,107,53,0.08)] backdrop-blur-sm">
            Notre Concept
          </div>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#4C1D95] sm:text-5xl lg:text-6xl">
            Pourquoi tout le monde
            <br className="hidden sm:block" />
            <span className="text-[#FF6B35]">aime LADATOU ?</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {conceptCards.map((card, index) => {
            const Icon = card.icon;
            const iconTone = index === 1 ? "text-[#7C3AED] bg-[#7C3AED]/10" : "text-[#FF6B35] bg-[#FF6B35]/10";
            const starTone = index === 1 ? "text-[#7C3AED]" : "text-[#FF6B35]";

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group relative overflow-hidden rounded-[2rem] bg-white/88 p-7 shadow-[0_18px_44px_rgba(124,58,237,0.10)] ring-1 ring-white/50 backdrop-blur-sm"
              >
                <div className={`absolute right-5 top-5 ${starTone}`}>
                  <Star className="h-6 w-6 fill-current transition duration-300 group-hover:scale-110" />
                </div>

                <div className={`mb-8 inline-flex h-20 w-20 items-center justify-center rounded-[1.55rem] ${iconTone}`}>
                  <Icon className="h-9 w-9" />
                </div>

                <h3 className="text-[2rem] font-black leading-tight tracking-tight text-[#4C1D95]">{card.title}</h3>
                <p className="mt-5 max-w-[20rem] text-xl leading-9 text-[#7C3AED]/72">{card.text}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-5">
          <span className="h-1 w-20 rounded-full bg-[#FF6B35]" />
          <span className="h-4 w-4 rounded-full bg-[#7C3AED]" />
          <span className="h-1 w-20 rounded-full bg-[#FF6B35]" />
        </div>
      </div>
    </section>
  );
}
