import React, { useState } from 'react';
import Person from './person'; // Import the Person component
import Jamia from './university/Jamia.jsx'; // Import the Jamia component
import Integral from './university/Integral.jsx'; // Import the Integral component
import SGT from './university/SGT.jsx';
import ECCouncil from './university/ECCouncil.jsx';
import CCIFS from './university/CCIFS.jsx';
import ForensicLab from './forensicLab.jsx';
import MOU from './mou.jsx';




const Home = () => {
  const [activeTab, setActiveTab] = useState('Resource Person');
  const [activeSecondTab, setActiveSecondTab] = useState('Jamia Hamdard');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Resource Person':
        return <Person />;
      case 'Forensic':
        return <ForensicLab/> ;
      case 'MOU/Collaboration':
        return <MOU/>;
      default:
        return null;
    }
  };

  const renderSecondTabContent = () => {
    switch (activeSecondTab) {
      case 'Jamia Hamdard':
        return <Jamia />;
      case 'Integral University':
        return <Integral />;
      case 'SGT University':
        return <SGT />;
      case 'EC-Council':
        return <ECCouncil />;
      case 'CCIFS':
        return <CCIFS/>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row gap-6">
      {/* First Column */}
      <div className="flex flex-col w-full md:w-1/2">
        {/* Upcoming Events Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 event-card">
  <h2 className="text-2xl font-semibold mb-4 text-center">Upcoming Events</h2>
  <div
    className="overflow-y-auto overflow-x-hidden"
    style={{ maxHeight: '300px' }} // Set max height for scrolling
  >
    <ul className="list-disc pl-5 space-y-3 text-sm">
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">Call for Book Chapters</span>
      </li>
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">3 Weeks Virtual Forensics Internship</span>
      </li>
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">1 Month Online Certificate Course in Forensic Psychology</span>
      </li>
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">1 Month Certificate Course in Forensic Biology & Serology</span>
      </li>
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">3 Month Certificate Course in Forensic Science at Jamia Hamdard</span>
      </li>
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">3 Month Certificate Course in Forensic Nursing at Jamia Hamdard</span>
      </li>
      <li className="transition-transform transform hover:scale-105">
        <span className="font-medium">3 Month Certificate Course in Cyber & Digital Forensic at Jamia Hamdard</span>
      </li>
    </ul>
  </div>
</div>

        {/* Additional Information Section with Tabs */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-6 flex-1">
          <h2 className="text-xl font-bold mb-4">_</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Jamia Hamdard', 'Integral University', 'SGT University', 'EC-Council', 'CCIFS'].map((tab) => (
              <button
                key={tab}
                className={`flex-1 min-w-[45%] p-2 rounded-lg text-center ${
                  activeSecondTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setActiveSecondTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div
            className="overflow-y-auto"
            style={{ maxHeight: '600px' }} // Set max height for scrolling
          >
            {renderSecondTabContent()}
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full md:w-1/2 flex-1">
        <h2 className="text-xl font-bold mb-4"></h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {['Resource Person', 'Forensic', 'MOU/Collaboration'].map((tab) => (
            <button
              key={tab}
              className={`flex-1 min-w-[45%] p-2 rounded-lg text-center ${
                activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div
          className="overflow-y-auto"
          style={{ maxHeight: '600px' }} // Set max height for scrolling
        >
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Home;
