import { Link } from "react-router-dom";
import "../../src/css/Room.css"
const Room = () => {
  return (
    <div className="min-vh-100 bg-body ">
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 text-success fw-bold">Popular Destinations</h2>
            <p className="lead text-muted">
              Handpicked stays in India's most loved cities
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm overflow-hidden h-100 hover-lift">
                <img
                  src="https://media.istockphoto.com/id/2206903487/photo/mature-couple-entering-room-at-luxury-hotel-and-in-hotel-room-lying-on-the-bed-and-resting.jpg?s=612x612&w=0&k=20&c=tz_6UIj3H0-fAH9y6QUVMJrcPSZOOFvtX1t-GQSgXog="
                  style={{ height: 180, objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Goa</h5>
                  <p className="text-muted small mb-2">150+ Hotels</p>
                  <Link
                    to="/search?destination=Goa"
                    className="btn btn-outline-primary btn-sm rounded-pill px-3"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm overflow-hidden h-100 hover-lift">
                <img
                  src="https://media.istockphoto.com/id/1816955189/photo/couple-contemplating-an-hotel-room-as-they-arrived.jpg?s=612x612&w=0&k=20&c=GNcncaqglDtM_jq8GC3qT5zTXASKh7butzoOP1dU3UM="
                  className="card-img-top"
                  alt="Manali"
                  style={{ height: 180, objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Manali</h5>
                  <p className="text-muted small mb-2">80+ Hotels</p>
                  <Link
                    to="/search?destination=Manali"
                    className="btn btn-outline-primary btn-sm rounded-pill px-3"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm overflow-hidden h-100 hover-lift">
                <img
                  src="https://media.istockphoto.com/id/2188360284/photo/couple-on-vacation-in-hotel-bed.jpg?s=612x612&w=0&k=20&c=Oe0qzkjgZljiGJdjPmiUBFUtM8DqF2oRPYMDvz4nWac="
                  className="card-img-top"
                  alt="Jaipur"
                  style={{ height: 180, objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Jaipur</h5>
                  <p className="text-muted small mb-2">120+ Hotels</p>
                  <Link
                    to="/search?destination=Jaipur"
                    className="btn btn-outline-primary btn-sm rounded-pill px-3"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm overflow-hidden h-100 hover-lift">
                <img
                  src="https://media.istockphoto.com/id/1206839054/photo/happy-couple-on-vacation-together.jpg?s=612x612&w=0&k=20&c=V0pI0ciKtcgd2EYmc1hAhL52zPmr6CpleP18hSELH-0="
                  style={{ height: 180, objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Kerala</h5>
                  <p className="text-muted small mb-2">200+ Hotels</p>
                  <Link
                    to="/search?destination=Kerala"
                    className="btn btn-outline-primary btn-sm rounded-pill px-3"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 text-success fw-bold">Featured Stays</h2>
            <p className="lead text-danger ">Top-rated hotels handpicked for you</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=612x612&w=0&k=20&c=wmYZMUx0cvzGCDg9Di3HT-6NMDvPVhycuAxrQzFfKiM="
                  className="card-img-top"
                  alt="Taj Lake Palace"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Taj Lake Palace, Udaipur</h5>
                  <p className="text-muted small mb-2">
                    <i className="bi bi-geo-alt-fill" /> Rajasthan
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <span className="text-warning">5 stars</span>
                      <small className="text-muted">(4.9)</small>
                    </div>
                    <div>
                      <strong className="text-primary">₹18,999</strong>
                      <small className="text-muted">/ night</small>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link
                      to="/room/taj-lake-palace-udaipur"
                      className="btn btn-primary w-100 rounded-pill"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://media.istockphoto.com/id/1293304988/photo/white-master-bedroom-corner-with-armchair.jpg?s=612x612&w=0&k=20&c=oU5MIakMysDYpwGQSq8pcUhTvrXvF1ZeCCkM1QKl60c="
                  className="card-img-top"
                  alt="The Oberoi"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">The Oberoi, Mumbai</h5>
                  <p className="text-muted small mb-2">
                    <i className="bi bi-geo-alt-fill" /> Maharashtra
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <span className="text-warning">5 stars</span>
                      <small className="text-muted">(4.8)</small>
                    </div>
                    <div>
                      <strong className="text-primary">₹15,500</strong>
                      <small className="text-muted">/ night</small>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link
                      to="/room/the-oberoi-mumbai"
                      className="btn btn-primary w-100 rounded-pill"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://media.istockphoto.com/id/2209013163/photo/modern-bedroom-interior-design-with-large-windows-blue-bed-green-plant-stylish-lighting-cozy.jpg?s=612x612&w=0&k=20&c=BXN2oP1eRCKO6kq0YwqpzPnJFMHPtytwIgsSa2gOS1w="
                  className="card-img-top"
                  alt="JW Marriott Goa"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">JW Marriott, Goa</h5>
                  <p className="text-muted small mb-2">
                    <i className="bi bi-geo-alt-fill" /> Goa
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <span className="text-warning">4 stars</span>
                      <small className="text-muted">(4.6)</small>
                    </div>
                    <div>
                      <strong className="text-primary">₹12,000</strong>
                      <small className="text-muted">/ night</small>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link
                      to="/room/jw-marriott-goa"
                      className="btn btn-primary w-100 rounded-pill"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row text-center gy-4">
            <div className="col-md-3">
              <div className="d-flex flex-column align-items-center">
                <i className="bi bi-shield-check fs-1 mb-3" />
                <h5>100% Secure</h5>
                <p className="small opacity-75">SSL encrypted payments</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex flex-column align-items-center">
                <i className="bi bi-currency-rupee fs-1 mb-3" />
                <h5>Best Price</h5>
                <p className="small opacity-75">Guaranteed lowest rates</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex flex-column align-items-center">
                <i className="bi bi-headset fs-1 mb-3" />
                <h5>24/7 Support</h5>
                <p className="small opacity-75">Call, chat, email</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex flex-column align-items-center">
                <i className="bi bi-award fs-1 mb-3" />
                <h5>Verified Hotels</h5>
                <p className="small opacity-75">Real photos & reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">What Guests Say</h2>
            <p className="lead text-muted">Real reviews from real travelers</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <div className="d-flex mb-3">
                  <span className="text-warning">5 stars</span>
                </div>
                <p className="mb-3">
                  "Amazing experience! The staff was super helpful and the room was
                  exactly as shown."
                </p>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="rounded-circle"
                    width={50}
                    alt="Priya"
                  />
                  <div>
                    <strong>Priya Sharma</strong>
                    <br />
                    <small className="text-muted">Mumbai, India</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <div className="d-flex mb-3">
                  <span className="text-warning">5 stars</span>
                </div>
                <p className="mb-3">
                  "Best price I found online. Booking was instant and confirmation
                  came in seconds."
                </p>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="rounded-circle"
                    width={50}
                    alt="Rahul"
                  />
                  <div>
                    <strong>Rahul Verma</strong>
                    <br />
                    <small className="text-muted">Delhi, India</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <div className="d-flex mb-3">
                  <span className="text-warning">4 stars</span>
                </div>
                <p className="mb-3">
                  "Great support team. Helped me change dates without any hassle.
                  Will book again!"
                </p>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    className="rounded-circle"
                    width={50}
                    alt="Ananya"
                  />
                  <div>
                    <strong>Ananya Patel</strong>
                    <br />
                    <small className="text-muted">Ahmedabad, India</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Room;