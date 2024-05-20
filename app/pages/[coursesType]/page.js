import PageHero from "@/app/Components/PageHero";

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
            <div>
              <span className="border border-[#ff2323] w-fit text-[#ff2323] font-semibold py-2 px-6 rounded-md mr-4">
                Small Car: 6000
              </span>
              <span className="border border-[#ff2323] w-fit text-[#ff2323] font-semibold py-2 px-6 rounded-md">
                Big Car: 8000
              </span>
            </div>
          ) : (
            <p className="border border-[#ff2323] w-fit text-[#ff2323] font-semibold py-2 px-6 rounded-md">
              Price: ${course.price}
            </p>
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
    imageUrl: "/service/course1.png",
    title: "Primary Course",
  },
  {
    slug: "secondary",
    price: 4500,
    description:
      "Our Secondary Course is perfect for those who have some driving experience but want to improve their skills. Over 15 days, you will receive 8 days of practical training with 1-hour sessions and 7 theory classes, focusing on hatchback vehicles. This course is designed to enhance your driving proficiency and road safety knowledge.",
    imageUrl: "/service/course2.png",
    title: "Secondary Course",
  },
  {
    slug: "premium",
    price: 6000,
    description:
      "Our Premium Course offers an in-depth driving experience with a focus on SUV vehicles. Over 21 days, you will receive 15 days of practical training, with daily 30-minute driving sessions, and 6 days of theory classes held every Sunday. This course provides advanced driving techniques and comprehensive knowledge for a confident driving experience.",
    imageUrl: "/service/course3.jpg",
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
    imageUrl: "/service/course4.jpg",
    title: "Refresher Course",
  },
];
