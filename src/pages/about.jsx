import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="min-vh-100 bg-light pt-5">
            
            <section className="py-5 bg-white shadow-sm" style={{ marginTop: '70px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h1 className="display-4 fw-bolder text-dark">
                                Your Comfort, Our Commitment.
                            </h1>
                            <h2 className="text-danger fw-light mb-4">
                                Simplifying luxury travel, one stay at a time.
                            </h2>
                            <p className="lead text-muted">
                                LuxStay was founded on the simple idea that booking a hotel should be easy, transparent, and rewarding. We connect travelers with the best verified properties across India, ensuring quality and the lowest price guarantee.
                            </p>
                            <Link to="/search" className="btn btn-danger btn-lg rounded-pill mt-3 px-5 fw-bold">
                                Find Your Stay Today
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="https://images.unsplash.com/photo-1549704284-866412e84898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU1MzN8MHwxfHNlYXJjaHwzfHxob3RlbCUyMGJhbm5lcnxlbnwwfHx8fDE3MTQ1NzE2NDh8MA&ixlib=rb-4.0.3&q=80&w=600"
                                alt="Luxury Hotel Lobby"
                                className="img-fluid rounded shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto text-center">
                            <h2 className="display-6 fw-bolder mb-3 text-dark">Our Journey So Far</h2>
                            <p className="text-muted mb-5">
                                Founded in 2022, LuxStay began as a small project to bring honesty and great value back into the hospitality sector.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="card h-100 border-0 p-4 text-center">
                                <i className="bi bi-clock-history fs-1 mb-3 text-danger"></i>
                                <h5 className="fw-bold">2022: The Launch</h5>
                                <p className="text-muted">Started with 50 verified hotels in three major cities, focusing purely on quality service and guest satisfaction.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card h-100 border-0 p-4 text-center">
                                <i className="bi bi-people fs-1 mb-3 text-danger"></i>
                                <h5 className="fw-bold">2023: Rapid Growth</h5>
                                <p className="text-muted">Expanded our network to cover 500+ properties across 20 states, becoming a trusted name for mid-range and luxury bookings.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card h-100 border-0 p-4 text-center">
                                <i className="bi bi-globe fs-1 mb-3 text-danger"></i>
                                <h5 className="fw-bold">2025: Future Vision</h5>
                                <p className="text-muted">Aiming for 2,000+ listings, including international destinations, while doubling down on customer support technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bolder text-dark">Our Core Values</h2>
                        <p className="lead text-muted">The principles that guide every booking.</p>
                    </div>
                    <div className="row g-4">
                        
                        <div className="col-md-4">
                            <div className="text-center p-3 border-start border-danger border-4 h-100">
                                <h4 className="text-danger fw-bold">Transparency</h4>
                                <p className="text-muted small mb-0">What you see is what you pay. No hidden costs or confusing charges.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center p-3 border-start border-danger border-4 h-100">
                                <h4 className="text-danger fw-bold">Quality</h4>
                                <p className="text-muted small mb-0">Every listing is verified by our team to ensure it meets our high standards.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center p-3 border-start border-danger border-4 h-100">
                                <h4 className="text-danger fw-bold">Support</h4>
                                <p className="text-muted small mb-0">Our 24/7 team is ready to assist you anytime, anywhere in your journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-danger text-white">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3">
                            <div className="p-3">
                                <i className="bi bi-house-door-fill fs-2 mb-2"></i>
                                <h1 className="display-4 fw-bolder">1000+</h1>
                                <p className="lead fw-light mb-0">Verified Hotels</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3">
                                <i className="bi bi-geo-alt-fill fs-2 mb-2"></i>
                                <h1 className="display-4 fw-bolder">100+</h1>
                                <p className="lead fw-light mb-0">Cities Covered</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3">
                                <i className="bi bi-star-fill fs-2 mb-2"></i>
                                <h1 className="display-4 fw-bolder">4.5</h1>
                                <p className="lead fw-light mb-0">Average Rating</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="p-3">
                                <i className="bi bi-calendar-check-fill fs-2 mb-2"></i>
                                <h1 className="display-4 fw-bolder">5M+</h1>
                                <p className="lead fw-light mb-0">Nights Booked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;