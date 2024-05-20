import Link from "next/link";
import Image from "next/image";

import { FaArrowRight, FaRupeeSign } from "react-icons/fa";

const CourseOptionCard = ({ imageUrl, title, description, price, slug }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
      {/* Cube with price tag */}
      <div className="relative h-64">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <div className="bg-black text-[#ff2323] h-16 w-20 flex items-center justify-center outline outline-offset-4 outline-1">
          <span className="font-semibold flex justify-center items-center">
            <FaRupeeSign className="mr-1" />
            {price}
          </span>
        </div>
        <h2 className="text-2xl font-semibold my-3">{title}</h2>
        <p className="text-gray-700">{description.substring(0, 100)}...</p>
        <div className="mt-4">
          <Link
            href={`/pages/${slug}`}
            className="flex items-center text-red-600"
          >
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
    <section className="mt-6">
      <div className="lg:mx-10 px-4 ">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">
            Develop Your Driving Skill <br className="hidden lg:block" /> to Join the Course
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <CourseOptionCard
            imageUrl="/service/course1.png"
            title="Primary Course"
            description="Our Primary Course is designed for new learners and focuses on hatchback vehicles. Over 21 days, you will receive 15 days of practical training, with daily 30-minute driving sessions, and 6 days of theory classes held every Sunday. This comprehensive course ensures you gain both practical driving skills and essential theoretical knowledge to drive safely and confidently."
            price={4500}
            slug="primary"
          />

          <CourseOptionCard
            price={4500}
            description="Our Secondary Course is perfect for those who have some driving experience but want to improve their skills. Over 15 days, you will receive 8 days of practical training with 1-hour sessions and 7 theory classes, focusing on hatchback vehicles. This course is designed to enhance your driving proficiency and road safety knowledge."
            imageUrl="/service/course2.png"
            title="Secondary Course"
            slug="secondary"
          />
          <CourseOptionCard
            price={6000}
            description="Our Premium Course offers an in-depth driving experience with a focus on SUV vehicles. Over 21 days, you will receive 15 days of practical training, with daily 30-minute driving sessions, and 6 days of theory classes held every Sunday. This course provides advanced driving techniques and comprehensive knowledge for a confident driving experience."
            imageUrl="/service/course3.jpg"
            title="Premium Course"
            slug="premium"
          />
          <CourseOptionCard
            description="Our Refresher Course is ideal for licensed drivers who want to refresh their driving skills. This 10-day course includes 1-hour daily practical sessions. The price varies depending on the vehicle type: 6000 for small cars and 8000 for big cars. Perfect for regaining confidence on the road."
            imageUrl="/service/course4.jpg"
            title="Refresher Course"
            slug="refresher"
            price={6000}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseOptionsSection;
