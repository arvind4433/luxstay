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
 setLoading(true)

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      if (res.data.status) {
        localStorage.setItem("token", res.data.data.token);
        alert("Login successful!");
        window.location.href = "/";
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Invalid email or password");
    }
  finally {
      setLoading(false)
     }
  };

  return (
    <div className="new-login-container">
      <div className="new-login-card">
        <div className="login-header-new">
          <h2>Welcome Back 👋</h2>
          <p>Sign in to continue to your account.</p>
        </div>

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

        <form onSubmit={handleLogin} className="login-form-new">
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
          
            {loading ?"Loading...":"Signin" }
          </button>

          <p className="signup-link-new">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;