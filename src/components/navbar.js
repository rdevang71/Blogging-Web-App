import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="d-flex w-100 justify-content-between align-items-center">
        {/* Left side */}
        <div>
          <Link to="/" className="btn btn-outline-light me-2">Home</Link>
        </div>

        {/* Right side */}
        <div>
          <Link to="/about" className="btn btn-outline-light m-2">About</Link>
          <Link to="/contact" className="btn btn-outline-light m-2">Contact</Link>
          <Link to="/demo-blog" className="btn btn-outline-light m-2">Demo-Blog</Link>
          <Link to="/create" className="btn btn-outline-light m-2">Create</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

