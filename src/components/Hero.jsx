"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Socials } from "@/constants";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Man from "@/components/animation-data/Laptop";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  const homeref = useRef(null);

  const route = useRouter;

  const scrollHandle = () => {
    route.push("#projects");
  };

  return (
    <div className="bg-gradient-hero " ref={homeref}>
      <div className="sm:min-h-screen w-full  md:flex  items-center  ">
        <div className=" flex  items-start  justify-start flex-col ">
          <div className=" flex  justify-start  mt-10  max-w-[900px] text-white transition-transform ease-in-out duration-100 ">
            <div className="max-w-[900px] px-10 font-bold">
              <h1 className="text-[50px] font-bold"> Hello,👋 </h1>
              <h1 className="text-[70px]"> I&aposm a Frontend dev</h1>
              <h1 className=" text-[70px]">I build things for Web </h1>
            </div>
          </div>
          <div className="flex gap-5 text-[25px] items-center justify-start px-10">
            {Socials.map((social) => (
              <Link href={social.link} key={social.name}>
                <div className=""> {social.logo}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className=" max-w-[1000px] hidden  sm:inline-flex  " id="Laptop">
          <Man />
        </div>
      </div>
    </div>
  );
};

export default Hero;
