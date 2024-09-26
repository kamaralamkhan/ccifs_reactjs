import React from 'react';
import integralLogo from './logo/Integral_ccifs.png'; // Update with the actual path

const Integral = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <img src={integralLogo} alt="Integral University Logo" className="mb-4 w-40 h-auto" />
        <h2 className="text-2xl font-bold text-center mb-4">Admission Open!</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li className="flex items-center">
            <span className="font-semibold">Diploma in Forensic Science</span> (One Year Duration)
          </li>
          <li className="flex items-center">
            <span className="font-semibold">Certificate Course in Cyber & Digital Forensic</span> (Three Month Duration)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Integral;
