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
import { IHeroSectionProps, ITechStackOptionProp } from "@/types/interface";

interface IDataProps {
  heroSection: IHeroSectionProps;
  aboutSection: any[];
  techSection: ITechStackOptionProp;
  projects: any[];
}

const page = async () => {
  const data: IDataProps = await sanityClientFetch({
    query: dataQuery,
  });
  console.log(data?.projects);
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-5xl mt-10 pt-16">
        <Hero {...data?.heroSection} />
        <About about={data?.aboutSection} />
        <TechStack tech={data?.techSection?.technologies} />
        <Experience />
        <Portfolio projects={data?.projects} />
        <Contact />
      </main>
    </>
  );
};

export default page;
