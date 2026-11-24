import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Principles to wear Tulsi | Sacred Vedic Protocols | Svastimān",
  description:
    "Essential guidelines for initial purification, mindful sanctification, and continuous devotional alignment with Vrinda Devi.",
};

export default function PrinciplesToWearTulsiPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#122E46]">
        {/* Navigation Bar */}
        <Navbar />

        <main className="flex-1 w-full py-10 sm:py-20 lg:py-24 3xl:py-28 4k:py-36 pb-20 lg:pb-24">
          <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

            {/* Section Header */}
            <div className="text-center max-w-3xl 3xl:max-w-4xl 4k:max-w-5xl mx-auto mb-8 sm:mb-16 4k:mb-20">
              <h1
                className="text-2xl sm:text-4xl lg:text-[42px] 3xl:text-5xl 4k:text-6xl font-normal text-[#122E46] tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
              >
                Principles to wear Tulsi
              </h1>
            </div>

            <div className="space-y-8 sm:space-y-16 4k:space-y-20">

              {/* PRINCIPLE 1: Initial Purification & Sanctification */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 3xl:gap-16 4k:gap-20 items-center bg-white p-5 sm:p-8 lg:p-12 3xl:p-14 4k:p-18 border border-[#E8E2D5] shadow-xs">

                {/* Sacred Image: Temple Steps & Gangajal Kalash */}
                <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-square lg:aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5]">
                  <Image
                    src="/images/origin/trust_sacred_temple.jpg"
                    alt="Sacred Gangajal Kalash and temple steps in Vrindavan"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-white text-[10px] font-mono tracking-widest uppercase bg-black/60 px-2.5 py-1 backdrop-blur-xs">
                    Vedic Purification Ritual
                  </div>
                </div>

                {/* Text Content */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5F2EB] border border-[#E8E2D5] flex items-center justify-center font-mono text-xs font-semibold text-[#122E46] shrink-0">
                      1
                    </span>
                    <h2
                      className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#122E46] font-normal leading-tight"
                      style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                    >
                      Initial Purification & Sanctification
                    </h2>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm font-sans text-stone-700 leading-relaxed divide-y divide-stone-100">

                    {/* Cleansing */}
                    <div className="pt-2">
                      <strong className="text-[#122E46] font-semibold block mb-1">
                        Cleansing the Mala:
                      </strong>
                      <p className="text-stone-600">
                        Before wearing a new Tulsi Mala, it must be purified by soaking it in or sprinkling it with Gangajal (holy Ganges water) or rose water to cleanse negative energies.
                      </p>
                    </div>

                    {/* Personal Purity */}
                    <div className="pt-3">
                      <strong className="text-[#122E46] font-semibold block mb-1">
                        Personal Purity:
                      </strong>
                      <p className="text-stone-600">
                        The wearer should take a bath, put on fresh clothes, and wear the mala with a pure heart and clear devotional intentions.
                      </p>
                    </div>

                    {/* Mantra Sanctification */}
                    <div className="pt-3">
                      <strong className="text-[#122E46] font-semibold block mb-1">
                        Mantra Sanctification:
                      </strong>
                      <p className="text-stone-600">
                        Hold the beads in your hands and chant a sacred mantra—such as the Tulsi Gayatri Mantra or &ldquo;Om Namo Bhagavate Vasudevaya&rdquo;—to sanctify the mala and invoke divine protection.
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* PRINCIPLE 2: Proper Placement & Continuous Wear */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 3xl:gap-16 4k:gap-20 items-center bg-white p-5 sm:p-8 lg:p-12 3xl:p-14 4k:p-18 border border-[#E8E2D5] shadow-xs">

                {/* Text Content */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5 order-2 lg:order-1">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F5F2EB] border border-[#E8E2D5] flex items-center justify-center font-mono text-xs font-semibold text-[#122E46] shrink-0">
                      2
                    </span>
                    <h2
                      className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#122E46] font-normal leading-tight"
                      style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                    >
                      Proper Placement & Continuous Wear
                    </h2>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm font-sans text-stone-700 leading-relaxed divide-y divide-stone-100">

                    {/* Placement on Body */}
                    <div className="pt-2">
                      <strong className="text-[#122E46] font-semibold block mb-1">
                        Placement on the Body:
                      </strong>
                      <p className="text-stone-600">
                        The mala is worn around the neck as a Kanthi Mala, positioning the bead closest to the face just below the throat while the rest drapes over the chest. It is recommended to keep the wood in direct contact with the skin to receive continuous sattvic and dosha-balancing benefits.
                      </p>
                    </div>

                    {/* Continuous Companion */}
                    <div className="pt-3">
                      <strong className="text-[#122E46] font-semibold block mb-1">
                        Continuous Companion:
                      </strong>
                      <p className="text-stone-600">
                        Once put on, the mala should be worn continuously as a sign of alignment with the will of Lord Hari. It should not be taken off frequently or casually.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Sacred Image: Devotee Wearing Kanthi Mala Close to Throat */}
                <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-square lg:aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] border border-[#E8E2D5] order-1 lg:order-2">
                  <Image
                    src="/images/products/tulsi/t01_model_wear.jpg"
                    alt="Devotee wearing sanctified Tulsi Kanthi Mala in direct contact with skin"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-white text-[10px] font-mono tracking-widest uppercase bg-black/60 px-2.5 py-1 backdrop-blur-xs">
                    Direct Skin Contact & Sacred Alignment
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Navigation CTA Link */}
            <div className="pt-12 sm:pt-16 text-center">
              <Link
                href="/products/tulsi/t-01"
                className="inline-block px-6 sm:px-8 py-3.5 bg-[#122E46] text-[#FAF8F5] text-xs font-mono uppercase tracking-[0.16em] sm:tracking-[0.2em] hover:bg-[#C5A880] hover:text-[#111111] transition-colors shadow-md text-center max-w-full"
              >
                Acquire Sacred Tulsi Kanthi Mala • ₹399
              </Link>
            </div>

          </div>
        </main>

        {/* Global Footer (Requested by User) */}
        <Footer />

        {/* Global Cart Slideout Drawer */}
        <CartDrawer />

        {/* Mobile Bottom Navigation */}
        <BottomNav />
      </div>
    </CartProvider>
  );
}
