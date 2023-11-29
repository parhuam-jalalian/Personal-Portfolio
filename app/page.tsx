import React from "react";
import Navbar from "@/components/Layout/Navbar/Navbar";
import { Hero } from "@/components/Sections";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-5xl mt-10 pt-16">
        <Hero />
      </div>
    </div>
  );
};

export default page;
