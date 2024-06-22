import React from "react";

const Hero = () => {
  return (
    <header className="w-full h-60  flex-col font-mono flex justify-center items-center px-2 text-center gap-y-2">
      <h1 className="text-2xl md:text-4xl text-[#EAEAEA] font-extrabold ">
        <span className="text-orange-600"> Welcome to AskBot</span>
        <br className="max-md:hidden" />
        Your Intelligent Question-Answering Partner
      </h1>
      <h2 className="text-[1rem] text-gray-300 font-medium font-inter ">
        Empowering Your Curiosity: Instant, Accurate Responses to Your
        Questions, Powered by AI
      </h2>
    </header>
  );
};

export default Hero;
