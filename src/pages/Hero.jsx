import "../../src/css/Hero.css"
const Hero = () =>{
    return(

        <>
        <>
  
  <section
    className="text-success arjust-space card  "
  >
    <div className="container py-5">
      <div className="row gy-5">
        {/* Main Hero Content */}
        <div className="col-lg-12 text-center text-lg-start">
          <h1 className="display-4 fw-bold mb-3 text-center">
            Book Your Dream Stay in India
          </h1>
          <p className="lead mb-4 text-danger  text-center">
            <u>
                 From beach resorts to mountain retreats — find verified hotels at
            unbeatable prices.
            </u>
         
          </p>
        </div>
        {/* Search Form */}
        <div className="col-lg-12 ">
          <div className=" text-dark rounded-4 p-4 border shadow-lg ">
            <form>
              <div className="row g-3 align-items-center">
                <div className="col-md-4">
                  <div className="input-group">
                    <span className="input-group-text bg-light border-0">
                      <i className="bi bi-geo-alt-fill text-primary" />
                    </span>
                    <input
                      type="text"
                      className="form-control  border-0 shadow-none"
                      placeholder=" Type your Destination Here (e.g. Goa, Manali)"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <input type="date" className="form-control" id="checkin"  />
                </div>
                <div className="col-md-2">
                  <input type="date" className="form-control" id="checkout" />
                </div>
                <div className="col-md-2">
                  <select className="form-select">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
                <div className="col-md-2 d-grid">
                  <button
                    type="submit"
                    className="btn btn-warning rounded-pill h-100 fw-semibold"
                  >
                    <i className="bi bi-search me-1" /> Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Category Pills (Quick Filters) */}
        <div className="col-lg-12">
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
            <a
              href="#"
              className="btn shadow-lg border text-success rounded-pill px-4 py-2 d-flex align-items-center gap-2"
            >
              <i className="bi  bi-building  " /> Luxury Hotels
            </a>
            <a
              href="#"
              className="btn shadow-lg border text-success rounded-pill px-4 py-2 d-flex align-items-center gap-2"
            >
              <i className="bi bi-water" /> Beach Resorts
            </a>
            <a
              href="#"
              className="btn shadow-lg border text-success rounded-pill px-4 py-2 d-flex align-items-center gap-2"
            >
              <i className="bi bi-snow" /> Hill Stations
            </a>
            <a
              href="#"
              className="btn shadow-lg border text-success rounded-pill px-4 py-2 d-flex align-items-center gap-2"
            >
              <i className="bi bi-heart-pulse" /> Honeymoon
            </a>
            <a
              href="#"
              className="btn shadow-lg border text-success rounded-pill px-4 py-2 d-flex align-items-center gap-2"
            >
              <i className="bi bi-briefcase" /> Business
            </a>
            <a
              href="#"
              className="btn shadow-lg border text-success rounded-pill px-4 py-2 d-flex align-items-center gap-2"
            >
              <i className="bi bi-currency-rupee" /> Budget Stays
            </a>
          </div>
        </div>
        {/* Trust & Stats */}
        <div className="col-lg-12">
          <div className="row g-4 text-center text-lg-start">
            <div className="col-6 col-md-3">
              <h3 className="fw-bold mb-1">50K+</h3>
              <p className="small mb-0 opacity-75">Happy Guests</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-bold mb-1">1,200+</h3>
              <p className="small mb-0 opacity-75">Hotels Listed</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-bold mb-1">4.8★</h3>
              <p className="small mb-0 opacity-75">Average Rating</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-bold mb-1">24/7</h3>
              <p className="small mb-0 opacity-75">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

        </>
    )
}
export default Hero;
