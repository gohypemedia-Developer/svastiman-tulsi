"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const MUKTI_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What makes the Mukti Mahamala distinct from standard Japa malas?",
    answer:
      "Most commercial malas are mass-drilled from low-grade plantation seeds and coated in polyurethane lacquers or chemical dyes to create artificial shine. The Mukti Mahamala is an authentic dual-lineage creation: pairing wild, unlacquered 5-Mukhi Rudraksha harvested above 2,400 meters in Nepal with naturally seasoned Vrindavan Tulsi heartwood. Every bead is separated by hand with authentic Brahmagranthi unbleached cotton knots, sealed with a cast sterling silver Yantra Meru finial, and accompanied by a physical laboratory X-ray density certificate.",
  },
  {
    id: "faq-2",
    question: "Who can wear or meditate with the Mukti Mahamala?",
    answer:
      "Anyone seeking mental composure, energetic grounding, and spiritual liberation may wear or chant with the Mukti Mahamala. There are no restrictions of gender, nationality, or astrological placement. The 5-Mukhi Rudraksha is governed by Shiva and Jupiter (Brihaspati), offering universal protection and cognitive balance, while Vrindavan Tulsi awakens unconditional bhakti and inner purity.",
  },
  {
    id: "faq-3",
    question: "Can it be worn continuously throughout the day?",
    answer:
      "Yes. The Mukti Mahamala is designed for enduring daily contact with the skin, allowing the natural botanicals to interact with your bio-electric field. In classical Vedic tradition, it is advised to remove the mala during bathing with chemical soaps, sleeping (to prevent accidental snagging of threads), or attending funeral grounds, and to put it back on after morning cleansing with reverence.",
  },
  {
    id: "faq-4",
    question: "How should I cleanse and re-energize the beads over time?",
    answer:
      "Because the botanicals are 100% natural and untreated, avoid synthetic detergent cleansers. Once a month (preferably on Shukla Paksha Ekadashi or Purnima), lightly sprinkle the beads with Gangajal or rose water, allow them to air-dry naturally in gentle morning sunlight, and nourish them with a few drops of natural sandalwood or cold-pressed sesame oil using a soft brush.",
  },
  {
    id: "faq-5",
    question: "Does the Mukti Mahamala come with a physical authenticity certificate?",
    answer:
      "Yes. Every Mukti artifact is delivered in an archival rigid box sealed with hand-poured wax, containing a signed Svastimān Certificate of Authenticity with digital X-ray radiography inspection results confirming the internal cellular mukhi chambers and botanical density.",
  },
];

export function MuktiFaqSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ "faq-1": true });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="mukti-faq" className="w-full py-14 sm:py-20 lg:py-24 3xl:py-28 4k:py-36 bg-[#FAF8F5] border-b border-[#E8E2D5] select-none">
      <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

        {/* Section Header */}
        <div className="text-center max-w-2xl 3xl:max-w-3xl 4k:max-w-4xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-14 4k:mb-18">
          <span className="text-[11px] sm:text-xs 3xl:text-sm 4k:text-base font-mono uppercase tracking-[0.24em] text-[#7A6242] font-semibold block">
            SCRIPTURAL &amp; PRACTICAL CLARITY
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl 4k:text-[56px] font-normal text-[#122E46] leading-tight"
            style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
          >
            Frequently Answered Inquiries
          </h2>
          <p className="text-xs sm:text-sm 3xl:text-base 4k:text-lg text-stone-600 font-sans leading-relaxed">
            Essential guidelines for wearing, practicing, and honoring your Mukti Mahamala.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl 3xl:max-w-4xl 4k:max-w-5xl mx-auto bg-white border border-[#E8E2D5] p-5 sm:p-8 3xl:p-10 4k:p-12 shadow-xs">
          <div className="divide-y divide-[#E8E2D5]">
            {MUKTI_FAQS.map((item) => {
              const isOpen = !!openIds[item.id];
              return (
                <div key={item.id} className="py-4 sm:py-5 4k:py-6 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-start justify-between gap-4 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-sm sm:text-base 3xl:text-lg 4k:text-xl font-medium text-[#122E46] group-hover:text-[#7A6242] transition-colors leading-snug">
                      {item.question}
                    </span>
                    <span className="text-[#C5A880] flex items-center justify-center w-5 h-5 shrink-0 mt-0.5">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 text-xs sm:text-sm 3xl:text-base 4k:text-lg text-stone-600 font-sans leading-relaxed 4k:leading-[1.75] animate-in fade-in-50 duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
