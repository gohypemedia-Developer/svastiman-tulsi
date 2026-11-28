"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bookmark, Check, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

// 5 Vertical Editorial Lookbook Cards (Directly below Hero, matching Tulsi layout)
const BRACELET_EDITORIAL_STORIES = [
  {
    id: "story-1",
    title: "Daily Chakra Alignment",
    image: "/images/bracelets/bracelet_wear_lifestyle.jpg",
    alt: "Devotee wearing natural crystal gemstone bracelets in warm sunlight",
  },
  {
    id: "story-2",
    title: "Grade-AAA Amazonite",
    image: "/images/bracelets/bracelet_amazonite.jpg",
    alt: "Grade-AAA natural turquoise-green Amazonite stone bracelet with dried florals",
  },
  {
    id: "story-3",
    title: "Celestial Lapis Lazuli",
    image: "/images/bracelets/bracelet_lapislazuli.jpg",
    alt: "Royal deep blue Lapis Lazuli bracelet with golden pyrite flecks",
  },
  {
    id: "story-4",
    title: "Meditative Amethyst",
    image: "/images/bracelets/bracelet_amethyst.jpg",
    alt: "Vibrant purple Amethyst beaded bracelet with dried lavender on stone",
  },
  {
    id: "story-5",
    title: "Golden Tiger Eye",
    image: "/images/bracelets/bracelet_tigereye.jpg",
    alt: "Chatoyant golden Tiger Eye beaded bracelet for protection and courage",
  },
];

export interface BraceletBestSellerProduct {
  id: string;
  sku: string;
  tag: string;
  name: string;
  chakra: string;
  price: number;
  originalPrice: number;
  image: string;
  beadSize: string;
  weight: string;
  material: string;
  origin: string;
  description: string;
}

const BRACELET_BEST_SELLER_PRODUCTS: BraceletBestSellerProduct[] = [
  {
    id: "prod-brac-01",
    sku: "BRC01",
    tag: "THROAT CHAKRA • CALM",
    name: "Natural Amazonite Sacred Bracelet",
    chakra: "Throat & Heart Chakra",
    price: 1899,
    originalPrice: 2499,
    image: "/images/bracelets/bracelet_amazonite.jpg",
    beadSize: "8.5mm",
    weight: "24 GM",
    material: "100% Untreated Grade-AAA Natural Amazonite Earth Crystal.",
    origin: "Madagascar",
    description:
      "Hand-strung natural Amazonite beads displaying iridescent sky-blue and seafoam-green hues with silky crystalline striations. Gently balances the throat and heart chakras, fostering calm composure and honest truth.",
  },
  {
    id: "prod-brac-02",
    sku: "BRC02",
    tag: "7 CHAKRAS • COMPLETE HARMONY",
    name: "7 Chakra Multi-Stone Energy Bracelet",
    chakra: "All 7 Bodily Chakras",
    price: 2499,
    originalPrice: 3199,
    image: "/images/bracelets/bracelet_7chakra.jpg",
    beadSize: "8.0mm",
    weight: "26 GM",
    material: "Natural Amethyst, Lapis, Turquoise, Aventurine, Tiger Eye, Citrine & Red Jasper.",
    origin: "Ethically Sourced Worldwide",
    description:
      "A complete energetic talisman integrating seven natural earth crystals carefully calibrated to balance each of the seven primary energy vortexes for holistic vitality.",
  },
  {
    id: "prod-brac-03",
    sku: "BRC03",
    tag: "THIRD EYE • TRUTH & WISDOM",
    name: "Royal Lapis Lazuli Intuition Bracelet",
    chakra: "Third Eye & Throat Chakra",
    price: 2199,
    originalPrice: 2799,
    image: "/images/bracelets/bracelet_lapislazuli.jpg",
    beadSize: "8.0mm",
    weight: "25 GM",
    material: "Grade-AAA Natural Lapis Lazuli with golden Pyrite inclusions.",
    origin: "Badakhshan Region",
    description:
      "A stone of total awareness, wisdom, and royalty. Features deep celestial blue gemstone beads studded with natural golden pyrite flecks, enhancing intuitive clarity and mental focus.",
  },
  {
    id: "prod-brac-04",
    sku: "BRC04",
    tag: "SOLAR PLEXUS • COURAGE & WEALTH",
    name: "Golden Tiger Eye Wealth Bracelet",
    chakra: "Solar Plexus & Root Chakra",
    price: 1799,
    originalPrice: 2299,
    image: "/images/bracelets/bracelet_tigereye.jpg",
    beadSize: "8.0mm",
    weight: "28 GM",
    material: "Natural Chatoyant Golden Tiger Eye Earth Quartz.",
    origin: "South Africa",
    description:
      "Displaying a mesmerizing golden-amber chatoyant silk luster. Highly revered as a stone of prosperity, inner resolve, fearlessness, and emotional grounding.",
  },
  {
    id: "prod-brac-05",
    sku: "BRC05",
    tag: "CROWN CHAKRA • SPIRITUAL PEACE",
    name: "Divine Amethyst Meditative Bracelet",
    chakra: "Crown & Third Eye Chakra",
    price: 2299,
    originalPrice: 2899,
    image: "/images/bracelets/bracelet_amethyst.jpg",
    beadSize: "8.5mm",
    weight: "24 GM",
    material: "100% Natural Grade-AAA Deep Violet Amethyst Quartz.",
    origin: "Brazil",
    description:
      "Radiating tranquil purple frequencies that quiet an overactive mind. Fosters deep meditative absorption, peaceful sleep, and protection against negative auric energies.",
  },
  {
    id: "prod-brac-06",
    sku: "BRC06",
    tag: "HEART CHAKRA • UNCONDITIONAL LOVE",
    name: "Soothing Rose Quartz Heart Bracelet",
    chakra: "Heart Chakra (Anahata)",
    price: 1699,
    originalPrice: 2199,
    image: "/images/bracelets/bracelet_rosequartz.jpg",
    beadSize: "8.0mm",
    weight: "22 GM",
    material: "Natural Translucent Blush Pink Rose Quartz Crystal.",
    origin: "Madagascar",
    description:
      "The quintessential stone of unconditional love, compassion, and emotional healing. Softens tension in the chest, invites self-acceptance, and inspires emotional harmony.",
  },
];

