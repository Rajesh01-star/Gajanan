import { FaCar, FaCheckCircle, FaUser } from "react-icons/fa";

const PointerCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white lg:w-[400px] shadow-lg overflow-hidden lg:h-full h-32">
      <div className="flex gap-4 h-full">
        {/* Left side */}
        <div className="lg:w-1/3 w-[20%] bg-[#ff2323] flex justify-center items-center h-full ">
          {icon}
        </div>
        {/* Right side */}
        <div className="lg:w-2/3 w-[80%] lg:p-4 p-2">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};



const PointersSection = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 lg:gap-24 lg:mt-40 mt-20 lg:px-40 px-4 justify-center items-center lg:h-40 h-[30rem] overflow-hidden">
      <PointerCard
        icon={<FaCar size={28} color="#fff" />}
        title="Modern Vehicles"
        description="We offer training with the latest model vehicles with advanced safety features."
      />
      <PointerCard
        icon={<FaCheckCircle size={28} color="#fff" />}
        title="Certified Instructors"
        description="Our instructors are certified professionals with extensive experience."
      />
      <PointerCard
        icon={<FaUser size={28} color="#fff" />}
        title="Personalized Learning"
        description="We tailor our instruction to meet the unique needs of each student."
      />
    </div>
  );
};

export default PointersSection;


