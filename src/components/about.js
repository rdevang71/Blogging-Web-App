import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Our Mission</h4>
          <p>
            Our mission is to create a platform for aspiring bloggers, content creators, and tech enthusiasts where they can share their ideas, engage with a community, and learn from each other.
          </p>
        </div>
        <div className="col-md-6">
          <h4>What We Do</h4>
          <p>
            We provide a platform for individuals to write and share blogs on various topics ranging from technology, lifestyle, entertainment, and much more. We believe in empowering people with knowledge and ideas.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h4>Our Values</h4>
        <ul>
          <li>Innovation: We strive to bring innovative ideas to life.</li>
          <li>Community: We value building a supportive and engaged community.</li>
          <li>Quality: We focus on delivering high-quality content and user experience.</li>
          <li>Empowerment: We believe in empowering individuals through knowledge sharing.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
