"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";
import { ZodiacFinder } from "@/components/home/ZodiacFinder";

export default function EnergyFinderPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F9F8F5] text-[#111111]">
        <Navbar />
        <main className="flex-1 pt-6 sm:pt-10 pb-20 sm:pb-16">
          <div className="max-w-7xl 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16 mb-6 sm:mb-8 4k:mb-12">
            <h1 className="text-2xl sm:text-4xl font-serif text-[#132F47] mb-2 sm:mb-4">Energy Finder Tool</h1>
            <p className="text-xs sm:text-sm text-stone-600 font-light">Find the perfect crystal tailored to your astrological sign.</p>
          </div>
          <ZodiacFinder />
        </main>
        <Footer />
        <CartDrawer />
        <BottomNav />
      </div>
    </CartProvider>
  );
}
