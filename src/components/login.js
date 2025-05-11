import React from "react";

const Login = (props) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4 text-center">Login</h2>

          <p className="text-center text-danger">{props.message}</p>
          <form onSubmit={props.login}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <div>
            <p className="text-center mt-3">
              Not a user?
              <a
                href="#"
                className="ms-1"
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
      <div className="d-flex justify-content-center align-items-center vh-100">
      <button className="btn btn-primary btn-lg" onClick={props.google}>
        <i className="fab fa-google me-2"></i> Sign In with Google
      </button>
    </div>
    </div>
  );
};

export default Login;
