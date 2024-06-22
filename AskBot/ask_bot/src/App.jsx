import React from "react";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center bg-gradient-to-b from-gray-700 via-gray-800 to-gray-950 px-8 overflow-y-auto">
      <NavBar />
      <Hero />
      <Demo />
    </main>
  );
};

export default App;
