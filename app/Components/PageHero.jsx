import React from "react";

const PageHero = ({ pageTitle }) => {
  return (
    <div
      className="bg-cover bg-center py-20 text-white text-center"
      style={{ backgroundImage: "url('/pageHero.png')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{pageTitle}</h1>
      <p className="text-lg md:text-xl">{`Explore our ${pageTitle} page`}</p>
    </div>
  );
};

export default PageHero;
