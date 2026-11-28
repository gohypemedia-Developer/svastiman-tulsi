"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bookmark, Check, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

// 5 Vertical Editorial Lookbook Cards (Directly below Hero, matching Tulsi Page layout)
const MUKTI_EDITORIAL_STORIES = [
  {
    id: "story-1",
    title: "Sacred Daily Wear",
    image: "/images/mukti/category_rudraksha.jpg",
    alt: "Devotee wearing sanctified Nepali Rudraksha in temple courtyard",
  },
  {
    id: "story-2",
    title: "108 Consecrated Japa Mala",
    image: "/images/mukti/products/prod_rudraksha_108_mala_silk.jpg",
    alt: "Full 108 beads Nepali Rudraksha meditation japa mala on draped cream silk",
  },
  {
    id: "story-3",
    title: "Silver Lotus Capped 1 Mukhi",
    image: "/images/mukti/products/prod_1_mukhi_silver_silk.jpg",
    alt: "Rare 1 Mukhi Nepali Rudraksha with 925 sterling silver lotus capping on draped cream silk",
  },
  {
    id: "story-4",
    title: "Vedic Spring Wash & Knotting",
    image: "/images/origin/brand_artisan_wash.jpg",
    alt: "Himalayan artisan purifying rare sacred Rudraksha in mountain spring water",
  },
  {
    id: "story-5",
    title: "Siddha Rudraksha Om Bracelet",
    image: "/images/mukti/products/prod_rudraksha_om_bracelet_silk.jpg",
    alt: "Sacred Nepali Rudraksha wrist bracelet with solid brass Om charm on draped cream silk",
  },
];

