import React from "react";
import TimelineCard from "../Card/TimelineCard";

const Experience = () => {
  return (
    <section id="experience" className="pt-16 text-muted-foreground sm:text-lg">
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer text-2xl">
          Experience
        </h1>
        <div className="flex justify-center">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <TimelineCard
              company="abc company"
              position="Senior software engineer"
              from="2019"
              to="present"
            />
            <TimelineCard
              company="abc company"
              position="Junior Frontend engineer"
              from="2019"
              to="present"
            />
            <TimelineCard
              company="abc company"
              position="software engineer"
              from="2019"
              to="present"
            />
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
