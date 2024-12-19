import React from "react";

const BusinessSection = () => {
  const content = [
    {
      title: "Lorem ipsum dolor",
      subtitle: "Etiam eget",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit lacus ut mi euismod, ut malesuada erat luctus. Vestibulum sit amet justo et augue tincidunt tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra libero egestas rutrum scelerisque. Nam at lacus ac felis suscipit lobortis quis at nisi. Nam at lacus ac felis suscipit lobortis quis at nisi.  ",
      image: "/public/assets/featuredbrands/puppypaw.svg", // Replace with actual image path
      link: "#",
    },
    {
      title: "Lorem ipsum dolor",
      subtitle: "Etiam eget",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit lacus ut mi euismod, ut malesuada erat luctus. Vestibulum sit amet justo et augue tincidunt tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra libero egestas rutrum scelerisque. Nam at lacus ac felis suscipit lobortis quis at nisi. Nam at lacus ac felis suscipit lobortis quis at nisi.  ",
      image: "/public/assets/featuredbrands/puppypaw.svg", // Replace with actual image path
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 mt-60">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold leading-[57px] mb-4">For Business and Customers</h2>
        <p className="text-gray-600 font-normal text-xl">
          Discover student-loved brands with the latest in fashion and more.
        </p>
      </div>

      {/* Content Rows */}
      <div>


        
      </div>
      <div className="max-w-6xl mx-auto space-y-12 py-20">
        {content.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-4">
              <img
                src={item.image}
                alt={item.subtitle}
                className="w-[600px] h-[501.75px] rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 p-4 text-center md:text-left">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <h4 className="text-xl text-[#000] mb-4">{item.subtitle}</h4>
              <p className="text-gray-600 mb-4">{item.description}</p>

              <h4 className="text-xl text-[#000] mb-4">{item.subtitle}</h4>
              <p className="text-gray-600 mb-4">{item.description} <a href="#" className="text-[#008060] underline">Get your business onboard today</a></p>
              <a
                href={item.link}
                className="text-[#008060] font-semibold hover:underline"
              >
                Join the Platform →
              </a>
            </div>
          </div>
        ))}
      </div>



       {/* Content Rows */}
        <div className="max-w-6xl mx-auto space-y-12 ">
        {content.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center`}
          >
            
          </div>  
        ))}
      </div>


      
    </section>
  );
};

export default BusinessSection;
