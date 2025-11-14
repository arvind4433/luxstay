
const About = () =>{
    return(

        <>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us - LuxStay</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  {/* Header (Navbar) */}
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top shadow-sm">
    <div className="container">
      <a className="navbar-brand d-flex align-items-center gap-2" href="#">
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
            <a className="nav-link px-3" href="rooms.html">
              Rooms
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active px-3" href="about.html">
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
  {/* About Hero Section */}
  <section className="bg-light py-5" style={{ marginTop: 76 }}>
    <div className="container py-5">
      <div className="row align-items-center gy-5">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-3">About LuxStay</h1>
          <p className="lead text-muted mb-4">
            Your trusted partner in discovering the perfect stay across India.
            We connect travelers with verified hotels at the best prices.
          </p>
          <div className="row g-3">
            <div className="col-6 col-md-4">
              <h3 className="fw-bold text-primary mb-1">1,200+</h3>
              <p className="small text-muted mb-0">Hotels Listed</p>
            </div>
            <div className="col-6 col-md-4">
              <h3 className="fw-bold text-primary mb-1">50K+</h3>
              <p className="small text-muted mb-0">Happy Guests</p>
            </div>
            <div className="col-6 col-md-4">
              <h3 className="fw-bold text-primary mb-1">4.8★</h3>
              <p className="small text-muted mb-0">Avg. Rating</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1578683015151-0b1f7e4d9a17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="LuxStay Team"
            className="img-fluid rounded-4 shadow-lg"
            style={{ maxHeight: 400, objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  </section>
  {/* Our Story */}
  <section className="py-5">
    <div className="container">
      <div className="row gy-5">
        <div className="col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Our Journey"
            className="img-fluid rounded-4 shadow"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-3">Our Story</h2>
          <p className="text-muted mb-3">
            Founded in 2020, LuxStay was born from a simple idea:{" "}
            <strong>travel should be easy, transparent, and joyful</strong>.
          </p>
          <p className="text-muted mb-3">
            We saw travelers struggling with fake listings, hidden fees, and
            unreliable platforms. So we built LuxStay — a platform where every
            hotel is verified, every price is real, and every booking comes with
            24/7 support.
          </p>
          <p className="text-muted mb-4">
            Today, we partner with over <strong>1,200 hotels</strong> across
            India — from luxury resorts in Goa to cozy homestays in Himachal.
          </p>
          <a href="#" className="btn btn-primary rounded-pill px-4 w-fit">
            Join Our Journey
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Mission & Vision */}
  <section className="py-5 bg-light">
    <div className="container">
      <div className="row g-5">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4 h-100">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div
                className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 50, height: 50 }}
              >
                <i className="bi bi-bullseye fs-4" />
              </div>
              <h4 className="mb-0">Our Mission</h4>
            </div>
            <p className="text-muted">
              To make hotel booking{" "}
              <strong>simple, secure, and affordable</strong> for every traveler
              in India — with real photos, honest prices, and instant
              confirmations.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4 h-100">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div
                className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 50, height: 50 }}
              >
                <i className="bi bi-eye fs-4" />
              </div>
              <h4 className="mb-0">Our Vision</h4>
            </div>
            <p className="text-muted">
              To become India’s most trusted hotel booking platform — where
              every stay is verified, every guest is valued, and every journey
              is memorable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Values */}
  <section className="py-5">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Core Values</h2>
        <p className="lead text-muted">What drives us every day</p>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="text-center">
            <div
              className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: 80, height: 80 }}
            >
              <i className="bi bi-shield-check text-primary fs-2" />
            </div>
            <h5 className="fw-semibold">Trust</h5>
            <p className="small text-muted">
              Verified hotels, real photos, no surprises.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="text-center">
            <div
              className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: 80, height: 80 }}
            >
              <i className="bi bi-currency-rupee text-success fs-2" />
            </div>
            <h5 className="fw-semibold">Transparency</h5>
            <p className="small text-muted">
              No hidden fees. What you see is what you pay.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="text-center">
            <div
              className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: 80, height: 80 }}
            >
              <i className="bi bi-headset text-warning fs-2" />
            </div>
            <h5 className="fw-semibold">Support</h5>
            <p className="small text-muted">
              24/7 help via call, chat, or email.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="text-center">
            <div
              className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: 80, height: 80 }}
            >
              <i className="bi bi-heart-fill text-danger fs-2" />
            </div>
            <h5 className="fw-semibold">Care</h5>
            <p className="small text-muted">
              Every guest matters. Every stay counts.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Team */}
  <section className="py-5 bg-light">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Meet Our Team</h2>
        <p className="lead text-muted">Passionate people behind LuxStay</p>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="rounded-circle mb-3"
              width={120}
              alt="Aryan"
            />
            <h6 className="fw-semibold">Aryan Mehta</h6>
            <p className="text-muted small">Founder &amp; CEO</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="rounded-circle mb-3"
              width={120}
              alt="Neha"
            />
            <h6 className="fw-semibold">Neha Sharma</h6>
            <p className="text-muted small">Head of Operations</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/86.jpg"
              className="rounded-circle mb-3"
              width={120}
              alt="Rohan"
            />
            <h6 className="fw-semibold">Rohan Kapoor</h6>
            <p className="text-muted small">Tech Lead</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="rounded-circle mb-3"
              width={120}
              alt="Priya"
            />
            <h6 className="fw-semibold">Priya Singh</h6>
            <p className="text-muted small">Customer Success</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer (Same as before) */}
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
export default About;

