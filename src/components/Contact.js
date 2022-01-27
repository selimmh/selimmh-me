import React, { useRef, useState, useEffect } from "react";
import { Glitch } from "react-teffex";

function Contact() {
  const [isActive, setActive] = useState("Copy");

  const handleClick = () => {
    setTimeout(() => {
      setActive("Copy");
    }, 1000);
    setActive("Copied");
    navigator.clipboard.writeText("selim.mht@gmail.com");
  };

  return (
    <div className="w-auto h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-10">
        <div className="text-2xl md:text-3xl transition-all duration-300 ease-in cursor-pointer">
          <Glitch speed={30} glitchSpeed={5000} text={"selim.mht@gmail.com"} />
        </div>
        <div
          onClick={() => handleClick()}
          className="text-xl px-4 py-2 rounded-lg shadow-xl border-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-out"
        >
          {isActive}
        </div>
      </div>
    </div>
  );
}

export default Contact;
