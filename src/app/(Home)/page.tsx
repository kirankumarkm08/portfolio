"use client";

import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Reveal from "@/components/Open";
import Navbar from "@/components/Navbar";

import { useState, useEffect } from "react";
const Home = () => {
  const [reveal, setReveal] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setReveal(false);
    }, 5000);
  }, []);

  return (
    <div>
      {/* {reveal ? (
        <Reveal />
      ) : (
        <div className="">
          <Hero />
          <Intro />
          <Projects />
          <Contact />
        </div>
      )} */}

      <div className="">
        {/* <Navbar /> */}
        <Hero />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
