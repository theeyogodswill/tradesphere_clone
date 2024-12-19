import React from "react";

const logos = [
  "/assets/logoscroll/vinn.svg",
  "/assets/logoscroll/rainbarrel.svg",
  "/assets/logoscroll/routines.svg",
  "/assets/logoscroll/comparevault.svg",
  "/assets/logoscroll/examine.svg",
  // Add more logos as needed
];

const InfiniteScrollLogos = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-100 py-8">
      {/* Marquee Container */}
      <div className="flex items-center space-x-6 animate-marquee">
        {/* First Set of Logos */}
        {logos.map((logo, index) => (
          <img
            key={`logo1-${index}`}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-32 h-auto"
          />
        ))}

        {/* Duplicate Set for Seamless Scroll */}
        {logos.map((logo, index) => (
          <img
            key={`logo2-${index}`}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-32 h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollLogos;
