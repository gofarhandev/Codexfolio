import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa6";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const skill = [
  {
    id: 1,
    icon: <IoLogoHtml5 />,
    name: "HTML",
  },
  {
    id: 2,
    icon: <FaCss3 />,
    name: "CSS",
  },
  {
    id: 3,
    icon: <FaSquareJs />,
    name: "JavaScript",
  },
  {
    id: 4,
    icon: <FaReact />,
    name: "React",
  },
  {
    id: 5,
    icon: <SiRedux />,
    name: "Redux",
  },
  {
    id: 6,
    icon: <FaNodeJs />,
    name: "Node",
  },
  {
    id: 7,
    icon: <SiTailwindcss />,
    name: "Tailwind",
  },
  {
    id: 8,
    icon: <SiSass />,
    name: "Sass",
  },
  {
    id: 9,
    icon: <FaGithub />,
    name: "Github",
  },
];

const Skills = () => {
  return (
    <div className="pt-10 mb-20 lg:mb-[5.5vw]">
      <div className="flex gap-0  font-playfair">
        <div className="marquee flex">
          {skill.map(({ id, icon, name }) => {
            return (
              <div
                key={id}
                className="drop-shadow-[1px_5px_2px] text-accent text-3xl sm:text-5xl font-bold mr-20 lg:mr-[3vw]"
              >
                <span className="text-primary flex gap-1  lg:gap-[.5vw] items-center lg:text-[2vw]">
                  {icon}
                  <p className="text-xl sm:text-2xl lg:text-[2vw]">{name}</p>
                </span>
              </div>
            );
          })}
        </div>
        <div className="marquee flex ">
          {skill.map(({ id, icon, name }) => {
            return (
              <div
                key={id}
                className="drop-shadow-[1px_5px_2px] text-accent text-3xl sm:text-5xl font-bold mr-20 lg:mr-[3vw]"
              >
                <span className="text-primary flex gap-1  lg:gap-[.5vw] items-center lg:text-[2vw]">
                  {icon}
                  <p className="text-xl sm:text-2xl lg:text-[2vw]">{name}</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
