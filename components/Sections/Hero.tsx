import Image from "next/image";
import React from "react";
import { LuLinkedin, LuGithub, LuAtSign } from "react-icons/lu";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
      <div className="mb-2">
        <h2 className="gradient-text text-3xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl my-2 font-bold">
          Senior Frontend Developer
        </h2>
        <p className="text-2xl text-muted-foreground mb-5">Istiaque Alam Joy</p>
        {/* icons */}
        <div className="flex gap-1">
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
        className="h-[450px] w-[420px] object-cover rounded-xl object-center"
        src="/profile-picture-joyshaheb.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
