import React from 'react';

const DemoBlog = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Demo Blog</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title">The Future of Blogging</h4>
          <h6 className="card-subtitle mb-2 text-muted">by Admin | April 27, 2025</h6>
          <p className="card-text">
            Blogging has evolved into a powerful medium for sharing ideas, opinions, and knowledge. 
            As technology advances, new platforms are emerging to help creators better engage with audiences through personalized content, AI-driven recommendations, and interactive storytelling.
          </p>
          <p className="card-text">
            Stay tuned as we explore these trends in our upcoming blogs!
          </p>
        </div>
      </div>
    </div>
  );
}

export default DemoBlog;
