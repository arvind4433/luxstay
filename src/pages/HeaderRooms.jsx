import { Link } from "react-router-dom";
const HeaderRoom = () =>{
    return(
        <>
        <>
        
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top shadow-sm">
                <div className="container">
                    <a
                        className="navbar-brand d-flex align-items-center gap-2"
                        href="index.html"
                    >
                        <span
                            className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold"
                            style={{ width: 36, height: 36 }}
                        >
                            L
                        </span>
                        <span className="fw-bold">LuxStay</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link px-3" href="index.html">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active px-3" href="rooms.html">
                                    Rooms
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3" href="about.html">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3" href="contact.html">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex gap-2">
                            <a href="#" className="btn btn-outline-light rounded-pill px-4">
                                Login
                            </a>
                            <a
                                href="#"
                                className="btn btn-warning rounded-pill px-4 text-dark fw-medium"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="bg-light py-5" style={{ marginTop: 76 }}>
                <div className="container py-5">
                    <div className="row text-center">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="display-4 fw-bold mb-3">Find Your Perfect Room</h1>
                            <p className="lead text-muted mb-4">
                                Choose from 1,200+ verified hotels across India — luxury suites,
                                budget stays, and more.
                            </p>
                        </div>
                    </div>
                    <div
                        className="bg-white rounded-4 p-4 shadow-sm mx-auto"
                        style={{ maxWidth: 1000 }}
                    >
                        <form>
                            <div className="row g-3 align-items-center">
                                <div className="col-md-3">
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-0">
                                            <i className="bi bi-geo-alt-fill text-primary" />
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control border-0 shadow-none"
                                            placeholder="City or Hotel"
                                            defaultValue="Mumbai"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="checkin"
                                        defaultValue="2025-11-15"
                                    />
                                </div>
                                <div className="col-md-2">
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="checkout"
                                        defaultValue="2025-11-17"
                                    />
                                </div>
                                <div className="col-md-2">
                                    <select className="form-select">
                                        <option>2 Guests</option>
                                        <option>1 Guest</option>
                                        <option>3 Guests</option>
                                        <option>4+ Guests</option>
                                    </select>
                                </div>
                                <div className="col-md-3 d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary rounded-pill h-100 fw-semibold"
                                    >
                                        <i className="bi bi-search me-1" /> Search Rooms
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="sticky-top" style={{ top: 100 }}>
                                <h5 className="fw-bold mb-3">Filters</h5>
                                <div className="mb-4">
                                    <h6 className="fw-semibold">Price per Night</h6>
                                    <div className="form-range">
                                        <input
                                            type="range"
                                            className="form-range"
                                            min={1000}
                                            max={25000}
                                            defaultValue={15000}
                                            id="priceRange"
                                        />
                                        <div className="d-flex justify-content-between small text-muted mt-1">
                                            <span>₹1,000</span>
                                            <span>₹25,000+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h6 className="fw-semibold">Star Rating</h6>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="star5"
                                        />
                                        <label className="form-check-label" htmlFor="star5">
                                            5 Star
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="star4"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label" htmlFor="star4">
                                            4 Star
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="star3"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label" htmlFor="star3">
                                            3 Star
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h6 className="fw-semibold">Room Type</h6>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="deluxe"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label" htmlFor="deluxe">
                                            Deluxe
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="suite"
                                        />
                                        <label className="form-check-label" htmlFor="suite">
                                            Suite
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="family"
                                        />
                                        <label className="form-check-label" htmlFor="family">
                                            Family
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h6 className="fw-semibold">Amenities</h6>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="wifi"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label" htmlFor="wifi">
                                            Free WiFi
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="pool" />
                                        <label className="form-check-label" htmlFor="pool">
                                            Swimming Pool
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="parking"
                                        />
                                        <label className="form-check-label" htmlFor="parking">
                                            Parking
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100 rounded-pill">
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <p className="text-muted mb-0">
                                    Showing <strong>48</strong> rooms in Mumbai
                                </p>
                                <select className="form-select w-auto">
                                    <option>Sort: Recommended</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Rating: High to Low</option>
                                </select>
                            </div>
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-4">
                                    <div className="card border-0 shadow-sm h-100 hover-lift">
                                        <div className="position-relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                className="card-img-top"
                                                alt="Deluxe Room"
                                                style={{ height: 200, objectFit: "cover" }}
                                            />
                                            <span className="badge bg-success position-absolute top-0 end-0 m-2">
                                                4.9
                                            </span>
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <h6 className="card-title fw-bold">Taj Mahal Palace</h6>
                                            <p className="text-muted small mb-2">
                                                <i className="bi bi-geo-alt-fill" /> Colaba, Mumbai
                                            </p>
                                            <div className="d-flex gap-2 mb-2 flex-wrap">
                                                <span className="badge bg-light text-dark">WiFi</span>
                                                <span className="badge bg-light text-dark">Pool</span>
                                                <span className="badge bg-light text-dark">Spa</span>
                                            </div>
                                            <div className="mt-auto">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <strong className="text-primary fs-5">₹12,999</strong>
                                                        <small className="text-muted">/ night</small>
                                                    </div>
                                                    <a
                                                        href="booking.html"
                                                        className="btn btn-primary btn-sm rounded-pill px-3"
                                                    >
                                                        Book Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card border-0 shadow-sm h-100 hover-lift">
                                        <div className="position-relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1598928504248-0bf3cb20c1c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                className="card-img-top"
                                                alt="Suite"
                                                style={{ height: 200, objectFit: "cover" }}
                                            />
                                            <span className="badge bg-success position-absolute top-0 end-0 m-2">
                                                4.8
                                            </span>
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <h6 className="card-title fw-bold">The Oberoi</h6>
                                            <p className="text-muted small mb-2">
                                                <i className="bi bi-geo-alt-fill" /> Nariman Point, Mumbai
                                            </p>
                                            <div className="d-flex gap-2 mb-2 flex-wrap">
                                                <span className="badge bg-light text-dark">WiFi</span>
                                                <span className="badge bg-light text-dark">Gym</span>
                                                <span className="badge bg-light text-dark">Bar</span>
                                            </div>
                                            <div className="mt-auto">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <strong className="text-primary fs-5">₹15,500</strong>
                                                        <small className="text-muted">/ night</small>
                                                    </div>
                                                    <a
                                                        href="booking.html"
                                                        className="btn btn-primary btn-sm rounded-pill px-3"
                                                    >
                                                        Book Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card border-0 shadow-sm h-100 hover-lift">
                                        <div className="position-relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1611892440504-42a7923129d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                className="card-img-top"
                                                alt="Family Room"
                                                style={{ height: 200, objectFit: "cover" }}
                                            />
                                            <span className="badge bg-warning position-absolute top-0 end-0 m-2">
                                                4.6
                                            </span>
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <h6 className="card-title fw-bold">Trident Bandra Kurla</h6>
                                            <p className="text-muted small mb-2">
                                                <i className="bi bi-geo-alt-fill" /> BKC, Mumbai
                                            </p>
                                            <div className="d-flex gap-2 mb-2 flex-wrap">
                                                <span className="badge bg-light text-dark">WiFi</span>
                                                <span className="badge bg-light text-dark">Parking</span>
                                            </div>
                                            <div className="mt-auto">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <strong className="text-primary fs-5">₹8,999</strong>
                                                        <small className="text-muted">/ night</small>
                                                    </div>
                                                    <a
                                                        href="booking.html"
                                                        className="btn btn-primary btn-sm rounded-pill px-3"
                                                    >
                                                        Book Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card border-0 shadow-sm h-100 hover-lift">
                                        <div className="position-relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1564501049412-90c2a5a6c31d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                className="card-img-top"
                                                alt="Honeymoon Suite"
                                                style={{ height: 200, objectFit: "cover" }}
                                            />
                                            <span className="badge bg-success position-absolute top-0 end-0 m-2">
                                                4.9
                                            </span>
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <h6 className="card-title fw-bold">JW Marriott Juhu</h6>
                                            <p className="text-muted small mb-2">
                                                <i className="bi bi-geo-alt-fill" /> Juhu Beach, Mumbai
                                            </p>
                                            <div className="d-flex gap-2 mb-2 flex-wrap">
                                                <span className="badge bg-light text-dark">WiFi</span>
                                                <span className="badge bg-light text-dark">Pool</span>
                                                <span className="badge bg-light text-dark">Beach View</span>
                                            </div>
                                            <div className="mt-auto">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <strong className="text-primary fs-5">₹18,000</strong>
                                                        <small className="text-muted">/ night</small>
                                                    </div>
                                                    <a
                                                        href="booking.html"
                                                        className="btn btn-primary btn-sm rounded-pill px-3"
                                                    >
                                                        Book Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card border-0 shadow-sm h-100 hover-lift">
                                        <div className="position-relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                className="card-img-top"
                                                alt="Budget Room"
                                                style={{ height: 200, objectFit: "cover" }}
                                            />
                                            <span className="badge bg-warning position-absolute top-0 end-0 m-2">
                                                4.3
                                            </span>
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <h6 className="card-title fw-bold">Hotel Marine Plaza</h6>
                                            <p className="text-muted small mb-2">
                                                <i className="bi bi-geo-alt-fill" /> Churchgate, Mumbai
                                            </p>
                                            <div className="d-flex gap-2 mb-2 flex-wrap">
                                                <span className="badge bg-light text-dark">WiFi</span>
                                                <span className="badge bg-light text-dark">Breakfast</span>
                                            </div>
                                            <div className="mt-auto">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <strong className="text-primary fs-5">₹4,999</strong>
                                                        <small className="text-muted">/ night</small>
                                                    </div>
                                                    <a
                                                        href="booking.html"
                                                        className="btn btn-primary btn-sm rounded-pill px-3"
                                                    >
                                                        Book Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card border-0 shadow-sm h-100 hover-lift">
                                        <div className="position-relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1578683015151-0b1f7e4d9a17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                className="card-img-top"
                                                alt="Pool View"
                                                style={{ height: 200, objectFit: "cover" }}
                                            />
                                            <span className="badge bg-success position-absolute top-0 end-0 m-2">
                                                4.7
                                            </span>
                                        </div>
                                        <div className="card-body d-flex flex-column">
                                            <h6 className="card-title fw-bold">Sofitel Mumbai BKC</h6>
                                            <p className="text-muted small mb-2">
                                                <i className="bi bi-geo-alt-fill" /> Bandra Kurla Complex
                                            </p>
                                            <div className="d-flex gap-2 mb-2 flex-wrap">
                                                <span className="badge bg-light text-dark">WiFi</span>
                                                <span className="badge bg-light text-dark">Pool</span>
                                                <span className="badge bg-light text-dark">Gym</span>
                                            </div>
                                            <div className="mt-auto">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <strong className="text-primary fs-5">₹11,500</strong>
                                                        <small className="text-muted">/ night</small>
                                                    </div>
                                                    <a
                                                        href="booking.html"
                                                        className="btn btn-primary btn-sm rounded-pill px-3"
                                                    >
                                                        Book Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-5">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#">
                                                Previous
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-dark text-light py-5">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span
                                    className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                    style={{ width: 40, height: 40 }}
                                >
                                    L
                                </span>
                                <h5 className="mb-0 fw-bold">LuxStay</h5>
                            </div>
                            <p className="text-light-emphasis small">
                                Book luxury hotels with confidence. Best prices, verified reviews,
                                and 24/7 support across India.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <h6 className="fw-semibold text-warning mb-3">Company</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a
                                        href="about.html"
                                        className="text-light-emphasis text-decoration-none small"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-light-emphasis text-decoration-none small"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-light-emphasis text-decoration-none small"
                                    >
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <h6 className="fw-semibold text-warning mb-3">Support</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a
                                        href="#"
                                        className="text-light-emphasis text-decoration-none small"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-light-emphasis text-decoration-none small"
                                    >
                                        Safety
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="contact.html"
                                        className="text-light-emphasis text-decoration-none small"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h6 className="fw-semibold text-warning mb-3">Legal</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a
                                        href="#"
                                        className="text-light-emphasis text-decoration-none small"
                                    >
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-light-emphasis text-decoration-none small"
                                    >
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h6 className="fw-semibold text-warning mb-3">Follow</h6>
                            <div className="d-flex gap-2">
                                <a href="#" className="text-light">
                                    <i className="bi bi-facebook fs-5" />
                                </a>
                                <a href="#" className="text-light">
                                    <i className="bi bi-instagram fs-5" />
                                </a>
                                <a href="#" className="text-light">
                                    <i className="bi bi-twitter fs-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4 border-secondary" />
                    <div className="text-center">
                        <p className="small text-light-emphasis mb-0">
                            © 2025 LuxStay. All rights reserved. | Made with{" "}
                            <span className="text-danger">Love</span> in India
                        </p>
                    </div>
                </div>
            </footer>
        </>
        </>
    )
}
export default HeaderRoom;