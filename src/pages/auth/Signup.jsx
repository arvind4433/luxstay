import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/Signup.css";

const Signup = () => {
  
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [image, setImage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(`/api/auth/register`, {
        name,   
        email,
        password, 
        image,
      });

      if (res.data.status) {
        alert("Account created successfully!");
        window.location.href = "/login";
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Registration failed, please try again.");
     } finally {
      setLoading(false)
     }
  };

  return (
    <div className="new-signup-container">
      <div className="new-signup-card">
        <h2>Join RoomBooking</h2>
        <p>Create your account or sign up with social media.</p>

        <div className="social-login-new">
          <button className="google-btn-new">
            <i className="fab fa-google"></i> Continue with Google
          </button>
          <button className="facebook-btn-new">
            <i className="fab fa-facebook-f"></i> Continue with Facebook
          </button>
        </div>

        <div className="or-divider-new">
          <span>OR</span>
        </div>
         <div className="form-group-new mt-3">
          <label htmlFor="image">(optional) Upload your image </label>
              <input type="file" />
            </div>

        <form onSubmit={handleSignup}>
          <div className="form-group-new">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Arvind Singh"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
           

          <div className="form-group-new">
            <label>Email Address</label>
            <input

            
              type="email"
              placeholder="arvind@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group-new">
            <label>Password</label>
            <input
              type="password"
              placeholder="Minimum 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


          <button type="submit" disabled={loading} className="submit-btn-new">
             {loading ?  "Loading..." :"Signup" }
          </button>
        </form>
       


        <p className="login-link-new">
          Already a member? <Link to="/signin">Log in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;