import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingOtp, setLoadingOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");

    setLoadingEmail(true);
    try {
      const res = await axios.post("https://api.bookmyhotelroom.online/auth/forgot-password", { email });
      if (res.data.status) {
        alert("OTP sent to your email!");
        setOtpSent(true);
      } else {
        alert(res.data.message || "Failed to send OTP");
      }
    } catch (err) {
      alert("Something went wrong!");
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (!otp) return alert("Please enter OTP");

    setLoadingOtp(true);
    try {
      const res = await axios.post("https://api.bookmyhotelroom.online/auth/VerifyOTP", { email, otp });
      if (res.data.status) {
        alert("OTP verified! Redirecting...");
       window.location.href = "/auth/ResetPassword";
      } else {
        alert(res.data.message || "Invalid OTP");
      }
    } catch (err) {
      alert("Verification failed");
    } finally {
      setLoadingOtp(false);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>Forgot Password?</h2>
        <p>Enter your email to receive an OTP.</p>

        <form onSubmit={handleEmailSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={otpSent}
            />
          </div>

          <button type="submit" className="forgot-btn" disabled={loadingEmail || otpSent}>
            {loadingEmail ? "Sending..." : "Send OTP"}
          </button>
        </form>

        {otpSent && (
          <form onSubmit={handleOtpSubmit} className="mt-4">
            <div className="form-group">
              <label>Enter OTP</label>
              <input
                type="text"
                placeholder="123456"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="forgot-btn" disabled={loadingOtp}>
              {loadingOtp ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        <p className="back-login mt-3">
          Remember your password? <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;