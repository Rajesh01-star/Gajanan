"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor hidden lg:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "left 0.3s ease, top 0.3s ease", // Add transitions here
      }}
    ></div>
  );
};

export default CustomCursor;
