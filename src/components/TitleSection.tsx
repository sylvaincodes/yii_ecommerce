import React from "react";

type TitleSectionProps = {
  title: string;
  description: string;
  dark?: string;
};

const TitleSection = ({ title, description, dark }: TitleSectionProps) => {
  return (
    <div
      className={`font-body flex flex-col gap-y-2 justify-center items-center text-center dark:text-${dark}`}
    >
      <h1
        className={`text-2xl font-bold first-letter:capitalize text-center md:text-4xl 
       text-gray-700 dark:text-${dark}`}
      >
        {title}
      </h1>
      <p
        className={`text-sm md:text-xl font-normal leading-7 text-gray-600 dark:text-${dark}`}
      >
        {description}
      </p>
    </div>
  );
};

export default TitleSection;
