"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/cover.png')" }}
    >
      {/* Left side: Hero content */}
      <div className="lg:w-1/2 lg:ml-40 sm:ml-10 p-4">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 2,
          }}
          className="sm:w-full text-3xl lg:text-6xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight"
        >
          Unlock Your Potential Behind the Wheel
        </motion.h1>
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 22,
            duration: 3,
          }}
          className="lg:w-3/4 sm:w-full text-base lg:text-xl text-gray-600 mb-4 lg:mb-6 leading-relaxed"
        >
          Safety is our top priority. With a focus on defensive driving and
          hazard awareness, we equip our students with the knowledge and skills
          to anticipate and respond to potential dangers on the road.
        </motion.p>
        <button className="bg-[#ff2323] border border-#ff2323 text-white hover:bg-gray-800 py-2 px-6 rounded-lg transition duration-300 ease-in-out">
          <Link href={"/contact"}>
          Contact Us
          </Link>
        </button>
      </div>

      {/* Right side: Hero image (hidden on smaller screens) */}
      <div className="hidden lg:block lg:w-1/2 mt-8 lg:mt-0 relative">
        <motion.img
          src="/bg.png"
          className=""
          alt="Hero Image"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 2,
          }}
        />
        <motion.img
          src="/car.png"
          className="absolute z-20 bottom-0"
          alt="Car Image"
          initial={{ x: "-100vw" }}
          animate={{
            x: [-20, 20, -20],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
