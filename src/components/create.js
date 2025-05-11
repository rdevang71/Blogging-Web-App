import React, { useState } from 'react';
import { getDatabase, ref, push} from "firebase/database";
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
        alert("Blog added successfully");
        setTitle('');
        setContent('');
      })
      .catch((error) => {
        console.error("Error adding blog:", error);
      });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Create a New Blog</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Blog Title</label>
              <input 
                type="text" 
                className="form-control" 
                id="title" 
                placeholder="Enter blog title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content</label>
              <textarea 
                className="form-control" 
                id="content" 
                rows="6" 
                placeholder="Write your blog here..." 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success" >Publish Blog</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
