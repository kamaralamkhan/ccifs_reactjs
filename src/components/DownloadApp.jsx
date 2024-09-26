// src/DownloadApp.jsx
import React from 'react';

const DownloadApp = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex-1 event-card">
  <h2 className="text-2xl font-semibold mb-4 text-center">Upcoming Events</h2>
  <div
    className="overflow-y-auto overflow-x-hidden"
    style={{ maxHeight: '300px' }} // Set max height for scrolling
  >
    <ul className="list-disc pl-5 space-y-3 text-sm">
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">Call for Book Chapters</span>
      </li>
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">3 Weeks Virtual Forensics Internship</span>
      </li>
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">1 Month Online Certificate Course in Forensic Psychology</span>
      </li>
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">1 Month Certificate Course in Forensic Biology & Serology</span>
      </li>
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">3 Month Certificate Course in Forensic Science at Jamia Hamdard</span>
      </li>
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">3 Month Certificate Course in Forensic Nursing at Jamia Hamdard</span>
      </li>
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">3 Month Certificate Course in Cyber & Digital Forensic at Jamia Hamdard</span>
      </li>
    </ul>
  </div>
</div>

  );
};

export default DownloadApp;
