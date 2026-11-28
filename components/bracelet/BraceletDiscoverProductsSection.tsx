"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, Check, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export interface BraceletDiscoverProduct {
  id: string;
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
}

// 9 Sacred Gemstone & Crystal Bracelets (3x3 grid matching reference)
const BRACELET_DISCOVER_PRODUCTS: BraceletDiscoverProduct[] = [
  {
    id: "disc-brac-01",
    sku: "BRC01",
    name: "Grade-AAA Natural Amazonite Bracelet",
    price: 1899,
    originalPrice: 2499,
    image: "/images/bracelets/bracelet_amazonite.jpg",
    category: "calm",
  },
  {
    id: "disc-brac-02",
    sku: "BRC02",
    name: "7 Chakra Multi-Stone Energy Bracelet",
    price: 2499,
    originalPrice: 3199,
    image: "/images/bracelets/bracelet_7chakra.jpg",
    category: "balance",
  },
  {
    id: "disc-brac-03",
    sku: "BRC03",
    name: "Royal Lapis Lazuli Intuition Bracelet",
    price: 2199,
    originalPrice: 2799,
    image: "/images/bracelets/bracelet_lapislazuli.jpg",
    category: "wisdom",
  },
  {
    id: "disc-brac-04",
    sku: "BRC04",
    name: "Golden Chatoyant Tiger Eye Bracelet",
    price: 1799,
    originalPrice: 2299,
    image: "/images/bracelets/bracelet_tigereye.jpg",
    category: "courage",
  },
  {
    id: "disc-brac-05",
    sku: "BRC05",
    name: "Divine Purple Amethyst Meditative Bracelet",
    price: 2299,
    originalPrice: 2899,
    image: "/images/bracelets/bracelet_amethyst.jpg",
    category: "peace",
  },
  {
    id: "disc-brac-06",
    sku: "BRC06",
    name: "Soothing Rose Quartz Heart Bracelet",
    price: 1699,
    originalPrice: 2199,
    image: "/images/bracelets/bracelet_rosequartz.jpg",
    category: "love",
  },
  {
    id: "disc-brac-07",
    sku: "BRC07",
    name: "Protection Black Onyx Grounding Bracelet",
    price: 1599,
    originalPrice: 2099,
    image: "/images/bracelets/bracelet_blackonyx.jpg",
    category: "grounding",
  },
  {
    id: "disc-brac-08",
    sku: "BRC08",
    name: "Abundance Golden Citrine Crystal Bracelet",
    price: 2399,
    originalPrice: 2999,
    image: "/images/bracelets/bracelet_citrine.jpg",
    category: "prosperity",
  },
  {
    id: "disc-brac-09",
    sku: "BRC09",
    name: "Serenity Green Aventurine Healing Bracelet",
    price: 1799,
    originalPrice: 2299,
    image: "/images/bracelets/bracelet_greenaventurine.jpg",
    category: "healing",
  },
];

export function BraceletDiscoverProductsSection() {
  const { isInWishlist, toggleWishlist, addToCart, openCart } = useCart();
  const [addedSku, setAddedSku] = useState<string | null>(null);

  const handleToggleSave = (prod: BraceletDiscoverProduct, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      originalPrice: prod.originalPrice,
      image: prod.image,
      category: prod.category,
    });
  };

  const handleQuickAdd = (prod: BraceletDiscoverProduct, e: React.MouseEvent) => {
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
    setTimeout(() => setAddedSku(null), 2000);
  };

  return (
    <section id="discover-bracelet-products" className="w-full py-12 sm:py-20 lg:py-24 3xl:py-28 4k:py-36 bg-[#FAF8F5]">
      <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-14 3xl:mb-16 4k:mb-20">
          <h2
            className="text-2xl sm:text-4xl lg:text-[42px] 3xl:text-[48px] 4k:text-[56px] font-normal text-[#122E46] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
          >
            Discover Our Bracelets
          </h2>
        </div>

        {/* PRODUCT GRID: 3 Columns x 3 Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-12 3xl:gap-14 4k:gap-16">
          {BRACELET_DISCOVER_PRODUCTS.map((prod) => (
            <Link
              key={prod.id}
              href={`/bracelet/${prod.sku.toLowerCase()}`}
              className="group flex flex-col cursor-pointer select-none"
            >
              {/* Full Frame Product Image Box */}
              <div className="relative aspect-square w-full bg-white border border-[#E8E2D5]/80 overflow-hidden transition-all duration-300 group-hover:border-[#C5A880] group-hover:shadow-sm">
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
                  className="absolute top-3.5 right-3.5 4k:top-5 4k:right-5 z-10 w-8 h-8 4k:w-11 4k:h-11 rounded-full bg-white/95 backdrop-blur-xs border border-stone-200/80 flex items-center justify-center text-stone-700 hover:text-black transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Save to Wishlist"
                  title="Save to Wishlist"
                >
                  <Bookmark
                    className={`w-3.5 h-3.5 transition-colors ${
                      isInWishlist(prod.id)
                        ? "fill-[#122E46] text-[#122E46]"
                        : "stroke-[1.8]"
                    }`}
                  />
                </button>

                {/* Quick Add Button */}
                <button
                  type="button"
                  onClick={(e) => handleQuickAdd(prod, e)}
                  className="absolute bottom-3.5 right-3.5 4k:bottom-5 4k:right-5 z-10 w-8 h-8 4k:w-11 4k:h-11 rounded-full bg-[#122E46] hover:bg-black text-white flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer opacity-90 group-hover:opacity-100"
                  aria-label="Add to cart"
                  title="Add to cart"
                >
                  {addedSku === prod.sku ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 stroke-[2.2]" />
                  )}
                </button>
              </div>

              {/* Minimalist Centered Typography */}
              <div className="pt-3.5 4k:pt-5 text-center flex flex-col items-center">
                <h3 className="text-xs sm:text-[13px] 3xl:text-sm 4k:text-[16px] font-sans font-medium text-stone-800 tracking-wide text-center group-hover:text-[#122E46] transition-colors line-clamp-1">
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
