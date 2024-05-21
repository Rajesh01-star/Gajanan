"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      image: "/testimonials/rajnandini.png",
      name: "Rajnandini Patnaik",
      comment:
        "a week ago NEW Driving with DEBASISH SIR was an unparalleled experience, blending skill with patience and wisdom. His guidance transformed every twist and turn into a lesson, making each drive not just about reaching a destination, but about embracing the journey itself. I can't thank him enough for imparting not just driving skills, but also instilling a sense of responsibility",
    },
    {
      id: 2,
      image: "/testimonials/tushar.png",
      name: "Tushar Sarangi",
      comment:
        "The experience with the trainer Mr.Tapas of Gajanan driving school was smooth, the way he guides very calmly is the main thing to learn well for a new driver. Thank you Sir.",
    },
    {
      id: 3,
      image: "/testimonials/mina.png",
      name: "Minakshi Ghosh",
      comment:
        "Learnt driving through this driving school, This stands out through their training instructor's  teaching methodology, friendly behavior, timing promptness, etc. Highly recommending this school to learn driving. My instructor abhaya sir is",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, testimonials.length]);

  const goToPrevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide(
      currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <section
      className="bg-gray-100 mt-6 lg:p-20 py-20 px-4 bg-no-repeat bg-right-bottom"
      style={{ backgroundImage: "url('/testimonialBg.png')" }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">
        What our students are saying?
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-10 h-[400px]">
            <img
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].name}
              className="w-40 h-40 object-cover rounded-full mx-auto mt-8"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">
                {testimonials[currentSlide].name}
              </h3>
              <p className="text-gray-600 mt-2">
                {testimonials[currentSlide].comment.substring(0,200)}...
              </p>
            </div>
            <div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white cursor-pointer hover:bg-gray-200"
              onClick={goToPrevSlide}
            >
              <FaChevronLeft />
            </div>
            <div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white cursor-pointer hover:bg-gray-200"
              onClick={goToNextSlide}
            >
              <FaChevronRight />
            </div>
          </div>
          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentSlide ? "bg-red-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
