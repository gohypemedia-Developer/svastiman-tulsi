"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function MuktiBrandPhilosophy() {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#122E46] select-none">

      {/* ========================================================================= */}
      {/* SECTION 1: FULL-PAGE HERO BANNER (IMAGE ACROSS FULL PAGE WITH OVERLAY)     */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[68vh] sm:h-[78vh] lg:h-[calc(100vh-108px)] min-h-[500px] sm:min-h-[580px] lg:min-h-[660px] max-h-[880px] flex items-center justify-center overflow-hidden bg-[#122E46] select-none">
        {/* Background Hero Image - Full Page Bleed */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mukti/mukti_hero_rudraksha_shiva.jpg"
            alt="Sacred Himalayan Nepali Rudraksha with Lord Shiva Murti, brass diya, and temple light"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-[1.02] transition-transform duration-1000"
          />
          {/* Multi-layered luxury overlays: dark gradient vignettes for flawless text legibility while keeping elements vibrant */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/50 z-10 pointer-events-none" />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, transparent 65%, rgba(0, 0, 0, 0.6) 100%)",
            }}
          />
        </div>

        {/* Hero Content Overlaid Directly on Top of the Banner */}
        <div className="relative z-20 w-full max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16 text-center flex flex-col items-center justify-center pt-6 pb-8 sm:pb-12">
          {/* Main Headline */}
          <h1
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] 3xl:text-[84px] 4k:text-[96px] font-normal text-white leading-[1.12] sm:leading-[1.08] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] max-w-4xl 4k:max-w-6xl mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
          >
            Wild Himalayan Lineage. <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#F4E8D4]">Consecrated for Stillness.</span>
          </h1>

          {/* Subtitle / Brand Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-[17px] 3xl:text-xl 4k:text-2xl text-white/95 font-sans font-light tracking-wide leading-relaxed max-w-xl sm:max-w-2xl 3xl:max-w-3xl 4k:max-w-4xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Preserving the sacred heritage of authentic Nepali Rudraksha. Handpicked from native sub-Himalayan groves (2,400m+), consecrated with Vedic mantras, honoring Lord Shiva.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: A STORY ROOTED IN HIMALAYAN HERITAGE (2-COLUMN EDITORIAL)       */}
      {/* ========================================================================= */}
      <section id="story" className="py-12 sm:py-16 lg:py-20 3xl:py-24 4k:py-32">
        <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 3xl:gap-20 4k:gap-24 items-center">

            {/* Left Column: Portrait Model Wear Photo */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="relative aspect-[3/4] w-full max-w-[320px] sm:max-w-[360px] md:max-w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5] shadow-xs">
                <Image
                  src="/images/mukti/category_rudraksha.jpg"
                  alt="Devotee wearing genuine consecrated Himalayan Nepali Rudraksha Mala in temple courtyard"
                  fill
                  sizes="(max-width: 768px) 360px, 450px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Story Narrative & Monograph Quote */}
            <div className="md:col-span-7 space-y-4 sm:space-y-5 3xl:space-y-8 4k:space-y-10">
              <div>
                <h2
                  className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] 3xl:text-5xl 4k:text-[60px] font-normal text-[#122E46] leading-tight 4k:leading-[1.18] tracking-tight"
                  style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                >
                  A Story Rooted <span className="italic font-normal">in Himalayan Heritage.</span>
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4 3xl:space-y-5 4k:space-y-6 text-xs sm:text-[13px] 3xl:text-lg 4k:text-[22px] text-stone-600 font-sans leading-relaxed 3xl:leading-[1.75] 4k:leading-[1.8]">
                <p>
                  Mukti arose from a sacred calling: to return the primordial science of high-altitude Rudraksha to spiritual seekers living in an overstimulated, fragmented modern world.
                </p>
                <p>
                  Sourced exclusively from the misty, untouched slopes of Eastern Nepal (2,400m+), each seed matures under Himalayan clouds before being gathered by generational foresters, cleansed in alpine glacial streams, and hand-strung with unbroken Brahmagranthi sacred knots.
                </p>
              </div>

              {/* Monograph Quote Callout Box */}
              <div className="p-4 sm:p-5 3xl:p-6 4k:p-8 bg-[#F5F2EB]/70 border border-[#E2DEC9] rounded-none">
                <p
                  className="font-serif text-xs sm:text-sm 3xl:text-lg 4k:text-[22px] text-[#122E46] italic font-normal leading-relaxed 3xl:leading-[1.7] 4k:leading-[1.75]"
                  style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                >
                  &ldquo;Rudraksha is not a mere bead—it is the tear of Rudra, dissolving restlessness and establishing immovable peace (Chitta Shuddhi).&rdquo;
                </p>
              </div>

              {/* Two Key Metrics */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 3xl:gap-12 4k:gap-16 pt-2 3xl:pt-4 4k:pt-6 border-t border-[#E8E2D5]">
                <div>
                  <span
                    className="block font-serif text-xl sm:text-2xl 3xl:text-4xl 4k:text-5xl text-[#122E46] font-normal 4k:mb-2"
                    style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                  >
                    100%
                  </span>
                  <span className="text-[11px] sm:text-xs 3xl:text-base 4k:text-lg text-stone-600 font-sans 4k:leading-normal">
                    Wild Eastern Nepal Alpine Harvest
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
                    Chemical Dye, Wax or Synthetic Glaze
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHERE ANCIENT WISDOM MEETS MODERN LIVING                       */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 3xl:py-24 4k:py-32 border-t border-[#E8E2D5] bg-[#F7F5F0]">
        <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

          {/* Section Header */}
          <div className="mb-6 sm:mb-10 3xl:mb-14 4k:mb-16">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] 3xl:text-5xl 4k:text-[60px] font-normal text-[#122E46] leading-tight 4k:leading-[1.18] tracking-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              Where Ancient Stillness <span className="italic font-normal">Meets Modern Life.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 3xl:gap-20 4k:gap-24 items-center">

            {/* Left Column: 3 Pillars */}
            <div className="md:col-span-7 space-y-4 sm:space-y-6 3xl:space-y-8 4k:space-y-10">

              {/* Pillar 1 */}
              <div className="space-y-1 3xl:space-y-2.5 4k:space-y-3 pb-4 3xl:pb-6 4k:pb-8 border-b border-[#E8E2D5]">
                <h3 className="font-serif text-base sm:text-lg 3xl:text-2xl 4k:text-[26px] font-medium text-[#122E46]">
                  Alpine Botanical Purity
                </h3>
                <p className="text-xs sm:text-[13px] 3xl:text-base 4k:text-[19px] text-stone-600 font-sans leading-relaxed 3xl:leading-[1.75] 4k:leading-[1.8]">
                  Gathered only after natural tree detachment. Cleaned solely with natural plant bristles and cured in cold-pressed sesame oil. Zero toxic lead or chemical dyes.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-1 3xl:space-y-2.5 4k:space-y-3 pb-4 3xl:pb-6 4k:pb-8 border-b border-[#E8E2D5]">
                <h3 className="font-serif text-base sm:text-lg 3xl:text-2xl 4k:text-[26px] font-medium text-[#122E46]">
                  Unbroken Brahmagranthi Craft
                </h3>
                <p className="text-xs sm:text-[13px] 3xl:text-base 4k:text-[19px] text-stone-600 font-sans leading-relaxed 3xl:leading-[1.75] 4k:leading-[1.8]">
                  Strung by generational Brahmin artisans using sacred triple-twisted silk thread. Each bead is cushioned with an individual Brahmagranthi knot to prevent seed abrasion.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="space-y-1 3xl:space-y-2.5 4k:space-y-3">
                <h3 className="font-serif text-base sm:text-lg 3xl:text-2xl 4k:text-[26px] font-medium text-[#122E46]">
                  Electromagnetic Cocoon
                </h3>
                <p className="text-xs sm:text-[13px] 3xl:text-base 4k:text-[19px] text-stone-600 font-sans leading-relaxed 3xl:leading-[1.75] 4k:leading-[1.8]">
                  Scientifically proven dielectric capacitance that grounds fluctuating bio-electric nervous energy, stabilizing blood pressure and dissolving cognitive fatigue.
                </p>
              </div>

            </div>

            {/* Right Column: Close-up Silver Talisman Image */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[320px] md:max-w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5] shadow-xs">
                <Image
                  src="/images/mukti/category_silver_talismans.jpg"
                  alt="Authentic 925 sterling silver Shiva medallion with Nepali Rudraksha beads"
                  fill
                  sizes="(max-width: 768px) 320px, 450px"
                  className="object-cover object-center"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: MADE WITH MEANING, CRAFTED WITH CARE (3 PROCESS CARDS)         */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 3xl:py-24 4k:py-32 border-t border-[#E8E2D5]">
        <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

          {/* Header Row */}
          <div className="mb-6 sm:mb-10 3xl:mb-14 4k:mb-16">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] 3xl:text-5xl 4k:text-[60px] font-normal text-[#122E46] leading-tight 4k:leading-[1.18] tracking-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              Made with Meaning. <span className="italic font-normal">Consecrated with Care.</span>
            </h2>
          </div>

          {/* 3 Process Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 3xl:gap-10 4k:gap-14">

            {/* Card 1 */}
            <div className="group flex flex-col space-y-2.5 3xl:space-y-4 4k:space-y-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5]">
                <Image
                  src="/images/mukti/card_rudraksha_om_bracelet.jpg"
                  alt="Braided Sacred Knotting with antique Om medallion"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-[17px] 3xl:text-2xl 4k:text-[26px] font-medium text-[#122E46]">
                  Sacred Knotting &amp; Capping
                </h3>
                <p className="text-xs 3xl:text-base 4k:text-[18px] text-stone-600 font-sans leading-relaxed 3xl:leading-[1.65] 4k:leading-[1.7] mt-0.5 3xl:mt-1.5 4k:mt-2">
                  Hand-braided in pure silk with custom 925 sterling silver caps and authentic lockets.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col space-y-2.5 3xl:space-y-4 4k:space-y-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5]">
                <Image
                  src="/images/mukti/1_mukhi_nepali_rudraksha.jpg"
                  alt="Digital X-Ray radiography certification of natural seed locules"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-[17px] 3xl:text-2xl 4k:text-[26px] font-medium text-[#122E46]">
                  Digital Radiography Testing
                </h3>
                <p className="text-xs 3xl:text-base 4k:text-[18px] text-stone-600 font-sans leading-relaxed 3xl:leading-[1.65] 4k:leading-[1.7] mt-0.5 3xl:mt-1.5 4k:mt-2">
                  Each rare mukhi seed is examined under X-Ray to confirm unbroken internal locules.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col space-y-2.5 3xl:space-y-4 4k:space-y-5 sm:col-span-2 md:col-span-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5]">
                <Image
                  src="/images/mukti/category_sacred_mahamalas.jpg"
                  alt="Vedic Prana Pratishtha 108 Rudraksha Mahamala"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-[17px] 3xl:text-2xl 4k:text-[26px] font-medium text-[#122E46]">
                  Vedic Prana Pratishtha
                </h3>
                <p className="text-xs 3xl:text-base 4k:text-[18px] text-stone-600 font-sans leading-relaxed 3xl:leading-[1.65] 4k:leading-[1.7] mt-0.5 3xl:mt-1.5 4k:mt-2">
                  Consecrated with Mahamrityunjaya chants, infused with high-frequency living prana.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: THE FOUR PILLARS OF MUKTI REVERENCE                             */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 3xl:py-24 4k:py-32 border-t border-[#E8E2D5] bg-[#F7F5F0]">
        <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

          {/* Header Row */}
          <div className="mb-6 sm:mb-10 3xl:mb-14 4k:mb-16">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] 3xl:text-5xl 4k:text-[60px] font-normal text-[#122E46] leading-tight 4k:leading-[1.18] tracking-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              The Four Pillars <span className="italic font-normal">of Mukti Reverence.</span>
            </h2>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 3xl:gap-10 4k:gap-14 pt-6 3xl:pt-8 4k:pt-10 border-t border-[#E8E2D5]">

            {/* Pillar I */}
            <div className="space-y-1 3xl:space-y-2.5 4k:space-y-3">
              <span className="font-serif text-sm 3xl:text-lg 4k:text-2xl font-semibold text-[#7A6242] block">
                I
              </span>
              <h3 className="font-serif text-base sm:text-[17px] 3xl:text-2xl 4k:text-[26px] text-[#122E46] font-medium">
                Wild Provenance
              </h3>
              <p className="text-xs 3xl:text-base 4k:text-[18px] text-stone-600 font-sans leading-relaxed 3xl:leading-[1.65] 4k:leading-[1.7]">
                100% natural Nepali wild harvest. Certified origin from native high-altitude groves.
              </p>
            </div>

            {/* Pillar II */}
            <div className="space-y-1 3xl:space-y-2.5 4k:space-y-3">
              <span className="font-serif text-sm 3xl:text-lg 4k:text-2xl font-semibold text-[#7A6242] block">
                II
              </span>
              <h3 className="font-serif text-base sm:text-[17px] 3xl:text-2xl 4k:text-[26px] text-[#122E46] font-medium">
                Radiographic Integrity
              </h3>
              <p className="text-xs 3xl:text-base 4k:text-[18px] text-stone-600 font-sans leading-relaxed 3xl:leading-[1.65] 4k:leading-[1.7]">
                Digital X-Ray verified internal chambers. Flotation density and botanical authenticity deed.
              </p>
            </div>

            {/* Pillar III */}
            <div className="space-y-1 3xl:space-y-2.5 4k:space-y-3">
              <span className="font-serif text-sm 3xl:text-lg 4k:text-2xl font-semibold text-[#7A6242] block">
                III
              </span>
              <h3 className="font-serif text-base sm:text-[17px] 3xl:text-2xl 4k:text-[26px] text-[#122E46] font-medium">
                Consecrated Lineage
              </h3>
              <p className="text-xs 3xl:text-base 4k:text-[18px] text-stone-600 font-sans leading-relaxed 3xl:leading-[1.65] 4k:leading-[1.7]">
                Consecrated by Vedic priests with Mahamrityunjaya mantras and sacred Ganga jal bath.
              </p>
            </div>

            {/* Pillar IV */}
            <div className="space-y-1 3xl:space-y-2.5 4k:space-y-3">
              <span className="font-serif text-sm 3xl:text-lg 4k:text-2xl font-semibold text-[#7A6242] block">
                IV
              </span>
              <h3 className="font-serif text-base sm:text-[17px] 3xl:text-2xl 4k:text-[26px] text-[#122E46] font-medium">
                Chitta Shuddhi
              </h3>
              <p className="text-xs 3xl:text-base 4k:text-[18px] text-stone-600 font-sans leading-relaxed 3xl:leading-[1.65] 4k:leading-[1.7]">
                Crafted for deep japa meditation, emotional shield, and stilling of the active mind.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: STATEMENT QUOTE CALLOUT BANNER (Dark Obsidian Navy Finish)     */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 3xl:py-28 4k:py-36 bg-[#0D1C27] text-white text-center relative overflow-hidden">
        {/* Subtle radial ambient highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16 space-y-5 sm:space-y-6 3xl:space-y-8 4k:space-y-10">
          <blockquote
            className="font-serif text-lg sm:text-2xl md:text-[28px] lg:text-[32px] 3xl:text-[40px] 4k:text-[50px] font-normal leading-relaxed 4k:leading-[1.45] text-white max-w-2xl 3xl:max-w-4xl 4k:max-w-6xl mx-auto"
            style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
          >
            &ldquo;Rudraksha is not an ornament of antiquity. When worn with reverence, it becomes your sanctuary of silence amidst modern chaos.&rdquo;
          </blockquote>

          <div className="pt-2 3xl:pt-4 4k:pt-6">
            <Link
              href="/mukti#mukti-best-sellers"
              className="inline-block px-7 py-3 3xl:px-10 3xl:py-4.5 4k:px-12 4k:py-5 bg-white hover:bg-[#FAF8F5] text-[#122E46] hover:text-black text-[11px] 3xl:text-sm 4k:text-base font-mono tracking-[0.22em] uppercase transition-all duration-300 shadow-md"
            >
              EXPLORE MUKTI COLLECTION
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
