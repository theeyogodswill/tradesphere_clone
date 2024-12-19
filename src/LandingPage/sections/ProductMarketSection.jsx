import React from "react";

const ProductMarketSection = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-10 mb-4">
            Let’s get your product into the market
          </h1>
          <p className="text-lg text-gray-300 font-normal leading-6 mb-6">
            Start up your business digitally with ease.
          </p>
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition">
            Join the Waitlist
          </button>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <ol className="list-none space-y-4">
            {[
              "Register your Business",
              "Select business category",
              "Upload your products",
              "Track your product sales",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 border-b border-gray-400 pb-2"
              >
                <span className="text-blue-500 font-bold">›</span>
                <span className="text-lg">{index + 1}. {item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ProductMarketSection;
