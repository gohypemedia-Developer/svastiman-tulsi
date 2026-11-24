"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Plus, Bookmark, Check, X, ShieldCheck, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

// 5 Vertical Editorial Lookbook Cards (Directly below Hero, matching AXELS reference)
const EDITORIAL_STORIES = [
  {
    id: "story-1",
    title: "Sacred Daily Wear",
    image: "/images/editorial/editorial_1_wear.jpg",
    alt: "Devotee wearing sanctified Tulsi Kanthi Mala with antique medallion",
  },
  {
    id: "story-2",
    title: "2.5mm Beige Beads",
    image: "/images/editorial/editorial_2_beads.jpg",
    alt: "Macro texture of 2.5mm natural beige round Tulsi wood beads",
  },
  {
    id: "story-3",
    title: "Radha Krishna Medallion",
    image: "/images/editorial/editorial_3_medallion.jpg",
    alt: "Artisan engraved Radha Krishna antique sacred medallion pendant",
  },
  {
    id: "story-4",
    title: "Traditional Barrel Lock",
    image: "/images/editorial/editorial_4_knot.jpg",
    alt: "Generational master knotting and barrel screw lock clasp",
  },
  {
    id: "story-5",
    title: "108 Tulsi Japa Mala",
    image: "/images/editorial/editorial_5_japa_mala.jpg",
    alt: "Handcrafted 108 beads Vrindavan Tulsi Japa Mala with sacred golden tassel",
  },
];

// 6 Best Seller Products matching Image 3 structure
export interface BestSellerProduct {
  id: string;
  sku: string;
  tag: string;
  name: string;
  deities: string;
  price: number;
  originalPrice: number;
  image: string;
  beadSize: string;
  beadShape: string;
  weight: string;
  length: string;
  round: string;
  knot: string;
  pendant: string;
  material: string;
  origin: string;
  description: string;
}

