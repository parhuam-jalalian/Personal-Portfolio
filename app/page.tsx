import Navbar from "@/components/Layout/Navbar/Navbar";
import { About, Hero } from "@/components/Sections";
import { Contact } from "@/components/Sections/Contact";
import Experience from "@/components/Sections/Experience";
import Portfolio from "@/components/Sections/Portfolio";
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
        <About
          about={data?.aboutSection}
          tech={data?.techSection?.technologies}
        />
        <Experience />
        <Portfolio projects={data?.projects} />
        <Contact />
      </main>
    </>
  );
};

export default page;
