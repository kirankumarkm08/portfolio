import React from "react";
import SkillCard from "./SkillCard";
import { Carddetails } from "@/constants";

const Skills = () => {
  return (
    <div className="bg-gradient-hero h-fit py-10 items-center flex flex-col px-10">
      <h1 className="text-white text-[60px]">
        {" "}
        Technologies I have been working with
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {Carddetails.map((items) => (
          <div className="" key={items.name}>
            <SkillCard details={items} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
