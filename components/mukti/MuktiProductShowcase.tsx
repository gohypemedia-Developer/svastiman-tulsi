"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ChevronDown,
  X,
  ShieldCheck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export interface MuktiCatalogItem {
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
    deity: string;
    madeIn: string;
  };
  description: string;
  isBracelet?: boolean;
}

export const MUKTI_CATALOG: Record<string, MuktiCatalogItem> = {
  MKT01: {
    sku: "MKT01",
    name: "1 Mukhi Nepali Rudraksha (925 Silver)",
    price: 18500,
    originalPrice: 22000,
    image: "/images/mukti/products/prod_1_mukhi_silver_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_1_mukhi_silver_silk.jpg",
        alt: "Rare 1 Mukhi Nepali Rudraksha with 925 sterling silver cap on cream silk",
      },
      {
        id: "cap",
        label: "Silver Capping",
        src: "/images/mukti/products/prod_1_mukhi_silver.jpg",
        alt: "Intricate hand-engraved 925 sterling silver cap detail",
      },
      {
        id: "locule",
        label: "X-Ray Chamber",
        src: "/images/mukti/1_mukhi_nepali_rudraksha.jpg",
        alt: "Digital radiography certificate confirming single natural seed locule",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva Murti and consecrated diya",
      },
    ],
    details: {
      ref: "MKT01",
      structure: "Natural Half-Moon Single Locule",
      beadSize: "24.5mm Collector Seed",
      material: "100% Wild Nepali Rudraksha & 925 Silver",
      deity: "Lord Shiva (Eka Mukhi)",
      madeIn: "Eastern Nepal / Varanasi",
    },
    description:
      "The rarest and most auspicious seed in Vedic metaphysics, representing pure formless consciousness (Shiva Tattva). Examined under multi-angle digital radiography (X-Ray) to confirm the unbroken internal natural chamber. Dispatched with a physical serialized laboratory authenticity deed and handcrafted 925 hallmarked sterling silver capping.",
  },
  MKT02: {
    sku: "MKT02",
    name: "Mukti Consecrated Mahamala (108 Beads)",
    price: 4899,
    originalPrice: 5999,
    image: "/images/mukti/products/prod_rudraksha_108_mala_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_rudraksha_108_mala_silk.jpg",
        alt: "Consecrated 108 Nepali Rudraksha Mahamala on warm silk with antique cylinder barrel",
      },
      {
        id: "knots",
        label: "Brahmagranthi",
        src: "/images/mukti/products/prod_rudraksha_chambers.jpg",
        alt: "Detail of sacred Brahmagranthi knots between natural Rudraksha beads",
      },
      {
        id: "model",
        label: "Devotional Wear",
        src: "/images/mukti/category_rudraksha.jpg",
        alt: "Devotee wearing genuine consecrated Himalayan Nepali Rudraksha Mala",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Consecrated Rudraksha altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT02",
      structure: "108 Beads + Guru Bead",
      beadSize: "8.0mm Round",
      material: "100% Genuine 5-Mukhi Himalayan Rudraksha",
      deity: "Lord Shiva / Mahamrityunjaya",
      madeIn: "Eastern Nepal / Braj Dham",
    },
    description:
      "Handcrafted 108-bead consecrated meditation mala. Each seed is hand-selected from high-altitude Eastern Nepal groves (2,400m+), sorted for symmetrical mukhi clefts, and knotted with traditional Brahmagranthi ties. Imbued with Mahamrityunjaya mantras for deep meditation and chitta shuddhi.",
  },
  MKT03: {
    sku: "MKT03",
    name: "Siddha Rudraksha Om Bracelet",
    price: 2199,
    originalPrice: 2799,
    image: "/images/mukti/products/prod_rudraksha_om_bracelet_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_rudraksha_om_bracelet_silk.jpg",
        alt: "Siddha Rudraksha Om Bracelet with golden Om medallion on cream silk",
      },
      {
        id: "om",
        label: "Om Medallion",
        src: "/images/mukti/products/prod_shiva_om_talisman.jpg",
        alt: "Engraved brass Om sacred talisman charm",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/mukti/category_gemstone_bracelets.jpg",
        alt: "Devotee wrist wear view of sacred beads",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT03",
      structure: "4-Strand High-Tensile Elastic",
      beadSize: "8.5mm Natural Round",
      material: "Selected Nepali Rudraksha & Solid Brass Om",
      deity: "Lord Shiva (Pranava Om)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "A protective daily wrist talisman uniting energized Nepali Rudraksha beads with an exquisitely engraved solid Om medallion charm for aura shielding, stress alleviation, and constant remembrance of divine peace.",
    isBracelet: true,
  },
  MKT04: {
    sku: "MKT04",
    name: "7 Chakra Rudraksha Energy Bracelet",
    price: 2499,
    originalPrice: 2999,
    image: "/images/mukti/products/prod_7chakra_bracelet_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_7chakra_bracelet_silk.jpg",
        alt: "7 Chakra Rudraksha Energy Bracelet on pure silk",
      },
      {
        id: "detail",
        label: "Crystals Detail",
        src: "/images/mukti/products/prod_7chakra_bracelet.jpg",
        alt: "7 natural healing gemstones paired with genuine Rudraksha seeds",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/mukti/category_gemstone_bracelets.jpg",
        alt: "Wrist wear view in warm light",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT04",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "5-Mukhi Nepali Rudraksha & 7 Earth Crystals",
      deity: "Trideva & Navagraha",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Unites the bio-electric grounding power of genuine 5-Mukhi Rudraksha with seven natural earth gemstones corresponding to the subtle chakra centers. Clears psychic debris and anchors vibrant physical energy.",
    isBracelet: true,
  },
  MKT05: {
    sku: "MKT05",
    name: "Gauri Shankar Himalayan Rudraksha",
    price: 12999,
    originalPrice: 15500,
    image: "/images/mukti/products/prod_gauri_shankar_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_gauri_shankar_silk.jpg",
        alt: "Rare naturally joined Gauri Shankar Himalayan Rudraksha on silk",
      },
      {
        id: "detail",
        label: "Joint Texture",
        src: "/images/mukti/products/prod_gauri_shankar.jpg",
        alt: "Macro view of natural seam uniting twin Rudraksha seeds",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/mukti/category_rudraksha.jpg",
        alt: "Devotee wearing genuine sacred rudraksha",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT05",
      structure: "Naturally Fused Twin Seed",
      beadSize: "26.0mm Jumbo Seed",
      material: "100% Rare Wild Nepali Rudraksha",
      deity: "Shiva & Parvati (Ardhanarishvara)",
      madeIn: "Eastern Nepal (2,400m+)",
    },
    description:
      "Two naturally conjoined seeds representing the primordial union of Shiva and Shakti (Consciousness and Divine Energy). Brings profound relationship harmony, family peace, and spiritual awakening.",
  },
  MKT06: {
    sku: "MKT06",
    name: "7 Mukhi Nepali Mahalaxmi Rudraksha",
    price: 6499,
    originalPrice: 7999,
    image: "/images/mukti/products/prod_7_mukhi_mahalaxmi_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_7_mukhi_mahalaxmi_silk.jpg",
        alt: "7 Mukhi Nepali Mahalaxmi Rudraksha on cream silk with 925 silver cap",
      },
      {
        id: "clefts",
        label: "7 Facets",
        src: "/images/mukti/products/prod_7_mukhi_mahalaxmi.jpg",
        alt: "Macro view of seven natural deep mukhi fissures",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/mukti/category_rudraksha.jpg",
        alt: "Devotee wearing genuine sacred rudraksha",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT06",
      structure: "Natural 7-Locule Seed in 925 Silver",
      beadSize: "18.5mm Collector Seed",
      material: "Wild High-Altitude Nepali Rudraksha",
      deity: "Goddess Mahalaxmi & Saptarishi",
      madeIn: "Eastern Nepal / Varanasi",
    },
    description:
      "Blessed by Goddess Mahalaxmi and governed by the planet Saturn (Shani). Removes financial obstacles, bestows steady prosperity, and shields the wearer from sudden misfortune.",
  },
  MKT07: {
    sku: "MKT07",
    name: "Shiva Trishul Talisman Rudraksha",
    price: 2999,
    originalPrice: 3599,
    image: "/images/mukti/products/prod_shiva_trishul_talisman_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_shiva_trishul_talisman_silk.jpg",
        alt: "Shiva Trishul & Damru sacred pendant with genuine Nepali Rudraksha beads",
      },
      {
        id: "detail",
        label: "Trishul Craft",
        src: "/images/mukti/products/prod_braided_om_rudraksha_silk.jpg",
        alt: "Detail of antique silver finish Trishul talisman",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/mukti/category_rudraksha.jpg",
        alt: "Devotee wearing genuine sacred rudraksha",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT07",
      structure: "Sacred Cotton Cord with Talisman",
      beadSize: "7.0mm Round",
      material: "5-Mukhi Rudraksha & Solid Cast Trishul",
      deity: "Lord Shiva (Trishul & Damru)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Features a finely detailed Shiva Trishul (Trident) and Damru amulet paired with 5-Mukhi high-altitude Rudraksha beads. Symbolizes the dissolution of physical, mental, and spiritual afflictions (Adhyatmika, Adhibhautika, Adhidaivika).",
  },
  MKT08: {
    sku: "MKT08",
    name: "Tiger Eye & Rudraksha Protection Bracelet",
    price: 2299,
    originalPrice: 2899,
    image: "/images/mukti/products/prod_tigereye_rudraksha_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_tigereye_rudraksha_silk.jpg",
        alt: "Golden Tiger Eye combined with energized Rudraksha beads on silk",
      },
      {
        id: "detail",
        label: "Beads Detail",
        src: "/images/mukti/products/prod_tigereye_bracelet.jpg",
        alt: "Golden chatoyant tiger eye quartz and natural rudraksha beads",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/mukti/category_gemstone_bracelets.jpg",
        alt: "Model wearing protective wrist talisman",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT08",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "Golden Tiger Eye & 5-Mukhi Rudraksha",
      deity: "Lord Shiva & Solar Deities",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "A potent fusion of grounding Nepali Rudraksha and radiant chatoyant Golden Tiger Eye. Stabilizes inner courage, wards off envy and psychic attack, and boosts mental clarity during pivotal life decisions.",
    isBracelet: true,
  },
  MKT09: {
    sku: "MKT09",
    name: "Braided Om Rudraksha Silk Talisman",
    price: 2599,
    originalPrice: 3199,
    image: "/images/mukti/products/prod_braided_om_rudraksha_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_braided_om_rudraksha_silk.jpg",
        alt: "Hand-braided black silk cord with energized Nepali Rudraksha and Om charm",
      },
      {
        id: "detail",
        label: "Braid Detail",
        src: "/images/mukti/products/prod_rudraksha_braided.jpg",
        alt: "Macro view of master braided threadwork and silver accents",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/mukti/category_gemstone_bracelets.jpg",
        alt: "Wrist wear view of braided talisman",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT09",
      structure: "Adjustable Braided Silk Tie",
      beadSize: "8.5mm Natural Bead",
      material: "Natural Nepali Rudraksha & Silver Om",
      deity: "Lord Shiva (Pranava Om)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Masterfully hand-braided with durable sacred silk thread, uniting a collector-grade Nepali Rudraksha with a solid Om medallion charm. Features an adjustable sliding knot for custom, comfortable fit on any wrist.",
    isBracelet: true,
  },
};

