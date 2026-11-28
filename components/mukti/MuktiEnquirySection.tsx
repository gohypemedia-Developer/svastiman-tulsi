"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  Send,
  Loader2,
  ShieldCheck,
  Calendar,
  User,
  Mail,
  Phone,
  MessageSquare,
  RefreshCw,
} from "lucide-react";
import { CountryCodeDropdown } from "@/components/common/CountryCodeDropdown";

interface EnquiryFormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  configuration: string;
  sankalpa: string;
  notes: string;
  consent: boolean;
}

const INITIAL_FORM: EnquiryFormData = {
  fullName: "",
  email: "",
  countryCode: "+ 91",
  phone: "",
  configuration: "108 Japa Meditation Mala (8mm)",
  sankalpa: "Inner Liberation & Meditative Stillness",
  notes: "",
  consent: true,
};

export function MuktiEnquirySection() {
  const [formData, setFormData] = useState<EnquiryFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    fullName: string;
    configuration: string;
    email: string;
    phone: string;
    submittedAt: string;
  } | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Please enter your contact phone or WhatsApp number";
    } else if (!/^\d{6,14}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      errs.phone = "Please enter a valid phone number (6–14 digits)";
    }

    if (!formData.consent) {
      errs.consent = "Please agree to be contacted for consecration consultation";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate authentic sanctuary registration processing
    setTimeout(() => {
      const generatedRef = `MKT-${Math.floor(100000 + Math.random() * 900000)}`;
      const now = new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      setSubmittedData({
        referenceId: generatedRef,
        fullName: formData.fullName.trim(),
        configuration: formData.configuration,
        email: formData.email.trim(),
        phone: `${formData.countryCode} ${formData.phone.trim()}`,
        submittedAt: now,
      });

      setIsSubmitting(false);
      setFormData(INITIAL_FORM);
      setErrors({});
    }, 900);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData(INITIAL_FORM);
    setErrors({});
  };

  return (
    <section id="mukti-enquiry" className="w-full py-14 sm:py-20 lg:py-24 3xl:py-28 4k:py-36 bg-[#F7F5F0] border-b border-[#E8E2D5] select-none">
      <div className="max-w-[1240px] 3xl:max-w-[1720px] 4k:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-14 4k:px-16">

        {/* Section Header */}
        <div className="text-center max-w-2xl 3xl:max-w-3xl 4k:max-w-4xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-14 4k:mb-18">
          <span className="text-[11px] sm:text-xs 3xl:text-sm 4k:text-base font-mono uppercase tracking-[0.24em] text-[#7A6242] font-semibold block">
            INDIVIDUAL CONSECRATION CONSULTATION
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl 4k:text-[56px] font-normal text-[#122E46] leading-tight"
            style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
          >
            Reserve Your Mukti Consecration
          </h2>
          <p className="text-xs sm:text-sm 3xl:text-base 4k:text-lg text-stone-600 font-sans leading-relaxed">
            Due to the rare seasonal harvest of natural alpine seeds, each piece is consecrated upon individual request. Submit your details below to register your spiritual sankalpa.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl 3xl:max-w-4xl 4k:max-w-5xl mx-auto bg-white border border-[#E8E2D5] p-6 sm:p-10 lg:p-12 3xl:p-14 4k:p-18 shadow-xs">
          {submittedData ? (
            /* ========================================================================= */
            /* SUCCESS CONFIRMATION STATE                                               */
            /* ========================================================================= */
            <div className="text-center py-6 sm:py-8 space-y-6 animate-in fade-in zoom-in-95 duration-400">
              <div className="w-16 h-16 3xl:w-20 3xl:h-20 rounded-full bg-[#F5F2EB] border-2 border-[#C5A880] text-[#122E46] flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8 3xl:w-10 3xl:h-10 text-[#7A6242]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#7A6242] font-semibold block">
                  CONSECRATION REQUEST REGISTERED
                </span>
                <h3
                  className="font-serif text-2xl sm:text-3xl 3xl:text-4xl text-[#122E46] font-normal"
                  style={{ fontFamily: "var(--font-serif), 'Playfair Display', Georgia, serif" }}
                >
                  Pranām, {submittedData.fullName}
                </h3>
                <p className="text-xs sm:text-sm 3xl:text-base text-stone-600 max-w-lg mx-auto font-sans leading-relaxed">
                  Your intention for the Mukti Consecrated Mahamala has been recorded in our sanctuary registry. Our spiritual concierge will reach out via WhatsApp and email within 24 hours.
                </p>
              </div>

              {/* Confirmation Deed Card */}
              <div className="p-5 sm:p-6 bg-[#FAF8F5] border border-[#E8E2D5] text-left max-w-xl mx-auto space-y-3 font-sans text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-2 text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                  <span>Sanctuary Registry Receipt</span>
                  <span className="text-[#122E46] font-bold">{submittedData.referenceId}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-stone-700">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-stone-400 block">Configuration</span>
                    <span className="font-medium text-[#122E46]">{submittedData.configuration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-stone-400 block">Contact Phone</span>
                    <span className="font-medium text-[#122E46]">{submittedData.phone}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-stone-400 block">Registered Email</span>
                    <span className="font-medium text-[#122E46]">{submittedData.email}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-stone-400 block">Date &amp; Time</span>
                    <span className="font-medium text-[#122E46]">{submittedData.submittedAt}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#122E46] text-[#122E46] text-xs font-mono uppercase tracking-wider hover:bg-[#FAF8F5] cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Submit Another Request</span>
                </button>
              </div>
            </div>
          ) : (
            /* ========================================================================= */
            /* INTERACTIVE ENQUIRY FORM                                                 */
            /* ========================================================================= */
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#122E46] font-medium">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Aarav Sharma"
                      className={`w-full px-3.5 py-2.5 sm:py-3 bg-[#FAF8F5] border text-xs sm:text-sm text-[#122E46] placeholder:text-stone-400 focus:outline-none transition-colors ${
                        errors.fullName ? "border-rose-500 bg-rose-50/20" : "border-[#E8E2D5] focus:border-[#122E46]"
                      }`}
                    />
                    <User className="absolute right-3.5 top-3 w-4 h-4 text-stone-400 pointer-events-none" />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-rose-600 font-sans">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#122E46] font-medium">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. aarav@example.com"
                      className={`w-full px-3.5 py-2.5 sm:py-3 bg-[#FAF8F5] border text-xs sm:text-sm text-[#122E46] placeholder:text-stone-400 focus:outline-none transition-colors ${
                        errors.email ? "border-rose-500 bg-rose-50/20" : "border-[#E8E2D5] focus:border-[#122E46]"
                      }`}
                    />
                    <Mail className="absolute right-3.5 top-3 w-4 h-4 text-stone-400 pointer-events-none" />
                  </div>
                  {errors.email && <p className="text-[11px] text-rose-600 font-sans">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2: Phone with Country Code & Configuration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#122E46] font-medium">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <CountryCodeDropdown
                      value={formData.countryCode}
                      onChange={(code) => setFormData({ ...formData, countryCode: code })}
                    />
                    <div className="relative flex-1">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="98765 43210"
                        className={`w-full px-3.5 py-2.5 sm:py-3 bg-[#FAF8F5] border text-xs sm:text-sm text-[#122E46] placeholder:text-stone-400 focus:outline-none transition-colors ${
                          errors.phone ? "border-rose-500 bg-rose-50/20" : "border-[#E8E2D5] focus:border-[#122E46]"
                        }`}
                      />
                      <Phone className="absolute right-3.5 top-3 w-4 h-4 text-stone-400 pointer-events-none" />
                    </div>
                  </div>
                  {errors.phone && <p className="text-[11px] text-rose-600 font-sans">{errors.phone}</p>}
                </div>

                {/* Preferred Configuration */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#122E46] font-medium">
                    Preferred Configuration
                  </label>
                  <select
                    value={formData.configuration}
                    onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-[#FAF8F5] border border-[#E8E2D5] text-xs sm:text-sm text-[#122E46] focus:border-[#122E46] focus:outline-none cursor-pointer"
                  >
                    <option value="108 Japa Meditation Mala (8mm)">108 Japa Meditation Mala (8mm) • ₹4,899</option>
                    <option value="54 Beads Sadhana Half-Mala (8mm)">54 Beads Sadhana Half-Mala (8mm) • ₹2,899</option>
                    <option value="Double-Round Sacred Kanthi (6mm)">Double-Round Sacred Kanthi (6mm) • ₹3,499</option>
                    <option value="Custom Lunar Consecration">Custom Lunar Consecration (Discuss with Concierge)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Spiritual Sankalpa / Intention */}
              <div className="space-y-1.5">
                <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#122E46] font-medium">
                  Primary Spiritual Sankalpa (Intention)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    "Inner Liberation & Meditative Stillness",
                    "Emotional Healing & Anxiety Release",
                    "Auric Shielding & Spiritual Protection",
                    "Auspicious Devotional Gift for Loved One",
                  ].map((sank) => (
                    <label
                      key={sank}
                      className={`flex items-center gap-2.5 p-3 border cursor-pointer transition-colors ${
                        formData.sankalpa === sank
                          ? "bg-[#F5F2EB] border-[#122E46] text-[#122E46] font-semibold"
                          : "bg-[#FAF8F5] border-[#E8E2D5] text-stone-600 hover:bg-[#F2EDE2]/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="sankalpa"
                        checked={formData.sankalpa === sank}
                        onChange={() => setFormData({ ...formData, sankalpa: sank })}
                        className="text-[#122E46] focus:ring-0"
                      />
                      <span>{sank}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 4: Personal Notes / Vedic Birth Details */}
              <div className="space-y-1.5">
                <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#122E46] font-medium">
                  Personal Notes / Astrological Birth Nakshatra <span className="text-stone-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any specific spiritual intention, preferred deity invocation, or astrological birth details for custom sanctification."
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E2D5] text-xs sm:text-sm text-[#122E46] placeholder:text-stone-400 focus:border-[#122E46] focus:outline-none resize-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 text-[#122E46] focus:ring-0 rounded-none cursor-pointer"
                  />
                  <span className="text-[11px] sm:text-xs text-stone-600 font-sans leading-relaxed">
                    I agree to be contacted by Svastimān&apos;s temple sanctuary concierge regarding this sacred consecration. We honor your privacy with complete reverence — zero spam or third-party sharing.
                  </span>
                </label>
                {errors.consent && <p className="text-[11px] text-rose-600 font-sans mt-1">{errors.consent}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#122E46] hover:bg-[#1B3C59] text-white text-xs sm:text-sm font-mono uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#C5A880]" />
                      <span>Registering Consecration Sankalpa...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C5A880]" />
                      <span>Submit Consecration Reservation</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
