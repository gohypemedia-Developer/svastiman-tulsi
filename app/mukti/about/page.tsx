"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";
import { MuktiBrandPhilosophy } from "@/components/mukti/MuktiBrandPhilosophy";

export default function MuktiAboutPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111111]">
        <Navbar />

        {/* Mukti Brand Philosophy - Main Content */}
        <main className="flex-1">
          <MuktiBrandPhilosophy />
        </main>

        <Footer />
        <CartDrawer />
        <BottomNav />
      </div>
    </CartProvider>
  );
}