const BEST_SELLER_PRODUCTS: BestSellerProduct[] = [
  {
    id: "prod-tulsi-01",
    sku: "T01",
    tag: "SINGLE ROUND • LOCK",
    name: "Tulsi Radha Krishan Kanthi Mala",
    deities: "Deities: Shri Krishna",
    price: 399,
    originalPrice: 549,
    image: "/images/products/tulsi/tulsi_01.jpg",
    beadSize: "2.5mm",
    beadShape: "ROUND",
    weight: "27 GM",
    length: "10 CM",
    round: "SINGLE",
    knot: "LOCK",
    pendant: "PENDANTS",
    material: "100% Natural Tulsi Wood. Authenticity lab certificate provided.",
    origin: "Vrindavan, Braj",
    description:
      "Revered as Vrinda Devi, Tulsi Ji holds a special place in Vaishnava tradition and is deeply cherished by devotees of Lord Krishna. Wearing a Tulsi Mala is a symbol of devotion, purity, humility and surrender. More than a sacred ornament, it serves as a gentle reminder to stay connected with Krishna and walk the path of Bhakti in everyday life.",
  },
  {
    id: "prod-tulsi-02",
    sku: "T02",
    tag: "CARVED LEAF • LOCK",
    name: "Shri Ram Naam Patta Tulsi Mala",
    deities: "Deities: Shri Ram",
    price: 449,
    originalPrice: 599,
    image: "/images/products/tulsi/tulsi_02.jpg",
    beadSize: "2.5mm",
    beadShape: "CARVED LEAF",
    weight: "51 GM",
    length: "46 CM",
    round: "SINGLE",
    knot: "LOCK",
    pendant: "PENDANTS",
    material: "100% Natural Tulsi Wood. Temple soil harvest.",
    origin: "Vrindavan, Braj",
    description:
      "Hand-carved holy basil leaves inscribed with the sacred divine vibrations of Shri Ram Naam, sanctified for spiritual protection and peace of mind.",
  },
  {
    id: "prod-tulsi-03",
    sku: "T03",
    tag: "OVAL BEADS • PENDANT",
    name: "Radha Krishna Pendant Tulsi Mala",
    deities: "Deities: Shri Krishna",
    price: 399,
    originalPrice: 549,
    image: "/images/products/tulsi/tulsi_03.jpg",
    beadSize: "4.2mm",
    beadShape: "OVAL",
    weight: "32 GM",
    length: "12 CM",
    round: "SINGLE",
    knot: "LOCK",
    pendant: "PENDANTS",
    material: "100% Natural Tulsi Wood.",
    origin: "Vrindavan, Braj",
    description:
      "Smooth oval-cut natural Vrindavan Tulsi beads adorned with an antique medallion depicting Shri Radha Krishna.",
  },
  {
    id: "prod-tulsi-04",
    sku: "T04",
    tag: "CYLINDRICAL • SINGLE ROUND",
    name: "Vrindavan Cylindrical Tulsi Mala",
    deities: "Deities: Shri Krishna",
    price: 449,
    originalPrice: 599,
    image: "/images/products/tulsi/tulsi_04.jpg",
    beadSize: "3mm",
    beadShape: "CYLINDRICAL",
    weight: "28 GM",
    length: "10 CM",
    round: "SINGLE",
    knot: "LOCK",
    pendant: "BARREL LOCK",
    material: "100% Natural Tulsi Wood.",
    origin: "Vrindavan, Braj",
    description:
      "Artisan-turned cylindrical heartwood beads offering smooth tactile contemplation and enduring daily sacred wear.",
  },
  {
    id: "prod-tulsi-05",
    sku: "T05",
    tag: "7.5MM ROUND • BRAJ WOOD",
    name: "Natural Round Beads Tulsi Mala",
    deities: "Deities: Shri Krishna",
    price: 499,
    originalPrice: 699,
    image: "/images/products/tulsi/tulsi_05.jpg",
    beadSize: "7.5mm",
    beadShape: "ROUND",
    weight: "45 GM",
    length: "14 CM",
    round: "SINGLE",
    knot: "LOCK",
    pendant: "PENDANTS",
    material: "100% Natural Tulsi Wood.",
    origin: "Vrindavan, Braj",
    description:
      "Prominent 7.5mm polished round holy basil beads, unlacquered and naturally fragrant with spiritual serenity.",
  },
  {
    id: "prod-tulsi-06",
    sku: "T06",
    tag: "4.5MM ROUND • SACRED LOCK",
    name: "Traditional Braj Kanthi Mala",
    deities: "Deities: Shri Krishna",
    price: 399,
    originalPrice: 499,
    image: "/images/products/tulsi/tulsi_06.jpg",
    beadSize: "4.5mm",
    beadShape: "ROUND",
    weight: "30 GM",
    length: "10 CM",
    round: "SINGLE",
    knot: "LOCK",
    pendant: "BARREL CLASP",
    material: "100% Natural Tulsi Wood.",
    origin: "Vrindavan, Braj",
    description:
      "Traditional Vaishnava neckwear crafted from sacred fallen Braj wood with a precision brass screw barrel lock.",
  },
];

