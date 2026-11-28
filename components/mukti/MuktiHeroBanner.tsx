"use client";

import React from "react";
import Image from "next/image";

export function MuktiHeroBanner() {
  const scrollToProduct = () => {
    const el = document.getElementById("mukti-best-sellers") || document.getElementById("discover-our-products");
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[100svh] h-[100dvh] min-h-[100svh] min-h-[100dvh] sm:h-auto sm:min-h-[640px] md:min-h-[700px] lg:min-h-[760px] xl:min-h-[820px] 3xl:min-h-[880px] 4k:min-h-[960px] flex items-center justify-center overflow-hidden bg-[#FAF8F5] select-none">
      {/* Background Hero Image - Full Page Bleed with High-End Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mukti/mukti_hero_rudraksha_shiva.jpg"
          alt="Consecrated Nepali Rudraksha Mala Bracelet with Lord Shiva and Sacred Temple Light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:object-[center_48%] transition-transform duration-1000 ease-out"
        />
        {/* Soft edge vignettes: Top shadow for transparent navbar legibility, clear center, balanced bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/45 z-10 pointer-events-none" />
      </div>

      {/* Centered Editorial Content matching suastiman.vercel.app Hierarchy */}
      <div className="relative z-20 w-full max-w-4xl 3xl:max-w-5xl 4k:max-w-6xl mx-auto px-4 sm:px-8 4k:px-12 text-center flex flex-col items-center justify-center pt-20 sm:pt-36 md:pt-40 lg:pt-44 3xl:pt-48 4k:pt-56 pb-8 sm:pb-24 4k:pb-32">
        {/* Centered Serif Headline mirroring Tulsi Kanthi Mala */}
        <h1
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] 3xl:text-[84px] 4k:text-[96px] font-normal tracking-[0.05em] sm:tracking-[0.08em] 4k:tracking-[0.1em] text-white uppercase text-center leading-[1.14] sm:leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] mb-3 sm:mb-4 4k:mb-6 max-w-4xl 4k:max-w-5xl"
          style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
        >
          Nepali Rudraksha Mala
        </h1>

        {/* Subtitle Paragraph mirroring Tulsi */}
        <p className="text-xs sm:text-sm md:text-base 3xl:text-lg 4k:text-xl text-white/95 font-sans font-normal tracking-wide leading-relaxed max-w-xl 3xl:max-w-2xl 4k:max-w-3xl mx-auto mb-7 sm:mb-8 4k:mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Rooted in Sacred Tradition. Consecrated Through Devotion.
        </p>

        {/* Solid White Button with Navy Text matching uploaded reference */}
        <div>
          <button
            onClick={scrollToProduct}
            className="inline-flex items-center justify-center bg-white hover:bg-[#F7F5F0] text-[#122E46] text-[10px] sm:text-xs 3xl:text-sm 4k:text-[15px] font-sans font-medium tracking-[0.2em] sm:tracking-[0.25em] 4k:tracking-[0.28em] uppercase px-7 sm:px-10 3xl:px-12 4k:px-14 py-3 sm:py-3.5 3xl:py-4 4k:py-4.5 rounded-none shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 cursor-pointer active:scale-[0.98]"
            aria-label="Shop Mukti Consecrated Artifacts Now"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
