export interface BraceletCatalogItem {
  sku: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: { id: string; label: string; src: string; alt: string }[];
  details: {
    ref: string;
    structure: string;
    beadSize: string;
    material: string;
    chakra: string;
    madeIn: string;
  };
  description: string;
}

export const BRACELET_CATALOG: Record<string, BraceletCatalogItem> = {
  BRC01: {
    sku: "BRC01",
    name: "Grade-AAA Natural Amazonite Bracelet",
    price: 1899,
    originalPrice: 2499,
    image: "/images/bracelets/bracelet_amazonite.jpg",
    gallery: [
      {
        id: "main",
        label: "Pedestal View",
        src: "/images/bracelets/bracelet_amazonite.jpg",
        alt: "Grade-AAA Natural Amazonite Bracelet with delicate dried florals",
      },
      {
        id: "lifestyle",
        label: "Sacred Altar",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Amazonite stone bracelet with Lord Shiva and warm temple light",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing natural gemstone bracelets in natural sunlight",
      },
      {
        id: "macro",
        label: "Crystal Texture",
        src: "/images/bracelets/amazonite.jpg",
        alt: "Macro crystalline texture of genuine untreated Amazonite beads",
      },
    ],
    details: {
      ref: "BRC01",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "100% Grade-AAA Natural Amazonite",
      chakra: "Throat & Heart Chakra",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Formed deep within pegmatite mineral veins, Grade-AAA natural Amazonite carries cool, soothing turquoise-green hues known across metaphysical traditions as the Stone of Truth and Courage. Aligns the Throat and Heart Chakras, filtering electromagnetic stress and fostering clear, serene, truthful communication.",
  },
  BRC02: {
    sku: "BRC02",
    name: "7 Chakra Multi-Stone Energy Bracelet",
    price: 2499,
    originalPrice: 3199,
    image: "/images/bracelets/bracelet_7chakra.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_7chakra.jpg",
        alt: "7 Chakra Multi-Stone Energy Bracelet on beige stone with dried florals",
      },
      {
        id: "detail",
        label: "Crystals Detail",
        src: "/images/bracelets/7chakra.jpg",
        alt: "7 natural healing gemstones arranged by chakra spectrum",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing multi-crystal chakra alignment bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with brass Shiva idol and diya",
      },
    ],
    details: {
      ref: "BRC02",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "7 Natural Earth Gemstones",
      chakra: "All 7 Chakras (Root to Crown)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "A comprehensive energetic talisman integrating seven authentic earth crystals carefully tuned to balance every major energy vortex—from Root grounding to Crown illumination. Harmonizes physical stamina with intuitive clarity for holistic vitality.",
  },
  BRC03: {
    sku: "BRC03",
    name: "Royal Lapis Lazuli Intuition Bracelet",
    price: 2199,
    originalPrice: 2799,
    image: "/images/bracelets/bracelet_lapislazuli.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_lapislazuli.jpg",
        alt: "Royal deep blue Lapis Lazuli bracelet with golden pyrite flecks",
      },
      {
        id: "detail",
        label: "Mineral Detail",
        src: "/images/bracelets/lapislazuli.jpg",
        alt: "Macro crystalline view of deep blue lapis with golden pyrite specks",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing natural gemstone bracelets in sunlight",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred gemstone altar display",
      },
    ],
    details: {
      ref: "BRC03",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "Natural Celestial Lapis Lazuli with Pyrite",
      chakra: "Third Eye & Throat Chakra",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Revered since ancient Mesopotamian and Vedic eras as the stone of kings and mystics. Features deep celestial indigo lapis lazuli sprinkled with authentic golden pyrite flecks, activating inner wisdom, mental focus, and spiritual insight.",
  },
  BRC04: {
    sku: "BRC04",
    name: "Golden Tiger Eye Wealth Bracelet",
    price: 1799,
    originalPrice: 2299,
    image: "/images/bracelets/bracelet_tigereye.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_tigereye.jpg",
        alt: "Chatoyant golden Tiger Eye beaded bracelet with dried pampas grass",
      },
      {
        id: "detail",
        label: "Chatoyant Texture",
        src: "/images/bracelets/tigereye.jpg",
        alt: "Macro view of golden-amber silky optical chatoyancy",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing Tiger Eye gemstone bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "BRC04",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "Natural Chatoyant Golden Tiger Eye",
      chakra: "Solar Plexus & Root Chakra",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Displaying a mesmerizing golden-amber chatoyant silk luster. Highly revered as a stone of prosperity, inner resolve, fearlessness, and emotional grounding. Anchors solar vitality into the physical body.",
  },
  BRC05: {
    sku: "BRC05",
    name: "Divine Amethyst Meditative Bracelet",
    price: 2299,
    originalPrice: 2899,
    image: "/images/bracelets/bracelet_amethyst.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_amethyst.jpg",
        alt: "Vibrant purple Amethyst beaded bracelet with dried lavender",
      },
      {
        id: "detail",
        label: "Violet Quartz",
        src: "/images/bracelets/amethyst.jpg",
        alt: "Macro view of natural purple Amethyst crystal beads",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing Amethyst crystal bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "BRC05",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.5mm Round",
      material: "100% Grade-AAA Deep Violet Amethyst",
      chakra: "Crown & Third Eye Chakra",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Radiating tranquil purple frequencies that quiet an overactive mind. Fosters deep meditative absorption, peaceful sleep, and protection against negative auric energies. Carries the purifying violet flame of spiritual awareness.",
  },
  BRC06: {
    sku: "BRC06",
    name: "Rose Quartz Unconditional Love Bracelet",
    price: 1699,
    originalPrice: 2199,
    image: "/images/bracelets/bracelet_rosequartz.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_rosequartz.jpg",
        alt: "Natural soft blush pink Rose Quartz bracelet with dried florals",
      },
      {
        id: "detail",
        label: "Heart Crystal",
        src: "/images/bracelets/rosequartz.jpg",
        alt: "Macro view of translucent pink rose quartz beads",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing Rose Quartz bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "BRC06",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "100% Natural Translucent Rose Quartz",
      chakra: "Anahata (Heart Chakra)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "The quintessential crystal of unconditional compassion, emotional healing, and gentle peace. Bathed in soft blush pink translucency, it dissolves emotional grief, fostering self-acceptance, deep relational harmony, and inner stillness.",
  },
  BRC07: {
    sku: "BRC07",
    name: "Obsidian Black Onyx Shielding Bracelet",
    price: 1699,
    originalPrice: 2199,
    image: "/images/bracelets/bracelet_blackonyx.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_blackonyx.jpg",
        alt: "Glossy obsidian Black Onyx bracelet on beige stone with dried florals",
      },
      {
        id: "detail",
        label: "Onyx Texture",
        src: "/images/bracelets/blackonyx.jpg",
        alt: "Macro view of high-polish obsidian black onyx beads",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing protective gemstone bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "BRC07",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "100% Natural Black Onyx Mineral",
      chakra: "Muladhara (Root Chakra)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "A protective energetic barrier that absorbs and transmutes negative environmental vibrations. Promotes steadfast emotional stamina, mental resilience, and grounded composure during high-stress situations.",
  },
  BRC08: {
    sku: "BRC08",
    name: "Golden Citrine Abundance & Wealth Bracelet",
    price: 1999,
    originalPrice: 2599,
    image: "/images/bracelets/bracelet_citrine.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_citrine.jpg",
        alt: "Honey amber Citrine gemstone bracelet with dried florals",
      },
      {
        id: "detail",
        label: "Solar Crystal",
        src: "/images/bracelets/citrine.jpg",
        alt: "Macro view of luminous golden citrine crystal beads",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing Citrine prosperity bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "BRC08",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "Natural Golden Honey Citrine Quartz",
      chakra: "Manipura (Solar Plexus Chakra)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Known as the Merchant's Stone of Prosperity and Joy. Its bright solar frequencies inspire optimism, creative vitality, manifestation, and financial growth without accumulating dense stagnant energies.",
  },
  BRC09: {
    sku: "BRC09",
    name: "Emerald Green Aventurine Opportunity Bracelet",
    price: 1799,
    originalPrice: 2399,
    image: "/images/bracelets/bracelet_greenaventurine.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/bracelets/bracelet_greenaventurine.jpg",
        alt: "Emerald green aventurine gemstone bracelet with dried florals",
      },
      {
        id: "detail",
        label: "Forest Quartz",
        src: "/images/bracelets/greenaventurine.jpg",
        alt: "Macro view of green aventurine with shimmering mica platelets",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/bracelets/bracelet_wear_lifestyle.jpg",
        alt: "Model wearing Green Aventurine bracelet",
      },
      {
        id: "ambient",
        label: "Altar Display",
        src: "/images/bracelets/bracelet_hero_amazonite_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "BRC09",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "100% Natural Green Aventurine Quartz",
      chakra: "Anahata (Heart Chakra)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Celebrated as the Stone of Opportunity and Good Fortune. Features gentle shimmering mica platelets within rich forest-green quartz, harmonizing emotional balance and opening pathways to unexpected blessings.",
  },
};
