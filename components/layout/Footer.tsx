"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#FAF8F5] text-[#122E46] relative overflow-hidden select-none border-t border-[#E8E2D5]">
      {/* Subtle brand luxury grain texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

      {/* Traveling Shine Animation matching reference video with website colors */}
      <style>{`
        @keyframes shineTravel {
          0% {
            background-position: 100% 0;
          }
          65% {
            background-position: 0% 0;
          }
          100% {
            background-position: 0% 0;
          }
        }
        .animate-shine-travel {
          background: linear-gradient(
            90deg,
            #FFFFFF 0%,
            #FFFFFF 36%,
            #C5A880 43%,
            #122E46 50%,
            #C5A880 57%,
            #FFFFFF 64%,
            #FFFFFF 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: shineTravel 5.8s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. TOP CENTER BRAND WORDMARK                                              */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-10">
          <Link href="/" className="inline-block group select-none">
            <h3
              className="text-2xl sm:text-4xl md:text-[44px] font-normal tracking-[0.18em] sm:tracking-[0.25em] text-[#122E46] uppercase leading-none transition-opacity group-hover:opacity-90"
              style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
            >
              SVASTIMĀN
            </h3>
          </Link>

          {/* Golden Tagline */}
          <div className="mt-2 sm:mt-3 px-2">
            <h2
              className="font-serif text-sm sm:text-xl lg:text-[clamp(1.35rem,3.8vw,4.75rem)] font-normal tracking-wide sm:tracking-tight text-white select-none text-center animate-shine-travel break-words"
              style={{
                fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif",
                filter:
                  "drop-shadow(0 1px 2px rgba(18, 46, 70, 0.12)) drop-shadow(0 2px 6px rgba(197, 168, 128, 0.18))",
              }}
            >
              Touch The Sacred #UntouchedOrigins
            </h2>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN 2-COLUMN (MOBILE) / 4-COLUMN (DESKTOP) FOOTER CONTENT GRID       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 sm:gap-x-8 lg:gap-x-10 gap-y-7 sm:gap-y-10 pt-4 sm:pt-8 pb-12 sm:pb-16 text-sm">
          
          {/* COLUMN 1: CUSTOMER SERVICE */}
          <div className="space-y-3 sm:space-y-3.5">
            <h4 className="font-serif text-[14px] sm:text-base font-semibold text-[#122E46] tracking-tight">
              Customer Service
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] text-stone-700">
              <li>
                <a href="mailto:concierge@svastiman.com" className="hover:text-[#7A6242] hover:translate-x-0.5 transition-all inline-block">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/authenticity-charter" className="hover:text-[#7A6242] hover:translate-x-0.5 transition-all inline-block">
                  Return / Exchange
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#7A6242] hover:translate-x-0.5 transition-all inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-[#7A6242] hover:translate-x-0.5 transition-all inline-block">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-reverence" className="hover:text-[#7A6242] hover:translate-x-0.5 transition-all inline-block">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="pt-1.5 hidden sm:block">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#7A6242] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" />
                  <span>100% Traceable Indian Heritage</span>
                </div>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: COMPANY & SECURE PAYMENT */}
          <div className="space-y-5 sm:space-y-6">
            <div className="space-y-3 sm:space-y-3.5">
              <h4 className="font-serif text-[14px] sm:text-base font-semibold text-[#122E46] tracking-tight">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] text-stone-700">
                <li>
                  <Link href="/about" className="hover:text-[#7A6242] hover:translate-x-0.5 transition-all inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/authenticity-charter" className="hover:text-[#7A6242] hover:translate-x-0.5 transition-all inline-block">
                    Authenticity Charter
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#7A6242] hover:translate-x-0.5 transition-all inline-block">
                    Generational Artisans
                  </Link>
                </li>
                <li>
                  <Link href="/orders" className="hover:text-[#7A6242] hover:translate-x-0.5 transition-all inline-block">
                    Track Your Order
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#7A6242] hover:translate-x-0.5 transition-all inline-block">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* SECURE PAYMENT SUBSECTION (Preserved on Desktop) */}
            <div className="space-y-2.5 pt-1 hidden lg:block">
              <h5 className="font-serif text-[13px] sm:text-sm font-semibold text-[#122E46] tracking-tight">
                Secure Payment
              </h5>
              <div className="flex items-center gap-2 pt-0.5">
                {/* VISA BADGE */}
                <div className="h-6 px-2 bg-white rounded border border-[#E0D8CB] flex items-center justify-center shadow-xs">
                  <span className="text-[11px] font-black italic tracking-tighter text-[#1A1F71] font-sans">
                    VISA
                  </span>
                </div>

                {/* PAYTM BADGE */}
                <div className="h-6 px-2 bg-white rounded border border-[#E0D8CB] flex items-center justify-center shadow-xs">
                  <span className="text-[10px] font-bold tracking-tight">
                    <span className="text-[#002E6E]">pay</span>
                    <span className="text-[#00BAF2]">tm</span>
                  </span>
                </div>

                {/* MASTERCARD BADGE */}
                <div className="h-6 px-2 bg-white rounded border border-[#E0D8CB] flex items-center justify-center shadow-xs">
                  <div className="flex items-center -space-x-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#EB001B]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] opacity-90" />
                  </div>
                </div>

                {/* AMEX BADGE */}
                <div className="h-6 px-2 bg-[#006FCF] rounded flex items-center justify-center shadow-xs">
                  <span className="text-[8.5px] font-black text-white tracking-widest font-sans">
                    AMEX
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: FOLLOW US & OFFICE ADDRESS */}
          <div className="space-y-5 sm:space-y-6">
            {/* FOLLOW US */}
            <div className="space-y-2.5 sm:space-y-3">
              <h4 className="font-serif text-[14px] sm:text-base font-semibold text-[#122E46] tracking-tight">
                Follow Us
              </h4>
              {/* Circular Social Buttons Matching Image 2 */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#122E46] text-[#FAF8F5] flex items-center justify-center hover:bg-[#7A6242] transition-colors shadow-xs"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#122E46] text-[#FAF8F5] flex items-center justify-center hover:bg-[#7A6242] transition-colors shadow-xs"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#122E46] text-[#FAF8F5] flex items-center justify-center hover:bg-[#7A6242] transition-colors shadow-xs"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#FAF8F5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* OFFICE ADDRESS */}
            <div className="space-y-1.5 pt-1">
              <h5 className="font-serif text-[14px] sm:text-base font-semibold text-[#122E46] tracking-tight">
                Office Address
              </h5>
              <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-light">
                Himalayan Cloud Belts and Vrindavan Groves, India
              </p>
              <div className="pt-0.5">
                <a
                  href="mailto:concierge@svastiman.com"
                  className="block text-xs sm:text-[13px] text-[#7A6242] hover:text-[#122E46] transition-colors underline underline-offset-2 font-medium break-all"
                >
                  concierge@svastiman.com
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 4: JOIN OUR NEWSLETTER */}
          <div className="space-y-3 sm:space-y-3.5">
            <h4 className="font-serif text-[14px] sm:text-base font-semibold text-[#122E46] tracking-tight">
              Join Our Newsletter
            </h4>
            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-light">
              Get drops, tips &amp; members-only offers. No spam.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You are subscribed to the Svastimān archive.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 pt-0.5">
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="e.g. name@example.com"
                    className="w-full bg-white border border-[#D5CDBF] rounded-lg px-3 py-2 text-xs text-[#122E46] placeholder:text-stone-400 focus:outline-none focus:border-[#122E46] focus:ring-1 focus:ring-[#122E46]/10 transition-colors shadow-xs"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#122E46] hover:bg-[#7A6242] text-[#FAF8F5] text-xs font-semibold py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs text-center"
                  >
                    Subscribe
                  </button>
                </div>

                {/* AGREEMENT CHECKBOX */}
                <label className="flex items-start gap-1.5 text-[10px] sm:text-[11px] text-stone-500 cursor-pointer pt-1 select-none leading-tight font-light">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 w-3 h-3 rounded border-[#D5CDBF] accent-[#122E46] cursor-pointer shrink-0"
                  />
                  <span>
                    I agree to receive monographs. Read{" "}
                    <Link href="/privacy-policy" className="underline hover:text-[#7A6242] transition-colors">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. BOTTOM SUB-FOOTER BAR DIVIDED BY LINE                                  */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#F4F1EA] border-t border-[#E0D8CB] relative z-10 pb-20 sm:pb-20 lg:pb-0">
        <div className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-stone-600">
          <p className="tracking-tight text-center sm:text-left font-serif text-[11px] sm:text-xs">
            &copy; 2026 <strong className="font-semibold text-[#122E46]">Svastimān</strong>. All Rights Reserved.
          </p>

          <p className="tracking-tight text-center sm:text-right font-serif text-[11px] sm:text-xs text-stone-500">
            A Modern Heritage House &bull; Handcrafted in India
          </p>
        </div>
      </div>
    </footer>
  );
}
