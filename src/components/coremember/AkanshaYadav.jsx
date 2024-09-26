import React from "react";
import akanshaImage from "../../assets/coreteam/Akansha.jpg"; // Adjust the path as needed

const AkanshaYadav = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white p-8 md:px-20 lg:px-32 space-y-6 md:space-y-0 md:space-x-12 rounded-lg shadow-lg">
      {/* Left container for image and designation */}
      <div className="flex-shrink-0 text-center md:text-left">
        <img
          src={akanshaImage}
          alt="Akansha Yadav"
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover mx-auto md:mx-0"
        />
        <h3 className="mt-4 text-xl font-bold">Akansha Yadav</h3>
        <p className="mt-2 text-sm text-gray-400">Forensic Associate</p>
      </div>

      {/* Right container for bio details */}
      <div className="flex-grow">
        <h2 className="text-2xl font-bold mb-4">Expertise in Multimedia Forensics</h2>
        <div className="text-gray-300 text-sm leading-relaxed space-y-4 text-justify">
          <p>
            Akansha Yadav holds a Master’s degree in Multimedia Forensics from the
            National Forensic Sciences University (NFSU), Gandhinagar, and a
            Bachelor of Science in Physics from Kadi University, Gujarat. With a
            strong academic foundation and specialized expertise in digital,
            audio, and video forensics, Akansha has honed the skills necessary for
            the analysis, recovery, and preservation of digital evidence. Her
            comprehensive knowledge and experience make her a highly capable
            professional in the field of forensic investigations.
          </p>
          <p>
            Akansha is proficient in using a variety of forensic tools and has
            practical knowledge in the fields of digital and cyber forensics. Her
            skill set includes the analysis, recovery, and preservation of digital
            evidence, making her a highly capable and versatile professional in
            forensic investigations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AkanshaYadav;
