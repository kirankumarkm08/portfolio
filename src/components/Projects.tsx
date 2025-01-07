import React from "react";
import Cards from "./Card";
import Crowdfunding from "/public/thumbnail/Crowdfunding.jpg";
import Hospital from "/public/thumbnail/Hospital-dashboard.jpg";
import Realestate from "/public/thumbnail/Realestate.jpg";
import IMDB from "/public/thumbnail/IMDB.jpg";

const Projects = () => {
  const card = [
    {
      title: "Web3 aggregator",
      description:
        "A Web3 aggregator consolidates data, services, or assets from multiple decentralized sources into a single platform, enhancing user experience by offering seamless access and interaction with various Web3 protocols.",
      image: Crowdfunding,
      link: "",
      tech: "",
    },
    {
      title: "Hospital Staff Dashboard",
      description:
        "A HOSPITAL STAFF MANAGEMENT is a comprehensive software platform that automates hospital operations, including patient records, appointments, billing, and inventory. It improves workflow, enhances communication between departments, ensures data security, and streamlines administrative tasks, leading to better resource management and improved patient care.",
      image: Hospital,
      link: "https://coalition-jade.vercel.app/",
    },
    {
      title: "E-commerce web site",
      description: `E-commerce is the buying and selling of goods and services online. It enables businesses to reach global customers, offering convenience, diverse payment options, and seamless transactions. E-commerce revolutionizes shopping with 24/7 accessibility, personalization, and a wide product selection.`,
      image: Realestate,
      link: "",
    },
    {
      title: "IMDB CLONE",
      description:
        "An IMDb clone built with HTML, Tailwind CSS, and JavaScript uses React for the frontend framework and Next.js for server-side handling. This clone offers a responsive, user-friendly interface to browse and review movies, leveraging modern web technologies for dynamic content rendering and efficient data fetching.",
      image: IMDB,
      link: "https://imdbclone1.vercel.app/",
    },
  ];
  return (
    <div id="projects">
      <div className="bg-gradient-hero min-h-screen      relative py-20  ">
        <div className="  ">
          <h1 className=" text-white end-28 top-96   text-[60px] px-20 hidden lg:inline">
            {" "}
            Projects
          </h1>
        </div>
        <div className="gap-2  px-20 w-full  flex flex-col  justify-between items-center">
          {card.map((i, index) => (
            <div
              className={`project-item ${index % 2 === 0 ? "left" : "right"}`}
              key={i.title}
            >
              <Cards items={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
