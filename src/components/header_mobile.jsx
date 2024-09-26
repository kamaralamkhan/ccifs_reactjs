import React from 'react';
import logo from '../assets/logo/LOGO.jpeg';
import qrCode from '../assets/logo/qrcode.png';

const HeaderMobile = () => {
  return (
    <header className="bg-white py-6 px-4 flex flex-col items-center">
      {/* Top: Logo and QR Code in the same row */}
      <div className="flex flex-row justify-between w-full mb-4 items-center"> {/* Added items-center */}
        {/* Left: Logo */}
        <div className="flex justify-center w-1/2">
          <img
            src={logo}
            alt="CCIFS Logo"
            className="h-28" // Adjust height as needed
          />
        </div>

        {/* Right: QR Code */}
        <div className="flex flex-col items-center w-1/2">
          <img
            src={qrCode}
            alt="QR Code"
            className="h-28 mb-0" // Adjust height as needed
          />
          <p className="text-sm font-semibold">Download App</p>
        </div>
      </div>

      {/* Middle: Title and Subtext */}
      <div className="text-center w-full">
        <h1 className="text-pretty text-lg font-bold leading-tight">
          Center for Criminal Investigation & Forensic Science
        </h1>
        <p className="text-sm font-semibold text-gray-700">
          Investigate | Forensicate | Prosecute
        </p>
        <p className="text-xs text-center text-gray-600 mt-2 leading-relaxed">
          Registered with the Ministry of Corporate Affairs, Government of India. MSME Certification (UDAYAM-DL-04-0026480)
          and ISO 9001:2015 Certification (22ZMAE2761Q) and recognized as a Startup by the Department for Promotion of Industry
          and Internal Trade vide Certificate Number: DIPP165782.
        </p>
      </div>
    </header>
  );
};

export default HeaderMobile;
