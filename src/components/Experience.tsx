import React from "react";

const Experience = () => {
  return (
    <div className="bg-gradient-project flex flex-col items-center min-h-screen py-5">
      <h1
        className="text-white text-[50px] font-extrabold mt-20"
        id="experience"
      >
        Experience
      </h1>
      <div className="mx-10 md:w-[400px] lg:w-[500px] min-h-[600px] bg-white rounded-lg flex flex-col items-center">
        <h1 className=" font-bold">Frontend Web3 Developer</h1>
        <h2 className=" font-semibold">Bangalore</h2>
        <ul className="px-10  font-extralight">
          <li>
            * Developed and maintained responsive, scalable web applications for
            decentralized exchanges (DEX) using React, Next.js, and RESTful
            APIs, enhancing user interaction and performance.{" "}
          </li>
          <li>
            *Collaborated with backend developers, business analysts, and UI/UX
            designers to translate requirements into seamless, integrated user
            experiences.
          </li>
          <li>
            *Led cross-functional teams through the full development lifecycle,
            from requirement analysis to deployment, consistently delivering
            projects on time and boosting customer satisfaction by reducing
            complaints.
          </li>{" "}
          <li>
            *Implemented SEO strategies that increased online visibility,
            driving user acquisition and engagement. Also executed community
            engagement strategies to effectively communicate product updates.
          </li>{" "}
          <li>
            * Optimized system performance, reducing error rates and improving
            page load times by 30%. Utilized custom components in React, Redux,
            and Node.js to enhance efficiency.
          </li>{" "}
          <li>
            * Managed production releases, overseeing code reviews, testing, and
            deployment, ensuring high-quality stan- dards and reducing
            operational issues.
          </li>{" "}
          <li>
            * Supported QA teams by designing test cases and providing technical
            support for unit testing, enhancing product reliability.
          </li>
        </ul>
        <h1 className="my-5"> Aug 2023 to Present</h1>
      </div>
    </div>
  );
};

export default Experience;
