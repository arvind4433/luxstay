import { Link } from "react-router-dom";
import "../../src/css/Room.css"

const Room = () => {
    return (
        <div className="min-vh-100 bg-light pt-5">
            
            <section className="hero-banner py-5" style={{ 
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1571003102432-ff45b376b008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU1MzN8MHwxfHNlYXJjaHw3fHxob3RlbHxlbnwwfHx8fDE3MTQ1NzE2NDh8MA&ixlib=rb-4.0.3&q=80&w=1600)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '40vh',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                marginTop: '70px'
            }}>
                <div className="container text-center">
                    <h1 className="display-4 fw-bolder text-white mb-3">
                        Your Perfect Stay, Guaranteed.
                    </h1>
                    <p className="lead text-white opacity-90 mb-4">
                        Book trusted hotels in over 100 cities starting at just ₹999.
                    </p>
                    <Link
                        to="/search"
                        className="btn btn-danger btn-lg rounded-pill fw-bold px-5"
                    >
                        Start Booking Now
                    </Link>
                </div>
            </section>

            <section className="py-4 bg-white shadow-sm">
                <div className="container">
                    <div className="row text-center gy-3">
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center">
                                <i className="bi bi-shield-check fs-3 mb-2 text-danger" />
                                <h6 className="fw-bold mb-0">Secure Booking</h6>
                                <p className="small text-muted mb-0">Verified Hotels & SSL Payments</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center">
                                <i className="bi bi-currency-rupee fs-3 mb-2 text-danger" />
                                <h6 className="fw-bold mb-0">Lowest Price Guarantee</h6>
                                <p className="small text-muted mb-0">No hidden fees, best rates</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center">
                                <i className="bi bi-headset fs-3 mb-2 text-danger" />
                                <h6 className="fw-bold mb-0">24/7 Support</h6>
                                <p className="small text-muted mb-0">Instant help via call/chat</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column align-items-center">
                                <i className="bi bi-calendar-check fs-3 mb-2 text-danger" />
                                <h6 className="fw-bold mb-0">Easy Cancellation</h6>
                                <p className="small text-muted mb-0">Flexible date changes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 text-dark fw-bolder">Explore Destinations</h2>
                        <p className="lead text-danger">
                            Handpicked stays in India's most loved cities
                        </p>
                    </div>
                    <div className="row g-4">
                        
                        <div className="col-md-6 col-lg-3">
                            <div className="card border-0 shadow-sm overflow-hidden h-100 hover-lift">
                                <img
                                    src="https://media.istockphoto.com/id/2206903487/photo/mature-couple-entering-room-at-luxury-hotel-and-in-hotel-room-lying-on-the-bed-and-resting.jpg?s=612x612&w=0&k=20&c=tz_6UIj3H0-fAH9y6QUVMJrcPSZOOFvtX1t-GQSgXog="
                                    className="card-img-top"
                                    alt="Goa"
                                    style={{ height: 180, objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-1 fw-bold">Goa</h5>
                                    <p className="text-muted small mb-3">150+ Hotels</p>
                                    <Link
                                        to="/search?destination=Goa"
                                        className="btn btn-outline-danger btn-sm rounded-pill px-4 fw-bold"
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
                                    <h5 className="card-title mb-1 fw-bold">Manali</h5>
                                    <p className="text-muted small mb-3">80+ Hotels</p>
                                    <Link
                                        to="/search?destination=Manali"
                                        className="btn btn-outline-danger btn-sm rounded-pill px-4 fw-bold"
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
                                    <h5 className="card-title mb-1 fw-bold">Jaipur</h5>
                                    <p className="text-muted small mb-3">120+ Hotels</p>
                                    <Link
                                        to="/search?destination=Jaipur"
                                        className="btn btn-outline-danger btn-sm rounded-pill px-4 fw-bold"
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
                                    className="card-img-top"
                                    alt="Kerala"
                                    style={{ height: 180, objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-1 fw-bold">Kerala</h5>
                                    <p className="text-muted small mb-3">200+ Hotels</p>
                                    <Link
                                        to="/search?destination=Kerala"
                                        className="btn btn-outline-danger btn-sm rounded-pill px-4 fw-bold"
                                    >
                                        Explore
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="py-5 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 text-dark fw-bolder">Featured Stays</h2>
                        <p className="lead text-danger">Top-rated luxury hotels handpicked for you</p>
                    </div>
                    <div className="row g-4">
                        
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg h-100 hover-lift">
                                <img
                                    src="https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=612x612&w=0&k=20&c=wmYZMUx0cvzGCDg9Di3HT-6NMDvPVhycuAxrQzFfKiM="
                                    className="card-img-top"
                                    alt="Taj Lake Palace"
                                    style={{ height: 200, objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">Taj Lake Palace, Udaipur</h5>
                                    <p className="text-muted small mb-2">
                                        <i className="bi bi-geo-alt-fill text-danger" /> Rajasthan
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div>
                                            <span className="text-warning fw-bold">5 Stars</span>
                                            <small className="text-muted fw-bold ms-1">(4.9)</small>
                                        </div>
                                        <div>
                                            <strong className="text-danger">₹18,999</strong>
                                            <small className="text-muted">/ night</small>
                                        </div>
                                    </div>
                                    <div className="mt-auto">
                                        <Link
                                            to="/room/taj-lake-palace-udaipur"
                                            className="btn btn-danger w-100 rounded-pill fw-bold"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg h-100 hover-lift">
                                <img
                                    src="https://media.istockphoto.com/id/1293304988/photo/white-master-bedroom-corner-with-armchair.jpg?s=612x612&w=0&k=20&c=oU5MIakMysDYpwGQSq8pcUhTvrXvF1ZeCCkM1QKl60c="
                                    className="card-img-top"
                                    alt="The Oberoi"
                                    style={{ height: 200, objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">The Oberoi, Mumbai</h5>
                                    <p className="text-muted small mb-2">
                                        <i className="bi bi-geo-alt-fill text-danger" /> Maharashtra
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div>
                                            <span className="text-warning fw-bold">5 Stars</span>
                                            <small className="text-muted fw-bold ms-1">(4.8)</small>
                                        </div>
                                        <div>
                                            <strong className="text-danger">₹15,500</strong>
                                            <small className="text-muted">/ night</small>
                                        </div>
                                    </div>
                                    <div className="mt-auto">
                                        <Link
                                            to="/room/the-oberoi-mumbai"
                                            className="btn btn-danger w-100 rounded-pill fw-bold"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg h-100 hover-lift">
                                <img
                                    src="https://media.istockphoto.com/id/2209013163/photo/modern-bedroom-interior-design-with-large-windows-blue-bed-green-plant-stylish-lighting-cozy.jpg?s=612x612&w=0&k=20&c=BXN2oP1eRCKO6kq0YwqpzPnJFMHPtytwIgsSa2gOS1w="
                                    className="card-img-top"
                                    alt="JW Marriott Goa"
                                    style={{ height: 200, objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">JW Marriott, Goa</h5>
                                    <p className="text-muted small mb-2">
                                        <i className="bi bi-geo-alt-fill text-danger" /> Goa
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div>
                                            <span className="text-warning fw-bold">4 Stars</span>
                                            <small className="text-muted fw-bold ms-1">(4.6)</small>
                                        </div>
                                        <div>
                                            <strong className="text-danger">₹12,000</strong>
                                            <small className="text-muted">/ night</small>
                                        </div>
                                    </div>
                                    <div className="mt-auto">
                                        <Link
                                            to="/room/jw-marriott-goa"
                                            className="btn btn-danger w-100 rounded-pill fw-bold"
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

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bolder text-dark">What Guests Say</h2>
                        <p className="lead text-muted">Real reviews from real travelers</p>
                    </div>
                    <div className="row g-4">
                        
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-sm p-4 h-100">
                                <div className="d-flex mb-3">
                                    <span className="text-warning fw-bold">5 Stars</span>
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
                                    <span className="text-warning fw-bold">5 Stars</span>
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
                                    <span className="text-warning fw-bold">4 Stars</span>
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