import React, { useState } from "react";
import "../css/Facilities.css";

// 1. DUMMY DATA FOR FACILITIES
const facilityData = [
  {
    title: "ACADEMIC BLOCKS & LABS",
    icon: "bi-building",
    features: ["State-of-the-art Classrooms", "Advanced Research Labs", "High-speed Wi-Fi Campus", "Dedicated Computer Centers"],
  },
  {
    title: "HOSTEL & ACCOMMODATION",
    icon: "bi-house-door-fill",
    features: ["Separate Boys and Girls Hostels", "24/7 Security and Warden", "Nutritious Mess Facilities", "Recreational Common Rooms"],
  },
  {
    title: "CAFETERIA & DINING",
    icon: "bi-cup-hot-fill",
    features: ["Multi-cuisine Options Available", "Hygienic and Clean Environment", "Spacious Seating Area", "Snacks and Beverages Counter"],
  },
  {
    title: "SPORTS & FITNESS",
    icon: "bi-dribbble",
    features: ["Outdoor Fields and Courts", "Indoor Games Area", "Modern Gymnasium", "Trained Sports Coaches"],
  },
];


const Facilities = () => { // Corrected: const Facilities
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    // Allows closing the currently open card or opening a new one
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderCards = (startIndex, endIndex) => {
    return facilityData.slice(startIndex, endIndex).map((facility, index) => {
      // Calculate the true index from the original array (0, 1, 2, 3)
      const trueIndex = startIndex + index;
      const isActive = activeIndex === trueIndex;

      return (
        <div
          key={trueIndex}
          className={`facility-card ${isActive ? "active" : ""}`}
          onClick={() => toggleCard(trueIndex)}
        >
          <div className="card-header">
            <div className="header-content">
              {/* Used Bootstrap Icons based on the data */}
              <i className={`bi ${facility.icon} icon`}></i> 
              <h3>{facility.title}</h3>
            </div>
            {/* Changed '+' to a custom icon for better control */}
            <i className={`bi bi-plus plus-icon`}></i>
          </div>

          <div className="card-body">
            <ul>
              {facility.features.map((feature, i) => (
                <li key={i}>
                  <span className="checkmark">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    });
  };

  return (
    // Ensure you have Bootstrap linked for 'container', 'row', 'col-lg-6', 'g-4', and 'bi-*' icons
    <section className="facilities-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="facilities-title">
            <span className="line"></span>
            CAMPUS FACILITIES
            <span className="line"></span>
          </h2>
        </div>

        <div className="row g-4 justify-content-center">

          {/* Left Column - Cards 0 and 1 */}
          <div className="col-lg-6">
            {renderCards(0, 2)}
          </div>

          {/* Right Column - Cards 2 and 3 */}
          <div className="col-lg-6">
            {renderCards(2, 4)}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Facilities;