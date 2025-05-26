import React from "react";

const DemoBlog = () => {
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
          <h2 className="fw-bold mt-4" style={{ fontSize: "2.5rem" }}>Demo Blog</h2>
          <p className="fs-4">
            Explore the latest trends, insights, and innovations in blogging.
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* First Blog */}
            <div
              className="card p-4 shadow-lg mb-4"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="card-body">
                <h4 className="fw-bold text-theme">The Future of Blogging</h4>
                <h6 className="card-subtitle mb-3 text-muted">by Admin | April 27, 2025</h6>
                <p className="fs-5 text-dark">
                  Blogging has evolved into a powerful medium for sharing ideas, opinions, and knowledge. 
                  As technology advances, new platforms are emerging to help creators better engage with audiences 
                  through personalized content, AI-driven recommendations, and interactive storytelling.
                </p>
                <p className="fs-5 text-dark">
                  Stay tuned as we explore these trends in our upcoming blogs!
                </p>
              </div>
            </div>

            {/* Second Blog */}
            <div
              className="card p-4 shadow-lg mb-4"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="card-body">
                <h4 className="fw-bold text-theme">How to Grow Your Blog Audience</h4>
                <h6 className="card-subtitle mb-3 text-muted">by Admin | May 10, 2025</h6>
                <p className="fs-5 text-dark">
                  A successful blog isn't just about great writing—it's about engaging your audience. 
                  From leveraging social media to optimizing SEO, there are countless ways to expand your reach.  
                  One key method is **consistent posting**—audiences love fresh, reliable content.
                </p>
                <p className="fs-5 text-dark">
                  In this blog, we'll explore strategies that help increase visibility and drive traffic to your blog.
                </p>
              </div>
            </div>

            {/* Third Blog */}
            <div
              className="card p-4 shadow-lg mb-4"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="card-body">
                <h4 className="fw-bold text-theme">Top Blogging Mistakes to Avoid</h4>
                <h6 className="card-subtitle mb-3 text-muted">by Admin | May 24, 2025</h6>
                <p className="fs-5 text-dark">
                  Blogging is rewarding, but pitfalls exist. Some common mistakes include **not defining your audience**, 
                  **neglecting SEO**, and **inconsistency in publishing**. Writers often overlook the **importance of engagement**, 
                  forgetting that blogging isn't just about writing—it's about conversation.
                </p>
                <p className="fs-5 text-dark">
                  Read this blog to learn how to avoid common missteps and grow your platform effectively!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Blogging Matters Section */}
        <div className="mt-5">
          <h3 className="fw-bold text-center mb-4" style={{ fontSize: "2rem" }}>Why Blogging Matters</h3>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <p className="fs-5">
                Blogging is more than just writing—it's a space for expression, connection, and influence.  
                Whether you're sharing knowledge, advocating for a cause, or documenting personal experiences,  
                **blogging gives everyone a voice** in today's digital world.
              </p>
              <p className="fs-5">
                It also serves as a powerful tool for personal branding, professional networking,  
                and even financial opportunities through monetization.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBlog;