import { FaCar, FaCheckCircle, FaUser } from "react-icons/fa";
import PointerCard from "./PointerCard";

const PointersSection = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 lg:gap-24 lg:my-40 my-20 lg:px-40 px-4 justify-center items-center lg:h-40 h-[30rem] overflow-hidden">
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
