const TopBar = () => {
  return (
    <div className="bg-purple-900 text-white py-2 px-4 flex justify-between items-center text-sm">
      <div className="flex items-center space-x-4">
        <span className="flex items-center space-x-2">
          <i className="fas fa-phone-alt"></i>
          <a href="tel:+9199771695444" className="hover:underline">
            <span>+91 99771695444</span>
          </a>
        </span>
        <span className="flex items-center space-x-2">
          <i className="fas fa-envelope"></i>
          <a href="mailto:ccifs.forensic@gmail.com" className="hover:underline">
            <span>ccifs.forensic@gmail.com</span>
          </a>
        </span>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook hover:text-gray-300"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram hover:text-gray-300"></i>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
