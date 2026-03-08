"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { floatingItems } from "./data";

export default function ParticleField({ variant = "light" }: { variant?: "light" | "dark" }) {
  const starColor = variant === "dark" ? "text-[#FEF3C7]/75" : "text-[#7C3AED]/55";
  const badgeTone =
    variant === "dark"
      ? [
          "bg-[#FF6B35] text-white",
          "bg-[#7C3AED] text-white",
        ]
      : [
          "bg-[#FF6B35] text-white",
          "bg-[#7C3AED] text-white",
        ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.className}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: variant === "dark" ? [0.5, 0.85, 0.5] : [0.6, 1, 0.6], y: [0, -14, 0], x: [0, 4, -4, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 5 + (index % 4), repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }}
        >
          <div
            className={`rounded-full px-3 py-1 font-black shadow-[0_14px_36px_rgba(124,58,237,0.16)] backdrop-blur-sm ${item.size} ${badgeTone[index % 2]}`}
          >
            {item.label}
          </div>
        </motion.div>
      ))}

      {[...Array(16)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className={`absolute ${starColor}`}
          style={{ left: `${(i * 13) % 100}%`, top: `${8 + ((i * 9) % 80)}%` }}
          animate={{ opacity: variant === "dark" ? [0.22, 0.62, 0.22] : [0.32, 0.72, 0.32], scale: [1, 1.22, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 3.2 + (i % 4), repeat: Infinity, delay: i * 0.14 }}
        >
          <Star className="h-3 w-3 fill-current" />
        </motion.div>
      ))}
    </div>
  );
}
