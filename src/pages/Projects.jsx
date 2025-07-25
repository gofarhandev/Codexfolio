import { useState } from "react";
import ProjectsCard from "../components/ProjectsCard";
import Cook from "/Cook.png";
import Travel from "/Travel.png";
import Port from "/Port.png";
import Gadget from "/Gadget.png";
import Bubble from "/Bubble.png";
import Hotel from "/Hotel.png";
import DripNest from "/DripNest.png";
import SplinePort from "/SplinePort.png";
import AiPort from "/AiPort.png";
import port01 from "/port01.png";
import port02 from "/port02.png";
import Gemini from "/gemini-clone.png";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectArray = [
  {
    title: "Clothing Store",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://clothes-store-002.netlify.app/",
    github: "https://github.com/master-farhan/clothes-shop",
    img: DripNest,
    category: "E-Commerce",
    description:
      "Responsive fashion store with clean UI, product filtering, and modern design using React & Tailwind.",
  },
  {
    title: "3D Portfolio",
    skills: ["React.js", "Tailwind CSS", "Spline"],
    live: "https://spline-with-animation.netlify.app/",
    github: "https://github.com/master-farhan/Hero-Section-with-Spline",
    img: SplinePort,
    category: "Portfolio",
    description:
      "3D portfolio with Spline, React & Tailwind showcasing skills with smooth animations and visuals.",
  },
  {
    title: "My Gadget Bd",
    skills: ["React.js", "Redux", "Tailwind CSS"],
    live: "https://my-gadget-bd.netlify.app/",
    github: "https://github.com/master-farhan/My-Gadget",
    img: Gadget,
    category: "E-Commerce",
    description:
      "An eCommerce platform for showcasing and buying the latest gadgets with category filtering and live search.",
  },
  {
    title: "My Portfolio 01",
    skills: ["HTML", "CSS", "JavaScript"],
    live: "https://master-farhan.github.io/portfolio-01/",
    github: "https://github.com/master-farhan/portfolio-01",
    img: port01,
    category: "Portfolio",
    description:
      "My first portfolio website created using HTML, CSS, and JavaScript to showcase early frontend work.",
  },
  {
    title: "My Portfolio 02",
    skills: ["HTML", "CSS", "JavaScript"],
    live: "https://master-farhan.github.io/portfolio-02/",
    github: "https://github.com/master-farhan/portfolio-02",
    img: port02,
    category: "Portfolio",
    description:
      "Personal portfolio website built with HTML, CSS, and JavaScript to showcase my skills and projects.",
  },
  {
    title: "AI Created Portfolio",
    skills: ["React.js", "TypeScript", "Tailwind CSS"],
    live: "https://ai-created-00.netlify.app/",
    github: "https://github.com/master-farhan/luminous-farhan-portfolio",
    img: AiPort,
    category: "Portfolio",
    description:
      "AI image generator using React, TypeScript & Tailwind with prompt input and responsive UI.",
  },
  {
    title: "Code & Cook",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://master-farhan.github.io/recipe/",
    github: "https://github.com/master-farhan/recipe",
    img: Cook,
    category: "Recipe / Food",
    description:
      "A recipe website where users can explore and cook various meals with modern UI and responsive design.",
  },
  {
    title: "Travel Website",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://travel-web-go.netlify.app/",
    github: "https://github.com/master-farhan/Travel",
    img: Travel,
    category: "Travel",
    description:
      "A modern travel booking website featuring scenic destinations, smooth navigation, and a responsive layout.",
  },
  {
    title: "My Portfolio 03",
    skills: ["HTML", "CSS", "JavaScript"],
    live: "https://farhan-studio.netlify.app/",
    github: "https://github.com/master-farhan/studio",
    img: Port,
    category: "Portfolio",
    description:
      "A personal portfolio to showcase my frontend projects, skills, and contact information with elegant design.",
  },
  {
    title: "Hotel Booking",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://hotel-booking-002.netlify.app/",
    github: "https://github.com/master-farhan/hotel-booking",
    img: Hotel,
    category: "Hotel",
    description:
      "A hotel booking UI where users can explore rooms and amenities with a clean and user-friendly interface.",
  },
  {
    title: "Bubble Game",
    skills: ["HTML", "CSS", "JavaScript"],
    live: "https://master-farhan.github.io/Bubble-Game/",
    github: "https://github.com/master-farhan/Bubble-Game",
    img: Bubble,
    category: "Game",
    description:
      "A fun and interactive bubble shooter game built with vanilla JavaScript for casual gaming.",
  },
  {
    title: "Gemini Frontend",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://gemini-frontend-002.netlify.app/",
    github: "https://github.com/master-farhan/gemini-ui",
    img: Gemini,
    category: "Clone",
    description:
      "A frontend UI clone of Google's Gemini with modern design, transitions, and responsive layout.",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Recent");

  // Add "Recent" manually at the front
  const uniqueCategories = [...new Set(ProjectArray.map((p) => p.category))];
  const allCategories = ["All", "Recent", ...uniqueCategories];

  // Filtering logic
  const filteredProjects =
    activeCategory === "All"
      ? ProjectArray
      : activeCategory === "Recent"
      ? ProjectArray.slice(0, 3) // latest 3 projects
      : ProjectArray.filter((p) => p.category === activeCategory);

        // gsap
      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        gsap.utils.toArray([".project-heading", ".project-category"]).forEach((className, index) => {
          gsap.from(className, {
            scrollTrigger: {
              trigger: className,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: index * 0.2,
            ease: "power2.out",
          });
        });
      }, []);
      

  return (
    <div className="relative pt-10 pb-30 lg:pb-[8.5vw]">
      <div className="text-grow w-full rounded">
        <h2 className="project-heading drop-shadow-[1px_5px_1px] text-accent text-xl sm:text-3xl lg:text-[2.5vw] flex justify-center">
          <span className="text-grow text-center">Dive Into My Code World</span>
        </h2>
      </div>

      <div className="project-category mt-10 lg:mt-[3vw] gap-5 lg:gap-[1.5vw] flex flex-nowrap overflow-auto scrollbar-hide">
        {allCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`py-1 lg:py-[.5vw] px-10 lg:px-[3vw] font-Michroma rounded-full cursor-pointer text-base lg:text-[1.1vw] whitespace-nowrap
              ${
                activeCategory === category
                  ? "bg-accent/50 text-grow"
                  : "bg-accent/10 hover:bg-accent text-grow/80"
              } transition duration-300`}
          >
            <p>{category}</p>
          </div>
        ))}
      </div>

      {/* Filtered Projects */}
      <ProjectsCard ProjectArray={filteredProjects} />
    </div>
  );
};

export default Projects;
