"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Feather,
  Heart,
  Moon,
  Sun,
  Flame,
  Activity,
  Compass,
} from "lucide-react";

const FOUR_PILLARS = [
  {
    roman: "I",
    title: "Chitta Shuddhi",
    subtitle: "Mental Purification & Stillness",
    description:
      "Dissolves internal chatter and sensory restlessness, allowing the mind to rest in its natural state of undisturbed clarity.",
    icon: Moon,
  },
  {
    roman: "II",
    title: "Karmic Equilibrium",
    subtitle: "Emotional Resilience & Release",
    description:
      "Anchors emotional turbulence, neutralizing recurring anxiety patterns and fostering an inner sanctuary of steady composure.",
    icon: Flame,
  },
  {
    roman: "III",
    title: "Prana Alignment",
    subtitle: "Harmonizing Heart & Throat",
    description:
      "Bridges the protective biomagnetic strength of Himalayan seeds with the heart-opening devotion of Vrindavan holy basil.",
    icon: Activity,
  },
  {
    roman: "IV",
    title: "Moksha Sankalpa",
    subtitle: "Remembrance of Ultimate Freedom",
    description:
      "A tactile physical reminder in daily modern life that consciousness is inherently free, untethered by temporary worldly friction.",
    icon: Compass,
  },
];

const BENEFIT_TABS = [
  {
    id: "mind",
    label: "Mental Composure",
    title: "Calming the Restless Intellect",
    icon: Feather,
    points: [
      {
        heading: "Parasympathetic Activation",
        desc: "Natural tactile rolling of raw 8mm beads across acupressure nerve endings in the fingers triggers immediate somatic relaxation.",
      },
      {
        heading: "Deep Sleep & Anxiety Dissipation",
        desc: "Wearing sanctified beads in direct skin contact regulates biological circadian rhythms and diminishes intrusive evening thoughts.",
      },
      {
        heading: "Sustained Meditative Focus",
        desc: "Separated Brahmagranthi knots prevent finger slippage, sustaining unbroken rhythmic counting during Japa contemplation.",
      },
    ],
  },
  {
    id: "energy",
    label: "Auric Shielding",
    title: "Preserving Biomagnetic Integrity",
    icon: ShieldCheck,
    points: [
      {
        heading: "Natural Electro-Dynamic Charge",
        desc: "High-altitude 5-Mukhi Rudraksha possesses proven natural dielectric properties that stabilize bio-electric energy fluctuations.",
      },
      {
        heading: "Environmental Negativity Dissipation",
        desc: "Acts as an organic sattvic buffer when navigating crowded urban environments, stressful workspaces, and chaotic frequencies.",
      },
      {
        heading: "Heart-Centered Protection",
        desc: "Resting over the Anahata chakra, the sacred Tulsi wood purifies emotional inputs and dissolves fear-based responses.",
      },
    ],
  },
  {
    id: "sadhana",
    label: "Devotional Sadhana",
    title: "Bridging Practice & Everyday Living",
    icon: Sparkles,
    points: [
      {
        heading: "Exact 108 Vedic Ratio",
        desc: "Structured according to the ancient 108 astronomical distance ratio connecting the earth, sun, and lunar energetic stations.",
      },
      {
        heading: "Consecrated Meru Finial",
        desc: "Sterling silver Yantra guru finial preserves the kinetic spiritual energy generated during continuous mantra recitations.",
      },
      {
        heading: "Generational Patina",
        desc: "Unlike synthetic lacquered jewelry, the untreated botanicals absorb natural skin oils, deepening to a rich glossy mahogany over years.",
      },
    ],
  },
];

export function MuktiPillarsAndBenefits() {
  const [activeTab, setActiveTab] = useState("mind");
  const currentTab = BENEFIT_TABS.find((t) => t.id === activeTab) || BENEFIT_TABS[0];

  return (
    <section id="mukti-pillars" className="w-full py-14 sm:py-20 lg:py-24 3xl:py-28 4k:py-36 bg-[#F7F5F0] border-b border-[#E8E2D5] select-none">
      <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16 space-y-16 sm:space-y-24">

        {/* PART 1: THE FOUR PILLARS OF MUKTI */}
        <div>
          {/* Header */}
          <div className="text-center max-w-2xl 3xl:max-w-3xl 4k:max-w-4xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-14 4k:mb-18">
            <span className="text-[11px] sm:text-xs 3xl:text-sm 4k:text-base font-mono uppercase tracking-[0.24em] text-[#7A6242] font-semibold block">
              SACRED FOUNDATION
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl 4k:text-[56px] font-normal text-[#122E46] leading-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              The Four Pillars of Mukti
            </h2>
            <p className="text-xs sm:text-sm 3xl:text-base 4k:text-lg text-stone-600 font-sans leading-relaxed">
              Timeless Vedic principles embedded within every bead, knot, and sanctified grain.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 3xl:gap-8 4k:gap-10">
            {FOUR_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 sm:p-7 3xl:p-9 4k:p-11 bg-white border border-[#E8E2D5] space-y-3 4k:space-y-4 hover:border-[#C5A880] transition-all duration-300 shadow-2xs hover:shadow-md group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-sm 3xl:text-base 4k:text-xl font-semibold text-[#7A6242]">
                      {pillar.roman}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-center text-[#7A6242] group-hover:bg-[#122E46] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg 3xl:text-xl 4k:text-2xl font-semibold text-[#122E46]">
                    {pillar.title}
                  </h3>

                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#7A6242]">
                    {pillar.subtitle}
                  </div>

                  <p className="text-xs 3xl:text-base 4k:text-[18px] text-stone-600 font-sans leading-relaxed 4k:leading-[1.7]">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 2: INTERACTIVE SPIRITUAL BENEFITS */}
        <div className="pt-6 sm:pt-10 border-t border-[#E8E2D5]">
          <div className="text-center max-w-2xl 3xl:max-w-3xl 4k:max-w-4xl mx-auto space-y-2 mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs 3xl:text-sm 4k:text-base font-mono uppercase tracking-[0.24em] text-[#7A6242] font-semibold block">
              TRANSFORMATIVE IMPACT
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl 4k:text-[56px] font-normal text-[#122E46] leading-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              How Mukti Supports Your Life
            </h2>
            <p className="text-xs sm:text-sm 3xl:text-base 4k:text-lg text-stone-600 font-sans">
              Practical benefits for modern professionals, seekers, and daily meditators.
            </p>
          </div>

          {/* Benefit Tabs Navigation */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 scrollbar-none">
            {BENEFIT_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-none text-xs sm:text-sm 3xl:text-base 4k:text-lg font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#122E46] text-[#FAF8F5] shadow-sm font-semibold"
                      : "bg-white border border-[#E8E2D5] text-stone-700 hover:bg-[#FAF8F5]"
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#C5A880]" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Panel */}
          <div className="mt-6 p-6 sm:p-10 3xl:p-12 4k:p-16 bg-white border border-[#E8E2D5] shadow-xs">
            <h3
              className="font-serif text-xl sm:text-2xl 3xl:text-3xl 4k:text-4xl text-[#122E46] font-normal mb-6 pb-4 border-b border-[#E8E2D5]"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              {currentTab.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {currentTab.points.map((pt, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2 text-[#7A6242] font-mono text-xs uppercase tracking-wider font-semibold">
                    <span className="w-5 h-5 rounded-full bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-center text-[10px]">
                      {i + 1}
                    </span>
                    <span>{pt.heading}</span>
                  </div>
                  <p className="text-xs sm:text-[13px] 3xl:text-base 4k:text-lg text-stone-600 font-sans leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
