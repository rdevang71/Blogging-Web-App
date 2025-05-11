import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 ">
        <hr className="border-top border-white" style={{ borderWidth: '2px' }} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5>About Us</h5>
            <p>
              We are a blogging platform focused on providing quality content for tech enthusiasts, creators, and bloggers. 
            </p>
          </div>
          <div className="col-12 col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" className="text-white">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-white">Twitter</a></li>
              <li><a href="https://instagram.com" className="text-white">Instagram</a></li>
              <li><a href="https://linkedin.com" className="text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center ">
          <p>&copy; {new Date().getFullYear()} Your Blogger Web App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
