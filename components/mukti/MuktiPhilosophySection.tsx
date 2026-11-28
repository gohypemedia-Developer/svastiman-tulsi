"use client";

import React from "react";
import Image from "next/image";

export function MuktiPhilosophySection() {
  return (
    <section id="mukti-philosophy" className="py-14 sm:py-20 lg:py-24 3xl:py-28 4k:py-36 bg-[#FAF8F5] text-[#122E46] select-none border-b border-[#E8E2D5]">
      <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 3xl:gap-20 4k:gap-24 items-center">

          {/* Left Column: Devotional Contemplation Wear Photo */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="relative aspect-[3/4] w-full max-w-[340px] sm:max-w-[380px] md:max-w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5] shadow-xs group">
              <Image
                src="/images/editorial/editorial_1_wear.jpg"
                alt="Devotee wearing consecrated Mukti Mahamala in silent contemplation"
                fill
                sizes="(max-width: 768px) 380px, 500px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 z-10 text-[10px] sm:text-[11px] 3xl:text-xs 4k:text-sm font-mono uppercase tracking-[0.25em] text-white/90 bg-black/60 px-3 py-1.5 backdrop-blur-xs">
                CHITTA SHUDDHI • INNER STILLNESS
              </div>
            </div>
          </div>

          {/* Right Column: Mukti Narrative, Esoteric Meaning & Monograph Quote */}
          <div className="md:col-span-7 space-y-4 sm:space-y-6 3xl:space-y-8 4k:space-y-10">
            <div>
              <span className="text-[11px] sm:text-xs 3xl:text-sm 4k:text-base font-mono uppercase tracking-[0.24em] text-[#7A6242] font-semibold block mb-2 4k:mb-3">
                THE PHILOSOPHY OF LIBERATION
              </span>
              <h2
                className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] 3xl:text-5xl 4k:text-[60px] font-normal text-[#122E46] leading-tight 4k:leading-[1.18] tracking-tight"
                style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
              >
                Transcendence <span className="italic font-normal">Beyond Form.</span>
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 3xl:space-y-5 4k:space-y-6 text-xs sm:text-[13px] 3xl:text-lg 4k:text-[22px] text-stone-600 font-sans leading-relaxed 3xl:leading-[1.75] 4k:leading-[1.8]">
              <p>
                In the Vedic understanding, <em>Mukti</em> is neither an escape from the world nor an intellectual abstraction. It is the spontaneous return of consciousness to its natural state: unbounded, serene, and fearless amidst life&apos;s transient currents.
              </p>
              <p>
                The Svastimān Mukti Mahamala unites the fiery, protective stillness of wild Himalayan Panchmukhi Rudraksha with the cooling devotional surrender of aged Vrindavan Tulsi. Together, they create an energetic equilibrium — grounding mental restlessness while uplifting the spirit toward perpetual awareness.
              </p>
            </div>

            {/* Monograph Quote Callout Box */}
            <div className="p-4 sm:p-5 3xl:p-6 4k:p-8 bg-[#F5F2EB]/80 border border-[#E2DEC9] rounded-none">
              <p
                className="font-serif text-xs sm:text-sm 3xl:text-lg 4k:text-[22px] text-[#122E46] italic font-normal leading-relaxed 3xl:leading-[1.7] 4k:leading-[1.75]"
                style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
              >
                &ldquo;Mukti is not the departure from life, but the complete liberation of the soul from fear, attachment, and the illusions of limitation.&rdquo;
              </p>
            </div>

            {/* Two Key Metrics */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 3xl:gap-12 4k:gap-16 pt-2 3xl:pt-4 4k:pt-6 border-t border-[#E8E2D5]">
              <div>
                <span
                  className="block font-serif text-xl sm:text-2xl 3xl:text-4xl 4k:text-5xl text-[#122E46] font-normal 4k:mb-2"
                  style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                >
                  108
                </span>
                <span className="text-[11px] sm:text-xs 3xl:text-base 4k:text-lg text-stone-600 font-sans 4k:leading-normal">
                  Vedic Contemplation Beads
                </span>
              </div>

              <div>
                <span
                  className="block font-serif text-xl sm:text-2xl 3xl:text-4xl 4k:text-5xl text-[#122E46] font-normal 4k:mb-2"
                  style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                >
                  0%
                </span>
                <span className="text-[11px] sm:text-xs 3xl:text-base 4k:text-lg text-stone-600 font-sans 4k:leading-normal">
                  Synthetic Varnishes or Dyes
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
