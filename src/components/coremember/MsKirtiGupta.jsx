import React from "react";
import kirtiImage from "../../assets/coreteam/ms-kirti-gupta.jpg";
import { FaLinkedin, FaTwitter, FaBehance } from "react-icons/fa";

const MsKirtiGupta = () => {
  return (
    <div className="flex flex-col md:flex-row items-start bg-gray-900 text-white p-8 md:px-20 lg:px-32 space-y-6 md:space-y-0 md:space-x-12 rounded-lg shadow-lg">
      {/* Left container with image and designation */}
      <div className="flex-shrink-0 text-center md:text-left">
        <img
          src={kirtiImage}
          alt="Ms. Kirti Gupta"
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover mx-auto md:mx-0"
        />
        <h3 className="mt-4 text-xl font-bold text-white">Kirti Gupta</h3>
        <p className="mt-2 text-sm text-gray-400">Legal and Forensic Head</p>

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
        <h2 className="text-2xl font-bold text-white mb-4">From The Desk of the Legal and Forensic Head</h2>
        <div className="text-gray-300 text-sm leading-relaxed space-y-4 text-justify">
          <p>Ms. Kirti Gupta is the Visiting Faculty (Law & Forensic Science) at Lloyd Institute of Forensic Science, affiliated with the National Forensic Science University. Ms. Gupta is an accomplished criminal lawyer and serves as the head of the Centre for Criminal Investigation & Forensic Science at TSA Law Firm. She earned her LL.M. from Vivekananda Institute of Professional Studies, IP University, bringing a wealth of legal knowledge to her practice.</p>
          <p>Ms. Gupta has rendered her legal expertise and assistance to Delhi Police, providing training on Criminal Law, Investigation, and Forensic Science, and receiving commendations for her contributions.</p>
          <p>Ms. Gupta has also successfully handled numerous criminal trials, appeals, and bail matters in Trial Courts and the Hon’ble High Court of Delhi.</p>
          <p>Additionally, she has served as a Legal Consultant and Panel Lawyer for the Delhi Minorities Commission and the Delhi State Legal Services Authority, contributing significantly to legal education as a Guest Lecturer at institutions like Lloyd Law College and Royal College of Law.</p>
          <p>Ms. Gupta is dedicated to legal awareness, particularly in matters concerning the Protection of Children from Sexual Offenses Act (POCSO) and the Juvenile Justice Act. She has conducted workshops and lectures on these topics for NGOs, schools, and police personnel.</p>
          <p>In addition to her legal advocacy, she has conducted research on acquittal and conviction rates in POCSO cases, and led Faculty Development Programs on Forensic Nursing at institutions like Rufaida College of Nursing, Jamia Hamdard. Ms. Kirti Gupta’s dedication to legal excellence, education, and social welfare makes her a respected figure in the legal community.</p>
        </div>
      </div>
    </div>
  );
};

export default MsKirtiGupta;
