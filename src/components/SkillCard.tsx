import React from "react";
import Image from "next/image";

const SkillCard = ({ details }: any) => {
  return (
    <div className="flex">
      <div className="w-[200px] h-[200px] bg-[#EF0107] rounded-full shadow-lg hover:shadow-white justify-center flex object-contain  ">
        <Image
          src={details.logo}
          alt={details.name}
          className="w-[100px]  object-contain "
        />
      </div>
    </div>
  );
};

export default SkillCard;
