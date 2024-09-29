import { FaFacebookF, FaInstagram, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { XMarkIcon } from '@heroicons/react/24/solid';  // Updated for Heroicons v2

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto text-center px-4">
        {/* Links */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-6">
          <a href="/" className="text-gray-600 hover:underline">About</a>
          <a href="/" className="text-gray-600 hover:underline">Career</a>
          <a href="#" className="text-gray-600 hover:underline">Courses</a>
          <a href="/mou" className="text-gray-600 hover:underline">MOU</a>
          <a href="/contact-us" className="text-gray-600 hover:underline">Contact Us</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 sm:space-x-8 mb-6">
          <a href="https://www.linkedin.com/company/the-centre-for-criminal-investigation-and-forensic-science/?originalSubdomain=in" className="text-gray-600 hover:text-gray-900">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/ccifs.forensic/" className="text-gray-600 hover:text-gray-900">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <XMarkIcon className="w-6 h-6" /> {/* Heroicon v2 XMarkIcon */}
          </a>
          {/* <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaGithub size={24} />
          </a> */}
          <a href="https://www.youtube.com/channel/UCZu1WdZDFGJb4uh5Fjm17GQ" className="text-gray-600 hover:text-gray-900">
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-900 text-sm flex flex-col sm:flex-row justify-center items-center">
          <span className="mb-2 sm:mb-0">
            © 2024 CCIFS PVT LTD. All rights reserved. | Designed by
          </span>
          <span className="flex items-center space-x-2 ml-1">
            <FaGithub size={16} />
            <a href="https://github.com/kamaralamkhan" className="text-gray-600 hover:text-gray-900">Kamaralamkhan</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
