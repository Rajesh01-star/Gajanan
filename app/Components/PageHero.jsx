'use client'
import React from "react";
import { motion } from "framer-motion";

const PageHero = ({ pageTitle }) => {
  return (
    <div
      className="bg-cover bg-center py-20 text-white text-center"
      style={{ backgroundImage: "url('/pageHero.png')" }}
    >
      <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 20,
          duration: 2,
        }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        {pageTitle}
      </motion.h1>
      <p className="text-lg md:text-xl">{`Explore our ${pageTitle} page`}</p>
    </div>
  );
};

export default PageHero;
