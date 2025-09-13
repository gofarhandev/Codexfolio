import React from "react";

const ServiceCards = ({ services }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-[1.5vw]">
      {services.map((service) => (
        <div
          key={service.id}
          className="service-category hover:bg-accent/30 border border-accent rounded-xl p-5 lg:p-[1.5vw] flex flex-col items-center text-center trans transform hover:-translate-y-[.5vw]"
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
          <p className="lg:text-[1.2vw] text-base tracking-wide text-grow">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
