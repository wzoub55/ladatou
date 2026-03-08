"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { categories } from "./data";

export default function CategoriesSection() {
  return (
    <section id="categories" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`cat-star-${i}`}
            className="absolute text-[#7C3AED]/26"
            style={{ left: `${6 + ((i * 11) % 90)}%`, top: `${8 + ((i * 9) % 82)}%` }}
            animate={{ opacity: [0.16, 0.42, 0.16], scale: [1, 1.18, 1] }}
            transition={{ duration: 3.4 + (i % 4), repeat: Infinity, delay: i * 0.15 }}
          >
            <Star className="h-3.5 w-3.5 fill-current" />
          </motion.div>
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`cat-dot-${i}`}
            className="absolute h-4 w-4 rounded-full bg-[#FF6B35]/20"
            style={{ left: `${18 + ((i * 19) % 72)}%`, top: `${16 + ((i * 14) % 70)}%` }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-white/70 px-5 py-3 text-sm font-extrabold text-[#7C3AED] shadow-[0_12px_30px_rgba(124,58,237,0.08)] backdrop-blur-sm">
            Nos Rayons
          </div>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#4C1D95] sm:text-5xl lg:text-6xl">
            Nos <span className="text-[#FF6B35]">Catégories</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#7C3AED]/82 sm:text-xl">
            Des centaines d&apos;articles pour toute la famille, tous au même prix incroyable.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative min-h-[236px] overflow-hidden rounded-[2.2rem] p-7 shadow-[0_22px_60px_rgba(76,29,149,0.16)] ${category.cardClass}`}
              >
                <div className="absolute left-0 top-0 h-20 w-20 rounded-br-[2.4rem] rounded-tl-[2.2rem] bg-white/10" />
                <div className="absolute bottom-[-34px] right-[-22px] h-32 w-32 rounded-full bg-white/12" />
                <div className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-lg font-black text-[#FF6B35] shadow-sm">2€</div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.45rem] bg-white/14 backdrop-blur-sm shadow-inner">
                    <Icon className="h-8 w-8" />
                  </div>

                  <div className="mt-10">
                    <h3 className="text-3xl font-black tracking-tight">{category.title}</h3>
                    <p className="mt-4 max-w-[20rem] text-lg leading-8 text-white/86">{category.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-2xl text-[#7C3AED]/82">Et bien plus encore à découvrir en magasin !</p>
          <div className="mx-auto mt-8 inline-flex items-center gap-4 rounded-full bg-white px-6 py-5 text-lg font-bold text-[#4C1D95] shadow-[0_18px_40px_rgba(124,58,237,0.12)]">
            <span className="text-3xl font-black text-[#FF6B35]">2€</span>
            <span>le prix unique pour tous nos articles</span>
          </div>
        </div>
      </div>
    </section>
  );
}
