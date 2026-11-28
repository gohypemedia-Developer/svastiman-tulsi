"use client";

import React from "react";
import Image from "next/image";

const JOURNEY_STAGES = [
  {
    step: "01",
    badge: "STAGE 01 • WILD ALPINE HARVEST",
    title: "Eastern Nepal (2,400m+)",
    caption:
      "Hand-collected from wild Elaeocarpus trees on cloud-belt Himalayan slopes. Only naturally fallen ripe fruit is harvested with zero mechanical shaking.",
    image: "/images/origin/stage1_mountain.jpg",
  },
  {
    step: "02",
    badge: "STAGE 02 • GLACIAL SPRING WASH",
    title: "River Cleansing & Density Test",
    caption:
      "Gently river-washed in running glacial meltwaters to remove natural fruit peel. Flotation density tested: only dense sinking seeds are accepted.",
    image: "/images/origin/stage2_river.jpg",
  },
  {
    step: "03",
    badge: "STAGE 03 • BRAHMAGRANTHI KNOTTING",
    title: "Vedic Generational Knots",
    caption:
      "Generational Braj artisans hand-turn mature Vrindavan Tulsi heartwood and knot every single bead with sacred unbleached cotton threads.",
    image: "/images/editorial/editorial_4_knot.jpg",
  },
  {
    step: "04",
    badge: "STAGE 04 • PRANA PRATISHTHA",
    title: "Temple Consecration & Deed",
    caption:
      "Energized in our Vedic temple sanctuary with Mahamrityunjaya mantras and sealed in wax with a physical digital X-ray laboratory authenticity deed.",
    image: "/images/origin/stage9_svastiman.jpg",
  },
];

export function MuktiConsecrationJourney() {
  return (
    <section id="mukti-journey" className="w-full py-14 sm:py-20 lg:py-24 3xl:py-28 4k:py-36 bg-[#FAF8F5] border-b border-[#E8E2D5] select-none">
      <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

        {/* Section Header */}
        <div className="text-center max-w-2xl 3xl:max-w-3xl 4k:max-w-4xl mx-auto space-y-2.5 sm:space-y-3 mb-12 sm:mb-16 4k:mb-20">
          <span className="text-[11px] sm:text-xs 3xl:text-sm 4k:text-base font-mono uppercase tracking-[0.24em] text-[#7A6242] font-semibold block">
            UNBROKEN SACRED LINEAGE
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl 4k:text-[56px] font-normal text-[#122E46] leading-tight"
            style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
          >
            The Journey of Consecration
          </h2>
          <p className="text-xs sm:text-sm 3xl:text-base 4k:text-lg text-stone-600 font-sans leading-relaxed">
            Before it was a mala, it was a fruit and a tree: nature precedes ritual.
          </p>
        </div>

        {/* 4 Cards Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {JOURNEY_STAGES.map((stg) => (
            <div
              key={stg.step}
              className="group flex flex-col space-y-3.5 3xl:space-y-4 bg-white p-4 sm:p-5 border border-[#E8E2D5] hover:border-[#C5A880] transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              {/* Image with Step Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5]">
                <Image
                  src={stg.image}
                  alt={stg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#122E46] text-white font-mono text-[11px] font-bold px-2 py-0.5">
                  {stg.step}
                </div>
              </div>

              {/* Text Information */}
              <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A6242] font-semibold block">
                    {stg.badge}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg 3xl:text-xl font-medium text-[#122E46] mt-0.5">
                    {stg.title}
                  </h3>
                  <p className="text-xs 3xl:text-sm 4k:text-base text-stone-600 font-sans leading-relaxed mt-1.5">
                    {stg.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
