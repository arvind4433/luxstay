import React, { useState } from "react";
import axios from "axios";

const Addhotel = () => {
  const [name, setName] = useState("");
  const [rooms, setRooms] = useState(0);
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [availability, setAvailability] = useState("true"); 
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !location || rooms < 1 || price < 100) {
      alert("Please fill all required fields correctly.");
      setLoading(false);
      return;
    }

    try {
   


   
      
      const res = await axios.post("https://api.bookmyhotelroom.online/api/hotels/addHotel", {
          name,
        rooms,
        location,
        price,
        availability,
      });

      alert(res.data.message || "Hotel added successfully!");
      
    } catch (err) {
      console.error(err);
      
      const errorMessage = err.response 
        ? (err.response.data.message || `Error: Status ${err.response.status}`)
        : "An error occurred. Check your network connection.";
          
      alert(errorMessage);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new-login-container pt-5">
      <div className="new-login-card"> 
        <div className="login-header-new"> 
          <h4>
            {" "}
            <b>Add New Hotel Details</b>
          </h4>
        </div>

        <form onSubmit={handleSubmit} className="login-form-new">
          
          <div className="form-group-new">
            <label>Hotel Name</label>
            <input
              type="text"
              placeholder="e.g., The Grand Hotel"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group-new">
            <label>Number of Rooms</label>
            <input
              type="number"
              placeholder="Minimum 1"
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              required
              min={1}
            />
          </div>

          <div className="form-group-new">
            <label>Location</label>
            <input
              type="text"
              placeholder="e.g., New Delhi"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="form-group-new">
            <label>Price (per night)</label>
            <input
              type="number"
              placeholder="Minimum 100"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
              min={100}
            />
          </div>
          
          <div className="form-group-new">
            <label>Availability</label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              required
            >
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>

          <button type="submit" disabled={loading} className="submit-btn-new"> 
            {loading ? "Adding..." : "Submit Hotel"}
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Addhotel;