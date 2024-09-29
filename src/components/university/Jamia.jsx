import React from 'react';

// Assuming you have a logo image for Jamia Hamdard
import jamiaLogo from './logo/jamia_humdard_ccifs.png'; // Update with the actual path

const Jamia = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        {/* Jamia Hamdard Logo */}
        <img src={jamiaLogo} alt="Jamia Hamdard Logo" className="mb-4 w-40 h-auto" />
        {/* Admission Information */}
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Admission Open!</h2>
        
        <ul className="space-y-4">
          <li className="bg-blue-100 p-4 rounded-lg shadow-md hover:bg-blue-200 transition">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </span>
              <span className="text-lg font-semibold">Diploma in Forensic Science</span>
              <span className="text-gray-600 ml-auto">(One Year Duration)</span>
            </div>
          </li>
          <li className="bg-blue-100 p-4 rounded-lg shadow-md hover:bg-blue-200 transition">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </span>
              <span className="text-lg font-semibold">Certificate Course in Forensic Science</span>
              <span className="text-gray-600 ml-auto">(Three Months Duration)</span>
            </div>
          </li>

          <li className="bg-blue-100 p-4 rounded-lg shadow-md hover:bg-blue-200 transition">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </span>
              <span className="text-lg font-semibold">Certificate Course in Forensic Nursing</span>
              <span className="text-gray-600 ml-auto">(Three Months Duration)</span>
            </div>
          </li>

          <li className="bg-blue-100 p-4 rounded-lg shadow-md hover:bg-blue-200 transition">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </span>
              <span className="text-lg font-semibold">Certificate Course in Cyber & Digital Forensic</span>
              <span className="text-gray-600 ml-auto">(Three Month Duration)</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Jamia;
