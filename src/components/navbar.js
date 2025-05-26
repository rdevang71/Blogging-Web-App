import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg px-4 shadow-lg"
      style={{
        background: 'linear-gradient(to right, #ff6b6b, #feca57)',
        padding: '15px',
        
      }}
    >
      <div className="d-flex w-100 justify-content-between align-items-center">
        {/* Left side */}
        <div>
          <Link
            to="/"
            className="btn fw-bold"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#ff6b6b',
              borderRadius: '30px',
              padding: '8px 16px',
              transition: 'all 0.3s ease-in-out',
              border: '2px solid #ff6b6b',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#ff6b6b';
              e.target.style.color = 'white';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.9)';
              e.target.style.color = '#ff6b6b';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Home
          </Link>
        </div>

        {/* Right side */}
        <div>
          {['About', 'Contact', 'Demo-Blog', 'Create'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="btn fw-bold m-2"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#ff6b6b',
                borderRadius: '30px',
                padding: '8px 16px',
                transition: 'all 0.3s ease-in-out',
                border: '2px solid #ff6b6b',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#ff6b6b';
                e.target.style.color = 'white';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                e.target.style.color = '#ff6b6b';
                e.target.style.transform = 'scale(1)';
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;