import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mukti Consecrated Mahamala | Sacred Liberation Collection | Svastimān",
  description:
    "Experience Mukti: the consecrated communion of high-altitude Himalayan Panchmukhi Rudraksha, 1 Mukhi Nepali Rudraksha, and sacred Vrindavan Tulsi heartwood. Handcrafted for inner liberation, emotional resilience, and deep Japa meditation.",
  keywords: [
    "Mukti Mala",
    "Mukti Mahamala",
    "1 Mukhi Nepali Rudraksha",
    "Amazonite Bracelet",
    "Consecrated Rudraksha Tulsi Mala",
    "Spiritual Liberation",
    "Chitta Shuddhi",
    "Vedic Japa Mala",
    "Svastiman Mukti",
  ],
  openGraph: {
    title: "Mukti Consecrated Mahamala | Svastimān",
    description:
      "A sacred synthesis of high-altitude Himalayan Rudraksha and aged Vrindavan Tulsi heartwood for inner liberation and deep meditation.",
    url: "https://svastiman.com/mukti",
    siteName: "Svastimān",
    images: [
      {
        url: "/images/mukti/mukti_hero_banner.jpg",
        width: 1920,
        height: 1080,
        alt: "Mukti Amazonite & Sacred Consecrated Artifacts by Svastimān",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function MuktiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
