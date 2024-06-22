import React from "react";
import { BsRobot } from "react-icons/bs";
const NavBar = () => {
  return (
    <nav className="w-full h-14  flex flex-row mt-2 font-inter items-center justify-between">
      <div className="h-full w-auto flex flex-row gap-2 items-center">
        <BsRobot color="#EAEAEA" size={24} />
        <h1 className="text-[#EAEAEA] text-[1.1rem] font-medium">Ask-Bot</h1>
      </div>
      <button className="bg-gray-900 px-2 py-1 rounded-full text-[#EAEAEA] shadow-md shadow-gray-600 cursor-pointer font-medium text-[1rem] hover:text-gray-700 hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 ">
        Github
      </button>
    </nav>
  );
};

export default NavBar;
