// components/HeroSection.js

const HeroSection = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center mt-10 sm:mt-1 bg-cover bg-center"
      style={{ backgroundImage: "url('/cover.png')" }}
    >
      {/* Left side: Hero content */}
      <div className="lg:w-1/2 lg:ml-40 sm:ml-10 p-4">
        <h1 className="sm:w-full text-3xl lg:text-6xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight">
          Unlock Your Potential Behind the Wheel
        </h1>
        <p className="lg:w-3/4 sm:w-full text-base lg:text-xl text-gray-600 mb-4 lg:mb-6 leading-relaxed">
          Safety is our top priority. With a focus on defensive driving and
          hazard awareness, we equip our students with the knowledge and skills
          to anticipate and respond to potential dangers on the road.
        </p>
        <button className="bg-[#ff2323] border border-#ff2323 text-white hover:bg-gray-800 py-2 px-6 rounded-lg transition duration-300 ease-in-out">
          Contact Us
        </button>
      </div>

      {/* Right side: Hero image (hidden on smaller screens) */}
      <div className="hidden lg:block lg:w-1/2 mt-8 lg:mt-0 relative">
        <img src="/bg.png" className="" alt="Hero Image" />
        <img
          src="/car.png"
          className="rounded-lg absolute z-20 right-20 bottom-0"
          alt="Car Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