export function TulsiBestSellersSection() {
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
      setActiveSlide(Math.min(Math.max(0, index), EDITORIAL_STORIES.length - 1));
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

  const handleQuickAdd = (prod: BestSellerProduct, e: React.MouseEvent) => {
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

  const handleToggleSave = (prod: BestSellerProduct, e: React.MouseEvent) => {
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
    <section id="best-sellers" className="w-full bg-[#FFFFFF] pt-12 sm:pt-16 lg:pt-20 3xl:pt-24 4k:pt-28 pb-16 sm:pb-24 3xl:pb-28 4k:pb-36">
      <div className="max-w-[1360px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-10 3xl:px-14 4k:px-16">

        {/* ========================================================================= */}
        {/* ROW 1: 5 VERTICAL EDITORIAL CARDS (Mobile Carousel Slider / Desktop Grid) */}
        {/* ========================================================================= */}
        <div className="relative">
          {/* Mobile Left Arrow Button matching Image 2 */}
          <button
            type="button"
            onClick={() => scrollToSlide("left")}
            aria-label="Previous slide"
            className="sm:hidden absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200/80 shadow-md flex items-center justify-center text-stone-800 hover:bg-white active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Mobile Right Arrow Button matching Image 2 */}
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
            {EDITORIAL_STORIES.map((story) => (
              <Link
                key={story.id}
                href="/products/tulsi/t01"
                onMouseEnter={() => setActiveStoryId(story.id)}
                onMouseLeave={() => setActiveStoryId(null)}
                onClick={(e) => {
                  if (activeStoryId !== story.id) {
                    e.preventDefault();
                    setActiveStoryId(story.id);
                  }
                }}
                className="group relative w-[70vw] max-w-[280px] shrink-0 sm:w-auto sm:shrink sm:max-w-none snap-center aspect-[3/5] rounded-none overflow-hidden bg-[#FAF8F5] cursor-pointer shadow-xs select-none block"
              >
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Minimalist gradient vignette with title - visible on hover/tap */}
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
              </Link>
            ))}
          </div>

          {/* Mobile Dot Indicators */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-3.5">
            {EDITORIAL_STORIES.map((_, i) => (
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
              Best Seller Products
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 4k:gap-2 text-xs sm:text-[13px] 3xl:text-sm 4k:text-base font-sans font-medium text-stone-600 hover:text-[#122E46] transition-colors group self-start sm:self-auto"
          >
            <span>View All Best Seller</span>
            <ArrowRight className="w-3.5 h-3.5 4k:w-4 4k:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ========================================================================= */}
        {/* ROW 3: PRODUCT CARDS (Clicking any card opens that Product's Page)        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 3xl:gap-12 4k:gap-14">
          {BEST_SELLER_PRODUCTS.map((prod) => (
            <Link
              key={prod.id}
              href={`/products/tulsi/${prod.sku.toLowerCase()}`}
              className="group flex flex-col cursor-pointer select-none"
            >
              {/* Pristine Light Neutral Box for Image (Matching Image 2) */}
              <div className="relative aspect-square w-full bg-[#FAF8F5] overflow-hidden flex items-center justify-center transition-colors group-hover:bg-[#F5F2EB]/90">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Save / Bookmark Button in Top Right (Preserved) */}
                <button
                  type="button"
                  onClick={(e) => handleToggleSave(prod, e)}
                  className="absolute top-3 right-3 4k:top-5 4k:right-5 z-10 w-8 h-8 4k:w-11 4k:h-11 rounded-full bg-white/95 backdrop-blur-xs border border-stone-200/80 flex items-center justify-center text-stone-700 hover:text-black transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Save to Wishlist"
                  title="Save to Wishlist"
                >
                  <Bookmark
                    className={`w-4 h-4 4k:w-5 4k:h-5 transition-colors ${isInWishlist(prod.id)
                      ? "fill-[#122E46] text-[#122E46]"
                      : "stroke-[1.8]"
                      }`}
                  />
                </button>

                {/* Add Product Plus Button in Bottom Right (Preserved) */}
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

              {/* Minimalist Centered Content Matching Image 2 */}
              <div className="pt-3.5 4k:pt-5 text-center flex flex-col items-center">
                {/* Product Name */}
                <h3 className="text-xs sm:text-[13px] 3xl:text-sm 4k:text-[16px] font-sans font-medium text-stone-800 tracking-wide text-center group-hover:text-[#122E46] transition-colors">
                  {prod.name}
                </h3>

                {/* Centered Price */}
                <div className="mt-1 4k:mt-1.5 flex items-center justify-center gap-1.5 4k:gap-2 text-xs sm:text-[13px] 3xl:text-sm 4k:text-[15px] font-sans text-stone-500 font-normal">
                  <span>₹{prod.price}</span>
                  {prod.originalPrice && (
                    <span className="line-through text-stone-400 text-xs 4k:text-sm font-normal">
                      ₹{prod.originalPrice}
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
