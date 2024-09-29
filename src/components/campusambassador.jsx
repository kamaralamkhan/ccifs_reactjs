// import React from 'react';
import React, { useEffect } from 'react';

import ambassador1 from '../assets/campus/brand_ccifs (1).jpeg';
import ambassador2 from '../assets/campus/brand_ccifs (2).jpeg';
import ambassador5 from '../assets/campus/brand_ccifs (5).jpeg';
import ambassador6 from '../assets/campus/brand_ccifs (6).jpeg';
import ambassador7 from '../assets/campus/brand_ccifs (7).jpeg';
import ambassador8 from '../assets/campus/brand_ccifs (8).jpeg';
import ambassador9 from '../assets/campus/brand_ccifs (9).jpeg';
import ambassador10 from '../assets/campus/brand_ccifs (10).jpeg';
import ambassador11 from '../assets/campus/brand_ccifs (11).jpeg';

const CampusAmbassador = () => {
  useEffect(() => {
    document.title = 'Campus Ambassador - CCIFS'; // Set the title for the page
}, []); 
  return (
    <div className="brand-ambassadors bg-gray-100 py-15 px-4 md:px-10 lg:px-20">
      <div className="header-section text-center mb-8">
        <h1 className="text-3xl font-bold pt-10">Campus Ambassadors</h1>
        <h2 className="text-xl text-gray-600">Discover the Faces Behind Our Brand</h2>
      </div>
      <div className="ambassadors-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {[ambassador1, ambassador2, ambassador5, ambassador6, ambassador7, ambassador8, ambassador9, ambassador10, ambassador11].map((ambassador, index) => (
          <div className="ambassador overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105" key={index}>
            <img src={ambassador} alt={`Ambassador ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusAmbassador;
