import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <div className="bg-dark min-vh-100 py-5 text-center text-light">
        <h2>Post not found</h2>
        <Link to="/" className="btn btn-outline-light mt-3">
          ⬅ Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-dark min-vh-100 py-5">
      <div className="container text-light">
        <div className="card bg-secondary text-light shadow border-0 p-4">
          <h2 className="card-title fw-bold mb-3">{post.title}</h2>
          <p className="card-text">{post.body || post.content}</p>
          <Link to="/" className="btn btn-outline-light mt-4">
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
