import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { addDays, format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { DateRange } from "react-date-range";
import {
  CalendarDays,
  ChevronRight,
  LocateFixed,
  Map,
  RotateCcw,
  SlidersHorizontal,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useGetHotelsQuery } from "../../redux/apiSlice";
import { ErrorState, SkeletonGrid } from "../../components/Loader/Loader";
import { formatPrice, getPriceValue } from "../../utils/price";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Hotels.css";

const AMENITY_OPTIONS = ["WiFi", "Pool", "Spa", "Gym", "Restaurant", "Parking", "Bar", "Private Beach"];
const PROPERTY_TYPES = ["Hotel", "Resort", "Villa", "Boutique"];
const ROOM_TYPES = ["Cityline Room", "Sea Horizon Suite", "Beach Loft", "Executive Room", "Bay View Room", "Private Cabana Suite"];
const QUICK_BUDGETS = [
  { label: "Under 3000", min: "", max: "3000" },
  { label: "3000 to 6000", min: "3000", max: "6000" },
  { label: "6000 to 12000", min: "6000", max: "12000" },
  { label: "12000+", min: "12000", max: "" },
];

const BASE_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5000";

function parseList(value) {
  return value ? value.split(",").map((item) => item.trim()).filter(Boolean) : [];
}

function toDisplayDate(value) {
  if (!value) return "Add dates";
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : format(parsed, "EEE, d MMM");
}

function getHotelImage(hotel) {
  const image = hotel?.images?.[0];
  if (!image) return "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80";
  return image.startsWith("http") ? image : `${BASE_URL}/${image}`;
}

function buildResultBadges(hotel) {
  const badges = [];
  if (hotel?.amenities?.includes("Breakfast")) badges.push("Free Breakfast");
  if (hotel?.amenities?.includes("Couple Friendly")) badges.push("Couple Friendly");
  if (hotel?.amenities?.includes("Parking")) badges.push("Parking");
  if (badges.length === 0) {
    (hotel?.roomTypes || []).slice(0, 3).forEach((type) => badges.push(type));
  }
  return badges.slice(0, 3);
}

export default function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const calendarRef = useRef(null);

  const [filters, setFilters] = useState({
    location: searchParams.get("location") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    stars: searchParams.get("stars") ? searchParams.get("stars").split(",").map(Number).filter(Boolean) : [],
    amenities: parseList(searchParams.get("amenities")),
    propertyType: parseList(searchParams.get("propertyType")),
    roomType: parseList(searchParams.get("roomType")),
    sort: searchParams.get("sort") || "rating",
    availableOnly: searchParams.get("availableOnly") === "true",
    page: Math.max(Number(searchParams.get("page")) || 1, 1),
  });

  const [tripMeta, setTripMeta] = useState({
    checkIn: searchParams.get("checkIn") || "",
    checkOut: searchParams.get("checkOut") || "",
    guests: Number(searchParams.get("guests")) || 1,
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedRange = useMemo(() => {
    const startDate = tripMeta.checkIn ? new Date(tripMeta.checkIn) : new Date();
    const fallbackEndDate = addDays(startDate, 1);
    const parsedEnd = tripMeta.checkOut ? new Date(tripMeta.checkOut) : fallbackEndDate;
    const endDate = parsedEnd > startDate ? parsedEnd : fallbackEndDate;

    return [{
      startDate,
      endDate,
      key: "selection",
    }];
  }, [tripMeta.checkIn, tripMeta.checkOut]);

  const queryParams = useMemo(() => {
    const next = {
      sort: filters.sort || "rating",
      page: filters.page,
      limit: 9,
    };

    if (filters.location) next.location = filters.location;
    if (filters.minPrice) next.minPrice = filters.minPrice;
    if (filters.maxPrice) next.maxPrice = filters.maxPrice;
    if (filters.stars.length) next.stars = filters.stars.join(",");
    if (filters.amenities.length) next.amenities = filters.amenities.join(",");
    if (filters.propertyType.length) next.propertyType = filters.propertyType.join(",");
    if (filters.roomType.length) next.roomType = filters.roomType.join(",");
    if (filters.availableOnly) next.availableOnly = true;

    return next;
  }, [filters]);

  const { data, isLoading, isError, refetch, isFetching } = useGetHotelsQuery(queryParams);
  const hotels = data?.hotels || [];
  const total = data?.total || 0;
  const totalPages = data?.totalPages || 1;

  useEffect(() => {
    const next = new URLSearchParams();
    if (filters.location) next.set("location", filters.location);
    if (filters.minPrice) next.set("minPrice", filters.minPrice);
    if (filters.maxPrice) next.set("maxPrice", filters.maxPrice);
    if (filters.stars.length) next.set("stars", filters.stars.join(","));
    if (filters.amenities.length) next.set("amenities", filters.amenities.join(","));
    if (filters.propertyType.length) next.set("propertyType", filters.propertyType.join(","));
    if (filters.roomType.length) next.set("roomType", filters.roomType.join(","));
    if (filters.availableOnly) next.set("availableOnly", "true");
    if (filters.sort && filters.sort !== "rating") next.set("sort", filters.sort);
    if (filters.page > 1) next.set("page", String(filters.page));
    if (tripMeta.checkIn) next.set("checkIn", tripMeta.checkIn);
    if (tripMeta.checkOut) next.set("checkOut", tripMeta.checkOut);
    if (tripMeta.guests > 1) next.set("guests", String(tripMeta.guests));
    setSearchParams(next, { replace: true });
  }, [filters, setSearchParams, tripMeta]);

  const visiblePages = useMemo(() => {
    const start = Math.max(1, filters.page - 2);
    const end = Math.min(totalPages, start + 4);
    const adjustedStart = Math.max(1, end - 4);
    return Array.from({ length: end - adjustedStart + 1 }, (_, index) => adjustedStart + index);
  }, [filters.page, totalPages]);

  const activeFilterCount = [
    filters.location,
    filters.minPrice,
    filters.maxPrice,
    filters.availableOnly,
    ...filters.stars,
    ...filters.amenities,
    ...filters.propertyType,
    ...filters.roomType,
  ].filter(Boolean).length;

  const quickStats = useMemo(() => {
    const inventory = hotels.reduce((sum, hotel) => sum + Number(hotel.availableInventory || 0), 0);
    const avgPrice = hotels.length ? Math.round(hotels.reduce((sum, hotel) => sum + getPriceValue(hotel), 0) / hotels.length) : 0;
    return { inventory, avgPrice };
  }, [hotels]);

  const handleDateRangeChange = (ranges) => {
    const range = ranges.selection;
    if (!range?.startDate || !range?.endDate) return;

    setTripMeta((prev) => ({
      ...prev,
      checkIn: format(range.startDate, "yyyy-MM-dd"),
      checkOut: format(range.endDate, "yyyy-MM-dd"),
    }));
  };

  const filterCounts = useMemo(() => ({
    propertyType: PROPERTY_TYPES.reduce((acc, type) => {
      acc[type] = hotels.filter((hotel) => (hotel.propertyType || "Hotel") === type).length;
      return acc;
    }, {}),
    amenities: AMENITY_OPTIONS.reduce((acc, amenity) => {
      acc[amenity] = hotels.filter((hotel) => hotel.amenities?.includes(amenity)).length;
      return acc;
    }, {}),
    roomType: ROOM_TYPES.reduce((acc, roomType) => {
      acc[roomType] = hotels.filter((hotel) => hotel.roomTypes?.includes(roomType)).length;
      return acc;
    }, {}),
  }), [hotels]);

  const resetFilters = () => {
    setFilters({
      location: "",
      minPrice: "",
      maxPrice: "",
      stars: [],
      amenities: [],
      propertyType: [],
      roomType: [],
      sort: "rating",
      availableOnly: false,
      page: 1,
    });
    setSidebarOpen(false);
  };

  const toggleListFilter = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      page: 1,
      [field]: prev[field].includes(value) ? prev[field].filter((item) => item !== value) : [...prev[field], value],
    }));
  };

  const applyBudget = (min, max) => {
    setFilters((prev) => ({
      ...prev,
      page: 1,
      minPrice: min,
      maxPrice: max,
    }));
  };

  return (
    <div className="hotels-page">
      <section className="results-shell">
        <div className="results-searchbar">
          <div className="results-searchbar__item results-searchbar__item--wide">
            <LocateFixed size={16} />
            <div>
              <span>Destination</span>
              <strong>{filters.location || "All locations"}</strong>
            </div>
          </div>
          <div className="results-searchbar__item results-searchbar__item--calendar" ref={calendarRef}>
            <button
              type="button"
              className="results-searchbar__trigger"
              onClick={() => setCalendarOpen((value) => !value)}
            >
              <CalendarDays size={16} />
              <div>
                <span>Dates</span>
                <strong>{toDisplayDate(tripMeta.checkIn)} - {toDisplayDate(tripMeta.checkOut)}</strong>
              </div>
            </button>

            <AnimatePresence>
              {calendarOpen && (
                <motion.div
                  className="results-calendar-popover"
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="results-calendar-popover__head">
                    <div>
                      <strong>Select your stay dates</strong>
                      <span>Choose check-in and check-out in one flow.</span>
                    </div>
                    <button type="button" className="results-calendar-popover__close" onClick={() => setCalendarOpen(false)}>
                      <X size={16} />
                    </button>
                  </div>

                  <DateRange
                    ranges={selectedRange}
                    onChange={handleDateRangeChange}
                    months={2}
                    direction="horizontal"
                    minDate={new Date()}
                    moveRangeOnFirstSelection={false}
                    editableDateInputs={false}
                    rangeColors={["#0f766e"]}
                    showMonthAndYearPickers
                  />

                  <div className="results-calendar-popover__foot">
                    <span>{toDisplayDate(tripMeta.checkIn)} - {toDisplayDate(tripMeta.checkOut)}</span>
                    <button type="button" className="results-calendar-popover__apply" onClick={() => setCalendarOpen(false)}>
                      Apply dates
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="results-searchbar__item">
            <Users size={16} />
            <div>
              <span>Guests</span>
              <strong>{tripMeta.guests} Adult{tripMeta.guests > 1 ? "s" : ""}</strong>
            </div>
          </div>
        </div>

        <div className="results-breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>{filters.location ? `Hotels in ${filters.location}` : "All Hotels"}</span>
          <em>{isLoading || isFetching ? "Loading..." : `Showing ${total} matching result${total === 1 ? "" : "s"}`}</em>
        </div>

        <div className="results-layout">
          <aside className={`results-sidebar${sidebarOpen ? " open" : ""}`}>
            <button type="button" className="filter-reset-btn filter-reset-btn--top" onClick={resetFilters}>
              <RotateCcw size={14} /> Reset all filters
            </button>

            <div className="results-sidebar__head">
              <div>
                <h3>Filters</h3>
                <p>Applied filters ({activeFilterCount})</p>
              </div>
              <button type="button" className="results-sidebar__close" onClick={() => setSidebarOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="results-filter">
              <div className="results-filter__title">Budget per night</div>
              <div className="budget-chip-grid">
                {QUICK_BUDGETS.map((budget) => {
                  const isActive = filters.minPrice === budget.min && filters.maxPrice === budget.max;
                  return (
                    <button
                      key={budget.label}
                      type="button"
                      className={`budget-chip${isActive ? " active" : ""}`}
                      onClick={() => applyBudget(budget.min, budget.max)}
                    >
                      {budget.label}
                    </button>
                  );
                })}
              </div>
              <div className="filter-price-row">
                <input
                  className="filter-input"
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={(event) => setFilters((prev) => ({ ...prev, minPrice: event.target.value, page: 1 }))}
                />
                <input
                  className="filter-input"
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={(event) => setFilters((prev) => ({ ...prev, maxPrice: event.target.value, page: 1 }))}
                />
              </div>
            </div>

            <div className="results-filter">
              <div className="results-filter__title">User rating</div>
              <div className="filter-check-list">
                {[5, 4, 3].map((star) => (
                  <label key={star} className="filter-check">
                    <input
                      type="checkbox"
                      checked={filters.stars.includes(star)}
                      onChange={() => toggleListFilter("stars", star)}
                    />
                    <span>{star} star & above</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="results-filter">
              <div className="results-filter__title">Property type</div>
              <div className="filter-check-list">
                {PROPERTY_TYPES.map((type) => (
                  <label key={type} className="filter-check">
                    <input
                      type="checkbox"
                      checked={filters.propertyType.includes(type)}
                      onChange={() => toggleListFilter("propertyType", type)}
                    />
                    <span>{type}</span>
                    <em>{filterCounts.propertyType[type] || 0}</em>
                  </label>
                ))}
              </div>
            </div>

            <div className="results-filter">
              <div className="results-filter__title">Amenities</div>
              <div className="filter-check-list">
                {AMENITY_OPTIONS.map((amenity) => (
                  <label key={amenity} className="filter-check">
                    <input
                      type="checkbox"
                      checked={filters.amenities.includes(amenity)}
                      onChange={() => toggleListFilter("amenities", amenity)}
                    />
                    <span>{amenity}</span>
                    <em>{filterCounts.amenities[amenity] || 0}</em>
                  </label>
                ))}
              </div>
            </div>

            <div className="results-filter">
              <div className="results-filter__title">Room style</div>
              <div className="filter-check-list">
                {ROOM_TYPES.map((type) => (
                  <label key={type} className="filter-check">
                    <input
                      type="checkbox"
                      checked={filters.roomType.includes(type)}
                      onChange={() => toggleListFilter("roomType", type)}
                    />
                    <span>{type}</span>
                    <em>{filterCounts.roomType[type] || 0}</em>
                  </label>
                ))}
              </div>
            </div>

            <div className="results-filter results-filter--switch">
              <label className="filter-switch">
                <input
                  type="checkbox"
                  checked={filters.availableOnly}
                  onChange={(event) => setFilters((prev) => ({ ...prev, availableOnly: event.target.checked, page: 1 }))}
                />
                <span>Only show hotels with live availability</span>
              </label>
            </div>

          </aside>

          <main className="results-main">
            <div className="results-header">
              <div className="results-header__intro">
                <div className="results-header__icon">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&q=80"
                    alt="City"
                  />
                </div>
                <div>
                  <h1>{filters.location ? `Hotels in ${filters.location}` : "Explore premium hotels"}</h1>
                  <p>
                    {isLoading || isFetching
                      ? "Loading matching stays..."
                      : `Curated results with prices starting from ${formatPrice(quickStats.avgPrice || 1499)}`}
                  </p>
                </div>
              </div>
              <div className="results-header__controls">
                <span className="results-header__sort-label">Sort by</span>
                <select
                  className="hotels-sort"
                  value={filters.sort}
                  onChange={(event) => setFilters((prev) => ({ ...prev, sort: event.target.value, page: 1 }))}
                >
                  <option value="rating">Recommended</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
                <button type="button" className="results-action-btn">
                  <Map size={15} /> Map View
                </button>
                <button type="button" className="results-filter-toggle" onClick={() => setSidebarOpen(true)}>
                  <SlidersHorizontal size={16} /> Filters
                </button>
              </div>
            </div>

            <div className="results-promo results-promo--soft">
              <Sparkles size={14} />
              Sign-in and unlock member-only prices, saved hotels, and faster checkout.
            </div>

            {activeFilterCount > 0 && (
              <div className="results-active-filters">
                {filters.propertyType.map((item) => (
                  <button key={item} type="button" className="active-chip" onClick={() => toggleListFilter("propertyType", item)}>{item} <X size={12} /></button>
                ))}
                {filters.roomType.map((item) => (
                  <button key={item} type="button" className="active-chip" onClick={() => toggleListFilter("roomType", item)}>{item} <X size={12} /></button>
                ))}
                {filters.amenities.map((item) => (
                  <button key={item} type="button" className="active-chip" onClick={() => toggleListFilter("amenities", item)}>{item} <X size={12} /></button>
                ))}
                {filters.stars.map((item) => (
                  <button key={item} type="button" className="active-chip" onClick={() => toggleListFilter("stars", item)}>{item} star+ <X size={12} /></button>
                ))}
                {filters.availableOnly && <button type="button" className="active-chip" onClick={() => setFilters((prev) => ({ ...prev, availableOnly: false, page: 1 }))}>Available now <X size={12} /></button>}
              </div>
            )}

            {isLoading ? (
              <SkeletonGrid count={6} />
            ) : isError ? (
              <ErrorState message="Failed to load hotels. Is the backend running?" onRetry={refetch} />
            ) : hotels.length === 0 ? (
              <div className="hotels-empty">
                <div className="hotels-empty__title">No hotels matched these filters</div>
                <p>Try widening the budget, removing room-style filters, or clearing everything to explore the full collection.</p>
                <button className="filter-reset-btn hotels-empty__cta" onClick={resetFilters}>Clear all filters</button>
              </div>
            ) : (
              <>
                <div className="results-list">
                  {hotels.map((hotel, index) => {
                    const image = getHotelImage(hotel);
                    const price = getPriceValue(hotel);
                    const rating = Number(hotel?.averageRating || hotel?.rating || 4.2).toFixed(1);
                    const reviewCount = hotel?.reviewCount || hotel?.totalReviews || Math.max(22, (hotel?.availableInventory || 0) * 8);
                    const badges = buildResultBadges(hotel);
                    const city = hotel?.location?.city || hotel?.address?.city || hotel?.city || "Prime location";
                    const area = hotel?.address?.state || hotel?.location?.state || "India";

                    return (
                      <motion.article
                        key={hotel._id}
                        className="hotel-result-card"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.32, delay: index * 0.04 }}
                      >
                        <Link to={`/hotel/${hotel._id}`} className="hotel-result-card__media">
                          <img src={image} alt={hotel.name} loading="lazy" />
                          {hotel?.isFeatured && <span className="hotel-result-card__ribbon">Featured</span>}
                        </Link>

                        <div className="hotel-result-card__body">
                          <div className="hotel-result-card__content">
                            <div className="hotel-result-card__top">
                              <div>
                                <Link to={`/hotel/${hotel._id}`} className="hotel-result-card__name">{hotel.name}</Link>
                                <p className="hotel-result-card__location">{city}, {area}</p>
                              </div>
                              <div className="hotel-result-card__pricebox hotel-result-card__pricebox--mobile">
                                <strong>{formatPrice(price)}</strong>
                                <span>Incl. tax for 1 night</span>
                              </div>
                            </div>

                            <div className="hotel-result-card__meta">
                              <span className="hotel-result-card__rating"><Star size={12} fill="currentColor" /> {rating}</span>
                              <span className="hotel-result-card__reviews">{reviewCount} ratings</span>
                            </div>

                            <div className="hotel-result-card__badges">
                              {badges.map((badge) => (
                                <span key={badge}>{badge}</span>
                              ))}
                            </div>

                            <p className="hotel-result-card__description">
                              {hotel.description || "Refined rooms, smooth check-in, and a dependable stay experience designed for modern travelers."}
                            </p>

                            <div className="hotel-result-card__footer">
                              <span className="hotel-result-card__signal">Great choice. Live inventory: {hotel?.availableInventory || 0} rooms open</span>
                              <Link to={`/hotel/${hotel._id}`} className="hotel-result-card__more">Read More</Link>
                            </div>
                          </div>

                          <div className="hotel-result-card__booking">
                            <div className="hotel-result-card__pricebox">
                              <strong>{formatPrice(price)}</strong>
                              <span>Incl. tax for 1 night</span>
                            </div>
                            <Link to={`/hotel/${hotel._id}`} className="hotel-result-card__cta">
                              Quick Book
                            </Link>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>

                <div className="results-promo results-promo--dark">
                  <div>
                    <strong>Instant discounts up to 5% off</strong>
                    <span>Logged-in guests also unlock smoother bookings and saved preferences.</span>
                  </div>
                  <Link to="/auth/login" className="results-promo__cta">Sign In</Link>
                </div>

                {totalPages > 1 && (
                  <div className="hotels-pagination">
                    <button
                      type="button"
                      className="hotels-pagination__nav"
                      disabled={filters.page === 1}
                      onClick={() => setFilters((prev) => ({ ...prev, page: prev.page - 1 }))}
                    >
                      Previous
                    </button>

                    <div className="hotels-pagination__pages">
                      {visiblePages.map((pageNumber) => (
                        <button
                          type="button"
                          key={pageNumber}
                          className={`hotels-pagination__page${filters.page === pageNumber ? " active" : ""}`}
                          onClick={() => setFilters((prev) => ({ ...prev, page: pageNumber }))}
                        >
                          {pageNumber}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="hotels-pagination__nav"
                      disabled={filters.page === totalPages}
                      onClick={() => setFilters((prev) => ({ ...prev, page: prev.page + 1 }))}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}
