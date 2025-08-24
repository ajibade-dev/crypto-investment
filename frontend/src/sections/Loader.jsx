// Loader.jsx
import React from "react";
import coinflow from '../assets/coinflow.png'
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <img
        src={coinflow} // replace with your logo path
        alt="Logo"
        className="w-[150px] h-[150px] animate-pulse"
      />
    </div>
  );
};

export default Loader;
