import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IoLogoHtml5 } from "react-icons/io";
import { TiArrowLeftOutline } from "react-icons/ti";
import {
  FaCss3,
  FaSquareJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa6";
import { SiRedux, SiTailwindcss, SiSass } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skill = [
  { id: 1, icon: <IoLogoHtml5 />, name: "HTML" },
  { id: 2, icon: <FaCss3 />, name: "CSS" },
  { id: 3, icon: <FaSquareJs />, name: "JavaScript" },
  { id: 4, icon: <FaReact />, name: "React" },
  { id: 5, icon: <SiRedux />, name: "Redux" },
  { id: 6, icon: <FaNodeJs />, name: "Node" },
  { id: 7, icon: <SiTailwindcss />, name: "Tailwind" },
  { id: 8, icon: <SiSass />, name: "Sass" },
  { id: 9, icon: <FaGithub />, name: "Github" },
];

const Skills = () => {
  const marqueeRef = useRef(null);
  const arrowRefs = useRef([]);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const el = marqueeRef.current;
    let direction = 1;

    ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const scrollY = self.scroll();
        direction = scrollY > lastScrollY.current ? -1 : 1;
        lastScrollY.current = scrollY;

        // Faster scroll movement
        gsap.to(el, {
          x: `+=${direction * 2}`, // speed increased
          ease: "none",
          duration: 0.05, // smoother + faster update
        });

        // Rotate arrows faster
        arrowRefs.current.forEach((arrow) => {
          gsap.to(arrow, {
            rotate: direction === -1 ? 0 : 180,
            duration: 0.2, // faster rotation
            ease: "power1.out",
          });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-10 mb-20 lg:mb-[5.5vw] overflow-hidden">
      <div className="flex gap-0 font-playfair" ref={marqueeRef}>
        {[...Array(2)].map((_, loopIndex) => (
          <div className="flex" key={loopIndex}>
            {skill.map(({ id, icon, name }, i) => (
              <div
                key={`${id}-${loopIndex}`}
                className="flex items-center drop-shadow-[1px_5px_2px] text-accent text-3xl sm:text-5xl mr-5 lg:mr-[2vw]"
              >
                <span className="text-primary flex gap-1 lg:gap-[.5vw] items-center lg:text-[2.5vw]">
                  {/* {icon} */}
                  <h2 className="text-xl sm:text-2xl lg:text-[2.5vw]">
                    {name}
                  </h2>
                </span>

                {/* Rotating arrow */}
                {i !== skill.length - 1 && (
                  <span
                    ref={(el) => (arrowRefs.current[id * 2 + loopIndex] = el)}
                    className="ml-7 lg:ml-[2vw] rounded-full flex justify-center items-center text-grow text-background text-3xl lg:text-[3vw] transition-transform duration-100 ease-in-out"
                  >
                    <TiArrowLeftOutline />
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
