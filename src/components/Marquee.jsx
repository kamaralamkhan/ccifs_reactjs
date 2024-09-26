import React from 'react';
import './css/Marquee.css'; // Import the CSS file for styling

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <span className="marquee-item">
          <a href="tel:+919971695444" className="marquee-link">Call for Book Chapters</a>
        </span>
        <span className="marquee-item">
          <a href="tel:+919971695444" className="marquee-link">Admission Open! Contact Us.</a>
        </span>
        <span className="marquee-item">
          Jamia Hamdard in association with Center For Criminal Investigation & Forensic Science (CCIFS) offers: <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          Diploma in Forensic Science (One Year Duration), 
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          Certificate Course in Forensic Science (Three Months Duration), 
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          Certificate Course in Forensic Nursing (Three Months Duration), 
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          Certificate Course in Cyber & Digital Forensic (Three Months Duration). 
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          All courses are recognized by Jamia Hamdard (Hybrid Mode).
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </span>
      </div>
    </div>
  );
};

export default Marquee;
