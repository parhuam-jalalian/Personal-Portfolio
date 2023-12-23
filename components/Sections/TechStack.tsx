import { ITechStackSingleItem } from "@/types/interface";
import TooltipComponent from "../Tooltip/TooltipComponent";
import Image from "next/image";

const TechStack = ({ tech }: { tech: ITechStackSingleItem[] }) => {
  return (
    <section id="#about" className="group">
      <h1 className="title-bottom-line mt-14 cursor-pointer">Tech Stack</h1>

      <div className="flex flex-wrap gap-2">
        {tech.map((item: ITechStackSingleItem) => (
          <TooltipComponent
            key={item?._key}
            label={item?.label}
            item={
              <Image
                className="cursor-pointer"
                width={45}
                height={45}
                src={item?.icon}
                alt={item?.label}
              />
            }
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
