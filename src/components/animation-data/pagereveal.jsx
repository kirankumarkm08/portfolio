"use client";

import React from "react";
import Lottie from "react-lottie";
import AnimationData from "/public/animation/Page-reveal.json";

const pagereveal = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: AnimationData,
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default pagereveal;
