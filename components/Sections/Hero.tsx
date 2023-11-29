import Image from "next/image";
import React from "react";
import { LuLinkedin, LuGithub, LuAtSign } from "react-icons/lu";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <h2 className="gradient-text text-4xl line-line-height-4 my-2 font-bold xs:mt-4 xs:text-4xl sm:mt-5">
          Senior <br /> Frontend Developer
        </h2>
        <p className="text-xl text-muted-foreground mb-5">Istiaque Alam Joy</p>
        <div className="flex gap-0">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <LuGithub className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <LuLinkedin className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <LuAtSign className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
      <Image
        width={1000}
        height={1000}
        className="h-[450px] w-[450px] object-cover rounded-xl hidden md:flex"
        src="/profile-picture-joyshaheb.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
