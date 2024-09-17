"use client";

import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Reveal from "@/components/Open";
import Navbar from "@/components/Navbar";

import { useState, useEffect } from "react";
import Skills from "@/components/Skills";
const Home = () => {
  return (
    <div>
      <div className="">
        <Hero />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
