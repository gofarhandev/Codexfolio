import React from "react";

const ProjectsCard = ({ ProjectArray }) => {
  return (
    <div className="grid pt-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
      {ProjectArray.map((item, index) => (
        <div
          key={index}
          id={item.category}
          className="relative group [perspective:2000px]"
        >
          {/* 👉 Large Devices: Hover Flip */}
          <div className="hidden md:block">
            {/* Blur overlay */}
            <div className="absolute top-0 left-0 w-full h-full z-10 backdrop-blur-sm bg-back/50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 px-5 py-3 font-medium">
              <h2 className="text-3xl">{item.title}</h2>
              <div className="p-1 text-lg">{item.skills}</div>{" "}
              {/* Changed <p> to <div> */}
              <div className="flex items-end h-3/5 justify-between w-full">
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent border border-accent text-grow h-10 w-30 transition-colors flex items-center justify-center rounded hover:text-lg text-sm trans"
                >
                  Live
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent border border-accent text-grow h-10 w-30 transition-colors flex items-center justify-center rounded hover:text-lg text-sm trans"
                >
                  Github
                </a>
              </div>
            </div>

            {/* Rotating image */}
            <div className="h-full w-full transition-transform duration-700 transform group-hover:rotate-y-180">
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
              <h2 className="text-lg font-semibold whitespace-nowrap">
                {item.title}
              </h2>
              <p className="text-sm font-semibold">{item.skills}</p>
            </div>
            <div className="flex justify-between">
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent border border-accent text-grow h-10 w-30 flex items-center justify-center rounded trans hover:text-lg text-sm"
              >
                Live
              </a>
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent border border-accent text-grow h-10 w-30 flex items-center justify-center rounded trans hover:text-lg text-sm"
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
