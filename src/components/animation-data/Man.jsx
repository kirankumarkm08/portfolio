import React from "react";
import Lottie from "react-lottie";
import Man1 from "/public/animation/ManAnimation.json";

const Man = () => {
  const data = {
    loop: true,
    animationData: Man1,
  };
  return (
    <div>
      <Lottie data={data}  />
    </div>
  );
};

export default Man;
