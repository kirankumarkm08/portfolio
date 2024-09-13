"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { useState } from "react";
import Intro from "./Intro";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Man from "@/components/animation-data/Laptop";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
        <div className=" flex  items-center flex-col ">
          <div className=" flex  justify-start  mt-10  max-w-[900px] text-white transition-transform ease-in-out duration-100 ">
            <Intro />
          </div>
        </div>
        <div className=" max-w-[1000x] hidden  sm:inline-flex  " id="Laptop">
          <Man />
        </div>
      </div>

      <div className="flex justify-center hidden sm:hidden">
        <Link href="#projects" target="_blank" className="hover:underline">
          scroll to more
        </Link>
      </div>
    </div>
  );
};

export default Hero;