// Size options for bracelets vs malas/pendants
const MUKTI_BRACELET_SIZES = [
  { id: "6", label: "SIZE 6 (15 - 16 CM)", short: "6", fit: "Petite to Snug wrist (6.0 - 6.4 inches)" },
  { id: "7", label: "SIZE 7 (17 - 18 CM)", short: "7", fit: "Standard Universal wrist (6.5 - 7.2 inches)" },
  { id: "8", label: "SIZE 8 (19 - 20 CM)", short: "8", fit: "Comfort to Relaxed wrist (7.3 - 8.0 inches)" },
];

const MUKTI_MALA_SIZES = [
  { id: "std", label: "STANDARD (UNIVERSAL FIT)", short: "STD", fit: "Traditional consecrated sacred length" },
  { id: "108", label: "108 JAPA MALA (86 CM)", short: "108 JAPA", fit: "Full 108 beads counting mala for daily japa" },
  { id: "54", label: "54 BEADS SADHANA (44 CM)", short: "54 BEADS", fit: "Compact sadhana length for daily meditation" },
];

export function MuktiProductShowcase({ productSku = "MKT01" }: { productSku?: string }) {
  const normalizedSku = productSku.toUpperCase().replace("-", "");
  const product = MUKTI_CATALOG[normalizedSku] || MUKTI_CATALOG["MKT01"];

  const sizeOptions = product.isBracelet ? MUKTI_BRACELET_SIZES : MUKTI_MALA_SIZES;

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.isBracelet ? "7" : "std");
  const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [ritualsGuideOpen, setRitualsGuideOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Accordion state
  const [descOpen, setDescOpen] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(true);

  const { addToCart, openCart, isInWishlist, toggleWishlist } = useCart();
  const isSaved = isInWishlist(product.sku);

  const currentSizeObj = sizeOptions.find((s) => s.id === selectedSize) || sizeOptions[0];

  const handleAddToCart = () => {
    addToCart({
      id: `prod-mukti-${product.sku.toLowerCase()}-${selectedSize}`,
      name: `${product.name} (${currentSizeObj.short})`,
      price: product.price,
      originalPrice: product.originalPrice || product.price + 1000,
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
                      id: `prod-mukti-${product.sku.toLowerCase()}`,
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

              {/* 2. SIZE SELECTOR & FIND YOUR SIZE LINK */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-normal">
                  {product.isBracelet ? "Size" : "Configuration"}
                </div>

                {/* Compact Rectangular Dropdown matching Image 1 */}
                <div className="relative inline-block">
                  <button
                    type="button"
                    onClick={() => setSizeDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-4 px-3.5 py-1.5 border border-[#122E46] bg-white text-xs font-mono uppercase tracking-wider text-[#122E46] cursor-pointer min-w-[140px] justify-between"
                    aria-haspopup="listbox"
                    aria-expanded={sizeDropdownOpen}
                  >
                    <span>{currentSizeObj.short}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-600" />
                  </button>

                  {sizeDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-[#E8E2D5] shadow-md z-20 py-1 min-w-[200px]">
                      {sizeOptions.map((opt) => (
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
                          <span>{opt.label}</span>
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
                    Find your size &amp; guide
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
                  Including Taxes &bull; X-Ray Lab Certificate Included
                </div>
              </div>

              {/* 4. ACTION BUTTONS: SACRED ORIGIN + ADD TO CART */}
              <div className="pt-2 pb-5 border-b border-[#E8E2D5]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRitualsGuideOpen(true)}
                    className="w-full py-3 4k:py-4 px-4 4k:px-6 border border-[#122E46] text-[#122E46] bg-transparent hover:bg-[#122E46] hover:text-[#FAF8F5] transition-all duration-200 text-xs 4k:text-sm font-mono uppercase tracking-[0.14em] text-center font-medium flex items-center justify-center cursor-pointer"
                  >
                    Sacred Origin &amp; Care
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
                        Associated Deity
                      </span>
                      <span className="text-[#122E46] font-normal">{product.details.deity}</span>
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

      {/* Sizing Modal */}
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
                Mukti Sacred Artifact Sizing
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
              {product.isBracelet ? (
                <div className="p-3 bg-white border border-[#E8E2D5] space-y-2">
                  <div>
                    <strong className="text-[#122E46] block">SIZE 6 (15 - 16 CM)</strong>
                    <span className="text-stone-500">Fits wrists 5.8 to 6.3 inches. Snug fit.</span>
                  </div>
                  <div className="pt-2 border-t border-stone-100">
                    <strong className="text-[#122E46] block">SIZE 7 (17 - 18 CM) — UNIVERSAL</strong>
                    <span className="text-stone-500">Standard fit for most wrist sizes.</span>
                  </div>
                  <div className="pt-2 border-t border-stone-100">
                    <strong className="text-[#122E46] block">SIZE 8 (19 - 20 CM)</strong>
                    <span className="text-stone-500">Relaxed comfortable fit for broader wrists.</span>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-white border border-[#E8E2D5] space-y-2">
                  <div>
                    <strong className="text-[#122E46] block">108 Japa Mahamala (86 CM)</strong>
                    <span className="text-stone-500">Traditional full length with Brahmagranthi knots for japa mantra sadhana.</span>
                  </div>
                  <div className="pt-2 border-t border-stone-100">
                    <strong className="text-[#122E46] block">Single Seed Pendants</strong>
                    <span className="text-stone-500">Includes adjustable consecrated silk thread or silver chain loop.</span>
                  </div>
                </div>
              )}
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

      {/* Sacred Rituals & Origin Modal */}
      {ritualsGuideOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setRitualsGuideOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#FAF8F5] rounded-none border border-[#E8E2D5] p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-3">
              <h3 className="font-serif text-lg font-normal text-[#122E46] uppercase tracking-wide">
                {product.name} — Consecration &amp; Origin
              </h3>
              <button
                onClick={() => setRitualsGuideOpen(false)}
                className="p-1 text-stone-600 hover:text-black cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-stone-600 font-sans leading-relaxed">
              <div className="p-3 bg-white border border-[#E8E2D5] space-y-1.5">
                <div className="text-[#122E46] font-semibold font-serif">Deity: {product.details.deity}</div>
                <p>{product.description}</p>
              </div>

              <div className="flex items-center gap-2 text-stone-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Includes Physical Serialized Radiographic Lab Deed</span>
              </div>
            </div>

            <button
              onClick={() => setRitualsGuideOpen(false)}
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
