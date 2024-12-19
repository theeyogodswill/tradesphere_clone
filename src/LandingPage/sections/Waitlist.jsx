import React from "react";

const Waitlist = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r ">
      <div
        style={{
        background: "linear-gradient(269.35deg, #006BD1 7.71%, #00376B 52.47%, #006BD1 97.23%)",
        }} 
        className="w-full max-w-6xl md:p-12 shadow-lg rounded-xl text-center relative"
        >
        <h1 className="text-white font-bold text-2xl md:text-3xl mb-6">
          Trade<span className="text-blue-200">Sphere</span>
        </h1>
        <p className="text-white text-lg mb-6">
          Join the Waitlist to be a part of this amazing experience.
        </p>

        <form className="space-y-4 w-full px-52">
          <input
            type="text"
            placeholder="Full name..."
            className="w-full py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition duration-300"
          >
            Join
          </button>
        </form>

        {/* Placeholder for illustrations */}
        <div className="absolute inset-0 flex justify-between">
          <div className="flex flex-col items-start space-y-4 w-full">
            {/* Left-side placeholder icons */}
            <img 
            className="h-96 p-4"
            src="/public/assets/waitlist/leftillustration.svg" alt="" />
          </div>
          <div className="flex flex-col items-end space-y-4 w-full">
            {/* Right-side placeholder icons */}
            <img 
            className="h-96 p-4"
            src="/public/assets/waitlist/rightillustration.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;

