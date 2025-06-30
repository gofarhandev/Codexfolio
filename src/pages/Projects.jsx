import { useState } from "react";
import AfterProjects from "../components/AfterProjects";
import ProjectsCard from "../components/ProjectsCard";
import Cook from "../assets/Cook.png";
import Travel from "../assets/Travel.png";
import Port from "../assets/Port.png";
import Gadget from "../assets/Gadget.png";
import Bubble from "../assets/Bubble.png";
import Hotel from "../assets/Hotel.png";

const ProjectArray = [
  {
    title: "Code & Cook",
    skills: "React.js, Tailwind CSS",
    live: "https://master-farhan.github.io/recipe/",
    github: "https://github.com/master-farhan/recipe",
    img: Cook,
    category: "Recipe / Food",
  },
  {
    title: "My Gadget Bd",
    skills: "React.js, Redux, Tailwind CSS",
    live: "https://my-gadget-bd.netlify.app/",
    github: "https://github.com/master-farhan/My-Gadget",
    img: Gadget,
    category: "E-Commerce",
  },
  {
    title: "Travel Website",
    skills: "React.js, Tailwind CSS",
    live: "https://travel-web-go.netlify.app/",
    github: "https://github.com/master-farhan/Travel",
    img: Travel,
    category: "Travel",
  },
  {
    title: "Portfolio",
    skills: "HTML, CSS, JavaScript",
    live: "https://farhan-studio.netlify.app/",
    github: "https://github.com/master-farhan/studio",
    img: Port,
    category: "Portfolio",
  },
  {
    title: "Hotel Booking",
    skills: "React.js, Tailwind CSS",
    live: "https://hotel-booking-002.netlify.app/",
    github: "https://github.com/master-farhan/hotel-booking",
    img: Hotel,
    category: "Hotel",
  },
  {
    title: "Bubble Game",
    skills: "HTML, CSS, JavaScript",
    live: "https://master-farhan.github.io/Bubble-Game/",
    github: "https://github.com/master-farhan/Bubble-Game",
    img: Bubble,
    category: "Game",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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

  return (
    <div className="relative pb-30">
      <AfterProjects />

      {/* Category Buttons */}
      <div className="mt-5 gap-5 flex flex-nowrap overflow-auto scrollbar-hide">
        {allCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`py-1 px-10 font-playfair rounded-full cursor-pointer text-lg whitespace-nowrap
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
