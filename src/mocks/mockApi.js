const hotelSeeds = [
  ["mock-hotel-1", "The Grand Palace", "Mumbai", "Maharashtra", "Hotel", 12000, 4.8, true, ["Swimming Pool", "Spa", "Gym", "WiFi", "Restaurant", "Bar", "Parking", "Concierge"]],
  ["mock-hotel-2", "Azure Ocean Resort", "Goa", "Goa", "Resort", 9500, 4.9, true, ["Private Beach", "Infinity Pool", "Spa", "WiFi", "Water Sports", "Restaurant", "Bar", "Yoga Classes"]],
  ["mock-hotel-3", "Royal Heritage Haveli", "Jaipur", "Rajasthan", "Hotel", 6500, 4.7, true, ["Heritage Tours", "Rooftop Restaurant", "WiFi", "Pool", "Cultural Events", "Spa", "Parking"]],
  ["mock-hotel-4", "Himalayan Retreat", "Shimla", "Himachal Pradesh", "Resort", 4800, 4.6, false, ["Mountain Views", "Fireplace", "Trekking", "WiFi", "Restaurant", "Bonfire Area", "Library"]],
  ["mock-hotel-5", "Beachfront Serenity Villa", "Kochi", "Kerala", "Villa", 15000, 4.9, true, ["Private Pool", "Backwater Views", "Ayurveda Spa", "WiFi", "Butler Service", "Boat Rides", "Organic Garden"]],
  ["mock-hotel-6", "The Urban Luxe", "Bangalore", "Karnataka", "Hotel", 7500, 4.5, false, ["Rooftop Pool", "Sky Bar", "Business Center", "WiFi", "Gym", "Restaurant", "Parking"]],
  ["mock-hotel-7", "Golden Sands Resort", "Jaisalmer", "Rajasthan", "Resort", 8500, 4.7, false, ["Desert Safari", "Cultural Shows", "Rooftop Dining", "WiFi", "Pool", "Camel Rides", "Star Gazing"]],
  ["mock-hotel-8", "Nirvana Wellness Retreat", "Rishikesh", "Uttarakhand", "Resort", 5500, 4.8, false, ["Yoga Studio", "Ayurveda Center", "Organic Restaurant", "WiFi", "Meditation Hall", "Riverside Walks", "Detox Programs"]],
  ["mock-hotel-9", "Emerald Lake Palace", "Udaipur", "Rajasthan", "Hotel", 13800, 4.9, true, ["Lake View", "Spa", "WiFi", "Restaurant", "Bar", "Boat Transfers", "Concierge"]],
  ["mock-hotel-10", "Cedar Peak Lodge", "Manali", "Himachal Pradesh", "Resort", 6200, 4.6, false, ["Mountain Views", "Ski Concierge", "WiFi", "Bonfire", "Restaurant", "Spa", "Parking"]],
  ["mock-hotel-11", "Coral Reef Escape", "Port Blair", "Andaman and Nicobar Islands", "Resort", 14200, 4.8, true, ["Private Beach", "Diving Center", "WiFi", "Restaurant", "Spa", "Bar", "Airport Transfers"]],
  ["mock-hotel-12", "Ivory Business Hotel", "Hyderabad", "Telangana", "Hotel", 7100, 4.4, false, ["Business Lounge", "WiFi", "Gym", "Restaurant", "Parking", "Airport Transfers", "Meeting Rooms"]],
  ["mock-hotel-13", "Saffron Courtyard Boutique", "Amritsar", "Punjab", "Boutique", 5900, 4.5, false, ["WiFi", "Restaurant", "Cultural Evenings", "Parking", "Tea Lounge", "Concierge", "Spa"]],
  ["mock-hotel-14", "Rainforest Canopy Retreat", "Coorg", "Karnataka", "Resort", 10400, 4.8, true, ["Nature Trails", "Infinity Pool", "WiFi", "Restaurant", "Spa", "Birdwatching", "Bonfire"]],
  ["mock-hotel-15", "Harborline Suites", "Chennai", "Tamil Nadu", "Hotel", 7800, 4.5, false, ["Sea View", "WiFi", "Gym", "Restaurant", "Business Lounge", "Parking", "Airport Transfers"]],
  ["mock-hotel-16", "Lotus Temple Residency", "New Delhi", "Delhi", "Hotel", 11600, 4.7, true, ["Spa", "WiFi", "Restaurant", "Bar", "Gym", "Parking", "Concierge"]],
  ["mock-hotel-17", "Sunset Cliff Resort", "Varkala", "Kerala", "Resort", 9800, 4.8, true, ["Cliff View", "Infinity Pool", "WiFi", "Spa", "Restaurant", "Yoga Deck", "Airport Transfers"]],
  ["mock-hotel-18", "Vintage Vineyard Stay", "Nashik", "Maharashtra", "Boutique", 6900, 4.6, false, ["Vineyard Tours", "WiFi", "Restaurant", "Pool", "Wine Tastings", "Parking", "Spa"]],
  ["mock-hotel-19", "Aurora Snowview Resort", "Gulmarg", "Jammu and Kashmir", "Resort", 13400, 4.9, true, ["Ski Concierge", "Mountain Views", "WiFi", "Spa", "Restaurant", "Fireplace Lounge", "Parking"]],
  ["mock-hotel-20", "Moonlit Dunes Camp", "Kutch", "Gujarat", "Resort", 7200, 4.6, false, ["Desert Excursions", "WiFi", "Cultural Shows", "Restaurant", "Bonfire", "Parking", "Concierge"]],
];

