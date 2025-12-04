// Facilities.jsx
import { useState } from "react";
import "../css/Facilities.css";

const facilities = [
  {
    title: "HOTEL",
    icon: "building",
    items: [
      "24/7 secure luggage storage",
      "Non-smoking rooms",
      "In-room dining",
      "Concierge service",
      "Business centre",
      "Currency exchange"
    ]
  },
  {
    title: "WELLNESS",
    icon: "flower1",
    items: [
      "Fitness centre with modern equipment",
      "J Wellness Spa",
      "Outdoor swimming pool",
      "Yoga & meditation room"
    ]
  },
  {
    title: "DINING",
    icon: "cup-hot",
    items: [
      "VISTA – Multi-cuisine restaurant",
      "House of Ming – Chinese speciality",
      "The Lobby Lounge",
      "Poolside Bar"
    ]
  },
  {
    title: "TRANSPORT",
    icon: "car-front",
    items: [
      "Complimentary airport transfers",
      "Luxury car rental",
      "24/7 taxi service",
      "Valet parking"
    ]
  }
];

export default function Facilities() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="facilities-section py-5 bg-light">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="fac-title">
            <span className="fac-line"></span>
            FACILITIES
            <span className="fac-line"></span>
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Left Side - 2 Boxes */}
          <div className="col-lg-6">
            {facilities.slice(0, 2).map((fac, index) => (
              <div
                key={index}
                className={`fac-card ${openIndex === index ? "active" : ""}`}
                onClick={() => toggle(index)}
              >
                <div className="fac-header">
                  <div className="fac-icon-title">
                    <i className={`bi bi-${fac.icon} me-3`}></i>
                    <h4>{fac.title}</h4>
                  </div>
                  <span className="fac-arrow">+</span>
                </div>

                <div className="fac-body">
                  <ul>
                    {fac.items.map((item, i) => (
                      <li key={i}>
                        <span className="check-mark"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - 2 Boxes */}
          <div className="col-lg-6">
            {facilities.slice(2, 4).map((fac, index) => (
              <div
                key={index + 2}
                className={`fac-card ${openIndex === index + 2 ? "active" : ""}`}
                onClick={() => toggle(index + 2)}
              >
                <div className="fac-header">
                  <div className="fac-icon-title">
                    <i className={`bi bi-${fac.icon} me-3`}></i>
                    <h4>{fac.title}</h4>
                  </div>
                  <span className="fac-arrow">+</span>
                </div>

                <div className="fac-body">
                  <ul>
                    {fac.items.map((item, i) => (
                      <li key={i}>
                        <span className="check-mark"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}