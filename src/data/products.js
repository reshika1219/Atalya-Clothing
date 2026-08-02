export const PRODUCTS = [
  {
    id: "prod-001",
    name: "The Obsidian Silk Trench Coat",
    tagline: "High-structure minimalist outerwear crafted from heavy Italian silk blend.",
    price: 28500,
    originalPrice: 32000,
    gender: "Unisex",
    category: "Outerwear",
    rating: 4.9,
    reviewsCount: 28,
    isNew: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Obsidian Black", hex: "#0b0b0e" },
      { name: "Champagne Gold", hex: "#d4af37" },
      { name: "Slate Charcoal", hex: "#2a2a35" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Embodying timeless sophistication, The Obsidian Trench Coat features wide lapels, custom matte hardware, and an adjustable waist belt. Engineered for flawless drape and effortless luxury.",
    fabric: "70% Mulberry Silk, 30% Fine Wool Blend",
    care: "Dry Clean Only. Steam Iron Low."
  },
  {
    id: "prod-002",
    name: "Champagne Gold Velvet Blazer",
    tagline: "Exquisite tailored tuxedo jacket with silk satin lapels.",
    price: 24000,
    originalPrice: 27500,
    gender: "Men",
    category: "Outerwear",
    rating: 5.0,
    reviewsCount: 34,
    isNew: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Champagne Gold", hex: "#d4af37" },
      { name: "Midnight Navy", hex: "#111b2b" },
      { name: "Obsidian Black", hex: "#0b0b0e" }
    ],
    sizes: ["38R", "40R", "42R", "44R"],
    description: "Designed for galas, evening occasions, and red-carpet aesthetics. Features structured shoulders, full inner silk lining, and handcrafted horn buttons.",
    fabric: "Premium Micro-Velvet with Pure Silk Satin Facings",
    care: "Specialist Dry Clean Only."
  },
  {
    id: "prod-003",
    name: "Elegance Drape Evening Gown",
    tagline: "Architectural satin gown with asymmetrical shoulder detail.",
    price: 34500,
    originalPrice: 39000,
    gender: "Women",
    category: "Evening Wear",
    rating: 4.8,
    reviewsCount: 19,
    isNew: false,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Onyx Black", hex: "#0f0f14" },
      { name: "Emerald Luxe", hex: "#0b3b24" },
      { name: "Deep Crimson", hex: "#4a0e17" }
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "A showstopping silhouette showcasing a fluid bias-cut bodice and thigh-high slit. Engineered to accentuate natural elegance with every stride.",
    fabric: "100% Heavy Charmeuse Silk",
    care: "Dry Clean Only."
  },
  {
    id: "prod-004",
    name: "Minimalist Monogram Oversized Hoodie",
    tagline: "Heavyweight French Terry hoodie featuring subtle tonal A/C embroidery.",
    price: 12500,
    originalPrice: 14500,
    gender: "Unisex",
    category: "Essentials",
    rating: 4.9,
    reviewsCount: 42,
    isNew: true,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Obsidian Black", hex: "#0b0b0e" },
      { name: "Warm Cream", hex: "#ece6d8" },
      { name: "Charcoal Grey", hex: "#2b2b33" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Crafted from 480 GSM organic cotton, offering plush comfort, drop shoulders, double-lined hood, and high-density gold thread monogram detailing on cuff.",
    fabric: "100% Organic Heavyweight Cotton French Terry",
    care: "Machine wash cold inside out. Hang dry."
  },
  {
    id: "prod-005",
    name: "Tailored Italian Wool Trousers",
    tagline: "High-waisted tapered pants with crisp double front pleats.",
    price: 14800,
    originalPrice: 17000,
    gender: "Men",
    category: "Trousers & Pants",
    rating: 4.7,
    reviewsCount: 15,
    isNew: false,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Charcoal Black", hex: "#17171d" },
      { name: "Camel Sand", hex: "#b59b7c" },
      { name: "Deep Navy", hex: "#182030" }
    ],
    sizes: ["30", "32", "34", "36"],
    description: "Expertly tailored with side adjusters and blind hems for a bespoke drape. Ideal for both formal styling and elevate-casual pairing.",
    fabric: "Super 120s Italian Virgin Wool",
    care: "Dry Clean Only."
  },
  {
    id: "prod-006",
    name: "A/C Signature Satin Button Shirt",
    tagline: "Fluid silk satin button-up with camp collar and gold engraved buttons.",
    price: 9800,
    originalPrice: 11500,
    gender: "Unisex",
    category: "Shirts & Tops",
    rating: 4.9,
    reviewsCount: 51,
    isNew: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Onyx Black", hex: "#0e0e12" },
      { name: "Champagne Cream", hex: "#f3e8d2" },
      { name: "Burgundy Satin", hex: "#4a121a" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A signature statement piece featuring a relaxed contemporary cut, subtle sheen, and reinforced french seams.",
    fabric: "95% Pure Silk Satin, 5% Elastane",
    care: "Hand Wash Cold or Gentle Dry Clean."
  },
  {
    id: "prod-007",
    name: "Midnight Black Pleated Maxi Dress",
    tagline: "High-neck pleated gown with delicate waist cinch.",
    price: 22000,
    originalPrice: 25000,
    gender: "Women",
    category: "Evening Wear",
    rating: 4.8,
    reviewsCount: 23,
    isNew: false,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Midnight Black", hex: "#0a0a0f" },
      { name: "Nude Ivory", hex: "#e8dcd0" }
    ],
    sizes: ["S", "M", "L"],
    description: "Flowing micro-pleats that bounce effortlessly with movement. Includes an optional gold chain accent belt.",
    fabric: "Recycled Luxe Georgette Silk",
    care: "Dry Clean Only."
  },
  {
    id: "prod-008",
    name: "Structured Double-Breasted Suit Set",
    tagline: "Complete 2-piece modern sharp suit in deep midnight tone.",
    price: 38000,
    originalPrice: 42000,
    gender: "Men",
    category: "Outerwear",
    rating: 5.0,
    reviewsCount: 17,
    isNew: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Midnight Onyx", hex: "#101217" },
      { name: "Smoky Quartz", hex: "#2b2826" }
    ],
    sizes: ["38R", "40R", "42R", "44R"],
    description: "Power tailoring redefine. Features peak lapels, double-breasted 6-button closure, and slim matching trousers.",
    fabric: "100% Fine Merino Wool Super 140s",
    care: "Specialist Dry Clean Only."
  },
  {
    id: "prod-009",
    name: "Aura Silk Cami & Pants Lounge Set",
    tagline: "Ultra-soft silk two-piece lounge ensemble.",
    price: 18500,
    originalPrice: 21000,
    gender: "Women",
    category: "Essentials",
    rating: 4.9,
    reviewsCount: 29,
    isNew: false,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Champagne Nude", hex: "#ebd5be" },
      { name: "Obsidian Black", hex: "#0b0b0e" }
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "Designed for versatile luxury—effortless home loungewear that transitions seamlessly to high-fashion evening styling.",
    fabric: "100% Mulberry Silk",
    care: "Hand Wash Cold."
  },
  {
    id: "prod-010",
    name: "Cashmere Blend Chunky Knit Sweater",
    tagline: "Relaxed high-neck rib sweater with dropped sleeve seams.",
    price: 16500,
    originalPrice: 19000,
    gender: "Unisex",
    category: "Shirts & Tops",
    rating: 4.7,
    reviewsCount: 38,
    isNew: false,
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Oatmeal Beige", hex: "#d8cca3" },
      { name: "Ink Black", hex: "#0c0c11" }
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Sumptuous warmth meeting minimalist lines. Heavyweight rib knit that holds its silhouette wash after wash.",
    fabric: "50% Cashmere, 50% Organic Merino Wool",
    care: "Hand wash cold. Dry flat."
  }
];

export const CATEGORIES = ["All", "Outerwear", "Evening Wear", "Shirts & Tops", "Trousers & Pants", "Essentials"];

export const GENDERS = ["All", "Men", "Women", "Unisex"];
