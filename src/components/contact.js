import React from "react";

const Contact = () => {
  return (
    <div
      className="w-100 py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ff6b6b, #feca57)",
        padding: "40px 20px",
      }}
    >
      <div className="container text-white">
        {/* Header Section */}
        <div className="text-center mb-5">
          <hr
            style={{
              borderTop: "4px solid rgba(255, 255, 255, 0.7)", 
              width: "70%", 
              margin: "auto",
            }}
          />
          <h2 className="fw-bold mt-4" style={{ fontSize: "2.5rem" }}>Get In Touch</h2>
          <p className="fs-4">
            Have any questions or suggestions? We'd love to hear from you!  
            Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Why Contact Us? Section */}
        <div className="text-center mb-5">
          <h3 className="fw-bold" style={{ fontSize: "2rem" }}>Why Contact Us?</h3>
          <p className="fs-5">
            Whether you need support, have business inquiries, or just want to share feedback,  
            we're here to listen. Your input helps us improve and grow as a platform.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="name"
                  placeholder="Your Name"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "2px solid #feca57",
                  }}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                <input
                  type="email"
                  className="form-control rounded-pill"
                  id="email"
                  placeholder="name@example.com"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "2px solid #feca57",
                  }}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-bold">Message</label>
                <textarea
                  className="form-control rounded"
                  id="message"
                  rows="4"
                  placeholder="Your message here..."
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "2px solid #feca57",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn fw-bold w-100 text-dark rounded-pill"
                style={{
                  background: "#fff",
                  border: "2px solid #feca57",
                  padding: "12px",
                  fontSize: "1rem",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#feca57";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#fff";
                  e.target.style.color = "black";
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-5">
          <h3 className="fw-bold text-center mb-4" style={{ fontSize: "2rem" }}>Frequently Asked Questions</h3>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="list-unstyled fs-5">
                <li><span className="fw-bold">📧 How long does it take for a response?</span> We usually reply within 24-48 hours.</li>
                <li><span className="fw-bold">🔧 Can I report a bug or suggest a new feature?</span> Absolutely! We welcome user feedback.</li>
                <li><span className="fw-bold">📌 Do you collaborate with other bloggers?</span> Yes! Reach out if you're interested in partnerships.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;