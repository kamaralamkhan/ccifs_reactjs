import React from 'react';

// Import MOU images
import christ from "../assets/mou/christ_logo.jpg";
import cpj from "../assets/mou/CPJ_logo.jpeg";
import integral from "../assets/mou/Integral_University.png";
import jamia from "../assets/mou/Jamia_humdard.png";
import niu from "../assets/mou/niu_mumbai.jpg";
import jindal from "../assets/mou/O_P_Jindal_Global_University_Logo.png";
import royal from "../assets/mou/ROYAL_COLLEGE.png";
import sgt from "../assets/mou/SGT_University_logo.jpg";

const MOU = () => {
  const mouImages = [
      { name: "Jamia Hamdard", img: jamia },
      { name: "NIU Mumbai", img: niu },
    { name: "Christ University", img: christ },
    { name: "O.P. Jindal Global University", img: jindal },
    { name: "SGT University", img: sgt },
    { name: "Integral University", img: integral },
    { name: "Royal College", img: royal },
    { name: "CPJ College", img: cpj },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl text-blue-600 font-bold mb-10 text-center">
        <strong>MOUs & Collaborations</strong>
      </h2>
      <hr className="border-b border-gray-300 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {mouImages.map((mou, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={mou.img} alt={mou.name} className="w-full h-48 object-contain p-6" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{mou.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MOU;
