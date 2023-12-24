import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { IProjectData } from "@/types/interface";

import { GithubIcon, ArrowUpRightIcon } from "lucide-react";

export default function ProjectCard({
  mainImage,
  title,
  description,
  github,
  deployment,
}: IProjectData) {
  return (
    <div className="group/card w-full max-w-[400px] overflow-hidden">
      <Link target="_blank" rel="noreferrer" href={deployment}>
        <Image
          src={mainImage}
          alt={title}
          width={400}
          height={400}
          priority
          className="transition-all duration-500 hover:scale-[.99] hover:opacity-80"
        />
      </Link>

      <div className="p-2 pt-[2px]">
        <div className="flex w-full items-center justify-between">
          <Link
            target="_blank"
            rel="noreferrer"
            href={deployment}
            className="link-hover text-base font-bold text-primary sm:text-lg"
          >
            {title}
          </Link>

          <div>
            <Link
              target="_blank"
              rel="noreferrer"
              href={github}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <GithubIcon />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href={deployment}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <ArrowUpRightIcon />
              <span className="sr-only">Preview</span>
            </Link>
          </div>
        </div>

        <p className="mt-[2px] text-base">{description}</p>
      </div>
    </div>
  );
}
