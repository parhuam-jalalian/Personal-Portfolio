import { ITechStackSingleItem } from "@/types/interface";
import TooltipComponent from "../Tooltip/TooltipComponent";
import Image from "next/image";
import { TechStackEnum } from "@/types/enum";

const TechStack = ({ tech }: { tech: ITechStackSingleItem[] }) => {
  const machine = tech?.filter( (item) => item?.stack == TechStackEnum.MACHINE);
  const frontend = tech?.filter( (item) => item?.stack == TechStackEnum.FRONTEND);
  const backend = tech?.filter((item) => item?.stack == TechStackEnum.BACKEND);
  const cloudDev = tech?.filter((item) => item?.stack == TechStackEnum.CLOUDDEV);
  const testing = tech?.filter((item) => item?.stack == TechStackEnum.TESTING);
  const operating = tech?.filter((item) => item?.stack == TechStackEnum.OPERATING);
  const tools = tech?.filter((item) => item?.stack == TechStackEnum.TOOLS);

  return (
    <section id="#about" className="group">
      <h1 className="title-bottom-line mt-14 cursor-pointer text-2xl">
        Tech Stack
      </h1>

      {machine?.length > 0 && (
        <div className="flex flex-col gap-3 mb-4">
          <h1 className="text-lg uppercase">Machine Learning</h1>
          <div className="flex flex-wrap gap-2">
            {machine.map((item: ITechStackSingleItem) => (
              <TooltipComponent
                key={item?._id}
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
        </div>
      )}

      {frontend?.length > 0 && (
        <div className="flex flex-col gap-3 mb-4">
          <h1 className="text-lg uppercase">Frontend</h1>
          <div className="flex flex-wrap gap-2">
            {frontend.map((item: ITechStackSingleItem) => (
              <TooltipComponent
                key={item?._id}
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
        </div>
      )}

      {backend?.length > 0 && (
        <div className="flex flex-col gap-3">
          <h1 className="text-lg uppercase">backend</h1>
          <div className="flex flex-wrap gap-2">
            {backend.map((item: ITechStackSingleItem) => (
              <TooltipComponent
                key={item?._id}
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
        </div>
      )}

      {cloudDev?.length > 0 && (
        <div className="flex flex-col gap-3 mt-4">
          <h1 className="text-lg uppercase">Cloud & DevOps</h1>
          <div className="flex flex-wrap gap-2">
            {cloudDev.map((item: ITechStackSingleItem) => (
              <TooltipComponent
                key={item?._id}
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
        </div>
      )}

    {testing?.length > 0 && (
        <div className="flex flex-col gap-3 mb-4">
         <h1 className="text-lg uppercase">Testing & Automation</h1>
            <div className="flex flex-wrap gap-2">
                {testing.map((item: ITechStackSingleItem) => (
                <TooltipComponent
                    key={item?._id}
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
        </div>
            )}


    {operating?.length > 0 && (
        <div className="flex flex-col gap-3 mb-4">
         <h1 className="text-lg uppercase">Operating Systems</h1>
            <div className="flex flex-wrap gap-2">
                {operating.map((item: ITechStackSingleItem) => (
                <TooltipComponent
                    key={item?._id}
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
        </div>
            )}

    {tools?.length > 0 && (
        <div className="flex flex-col gap-3 mb-4">
         <h1 className="text-lg uppercase">Tools & Platforms</h1>
            <div className="flex flex-wrap gap-2">
                {tools.map((item: ITechStackSingleItem) => (
                <TooltipComponent
                    key={item?._id}
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
        </div>
            )}


    </section>
  );
};

export default TechStack;
