"use client";

import React from "react";
import Lottie from "react-lottie";
import LaptopAnimationData from "/public/animation/laptop.json";
import ManAnimation from "/public/animation/ManAnimation.json";

const Laptop = () => {
  const defaultData = {
    loop: true,
    autoplay: true,
    animationData: ManAnimation,
  };

  return (
    <div>
      <Lottie options={defaultData} />
    </div>
  );
};

export default Laptop;
