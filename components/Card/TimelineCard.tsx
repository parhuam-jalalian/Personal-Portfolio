import React from "react";

const TimelineCard = () => {
  return (
    <li className="mb-6 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
        February 2022 - Present
      </time>
      <h3 className="text-lg font-semibold text-primary">
        Application UI code in Tailwind CSS
      </h3>
      <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        <ol className="list-decimal ms-8 my-2">
          <li>some work 1</li>
          <li>xyz responsibility</li>
          <li>played leadership role</li>
        </ol>
      </div>
    </li>
  );
};

export default TimelineCard;
