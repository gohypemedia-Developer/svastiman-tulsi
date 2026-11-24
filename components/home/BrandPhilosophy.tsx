"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function BrandPhilosophy() {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#122E46] select-none">

      {/* ========================================================================= */}
      {/* SECTION 1: FULL-PAGE HERO BANNER (IMAGE ACROSS FULL PAGE WITH OVERLAY TEXT) */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[68vh] sm:h-[78vh] lg:h-[calc(100vh-108px)] min-h-[500px] sm:min-h-[580px] lg:min-h-[660px] max-h-[880px] flex items-center justify-center overflow-hidden bg-[#122E46] select-none">
        {/* Background Hero Image - Full Page Bleed */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_hero_banner_2k.jpg"
            alt="Sacred Rudraksha mala, Shiva medallion, sanctified tulsi leaves, brass diya, and ancient temple"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-[1.02] transition-transform duration-1000"
          />
          {/* Multi-layered luxury overlays: dark gradient vignettes for flawless text legibility while keeping visual elements vibrant */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/45 z-10 pointer-events-none" />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0, 0, 0, 0.15) 0%, transparent 65%, rgba(0, 0, 0, 0.55) 100%)",
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
            Rooted in Tradition. <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#F4E8D4]">Crafted for Today.</span>
          </h1>

          {/* Subtitle / Brand Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-[17px] 3xl:text-xl 4k:text-2xl text-white/95 font-sans font-light tracking-wide leading-relaxed max-w-xl sm:max-w-2xl 3xl:max-w-3xl 4k:max-w-4xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Reviving the sacred heritage of ancient Indian devotions. Crafted with authentic materials, sanctified wood, and deep devotion.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: A STORY ROOTED IN HERITAGE (2-COLUMN EDITORIAL)                 */}
      {/* ========================================================================= */}
      <section id="story" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">

            {/* Left Column: Portrait Model Wear Photo */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="relative aspect-[3/4] w-full max-w-[320px] sm:max-w-[360px] md:max-w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5] shadow-xs">
                <Image
                  src="/images/products/tulsi/t01_model_wear.jpg"
                  alt="Devotee wearing genuine Vrindavan Tulsi Kanthi Mala"
                  fill
                  sizes="(max-width: 768px) 360px, 450px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Story Narrative & Monograph Quote */}
            <div className="md:col-span-7 space-y-4 sm:space-y-5">
              <div>
                <h2
                  className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] 3xl:text-5xl 4k:text-6xl font-normal text-[#122E46] leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                >
                  A Story Rooted <span className="italic font-normal">in Sacred Heritage.</span>
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-[13px] text-stone-600 font-sans leading-relaxed">
                <p>
                  Svastimān began with a humble vision: to rekindle our connection with the living traditions of sacred Indian devotion in a modern, distracted world.
                </p>
                <p>
                  Born in holy Braj Dham, our journey follows ancient craftsmanship, sourcing naturally seasoned Vrindavan Tulsi wood and Himalayan botanicals, treated only with sacred oils and generational reverence.
                </p>
              </div>

              {/* Monograph Quote Callout Box */}
              <div className="p-4 sm:p-5 bg-[#F5F2EB]/70 border border-[#E2DEC9] rounded-none">
                <p
                  className="font-serif text-xs sm:text-sm text-[#122E46] italic font-normal leading-relaxed"
                  style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                >
                  &ldquo;Tulsi is not just a sacred wood—it is the divine presence of holy devotion.&rdquo;
                </p>
              </div>

              {/* Two Key Metrics */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-2 border-t border-[#E8E2D5]">
                <div>
                  <span
                    className="block font-serif text-xl sm:text-2xl text-[#122E46] font-normal"
                    style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                  >
                    100%
                  </span>
                  <span className="text-[11px] sm:text-xs text-stone-600 font-sans">
                    Pure Braj Vrindavan Wood
                  </span>
                </div>

                <div>
                  <span
                    className="block font-serif text-xl sm:text-2xl text-[#122E46] font-normal"
                    style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                  >
                    0%
                  </span>
                  <span className="text-[11px] sm:text-xs text-stone-600 font-sans">
                    Artificial Wax or Dyes
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
      <section className="py-12 sm:py-16 lg:py-20 border-t border-[#E8E2D5] bg-[#F7F5F0]">
        <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

          {/* Section Header */}
          <div className="mb-6 sm:mb-10">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] 3xl:text-5xl 4k:text-6xl font-normal text-[#122E46] leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              Where Ancient Wisdom <span className="italic font-normal">Meets Modern Living.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">

            {/* Left Column: 3 Pillars */}
            <div className="md:col-span-7 space-y-4 sm:space-y-6">

              {/* Pillar 1 */}
              <div className="space-y-1 pb-4 border-b border-[#E8E2D5]">
                <h3 className="font-serif text-base sm:text-lg font-medium text-[#122E46]">
                  Botanical Purity
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 font-sans leading-relaxed">
                  100% naturally seasoned Vrindavan Tulsi heartwood without synthetic varnishes, chemical lacquers, or non-traditional processing. Tested for natural wood density.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-1 pb-4 border-b border-[#E8E2D5]">
                <h3 className="font-serif text-base sm:text-lg font-medium text-[#122E46]">
                  Generational Craft
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 font-sans leading-relaxed">
                  Crafted by master Braj artisans whose families have sanctified sacred beads for centuries with traditional brass clasps and devotional cotton thread.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="space-y-1">
                <h3 className="font-serif text-base sm:text-lg font-medium text-[#122E46]">
                  Timeless Presence
                </h3>
                <p className="text-xs sm:text-[13px] text-stone-600 font-sans leading-relaxed">
                  Created with weight and balance designed for effortless daily wear, serving as a quiet reminder of bhakti throughout modern day-to-day life.
                </p>
              </div>

            </div>

            {/* Right Column: Close-up Medallion Image */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[320px] md:max-w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5] shadow-xs">
                <Image
                  src="/images/editorial/editorial_3_medallion.jpg"
                  alt="Artisan engraved Radha Krishna sacred medallion"
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
      <section className="py-12 sm:py-16 lg:py-20 border-t border-[#E8E2D5]">
        <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

          {/* Header Row */}
          <div className="mb-6 sm:mb-10">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] 3xl:text-5xl 4k:text-6xl font-normal text-[#122E46] leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              Made with Meaning. <span className="italic font-normal">Crafted with Care.</span>
            </h2>
          </div>

          {/* 3 Process Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">

            {/* Card 1 */}
            <div className="group flex flex-col space-y-2.5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5]">
                <Image
                  src="/images/editorial/editorial_4_knot.jpg"
                  alt="Hand knotting and traditional brass barrel lock"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-[17px] font-medium text-[#122E46]">
                  Hand-Knotting &amp; Threading
                </h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed mt-0.5">
                  Generational knots and master brass screw barrel clasp.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col space-y-2.5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5]">
                <Image
                  src="/images/editorial/editorial_2_beads.jpg"
                  alt="Naturally seasoned 2.5mm beige Tulsi beads"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-[17px] font-medium text-[#122E46]">
                  Naturally Seasoned Heartwood
                </h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed mt-0.5">
                  Smooth cylindrical beads cured in cold-pressed sandalwood oil.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col space-y-2.5 sm:col-span-2 md:col-span-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5]">
                <Image
                  src="/images/editorial/editorial_5_japa_mala.jpg"
                  alt="Sanctified 108 beads Vrindavan Tulsi Japa Mala"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-[17px] font-medium text-[#122E46]">
                  Sacred Consecration
                </h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed mt-0.5">
                  Sanctified in Braj Dham with physical authenticity certificate.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: THE FOUR PILLARS OF REVERENCE                                  */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 border-t border-[#E8E2D5] bg-[#F7F5F0]">
        <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

          {/* Header Row */}
          <div className="mb-6 sm:mb-10">
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] 3xl:text-5xl 4k:text-6xl font-normal text-[#122E46] leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              The Four Pillars <span className="italic font-normal">of Reverence.</span>
            </h2>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 border-t border-[#E8E2D5]">

            {/* Pillar I */}
            <div className="space-y-1">
              <span className="font-serif text-sm font-semibold text-[#7A6242] block">
                I
              </span>
              <h3 className="font-serif text-base sm:text-[17px] text-[#122E46] font-medium">
                Authenticity
              </h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                100% natural holy wood. Physical lab deed for origin and internal density.
              </p>
            </div>

            {/* Pillar II */}
            <div className="space-y-1">
              <span className="font-serif text-sm font-semibold text-[#7A6242] block">
                II
              </span>
              <h3 className="font-serif text-base sm:text-[17px] text-[#122E46] font-medium">
                Quality
              </h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Precision brass fittings, master thread knotting, zero artificial chemicals.
              </p>
            </div>

            {/* Pillar III */}
            <div className="space-y-1">
              <span className="font-serif text-sm font-semibold text-[#7A6242] block">
                III
              </span>
              <h3 className="font-serif text-base sm:text-[17px] text-[#122E46] font-medium">
                Heritage
              </h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Generational Braj artisans preserving centuries of devotional craftsmanship.
              </p>
            </div>

            {/* Pillar IV */}
            <div className="space-y-1">
              <span className="font-serif text-sm font-semibold text-[#7A6242] block">
                IV
              </span>
              <h3 className="font-serif text-base sm:text-[17px] text-[#122E46] font-medium">
                Reverence
              </h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Made for devotional wear, reminding the seeker of bhakti in everyday moments.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: STATEMENT QUOTE CALLOUT BANNER (Dark Obsidian Navy Finish)     */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0D1C27] text-white text-center relative overflow-hidden">
        {/* Subtle radial ambient highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16 space-y-5 sm:space-y-6">
          <blockquote
            className="font-serif text-lg sm:text-2xl md:text-[28px] lg:text-[32px] font-normal leading-relaxed text-white max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
          >
            &ldquo;Sacred materials do not belong only in antiquity. When crafted with reverence, they become our anchor in the modern world.&rdquo;
          </blockquote>

          <div className="pt-2">
            <Link
              href="/products"
              className="inline-block px-7 py-3 bg-white hover:bg-[#FAF8F5] text-[#122E46] hover:text-black text-[11px] font-mono tracking-[0.22em] uppercase transition-all duration-300 shadow-md"
            >
              EXPLORE THE COLLECTION
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
