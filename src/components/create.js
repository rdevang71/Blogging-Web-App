import React, { useState } from 'react';
import { getDatabase, ref, push } from "firebase/database";
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBY5Dq4pS4YjwA3UF8ATxPwwOQK-k8KjWE",
  authDomain: "first-project-27f8d.firebaseapp.com",
  databaseURL: "https://first-project-27f8d-default-rtdb.firebaseio.com",
  projectId: "first-project-27f8d",
  storageBucket: "first-project-27f8d.appspot.com",
  messagingSenderId: "478931609179",
  appId: "1:478931609179:web:032ac127d61085806b817e"
};

// Initialize Firebase
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const database = getDatabase();

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogRef = ref(database, "blogs");
    push(blogRef, { title, content })
      .then(() => {
        alert("Blog added successfully!");
        setTitle('');
        setContent('');
      })
      .catch((error) => {
        console.error("Error adding blog:", error);
      });
  };

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
          <h2 className="fw-bold mt-4" style={{ fontSize: "2.5rem" }}>Create a New Blog</h2>
          <p className="fs-4">
            Share your thoughts, ideas, and experiences.  
            Your story could inspire the world!
          </p>
        </div>

        {/* Blog Form Section */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="form-label fw-bold">Blog Title</label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="title"
                  placeholder="Enter blog title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "2px solid #feca57",
                  }}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="content" className="form-label fw-bold">Content</label>
                <textarea
                  className="form-control rounded"
                  id="content"
                  rows="6"
                  placeholder="Write your blog here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
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
                Publish Blog
              </button>
            </form>
          </div>
        </div>

        {/* Motivational Section */}
        <div className="mt-5 text-center">
          <h3 className="fw-bold mb-4" style={{ fontSize: "2rem" }}>Why Start Blogging?</h3>
          <p className="fs-5">
            Writing isn't just about words—it's about **connection, creativity, and impact**.  
            Your unique perspective could educate, entertain, or even change someone's life!
          </p>
          <p className="fs-5">
            Start your blogging journey today and leave your mark on the digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Create;