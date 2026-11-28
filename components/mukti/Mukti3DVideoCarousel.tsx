"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, ShoppingBag, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

export interface Mukti3DProduct {
  id: string;
  sku: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  image: string;
  badge: string;
  deities: string;
}

const FIVE_3D_PRODUCTS: Mukti3DProduct[] = [
  {
    id: "prod-1-mukhi-nepali",
    sku: "MKT01",
    name: "1 Mukhi Nepali Rudraksha",
    subtitle: "Solid 925 Sterling Silver Lotus Capping • Digital Radiography Certified",
    price: 18500,
    originalPrice: 22000,
    image: "/images/mukti/3d_1_mukhi_rudraksha.png",
    badge: "1-MUKHI • 925 SILVER",
    deities: "Lord Shiva & Surya",
  },
  {
    id: "prod-amazonite-bracelet",
    sku: "MKT03",
    name: "Natural Amazonite Stone Bracelet",
    subtitle: "Grade-AAA Seafoam Turquoise Crystal Beads • Throat Chakra Alignment",
    price: 2499,
    originalPrice: 3200,
    image: "/images/mukti/3d_amazonite_bracelet.png",
    badge: "GRADE-AAA STONE BRACELET",
    deities: "Universal Prana",
  },
  {
    id: "prod-mukti-01",
    sku: "MKT02",
    name: "Mukti Consecrated Mahamala",
    subtitle: "108 High-Altitude Rudraksha & Aged Vrindavan Tulsi • Silver Meru Finial",
    price: 4899,
    originalPrice: 5999,
    image: "/images/mukti/3d_mukti_japa_mala.png",
    badge: "108 CONSECRATED JAPA",
    deities: "Shiva & Krishna",
  },
  {
    id: "prod-amazonite-108-mala",
    sku: "MKT04",
    name: "Natural Amazonite 108 Meditation Mala",
    subtitle: "Hand-Knotted Sacred Japa Beads • Consecrated Deep Saffron Silk Tassel",
    price: 5899,
    originalPrice: 7499,
    image: "/images/mukti/3d_amazonite_mala.png",
    badge: "108 CHAKRA MALA",
    deities: "Shiva Consciousness",
  },
  {
    id: "disc-tulsi-01",
    sku: "T01",
    name: "Radha Krishna Pendant Tulsi Mala",
    subtitle: "100% Genuine Vrindavan Tulsi Wood • Ornate Devotional Medallion",
    price: 399,
    originalPrice: 549,
    image: "/images/mukti/carousel_tulsi_kanthi.png",
    badge: "VRINDAVAN DHAM",
    deities: "Shri Krishna & Radha Rani",
  },
];

