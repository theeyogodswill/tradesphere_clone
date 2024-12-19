import React from "react";
import { brands } from "../../../data";


const FeaturedBrands = () => {
  return (
    <div className="w-full flex flex-col items-center gap-12 ">
      <div className=" w-full flex justify-between px-52 py-3">
        <h2 className="font-semibold text-3xl leading-[57px]">Featured Brands</h2>
        <p className="w-[470px] text-right text-sm font-normal leading-[40px]">
          Discover student-loved brands with the latest in fashion and accessories, offering style and quality that fit your budget.
        </p>
      </div>
      <div className=" bg-[#F7F7F7] flex w-full justify-center gap-3 px-20 py-10 ">
        <div className="w-full flex justify-center ">
        {brands.map((brand, index) => (
          <div className="relative h-[580px] w-full flex flex-col mx-4" key={index}>
            
              <img 
                src={brand.image} 
                alt={brand.name} 
                width={1} 
                height={1} 
                className="w-full h-[400px] rounded-3xl" 
              />
              <img className="absolute w-10 h-auto bg-[#fff] rounded-full top-3 right-3 p-2 cursor-pointer" src="/assets/featuredbrands/heart.svg" alt="" />
            <div className="rounded-3xl absolute bottom-0 px-4 pt-2 pb-8 rounded-tl-[30px] rounded-tr-[30px] bg-white">
              <div className="flex justify-between py-3">
                <h3 className="font-bold text-xl">{brand.name}</h3>
                <p className="brand-category text-[#0361BC] font-normal text-base bg-[#E5F2FF] px-4 py-1 rounded-3xl">{brand.category}</p>
              </div>
              <p className="py-2 font-medium text-base leading-7">{brand.description}</p>
              <a href="/">
                <button className="flex items-center justify-center gap-3 bg-[#0D7DE8] w-full py-3 rounded-full mt-3">
                  <p className="text-[#ffffff]">
                    View Brand
                  </p> 
                  <img 
                    className="h-auto w-3"
                    src="/assets/featuredbrands/whitearrow.svg" 
                    alt="" 
                  />
                </button>
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;
