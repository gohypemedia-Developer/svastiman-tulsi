"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ChevronDown,
  X,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export interface BraceletCatalogItem {
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: { id: string; label: string; src: string; alt: string }[];
  details: {
    ref: string;
    structure: string;
    beadSize: string;
    material: string;
    chakra: string;
    madeIn: string;
  };
  description: string;
}

export const BRACELET_CATALOG: Record<string, BraceletCatalogItem> = {
  BRC01: {
    sku: "BRC01",
    name: "Grade-AAA Natural Amazonite Bracelet",
    price: 1899,
    originalPrice: 2499,
    image: "/images/bracelets/bracelet_amazonite.jpg",
    gallery: [
      {
        id: "main",
        label: "Pedestal View",
        src: "/images/bracelets/bracelet_amazonite.jpg",
        alt: "Grade-AAA Natural Amazonite Bracelet with delicate dried florals",
      },
      {
        id: "lifestyle",
        label: "Sacred Altar",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Amazonite stone bracelet with Lord Shiva and warm temple light",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing natural gemstone bracelets in natural sunlight",
      },
      {
        id: "macro",
        label: "Crystal Texture",
        src: "/images/bracelets/amazonite.jpg",
        alt: "Macro crystalline texture of genuine untreated Amazonite beads",
      },
    ],
    details: {
      ref: "BRC01",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "100% Grade-AAA Natural Amazonite",
      chakra: "Throat & Heart Chakra",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Formed deep within pegmatite mineral veins, Grade-AAA natural Amazonite carries cool, soothing turquoise-green hues known across metaphysical traditions as the Stone of Truth and Courage. Aligns the Throat and Heart Chakras, filtering electromagnetic stress and fostering clear, serene, truthful communication.",
  },
  BRC02: {
    sku: "BRC02",
    name: "7 Chakra Multi-Stone Energy Bracelet",
    price: 2499,
    originalPrice: 3199,
    image: "/images/bracelets/bracelet_7chakra.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_7chakra.jpg",
        alt: "7 Chakra Multi-Stone Energy Bracelet on beige stone with dried florals",
      },
      {
        id: "detail",
        label: "Crystals Detail",
        src: "/images/bracelets/7chakra.jpg",
        alt: "7 natural healing gemstones arranged by chakra spectrum",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing multi-crystal chakra alignment bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with brass Shiva idol and diya",
      },
    ],
    details: {
      ref: "BRC02",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "7 Natural Earth Gemstones",
      chakra: "All 7 Chakras (Root to Crown)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "A comprehensive energetic talisman integrating seven authentic earth crystals carefully tuned to balance every major energy vortex—from Root grounding to Crown illumination. Harmonizes physical stamina with intuitive clarity for holistic vitality.",
  },
  BRC03: {
    sku: "BRC03",
    name: "Royal Lapis Lazuli Intuition Bracelet",
    price: 2199,
    originalPrice: 2799,
    image: "/images/bracelets/bracelet_lapislazuli.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_lapislazuli.jpg",
        alt: "Royal deep blue Lapis Lazuli bracelet with golden pyrite flecks",
      },
      {
        id: "detail",
        label: "Mineral Detail",
        src: "/images/bracelets/lapislazuli.jpg",
        alt: "Macro crystalline view of deep blue lapis with golden pyrite specks",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing natural gemstone bracelets in sunlight",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred gemstone altar display",
      },
    ],
    details: {
      ref: "BRC03",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "Natural Celestial Lapis Lazuli with Pyrite",
      chakra: "Third Eye & Throat Chakra",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Revered since ancient Mesopotamian and Vedic eras as the stone of kings and mystics. Features deep celestial indigo lapis lazuli sprinkled with authentic golden pyrite flecks, activating inner wisdom, mental focus, and spiritual insight.",
  },
  BRC04: {
    sku: "BRC04",
    name: "Golden Tiger Eye Wealth Bracelet",
    price: 1799,
    originalPrice: 2299,
    image: "/images/bracelets/bracelet_tigereye.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_tigereye.jpg",
        alt: "Chatoyant golden Tiger Eye beaded bracelet with dried pampas grass",
      },
      {
        id: "detail",
        label: "Chatoyant Texture",
        src: "/images/bracelets/tigereye.jpg",
        alt: "Macro view of golden-amber silky optical chatoyancy",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing Tiger Eye gemstone bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "BRC04",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "Natural Chatoyant Golden Tiger Eye",
      chakra: "Solar Plexus & Root Chakra",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Displaying a mesmerizing golden-amber chatoyant silk luster. Highly revered as a stone of prosperity, inner resolve, fearlessness, and emotional grounding. Anchors solar vitality into the physical body.",
  },
  BRC05: {
    sku: "BRC05",
    name: "Divine Amethyst Meditative Bracelet",
    price: 2299,
    originalPrice: 2899,
    image: "/images/bracelets/bracelet_amethyst.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_amethyst.jpg",
        alt: "Vibrant purple Amethyst beaded bracelet with dried lavender",
      },
      {
        id: "detail",
        label: "Violet Quartz",
        src: "/images/bracelets/amethyst.jpg",
        alt: "Macro view of natural purple Amethyst crystal beads",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing Amethyst crystal bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "BRC05",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.5mm Round",
      material: "100% Grade-AAA Deep Violet Amethyst",
      chakra: "Crown & Third Eye Chakra",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Radiating tranquil purple frequencies that quiet an overactive mind. Fosters deep meditative absorption, peaceful sleep, and protection against negative auric energies. Carries the purifying violet flame of spiritual awareness.",
  },
  BRC06: {
    sku: "BRC06",
    name: "Rose Quartz Unconditional Love Bracelet",
    price: 1699,
    originalPrice: 2199,
    image: "/images/bracelets/bracelet_rosequartz.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_rosequartz.jpg",
        alt: "Natural soft blush pink Rose Quartz bracelet with dried florals",
      },
      {
        id: "detail",
        label: "Heart Crystal",
        src: "/images/bracelets/rosequartz.jpg",
        alt: "Macro view of translucent pink rose quartz beads",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing Rose Quartz bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "BRC06",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "100% Natural Translucent Rose Quartz",
      chakra: "Anahata (Heart Chakra)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "The quintessential crystal of unconditional compassion, emotional healing, and gentle peace. Bathed in soft blush pink translucency, it dissolves emotional grief, fostering self-acceptance, deep relational harmony, and inner stillness.",
  },
  BRC07: {
    sku: "BRC07",
    name: "Obsidian Black Onyx Shielding Bracelet",
    price: 1699,
    originalPrice: 2199,
    image: "/images/bracelets/bracelet_blackonyx.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_blackonyx.jpg",
        alt: "Glossy obsidian Black Onyx bracelet on beige stone with dried florals",
      },
      {
        id: "detail",
        label: "Onyx Texture",
        src: "/images/bracelets/blackonyx.jpg",
        alt: "Macro view of high-polish obsidian black onyx beads",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing protective gemstone bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "BRC07",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "100% Natural Black Onyx Mineral",
      chakra: "Muladhara (Root Chakra)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "A protective energetic barrier that absorbs and transmutes negative environmental vibrations. Promotes steadfast emotional stamina, mental resilience, and grounded composure during high-stress situations.",
  },
  BRC08: {
    sku: "BRC08",
    name: "Golden Citrine Abundance & Wealth Bracelet",
    price: 1999,
    originalPrice: 2599,
    image: "/images/bracelets/bracelet_citrine.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_citrine.jpg",
        alt: "Honey amber Citrine gemstone bracelet with dried florals",
      },
      {
        id: "detail",
        label: "Solar Crystal",
        src: "/images/bracelets/citrine.jpg",
        alt: "Macro view of luminous golden citrine crystal beads",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing Citrine prosperity bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "BRC08",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "Natural Golden Honey Citrine Quartz",
      chakra: "Manipura (Solar Plexus Chakra)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Known as the Merchant's Stone of Prosperity and Joy. Its bright solar frequencies inspire optimism, creative vitality, manifestation, and financial growth without accumulating dense stagnant energies.",
  },
  BRC09: {
    sku: "BRC09",
    name: "Emerald Green Aventurine Opportunity Bracelet",
    price: 1799,
    originalPrice: 2399,
    image: "/images/bracelets/bracelet_greenaventurine.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_greenaventurine.jpg",
        alt: "Emerald green aventurine gemstone bracelet with dried florals",
      },
      {
        id: "detail",
        label: "Forest Quartz",
        src: "/images/bracelets/greenaventurine.jpg",
        alt: "Macro view of green aventurine with shimmering mica platelets",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing Green Aventurine bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "BRC09",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "100% Natural Green Aventurine Quartz",
      chakra: "Anahata (Heart Chakra)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Celebrated as the Stone of Opportunity and Good Fortune. Features gentle shimmering mica platelets within rich forest-green quartz, harmonizing emotional balance and opening pathways to unexpected blessings.",
  },
};

