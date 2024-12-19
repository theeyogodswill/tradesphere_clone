import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white pt-10">
     
      <div className="px-32">
       {/* Top Section */}

       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Logo & Info */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">TradeSphere</h2>
          <p className="text-sm mb-4">
            Your number one sales platform for all university products.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-75">
            <img 
                src="/assets/hero/X.svg" 
                 alt=""
                className="cursor-pointer"
                        />
            </a>
            <a href="#" className="hover:opacity-75">
            <img 
                src="/assets/hero/Instagram.svg" 
                 alt=""
                className="cursor-pointer"
                        />
            </a>
            <a href="#" className="hover:opacity-75">
            <img 
                src="/assets/hero/Tiktok.svg" 
                 alt=""
                className="cursor-pointer"
                        />
            </a>
            <a href="#" className="hover:opacity-75">
            <img 
                src="/assets/hero/Linkedin.svg" 
                 alt=""
                className="cursor-pointer"
                        />
            </a>
          </div>
        </div>


         {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Brands</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="">All brands</a></li>
            <li><a href="">Category</a></li>
            <li><a href="">New arrivals</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Category</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="">Clothings</a></li>
            <li><a href="">Accessories</a></li>
            <li><a href="">Bags</a></li>
            <li><a href="">Footwear</a></li>
            <li><a href="">Fragrances and Perfumes</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Privacy Policy</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="">All brands</a></li>
            <li><a href="">Category</a></li>
            <li><a href="">New arrivals</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Brands</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="">All brands</a></li>
            <li><a href="">Category</a></li>
            <li><a href="">New arrivals</a></li>
          </ul>
        </div>
      </div>

      </div>
      
       

      {/* Bottom Section */}
      <div className="bg-[#002244] mt-20  py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Country/Region Selector */}
          <div className="mb-4 md:mb-0 ">
            <label htmlFor="region" className="text-sm font-normal leading-5 text-[#fff/59]">
              Country/region
            </label>
            <select
              id="region"
              className="mt-1 block w-full bg-[#002244] border border-gray-600 text-white py-2 px-3 rounded-md focus:outline-none"
            >
              <option value="NG">Nigeria | NGN ₦</option>
              <option value="US">United States | USD $</option>
              <option value="UK">United Kingdom | GBP £</option>
            </select>
          </div>

          {/* Copyright */}
          <div className="text-xs text-white/70 font-normal leading-4 text-center md:text-right">
            &copy; 2024, TradeSphere &middot; <a href="#">Privacy policy</a> &middot; <a href="#">Refund policy</a>
            &middot; <a href="#">Shipping policy</a> &middot; <a href="#">Contact information</a> &middot; <a href="#">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
