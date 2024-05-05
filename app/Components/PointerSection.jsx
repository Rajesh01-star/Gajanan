import { FaCar, FaCheckCircle, FaUser } from "react-icons/fa";
import PointerCard from "./PointerCard";

const PointersSection = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 lg:gap-24 lg:my-40 my-20 lg:px-40 px-10 border border-black justify-center items-center">
      <PointerCard
        icon={<FaCar size={32} color="#fff" />}
        title="Modern Vehicles"
        description="We offer training with the latest model vehicles equipped with advanced safety features."
      />
      <PointerCard
        icon={<FaCheckCircle size={32} color="#fff" />}
        title="Certified Instructors"
        description="Our instructors are certified professionals with extensive experience and a passion for teaching, ensuring top-quality instruction."
      />
      <PointerCard
        icon={<FaUser size={32} color="#fff" />}
        title="Personalized Learning"
        description="We tailor our instruction to meet the unique needs and learning styles of each student."
      />
    </div>
  );
};

export default PointersSection;
