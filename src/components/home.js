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
    <div className="bg-dark min-vh-100 py-5">
      <div className="container text-light">
        {/* Top Section */}
        <div className="text-center mb-5">
          <hr className="border-top border-white" style={{ borderWidth: "2px" }} />
          <h1 className="display-4 fw-bold">Welcome to Devang's Blog</h1>
          <p className="lead text-muted">
            Express yourself. Write your story. Inspire the world.
          </p>
          <Link to="/create" className="btn btn-primary mt-4 px-4 py-2 shadow">
            Create New Post
          </Link>
        </div>

        {/* Featured Blogs Section */}
        <section className="mb-5">
          <h2 className="mb-4 text-center">Featured Blogs</h2>
          <div className="row">
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="col-md-8 mx-auto mb-6 mt-5">
                  <div className="card bg-secondary text-light h-100 shadow-sm border-0">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold">{post.title}</h5>
                      <p className="card-text text-light-50">
                        {getFirstLine(post.body || post.content)}
                      </p>
                      <Link
                        to={`/post/${post.id}`}
                        className="btn btn-outline-light mt-auto"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading posts... Maybe there is no post to display</p>
            )}
          </div>
        </section>

        {/* About the Blog Section */}
        <section className="mt-5 text-center">
          <h2 className="mb-3">Why Start Blogging?</h2>
          <p className="lead text-muted">
            Blogging is not just about writing, it's about building connections,
            sharing knowledge, and creating impact. At Devang's Blog, we provide
            the perfect platform for you to share your ideas with the world.
          </p>
          <Link to="/about" className="btn btn-outline-primary mt-3 px-4 py-2">
            Learn More
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
