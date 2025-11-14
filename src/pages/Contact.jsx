
const Contact = () =>{
    return(

        <>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Us - LuxStay</title>
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
            <a className="nav-link px-3" href="about.html">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active px-3" href="contact.html">
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
  {/* Contact Hero Section */}
  <section className="bg-light py-5" style={{ marginTop: 76 }}>
    <div className="container py-5">
      <div className="row text-center">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4 fw-bold mb-3">Get in Touch</h1>
          <p className="lead text-muted mb-4">
            Have a question? Need help with booking? We're here 24/7 to assist
            you.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-telephone-fill text-primary fs-4" />
              <span className="fw-medium">+91 98765 43210</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill text-primary fs-4" />
              <span className="fw-medium">support@luxstay.in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Form + Info */}
  <section className="py-5">
    <div className="container">
      <div className="row g-5">
        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm p-4 p-md-5">
            <h3 className="fw-bold mb-4">Send us a Message</h3>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-medium">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Doe"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="john@example.com"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-medium">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-medium">Subject</label>
                  <select className="form-select">
                    <option>Booking Inquiry</option>
                    <option>Support Request</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label fw-medium">Message</label>
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="How can we help you today?"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-5 fw-semibold"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Contact Info & Map */}
        <div className="col-lg-5">
          <div className="h-100 d-flex flex-column gap-4">
            {/* Office Info */}
            <div className="card border-0 shadow-sm p-4 flex-fill">
              <h4 className="fw-bold mb-3">Our Office</h4>
              <div className="d-flex gap-3 mb-3">
                <i className="bi bi-geo-alt-fill text-primary fs-5" />
                <div>
                  <p className="mb-0 fw-medium">LuxStay Headquarters</p>
                  <p className="text-muted small mb-0">
                    12th Floor, Tech Tower
                    <br />
                    Andheri East, Mumbai 400072
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-3">
                <i className="bi bi-clock-fill text-primary fs-5" />
                <div>
                  <p className="mb-0 fw-medium">Support Hours</p>
                  <p className="text-muted small mb-0">
                    24 hours a day, 7 days a week
                  </p>
                </div>
              </div>
            </div>
            {/* Quick Contact Cards */}
            <div className="row g-3">
              <div className="col-6">
                <div className="card border-0 bg-primary text-white p-3 text-center h-100">
                  <i className="bi bi-headset fs-2 mb-2" />
                  <h6 className="mb-1">Call Us</h6>
                  <small>+91 98765 43210</small>
                </div>
              </div>
              <div className="col-6">
                <div className="card border-0 bg-success text-white p-3 text-center h-100">
                  <i className="bi bi-chat-dots fs-2 mb-2" />
                  <h6 className="mb-1">Live Chat</h6>
                  <small>Available 24/7</small>
                </div>
              </div>
            </div>
            {/* Map */}
            <div className="card border-0 shadow-sm p-0 overflow-hidden flex-fill">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.657295390335!2d72.867614315367!3d19.113645187068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8866e4e0e6f%3A0x7d5e75b9f6d7c8a1!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                width="100%"
                height={200}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* FAQ Section */}
  <section className="py-5 bg-light">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Frequently Asked Questions</h2>
        <p className="lead text-muted">Find quick answers to common queries</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-8 mx-auto">
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item border-0 shadow-sm mb-3">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  How do I modify or cancel my booking?
                </button>
              </h3>
              <div
                id="faq1"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can modify or cancel your booking directly from your
                  account dashboard. Most hotels allow free cancellation up to
                  24 hours before check-in.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 shadow-sm mb-3">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  Is my payment information secure?
                </button>
              </h3>
              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes! We use 256-bit SSL encryption and never store your card
                  details. Payments are processed through trusted gateways like
                  Razorpay and Paytm.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 shadow-sm mb-3">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  Do you have 24/7 customer support?
                </button>
              </h3>
              <div
                id="faq3"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Absolutely! Our support team is available round the clock via
                  phone, email, and live chat to help with any booking-related
                  issues.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 shadow-sm mb-3">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                >
                  Can I book for someone else?
                </button>
              </h3>
              <div
                id="faq4"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes! Just enter the guest's name during booking. You'll
                  receive confirmation, and they can check in with valid ID.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
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
  {/* Bootstrap JS */}
</>
        </>
    )
}
export default Contact;
