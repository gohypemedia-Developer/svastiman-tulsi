"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartProvider } from "@/context/CartContext";

export default function PrivacyPolicyPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1815]">
        {/* Navigation Bar */}
        <Navbar />

        <main className="flex-1">
          {/* Top Banner - Warm Sand/Beige Header without any logo */}
          <section className="w-full bg-[#F2E6D4] border-b border-[#E3D6C1] py-10 sm:py-16 md:py-20 px-4 text-center">
            <div className="max-w-4xl 3xl:max-w-5xl 4k:max-w-6xl mx-auto">
              <h1 className="font-serif text-2xl sm:text-4xl md:text-[44px] 3xl:text-5xl 4k:text-6xl text-[#1A1815] font-normal tracking-tight">
                Privacy Policy
              </h1>
            </div>
          </section>

          {/* Main Content Area - Clean, focused reading column */}
          <article className="max-w-3xl 3xl:max-w-4xl 4k:max-w-5xl mx-auto px-4 sm:px-8 lg:px-10 4k:px-12 py-10 sm:py-16 md:py-24 4k:py-28 space-y-8 sm:space-y-12 4k:space-y-16 pb-20 lg:pb-24">
            {/* Opening Statement */}
            <p className="text-sm sm:text-base 3xl:text-lg 4k:text-xl text-stone-700 leading-relaxed 4k:leading-[1.8] font-light">
              Svastimān respects your privacy. We collect only the information
              needed to process orders — name, address, contact, payment method —
              and never sell or share it with third parties beyond shipping,
              laboratory authentication, and payment partners.
            </p>

            {/* What we collect */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl 3xl:text-3xl 4k:text-4xl text-[#1A1815] font-normal tracking-normal">
                What we collect
              </h2>
              <div className="text-sm sm:text-base 3xl:text-lg 4k:text-xl text-stone-700 leading-relaxed 4k:leading-[1.8] font-light space-y-2 4k:space-y-4">
                <p>
                  Contact details, shipping address, order history, and basic
                  analytics on how you use our website.
                </p>
                <p>
                  If you choose to use our sacred material calculators or
                  customization tools (such as Nepali Rudraksha mukhi selection or
                  Vrindavan Tulsi bead sizing), we process only the relevant
                  preferences you enter to curate your piece.
                </p>
              </div>
            </section>

            {/* How we use it */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl 3xl:text-3xl 4k:text-4xl text-[#1A1815] font-normal tracking-normal">
                How we use it
              </h2>
              <div className="text-sm sm:text-base 3xl:text-lg 4k:text-xl text-stone-700 leading-relaxed 4k:leading-[1.8] font-light space-y-2 4k:space-y-4">
                <p>
                  To fulfill your orders, generate certified laboratory
                  provenance records for sacred materials, improve our service,
                  send dispatch tracking updates, and occasionally share
                  botanical monographs and rare harvest offerings (only if you&apos;ve
                  opted in).
                </p>
                <p>
                  We never use your personal contact data for automated spam or
                  unsolicited third-party promotional campaigns.
                </p>
              </div>
            </section>

            {/* Payment security */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl 3xl:text-3xl 4k:text-4xl text-[#1A1815] font-normal tracking-normal">
                Payment security
              </h2>
              <p className="text-sm sm:text-base 3xl:text-lg 4k:text-xl text-stone-700 leading-relaxed 4k:leading-[1.8] font-light">
                All transactions are encrypted through RBI-compliant, PCI-DSS
                certified payment gateway partners. Svastimān never stores or
                has direct access to your credit card numbers, debit card numbers,
                CVVs, UPI PINs, or banking credentials.
              </p>
            </section>

            {/* Information sharing */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl 3xl:text-3xl 4k:text-4xl text-[#1A1815] font-normal tracking-normal">
                Information sharing
              </h2>
              <p className="text-sm sm:text-base 3xl:text-lg 4k:text-xl text-stone-700 leading-relaxed 4k:leading-[1.8] font-light">
                We strictly do not sell, rent, or trade your personal
                information. Information is disclosed solely to trusted partners
                essential to order completion: insured courier carriers for
                safe doorstep delivery, certified gemological and botanical testing
                laboratories for authenticating individual specimens, and
                statutory authorities when required by Indian law.
              </p>
            </section>

            {/* Cookies and preferences */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl 3xl:text-3xl 4k:text-4xl text-[#1A1815] font-normal tracking-normal">
                Cookies and preferences
              </h2>
              <p className="text-sm sm:text-base 3xl:text-lg 4k:text-xl text-stone-700 leading-relaxed 4k:leading-[1.8] font-light">
                We use essential session cookies to remember your sacred selections
                and shopping cart across visits, along with lightweight analytics
                to ensure reliable site performance. You may disable cookies in
                your browser settings anytime.
              </p>
            </section>

            {/* Your rights */}
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl 3xl:text-3xl 4k:text-4xl text-[#1A1815] font-normal tracking-normal">
                Your rights
              </h2>
              <p className="text-sm sm:text-base 3xl:text-lg 4k:text-xl text-stone-700 leading-relaxed 4k:leading-[1.8] font-light">
                You may request access, correction, or deletion of your data
                anytime by writing to{" "}
                <a
                  href="mailto:namaste@svastiman.com"
                  className="text-[#122E46] underline underline-offset-2 hover:text-[#8C6D46] transition-colors font-medium"
                >
                  namaste@svastiman.com
                </a>{" "}
                or{" "}
                <a
                  href="mailto:concierge@svastiman.com"
                  className="text-[#122E46] underline underline-offset-2 hover:text-[#8C6D46] transition-colors font-medium"
                >
                  concierge@svastiman.com
                </a>
                . You may also unsubscribe from editorial monographs at any time
                via the one-click link at the bottom of our emails.
              </p>
            </section>

            {/* Grievance and Office Address */}
            <section className="space-y-3 pt-4 border-t border-[#EAE3D5]">
              <h2 className="font-serif text-xl sm:text-2xl 3xl:text-3xl 4k:text-4xl text-[#1A1815] font-normal tracking-normal">
                Grievance redressal
              </h2>
              <div className="text-sm sm:text-base 3xl:text-lg 4k:text-xl text-stone-700 leading-relaxed 4k:leading-[1.8] font-light space-y-1.5 4k:space-y-3">
                <p className="font-medium text-[#1A1815]">
                  Svastimān Heritage Private Limited
                </p>
                <p>Himalayan Cloud Belts and Vrindavan Groves, India</p>
                <p>
                  Grievance Officer Email:{" "}
                  <a
                    href="mailto:concierge@svastiman.com"
                    className="text-[#122E46] underline underline-offset-2 hover:text-[#8C6D46] transition-colors font-medium"
                  >
                    concierge@svastiman.com
                  </a>
                </p>
                <p className="text-xs text-stone-500 pt-2">
                  Last updated: October 2026
                </p>
              </div>
            </section>
          </article>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Cart Slideout Drawer */}
        <CartDrawer />

        {/* Mobile Sticky Bottom Navigation */}
        <BottomNav />
      </div>
    </CartProvider>
  );
}
