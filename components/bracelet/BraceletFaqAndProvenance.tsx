"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "How do I select the right gemstone bracelet for my intention?",
    answer:
      "Select your crystal based on resonance or intended alignment: Amazonite for soothing communication and truth, Amethyst for inner tranquility and spiritual awareness, Tiger Eye for grounded confidence and energetic protection, Rose Quartz for unconditional love and heart healing, and 7 Chakra for balanced alignment across all energy centers.",
  },
  {
    id: "faq-2",
    question: "Are all crystal and stone beads 100% genuine and naturally mined?",
    answer:
      "Yes. Every bead is cut and polished from authentic Grade-AAA natural mineral earth crystals. We never use dyed synthetic glass, composite resins, or imitation plastics. Each bracelet retains the unique natural inclusions, crystalline striations, and tactile weight of genuine earth minerals.",
  },
  {
    id: "faq-3",
    question: "How should I cleanse, activate, and recharge my healing stone bracelet?",
    answer:
      "To purify energetic residue, place your bracelet under the light of the full moon overnight, rest it atop a raw Selenite charging slab or Clear Quartz cluster, or gently smudge it with sacred white sage or sandalwood incense. Avoid soaking in salt water or harsh chemical cleaners.",
  },
  {
    id: "faq-4",
    question: "What is the wrist sizing, durability, and cord strength?",
    answer:
      "Our bracelets are strung on ultra-durable, Japanese 4-strand high-resilience stretch elastic cord engineered for enduring daily wear. They comfortably fit wrist circumferences from 6.0 to 7.5 inches (15 to 19 cm), expanding smoothly without losing shape or tension.",
  },
];

interface BraceletFaqAndProvenanceProps {
  onAcquireClick?: () => void;
}

