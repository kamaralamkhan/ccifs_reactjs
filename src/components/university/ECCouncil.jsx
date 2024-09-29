import React from 'react';
import ecCouncilLogo from './logo/ec_ccifs.png'; // Update with the actual path to the logo image

const ECCouncil = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        {/* EC-Council Logo */}
        <img src={ecCouncilLogo} alt="EC-Council Logo" className="mb-4 w-40 h-auto" />
        
        {/* International Certification Announcement */}
        <h2 className="text-2xl font-bold text-center mb-4 text-red-600">
          International Certification
        </h2>

        {/* Admission Information */}
        <h2 className="text-xl font-bold text-center mb-4">Admission Open!</h2>

        {/* Description */}
        <p className="text-center">
          Join the ranks of globally recognized professionals with an international certification from the <span className="font-semibold">EC-Council</span>. Secure your future in cybersecurity and digital forensics today.
        </p>

        {/* Call to Action */}
        <p className="text-center mt-4 text-red-600 font-bold">Enroll Now and become certified!</p>
      </div>
    </div>
  );
};

export default ECCouncil;
