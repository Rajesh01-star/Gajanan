"use client";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const InstructorCard = ({ name, post, imageUrl }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="relative lg:h-80 h-72">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
        <div className="absolute rounded-tl-lg border-l-8 border-l-[#ff2323] bottom-0 left-10 hover:left-0 hover:scale-105 duration-500 cursor-pointer transition-all ease-in-out bg-white px-4 py-2 w-full">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-500">{post}</p>
        </div>
      </div>
    </div>
  );
};

const InstructorSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Adjust as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      className="container mt-10 lg:px-40"
    >
      <h2 className="text-3xl font-semibold mb-10 text-center">
        <span>
          Meet Our Professional <br className="lg:block hidden" />
          and Experienced Instructors
        </span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-0">
        <InstructorCard
          name="John Doe"
          post="Driving Instructor"
          imageUrl="/about/instructor1.jpg"
        />
        <InstructorCard
          name="Jane Smith"
          post="Traffic Expert"
          imageUrl="/about/instructor2.jpg"
        />
        <InstructorCard
          name="Michael Johnson"
          post="Road Safety Advisor"
          imageUrl="/about/instructor3.jpg"
        />
      </div>
    </motion.section>
  );
};

export default InstructorSection;
