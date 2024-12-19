import { div } from "framer-motion/client";
import React from "react";


const features = [
  {
    title: "Add to Favorites (Wishlist)",
    description: "Easy product saving for later purchase.",
  },
  {
    title: "Product Quick View",
    description: "Product exploration without navigating away from the main page.",
  },
  {
    title: "Interactive Rating System",
    description: "Product rating by users.",
  },
  {
    title: "Add to Cart Animation",
    description: "Streamlined shopping experience with instant feedback.",
  },
  {
    title: "Personalized Recommendations Pop-Up",
    description: "Personalized shopping experience.",
  },
];

const AmazingFeatures = () => {
  return (

    <section className="bg-[#00376B] text-white py-12 mt-[170px] h-[440px]">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Amazing Features</h2>
        <p className="text-[#BCB9B9]">
          Explore the amazing features Tradesphere has to offer.
        </p>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl border-[12px] border-[#ADA5A580] overflow-hidden shadow-md">
          {/* Features List */}
          
          <div className="rounded-2xl w-full lg:w-1/2 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-6 py-6 hover:bg-white hover:border-l-[#00376B] hover:border-l-4  bg-blue-100 transition-all duration-300 cursor-pointer 
                  ${ index < features.length - 1 ? "border-b border-blue-300" : ""
                }`}
              >
                <div className="flex gap-5">
                  <img
                    className="flex place-items-start bg-[#0361BC] p-4 rounded-full w-11 h-11" 
                    src="/public/assets/featuredbrands/whitearrow.svg" 
                    alt="" 
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-black">{feature.description}</p>
                  </div>
                </div>
                <img 
                className="w-3 h-auto"
                src="/public/assets/featuredbrands/greaterthan.svg" 
                alt="" 
                />
              </div>
            ))}
          </div>

          {/* Placeholder Content */}
          <div className="w-full lg:w-1/2 bg-blue-50 flex justify-center items-center">
            <p className="text-lg font-semibold text-blue-700">
              Content Placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazingFeatures;
