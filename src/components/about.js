import React from "react";

const About = () => {
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
        <h2 className="text-center fw-bold mb-4">About Us</h2>

        <div className="row">
          <div className="col-md-6">
            <h4 className="fw-bold">Our Mission</h4>
            <p className="fs-5">
              Our mission is to create a platform for aspiring bloggers, content creators, 
              and tech enthusiasts where they can share their ideas, engage with a community, and learn from each other.
            </p>
          </div>

          <div className="col-md-6">
            <h4 className="fw-bold">What We Do</h4>
            <p className="fs-5">
              We provide a platform for individuals to write and share blogs on various topics ranging 
              from technology, lifestyle, entertainment, and much more. We believe in empowering people with knowledge and ideas.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mt-5">
          <h4 className="fw-bold text-center mb-4">Our Story</h4>
          <p className="fs-5 text-light">
            What started as a simple blogging idea has now grown into a thriving platform. 
            We wanted to create a space where individuals from all backgrounds could express themselves freely, 
            exchange ideas, and connect with like-minded people. Through continuous innovation and user-driven features, 
            we are evolving every day to bring the best content-sharing experience to you.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="mt-5">
          <h4 className="fw-bold mb-4">Our Values</h4>
          <ul className="list-unstyled fs-5">
            <li><span className="fw-bold">Innovation:</span> We strive to bring fresh and creative ideas to life.</li>
            <li><span className="fw-bold">Community:</span> We are committed to fostering an inclusive and engaged network.</li>
            <li><span className="fw-bold">Quality:</span> We ensure high standards of content creation and user experience.</li>
            <li><span className="fw-bold">Empowerment:</span> We believe in empowering individuals through storytelling and knowledge sharing.</li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-5">
          <h4 className="fw-bold text-center mb-4">Why Choose Us?</h4>
          <p className="fs-5 text-light">
            Whether you're an experienced blogger or just starting your journey, our platform is designed 
            to help you showcase your creativity, build meaningful connections, and gain visibility. 
            With intuitive tools, a vibrant community, and a seamless writing experience, we make blogging easy and enjoyable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;