export interface MuktiBestSellerProduct {
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

const MUKTI_BEST_SELLER_PRODUCTS: MuktiBestSellerProduct[] = [
  {
    id: "prod-1-mukhi-nepali",
    sku: "MKT01",
    tag: "1-MUKHI • 925 SILVER CAP",
    name: "1 Mukhi Nepali Rudraksha",
    deities: "Deities: Lord Shiva",
    price: 18500,
    originalPrice: 22000,
    image: "/images/mukti/products/prod_1_mukhi_silver_silk.jpg",
    beadSize: "26mm",
    beadShape: "NATURAL OVAL",
    weight: "8.5 GM",
    length: "3.2 CM",
    round: "PENDANT",
    knot: "925 SILVER",
    pendant: "LOTUS CAPPING",
    material: "Rare Natural 1-Mukhi Rudraksha with 925 Sterling Silver Lotus Cap. Digital X-ray deed included.",
    origin: "Eastern Nepal (2,400m+)",
    description:
      "An exceptionally rare botanical specimen displaying a singular unbroken natural fissure. Governed by Lord Shiva and the Sun, fostering supreme awareness, emotional fearlessness, and deep meditative focus.",
  },
  {
    id: "prod-mukti-02",
    sku: "MKT02",
    tag: "108 BEADS • CONSECRATED",
    name: "108 Nepali Rudraksha Japa Mala",
    deities: "Deities: Lord Shiva",
    price: 4899,
    originalPrice: 5999,
    image: "/images/mukti/products/prod_rudraksha_108_mala_silk.jpg",
    beadSize: "8.0mm",
    beadShape: "ROUND",
    weight: "68 GM",
    length: "86 CM",
    round: "108 JAPA",
    knot: "BRAHMAGRANTHI",
    pendant: "RED SILK GURU TASSEL",
    material: "100% Genuine 5-Mukhi Himalayan Rudraksha beads hand-knotted with unbleached cotton threads.",
    origin: "Nepal High Himalayas",
    description:
      "Handcrafted 108-bead consecrated meditation mala. Each seed is carefully selected for symmetrical mukhi fissures and energetic vibrancy, traditionally knotted with sacred Brahmagranthi.",
  },
  {
    id: "prod-mukti-03",
    sku: "MKT03",
    tag: "925 SILVER OM • CONSECRATED",
    name: "Siddha Rudraksha Om Bracelet",
    deities: "Deities: Lord Shiva",
    price: 2199,
    originalPrice: 2799,
    image: "/images/mukti/products/prod_rudraksha_om_bracelet_silk.jpg",
    beadSize: "8.5mm",
    beadShape: "NATURAL ROUND",
    weight: "22 GM",
    length: "19 CM STRETCH",
    round: "SINGLE",
    knot: "SATTVIC ELASTIC",
    pendant: "GOLDEN OM CHARM",
    material: "Selected Nepali Rudraksha beads with solid medallion Om charm on cream silk.",
    origin: "Nepal",
    description:
      "A protective daily wrist talisman uniting energized Nepali Rudraksha beads with an exquisitely engraved solid Om medallion charm for aura shielding.",
  },
  {
    id: "prod-mukti-04",
    sku: "MKT04",
    tag: "7 CHAKRA • GEMSTONE ENERGY",
    name: "7 Chakra Rudraksha Energy Bracelet",
    deities: "Deities: Trideva & Navagraha",
    price: 2499,
    originalPrice: 2999,
    image: "/images/mukti/products/prod_7chakra_bracelet_silk.jpg",
    beadSize: "8.0mm",
    beadShape: "ROUND",
    weight: "26 GM",
    length: "18 CM STRETCH",
    round: "SINGLE",
    knot: "SATTVIC CORD",
    pendant: "NONE",
    material: "Genuine 7 Chakra crystals paired with sacred consecrated Rudraksha.",
    origin: "Himalayas",
    description:
      "Harmonizes all seven bodily chakras. Combines authentic crystals (Amethyst, Lapis, Turquoise, Aventurine, Tiger Eye, Citrine, Red Jasper) with sacred Himalayan beads.",
  },
  {
    id: "prod-mukti-05",
    sku: "MKT05",
    tag: "RARE SHIVA-SHAKTI • NATURAL",
    name: "Gauri Shankar Divine Rudraksha",
    deities: "Deities: Shiva & Parvati",
    price: 14200,
    originalPrice: 16500,
    image: "/images/mukti/products/prod_gauri_shankar_silk.jpg",
    beadSize: "28mm",
    beadShape: "NATURAL CONJOINED",
    weight: "9.2 GM",
    length: "3.4 CM",
    round: "PENDANT",
    knot: "BRAHMAGRANTHI",
    pendant: "NATURAL TWIN",
    material: "Rare naturally joined Gauri Shankar Rudraksha specimen with laboratory certificate.",
    origin: "Nepal",
    description:
      "A supremely sacred natural phenomenon of two Rudraksha seeds grown conjoined as one, symbolizing eternal cosmic union of Shiva and Shakti. Fosters family harmony, spiritual alignment, and inner peace.",
  },
  {
    id: "prod-mukti-06",
    sku: "MKT06",
    tag: "7-MUKHI • MAHALAXMI BLESSING",
    name: "7 Mukhi Mahalaxmi Nepali Rudraksha",
    deities: "Deities: Goddess Mahalaxmi",
    price: 6499,
    originalPrice: 7999,
    image: "/images/mukti/products/prod_7_mukhi_mahalaxmi_silk.jpg",
    beadSize: "20mm",
    beadShape: "ROUND",
    weight: "5.4 GM",
    length: "2.5 CM",
    round: "SINGLE PENDANT",
    knot: "SILVER LOOP",
    pendant: "SILVER CAP",
    material: "Consecrated 7-Mukhi Nepali Rudraksha bead governed by Goddess Mahalaxmi.",
    origin: "Nepal",
    description:
      "Consecrated under Vedic rites for abundance, freedom from debts, and overcoming Saturnian hurdles. Known in scriptures as the direct blessing of Goddess Mahalaxmi.",
  },
];

export function MuktiBestSellersSection() {
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
      setActiveSlide(Math.min(Math.max(0, index), MUKTI_EDITORIAL_STORIES.length - 1));
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

  const handleQuickAdd = (prod: MuktiBestSellerProduct, e: React.MouseEvent) => {
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

  const handleToggleSave = (prod: MuktiBestSellerProduct, e: React.MouseEvent) => {
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
    <section id="mukti-best-sellers" className="w-full bg-[#FFFFFF] pt-12 sm:pt-16 lg:pt-20 3xl:pt-24 4k:pt-28 pb-16 sm:pb-24 3xl:pb-28 4k:pb-36">
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
            {MUKTI_EDITORIAL_STORIES.map((story) => (
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
            {MUKTI_EDITORIAL_STORIES.map((_, i) => (
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

          <a
            href="#discover-our-products"
            className="inline-flex items-center gap-1.5 4k:gap-2 text-xs sm:text-[13px] 3xl:text-sm 4k:text-base font-sans font-medium text-stone-600 hover:text-[#122E46] transition-colors group self-start sm:self-auto"
          >
            <span>View All Best Seller</span>
            <ArrowRight className="w-3.5 h-3.5 4k:w-4 4k:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* ========================================================================= */}
        {/* ROW 3: PRODUCT CARDS (6-Product Grid matching suastiman.vercel.app)        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 3xl:gap-12 4k:gap-14">
          {MUKTI_BEST_SELLER_PRODUCTS.map((prod) => (
            <Link
              key={prod.id}
              href={`/mukti/${prod.sku.toLowerCase()}`}
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
