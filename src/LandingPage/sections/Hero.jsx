import FeatureSection from "./Mission";


const Hero = () => {
    return (
        <main className="w-full flex flex-col justify-center items-center">
          <div className="bg-[#052F59] w-full py-3">
            <div className="w-full flex justify-center relative">
              <div className="flex gap-2 absolute left-40 top-0">
                        <img 
                            src="/assets/hero/X.svg" 
                            alt="bbb" 
                            className="cursor-pointer" 
                        />
                        <img 
                            src="/assets/hero/Instagram.svg" 
                            alt="" 
                            className="cursor-pointer"
                        />
                        <img 
                            src="/assets/hero/Tiktok.svg" 
                            alt="" 
                            className="cursor-pointer"
                        />
                        <img 
                            src="/assets/hero/Linkedin.svg" 
                            alt=""
                            className="cursor-pointer"
                        />
                    </div>

                    <p className="flex text-sm text-white font-medium leading-[29.74px]">
                        Get a 25% Discount on All Products! Shop now
                    </p>
                </div>
            </div>
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 min-h-screen text-white">
      {/* Navbar */}
      <nav className="w-full bg-white text-black shadow-md">
        <div className="flex justify-between items-center px-8 py-4">

          <div className="flex items-center justify-evenly px-20">
            <p className="h-8  text-[#00376B] font-semibold text-2xl"> 
                TradeSphere
            </p>
          </div>

          <ul className="flex items-center space-x-8">
            <li className="font-normal text-[#000]">All Brands</li>
            <div className="flex items-center space-x-2 cursor-pointer ">
            <li className="font-normal text-[#000]">Brand Category</li>
            <img 
                src="/assets/hero/Dropdown.svg" 
                alt="" 
                className="hover:rotate-180"
            />
            </div>
            <li className="font-normal text-[#000]">New Arrivals</li>
            </ul>
            <ul className="flex items-center space-x-8">

              <div className="flex items-center space-x-2">
                <img src="/assets/hero/WebIcon.svg" alt="" />
                <li className="text-[#2F313F] font-semibold">EN</li>
                <img src="/assets/hero/DropdownBold.svg" alt="" />
              </div> 
            <li className="text-[#2F313F] font-semibold">Support</li>

            <li className="text-[#2F313F] font-semibold" >
              Login
            </li>

            <li>
              <button className="bg-[#2F313F] text-white px-4 py-2 rounded-3xl font-medium">
                Register
              </button>
            </li>

            </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center px-20 py-20">
        {/* Badge */}
        <div className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full mb-4 flex items-center gap-2">
          <img src="/assets/hero/Star.svg" alt="" className="bg-[#FF1EA9] px-2 py-2 rounded-3xl"/>
          Community-Driven Insights
        </div>

        {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 ">
            Discover & Shop From Your Favorite Brands in Bowen University
          </h1>
        
        

        {/* Subheading */}
        <p className="text-lg font-normal md:text-xl text-white/80 max-w-4xl mb-8">
          Tradesphere bridges the gap between brands and students, offering a
          seamless shopping experience for wear, accessories, perfumes,
          watches, and shoes. Explore exclusive deals and ad spaces tailored
          for the Bowen University community. Shop smarter and stay stylish!
        </p>

        {/* CTA Button */}
        <button className="bg-white px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-blue-100 transition">
          <span className="text-[#00407E] font-semibold">Start Shopping</span>
          <img 
          className="h-2.5 w-2.5"
          src="/public/assets/hero/bluearrow.svg" 
          alt="" 
          />
            
        </button>
      </div>
    </div>

{/*  <InfiniteMovingCards 
      items={items}
      speed="normal"
      direction="left"
      pauseOnHover
      className={``}
    /> */}
    

    
    {/* <FeatureSection /> */}
    </main>
    )
}

export default Hero;