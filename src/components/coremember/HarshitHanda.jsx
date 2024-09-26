import React from "react";
import harshitImage from "../../assets/coreteam/Harshit_Handa.jpeg"; // Adjust the path as needed

const HarshitHanda = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white p-8 md:px-20 lg:px-32 space-y-6 md:space-y-0 md:space-x-12 rounded-lg shadow-lg">
      {/* Left container with image and designation */}
      <div className="flex-shrink-0 text-center md:text-left">
        <img
          src={harshitImage}
          alt="Harshit Handa"
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover mx-auto md:mx-0"
        />
        <h3 className="mt-4 text-xl font-bold">Harshit Handa</h3>
        <p className="mt-2 text-sm text-gray-400">Forensic Associate</p>
      </div>

      {/* Right container with bio details */}
      <div className="flex-grow">
        <h2 className="text-2xl font-bold mb-4">Expertise in Forensic Law</h2>
        <div className="text-gray-300 text-sm leading-relaxed space-y-4 text-justify">
          <p>
            Harshit Handa is a seasoned legal expert and advocate, specializing in Criminal Law, Finance, and Cyber Law. With a robust academic foundation, including a graduation from Delhi University, post-graduation in MBA Finance from Bhartiya Vidya Peeth Institute of Management and Research (BVPIMR), LL.B, LL.M (Criminal Law) from Amity University, and a Post Graduate Certificate Course in Cyber Law, Harshit brings comprehensive expertise to criminal investigations.
          </p>
          <p>
            As a practicing advocate in all District and High Courts of India, Harshit possesses extensive knowledge of criminal law and procedure, white-collar crimes, financial fraud investigations, cybercrime, digital forensics, corporate law, and compliance. His unique blend of financial, legal, and technological expertise enables him to provide critical insights and strategic guidance in complex criminal investigations.
          </p>
          <h3 className="font-semibold mt-4">Expertise includes:</h3>
          <ul className="list-disc list-inside">
            <li>Criminal law and procedure</li>
            <li>White-collar crimes</li>
            <li>Financial fraud investigations</li>
            <li>Cybercrime and digital forensics</li>
            <li>Corporate law and compliance</li>
            <li>Forensic law and investigation</li>
          </ul>
          <p>
            As a valued member of our Criminal Investigation team, Harshit is committed to delivering justice and accountability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HarshitHanda;
