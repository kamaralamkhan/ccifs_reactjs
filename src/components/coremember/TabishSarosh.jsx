import React from 'react';
import tabishImage from '../../assets/coreteam/Tabish_sarosh.jpeg';
import { FaLinkedin, FaTwitter, FaBehance } from 'react-icons/fa';

const TabishSarosh = () => {
  return (
    <div className="flex flex-col md:flex-row items-start bg-gray-900 text-white p-8 md:px-20 lg:px-32 space-y-6 md:space-y-0 md:space-x-12 rounded-lg shadow-lg">
      {/* Left container with image and designation */}
      <div className="flex-shrink-0 text-center md:text-left">
        <img
          src={tabishImage}
          alt="Dr. Tabish Sarosh"
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover mx-auto md:mx-0"
        />
        <h3 className="mt-4 text-xl font-bold text-white">Tabish Sarosh</h3>
        <p className="mt-2 text-sm text-gray-400">Legal Consultant, Delhi Police</p>

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
        <h2 className="text-2xl font-bold text-white mb-4">From The Desk of The Director (TSA & CCIFS)</h2>
        <div className="text-gray-300 text-sm leading-relaxed space-y-4 text-justify">
          <p>Dr. Tabish Sarosh, a seasoned legal professional, is currently a Professor of Practice and consultant at the Lloyd Institute of Forensic Science, affiliated with the National Forensic Science University. With over 15 years of experience in law, justice administration, and forensic science, he holds a Master’s degree in law with a specialization in criminal law, criminology, and forensic science.</p>
          <p>Mr. Sarosh serves as a Legal Consultant with the Delhi Police in the Sultanpuri Division, contributing significantly to criminal law and investigation. His responsibilities include conducting investigations, providing legal assistance, vetting chargesheets, and conducting forensic analyses. His expertise extends to training investigating officers and police personnel in areas such as the POCSO Act and NDPS Act.</p>
          <p>As the visionary founder of the Centre for Criminal Investigation & Forensic Science, Mr. Sarosh has established multiple centers at esteemed institutions, training over 500 students in criminal investigation and forensic science. He has organized national seminars and workshops at prestigious institutions, showcasing his commitment to knowledge dissemination.</p>
          <p>In his diverse legal career, Mr. Sarosh has served as a Panel Lawyer for the Delhi Legal Service Authority, North District, and the All India Legal Cell on Child Rights. He has also played crucial roles in various legal capacities, including serving as an Amicus Curie for POCSO cases and as a Legal Advisor to the Delhi Minorities Commission, Government of N.C.T Delhi.</p>
          <p>Additionally, Mr. Sarosh has shared his expertise through Faculty Development Programs and seminars on law and procedures. His dedication to legal awareness is evident in his role as a Resource Person for various Legal Awareness Programmes organized by DLSA. Furthermore, he has provided valuable legal advice as the Legal Advisor to the Delhi Minorities Commission and served as a member of the POSH Internal Committee at DMC and Caliber Outsourcing Services.</p>
          <p>Overall, Dr. Tabish Sarosh’s extensive contributions to the legal and forensic science fields, coupled with his commitment to education and awareness, make him a prominent figure in the legal community.</p>
        </div>
      </div>
    </div>
  );
};

export default TabishSarosh;
