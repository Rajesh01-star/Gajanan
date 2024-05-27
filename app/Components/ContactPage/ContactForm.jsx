"use client";

import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnqeybvk");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  if (state.succeeded && !isModalOpen) {
    setIsModalOpen(true);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const course = urlParams.get("course");
      if (course) {
        setSelectedCourse(course);
      }
    }
  }, []);

  return (
    <div className="container mx-auto lg:px-56 px-4">
      <h2 className="lg:text-3xl text-2xl font-semibold mb-6 text-center mt-6 px-4">
        Feel Free to Write Us Anytime
      </h2>
      <form
        className="flex flex-col space-y-4 px-4 items-center"
        onSubmit={handleSubmit}
      >
        <section className="flex lg:flex-row flex-col gap-4 w-full">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 lg:py-4 py-2"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 lg:py-4 py-2"
            required
          />
        </section>
        <section className="flex lg:flex-row flex-col gap-4 w-full">
          <select
            id="course"
            name="course"
            value={selectedCourse}
            onChange={handleCourseChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 lg:py-4 py-2"
            required
          >
            <option value="">Select a course</option>
            <option value="primary">Primary Course - ₹4500</option>
            <option value="secondary">Secondary Course - ₹4500</option>
            <option value="premium">Premium Course - ₹6000</option>
            <option value="refresher">Refresher Course - ₹8000</option>
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 lg:py-4 py-2"
            required
          />
        </section>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Message"
          className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 lg:py-4 py-2"
        ></textarea>
        <button
          disabled={state.submitting}
          type="submit"
          className="lg:w-1/3 w-1/2 h-12 lg:h-16 bg-[#ff2323] text-white font-semibold py-2 px-4 rounded-md hover:bg-black transition-colors duration-300"
        >
          Submit
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">
              Thank you for contacting us!
            </h2>
            <p className="mb-4">
              We have received your message and will get back to you shortly.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#ff2323] text-white py-2 px-4 rounded-md hover:bg-black transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
