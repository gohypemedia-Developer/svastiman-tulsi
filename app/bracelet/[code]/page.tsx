import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";
import { BraceletProductShowcase } from "@/components/bracelet/BraceletProductShowcase";
import { BRACELET_CATALOG } from "@/lib/bracelet-catalog";

interface PageProps {
  params: Promise<{
    code: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { code } = await params;
  const normalizedSku = code.toUpperCase().replace("-", "");
  const product = BRACELET_CATALOG[normalizedSku] || BRACELET_CATALOG["BRC01"];
  return {
    title: `${product.name} | Natural Gemstone Bracelets | Svastimān`,
    description: product.description,
  };
}

export default async function BraceletProductPage({ params }: PageProps) {
  const { code } = await params;

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111111]">
        <Navbar />

        {/* Product Showcase (Matching Image 1) */}
        <main className="flex-1">
          <BraceletProductShowcase productSku={code} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Cart Slideout Drawer */}
        <CartDrawer />

        {/* Mobile Sticky Bottom Navigation */}
        <BottomNav />
      </div>
    </CartProvider>
  );
}
