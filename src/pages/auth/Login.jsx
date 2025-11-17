import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("https://api.bookmyhotelroom.online/auth/login", {
        email,
        password,
      });

      if (res.data.status) {
        // --- ✅ यहाँ बदलाव किया गया है:
        // 1. JWT टोकन सेव करें
        localStorage.setItem("token", res.data.data.token);
        
        // 2. यूज़र का ईमेल भी सेव करें ताकि नेविगेशन बार इसे दिखा सके
        // (यह मानते हुए कि आपका बैकएंड रिस्पांस में email या userName भेजता है)
        // यदि आपका बैकएंड email भेजता है, तो res.data.data.email का उपयोग करें
        // मैं यहाँ आपके द्वारा इनपुट किया गया email ही सेव कर रहा हूँ
        localStorage.setItem("userEmail", email); 
        // ---

        alert("Login successful!");
        window.location.href = "/";
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Invalid email or password");
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

        <form onSubmit={handleLogin} className="login-form-new ">
          <div className="form-group-new">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group-new">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <button className="google-btn-new">
              <i className="fab fa-google"></i> Continue with Google
            </button>
            <button className="facebook-btn-new">
              <i className="fab fa-facebook-f"></i> Continue with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;