import { Link } from "react-router-dom";
import { Twitter, Instagram, Facebook, Linkedin, Sparkles, ShieldCheck, Headphones } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const handleNewsletter = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__separator" aria-hidden="true">
          <span>Continue with LuxStay</span>
        </div>

        <div className="footer__banner">
          <div className="footer__banner-copy">
            <span className="footer__banner-kicker">Stay better with LuxStay</span>
            <h3>Premium hotel discovery, smoother booking, and sharper room-level detail.</h3>
          </div>
          <div className="footer__banner-points">
            <span><Sparkles size={14} /> Curated stays</span>
            <span><ShieldCheck size={14} /> Trusted checkout</span>
            <span><Headphones size={14} /> Guest-first support</span>
          </div>
        </div>

        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">L</div>
              <span className="footer__logo-text">Lux<span>Stay</span></span>
            </Link>
            <p className="footer__tagline">
              Discover extraordinary stays with a premium booking flow designed to make destination search, room selection, and checkout feel effortless.
            </p>
            <div className="footer__social">
              {[
                { icon: <Twitter size={16} />, href: "#" },
                { icon: <Instagram size={16} />, href: "#" },
                { icon: <Facebook size={16} />, href: "#" },
                { icon: <Linkedin size={16} />, href: "#" },
              ].map((social, index) => (
                <a key={index} href={social.href} className="footer__social-link">{social.icon}</a>
              ))}
            </div>
            <div className="footer__newsletter">
              <p>Subscribe for exclusive deals and destination highlights</p>
              <form className="footer__newsletter-form" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  className="footer__newsletter-input"
                  placeholder="Your email address"
                  required
                />
                <button type="submit" className="footer__newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <ul className="footer__links">
              <li><Link to="/hotels">All Hotels</Link></li>
              <li><Link to="/offers">Special Offers</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/rooms">Room Types</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Support</h4>
            <ul className="footer__links">
              <li><Link to="/helpcenter">Help Center</Link></li>
              <li><Link to="/cancellationpolicy">Cancellation Policy</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Legal</h4>
            <ul className="footer__links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
              <li><Link to="/partnership">Partnership</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            Copyright {new Date().getFullYear()} <span>LuxStay</span>. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
