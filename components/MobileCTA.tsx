"use client";

import { MapPin } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
      <a
        href="https://www.google.com/maps/search/?api=1&query=Impasse+Maharaja+Kaweni+Mamoudzou+Mayotte"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-5 py-4 text-base font-extrabold text-white shadow-[0_16px_40px_rgba(255,107,53,0.35)]"
      >
        <MapPin className="h-5 w-5" /> Itinéraire
      </a>
    </div>
  );
}
