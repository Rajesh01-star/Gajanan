import React from "react";

const PointerCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white w-[400px] rounded-lg shadow-lg overflow-hidden mb-6 border border-black h-full">
      <div className="flex">
        {/* Left side */}
        <div className="w-1/3 bg-[#ff2323] border border-black flex items-center justify-center">
          {icon}
        </div>
        {/* Right side */}
        <div className="w-2/3 p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PointerCard;
