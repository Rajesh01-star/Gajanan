import Link from "next/link";
import Image from "next/image";

import { FaArrowRight, FaDollarSign } from "react-icons/fa";

const CourseOptionCard = ({ imageUrl, title, description, price }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
      {/* Cube with price tag */}
      <div className="relative h-64">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <div className="bg-black text-[#ff2323] h-16 w-16 flex items-center justify-center outline outline-offset-4 outline-1">
          <span className="font-semibold flex justify-center items-center">
            <FaDollarSign className="mr-1" />
            {price}
          </span>
        </div>
        <h2 className="text-2xl font-semibold my-3">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4">
          <Link href="/services" className="flex items-center text-red-600">
            <span>Learn More</span>
            <FaArrowRight className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const CourseOptionsSection = () => {
  return (
    <section className="mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">
            Develop Your Driving Skill <br /> to Join the Course
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CourseOptionCard
            imageUrl="/course1.png"
            title="Defensive Driving Course"
            description="Learn advanced driving techniques to prevent accidents and improve safety on the road."
            price={80}
          />
          <CourseOptionCard
            imageUrl="/course2.png"
            title="City Driving Course"
            description="Master the skills needed for navigating busy city streets and dealing with urban driving challenges."
            price={120}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseOptionsSection;