export function Mukti3DVideoCarousel() {
  const { addToCart, openCart } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1024);
  const dragStartX = useRef(0);
  const lastScrollTime = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeProduct = FIVE_3D_PRODUCTS[activeIndex];

  // Measure container width responsively on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      } else if (typeof window !== "undefined") {
        setContainerWidth(window.innerWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Modulo navigation
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % FIVE_3D_PRODUCTS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + FIVE_3D_PRODUCTS.length) % FIVE_3D_PRODUCTS.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Cursor wheel / trackpad scroll effect ("scroll effect add kar do")
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 320) return;

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 16) {
      if (delta > 0) handleNext();
      else handlePrev();
      lastScrollTime.current = now;
    }
  };

  // Cursor drag / swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMouseTilt({
      x: (x - 0.5) * 14,
      y: (y - 0.5) * -12,
    });

    if (!isDragging) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 48) {
      if (diff < 0) handleNext();
      else handlePrev();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => {
    setIsDragging(false);
    setMouseTilt({ x: 0, y: 0 });
  };

  // Touch swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 38) {
      if (diff < 0) handleNext();
      else handlePrev();
    }
  };

  // Add to cart
  const handleQuickAdd = () => {
    addToCart({
      id: activeProduct.id,
      name: activeProduct.name,
      price: activeProduct.price,
      originalPrice: activeProduct.originalPrice,
      image: activeProduct.image,
    });
    setIsAdded(true);
    openCart();
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section
      id="mukti-3d-video-carousel"
      ref={containerRef}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full py-16 sm:py-24 bg-[#FAF8F5] select-none overflow-hidden"
    >
      {/* Top Title Bar */}
      <div className="w-full text-center px-4 mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E8E2D5] text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#122E46] shadow-2xs">
          <Sparkles className="w-3 h-3 text-[#C5A880]" />
          <span>MUKTI 3D SACRED COLLECTION</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3D VIDEO CAROUSEL STAGE (Clean Background - No Statue, No Clouds)          */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center my-6 sm:my-10 px-4 overflow-visible">
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] flex items-center justify-center">
          {FIVE_3D_PRODUCTS.map((prod, index) => {
            const count = FIVE_3D_PRODUCTS.length;
            let offset = index - activeIndex;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            if (Math.abs(offset) > 2) return null;

            const isCenter = offset === 0;

            const isMobile = containerWidth < 640;
            const isTablet = containerWidth < 1024;
            const xStep = isMobile ? Math.min(170, containerWidth * 0.42) : isTablet ? 270 : 380;
            const xOffset = offset * xStep;

            const scale = isCenter ? 1.15 : Math.abs(offset) === 1 ? 0.74 : 0.46;
            const opacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.65 : 0.3;
            const zIndex = isCenter ? 30 : Math.abs(offset) === 1 ? 20 : 10;
            const rotateY = isCenter ? mouseTilt.x : offset < 0 ? 18 : -18;
            const rotateX = isCenter ? mouseTilt.y : 0;

            return (
              <div
                key={prod.id}
                onClick={() => setActiveIndex(index)}
                style={{
                  transform: `translateX(${xOffset}px) scale(${scale}) perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                  zIndex,
                  opacity,
                }}
                className={`absolute transition-all duration-500 ease-out cursor-pointer flex flex-col items-center justify-center ${
                  isCenter ? "cursor-grab active:cursor-grabbing" : "hover:opacity-85"
                }`}
              >
                {/* 3D Floating Product Image */}
                <div
                  className={`relative w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] flex items-center justify-center ${
                    isCenter ? "animate-[float_6s_ease-in-out_infinite]" : ""
                  }`}
                >
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    priority={isCenter}
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 340px, 420px"
                    className="object-contain filter drop-shadow-[0_14px_28px_rgba(0,0,0,0.16)]"
                  />
                </div>

                {/* Soft Contact Shadow beneath active floating product */}
                {isCenter && (
                  <div className="w-36 sm:w-44 h-5 bg-black/15 blur-lg rounded-full -mt-2 transform scale-x-125 transition-transform duration-500 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM PRODUCT METADATA & ARROW CONTROLS (Matching Dribbble Video)        */}
      {/* ========================================================================= */}
      <div className="relative z-30 w-full max-w-xl mx-auto px-4 text-center flex flex-col items-center space-y-3">
        {/* Origin / Badge */}
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
          {activeProduct.badge}
        </span>

        {/* Product Title */}
        <h3
          className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#122E46] tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
        >
          {activeProduct.name}
        </h3>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
          {activeProduct.subtitle}
        </p>

        {/* Price */}
        <div className="flex items-center justify-center gap-2.5 text-base sm:text-lg font-sans font-medium text-[#122E46] pt-1">
          <span className="text-red-700 font-semibold tracking-wide">
            ₹{activeProduct.price.toLocaleString("en-IN")}.00 INR
          </span>
          {activeProduct.originalPrice && (
            <span className="line-through text-stone-400 text-xs sm:text-sm font-normal">
              ₹{activeProduct.originalPrice.toLocaleString("en-IN")}.00
            </span>
          )}
        </div>

        {/* Navigation Arrow Controls */}
        <div className="flex items-center justify-center gap-5 pt-2">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5CEBF] bg-white hover:bg-[#122E46] hover:text-white hover:border-[#122E46] text-[#122E46] flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
            aria-label="Previous Product"
            title="Previous (or scroll cursor left/up)"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2]" />
          </button>

          {/* Quick Add To Cart Button */}
          <button
            type="button"
            onClick={handleQuickAdd}
            className="inline-flex items-center justify-center gap-2 bg-[#122E46] hover:bg-black text-white text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] px-6 sm:px-8 py-3 rounded-none shadow-sm transition-all duration-200 active:scale-98 cursor-pointer"
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
                <span>ADDED TO CART</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>ACQUIRE ARTIFACT</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5CEBF] bg-white hover:bg-[#122E46] hover:text-white hover:border-[#122E46] text-[#122E46] flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
            aria-label="Next Product"
            title="Next (or scroll cursor right/down)"
          >
            <ArrowRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        {/* Scroll Effect Hint */}
        <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-stone-500 uppercase pt-2 opacity-80">
          • Scroll cursor wheel or drag to slide products ({activeIndex + 1} / {FIVE_3D_PRODUCTS.length}) •
        </p>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