// Explicit requirement: sizes 6, 7, 8 for stone bracelets
export const BRACELET_SIZES = [
  { id: "6", label: "SIZE 6 (15 - 16 CM)", short: "6", fit: "Petite to Snug wrist (6.0 - 6.4 inches)" },
  { id: "7", label: "SIZE 7 (17 - 18 CM)", short: "7", fit: "Standard Universal wrist (6.5 - 7.2 inches)" },
  { id: "8", label: "SIZE 8 (19 - 20 CM)", short: "8", fit: "Comfort to Relaxed wrist (7.3 - 8.0 inches)" },
];

export function BraceletProductShowcase({ productSku = "BRC01" }: { productSku?: string }) {
  const normalizedSku = productSku.toUpperCase().replace("-", "");
  const product = BRACELET_CATALOG[normalizedSku] || BRACELET_CATALOG["BRC01"];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState("7");
  const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [chakraGuideOpen, setChakraGuideOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Accordion state
  const [descOpen, setDescOpen] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(true);

  const { addToCart, openCart, isInWishlist, toggleWishlist } = useCart();
  const isSaved = isInWishlist(product.sku);

  const currentSizeObj = BRACELET_SIZES.find((s) => s.id === selectedSize) || BRACELET_SIZES[1];

  const handleAddToCart = () => {
    addToCart({
      id: `prod-bracelet-${product.sku.toLowerCase()}-${selectedSize}`,
      name: `${product.name} (Size ${currentSizeObj.short})`,
      price: product.price,
      originalPrice: product.originalPrice || product.price + 500,
      image: product.gallery[selectedIdx]?.src || product.image,
    });
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2400);
  };

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* ========================================================================= */}
      {/* SECTION 1: LUXURY PRODUCT SHOWCASE (Matching Image 1)                     */}
      {/* ========================================================================= */}
      <section id="product-showcase" className="w-full pt-6 sm:pt-10 3xl:pt-14 4k:pt-18 pb-16 sm:pb-24 3xl:pb-28 4k:pb-36">
        <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

          {/* 2-COLUMN LUXURY SHOWCASE (50/50 Balanced matching Image 1) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 3xl:gap-24 4k:gap-28 items-start">

            {/* LEFT COLUMN: PRODUCT MEDIA GALLERY */}
            <div className="flex flex-col gap-4">

              {/* Clean Square Main Image Container */}
              <div
                onClick={() => setLightboxOpen(true)}
                className="relative aspect-square w-full rounded-none overflow-hidden bg-white border border-[#E8E2D5] cursor-pointer group shadow-2xs"
              >
                <Image
                  src={product.gallery[selectedIdx]?.src || product.image}
                  alt={product.gallery[selectedIdx]?.alt || product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Exact 4 Square Thumbnails Row Directly Below */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 3xl:gap-4 4k:gap-5">
                {product.gallery.map((view, idx) => {
                  const isActive = selectedIdx === idx;
                  return (
                    <button
                      key={view.id}
                      onClick={() => setSelectedIdx(idx)}
                      className={`relative aspect-square overflow-hidden bg-white transition-all cursor-pointer text-left focus:outline-none ${
                        isActive
                          ? "border-2 border-[#122E46]"
                          : "border border-[#E8E2D5] opacity-75 hover:opacity-100"
                      }`}
                      title={view.label}
                      aria-label={`Select ${view.label}`}
                    >
                      <Image
                        src={view.src}
                        alt={view.alt}
                        fill
                        sizes="150px"
                        className="object-cover object-center"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: PRODUCT INFO & LUXURY HIERARCHY (Matching Image 1) */}
            <div className="flex flex-col space-y-5 sm:space-y-6 pt-1 lg:pt-2">

              {/* 1. TITLE & WISHLIST HEART */}
              <div className="flex items-start justify-between gap-3">
                <h1
                  className="text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl 4k:text-5xl font-normal tracking-[0.04em] sm:tracking-[0.06em] text-[#122E46] uppercase leading-snug"
                  style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                >
                  {product.name}
                </h1>

                {/* Wishlist Heart Icon */}
                <button
                  onClick={() =>
                    toggleWishlist({
                      id: `prod-bracelet-${product.sku.toLowerCase()}`,
                      name: product.name,
                      price: product.price,
                      originalPrice: product.originalPrice,
                      image: product.image,
                    })
                  }
                  className={`p-2 min-h-[40px] min-w-[40px] flex items-center justify-center transition-colors cursor-pointer ${
                    isSaved ? "text-rose-600" : "text-stone-400 hover:text-[#122E46]"
                  }`}
                  title={isSaved ? "Remove from Wishlist" : "Add to Wishlist"}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 stroke-[1.2] ${isSaved ? "fill-rose-600" : ""}`} />
                </button>
              </div>

              {/* 2. SIZE SELECTOR WITH SIZES 6, 7, 8 & FIND YOUR SIZE LINK */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-normal">
                  Size
                </div>

                {/* Compact Rectangular Dropdown matching Image 1 */}
                <div className="relative inline-block">
                  <button
                    type="button"
                    onClick={() => setSizeDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-4 px-3.5 py-1.5 border border-[#122E46] bg-white text-xs font-mono uppercase tracking-wider text-[#122E46] cursor-pointer min-w-[130px] justify-between"
                    aria-haspopup="listbox"
                    aria-expanded={sizeDropdownOpen}
                  >
                    <span>{currentSizeObj.short}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-600" />
                  </button>

                  {sizeDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-[#E8E2D5] shadow-md z-20 py-1 min-w-[180px]">
                      {BRACELET_SIZES.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setSelectedSize(opt.id);
                            setSizeDropdownOpen(false);
                          }}
                          className={`w-full px-3.5 py-2 text-left text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-between ${
                            selectedSize === opt.id
                              ? "bg-[#F5F2EB] text-[#122E46] font-semibold"
                              : "text-stone-700 hover:bg-[#FAF8F5]"
                          }`}
                        >
                          <span>SIZE {opt.short}</span>
                          <span className="text-[10px] text-stone-400 font-normal">
                            {opt.id === "6" ? "15-16 CM" : opt.id === "7" ? "17-18 CM" : "19-20 CM"}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Clean "Find your size" link */}
                <div className="pt-0.5">
                  <button
                    type="button"
                    onClick={() => setSizeGuideOpen(true)}
                    className="text-[11px] font-sans text-stone-500 hover:text-[#122E46] transition-colors cursor-pointer underline underline-offset-2"
                  >
                    Find your size
                  </button>
                </div>
              </div>

              {/* 3. PRICE & TAXES */}
              <div className="pt-2 space-y-0.5">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl sm:text-[28px] 3xl:text-3xl 4k:text-4xl font-normal font-sans text-[#122E46] tracking-tight">
                    ₹{product.price.toLocaleString("en-IN")}.00
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm font-sans line-through text-stone-400">
                      ₹{product.originalPrice.toLocaleString("en-IN")}.00
                    </span>
                  )}
                </div>
                <div className="text-[11px] font-sans text-stone-500 font-normal">
                  Including Taxes
                </div>
              </div>

              {/* 4. ACTION BUTTONS: BENEFITS & CHAKRA + ADD TO CART */}
              <div className="pt-2 pb-5 border-b border-[#E8E2D5]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setChakraGuideOpen(true)}
                    className="w-full py-3 4k:py-4 px-4 4k:px-6 border border-[#122E46] text-[#122E46] bg-transparent hover:bg-[#122E46] hover:text-[#FAF8F5] transition-all duration-200 text-xs 4k:text-sm font-mono uppercase tracking-[0.14em] text-center font-medium flex items-center justify-center cursor-pointer"
                  >
                    Chakra &amp; Benefits
                  </button>

                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="w-full py-3 4k:py-4 px-4 4k:px-6 bg-[#122E46] hover:bg-[#1B3C59] text-[#FAF8F5] border border-[#122E46] transition-all duration-200 text-xs 4k:text-sm font-mono uppercase tracking-[0.14em] text-center font-medium flex items-center justify-center cursor-pointer shadow-xs active:scale-[0.99]"
                  >
                    {added ? "Added To Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>

              {/* 5. ACCORDION 1: DESCRIPTION ∨ */}
              <div className="border-b border-[#E8E2D5] pb-4">
                <button
                  type="button"
                  onClick={() => setDescOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between text-left text-sm sm:text-base font-mono uppercase tracking-[0.16em] text-[#122E46] font-medium py-3 hover:text-[#7A6242] transition-colors cursor-pointer"
                  aria-expanded={descOpen}
                >
                  <span>Description</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${
                      descOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {descOpen && (
                  <div className="pt-2 4k:pt-3 text-xs 3xl:text-base 4k:text-lg font-sans text-stone-600 leading-relaxed 4k:leading-[1.75] space-y-2">
                    <p>{product.description}</p>
                  </div>
                )}
              </div>

              {/* 6. ACCORDION 2: DETAILS ∨ */}
              <div className="border-b border-[#E8E2D5] pb-4">
                <button
                  type="button"
                  onClick={() => setDetailsOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between text-left text-sm sm:text-base 3xl:text-lg 4k:text-xl font-mono uppercase tracking-[0.16em] text-[#122E46] font-medium py-3 hover:text-[#7A6242] transition-colors cursor-pointer"
                  aria-expanded={detailsOpen}
                >
                  <span>Details</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${
                      detailsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {detailsOpen && (
                  <div className="pt-4 4k:pt-6 grid grid-cols-2 sm:grid-cols-3 gap-y-4 sm:gap-y-5 4k:gap-y-7 gap-x-3 sm:gap-x-4 4k:gap-x-6 text-xs 3xl:text-base 4k:text-lg font-sans">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1 font-normal">
                        Ref.
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.ref}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1 font-normal">
                        Structure
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.structure}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1 font-normal">
                        Bead Size
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.beadSize}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1 font-normal">
                        Material
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.material}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1 font-normal">
                        Chakra / Energy
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.chakra}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1 font-normal">
                        Made In
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.madeIn}</span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sizing Modal for Sizes 6, 7, 8 */}
      {sizeGuideOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSizeGuideOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-[#FAF8F5] rounded-none border border-[#E8E2D5] p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-3">
              <h3 className="font-serif text-lg font-normal text-[#122E46] uppercase tracking-wide">
                Stone Bracelet Sizing Guide
              </h3>
              <button
                onClick={() => setSizeGuideOpen(false)}
                className="p-1 text-stone-600 hover:text-black cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-stone-600 font-sans leading-relaxed">
              <p className="text-stone-500">
                Measure your wrist circumference just above the wrist bone with a flexible tape or string:
              </p>

              <div className="p-3 bg-white border border-[#E8E2D5] space-y-2">
                <div>
                  <strong className="text-[#122E46] block">SIZE 6 (15 - 16 CM)</strong>
                  <span className="text-stone-500">Fits wrists 5.8 to 6.3 inches. Ideal for petite or close-fitting wrist preference.</span>
                </div>
                <div className="pt-2 border-t border-stone-100">
                  <strong className="text-[#122E46] block">SIZE 7 (17 - 18 CM) — UNIVERSAL BESTSELLER</strong>
                  <span className="text-stone-500">Fits wrists 6.4 to 7.2 inches. Standard comfortable fit for most women and men.</span>
                </div>
                <div className="pt-2 border-t border-stone-100">
                  <strong className="text-[#122E46] block">SIZE 8 (19 - 20 CM)</strong>
                  <span className="text-stone-500">Fits wrists 7.3 to 8.0 inches. Relaxed, easy draping fit for broader wrists.</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSizeGuideOpen(false)}
              className="w-full py-2.5 bg-[#122E46] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider cursor-pointer hover:bg-[#1B3C59] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Chakra & Benefits Modal */}
      {chakraGuideOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setChakraGuideOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#FAF8F5] rounded-none border border-[#E8E2D5] p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-3">
              <h3 className="font-serif text-lg font-normal text-[#122E46] uppercase tracking-wide">
                {product.name} — Energy &amp; Benefits
              </h3>
              <button
                onClick={() => setChakraGuideOpen(false)}
                className="p-1 text-stone-600 hover:text-black cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-stone-600 font-sans leading-relaxed">
              <div className="p-3 bg-white border border-[#E8E2D5] space-y-1.5">
                <div className="text-[#122E46] font-semibold font-serif">Associated Energy: {product.details.chakra}</div>
                <p>{product.description}</p>
              </div>

              <div className="flex items-center gap-2 text-stone-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Untreated Natural Earth Crystal Mineralogy Guarantee</span>
              </div>
            </div>

            <button
              onClick={() => setChakraGuideOpen(false)}
              className="w-full py-2.5 bg-[#122E46] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider cursor-pointer hover:bg-[#1B3C59] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Lightbox / Zoom Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-3xl max-h-[85vh] w-full aspect-square bg-black overflow-hidden">
            <Image
              src={product.gallery[selectedIdx]?.src || product.image}
              alt={product.gallery[selectedIdx]?.alt || product.name}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/40 rounded-full w-9 h-9 flex items-center justify-center transition-colors cursor-pointer text-sm"
              aria-label="Close zoom view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
