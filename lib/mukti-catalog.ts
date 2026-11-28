export interface MuktiCatalogItem {
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
    deity: string;
    madeIn: string;
  };
  description: string;
  isBracelet?: boolean;
}

export const MUKTI_CATALOG: Record<string, MuktiCatalogItem> = {
  MKT01: {
    sku: "MKT01",
    name: "1 Mukhi Nepali Rudraksha (925 Silver)",
    price: 18500,
    originalPrice: 22000,
    image: "/images/mukti/products/prod_1_mukhi_silver_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_1_mukhi_silver_silk.jpg",
        alt: "Rare 1 Mukhi Nepali Rudraksha with 925 sterling silver cap on cream silk",
      },
      {
        id: "cap",
        label: "Silver Capping",
        src: "/images/mukti/products/prod_1_mukhi_silver.jpg",
        alt: "Intricate hand-engraved 925 sterling silver cap detail",
      },
      {
        id: "locule",
        label: "X-Ray Chamber",
        src: "/images/mukti/1_mukhi_nepali_rudraksha.jpg",
        alt: "Digital radiography certificate confirming single natural seed locule",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva Murti and consecrated diya",
      },
    ],
    details: {
      ref: "MKT01",
      structure: "Natural Half-Moon Single Locule",
      beadSize: "24.5mm Collector Seed",
      material: "100% Wild Nepali Rudraksha & 925 Silver",
      deity: "Lord Shiva (Eka Mukhi)",
      madeIn: "Eastern Nepal / Varanasi",
    },
    description:
      "The rarest and most auspicious seed in Vedic metaphysics, representing pure formless consciousness (Shiva Tattva). Examined under multi-angle digital radiography (X-Ray) to confirm the unbroken internal natural chamber. Dispatched with a physical serialized laboratory authenticity deed and handcrafted 925 hallmarked sterling silver capping.",
  },
  MKT02: {
    sku: "MKT02",
    name: "Mukti Consecrated Mahamala (108 Beads)",
    price: 4899,
    originalPrice: 5999,
    image: "/images/mukti/products/prod_rudraksha_108_mala_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_rudraksha_108_mala_silk.jpg",
        alt: "Consecrated 108 Nepali Rudraksha Mahamala on warm silk with antique cylinder barrel",
      },
      {
        id: "knots",
        label: "Brahmagranthi",
        src: "/images/mukti/products/prod_rudraksha_chambers.jpg",
        alt: "Detail of sacred Brahmagranthi knots between natural Rudraksha beads",
      },
      {
        id: "model",
        label: "Devotional Wear",
        src: "/images/mukti/category_rudraksha.jpg",
        alt: "Devotee wearing genuine consecrated Himalayan Nepali Rudraksha Mala",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Consecrated Rudraksha altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT02",
      structure: "108 Beads + Guru Bead",
      beadSize: "8.0mm Round",
      material: "100% Genuine 5-Mukhi Himalayan Rudraksha",
      deity: "Lord Shiva / Mahamrityunjaya",
      madeIn: "Eastern Nepal / Braj Dham",
    },
    description:
      "Handcrafted 108-bead consecrated meditation mala. Each seed is hand-selected from high-altitude Eastern Nepal groves (2,400m+), sorted for symmetrical mukhi clefts, and knotted with traditional Brahmagranthi ties. Imbued with Mahamrityunjaya mantras for deep meditation and chitta shuddhi.",
  },
  MKT03: {
    sku: "MKT03",
    name: "Siddha Rudraksha Om Bracelet",
    price: 2199,
    originalPrice: 2799,
    image: "/images/mukti/products/prod_rudraksha_om_bracelet_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_rudraksha_om_bracelet_silk.jpg",
        alt: "Siddha Rudraksha Om Bracelet with golden Om medallion on cream silk",
      },
      {
        id: "om",
        label: "Om Medallion",
        src: "/images/mukti/products/prod_shiva_om_talisman.jpg",
        alt: "Engraved brass Om sacred talisman charm",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/mukti/category_gemstone_bracelets.jpg",
        alt: "Devotee wrist wear view of sacred beads",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT03",
      structure: "4-Strand High-Tensile Elastic",
      beadSize: "8.5mm Natural Round",
      material: "Selected Nepali Rudraksha & Solid Brass Om",
      deity: "Lord Shiva (Pranava Om)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "A protective daily wrist talisman uniting energized Nepali Rudraksha beads with an exquisitely engraved solid Om medallion charm for aura shielding, stress alleviation, and constant remembrance of divine peace.",
    isBracelet: true,
  },
  MKT04: {
    sku: "MKT04",
    name: "7 Chakra Rudraksha Energy Bracelet",
    price: 2499,
    originalPrice: 2999,
    image: "/images/mukti/products/prod_7chakra_bracelet_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_7chakra_bracelet_silk.jpg",
        alt: "7 Chakra Rudraksha Energy Bracelet on pure silk",
      },
      {
        id: "detail",
        label: "Crystals Detail",
        src: "/images/mukti/products/prod_7chakra_bracelet.jpg",
        alt: "7 natural healing gemstones paired with genuine Rudraksha seeds",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/mukti/category_gemstone_bracelets.jpg",
        alt: "Wrist wear view in warm light",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT04",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "5-Mukhi Nepali Rudraksha & 7 Earth Crystals",
      deity: "Trideva & Navagraha",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Unites the bio-electric grounding power of genuine 5-Mukhi Rudraksha with seven natural earth gemstones corresponding to the subtle chakra centers. Clears psychic debris and anchors vibrant physical energy.",
    isBracelet: true,
  },
  MKT05: {
    sku: "MKT05",
    name: "Gauri Shankar Himalayan Rudraksha",
    price: 12999,
    originalPrice: 15500,
    image: "/images/mukti/products/prod_gauri_shankar_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_gauri_shankar_silk.jpg",
        alt: "Rare naturally joined Gauri Shankar Himalayan Rudraksha on silk",
      },
      {
        id: "detail",
        label: "Joint Texture",
        src: "/images/mukti/products/prod_gauri_shankar.jpg",
        alt: "Macro view of natural seam uniting twin Rudraksha seeds",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/mukti/category_rudraksha.jpg",
        alt: "Devotee wearing genuine sacred rudraksha",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT05",
      structure: "Naturally Fused Twin Seed",
      beadSize: "26.0mm Jumbo Seed",
      material: "100% Rare Wild Nepali Rudraksha",
      deity: "Shiva & Parvati (Ardhanarishvara)",
      madeIn: "Eastern Nepal (2,400m+)",
    },
    description:
      "Two naturally conjoined seeds representing the primordial union of Shiva and Shakti (Consciousness and Divine Energy). Brings profound relationship harmony, family peace, and spiritual awakening.",
  },
  MKT06: {
    sku: "MKT06",
    name: "7 Mukhi Nepali Mahalaxmi Rudraksha",
    price: 6499,
    originalPrice: 7999,
    image: "/images/mukti/products/prod_7_mukhi_mahalaxmi_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_7_mukhi_mahalaxmi_silk.jpg",
        alt: "7 Mukhi Nepali Mahalaxmi Rudraksha on cream silk with 925 silver cap",
      },
      {
        id: "clefts",
        label: "7 Facets",
        src: "/images/mukti/products/prod_7_mukhi_mahalaxmi.jpg",
        alt: "Macro view of seven natural deep mukhi fissures",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/mukti/category_rudraksha.jpg",
        alt: "Devotee wearing genuine sacred rudraksha",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT06",
      structure: "Natural 7-Locule Seed in 925 Silver",
      beadSize: "18.5mm Collector Seed",
      material: "Wild High-Altitude Nepali Rudraksha",
      deity: "Goddess Mahalaxmi & Saptarishi",
      madeIn: "Eastern Nepal / Varanasi",
    },
    description:
      "Blessed by Goddess Mahalaxmi and governed by the planet Saturn (Shani). Removes financial obstacles, bestows steady prosperity, and shields the wearer from sudden misfortune.",
  },
  MKT07: {
    sku: "MKT07",
    name: "Shiva Trishul Talisman Rudraksha",
    price: 2999,
    originalPrice: 3599,
    image: "/images/mukti/products/prod_shiva_trishul_talisman_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_shiva_trishul_talisman_silk.jpg",
        alt: "Shiva Trishul & Damru sacred pendant with genuine Nepali Rudraksha beads",
      },
      {
        id: "detail",
        label: "Trishul Craft",
        src: "/images/mukti/products/prod_braided_om_rudraksha_silk.jpg",
        alt: "Detail of antique silver finish Trishul talisman",
      },
      {
        id: "model",
        label: "Model Wear",
        src: "/images/mukti/category_rudraksha.jpg",
        alt: "Devotee wearing genuine sacred rudraksha",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT07",
      structure: "Sacred Cotton Cord with Talisman",
      beadSize: "7.0mm Round",
      material: "5-Mukhi Rudraksha & Solid Cast Trishul",
      deity: "Lord Shiva (Trishul & Damru)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Features a finely detailed Shiva Trishul (Trident) and Damru amulet paired with 5-Mukhi high-altitude Rudraksha beads. Symbolizes the dissolution of physical, mental, and spiritual afflictions.",
  },
  MKT08: {
    sku: "MKT08",
    name: "Tiger Eye & Rudraksha Protection Bracelet",
    price: 2299,
    originalPrice: 2899,
    image: "/images/mukti/products/prod_tigereye_rudraksha_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_tigereye_rudraksha_silk.jpg",
        alt: "Golden Tiger Eye combined with energized Rudraksha beads on silk",
      },
      {
        id: "detail",
        label: "Beads Detail",
        src: "/images/mukti/products/prod_tigereye_bracelet.jpg",
        alt: "Golden chatoyant tiger eye quartz and natural rudraksha beads",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/mukti/category_gemstone_bracelets.jpg",
        alt: "Model wearing protective wrist talisman",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT08",
      structure: "4-Strand High-Tensile Stretch",
      beadSize: "8.0mm Round",
      material: "Golden Tiger Eye & 5-Mukhi Rudraksha",
      deity: "Lord Shiva & Solar Deities",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "A potent fusion of grounding Nepali Rudraksha and radiant chatoyant Golden Tiger Eye. Stabilizes inner courage, wards off envy and psychic attack, and boosts mental clarity during pivotal life decisions.",
    isBracelet: true,
  },
  MKT09: {
    sku: "MKT09",
    name: "Braided Om Rudraksha Silk Talisman",
    price: 2599,
    originalPrice: 3199,
    image: "/images/mukti/products/prod_braided_om_rudraksha_silk.jpg",
    gallery: [
      {
        id: "main",
        label: "Overview",
        src: "/images/mukti/products/prod_braided_om_rudraksha_silk.jpg",
        alt: "Hand-braided black silk cord with energized Nepali Rudraksha and Om charm",
      },
      {
        id: "detail",
        label: "Braid Detail",
        src: "/images/mukti/products/prod_rudraksha_braided.jpg",
        alt: "Macro view of master braided threadwork and silver accents",
      },
      {
        id: "wear",
        label: "Wrist Wear",
        src: "/images/mukti/category_gemstone_bracelets.jpg",
        alt: "Wrist wear view of braided talisman",
      },
      {
        id: "altar",
        label: "Sacred Altar",
        src: "/images/mukti/mukti_hero_rudraksha_shiva.jpg",
        alt: "Sacred altar display with Lord Shiva",
      },
    ],
    details: {
      ref: "MKT09",
      structure: "Adjustable Braided Silk Tie",
      beadSize: "8.5mm Natural Bead",
      material: "Natural Nepali Rudraksha & Silver Om",
      deity: "Lord Shiva (Pranava Om)",
      madeIn: "Svastimān Artisan Studio",
    },
    description:
      "Masterfully hand-braided with durable sacred silk thread, uniting a collector-grade Nepali Rudraksha with a solid Om medallion charm. Features an adjustable sliding knot for custom, comfortable fit on any wrist.",
    isBracelet: true,
  },
};
