import React from 'react';
import sgtLogo from './logo/sgt_ccifs.jpg'; // Update with the actual path to the logo image

const SGT = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        {/* SGT University Logo */}
        <img src={sgtLogo} alt="SGT University Logo" className="mb-4 w-40 h-auto" />
        
        {/* Announcement */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Unlock Your Future with Cutting-Edge Forensic Science Programs!
        </h2>
        
        {/* Introduction */}
        <p className="text-center mb-4">
          We are thrilled to announce the launch of our Certificate Courses (Recognized by SGT University, Gurugram) in:
        </p>
        
        {/* Courses List */}
        <ul className="list-disc pl-5 space-y-2 text-left">
          <li><span className="font-semibold">Forensic Science</span></li>
          <li><span className="font-semibold">Forensic Nursing</span></li>
          <li><span className="font-semibold">Cyber & Digital Forensics</span></li>
          <li><span className="font-semibold">Forensic Psychology</span></li>
        </ul>

        {/* Additional Information */}
        <p className="text-center mt-4">
          In collaboration with <span className="font-semibold">SGT University, Gurugram (Faculty of Law)</span>, these comprehensive programs are designed to equip you with the skills and knowledge to excel in the dynamic field of forensics.
        </p>
        
        {/* Call to Action */}
        <p className="text-center mt-4 text-red-600 font-bold">Hurry! Limited seats available.</p>
        <p className="text-center mt-2 font-semibold">Last Date for Registration: 16th August 2024</p>
        
        {/* Closing Statement */}
        <p className="text-center mt-4 text-blue-500 font-bold">
          Embark on a rewarding career path today. <span className="underline cursor-pointer">Apply Now!</span>
        </p>
      </div>
    </div>
  );
};

export default SGT;
