"use client";

import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";

export function BrandPhilosophy() {
  const whatWeHonor = [
    "Before it was a mala, it was a fruit — nature precedes ritual.",
    "Ancient Indian traditions should be expressed through modern, refined design.",
    "Understanding and educational depth are more valuable than manufactured claims.",
    "Natural materials (Rudraksha, Tulsi, unheated earth stone) should remain unadulterated.",
    "Authenticity has weight, natural texture, and transparent origin.",
  ];

  const whatWeReject = [
    "Fear-based selling, superstition, and commercial exploitation of faith.",
    "Misleading astrological guarantees or 'instant luck' claims.",
    "Synthetic glass crystals and plastic imitation beads.",
    "Chemical dyes, toxic varnishes, or artificial heat treatments.",
    "Selling sacred products without honoring where they come from.",
  ];

  return (
    <section id="brand-story" className="py-10 sm:py-16 lg:py-20 pb-20 lg:pb-20 bg-[#FAF8F5] text-[#122E46] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Origin Story Top Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-20">
          {/* Left Column: Philosophy Text */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <h1
              className="text-2xl sm:text-4xl lg:text-[48px] font-normal text-[#122E46] leading-[1.18] tracking-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              Svastimān is not trying <br />
              <span className="italic text-[#7A6242] font-light">
                to sell spirituality.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-stone-600 font-light leading-relaxed">
              We are building a house of sacred Indian materials that helps people understand and experience India&apos;s cultural heritage through authentic materials, traditional knowledge, and thoughtful modern design.
            </p>

            <p className="text-xs sm:text-sm md:text-[15px] text-stone-500 font-light leading-relaxed">
              Too much of today&apos;s spiritual marketplace relies on fear, fabricated astrological claims, and synthetic plastics masquerading as gemstones. SVASTIMAN begins at the origin: the mountain, the river, the ancient forest tree, and the quiet hands of generational craftsmen who wash each seed in running river water.
            </p>
          </div>

          {/* Right Column: Artisan Image (Clean, without text overlay) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8E2D5] bg-white shadow-sm">
              <Image
                src="/images/origin/rudraksha_hand_clean.jpg"
                alt="Artisan hands washing sacred seeds in flowing river water"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* What We Honor vs What We Reject Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1: What We Honor */}
          <div className="bg-white border border-[#E8E2D5] rounded-2xl sm:rounded-3xl p-5 sm:p-9 shadow-xs hover:border-[#C5A880]/70 transition-all duration-300">
            <div className="flex items-center gap-3.5 mb-5 sm:mb-6 pb-4 border-b border-[#E8E2D5]/70">
              <div className="w-10 h-10 rounded-full bg-[#122E46]/8 border border-[#122E46]/20 flex items-center justify-center text-[#122E46]">
                <Check className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h2
                className="text-xl sm:text-2xl text-[#122E46] font-normal"
                style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
              >
                What We Honor
              </h2>
            </div>
            <ul className="space-y-3.5 sm:space-y-4">
              {whatWeHonor.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A6242] mt-1.5 sm:mt-2 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: What We Reject */}
          <div className="bg-white border border-[#E8E2D5] rounded-2xl sm:rounded-3xl p-5 sm:p-9 shadow-xs hover:border-rose-200 transition-all duration-300">
            <div className="flex items-center gap-3.5 mb-5 sm:mb-6 pb-4 border-b border-[#E8E2D5]/70">
              <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                <X className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h2
                className="text-xl sm:text-2xl text-[#122E46] font-normal"
                style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
              >
                What We Reject
              </h2>
            </div>
            <ul className="space-y-3.5 sm:space-y-4">
              {whatWeReject.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 sm:mt-2 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
