// import React from 'react';
import { useEffect } from 'react';

const DownloadApp = () => {
  useEffect(() => {
    document.title = 'Download App- CCIFS'; // Set the title for the page
}, []); 
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 pb-10 max-w-lg mx-auto m-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Download Our App</h2>
      
      {/* Description */}
      <p className="text-lg text-gray-700 text-center mb-2">
        Get the app from your preferred store:
      </p>
      
      {/* Code for iOS Users */}
      <span className="text-sm text-gray-600 text-center block mb-6">
        *Use Code: <b>GVFBDI</b> for iOS Users
      </span>
      
      {/* Store Links */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 pb-11">
        
        {/* App Store Link */}
        <a 
          href="https://apps.apple.com/us/app/classplus/id1324522260" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-transform transform hover:scale-105"
        >
          <img 
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
            alt="Download on the Apple App Store" 
            className="w-56 h-auto"
          />
        </a>
        
        {/* Google Play Link */}
        <a 
          href="https://play.google.com/store/apps/details?id=co.arya.wdmqw&pcampaignid=web_share" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-transform transform hover:scale-105"
        >
          <img 
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
            alt="Get it on Google Play Store" 
            className="w-56 h-auto"
          />
        </a>
      </div>
    </div>
  );
};
  
export default DownloadApp;
