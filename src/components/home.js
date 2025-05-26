import React from "react";
import { Link } from "react-router-dom";

const Home = ({ posts }) => {
  // Helper function to get the first line of the content
  const getFirstLine = (text) => {
    if (!text) return "";
    const firstLine = text.split("\n")[0];
    return firstLine.length > 100 ? firstLine.slice(0, 100) + "..." : firstLine;
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ff6b6b, #feca57)",
        padding: "20px",
      }}
    >
      {/* Top Section */}
      <div className="text-white mb-4">
        <h1 className="fw-bold">Welcome to Devang's Blog</h1>
        <p className="fs-5">Express yourself. Write your story. Inspire the world.</p>
        <Link
          to="/create"
          className="fw-bold btn m-2"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            color: "#ff6b6b",
            borderRadius: "30px",
            padding: "12px 24px",
            transition: "all 0.3s ease-in-out",
            border: "2px solid #ff6b6b",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
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
        >
          Create New Post
        </Link>
      </div>

      {/* Featured Blogs Section */}
      <section className="mb-5">
        <h2 className="mb-4 text-white">Featured Blogs</h2>
        <div className="container">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="col-md-8 mx-auto mb-4">
                <div
                  className="card p-3"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "20px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div className="card-body">
                    <h5 className="fw-bold text-theme">{post.title}</h5>
                    <p className="text-dark">{getFirstLine(post.body || post.content)}</p>
                    <Link
                      to={`/post/${post.id}`}
                      className="btn btn-outline-dark mt-2"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">Loading posts... Maybe there is no post to display.</p>
          )}
        </div>
      </section>

      {/* About the Blog Section */}
      <section className="mt-5 text-center">
        <h2 className="mb-3 text-white">Why Start Blogging?</h2>
        <p className="text-light">
          Blogging is about building connections, sharing knowledge, and creating an impact. At Devang's Blog, you have the perfect platform to share your ideas.
        </p>
        <Link
          to="/about"
          className="fw-bold btn m-2"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            color: "#ff6b6b",
            borderRadius: "30px",
            padding: "12px 24px",
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
        >
          Learn More
        </Link>
      </section>
    </div>
  );
};

export default Home;
