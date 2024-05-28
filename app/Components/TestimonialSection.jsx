"use client";
import { useEffect } from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      image: "/testimonialImages/Ram.jpg",
      name: "Ram Patnaik",
      comment:
        "a week ago NEW Driving with DEBASISH SIR was an unparalleled experience, blending skill with patience and wisdom. His guidance transformed every twist and turn into a lesson, making each drive not just about reaching a destination, but about embracing the journey itself. I can't thank him enough for imparting not just driving skills, but also instilling a sense of responsibility",
    },
    {
      id: 2,
      image: "/testimonialImages/Jhoshna.jpg",
      name: "Jhoshna Sarangi",
      comment:
        "The experience with the trainer Mr.Tapas of Gajanan driving school was smooth, the way he guides very calmly is the main thing to learn well for a new driver. Thank you Sir.",
    },
    {
      id: 3,
      image: "/testimonialImages/Madhav.jpg",
      name: "Madhav Ghosh",
      comment:
        "Learnt driving through this driving school, This stands out through their training instructor's teaching methodology, friendly behavior, timing promptness, etc. Highly recommending this school to learn driving. My instructor abhaya sir is",
    },
  ];

  return (
    <section
      className="bg-gray-100 mt-6 py-20 bg-no-repeat bg-right-bottom"
      style={{ backgroundImage: "url('/testimonialBg.png')" }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">
          What our students are saying?
        </h2>
      </div>
      <div className="mx-auto overflow-hidden relative w-full">
        <div className="flex w-max animate-slide">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-[600px] max-w-[600px] mx-2 bg-white rounded-lg overflow-hidden shadow-lg p-10 flex flex-col justify-around h-[400px]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-40 h-40 object-cover rounded-full mx-auto"
              />
              <div className="text-center mt-2">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 mt-2 break-words">
                  {testimonial.comment.substring(0, 150)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
