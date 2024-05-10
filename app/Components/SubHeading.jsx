'use client'

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SubHeading = ({ text }) => {
  const [oscillate, setOscillate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOscillate((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-1 text-md lg:mt-40 mt-20">
      <FaChevronLeft className={`text-red-600 ${oscillate ? "-translate-x-1" : "translate-x-0"} transition-transform duration-1000 ease-in-out`} />
      <FaChevronLeft className={`text-red-600 ${oscillate ? "-translate-x-1" : "translate-x-0"} transition-transform duration-1000 ease-in-out`} />
      <FaChevronLeft className={`text-red-600 ${oscillate ? "-translate-x-1" : "translate-x-0"} transition-transform duration-1000 ease-in-out`} />
      <span>{text}</span>
      <FaChevronRight className={`text-red-600 ${oscillate ? "translate-x-1" : "translate-x-0"} transition-transform duration-1000 ease-in-out`} />
      <FaChevronRight className={`text-red-600 ${oscillate ? "translate-x-1" : "translate-x-0"} transition-transform duration-1000 ease-in-out`} />
      <FaChevronRight className={`text-red-600 ${oscillate ? "translate-x-1" : "translate-x-0"} transition-transform duration-1000 ease-in-out`} />
    </div>
  );
};

export default SubHeading;
