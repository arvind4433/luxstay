import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/Header.css";

const Header = ({ user, setUser }) => {
  const [hovered, setHovered] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.pageYOffset;
      setHide(current > lastScroll && current > 80);
      lastScroll = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      setUser(null);
    }
  };

  return (
    <header 
      className={`main-header ${hovered ? 'active' : ''} ${hide ? 'hide' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="container d-flex justify-content-between align-items-center">

        <Link to="/" className="logo">LUX<span className="red">STAY</span></Link>

        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <div className="dropdown">
            <span className="nav-link">Rooms</span>
            <div className="dropdown-box">
              <Link to="/rooms/deluxe">Deluxe</Link>
              <Link to="/rooms/suite">Suite</Link>
              <Link to="/rooms/family">Family</Link>
            </div>
          </div>
          <div className="dropdown">
            <span className="nav-link">Offers</span>
            <div className="dropdown-box">
              <Link to="/offers/summer">Summer Sale</Link>
              <Link to="/offers/honeymoon">Honeymoon</Link>
            </div>
          </div>
          <div className="dropdown">
            <span className="nav-link">Contact</span>
            <div className="dropdown-box">
              <a href="tel:+918894810531">+91 88948 10531</a>
              <a href="mailto:arvind889481@gmail.com">Email Us</a>
            </div>
          </div>
        </nav>

        <div className="auth">
          {!user ? (
            <>
              <Link to="/signin" className="signin">Sign In</Link>
              <Link to="/signup" className="signup">Sign Up</Link>
            </>
          ) : (
            <>
              <span className="user-email">{user.email}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;
