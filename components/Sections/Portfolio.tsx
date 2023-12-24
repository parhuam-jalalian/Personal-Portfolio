import React from "react";
import ProjectCard from "../Card/ProjectCard";

const Portfolio = ({ projects }: { projects: any[] }) => {
  console.log(projects);
  return (
    <section id="portfolio" className="pt-20 text-muted-foreground sm:text-lg">
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer">Portfolio</h1>
        {projects?.map((item) => <ProjectCard key={item?._id} {...item} />)}
      </div>
    </section>
  );
};

export default Portfolio;
