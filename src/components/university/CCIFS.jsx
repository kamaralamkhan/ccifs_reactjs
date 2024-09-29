import React from "react";
import { Helmet } from "react-helmet";  // Ensure this works
import ccifsLogo from "./logo/ccifs_logo.jpeg";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const CCIFS = () => {
  return (
    <div className="p-4">
      {/* SEO Metadata */}
      <Helmet>
        <title>CCIFS - Center for Criminal Investigation & Forensic Science</title>
        <meta name="description" content="CCIFS offers comprehensive training and education in forensic science and criminal investigation." />
        <meta name="keywords" content="Forensic Science, Criminal Investigation, Legal Services, CCIFS" />
      </Helmet>
      
      {/* Main Content */}
      <div className="flex flex-col items-center">
        <img src={ccifsLogo} alt="CCIFS Logo" className="mb-4 w-40 h-auto" />
        <h1 className="text-2xl font-bold text-center mb-4">Centre for Criminal Investigation & Forensic Science (CCIFS)</h1>
        {/* Contact and Other Information */}
        <div className="mt-4">
          <p className="text-center mb-4">
            CCIFS is an organization based in Delhi, dedicated to providing legal services, criminal litigation, and training in criminal investigation and forensic science.
          </p>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-5 h-5" />
              <p>220, 2nd FLOOR AMBA TOWER, Prashant Vihar, Rohini, Delhi-110085</p>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="w-5 h-5" />
              <p>Email: ccifs.forensic@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5" />
              <p>Phone: 7042915444, 9971695444</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCIFS;
