"use client";

import React from "react";
import { PerspectiveGallery, GalleryItem } from "@/components/ui/perspective-gallery";

export const MUKTI_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "prod-1-mukhi-nepali",
    title: "1 Mukhi Nepali Rudraksha",
    subtitle: "Solid 925 Sterling Silver Lotus Cap",
    price: 18500,
    badge: "Rare Alpine Locule",
    image: "/images/mukti/1_mukhi_nepali_rudraksha.jpg",
    hue: 30,
  },
  {
    id: "prod-amazonite-bracelet",
    title: "Natural Amazonite Bracelet",
    subtitle: "Grade-AAA Seafoam Turquoise Beads",
    price: 2499,
    badge: "Throat Chakra",
    image: "/images/mukti/amazonite_bracelet.jpg",
    hue: 180,
  },
  {
    id: "prod-mukti-01",
    title: "Mukti Consecrated Mahamala",
    subtitle: "108 Rudraksha & Vrindavan Tulsi Wood",
    price: 4899,
    badge: "108 Japa Beads",
    image: "/images/mukti/3d_mukti_japa_mala.jpg",
    hue: 45,
  },
  {
    id: "prod-amazonite-108-mala",
    title: "Amazonite 108 Japa Mala",
    subtitle: "Hand-Knotted Brahmagranthi Knot",
    price: 5899,
    badge: "Vedic Prana",
    image: "/images/mukti/3d_amazonite_mala.jpg",
    hue: 195,
  },
  {
    id: "disc-tulsi-01",
    title: "Radha Krishna Tulsi Mala",
    subtitle: "Hand-Turned Sacred Heartwood",
    price: 399,
    badge: "Vrindavan Dham",
    image: "/images/products/tulsi/tulsi_01.jpg",
    hue: 40,
  },
  {
    id: "disc-tulsi-02",
    title: "Shri Ram Naam Patta Mala",
    subtitle: "Artisan Carved Leaf Motif",
    price: 449,
    badge: "Carved Leaf",
    image: "/images/products/tulsi/tulsi_02.jpg",
    hue: 35,
  },
];

export function MuktiPerspectiveSection() {
  return (
    <section id="mukti-3d-gallery" className="w-full bg-[#FAF8F5] border-t border-[#E8E2D5]/70">
      <PerspectiveGallery
        title="Sacred Artifacts in 3D Perspective"
        description="Move the pointer across the strip, scroll with cursor, or use arrow keys to explore Nepali Rudraksha & Stone Bracelets."
        items={MUKTI_GALLERY_ITEMS}
        className="bg-[#FAF8F5] py-16 sm:py-24"
      />
    </section>
  );
}