const roomThemeTemplates = {
  Hotel: [
    { code: "STD", name: "Signature Room", multiplier: 0.85, adults: 2, children: 1, bedType: "Queen", roomSize: 320 },
    { code: "DLX", name: "Deluxe Room", multiplier: 1, adults: 2, children: 2, bedType: "King", roomSize: 420 },
    { code: "STE", name: "Executive Suite", multiplier: 1.55, adults: 3, children: 2, bedType: "King", roomSize: 640 },
  ],
  Resort: [
    { code: "GRD", name: "Garden Room", multiplier: 0.8, adults: 2, children: 1, bedType: "Queen", roomSize: 340 },
    { code: "VWS", name: "View Suite", multiplier: 1.08, adults: 2, children: 2, bedType: "King", roomSize: 450 },
    { code: "VLA", name: "Private Villa Suite", multiplier: 1.7, adults: 4, children: 2, bedType: "King", roomSize: 720 },
  ],
  Villa: [
    { code: "PNV", name: "Pavilion Room", multiplier: 0.9, adults: 2, children: 1, bedType: "Queen", roomSize: 360 },
    { code: "BWV", name: "Backwater Villa", multiplier: 1.28, adults: 3, children: 2, bedType: "King", roomSize: 540 },
    { code: "PPL", name: "Private Pool Residence", multiplier: 1.95, adults: 4, children: 2, bedType: "King", roomSize: 840 },
  ],
  Boutique: [
    { code: "CRT", name: "Courtyard Room", multiplier: 0.82, adults: 2, children: 1, bedType: "Queen", roomSize: 300 },
    { code: "ART", name: "Artist Suite", multiplier: 1.05, adults: 2, children: 1, bedType: "King", roomSize: 390 },
    { code: "LFT", name: "Heritage Loft", multiplier: 1.48, adults: 3, children: 2, bedType: "King", roomSize: 580 },
  ],
};

const roomImages = [
  ["https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80"],
  ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80", "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=80"],
  ["https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=80", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80"],
];

const coverImages = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
  "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=1200&q=80",
  "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80",
  "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1200&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
];

const offers = [
  { _id: "offer-1", title: "Early Bird Special", description: "Book 30 days in advance and enjoy 30% off on premium stays.", code: "EARLY30", discountType: "PERCENT", discountValue: 30, minBookingAmount: 3000, maxDiscount: 5000, validTill: "2027-12-31T00:00:00.000Z" },
  { _id: "offer-2", title: "Weekend Break", description: "Save 20% on stays of 2 nights or more over the weekend.", code: "WEEKEND20", discountType: "PERCENT", discountValue: 20, minBookingAmount: 2000, maxDiscount: 3000, validTill: "2027-12-31T00:00:00.000Z" },
  { _id: "offer-3", title: "Welcome Gift", description: "Enjoy INR 1,500 off your first LuxStay booking.", code: "FIRST1500", discountType: "FLAT", discountValue: 1500, minBookingAmount: 5000, validTill: "2027-12-31T00:00:00.000Z" },
  { _id: "offer-4", title: "Suite Dreams", description: "Get 25% off when you book any suite or villa category.", code: "SUITE25", discountType: "PERCENT", discountValue: 25, minBookingAmount: 8000, maxDiscount: 6000, validTill: "2027-12-31T00:00:00.000Z" },
];

