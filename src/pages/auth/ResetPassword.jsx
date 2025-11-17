import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword === "" || confirmPassword === "") {
      alert("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("https://api.bookmyhotelroom.online/auth/reset-password", {
        password: newPassword,
      });

      if (res.data.success) {
        alert("Password updated successfully");
        window.location.href = "/login";
      } else {
        alert(res.data.message || "Failed to update password");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-5 col-xl-4">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="bg-primary text-white p-4 text-center">
              <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                <span
                  className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold"
                  style={{ width: 48, height: 48, fontSize: "1.2rem" }}
                >
                  L
                </span>
                <h3 className="mb-0 fw-bold">LuxStay</h3>
              </div>
              <h4 className="mb-0">Set New Password</h4>
              <p className="mb-0 small opacity-75">
                Your new password must be different from previous ones
              </p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label fw-medium">
                    New Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-lock text-primary" />
                    </span>
                    <input
                      type="password"
                      className="form-control border-start-0"
                      id="newPassword"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label fw-medium">
                    Confirm New Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-lock text-primary" />
                    </span>
                    <input
                      type="password"
                      className="form-control border-start-0"
                      id="confirmPassword"
                      placeholder="Re-enter new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 rounded-pill py-2 fw-semibold mb-3"
                >
                  Update Password
                </button>

                <p className="text-center mb-0 small">
                  <Link
                    to="/login"
                    className="text-primary fw-medium text-decoration-none"
                  >
                    Back to Login
                  </Link>
                </p>
              </form>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="/" className="text-muted small text-decoration-none">
              <i className="bi bi-arrow-left" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
