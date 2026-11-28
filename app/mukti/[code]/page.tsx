import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";
import { MuktiProductShowcase } from "@/components/mukti/MuktiProductShowcase";
import { MUKTI_CATALOG } from "@/lib/mukti-catalog";

interface PageProps {
  params: Promise<{
    code: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { code } = await params;
  const normalizedSku = code.toUpperCase().replace("-", "");
  const product = MUKTI_CATALOG[normalizedSku] || MUKTI_CATALOG["MKT01"];
  return {
    title: `${product.name} | Mukti Consecrated Artifacts | Svastimān`,
    description: product.description,
  };
}

export default async function MuktiProductPage({ params }: PageProps) {
  const { code } = await params;

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111111]">
        <Navbar />

        {/* Product Showcase (Matching Image 1) */}
        <main className="flex-1">
          <MuktiProductShowcase productSku={code} />
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
