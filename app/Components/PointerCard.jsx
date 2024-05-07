import React from "react";

const PointerCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white lg:w-[400px] shadow-lg overflow-hidden lg:h-full h-32">
      <div className="flex gap-4 h-full">
        {/* Left side */}
        <div className="lg:w-1/3 w-[20%] bg-[#ff2323] flex justify-center items-center h-full ">
          {icon}
        </div>
        {/* Right side */}
        <div className="lg:w-2/3 w-[80%] lg:p-4 p-2">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PointerCard;
