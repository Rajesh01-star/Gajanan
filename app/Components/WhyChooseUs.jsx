'use client'
import React, { useEffect } from "react";
import { TbCube } from "react-icons/tb";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      className="relative flex flex-col lg:flex-row items-center justify-center mt-10 lg:px-40 px-4"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      {/* Left side: Image */}
      <div className="lg:w-1/2 lg:mr-8">
        <img
          src="/whyChooseUs.png"
          alt="Driving Image"
          className="rounded-lg"
        />
      </div>
      {/* Right side: Text */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:px-10 px-0">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Why You Should Choose Our Driving School?
        </h2>
        <p className="w-full text-base lg:text-xl text-gray-600 mb-4 lg:mb-6 leading-relaxed">
          Opt for our driving school to gain confidence and skills behind the
          wheel. Our personalized approach focuses on real-world readiness with
          expert instruction. Start your driving journey with us today!
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Our Advantages</h3>
          <ul className="list-disc list-inside">
            <li className="flex items-center gap-4">
              <TbCube />
              Expert Instructors
            </li>
            <li className="flex items-center gap-4">
              <TbCube />
              High Pass Rate
            </li>
            <li className="flex items-center gap-4">
              <TbCube />
              Quality Training
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
