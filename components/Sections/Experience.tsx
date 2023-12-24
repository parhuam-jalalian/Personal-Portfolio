import React from "react";
import TimelineCard from "../Card/TimelineCard";

const Experience = () => {
  return (
    <section id="experience" className="pt-16 text-muted-foreground sm:text-lg">
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer text-2xl">
          Experience
        </h1>
        <div className="">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <TimelineCard />
            <TimelineCard />
            <TimelineCard />
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
