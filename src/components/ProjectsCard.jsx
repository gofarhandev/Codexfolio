import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsCard = ({ ProjectArray }) => {
  // state array to track "show more" for each project
  const [showMoreArray, setShowMoreArray] = useState(
    Array(ProjectArray.length).fill(false)
  );

  // toggle function
  const toggleShowMore = (index) => {
    const newArray = [...showMoreArray];
    newArray[index] = !newArray[index];
    setShowMoreArray(newArray);
  };

  useEffect(() => {
    const animations = [
      { x: -50, opacity: 0 },
      { x: 50, opacity: 0 },
      { y: 50, opacity: 0 },
      { scale: 0.9, opacity: 0 },
      { rotationY: 45, opacity: 0 },
    ];

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".animate-project-card");

      cards.forEach((card, index) => {
        const config = animations[index % animations.length];

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          ...config,
        });
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [ProjectArray]);

  return (
    <div className="grid py-5 lg:py-[1.5vw] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[1.5vw]">
      {ProjectArray.map((item, index) => {
        const limit = 200;
        const isLong = item.description.length > limit;
        const displayText = showMoreArray[index]
          ? item.description
          : item.description.slice(0, limit);

        return (
          <div
            key={index}
            id={item.category}
            className="animate-project-card relative group py-3 lg:py-[1vw]"
          >
            <div className="block bg-back rounded-lg overflow-hidden hover:-translate-y-[2vh] duration-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover rounded-lg lg:rounded-[1vw]"
              />
              <div className="flex flex-col items-center gap-3 lg:gap-[1vw] lg:my-[.5vw] my-2">
                <h2 className="text-base lg:text-[1.3vw] px-2 lg:px-[.5vw] w-full font-semibold whitespace-nowrap">
                  {item.title}
                </h2>

                {/* Skills */}
                <div className="flex gap-2 lg:gap-[.5vw] flex-nowrap scroll-hidden overflow-x-scroll w-full">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs lg:text-[.9vw] bg-accent/20 px-3 py-1 lg:px-[1vw] lg:py-[.3vw] rounded-full text-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Description with Show More */}
                <p className="p-1 lg:p-[.3vw] lg:text-[1.2vw] text-base tracking-wide">
                  {displayText}
                  {isLong && (
                    <span
                      onClick={() => toggleShowMore(index)}
                      className="text-blue-500 cursor-pointer ml-2"
                    >
                      {showMoreArray[index] ? "Show less" : "Show more"}
                    </span>
                  )}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent/10 hover:bg-accent font-montserrat text-grow h-6 w-25 lg:h-[2vw] lg:w-[7vw] flex items-center justify-center rounded-full trans text-xs lg:text-[.8vw]"
                >
                  Live
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent/10 hover:bg-accent font-montserrat text-grow h-6 w-25 lg:h-[2vw] lg:w-[7vw] flex items-center justify-center rounded-full trans text-xs lg:text-[.8vw]"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsCard;
