"use client";
import PageHero from "@/app/Components/PageHero";
import { useRouter } from "next/navigation";

const CourseToContactBtn = ({ btnText, navigate, isPaymentBtn = false }) => {
  const router = useRouter();

  const handleClick = () => {
    if (isPaymentBtn) {
      window.location.href = "https://smartpay.easebuzz.in/160419/373bb43f1ffb45a7abc6d26f87f61cfc";
    } else {
      router.push(`/contact?course=${navigate}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="border border-[#ff2323] w-fit text-[#ff2323] font-semibold py-2 px-6 rounded-md"
    >
      {btnText}
    </button>
  );
};

export default function CourseType({ params }) {
  const { coursesType } = params;
  const course = courses.find((course) => course.slug === coursesType);
  const descriptionPoints = course.description
    .split(". ")
    .map((point, index) => (
      <li key={index} className="mb-2">
        {point}
      </li>
    ));

  return (
    <>
      <PageHero pageTitle={`Our ${coursesType} course`} />
      {!course ? (
        <main>Course not found.</main>
      ) : (
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold mb-4">{course.title}</h1>
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
          <ul className="list-disc list-inside mb-4">{descriptionPoints}</ul>
          {course.slug === "refresher" ? (
            <div className="flex flex-col lg:flex-row gap-4">
              <CourseToContactBtn
                btnText={"Small Car: 6000"}
                navigate={course.slug}
              />
              <CourseToContactBtn
                btnText={"Big Car: 8000"}
                navigate={course.slug}
              />
              <CourseToContactBtn
                btnText={"Pay Now"}
                isPaymentBtn={true}
              />
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-4">
              <CourseToContactBtn
                btnText={`Price: ${course.price}`}
                navigate={course.slug}
              />
              <CourseToContactBtn
                btnText={"Pay Now"}
                isPaymentBtn={true}
              />
            </div>
          )}
        </main>
      )}
    </>
  );
}

const courses = [
  {
    slug: "primary",
    price: 4500,
    description:
      "Our Primary Course is designed for new learners and focuses on hatchback vehicles. Over 21 days, you will receive 15 days of practical training, with daily 30-minute driving sessions, and 6 days of theory classes held every Sunday. This comprehensive course ensures you gain both practical driving skills and essential theoretical knowledge to drive safely and confidently.",
    imageUrl: "/serviceImages/course1.png",
    title: "Primary Course",
  },
  {
    slug: "secondary",
    price: 4500,
    description:
      "Our Secondary Course is perfect for those who have some driving experience but want to improve their skills. Over 15 days, you will receive 8 days of practical training with 1-hour sessions and 7 theory classes, focusing on hatchback vehicles. This course is designed to enhance your driving proficiency and road safety knowledge.",
    imageUrl: "/serviceImages/course2.png",
    title: "Secondary Course",
  },
  {
    slug: "premium",
    price: 6000,
    description:
      "Our Premium Course offers an in-depth driving experience with a focus on SUV vehicles. Over 21 days, you will receive 15 days of practical training, with daily 30-minute driving sessions, and 6 days of theory classes held every Sunday. This course provides advanced driving techniques and comprehensive knowledge for a confident driving experience.",
    imageUrl: "/serviceImages/course3.jpg",
    title: "Premium Course",
  },
  {
    slug: "refresher",
    price: {
      smallCar: 6000,
      bigCar: 8000,
    },
    description:
      "Our Refresher Course is ideal for licensed drivers who want to refresh their driving skills. This 10-day course includes 1-hour daily practical sessions. The price varies depending on the vehicle type: 6000 for small cars and 8000 for big cars. Perfect for regaining confidence on the road.",
    imageUrl: "/serviceImages/course4.jpg",
    title: "Refresher Course",
  },
];
