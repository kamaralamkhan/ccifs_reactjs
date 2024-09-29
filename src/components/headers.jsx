import React from 'react';
import logo from '../assets/logo/LOGO.jpeg';
import qrCode from '../assets/logo/qrcode.png';

const Header = () => {
  return (
    <header className="bg-white py-6 px-10 flex flex-wrap items-center justify-between">
      {/* Left: Logo */}
      <div className="w-1/4 flex justify-center">
        <img
          src={logo}
          alt="CCIFS Logo"
          className="h-28 md:h-40 lg:h-48" // Adjust height for larger screens
        />
      </div>

      {/* Center: Title and Subtext */}
      <div className="w-1/2 text-center px-2">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
          Center for Criminal Investigation & Forensic Science
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
          Investigate | Forensicate | Prosecute
        </p>
        <p className="text-sm md:text-base lg:text-sm text-gray-600 mt-2 leading-relaxed">
          Registered with the Ministry of Corporate Affairs, Government of India. MSME Certification (UDAYAM-DL-04-0026480)
          and ISO 9001:2015 Certification (22ZMAE2761Q) and recognized as a Startup by the Department for Promotion of Industry
          and Internal Trade vide Certificate Number: DIPP165782.
        </p>
      </div>

      {/* Right: QR Code */}
      <div className="w-1/4 flex flex-col items-center">
        <img
          src={qrCode}
          // src="../assets/logo/qrcode.png"
          alt="QR Code"
          className="h-28 md:h-40 lg:h-48" // Match height to the logo
        />
        <p className="mt-1 text-sm md:text-base lg:text-lg font-semibold">Download App</p>
      </div>
    </header>
  );
};

export default Header;
