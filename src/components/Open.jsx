"use client";

import React, { useEffect } from "react";
import Animation from "@/components/animation-data/pagereveal";
import { gsap, Expo } from "gsap";

const Open = () => {
  // useEffect(() => {
  //   const t1 = gsap.timeline({
  //     onComplete: () => {
  //       console.log("animation completed");
  //     },
  //   });
  //   t1.to("#reveal", {
  //     opacity: 0,
  //     duration: 5,
  //     display: "none",
  //     delay: 0,
  //     ease: Expo.easeInOut,
  //   });
  // });

  return (
    <div
      id="reveal"
      className="absolute h-screen bg-black w-full flex justify-center  items-center "
    >
      <Animation />
    </div>
  );
};

export default Open;
