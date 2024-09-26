import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'; // For dropdown icons
import './css/NavBarMobile.css'; // Ensure your CSS file path is correct

const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(''); // Generalize submenu state
  const [subSubMenu, setSubSubMenu] = useState(''); // For nested submenu (Online/Offline)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setSubMenu(''); // Reset submenu when toggling the main menu
    setSubSubMenu(''); // Reset subsubmenu too
  };

  const toggleSubMenu = (menu) => {
    setSubMenu(subMenu === menu ? '' : menu); // Toggle submenu state
    setSubSubMenu(''); // Reset nested submenu on change
  };

  const toggleSubSubMenu = (submenu) => {
    setSubSubMenu(subSubMenu === submenu ? '' : submenu); // Toggle nested submenu state
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center">
        <button onClick={toggleMenu} className="ml-auto text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`flex flex-col space-y-2 pl-4 bg-gray-100 rounded-md shadow-lg transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {/* About Us with Submenu */}
        <div>
          <button
            onClick={() => toggleSubMenu('about')}
            className="flex items-center text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2 w-full text-left"
          >
            About Us
            <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" />
          </button>

          {subMenu === 'about' && (
            <div className="flex flex-col pl-4 space-y-1">
              <a href="/team" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Core Team</a>
              <a href="/advisoryBoard" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Advisory Board</a>
              <a href="/#ourstudents" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Our Students</a>
            </div>
          )}
        </div>

        {/* Academic Programme with Submenu */}
        <div>
          <button
            onClick={() => toggleSubMenu('academic')}
            className="flex items-center text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2 w-full text-left"
          >
            Academic Programme
            <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" />
          </button>

          {subMenu === 'academic' && (
            <div className="flex flex-col pl-4 space-y-1">
              {/* Online Mode Submenu */}
              <div>
                <button
                  onClick={() => toggleSubSubMenu('online')}
                  className="flex items-center text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2 w-full text-left"
                >
                  Online Mode
                  <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" />
                </button>

                {subSubMenu === 'online' && (
                  <div className="flex flex-col pl-4 space-y-1">
                    <a href="/courses/crime-scene-investigation" className="text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2">Certificate course in Crime Scene Investigation</a>
                    <a href="/courses/fingerprint-examination-and-analysis" className="text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2">Certificate course in Fingerprint Examination</a>
                    <a href="/courses/forensic-science" className="text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2">Certificate course in Forensic Science</a>
                  </div>
                )}
              </div>

              {/* Offline Mode Submenu */}
              <div>
                <button
                  onClick={() => toggleSubSubMenu('offline')}
                  className="flex items-center text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2 w-full text-left"
                >
                  Offline Mode
                  <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" />
                </button>

                {subSubMenu === 'offline' && (
                  <div className="flex flex-col pl-4 space-y-1">
                    <a href="#" className="text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2">Forensic Science</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2">Forensic Nursing</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2">Cyber Digital Forensic</a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Courses with Submenu */}
        <div>
          <button
            onClick={() => toggleSubMenu('courses')}
            className="flex items-center text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2 w-full text-left"
          >
            Courses
            <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" />
          </button>

          {subMenu === 'courses' && (
            <div className="flex flex-col pl-4 space-y-1">
              <a href="/courses/document-examination" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Document Examination</a>
              <a href="/courses/fingerprint-examination-and-analysis" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Fingerprint Examination</a>
              <a href="/courses/forensic-biology" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Forensic Biology & Serology</a>
              <a href="#cyber-forensic" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Cyber & Digital Forensic</a>
              <a href="/courses/Crime-Scene-Investigation" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Crime Scene Investigation</a>
              <a href="/courses/forensic-nursing" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Forensic Nursing</a>
              <a href="/courses/forensic-psychology-lie-detection" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Forensic Psychology & Lie Detection</a>
            </div>
          )}
        </div>

        {/* Activities with Submenu */}
        <div>
          <button
            onClick={() => toggleSubMenu('activities')}
            className="flex items-center text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2 w-full text-left"
          >
            Activities
            <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" />
          </button>

          {subMenu === 'activities' && (
            <div className="flex flex-col pl-4 space-y-1">
              <a href="#" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Field Visit</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Events</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 bg-gray-100 rounded p-2">Workshops</a>
            </div>
          )}
        </div>

        <a href="/courses/campus-ambassador" className="text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2">Campus Ambassador</a>
        <a href="#" className="text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2">Career</a>
        <a href="/contact-us" className="text-gray-700 hover:text-blue-500 bg-gray-200 rounded p-2">Contact Us</a>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow transition duration-200 hover:bg-blue-600 focus:outline-none">
           <a href="https://web.classplusapp.com/login?orgCode=gvfbdi">Login</a> 
          </button>
      </div>
    </nav>
  );
};

export default NavBarMobile;
