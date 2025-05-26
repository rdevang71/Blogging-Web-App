import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <div
        className="w-100 py-5 text-center text-white"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #ff6b6b, #feca57)",
          padding: "40px 20px",
        }}
      >
        <div className="container">
          <hr
            style={{
              borderTop: "4px solid rgba(255, 255, 255, 0.7)",
              width: "70%",
              margin: "auto",
            }}
          />
          <h2 className="fw-bold mt-4" style={{ fontSize: "2.5rem" }}>Post Not Found</h2>
          <p className="fs-4">Oops! The post you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="btn fw-bold text-dark rounded-pill mt-4"
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
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    );
  }

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
          <h2 className="fw-bold mt-4" style={{ fontSize: "2.5rem" }}>{post.title}</h2>
        </div>

        {/* Blog Content */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div
              className="card p-4 shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="card-body">
                <p className="fs-5 text-dark">{post.body || post.content}</p>
                <Link
                  to="/"
                  className="btn fw-bold text-dark rounded-pill mt-4"
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
                  ⬅ Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;