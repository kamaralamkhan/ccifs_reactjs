import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'; // Dropdown icon
const NavBar = () => {
  // State to manage which dropdown is open
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null); // For Online/Offline submenus

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu); // Toggle menu state
    setOpenSubMenu(null); // Close sub-menus when switching main menus
  };

  const toggleSubMenu = (submenu) => {
    setOpenSubMenu(openSubMenu === submenu ? null : submenu); // Toggle sub-menu state
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center">
        <div className="flex-grow flex items-center justify-center space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>

          {/* About Us with Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('about')}
              className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              About Us
              <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" />
            </button>
            {openMenu === 'about' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                <a href="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Core Team</a>
                <a href="/advisoryBoard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Advisory Board</a>
                <a href="#ourstudents" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Students</a>
              </div>
            )}
          </div>

          {/* Academic Programme with Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('academic')}
              className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              Academic Programme
              <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" />
            </button>
            {openMenu === 'academic' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                {/* Online Mode */}
                <div className="relative">
                  <button
                    onClick={() => toggleSubMenu('online')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                  >
                    Online Mode
                    <ChevronDownIcon className="w-4 h-4 ml-1 inline text-gray-500" />
                  </button>
                  {openSubMenu === 'online' && (
                    <div className="absolute left-full top-0 mt-0 w-64 bg-white border rounded-md shadow-lg z-50">
                      <a href="/courses/crime-scene-investigation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Certificate Course in Crime Scene Investigation</a>
                      <a href="/courses/fingerprint-examination-and-analysis" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Certificate Course in Fingerprint Examination & Analysis</a>
                      <a href="/courses/forensic-science" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Certificate Course in Forensic Science</a>
                    </div>
                  )}
                </div>

                {/* Offline Mode */}
                <div className="relative">
                  <button
                    onClick={() => toggleSubMenu('offline')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                  >
                    Offline Mode
                    <ChevronDownIcon className="w-4 h-4 ml-1 inline text-gray-500" />
                  </button>
                  {openSubMenu === 'offline' && (
                    <div className="absolute left-full top-0 mt-0 w-64 bg-white border rounded-md shadow-lg z-50">
                      <a href="#offline-forensicscience" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Certificate Course in Forensic Science</a>
                      <a href="#offline-forensicnursing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Certificate Course in Forensic Nursing</a>
                      <a href="#offline-cyberforensic" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Certificate Course in Cyber Digital Forensic</a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Courses with Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('courses')}
              className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              Courses
              <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" />
            </button>
            {openMenu === 'courses' && (
              <div className="absolute left-0 mt-2 w-64 bg-white border rounded-md shadow-lg z-50">
                <a href="/courses/document-examination" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Document Examination</a>
                <a href="/courses/fingerprint-examination-and-analysis" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Fingerprint Examination</a>
                <a href="/courses/forensic-biology" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Forensic Biology & Serology</a>
                <a href="#cyber-forensic" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cyber & Digital Forensic</a>
                <a href="/courses/Crime-Scene-Investigation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Crime Scene Investigation</a>
                <a href="#forensic-nursing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Forensic Nursing</a>
                <a href="#forensic-psychology" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Forensic Psychology & Lie Detection</a>
              </div>
            )}
          </div>

          {/* Activities with Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('activities')}
              className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              Activities
              <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" />
            </button>
            {openMenu === 'activities' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                <a href="#field-visit" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Field Visit</a>
                <a href="#events" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Events</a>
                <a href="#workshop" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Workshop</a>
              </div>
            )}
          </div>

          <a href="/courses/campus-ambassador" className="text-gray-700 hover:text-blue-500">Campus Ambassador</a>
          <a href="#career" className="text-gray-700 hover:text-blue-500">Career</a>
          <a href="/contact-us" className="text-gray-700 hover:text-blue-500">Contact Us</a>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow transition duration-200 hover:bg-blue-600 focus:outline-none">
           <a href="https://web.classplusapp.com/login?orgCode=gvfbdi">Login</a> 
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
