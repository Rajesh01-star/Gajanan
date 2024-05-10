"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const FAQSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is your cancellation policy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit turpis.",
    },
    {
      id: 2,
      question: "How do I book a lesson?",
      answer:
        "Nullam at leo nec mauris varius hendrerit. Nullam aliquam eget est at commodo.",
    },
    {
      id: 3,
      question: "Are your instructors certified?",
      answer:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
        id: 4,
        question: "Are your instructors certified?",
        answer:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      },
      {
        id: 5,
        question: "Are your instructors certified?",
        answer:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      },
    // Add more FAQs as needed
  ];

  return (
    <section className="container mx-auto mt-10 lg:px-40 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left column */}

        <div className="flex flex-col justify-center items-center relative">
          <h2 className="text-3xl font-semibold mb-6 pb-8 border-b-[1px] border-[#ff2323]">
            Have Questions in Your Mind? Get the Answers Now
          </h2>
          <div className="relative w-full h-full">
            <img
              src="/faqBg.png"
              alt="FAQ Image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-black bg-opacity-50 rounded-lg px-20 py-10 backdrop-blur-lg">
                <span className="text-4xl font-bold mb-1 flex items-center justify-center text-[#ff2323]">
                  25 <FaPlus className="text-2xl mr-1" />
                </span>
                <div className="text-center">
                  <span className="text-4xl font-bold text-white">
                    years of expertise
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`p-4 rounded-lg shadow-md cursor-pointer relative overflow-hidden inline-block ${
                selectedQuestion === faq.id ? "expanded" : ""
              } border-[1px] border-black w-full`}
              onClick={() => setSelectedQuestion(faq.id)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              {selectedQuestion === faq.id && (
                <p
                  className={`text-gray-700 mt-2 bottom-0 left-0 w-full transition-opacity duration-300 ${
                    selectedQuestion === faq.id
                      ? "block"
                      : "hidden pointer-events-none"
                  }`}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
