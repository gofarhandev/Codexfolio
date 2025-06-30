import ServicesCard from "../components/ServicesCard";
import React from "react";
import { FaLaptopCode, FaMobileAlt, FaGlobe, FaBolt } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: "React.js Web Development",
    description:
      "Build modern, fast, and fully responsive websites using React.js and Tailwind CSS. Clean code and performance optimized.",
    // link: "https://www.fiverr.com/users/farhan_sadik__/manage_gigs",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Website Design",
    description:
      "Develop mobile-friendly layouts that work smoothly across all screen sizes. Pixel-perfect implementation from any design.",
    // link: "https://www.fiverr.com/users/farhan_sadik__/manage_gigs",
  },
  {
    icon: <FaGlobe />,
    title: "Portfolio & Landing Pages",
    description:
      "Design and develop personal portfolios, agency sites, or product landing pages that are clean, attractive, and fast-loading.",
    // link: "https://www.linkedin.com/in/md-farhan-sadik-467340316/",
  },
  {
    icon: <FaBolt />,
    title: "Frontend Bug Fixing & Optimization",
    description:
      "Fix layout issues, performance problems, or JavaScript bugs in your frontend codebase to improve UX and loading speed.",
    // link: "https://www.fiverr.com/users/farhan_sadik__/manage_gigs",
  },
];

const Services = () => {
  return (
    <div className="pb-30 pt-10">
      <div>
        <div className="text-grow px-5 w-full rounded flex justify-center pb-5">
          <h2 className="drop-shadow-[1px_5px_1px] text-accent text-2xl sm:text-4xl font-bold pb-5">
            <span className="text-grow">How I Can Help</span>
          </h2>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-2">
        {servicesData.map((service, idx) => (
          <ServicesCard
            key={idx}
            icon={service.icon}
            title={service.title}
            description={service.description}
            // link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
