import Image from "next/image";
import React from "react";
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <h2 className="text-2xl font-bold xs:mt-4 xs:text-4xl sm:mt-5">
          Senior Frontend Developer
        </h2>
        <p>Istiaque Alam Joy</p>
        <div className="flex gap-0">
          <Button variant="ghost" size="icon">
            <LuLinkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <LuGithub className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <Image
        width={1000}
        height={1000}
        className="h-[450px] w-[450px] object-cover rounded-xl"
        src="/profile-picture-joyshaheb.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
