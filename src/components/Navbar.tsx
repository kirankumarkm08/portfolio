"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const route = useRouter();
  const routehandle = () => {
    route.push("#getintouch");
  };

  const Nav = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "About",
      link: "#about",
    },
  ];

  return (
    <div>
      <nav className="bg-gradient-hero py-5 z-50 text-white flex justify-center w-full fixed px-10">
        <div className="flex min-w-[350px] max-w-full justify-between items-center">
          {Nav.map((item, index) => (
            <div key={index}>
              {/* <Link href={item.link} className="">
                {item.name}
              </Link> */}
              <a href={item.link}> {item.name}</a>
            </div>
          ))}
          <Button
            variant="default"
            className="bg-red-800"
            size="sm"
            onClick={routehandle}
          >
            Get in Touch
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
