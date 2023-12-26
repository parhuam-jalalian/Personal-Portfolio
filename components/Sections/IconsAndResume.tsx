import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuAtSign, LuGithub, LuLinkedin } from "react-icons/lu";
import { ILinksProps } from "@/types/interface";

const IconsAndResume = ({ github, linkedin, resume, email }: ILinksProps) => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start">
      <div className="flex gap-1">
        {github && (
          <Link href={github} target="_blank">
            <Button variant="ghost" size="icon">
              <LuGithub className="h-6 w-6" />
            </Button>
          </Link>
        )}

        {linkedin && (
          <Link href={linkedin} target="_blank">
            <Button variant="ghost" size="icon">
              <LuLinkedin className="h-6 w-6" />
            </Button>
          </Link>
        )}

        {email && (
          <Link href={`mailto:${email}`} target="_blank">
            <Button variant="ghost" size="icon">
              <LuAtSign className="h-6 w-6" />
            </Button>
          </Link>
        )}
      </div>

      {resume && (
        <Link href={resume} target="_blank">
          <Button variant="default" size="sm" className="mt-3">
            View Resume
          </Button>
        </Link>
      )}
    </div>
  );
};

export default IconsAndResume;
