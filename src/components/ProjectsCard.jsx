import React from "react";

const ProjectsCard = ({ ProjectArray }) => {
  return (
    <div className="grid pt-10 lg:pt-[2.8vw] grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-[1.5vw]">
      {ProjectArray.map((item, index) => (
        <div
          key={index}
          id={item.category}
          className="relative group overflow-hidden"
        >
          {/* 👉 Large Devices: Hover Flip */}
          <div className="hidden md:block overflow-hidden rounded">
            {/* ✅ Fixed Blur overlay */}
            <div className="absolute -left-full -bottom-full group-hover:left-0 group-hover:bottom-0 rounded-r-full rounded-t-full group-hover:rounded-xs w-full h-full z-10 backdrop-blur-sm bg-back trans px-5 lg:px-[1.6vw]  py-3 lg:py-[.5vw] font-medium trans flex flex-col gap-10 lg:gap-2.8vw sm:gap-5 justify-between">
              <div className="">
                <h2 className="text-xl lg:text-[1.55vw]">{item.title}</h2>
                <p className="py-1.5 lg:py-[.5vw] text-md lg:text-[1.17vw] tracking-wide">
                  {item.description}
                </p>
                <div className="flex gap-2 lg:gap-[.5vw] pt-1 lg:pt-[.5vw]">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs lg:text-[1vw] bg-accent/20 px-3 py-1 lg:px-[1vw] lg:py-[.2vw] rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between w-full">
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent border border-accent text-grow transition-colors flex items-center justify-center rounded-full text-sm hover:text-lg trans
                  px-3 pt-0.5 pb-1 lg:pb-[.2vw] lg:pt-[.1vw] lg:px-[1vw] lg:text-[1vw] lg:hover:text-[1.2vw]"
                >
                  Live
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent border border-accent text-grow transition-colors flex items-center justify-center rounded-full text-sm hover:text-lg trans
                  px-3 pt-0.5 pb-1 lg:pb-[.2vw] lg:pt-[.1vw] lg:px-[1vw] lg:text-[1vw] lg:hover:text-[1.2vw]"
                >
                  Github
                </a>
              </div>
            </div>

            {/* Rotating image */}
            <div className="h-full w-full transition-transform duration-700 transform">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* 👉 Small Devices: Static Card */}
          <div className="block md:hidden bg-back rounded">
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover rounded"
            />
            <div className="flex flex-col items-center gap-3 my-2">
              <div className="flex w-full justify-between gap-5">
                <h2 className="text-xl font-semibold whitespace-nowrap">
                  {item.title}
                </h2>
                <div className="flex gap-2 flex-wrap justify-end">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm bg-accent/20 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <p className="p-1 text-sm tracking-wide">{item.description}</p>
            </div>
            <div className="flex justify-between">
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent border border-accent text-grow h-8 w-30 flex items-center justify-center rounded-full trans hover:text-lg text-sm"
              >
                Live
              </a>
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent border border-accent text-grow h-8 w-30 flex items-center justify-center rounded-full trans hover:text-lg text-sm"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCard;
