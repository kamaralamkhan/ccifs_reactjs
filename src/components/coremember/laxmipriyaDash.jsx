import React from "react";
import laxmiImage from "../../assets/coreteam/LaxmiDashPriya.jpeg"; // Adjust the path as needed
import { FaLinkedin, FaTwitter, FaBehance } from "react-icons/fa"; // Add your preferred social icons

const LaxmiPriyaDash = () => {
  return (
    <div className="flex flex-col md:flex-row items-start bg-gray-900 text-white p-8 md:px-20 lg:px-32 space-y-6 md:space-y-0 md:space-x-12 rounded-lg shadow-lg">
      {/* Left container with image and designation */}
      <div className="flex-shrink-0 text-center md:text-left">
        <img
          src={laxmiImage}
          alt="LaxmiPriya Dash"
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover mx-auto md:mx-0"
        />
        <h3 className="mt-4 text-xl font-bold text-white">LaxmiPriya Dash</h3>
        <p className="mt-2 text-sm text-gray-400">Forensic Associate</p>

        {/* Social icons */}
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaBehance size={24} />
          </a>
        </div>
      </div>

      {/* Right container with bio details */}
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-white mb-4">From The Desk of The Forensic Associate</h2>
        <div className="text-gray-300 text-sm leading-relaxed space-y-4 text-justify">
          <p>LaxmiPriya Dash is a highly skilled Forensic Associate at the Centre for Criminal Investigations and Forensic Science, Rohini, New Delhi. With a strong educational foundation in forensic science, she holds a Master of Science in Forensic Biology and Serology from Bundelkhand University, Jhansi, and a Bachelor of Science in Forensic Science from Aditya College of Institutions, Andhra Pradesh.</p>
          <p>Throughout her career, Ms. Dash has gained extensive practical experience in forensic analysis, including internships at the State Forensic Science Laboratory, Bhubaneswar, and the Regional Forensic Science Laboratory, Jhansi. Her research expertise includes a project on “Uncovering Genetic Traces,” where she evaluated DNA estimation methods from cloth and soil samples.</p>
          <p>In addition to her laboratory skills, Ms. Dash has also developed strong computational capabilities through her Post Graduate Diploma in Computer Applications (PGDCA). She has further honed her expertise by participating in court proceedings and autopsy procedures.</p>
          <p>Dedicated to continuous learning and professional growth, LaxmiPriya Dash is committed to advancing her expertise in forensic science and contributing to the field through her work at the Centre for Criminal Investigations and Forensic Science.</p>
        </div>
      </div>
    </div>
  );
};

export default LaxmiPriyaDash;
