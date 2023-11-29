import React from "react";
import Navbar from "@/components/Layout/Navbar/Navbar";
import { About, Hero } from "@/components/Sections";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-5xl mt-10 pt-16">
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default page;
