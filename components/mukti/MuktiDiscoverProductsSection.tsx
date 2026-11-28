"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, Check, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export interface MuktiDiscoverProduct {
  id: string;
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
}

// 9 Sacred Mukti Artifacts & Rudraksha Products (100% Unique, Non-repeating Nepali Rudrakshas)
const MUKTI_DISCOVER_PRODUCTS: MuktiDiscoverProduct[] = [
  {
    id: "disc-mkt-01",
    sku: "MKT01",
    name: "1 Mukhi Nepali Rudraksha (925 Silver)",
    price: 18500,
    originalPrice: 22000,
    image: "/images/mukti/products/prod_1_mukhi_silver_silk.jpg",
    category: "rudraksha",
  },
  {
    id: "disc-mkt-02",
    sku: "MKT02",
    name: "108 Beads Consecrated Nepali Rudraksha Mala",
    price: 4899,
    originalPrice: 5999,
    image: "/images/mukti/products/prod_rudraksha_108_mala_silk.jpg",
    category: "japa-mala",
  },
  {
    id: "disc-mkt-03",
    sku: "MKT03",
    name: "Siddha Rudraksha Silver Om Bracelet",
    price: 2199,
    originalPrice: 2799,
    image: "/images/mukti/products/prod_rudraksha_om_bracelet_silk.jpg",
    category: "bracelet",
  },
  {
    id: "disc-mkt-04",
    sku: "MKT04",
    name: "7 Chakra Sacred Energy Bracelet",
    price: 2499,
    originalPrice: 2999,
    image: "/images/mukti/products/prod_7chakra_bracelet_silk.jpg",
    category: "bracelet",
  },
  {
    id: "disc-mkt-05",
    sku: "MKT05",
    name: "Silver Capped Shiva Trishul Talisman",
    price: 3899,
    originalPrice: 4799,
    image: "/images/mukti/products/prod_shiva_trishul_talisman_silk.jpg",
    category: "pendant",
  },
  {
    id: "disc-mkt-06",
    sku: "MKT06",
    name: "Gauri Shankar Shiva-Shakti Rudraksha",
    price: 14200,
    originalPrice: 16500,
    image: "/images/mukti/products/prod_gauri_shankar_silk.jpg",
    category: "rudraksha",
  },
  {
    id: "disc-mkt-07",
    sku: "MKT07",
    name: "7 Mukhi Nepali Mahalaxmi Pendant",
    price: 6499,
    originalPrice: 7999,
    image: "/images/mukti/products/prod_7_mukhi_mahalaxmi_silk.jpg",
    category: "pendant",
  },
  {
    id: "disc-mkt-08",
    sku: "MKT08",
    name: "Tiger Eye & Rudraksha Protection Bracelet",
    price: 1899,
    originalPrice: 2399,
    image: "/images/mukti/products/prod_tigereye_rudraksha_silk.jpg",
    category: "bracelet",
  },
  {
    id: "disc-mkt-09",
    sku: "MKT09",
    name: "Braided Rudraksha Wood Om Wrist Mala",
    price: 1499,
    originalPrice: 1999,
    image: "/images/mukti/products/prod_braided_om_rudraksha_silk.jpg",
    category: "bracelet",
  },
];

export function MuktiDiscoverProductsSection() {
  const { isInWishlist, toggleWishlist, addToCart, openCart } = useCart();
  const [addedSku, setAddedSku] = useState<string | null>(null);

  const handleToggleSave = (prod: MuktiDiscoverProduct, e: React.MouseEvent) => {
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

  const handleQuickAdd = (prod: MuktiDiscoverProduct, e: React.MouseEvent) => {
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
    <section id="discover-our-products" className="w-full py-12 sm:py-20 lg:py-24 3xl:py-28 4k:py-36 bg-[#FAF8F5]">
      <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

        {/* ========================================================================= */}
        {/* HEADER: Title Matching Reference suastiman.vercel.app                     */}
        {/* ========================================================================= */}
        <div className="text-center mb-8 sm:mb-14 3xl:mb-16 4k:mb-20">
          <h2
            className="text-2xl sm:text-4xl lg:text-[42px] 3xl:text-[48px] 4k:text-[56px] font-normal text-[#122E46] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
          >
            Discover Our Products
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* PRODUCT GRID: 3 Columns x 3 Rows (Matching suastiman.vercel.app)          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-12 3xl:gap-14 4k:gap-16">
          {MUKTI_DISCOVER_PRODUCTS.map((prod) => (
            <Link
              key={prod.id}
              href={`/mukti/${prod.sku.toLowerCase()}`}
              className="group flex flex-col cursor-pointer select-none"
            >
              {/* Full Frame Product Image */}
              <div className="relative aspect-square w-full bg-white border border-[#E8E2D5]/80 overflow-hidden transition-all duration-300 group-hover:border-[#C5A880] group-hover:shadow-sm">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Bookmark Wishlist Button (Discreet in Top Right) */}
                <button
                  type="button"
                  onClick={(e) => handleToggleSave(prod, e)}
                  className="absolute top-3.5 right-3.5 4k:top-5 4k:right-5 z-10 w-8 h-8 4k:w-11 4k:h-11 rounded-full bg-white/95 backdrop-blur-xs border border-stone-200/80 flex items-center justify-center text-stone-700 hover:text-black transition-all shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Save to Wishlist"
                  title="Save to Wishlist"
                >
                  <Bookmark
                    className={`w-3.5 h-3.5 transition-colors ${isInWishlist(prod.id)
                      ? "fill-[#122E46] text-[#122E46]"
                      : "stroke-[1.8]"
                      }`}
                  />
                </button>

                {/* Quick Add Button in Bottom Right */}
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

              {/* Minimalist Centered Typography Matching Reference */}
              <div className="pt-4 4k:pt-5 text-center flex flex-col items-center space-y-1 4k:space-y-1.5">
                <h3
                  className="text-xs sm:text-sm 3xl:text-base 4k:text-[17px] font-sans font-medium text-[#122E46] tracking-wide text-center group-hover:text-[#7A6242] transition-colors line-clamp-1"
                >
                  {prod.name}
                </h3>
                <p className="text-xs sm:text-[13px] 3xl:text-sm 4k:text-base font-sans text-stone-500 font-normal tracking-wider">
                  ₹ {prod.price.toLocaleString("en-IN")}.00 INR
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
