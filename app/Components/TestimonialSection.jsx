"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      image: "/portrait1.jpg",
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac libero in velit tincidunt vehicula.",
    },
    {
      id: 2,
      image: "/portrait2.jpg",
      name: "Jane Smith",
      comment:
        "Nullam fringilla tincidunt urna, id scelerisque dui vehicula ut. Nam imperdiet justo non tortor iaculis.",
    },
    {
      id: 3,
      image: "/portrait3.jpg",
      name: "Mary Doe",
      comment:
        "Praesent ullamcorper purus nec nulla commodo, quis vehicula mi gravida. Sed hendrerit lacus id eros consectetur.",
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
    <section className="bg-gray-100 lg:mt-40 mt-20 p-20">
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
                {testimonials[currentSlide].comment}
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
