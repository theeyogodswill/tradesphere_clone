import React from "react";

const FeatureSection = () => {
  const features = [
    {
      title: "Community-Driven Insights",
      color: "text-pink-500 border-pink-500",
    },
    {
      title: "Personalized Shopping Experience",
      color: "text-orange-500 border-orange-500",
    },
    {
      title: "Curated Collections by Style",
      color: "text-purple-500 border-purple-500",
    },
    {
      title: "Exclusive Student Discounts",
      color: "text-green-500 border-green-500",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-full bg-white  w-full p-52 mt-36 mb-36">
      {/* Central Title */}
      <div className="text-center mb-12">
        <p className="text-blue-500 text-lg font-semibold bg-[#E5F2FF] rounded-3xl py-2 w-full items-center ">What makes us different</p>
        <h1 className="text-xl font-bold mt-2">
          A Global University Trading Platform
          <br />
          for small and large scale Business.
        </h1>
      </div>

      {/* Feature Cards */}
      <div className="absolute flex items-center justify-center w-full h-full">
        {/* Top-left */}
        <div>
          <div className="absolute top-8 left-52 ">
          <FeatureCard feature={features[0]}/>
        </div>

        {/* Top-right */}
        <div className="absolute top-28 right-52">
          <FeatureCard feature={features[1]} />
        </div>
        </div>

        {/* Bottom-left */}
        <div className="absolute bottom-40 left-28">
          <FeatureCard feature={features[2]} />
        </div>

        {/* Bottom-right */}
        <div className="absolute bottom-16 right-28">
          <FeatureCard feature={features[3]} />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ feature }) => (
  <div
    className={`flex items-center justify-center px-4 py-2 border-2 rounded-full ${feature.color} bg-white shadow-md`}
  >
    <span
      className={`w-6 h-6 flex items-center justify-center rounded-full font-bold ${feature.color}`}
    >
      +
    </span>
    <p className="ml-2 text-sm font-medium">{feature.title}</p>
  </div>
);




export default FeatureSection;
