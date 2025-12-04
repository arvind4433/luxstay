import React from "react";
import '../css/Information.css'
const Information = () => {
  return (
    <>
      {/* HOTEL INFORMATION - Tera Personal Contact */}
      <section className="py-5 bg-white">
        <div className="container">
          {/* Title */}
          <div className="text-center mb-5">
            <h2 className="info-title">
              <span className="info-line"></span>
              HOTEL INFORMATION
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-11">

              <div className="row g-4">

                {/* Left Side */}
                <div className="col-md-4">
                  <div className="info-box">
                    <p className="small-label">CHECK IN - CHECK OUT</p>
                    <p className="big-text">
                      <i className="bi bi-clock"></i> Check-in: 2:00 PM<br />
                      <span className="text-secondary">Check-out: 12:00 Noon</span>
                    </p>

                    <hr />

                    <p className="small-label">DINING</p>
                    <p className="big-text">
                      <i className="bi bi-cup-hot"></i> Multi-Cuisine Restaurant & Bar
                    </p>

                    <hr />

                    <p className="small-label">CURRENT TEMPERATURE</p>
                    <p className="big-text fw-bold fs-3">
                      <i className="bi bi-thermometer"></i> 28°C
                    </p>
                  </div>
                </div>

                {/* Middle */}
                <div className="col-md-4">
                  <div className="info-box">
                    <p className="small-label">ROOMS & FACILITIES</p>
                    <p className="big-text">
                      <i className="bi bi-building"></i> 50+ Luxury Rooms & Suites
                    </p>

                    <hr />

                    <p className="small-label">WELLNESS</p>
                    <p className="big-text">
                      <i className="bi bi-spa"></i> Gym, Spa & Swimming Pool
                    </p>

                    <hr />

                    <p className="small-label">HOTEL GSTIN</p>
                    <p className="big-text fw-bold">
                      27AAXXX1234X1ZX
                    </p>
                  </div>
                </div>

                {/* Right Side - Tera Contact */}
                <div className="col-md-4">
                  <div className="info-box">
                    <p className="small-label">CONTACT US</p>
                    <p className="big-text">
                      <i className="bi bi-geo-alt"></i> LuxStay Hotel<br />
                      <span className="text-secondary">Andheri East, Mumbai - 400059</span>
                    </p>

                    <p className="big-text mt-4">
                      <i className="bi bi-person-circle"></i> Arvind (Manager)
                    </p>

                    <p className="big-text">
                      <i className="bi bi-envelope"></i> arvind889481@gmail.com
                    </p>

                    <p className="big-text">
                      <i className="bi bi-telephone"></i> +91 88948 10531
                    </p>

                    <p className="big-text mt-4">
                      <a href="tel:+918894810531" className="call-btn">
                        CALL NOW
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;