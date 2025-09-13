import React, { useState } from "react";

const ProjectsCard = ({ ProjectArray }) => {
  const [showMoreArray, setShowMoreArray] = useState(
    Array(ProjectArray.length).fill(false)
  );

  const toggleShowMore = (index) => {
    const newArray = [...showMoreArray];
    newArray[index] = !newArray[index];
    setShowMoreArray(newArray);
  };

  return (
    <div className="grid grid-cols-1 pt-10 lg:pt-[3vw] md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[2.5vw]">
      {ProjectArray.map((item, index) => {
        const limit = 100;
        const isLong = item.description.length > limit;
        const displayText = showMoreArray[index]
          ? item.description
          : item.description.slice(0, limit);

        return (
          <div
            key={index}
            id={item.category}
            className="project-category relative group"
          >
            <div className="block rounded-lg lg:rounded-[1vw] overflow-hidden trans hover:bg-accent/20 border border-accent">
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover rounded-lg lg:rounded-[1vw]"
              />
              <div className="px-3 lg:px-[1.2vw] py-2 lg:py-[1vw] flex flex-col justify-between">
                <div className="flex flex-col items-center gap-3 lg:gap-[1vw] lg:my-[.5vw] my-2">
                  <h2 className="text-base lg:text-[1.5vw] px-2 lg:px-[.5vw] w-full font-semibold whitespace-nowrap">
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
                    className="bg-accent/40 text-grow hover:bg-accent font-montserrat h-6 w-25 lg:h-[2vw] lg:w-[7vw] flex items-center justify-center rounded-full trans text-xs lg:text-[.8vw]"
                  >
                    Live
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent/40 text-grow hover:bg-accent font-montserrat h-6 w-25 lg:h-[2vw] lg:w-[7vw] flex items-center justify-center rounded-full trans text-xs lg:text-[.8vw]"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsCard;
