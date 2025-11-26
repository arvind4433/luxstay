const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4 mt-5">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">

                    {/* 1. Brand & Contact Info */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-danger">
                            <span className="text-danger">Lux</span><span className="text-white">Stay</span>
                        </h5>
                        <p>Your one-stop solution for luxurious and budget-friendly hotel bookings across India.</p>
                        <p><i className="bi bi-geo-alt-fill me-2 text-danger"></i> Chandigarh, India</p>
                        <p><i className="bi bi-envelope-fill me-2 text-danger"></i> support@luxstay.in</p>
                        <p><i className="bi bi-telephone-fill me-2 text-danger"></i> +91 88948 10531</p>
                    </div>

                    {/* 2. Company Links */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-white">Company</h5>
                        <p><a href="#" className="text-white text-decoration-none">About Us</a></p>
                        <p><a href="#" className="text-white text-decoration-none">Careers</a></p>
                        <p><a href="#" className="text-white text-decoration-none">Blog</a></p>
                        <p><a href="#" className="text-white text-decoration-none">Partnership</a></p>
                    </div>

                    {/* 3. Support & Booking */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-white">Support</h5>
                        <p><a href="#" className="text-white text-decoration-none">Contact Us</a></p>
                        <p><a href="#" className="text-white text-decoration-none">Help Center</a></p>
                        <p><a href="#" className="text-white text-decoration-none">Bookings</a></p>
                        <p><a href="#" className="text-white text-decoration-none">Cancellation Policy</a></p>
                    </div>

                    {/* 4. Social Media & Newsletter */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-white">Follow Us</h5>
                        <div className="social-links mb-3">
                            <a href="#" className="btn btn-sm btn-outline-light me-2"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="btn btn-sm btn-outline-light me-2"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="btn btn-sm btn-outline-light me-2"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="btn btn-sm btn-outline-light"><i className="bi bi-linkedin"></i></a>
                        </div>
                        <h5 className="text-uppercase mb-3 fw-bold text-white">Subscribe</h5>
                        <form>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control form-control-sm" placeholder="Your Email" aria-label="Your Email" />
                                <button className="btn btn-danger btn-sm" type="submit">Go</button>
                            </div>
                        </form>
                    </div>

                </div>

                <hr className="mb-4 bg-secondary" />

                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-center text-md-left mb-0">
                            Copyright © 2025 <span className="text-danger fw-bold">LuxStay</span>. All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-md-5 col-lg-4 mt-3 mt-md-0">
                        <div className="text-center text-md-end">
                            <a href="#" className="text-white me-3 text-decoration-none small">Privacy Policy</a>
                            <a href="#" className="text-white text-decoration-none small">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;