import React from 'react';

const Header = (props) => {
  return (
    <div
      style={{
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // Dark overlay for contrast
        }}
      ></div>
      <h1
        style={{
          color: 'white',
          fontSize: '150px',
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '20px',
          zIndex: 10,
        }}
      >
        {props.title}
      </h1>
    </div>
  );
};

export default Header;
