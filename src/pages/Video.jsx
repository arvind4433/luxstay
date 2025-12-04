import React, { useState } from 'react';
import "../css/Video.css";
import "../css/Search.css";


const Video = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const [locationOpen, setLocationOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);

  const locations = ["Mumbai", "Delhi", "Jaipur", "Goa", "Bangalore", "Udaipur", "Kerala"];
  const [selectedLocation, setSelectedLocation] = useState("Mumbai");

  return (
    <div className="home-main-container">
  
      <div className="video-container">
        <video autoPlay muted loop playsInline className="full-video">
          <source src="/videos/home.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="video-overlay"></div>

      <div className="content-wrapper">
        <div className="text-center mb-5">
          <h1 className="main-heading">Your Perfect Stay Awaits</h1>
          <p className="sub-heading">Discover luxury hotels at unbeatable prices</p>
        </div>

        <div 
          className="search-container"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={`search-bar ${isHovering ? 'hovered' : ''}`}>

            <div className="search-field" onClick={() => setLocationOpen(!locationOpen)}>
              <i className="bi bi-geo-alt-fill"></i>
              <div className="field-content">
                <span className="field-label">Location</span>
                <span className="field-value">{selectedLocation}</span>
              </div>
              <i className={`bi bi-chevron-down arrow ${locationOpen ? 'rotate' : ''}`}></i>

              {locationOpen && (
                <div className="dropdown-menu">
                  {locations.map((loc) => (
                    <div 
                      key={loc} 
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedLocation(loc);
                        setLocationOpen(false);
                      }}
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>

             <div className="search-field" onClick={() => setDateOpen(!dateOpen)}>
              <i className="bi bi-calendar3"></i>
              <div className="field-content">
                <span className="field-label">Check-in - Check-out</span>
                <span className="field-value">15 Dec - 20 Dec</span>
              </div>
              <i className={`bi bi-chevron-down arrow ${dateOpen ? 'rotate' : ''}`}></i>
            </div>

       
            <div className="search-field" onClick={() => setGuestOpen(!guestOpen)}>
              <i className="bi bi-people"></i>
              <div className="field-content">
                <span className="field-label">Guests & Rooms</span>
                <span className="field-value">2 Adults, 1 Room</span>
              </div>
              <i className={`bi bi-chevron-down arrow ${guestOpen ? 'rotate' : ''}`}></i>

              {guestOpen && (
                <div className="dropdown-menu guest-dropdown">
                  <div className="dropdown-item">1 Adult, 1 Room</div>
                  <div className="dropdown-item">2 Adults, 1 Room</div>
                  <div className="dropdown-item">2 Adults, 2 Rooms</div>
                  <div className="dropdown-item">3 Adults, 1 Room</div>
                  <div className="dropdown-item">4+ Adults / Family</div>
                </div>
              )}
            </div>

       
            <button className="search-btn">
              <i className="bi bi-search"></i> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;