const hotels = hotelSeeds.map(([id, name, city, state, propertyType, basePricePerNight, averageRating, isFeatured, amenities], index) => ({
  _id: id,
  hotelCode: `HTL${String(index + 1).padStart(3, "0")}`,
  name,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  description: `${name} offers a polished ${propertyType.toLowerCase()} experience in ${city}, with refined hospitality, fast check-in, and thoughtfully designed spaces for modern travelers.`,
  starRating: propertyType === "Boutique" ? 4 : propertyType === "Villa" ? 5 : index % 4 === 0 ? 5 : 4,
  propertyType,
  address: {
    addressLine1: `${index + 10} Signature Avenue`,
    city,
    state,
    country: "India",
    pincode: `40${String(index + 1).padStart(4, "0")}`,
  },
  amenities,
  pricing: { basePricePerNight, currency: "INR" },
  averageRating,
  totalReviews: 80 + index * 9,
  status: "active",
  isFeatured,
  coverImage: coverImages[index % coverImages.length],
  images: [
    coverImages[index % coverImages.length],
    ...roomImages[index % roomImages.length],
  ],
  contact: { email: `stay${index + 1}@luxstaymock.com`, phone: `+91 98${String(10000000 + index).slice(0, 8)}` },
  policies: { checkInTime: "14:00", checkOutTime: "11:00", cancellationPolicy: "Free cancellation until 24 hours before check-in" },
}));

const rooms = hotels.flatMap((hotel, hotelIndex) => {
  const templates = roomThemeTemplates[hotel.propertyType] || roomThemeTemplates.Hotel;
  return templates.map((template, roomIndex) => {
    const totalRooms = 6 + roomIndex * 3 + (hotelIndex % 3);
    const availableRooms = Math.max(0, totalRooms - (roomIndex + 1) - (hotelIndex % 4));
    return {
      _id: `${hotel._id}-room-${roomIndex + 1}`,
      hotelId: hotel._id,
      roomTypeCode: template.code,
      roomTypeName: template.name,
      name: `${hotel.name} ${template.name}`,
      description: `${template.name} with premium comforts, smart layout, and elevated in-room amenities at ${hotel.name}.`,
      maxAdults: template.adults,
      maxChildren: template.children,
      bedType: template.bedType,
      roomSize: template.roomSize,
      amenities: ["AC", "WiFi", "Smart TV", "Mini Bar", ...(roomIndex === 2 ? ["Jacuzzi", "Living Area"] : roomIndex === 1 ? ["Bathtub"] : ["Work Desk"])],
      basePrice: Math.round(hotel.pricing.basePricePerNight * template.multiplier),
      extraAdultPrice: Math.round(hotel.pricing.basePricePerNight * 0.12),
      extraChildPrice: Math.round(hotel.pricing.basePricePerNight * 0.06),
      totalRooms,
      availableRooms,
      status: availableRooms > 0 ? "available" : "sold_out",
      images: roomImages[roomIndex % roomImages.length],
      averageRating: hotel.averageRating,
      hotelName: hotel.name,
    };
  });
});

const reviews = hotels.flatMap((hotel, hotelIndex) => {
  const hotelRooms = rooms.filter((room) => room.hotelId === hotel._id);
  return Array.from({ length: 3 }).map((_, reviewIndex) => ({
    _id: `${hotel._id}-review-${reviewIndex + 1}`,
    rating: 4 + ((hotelIndex + reviewIndex) % 2),
    comment: [
      "Beautiful property, smooth check-in, and the room felt genuinely premium.",
      "Great location and polished service. We would happily stay here again.",
      "The booking experience was easy and the room matched the photos perfectly.",
    ][reviewIndex],
    hotelId: { _id: hotel._id, name: hotel.name },
    roomId: { _id: hotelRooms[reviewIndex % hotelRooms.length]?._id },
    userId: { name: ["Aarav", "Sara", "Nikhil", "Priya", "Ishita"][reviewIndex % 5] },
    createdAt: new Date(2026, 3, 10 + hotelIndex + reviewIndex).toISOString(),
  }));
});