export function BraceletBestSellersSection() {
  const { addToCart, openCart, isInWishlist, toggleWishlist } = useCart();
  const [addedSku, setAddedSku] = useState<string | null>(null);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.clientWidth * 0.72;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveSlide(Math.min(Math.max(0, index), BRACELET_EDITORIAL_STORIES.length - 1));
    }
  };

  const scrollToSlide = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.74;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleQuickAdd = (prod: BraceletBestSellerProduct, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      originalPrice: prod.originalPrice,
      image: prod.image,
    });
    setAddedSku(prod.sku);
    openCart();
    setTimeout(() => setAddedSku(null), 1800);
  };

  const handleToggleSave = (prod: BraceletBestSellerProduct, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      originalPrice: prod.originalPrice,
      image: prod.image,
    });
  };

  return (
    <section id="bracelet-best-sellers" className="w-full bg-[#FFFFFF] pt-12 sm:pt-16 lg:pt-20 3xl:pt-24 4k:pt-28 pb-16 sm:pb-24 3xl:pb-28 4k:pb-36">
      <div className="max-w-[1360px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-10 3xl:px-14 4k:px-16">

        {/* ========================================================================= */}
        {/* ROW 1: 5 VERTICAL EDITORIAL CARDS (Mobile Carousel Slider / Desktop Grid) */}
        {/* ========================================================================= */}
        <div className="relative">
          {/* Mobile Left Arrow Button */}
          <button
            type="button"
            onClick={() => scrollToSlide("left")}
            aria-label="Previous slide"
            className="sm:hidden absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200/80 shadow-md flex items-center justify-center text-stone-800 hover:bg-white active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Mobile Right Arrow Button */}
          <button
            type="button"
            onClick={() => scrollToSlide("right")}
            aria-label="Next slide"
            className="sm:hidden absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200/80 shadow-md flex items-center justify-center text-stone-800 hover:bg-white active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Slider Row: Snap Carousel on Mobile, 5-col Grid on Desktop */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-3.5 sm:gap-4 lg:gap-5 3xl:gap-6 4k:gap-8 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar scroll-smooth sm:grid-cols-3 md:grid-cols-5 py-1"
          >
            {BRACELET_EDITORIAL_STORIES.map((story) => (
              <div
                key={story.id}
                onMouseEnter={() => setActiveStoryId(story.id)}
                onMouseLeave={() => setActiveStoryId(null)}
                className="group relative w-[70vw] max-w-[280px] shrink-0 sm:w-auto sm:shrink sm:max-w-none snap-center aspect-[3/5] rounded-none overflow-hidden bg-[#FAF8F5] cursor-pointer shadow-xs select-none block"
              >
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Minimalist gradient vignette with title */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 flex flex-col justify-end p-3.5 sm:p-4 4k:p-6 pointer-events-none ${
                    activeStoryId === story.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <h4 className="text-xs sm:text-[13px] 3xl:text-sm 4k:text-base font-sans font-medium text-white tracking-wide drop-shadow-sm">
                    {story.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dot Indicators */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-3.5">
            {BRACELET_EDITORIAL_STORIES.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === i ? "w-5 bg-[#122E46]" : "w-1.5 bg-[#122E46]/25"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 2: BEST SELLER PRODUCTS HEADER                                        */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-18 lg:mt-24 3xl:mt-28 4k:mt-32 mb-6 sm:mb-10 3xl:mb-12 4k:mb-14 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 sm:gap-0">
          <div>
            <h2
              className="text-2xl sm:text-3xl lg:text-[38px] 3xl:text-[44px] 4k:text-[50px] font-normal text-[#122E46] tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
            >
              Best Seller Bracelets
            </h2>
          </div>

          <a
            href="#discover-bracelet-products"
            className="inline-flex items-center gap-1.5 4k:gap-2 text-xs sm:text-[13px] 3xl:text-sm 4k:text-base font-sans font-medium text-stone-600 hover:text-[#122E46] transition-colors group self-start sm:self-auto"
          >
            <span>View All Best Seller</span>
            <ArrowRight className="w-3.5 h-3.5 4k:w-4 4k:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* ========================================================================= */}
        {/* ROW 3: PRODUCT CARDS (6-Product Grid matching Tulsi & Mukti Pages)         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 3xl:gap-12 4k:gap-14">
          {BRACELET_BEST_SELLER_PRODUCTS.map((prod) => (
            <Link
              key={prod.id}
              href={`/bracelet/${prod.sku.toLowerCase()}`}
              className="group flex flex-col cursor-pointer select-none"
            >
              {/* Full Frame Product Image */}
              <div className="relative aspect-square w-full bg-[#FAF8F5] overflow-hidden transition-colors group-hover:bg-[#F5F2EB]/90">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Bookmark Wishlist Button */}
                <button
                  type="button"
                  onClick={(e) => handleToggleSave(prod, e)}
                  className="absolute top-3 right-3 4k:top-5 4k:right-5 z-10 w-8 h-8 4k:w-11 4k:h-11 rounded-full bg-white/95 backdrop-blur-xs border border-stone-200/80 flex items-center justify-center text-stone-700 hover:text-black transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Save to Wishlist"
                  title="Save to Wishlist"
                >
                  <Bookmark
                    className={`w-4 h-4 4k:w-5 4k:h-5 transition-colors ${
                      isInWishlist(prod.id)
                        ? "fill-[#122E46] text-[#122E46]"
                        : "stroke-[1.8]"
                    }`}
                  />
                </button>

                {/* Quick Add Plus Button */}
                <button
                  type="button"
                  onClick={(e) => handleQuickAdd(prod, e)}
                  className="absolute bottom-3 right-3 4k:bottom-5 4k:right-5 z-10 w-8 h-8 4k:w-11 4k:h-11 rounded-full bg-[#122E46] hover:bg-black text-white flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Add product to cart"
                  title="Add to cart"
                >
                  {addedSku === prod.sku ? (
                    <Check className="w-4 h-4 4k:w-5 4k:h-5 text-emerald-400 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-4 h-4 4k:w-5 4k:h-5 stroke-[2.2]" />
                  )}
                </button>
              </div>

              {/* Minimalist Centered Typography */}
              <div className="pt-3.5 4k:pt-5 text-center flex flex-col items-center">
                <h3 className="text-xs sm:text-[13px] 3xl:text-sm 4k:text-[16px] font-sans font-medium text-stone-800 tracking-wide text-center group-hover:text-[#122E46] transition-colors">
                  {prod.name}
                </h3>

                <div className="mt-1 4k:mt-1.5 flex items-center justify-center gap-1.5 4k:gap-2 text-xs sm:text-[13px] 3xl:text-sm 4k:text-[15px] font-sans text-stone-500 font-normal">
                  <span>₹{prod.price.toLocaleString("en-IN")}</span>
                  {prod.originalPrice && (
                    <span className="line-through text-stone-400 text-xs 4k:text-sm font-normal">
                      ₹{prod.originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
