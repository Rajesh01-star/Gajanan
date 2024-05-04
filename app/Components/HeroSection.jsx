// components/HeroSection.js

const HeroSection = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center py-24 px-4">
        {/* Left side: Hero content */}
        <div className="lg:w-1/2 lg:mr-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">Your Hero Heading</h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-4 lg:mb-6">Your supporting paragraph. Not more than 3 lines. Each line containing 5 words max.</p>
          <button className="bg-transparent border border-#ff2323 text-#ff2323 hover:bg-#ff5757 hover:text-white py-2 px-6 rounded-lg transition duration-300 ease-in-out">Contact Us</button>
        </div>
        
        {/* Right side: Hero image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="/hero-image-placeholder.jpg" className="rounded-lg" alt="Hero Image" />
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  