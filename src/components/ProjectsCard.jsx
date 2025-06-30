import React from "react";

const ProjectsCard = ({ ProjectArray }) => {
  return (
    <div className="grid pt-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {ProjectArray.map((item, index) => (
        <div
          key={index}
          id={item.category}
          className="relative group [perspective:2000px] overflow-hidden shadow-[5px_3px_10px] shadow-accent/20"
        >
          {/* 👉 Large Devices: Hover Flip */}
          <div className="hidden md:block overflow-hidden rounded">
            {/* ✅ Fixed Blur overlay */}
            <div className="absolute -left-full -bottom-full group-hover:left-0 group-hover:bottom-0 rounded-r-full rounded-t-full group-hover:rounded-xs w-full h-full z-10 backdrop-blur-sm bg-back trans px-5 py-3 font-medium trans flex flex-col gap-5 justify-between">
              <div className="pb-5">
                <h2 className="text-3xl">{item.title}</h2>
                <p className="p-1 text-lg font-playfair tracking-wide">{item.skills}</p>
              </div>
              <div className="flex justify-between w-full">
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent border border-accent text-grow h-8 w-25 transition-colors flex items-center justify-center rounded hover:text-lg text-sm trans"
                >
                  Live
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent border border-accent text-grow h-8 w-25 transition-colors flex items-center justify-center rounded hover:text-lg text-sm trans"
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
            <div className="flex justify-between items-center gap-5 my-2">
              <h2 className="text-xl font-semibold whitespace-nowrap">
                {item.title}
              </h2>
              <p className="text-sm font-semibold font-playfair">
                {item.skills}
              </p>
            </div>
            <div className="flex justify-between">
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent border border-accent text-grow h-8 w-30 flex items-center justify-center rounded trans hover:text-lg text-sm"
              >
                Live
              </a>
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent border border-accent text-grow h-8 w-30 flex items-center justify-center rounded trans hover:text-lg text-sm"
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
