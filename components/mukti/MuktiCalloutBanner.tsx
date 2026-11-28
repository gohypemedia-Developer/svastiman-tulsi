"use client";

import React from "react";
import Link from "next/link";

export function MuktiCalloutBanner() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 3xl:py-28 4k:py-36 bg-[#0D1C27] text-white text-center relative overflow-hidden select-none">
      {/* Subtle radial ambient highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16 space-y-6 sm:space-y-8 3xl:space-y-10 4k:space-y-12">
        <span className="text-[10px] sm:text-xs 3xl:text-sm font-mono uppercase tracking-[0.28em] text-[#C5A880] font-semibold block">
          THE FINAL REVERENCE
        </span>

        <blockquote
          className="font-serif text-xl sm:text-2xl md:text-[32px] lg:text-[38px] 3xl:text-[46px] 4k:text-[54px] font-normal leading-relaxed 4k:leading-[1.45] text-white max-w-3xl 3xl:max-w-4xl 4k:max-w-5xl mx-auto drop-shadow-md"
          style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
        >
          &ldquo;When the mind rests in the eternal stillness of Mukti, the world ceases to be a storm and becomes a mirror of the divine.&rdquo;
        </blockquote>

        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("mukti-showcase")}
            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-white hover:bg-[#FAF8F5] text-[#122E46] hover:text-black text-xs 3xl:text-sm 4k:text-base font-mono tracking-[0.22em] uppercase transition-all duration-300 shadow-md cursor-pointer active:scale-[0.98]"
          >
            ACQUIRE MUKTI MAHAMALA
          </button>

          <button
            onClick={() => scrollToSection("mukti-enquiry")}
            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 border border-white/60 hover:border-white text-white hover:bg-white/10 text-xs 3xl:text-sm 4k:text-base font-mono tracking-[0.22em] uppercase transition-all duration-300 cursor-pointer active:scale-[0.98]"
          >
            CONSULT SANCTUARY CONCIERGE
          </button>
        </div>
      </div>
    </section>
  );
}
