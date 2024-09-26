import React from 'react';

// Import forensic lab images
import lab1 from "../assets/forensicLab/forenisc_ccifs (1).jpeg";
import lab2 from "../assets/forensicLab/forenisc_ccifs (2).jpeg";
import lab3 from "../assets/forensicLab/forenisc_ccifs (3).jpeg";
import lab4 from "../assets/forensicLab/forenisc_ccifs (4).jpeg";
import lab5 from "../assets/forensicLab/forenisc_ccifs (5).jpeg";
import lab6 from "../assets/forensicLab/forenisc_ccifs (6).jpeg";
import lab7 from "../assets/forensicLab/forenisc_ccifs (7).jpeg";
import lab8 from "../assets/forensicLab/forenisc_ccifs (8).jpeg";
import lab9 from "../assets/forensicLab/forenisc_ccifs (9).jpeg";
import lab10 from "../assets/forensicLab/forenisc_ccifs (10).jpeg";

const ForensicLab = () => {
  const labImages = [
    { img: lab1 },
    { img: lab2 },
    { img: lab3 },
    { img: lab4 },
    { img: lab5 },
    { img: lab6 },
    { img: lab7 },
    { img: lab8 },
    { img: lab9 },
    { img: lab10 },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl text-blue-600 font-bold mb-6 text-center">
        <strong>Forensic Labs</strong>
      </h2>
      <hr className="border-b border-gray-300 mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {labImages.map((lab, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={lab.img} alt={`Forensic Lab ${index + 1}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForensicLab;
