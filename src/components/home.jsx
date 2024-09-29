import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // For adding meta tags for SEO
import Person from './person'; 
import Jamia from './university/Jamia.jsx'; 
import Integral from './university/Integral.jsx'; 
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
        return <ForensicLab />;
      case 'MOU/Collaboration':
        return <MOU />;
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
        return <CCIFS />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>CCIFS - Center for Criminal Investigation & Forensic Science</title>
        <meta
          name="description"
          content="CCIFS provides cutting-edge education in forensic science, criminal investigation, and related fields. Explore our courses, events, and partnerships with top universities."
        />
        <meta name="keywords" content="CCIFS, forensic science, criminal investigation, forensic courses, forensic internships, MOU, collaborations" />
        <meta name="author" content="CCIFS PVT LTD" />
        <meta property="og:title" content="CCIFS - Center for Criminal Investigation & Forensic Science" />
        <meta property="og:description" content="Join the CCIFS and enhance your knowledge in forensic science and criminal investigation with our specialized courses." />
        <meta property="og:image" content="/path/to/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ccifs.in/" />
        <meta name="robots" content="index, follow" />

        {/* Schema.org for Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "CCIFS",
              "url": "https://ccifs.in",
              "logo": "/ccifs_logo.jpeg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "220, 2nd FLOOR, AMBA TOWER, DC CHOWK COMMUNITY CENTER, PLOT NO 2, near POLICE STATION, PRASHANT VIHAR, Sector 9, Rohini",
                "addressLocality": "Delhi",
                "postalCode": "110085",
                "addressCountry": "IN"
              },
              "description": "CCIFS offers courses and internships in forensic science and criminal investigation."
            }
          `}
        </script>
      </Helmet>

      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row gap-6">
        {/* First Column */}
        <div className="flex flex-col w-full md:w-1/2">
          {/* Upcoming Events Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 event-card">
            <h2 className="text-2xl font-semibold mb-4 text-center">Upcoming Events</h2>
            <div className="overflow-y-auto overflow-x-hidden" style={{ maxHeight: '300px' }}>
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

          {/* University Collaboration Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-6 flex-1">
            <h2 className="text-xl font-bold mb-4">Our Collaborations</h2>
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
            <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
              {renderSecondTabContent()}
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full md:w-1/2 flex-1">
          <h2 className="text-xl font-bold mb-4">Our Initiatives</h2>
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
          <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
