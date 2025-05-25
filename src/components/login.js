import React from "react";

const Login = (props) => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ff6b6b, #feca57)",
        padding: "20px",
      }}
    >
      {/* Welcome Section */}
      <div className="text-center text-white mb-4 fadeIn">
        <h1 className="fw-bold">Welcome to Our Platform</h1>
        <p className="fs-5">Join us and explore the best experiences.</p>
      </div>

      {/* Login Card */}
      <div className="d-flex justify-content-center w-100">
        <div
          className="card shadow-lg p-4 w-100 animate-slide-up"
          style={{
            maxWidth: "500px",
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <h2 className="mb-4 text-center text-theme">Login</h2>

          {props.message && (
            <p className="text-center text-danger fw-bold">{props.message}</p>
          )}

          <form onSubmit={props.login}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                className="form-control rounded-pill"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-pill"
                id="password"
                name="password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-100 text-white rounded-pill"
              style={{
                background: "#ff6b6b",
                border: "none",
                padding: "10px 0",
                fontWeight: "600",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#e55a5a")}
              onMouseLeave={(e) => (e.target.style.background = "#ff6b6b")}
            >
              Login
            </button>
          </form>

          <div className="text-center mt-3">
            <p>
              Not a user?{" "}
              <a
                href="#"
                className="ms-1 text-decoration-none text-theme fw-bold"
                onClick={(e) => {
                  e.preventDefault();
                  props.submit();
                }}
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Google Sign-In Button */}
      <div className="d-flex justify-content-center align-items-center mt-4">
        <button
          className="fw-bold d-flex align-items-center justify-content-center animate-bounce"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            color: "#ff6b6b",
            borderRadius: "50px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            padding: "12px 24px",
            fontSize: "1rem",
            transition: "all 0.3s ease-in-out",
            border: "2px solid #ff6b6b",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#ff6b6b";
            e.target.style.color = "white";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.9)";
            e.target.style.color = "#ff6b6b";
            e.target.style.transform = "scale(1)";
          }}
          onClick={props.google}
        >
          <i className="fab fa-google me-2 fs-5"></i> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
