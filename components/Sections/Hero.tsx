import Image from "next/image";
import { LuLinkedin, LuGithub, LuAtSign } from "react-icons/lu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IHeroSectionProps } from "@/types/interface";

const Hero = ({
  email,
  github,
  linkedin,
  mainImage,
  name,
  title,
  resume,
}: IHeroSectionProps) => {
  return (
    <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
      <div className="mb-2">
        <h2 className="gradient-text text-3xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl my-2 font-bold">
          {title}
        </h2>
        <p className="text-2xl text-muted-foreground mb-3">{name}</p>
        {/* icons */}
        <div className="flex gap-1">
          {github && (
            <Link href={github} target="_blank">
              <Button variant="ghost" size="icon">
                <LuGithub className="h-6 w-6" />
              </Button>
            </Link>
          )}

          {linkedin && (
            <Link href={linkedin}>
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

      {mainImage && (
        <Image
          width={1000}
          height={1000}
          className="h-[450px] w-[400px] object-cover rounded-xl object-center"
          src={mainImage}
          alt=""
        />
      )}
    </div>
  );
};

export default Hero;