export function BraceletFaqAndProvenance({ onAcquireClick }: BraceletFaqAndProvenanceProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleShopClick = () => {
    if (onAcquireClick) {
      onAcquireClick();
      return;
    }
    const el = document.getElementById("bracelet-best-sellers");
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* ========================================================================= */}
      {/* SECTION 1: FREQUENTLY ASKED QUESTIONS                                     */}
      {/* ========================================================================= */}
      <section id="faq-section" className="w-full py-12 sm:py-24 3xl:py-28 4k:py-36 bg-[#FAF8F5]">
        <div className="max-w-[960px] 3xl:max-w-[1280px] 4k:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4k:px-16">
          <div className="bg-white p-5 sm:p-10 lg:p-16 3xl:p-20 4k:p-24 border border-[#E8E2D5] shadow-xs space-y-6 sm:space-y-8 4k:space-y-12">
            {/* Title */}
            <div className="text-center">
              <h2
                className="text-xl sm:text-3xl lg:text-4xl 3xl:text-5xl 4k:text-6xl font-normal text-[#122E46]"
                style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            {/* 4 Boxed FAQ Accordions */}
            <div className="space-y-3.5">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openFaqId === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setOpenFaqId(item.id)}
                    onMouseLeave={() => setOpenFaqId(null)}
                    className="border border-[#E5DEC8] bg-white transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      className="w-full px-4 sm:px-5 4k:px-7 py-3.5 sm:py-4 4k:py-5 flex items-center gap-3 sm:gap-4 4k:gap-5 text-left cursor-pointer hover:bg-[#FAF8F5]/80 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[#C5A880] flex items-center justify-center w-4 h-4 shrink-0 font-light text-lg">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                      <span className="font-sans text-xs sm:text-sm 3xl:text-base 4k:text-xl font-medium text-[#122E46] leading-snug">
                        {item.question}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out overflow-hidden ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-5 4k:px-7 pb-4 sm:pb-5 4k:pb-6 pl-10 sm:pl-12 4k:pl-14 pt-2 4k:pt-3 text-xs sm:text-sm 3xl:text-base 4k:text-lg font-sans text-stone-600 leading-relaxed border-t border-[#E5DEC8]/50">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: THE FOUR PILLARS OF GEMSTONE SACRED ORIGIN                     */}
      {/* ========================================================================= */}
      <section id="authenticity" className="w-full py-12 sm:py-24 3xl:py-28 4k:py-36 bg-[#FAF8F5]">
        <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">
          <div className="text-center max-w-2xl 3xl:max-w-3xl 4k:max-w-4xl mx-auto space-y-2 4k:space-y-4 mb-8 sm:mb-10 4k:mb-16">
            <h2
              className="text-2xl sm:text-3xl 3xl:text-4xl 4k:text-[52px] font-normal text-[#122E46] 4k:leading-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              The Four Pillars of Gemstone Sacred Origin
            </h2>
            <p className="text-xs sm:text-sm 3xl:text-lg 4k:text-xl text-stone-600 font-sans 4k:leading-relaxed">
              Commitment to geological purity, ethical sourcing, and certified mineral integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 3xl:gap-8 4k:gap-10">
            {/* Pillar 1 */}
            <div className="p-5 sm:p-6 3xl:p-8 4k:p-10 bg-white border border-[#E8E2D5] space-y-2.5 4k:space-y-4 shadow-2xs hover:border-[#C5A880] transition-colors">
              <h3 className="font-serif text-base 3xl:text-xl 4k:text-2xl font-semibold text-[#122E46]">
                100% Untreated Earth Crystals
              </h3>
              <p className="text-xs 3xl:text-base 4k:text-[18px] text-stone-600 font-sans leading-relaxed 4k:leading-[1.7]">
                Cut and hand-polished from genuine earth minerals, preserving natural crystal luster, cool tactile weight, and raw geological frequency.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 sm:p-6 3xl:p-8 4k:p-10 bg-white border border-[#E8E2D5] space-y-2.5 4k:space-y-4 shadow-2xs hover:border-[#C5A880] transition-colors">
              <h3 className="font-serif text-base 3xl:text-xl 4k:text-2xl font-semibold text-[#122E46]">
                Ethically Mined Geological Belts
              </h3>
              <p className="text-xs 3xl:text-base 4k:text-[18px] text-stone-600 font-sans leading-relaxed 4k:leading-[1.7]">
                Responsibly procured from high-vibrational mining belts across Brazil, Madagascar, Africa, and India with fair-trade artisanal partnerships.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 sm:p-6 3xl:p-8 4k:p-10 bg-white border border-[#E8E2D5] space-y-2.5 4k:space-y-4 shadow-2xs hover:border-[#C5A880] transition-colors">
              <h3 className="font-serif text-base 3xl:text-xl 4k:text-2xl font-semibold text-[#122E46]">
                Chakra Alignment & Prana
              </h3>
              <p className="text-xs 3xl:text-base 4k:text-[18px] text-stone-600 font-sans leading-relaxed 4k:leading-[1.7]">
                Harmonized with specific energetic chakras—from Root grounding to Crown clarity—infusing balance into daily modern rituals.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-5 sm:p-6 3xl:p-8 4k:p-10 bg-white border border-[#E8E2D5] space-y-2.5 4k:space-y-4 shadow-2xs hover:border-[#C5A880] transition-colors">
              <h3 className="font-serif text-base 3xl:text-xl 4k:text-2xl font-semibold text-[#122E46]">
                Gemological Lab Certified
              </h3>
              <p className="text-xs 3xl:text-base 4k:text-[18px] text-stone-600 font-sans leading-relaxed 4k:leading-[1.7]">
                Accompanied by verifiable mineral authenticity standards ensuring zero synthetic resins, lead-free composition, and genuine crystal structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: EDITORIAL BANNER: FORMED BY THE EARTH                          */}
      {/* ========================================================================= */}
      <section className="w-full py-10 sm:py-20 3xl:py-24 4k:py-32 bg-[#FAF8F5]">
        <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">
          <div
            onClick={handleShopClick}
            className="group relative overflow-hidden bg-stone-900 text-[#FAF8F5] min-h-[360px] sm:min-h-[440px] 3xl:min-h-[500px] 4k:min-h-[580px] flex items-center justify-end border border-[#E8E2D5] cursor-pointer"
          >
            <Image
              src="/images/bracelets/bracelet_wear_lifestyle.jpg"
              alt="Model wearing natural crystal healing bracelets in warm natural sunlight"
              fill
              className="object-cover object-left sm:object-[25%_40%] group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 1240px"
            />
            {/* Directional vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 sm:bg-gradient-to-r sm:from-black/25 sm:via-black/50 sm:to-black/85 z-1 pointer-events-none" />

            {/* Bottom Left "COLLECTION" Tag */}
            <div className="absolute top-4 sm:top-auto sm:bottom-8 left-5 sm:left-10 z-10 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-white/80 select-none">
              SACRED GEMSTONE COLLECTION
            </div>

            {/* Right Aligned Editorial Content */}
            <div className="relative z-10 p-5 sm:p-10 lg:p-14 3xl:p-16 4k:p-20 max-w-md sm:max-w-lg lg:max-w-xl 3xl:max-w-2xl 4k:max-w-3xl space-y-3 sm:space-y-4 4k:space-y-6 text-left mr-0 sm:mr-4 lg:mr-8 4k:mr-12 mt-12 sm:mt-0">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl 4k:text-6xl font-normal leading-tight text-white tracking-tight"
                style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
              >
                Formed by the Earth.
                <br />
                Calibrated for the Soul.
              </h3>
              <p className="text-xs sm:text-sm 3xl:text-lg 4k:text-[22px] text-stone-200/90 font-sans leading-relaxed 4k:leading-[1.75]">
                Grade-AAA untreated gemstone bracelets strung on high-tensile resilience cord. Everyday metaphysical elegance with botanical purity.
              </p>
              <div className="pt-2 sm:pt-3">
                <span className="inline-block border border-white text-white text-[11px] 3xl:text-xs 4k:text-sm font-mono tracking-[0.24em] uppercase px-6 sm:px-8 4k:px-10 py-2.5 sm:py-3 4k:py-4 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  SHOP NOW
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