const hotelsWithSummary = hotels.map((hotel) => {
  const hotelRooms = rooms.filter((room) => room.hotelId === hotel._id);
  const prices = hotelRooms.map((room) => room.basePrice);
  return {
    ...hotel,
    roomCount: hotelRooms.length,
    availableInventory: hotelRooms.reduce((sum, room) => sum + room.availableRooms, 0),
    totalInventory: hotelRooms.reduce((sum, room) => sum + room.totalRooms, 0),
    roomTypes: hotelRooms.map((room) => room.roomTypeName),
    priceRange: { min: Math.min(...prices), max: Math.max(...prices) },
    price: Math.min(...prices),
  };
});

function normalizeArgs(args) {
  if (typeof args === "string") return { url: args, method: "GET", params: {} };
  return {
    url: args?.url || "",
    method: (args?.method || "GET").toUpperCase(),
    params: args?.params || {},
    body: args?.body,
  };
}

function includesText(value, query) {
  return String(value || "").toLowerCase().includes(String(query || "").toLowerCase());
}

function filterHotels(params = {}) {
  let list = [...hotelsWithSummary];

  if (params.location) {
    list = list.filter((hotel) =>
      [hotel.name, hotel.address.city, hotel.address.state].some((field) => includesText(field, params.location))
    );
  }
  if (params.search) {
    list = list.filter((hotel) =>
      [hotel.name, hotel.address.city, hotel.description].some((field) => includesText(field, params.search))
    );
  }
  if (params.stars) {
    const stars = String(params.stars).split(",").map(Number).filter(Boolean);
    list = list.filter((hotel) => stars.includes(hotel.starRating));
  }
  if (params.amenities) {
    const amenities = String(params.amenities).split(",").map((item) => item.trim().toLowerCase()).filter(Boolean);
    list = list.filter((hotel) => amenities.every((amenity) => hotel.amenities.some((item) => item.toLowerCase().includes(amenity))));
  }
  if (params.propertyType) {
    const types = String(params.propertyType).split(",").map((item) => item.trim().toLowerCase());
    list = list.filter((hotel) => types.includes(hotel.propertyType.toLowerCase()));
  }
  if (params.roomType) {
    const roomTypes = String(params.roomType).split(",").map((item) => item.trim().toLowerCase());
    list = list.filter((hotel) => hotel.roomTypes.some((roomType) => roomTypes.some((target) => roomType.toLowerCase().includes(target))));
  }
  if (params.availableOnly === true || params.availableOnly === "true") {
    list = list.filter((hotel) => hotel.availableInventory > 0);
  }
  if (params.minPrice) list = list.filter((hotel) => hotel.priceRange.min >= Number(params.minPrice));
  if (params.maxPrice) list = list.filter((hotel) => hotel.priceRange.min <= Number(params.maxPrice));

  if (params.sort === "price_asc") list.sort((a, b) => a.priceRange.min - b.priceRange.min);
  else if (params.sort === "price_desc") list.sort((a, b) => b.priceRange.min - a.priceRange.min);
  else if (params.sort === "rating") list.sort((a, b) => b.averageRating - a.averageRating);
  else list.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));

  const limit = Math.min(Math.max(Number(params.limit) || 10, 1), 50);
  const page = Math.max(Number(params.page) || 1, 1);
  const start = (page - 1) * limit;
  const sliced = list.slice(start, start + limit);

  return {
    status: true,
    data: sliced,
    total: list.length,
    page,
    limit,
    totalPages: Math.max(1, Math.ceil(list.length / limit)),
  };
}

