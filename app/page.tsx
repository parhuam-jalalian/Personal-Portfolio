import Navbar from "@/components/Layout/Navbar/Navbar";
import {
  About,
  Hero,
  Contact,
  TechStack,
  Portfolio,
  Experience,
} from "@/components/Sections";
import { sanityClientFetch } from "@/sanity/lib/client";
import { dataQuery } from "@/sanity/query/queries";
import {
  IExperienceList,
  IHeroSectionProps,
  ITechStackOptionProp,
} from "@/types/interface";

interface IDataProps {
  heroSection: IHeroSectionProps;
  aboutSection: any[];
  techSection: ITechStackOptionProp;
  projects: any[];
  experience: IExperienceList;
}

const page = async () => {
  const data: IDataProps = await sanityClientFetch({
    query: dataQuery,
  });
  // console.log("experience", data?.experience);
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-5xl mt-10 pt-16">
        <Hero {...data?.heroSection} />
        <About about={data?.aboutSection} />
        <TechStack tech={data?.techSection?.technologies} />
        <Experience data={data?.experience?.experiences} />
        <Portfolio projects={data?.projects} />
        <Contact />
      </main>
    </>
  );
};

export default page;
