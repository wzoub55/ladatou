"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Music2, Star } from "lucide-react";

export default function SocialSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`social-star-${i}`}
            className={`absolute ${i % 2 === 0 ? "text-[#7C3AED]/26" : "text-[#FF6B35]/20"}`}
            style={{ left: `${8 + ((i * 12) % 84)}%`, top: `${10 + ((i * 11) % 72)}%` }}
            animate={{ opacity: [0.12, 0.36, 0.12], scale: [1, 1.16, 1] }}
            transition={{ duration: 3.3 + (i % 4), repeat: Infinity, delay: i * 0.14 }}
          >
            <Star className="h-3.5 w-3.5 fill-current" />
          </motion.div>
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`social-dot-${i}`}
            className={`absolute h-4 w-4 rounded-full ${i % 2 === 0 ? "bg-[#FF6B35]/16" : "bg-[#7C3AED]/14"}`}
            style={{ left: `${12 + ((i * 17) % 78)}%`, top: `${14 + ((i * 13) % 68)}%` }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl text-center">
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex items-center rounded-full bg-white/70 px-5 py-3 text-sm font-extrabold text-[#7C3AED] shadow-[0_12px_30px_rgba(124,58,237,0.08)] backdrop-blur-sm">
            Suivez-nous
          </div>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#4C1D95] sm:text-5xl lg:text-6xl">
            Rejoignez la communauté <span className="text-[#FF6B35]">LADATOU</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[#7C3AED]/82 sm:text-xl">
            Restez informé des nouveautés, promotions et événements en nous suivant sur les réseaux sociaux.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {[
            {
              label: "Instagram",
              icon: Instagram,
              className: "bg-[linear-gradient(135deg,#C13584_0%,#E1306C_35%,#F77737_70%,#FCAF45_100%)] text-white shadow-[0_18px_40px_rgba(241,101,69,0.24)]",
            },
            {
              label: "Facebook",
              icon: Facebook,
              className: "bg-[#3B82F6] text-white shadow-[0_18px_40px_rgba(59,130,246,0.22)]",
            },
            {
              label: "TikTok",
              icon: Music2,
              className: "bg-black text-white shadow-[0_18px_40px_rgba(0,0,0,0.22)]",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href="#"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`inline-flex h-36 w-36 items-center justify-center rounded-[2rem] ${item.className}`}
                aria-label={item.label}
              >
                <Icon className="h-16 w-16" strokeWidth={2.2} />
              </motion.a>
            );
          })}
        </div>

        <div className="mx-auto mt-16 inline-flex flex-wrap items-center justify-center gap-4 rounded-full bg-white px-8 py-5 text-xl font-black shadow-[0_18px_40px_rgba(124,58,237,0.10)]">
          <span className="text-[#FF6B35]">#</span>
          <span className="text-[#4C1D95]">magasinladatou</span>
          <span className="text-[#FF6B35]">#</span>
          <span className="text-[#4C1D95]">touta2eurosmayotte</span>
        </div>
      </div>
    </section>
  );
}
