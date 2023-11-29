import Image from "next/image";
import React from "react";
import { LuLinkedin, LuGithub, LuAtSign } from "react-icons/lu";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
      <div className="mb-2">
        <h2 className="gradient-text text-3xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl my-2 font-bold">
          Senior Frontend Developer
        </h2>
        <p className="text-2xl text-muted-foreground mb-3">Istiaque Alam Joy</p>
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
        <Button variant="default" size="sm" className="mt-3">
          View Resume
        </Button>
      </div>
      <Image
        width={1000}
        height={1000}
        className="h-[450px] w-[400px] object-cover rounded-xl object-center"
        src="/profile-picture-joyshaheb.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
