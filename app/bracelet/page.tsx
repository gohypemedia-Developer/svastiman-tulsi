"use client";

import React, { useEffect } from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { BraceletHeroBanner } from "@/components/bracelet/BraceletHeroBanner";
import { BraceletBestSellersSection } from "@/components/bracelet/BraceletBestSellersSection";
import { BraceletDiscoverProductsSection } from "@/components/bracelet/BraceletDiscoverProductsSection";
import { BraceletFaqAndProvenance } from "@/components/bracelet/BraceletFaqAndProvenance";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";

export default function BraceletPage() {
  useEffect(() => {
    // Smooth scroll to target hash on load or on hashchange
    const scrollToHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
      }
    };

    if (typeof window !== "undefined" && window.location.hash) {
      setTimeout(scrollToHash, 200);
      setTimeout(scrollToHash, 600);
    }
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <CartProvider>
      <div className="relative min-h-screen bg-[#F7F5F0] text-[#0C161D]">
        {/* Main Content Wrapper */}
        <div className="relative z-10 bg-[#F7F5F0] overflow-x-clip">
          {/* SECTION A: Header Navbar */}
          <Navbar />

          {/* Main Content Sections */}
          <main className="flex-1 space-y-0">
            {/* 1st Section: Bracelet Hero Banner */}
            <BraceletHeroBanner />

            {/* 2nd Section: Lookbook Cards + Best Seller Products Grid */}
            <BraceletBestSellersSection />

            {/* 3rd Section: Discover Our Products Grid */}
            <BraceletDiscoverProductsSection />

            {/* 4th Section: FAQ, Four Pillars & Editorial Banner */}
            <BraceletFaqAndProvenance />
          </main>

          {/* Footer */}
          <Footer />

          {/* Global Cart Slideout Drawer */}
          <CartDrawer />

          {/* Mobile Bottom Floating Navigation */}
          <BottomNav />
        </div>
      </div>
    </CartProvider>
  );
}
