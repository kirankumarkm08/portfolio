import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ items }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative max-w-[500px] h-fit my-32 bg-gradient-project shadow-2xl flex flex-col items-center rounded-lg px-5 py-10 text-white">
      <h1 className="sm:text-[30px] flex justify-center">{items.title}</h1>

      <div
        className="relative max-w-[400px] h-[200px] border-2 rounded-lg overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={items.link}>
          <Image
            src={items.image}
            alt={items.title}
            className="w-full h-full object-cover"
          />
        </Link>

        {/* Overlay when hovered */}
        {isHovered && (
          <Link
            href={items.link}
            className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center transition duration-300 ease-in-out"
          >
            <span className="text-white text-2xl">Click Here</span>
          </Link>
        )}
      </div>

      <h1 className="max-w-[400px]  text-[8px] font-medium mt-5">
        {items.description}
      </h1>
      <h1>{items.tech}</h1>
    </div>
  );
};

export default Card;
