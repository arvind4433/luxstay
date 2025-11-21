import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(""); 
  const [Otpmodel, setOtpmodel] = useState(false); 

  // Login Function: अब यह successful login पर OTP स्क्रीन दिखाता है
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("https://api.bookmyhotelroom.online/auth/login", {
        email,
        password,
      });

      if (res.data.status) {
        // अगर API response successful है (क्रेडेंशियल्स सही हैं)
        
        // 1. Email को store करें ताकि OTP verification में इस्तेमाल हो सके
        localStorage.setItem("userEmail", email); 
        
        // 2. OTP flow शुरू करें
        alert("OTP sent to your email. Please verify.");
        setOtpmodel(true);
        
      
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Invalid email or password or server error");
    } finally {
      setLoading(false);
    }
  };


 
  const handleverifyLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
   
    try {
      if (!otp) {
        throw new Error("Please enter the OTP.");
      }

   
      const response = await fetch("http://localhost:5000/auth/verifylogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      
      const result = await response.json();

      if (response.ok && result.status === true) {
       
        alert(result.message);
     
        window.location.href="/Home"
      
      } else {
        throw new Error(result.message || "OTP verification failed. Try again!");
      }
    } catch (error) {
      console.error("Verify OTP Error:", error);
      alert(error.message); 
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
            <b>Sign in to continue to your account.</b>
          </h4>
        </div>

        
        {!Otpmodel &&
            <form onSubmit={handleLogin} className="login-form-new ">
              <div className="form-group-new">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group-new">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="login-options-new">
                <div className="remember-new">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <Link to="/ForgotPassword" className="forgot-link-new">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" disabled={loading} className="submit-btn-new">
                {loading ? "Loading..." : "Signin"}
              </button>

              <p className="signup-link-new">
                Don’t have an account? <Link to="/signup">Sign up</Link>
              </p>

              <div className="or-divider-new">
                <span>OR</span>
              </div>

              <div className="social-login-new mb-5">
                <button type="button" className="google-btn-new">
                  <i className="fab fa-google"></i> Continue with Google
                </button>
                <button type="button" className="facebook-btn-new">
                  <i className="fab fa-facebook-f"></i> Continue with Facebook
                </button>
              </div>
            </form>
         
        }
        {Otpmodel &&
            <form onSubmit={handleverifyLogin} className="login-form-new ">
            
              <div className="form-group-new">
                <h2 className="d-flex justify-content-center">Enter 6 digit OTP</h2>
                <input
                  type="text" 
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  required
                />
              </div>
              <button type="submit" disabled={loading} className="submit-btn-new">
                {loading ? "Loading..." : "Submit"}
              </button>

              <p className="mt-3 text-center">
                <a href="#" onClick={() => setOtpmodel(false)}>
                    Back to Login
                </a>
              </p>
            </form>
        }
      </div>
    </div>
  );
};

export default Login;

