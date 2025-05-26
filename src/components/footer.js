import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white py-4 w-100"
      style={{
        background: "linear-gradient(to right, #ff6b6b, #feca57)",
        padding: "20px",
        width: "100vw",
      }}
    >
      {/* Horizontal Separator */}
      <div className="container-fluid">
        <hr
          style={{
            borderTop: "3px solid rgba(255, 255, 255, 0.7)",
            marginBottom: "20px",
          }}
        />
      </div>

      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-12 col-md-6">
            <h5 className="fw-bold">About Us</h5>
            <p>
              We are a blogging platform focused on providing quality content for
              tech enthusiasts, creators, and bloggers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              {["About", "Contact", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="fw-bold text-decoration-none"
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      transition: "color 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "white")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.9)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold">Follow Us</h5>
            <ul className="list-unstyled">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform) => (
                <li key={platform}>
                  <a
                    href={`https://${platform.toLowerCase()}.com`}
                    className="fw-bold text-decoration-none"
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      transition: "color 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "white")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.9)")}
                  >
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-3">
          <p className="fw-bold">&copy; {new Date().getFullYear()} Your Blogger Web App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;