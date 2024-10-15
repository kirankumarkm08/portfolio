import React from "react";

const Intro = () => {
  return (
    <div className="w-full h-[400px] py-56 flex-col bg-gradient-hero   px-10  text-white flex justify-center items-center relative">
      <div className="">
        <h1
          className="text-[50px] absolute start-0 top-10 px-10 py-20 "
          id="about"
        >
          About
        </h1>
      </div>
      <h1 className="max-w-[800px] mt-20 font-serif">
        Frontend Developer with year of experience specializing in creating
        responsive and user-friendly web applications for decentralized
        exchanges (DEX). Proficient in JavaScript frameworks like React and
        Next.js, with a strong focus on optimizing performance and enhancing
        user experience. Demonstrated ability to lead cross-functional teams,
        improve customer satisfaction, and contribute to open-source projects.
      </h1>
    </div>
  );
};

export default Intro;
