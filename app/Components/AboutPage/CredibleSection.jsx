import Image from "next/image";
import { FaUserGraduate, FaSmile, FaUsers } from "react-icons/fa";

const StatsCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-md flex flex-col items-center md:w-1/3 h-48 cursor-pointer hover:bg-[#ff2323] transition-all ease-in-out duration-500">
      {icon}
      <div className="flex flex-col items-center -translate-y-4">
        <h4 className="text-white font-semibold text-2xl">{value}</h4>
        <p className="text-white text-lg">{title}</p>
      </div>
    </div>
  );
};

const AboutPageHero = () => {
  return (
    <section className="bg-[url('/pageHero.png')] w-full bg-cover">
      {/* Left Section */}
      <div className="lg:mt-40 mt-20 py-20 px-4 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center backdrop-blur-sm">
        <div className="text-white w-full md:w-1/2 lg:w-2/5">
          <h3 className="lg:text-base text-lg font-semibold mb-4 text-[#ff2323]">
            Are You Ready to Learn?
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Students Pass the Driving Test
          </h2>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md">
            Learn More
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row w-full md:w-1/2 lg:w-3/5 px-20 lg:py-0 py-8 lg:px-0 lg:gap-4 gap-10">
          <StatsCard
            icon={
              <div className="rounded-full bg-black overflow-hidden flex justify-center items-center p-8 -translate-y-8">
                <FaUserGraduate className="text-white text-4xl" />
              </div>
            }
            title="Students Enrolled"
            value="30.3k"
          />

          <StatsCard
            icon={
              <div className="rounded-full bg-black overflow-hidden flex justify-center items-center p-8 -translate-y-8">
                <FaSmile className="text-white text-4xl" />
              </div>
            }
            title="Satisfaction Rate"
            value="30.3k"
          />

          <StatsCard
            icon={
              <div className="rounded-full bg-black overflow-hidden flex justify-center items-center p-8 -translate-y-8">
                <FaUsers className="text-white text-4xl" />
              </div>
            }
            title="Students Enrolled"
            value="30.3k"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPageHero;
