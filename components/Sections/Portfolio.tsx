import React from "react";

const Portfolio = ({ projects }: { projects: any[] }) => {
  return (
    <section id="#portfolio" className="pt-20 text-muted-foreground sm:text-lg">
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer">Portfolio</h1>
        <p>
          sdcjbds
          {/* {projects?.map((item) => (
            <div key={item?._id} className="">
              
            </div>
          ))} */}
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
