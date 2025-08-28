import React from "react";

const ServiceCards = ({ services }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-[1.5vw]">
      {services.map((service) => (
        <div
          key={service.id}
          className="backdrop-blur-lg rounded-xl p-5 lg:p-[1.5vw] flex flex-col items-center text-center transition-transform transform hover:-translate-y-[.5vw] duration-300"
        >
          {/* Icon */}
          <div className="text-xl sm:text-3xl lg:text-[2.5vw] mb-4 lg:mb-[1vw]">
            {service.icon}
          </div>
          {/* Title */}
          <h3 className="text-lg sm:text-xl lg:text-[1.5vw] font-semibold mb-2 lg:mb-[.5vw]">
            {service.title}
          </h3>
          {/* Description */}
          <p className="text-sm sm:text-base lg:text-[1.2vw] text-grow">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
