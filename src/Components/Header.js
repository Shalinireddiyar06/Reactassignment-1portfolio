import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-title">
        Shalini Varadharaj Reddiyar <span className="emoji">👩🏻‍💻</span>
      </h1>
      <h2 className="about-heading">
        <span className="emoji">About Me👩🏻‍💻</span> 
      </h2>
      <p className="about-description">
        Hi, I'm Shalini, a passionate and curious web developer currently diving deep into the MERN stack 
        (MongoDB, Express.js, React, Node.js). I enjoy building responsive and user-friendly websites, 
        and I'm always excited to turn ideas into real-world web applications. I'm currently learning 
        full-stack development and love working on projects that challenge me to grow my skills. 
        Whether it's designing a clean UI or writing efficient backend code, I'm always ready 
        to explore and learn something new.
      </p>
    </div>
  );
}

export default Header;