function filterRooms(hotelId, params = {}) {
  let list = rooms.filter((room) => room.hotelId === hotelId);
  if (params.minPrice) list = list.filter((room) => room.basePrice >= Number(params.minPrice));
  if (params.maxPrice) list = list.filter((room) => room.basePrice <= Number(params.maxPrice));
  if (params.roomType) list = list.filter((room) => includesText(room.roomTypeName, params.roomType));
  if (params.availableOnly === true || params.availableOnly === "true") list = list.filter((room) => room.availableRooms > 0);
  if (params.sort === "price_asc") list.sort((a, b) => a.basePrice - b.basePrice);
  else if (params.sort === "price_desc") list.sort((a, b) => b.basePrice - a.basePrice);
  else if (params.sort === "size_desc") list.sort((a, b) => b.roomSize - a.roomSize);
  return list;
}

function buildResponse(data) {
  return { data };
}

export function getMockApiResponse(args) {
  const { url, method, params, body } = normalizeArgs(args);
  const cleanUrl = url.startsWith("/") ? url : `/${url}`;

  if (method === "GET" && (cleanUrl === "/hotel" || cleanUrl === "/hotel/getAll")) {
    return buildResponse(filterHotels(params));
  }

  if (method === "GET" && cleanUrl.startsWith("/hotel/")) {
    const id = cleanUrl.split("/").pop();
    const hotel = hotelsWithSummary.find((item) => item._id === id);
    if (!hotel) return null;
    return buildResponse({
      status: true,
      data: {
        ...hotel,
        rooms: rooms.filter((room) => room.hotelId === id),
        reviews: reviews.filter((review) => review.hotelId._id === id),
      },
    });
  }

  if (method === "GET" && cleanUrl === "/room/getAll") {
    return buildResponse({ status: true, data: rooms.map((room) => ({ ...room, hotelId: hotelsWithSummary.find((hotel) => hotel._id === room.hotelId) })) });
  }

  if (method === "GET" && cleanUrl.startsWith("/room/hotel/")) {
    const hotelId = cleanUrl.split("/").pop();
    return buildResponse({ status: true, data: filterRooms(hotelId, params), total: filterRooms(hotelId, params).length });
  }

  if (method === "GET" && (cleanUrl.startsWith("/room/get/") || cleanUrl.startsWith("/room/"))) {
    const id = cleanUrl.split("/").pop();
    const room = rooms.find((item) => item._id === id);
    if (!room) return null;
    return buildResponse({ status: true, data: { ...room, hotelId: hotelsWithSummary.find((hotel) => hotel._id === room.hotelId) } });
  }

  if (method === "GET" && (cleanUrl === "/review" || cleanUrl === "/review/getAll")) {
    return buildResponse({ status: true, data: reviews });
  }

  if (method === "GET" && cleanUrl.startsWith("/review/")) {
    const hotelId = cleanUrl.split("/").pop();
    return buildResponse({ status: true, data: reviews.filter((review) => review.hotelId._id === hotelId) });
  }

  if (method === "GET" && cleanUrl === "/offer") {
    return buildResponse({ status: true, data: offers });
  }

  if (method === "GET" && cleanUrl.startsWith("/offer/code/")) {
    const code = cleanUrl.split("/").pop()?.toUpperCase();
    const offer = offers.find((item) => item.code === code);
    if (!offer) return buildResponse({ status: false, message: "Coupon not found or expired" });
    return buildResponse({ status: true, data: offer });
  }

  if (method === "POST" && cleanUrl === "/offer/apply") {
    const code = String(body?.code || "").toUpperCase();
    const bookingAmount = Number(body?.amount || 0);
    const offer = offers.find((item) => item.code === code);
    if (!offer) {
      return { error: { status: 400, data: { message: "Invalid or expired coupon" } } };
    }
    if (bookingAmount < Number(offer.minBookingAmount || 0)) {
      return { error: { status: 400, data: { message: `Minimum booking amount of ₹${offer.minBookingAmount} required for this coupon` } } };
    }
    let discountAmount = offer.discountType === "PERCENT" ? Math.round((bookingAmount * offer.discountValue) / 100) : offer.discountValue;
    if (offer.maxDiscount) discountAmount = Math.min(discountAmount, offer.maxDiscount);
    return buildResponse({
      status: true,
      message: "Coupon applied successfully",
      data: { ...offer, discountAmount },
    });
  }

  return null;
}
