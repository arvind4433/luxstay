export const EXPERIENCES = [
  {
    slug: "fine-dining",
    title: "Fine Dining",
    eyebrow: "Curated culinary stays",
    description:
      "Indulge in signature culinary moments, curated tasting menus, and intimate evenings that feel distinctly LuxStay.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    intro:
      "From chef's table dinners to private terrace breakfasts, this experience is built for guests who travel through taste.",
    highlights: [
      "Chef-led tasting menus with locally inspired courses",
      "Private dining corners for anniversaries and intimate celebrations",
      "Sunset mocktail lounges and curated dessert pairings",
    ],
    features: [
      {
        title: "Signature restaurant access",
        description:
          "Stay at properties where every meal feels intentional, elegant, and worth planning around.",
      },
      {
        title: "Celebration-ready service",
        description:
          "Anniversary dinners, proposal setups, and custom table styling can be coordinated in advance.",
      },
      {
        title: "Stay and dine packages",
        description:
          "Bundle room upgrades with breakfast, tasting menus, and curated evening experiences.",
      },
    ],
    stats: [
      { label: "Dining Venues", value: "18+" },
      { label: "Chef Specials", value: "40+" },
      { label: "Private Setups", value: "On Request" },
    ],
    ctas: [
      { label: "Browse Hotels", to: "/hotels" },
      { label: "View Offers", to: "/offers" },
      { label: "Contact Concierge", to: "/contact" },
    ],
  },
  {
    slug: "luxury-stays",
    title: "Luxury Stays",
    eyebrow: "Refined suites and villas",
    description:
      "Step into refined rooms, warm textures, and skyline-facing suites designed for slower, richer stays.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Designed for guests who want more than just a room, Luxury Stays brings together premium comfort, tailored service, and standout spaces.",
    highlights: [
      "Premium suites with design-led interiors and elevated comfort",
      "Early check-in and flexible stay support on select properties",
      "Perfect for staycations, work retreats, and special weekends",
    ],
    features: [
      {
        title: "Curated room categories",
        description:
          "Explore signature suites, family-ready rooms, and premium stays with thoughtful amenities throughout.",
      },
      {
        title: "Tailored arrival support",
        description:
          "Airport pickups, welcome amenities, and room preference notes can be planned ahead.",
      },
      {
        title: "Balanced comfort and access",
        description:
          "Stay close to city centers while enjoying quieter floors, lounge access, and room upgrades.",
      },
    ],
    stats: [
      { label: "Premium Rooms", value: "120+" },
      { label: "Top Rated Hotels", value: "35+" },
      { label: "Guest Score", value: "4.8/5" },
    ],
    ctas: [
      { label: "Explore Rooms", to: "/rooms" },
      { label: "See Hotels", to: "/hotels" },
      { label: "Get Help", to: "/help" },
    ],
  },
  {
    slug: "skyline-views",
    title: "Skyline Views",
    eyebrow: "Elevated city moments",
    description:
      "Discover observation-style vantage points, sunset lounges, and city panoramas that elevate every arrival.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    intro:
      "If your ideal stay includes rooftops, city lights, and dramatic evening views, this collection was built for you.",
    highlights: [
      "Rooftop lounges and high-floor rooms with sweeping city perspectives",
      "Best suited for couples, weekend escapes, and evening-driven itineraries",
      "Close to business districts, nightlife, and premium dining spots",
    ],
    features: [
      {
        title: "View-first room picks",
        description:
          "We highlight rooms and hotels where the skyline becomes part of the stay itself.",
      },
      {
        title: "Sunset and nightscape access",
        description:
          "Choose stays with rooftop decks, lounges, and view corridors ideal for memorable evenings.",
      },
      {
        title: "Central location advantage",
        description:
          "Stay near landmarks, premium shopping, and transport hubs without losing the visual wow factor.",
      },
    ],
    stats: [
      { label: "Skyline Hotels", value: "24+" },
      { label: "Rooftop Spaces", value: "16+" },
      { label: "Prime Districts", value: "8 Cities" },
    ],
    ctas: [
      { label: "Find City Hotels", to: "/hotels" },
      { label: "Browse Destinations", to: "/destinations" },
      { label: "Talk to Support", to: "/support" },
    ],
  },
  {
    slug: "wellness-escape",
    title: "Wellness Escape",
    eyebrow: "Restore, reset, recharge",
    description:
      "Unwind with rooftop pools, restorative spa rituals, and quiet corners made for complete reset.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=80",
    intro:
      "This experience is for guests seeking calm: slower mornings, spa time, poolside resets, and properties that help you switch off fully.",
    highlights: [
      "Spa-friendly stays with pool, treatment, and recovery amenities",
      "Ideal for solo resets, couples retreats, and low-stimulation weekends",
      "Comfort-led locations with leisure zones and restorative add-ons",
    ],
    features: [
      {
        title: "Wellness-focused amenities",
        description:
          "Choose hotels offering spa access, steam rooms, yoga areas, and calm social spaces.",
      },
      {
        title: "Flexible retreat planning",
        description:
          "Build a lighter itinerary with room service, pool sessions, and onsite wellness options.",
      },
      {
        title: "Recovery-first stays",
        description:
          "Perfect for digital detox weekends, recharge trips, and comfort-led short breaks.",
      },
    ],
    stats: [
      { label: "Spa Access Hotels", value: "20+" },
      { label: "Poolside Stays", value: "28+" },
      { label: "Retreat Packages", value: "Seasonal" },
    ],
    ctas: [
      { label: "See Wellness Hotels", to: "/hotels" },
      { label: "Check Offers", to: "/offers" },
      { label: "Plan Your Stay", to: "/contact" },
    ],
  },
];

export const EXPERIENCES_BY_SLUG = EXPERIENCES.reduce((acc, experience) => {
  acc[experience.slug] = experience;
  return acc;
}, {});
