"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface SoulNeedItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

const SOUL_NEEDS_DATA: SoulNeedItem[] = [
  {
    id: "need-stillness",
    title: "Stillness",
    image: "/images/mukti/category_rudraksha.jpg",
    link: "/products/rudraksha",
  },
  {
    id: "need-clarity",
    title: "Clarity",
    image: "/images/mukti/category_gemstone_bracelets.jpg",
    link: "/products/gemstones",
  },
  {
    id: "need-devotion",
    title: "Devotion",
    image: "/images/products/tulsi/t01_model_wear.jpg",
    link: "/products/tulsi",
  },
  {
    id: "need-protection",
    title: "Protection",
    image: "/images/editorial/editorial_5_japa_mala.jpg",
    link: "/mukti#discover-our-products",
  },
  {
    id: "need-auspiciousness",
    title: "Auspiciousness",
    image: "/images/products/tulsi/tulsi_03.jpg",
    link: "/products/silver",
  },
  {
    id: "need-purification",
    title: "Purification",
    image: "/images/origin/brand_artisan_wash.jpg",
    link: "/about",
  },
];

export function MuktiCategoriesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Check scroll boundary state
  const checkScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScrollState();
    window.addEventListener("resize", checkScrollState);
    return () => window.removeEventListener("resize", checkScrollState);
  }, []);

  // Arrow button navigation
  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = Math.min(360, sliderRef.current.clientWidth * 0.75);
    sliderRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // Mouse Drag to Scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  return (
    <section
      id="mukti-soul-needs"
      className="relative w-full py-10 sm:py-16 lg:py-20 bg-[#FAF8F5] select-none overflow-hidden border-t border-[#E8E2D5]"
    >
      <div className="max-w-[1360px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-10 3xl:px-14 4k:px-16">
        
        {/* ========================================================================= */}
        {/* TOP ROW: STRAIGHT SINGLE-LINE HEADLINE (LEFT) & ARROW CONTROLS (RIGHT)    */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-10">
          {/* Straight single-line headline with no extra tags above */}
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-normal text-[#122E46] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
          >
            Choose What <span className="italic font-normal text-[#C5A880]">Your Soul Seeks</span>
          </h2>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => scrollSlider("left")}
              disabled={!canScrollLeft}
              aria-label="Previous intention"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#122E46] hover:bg-black disabled:opacity-20 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
            </button>

            <button
              type="button"
              onClick={() => scrollSlider("right")}
              disabled={!canScrollRight}
              aria-label="Next intention"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C5A880] hover:bg-[#122E46] disabled:opacity-20 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARDS HORIZONTAL SLIDER (Zero Border Radius, No Text Box Background)      */}
        {/* ========================================================================= */}
        <div
          ref={sliderRef}
          onScroll={checkScrollState}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 sm:gap-4 lg:gap-5 no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 py-1 cursor-grab active:cursor-grabbing"
        >
          {SOUL_NEEDS_DATA.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative w-[70vw] max-w-[270px] sm:w-[280px] md:w-[310px] lg:w-[330px] 3xl:w-[360px] shrink-0 snap-start aspect-[3/4] rounded-none overflow-hidden bg-[#FAF8F5] transition-all duration-500 shadow-xs block"
            >
              {/* Card Image without border radius or padding */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 310px, 360px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Bottom Subtle Gradient for pure text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

              {/* Bottom Title ONLY (No Box Background / No Frosted Pill) */}
              <div className="absolute inset-x-0 bottom-4 sm:bottom-5 z-20 flex items-center justify-center text-center px-3 pointer-events-none">
                <span
                  className="font-serif text-base sm:text-lg lg:text-xl font-normal tracking-wider text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] leading-tight"
                  style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
