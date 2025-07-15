const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-lg shadow-lg p-5 lg:p-[1.5vw] flex flex-col gap-3 lg:gap-[1vw] items-center text-center hover:shadow-lg trans">
      <div className="text-3xl lg:text-[2.5vw] text-primary animate-pulse">
        {icon}
      </div>
      <h3 className="text-2xl lg:text-[1.5vw] font-semibold">{title}</h3>
      <p className="text-grow text-sm lg:text-[1.2vw]">{description}</p>
    </div>
  );
};

export default ServicesCard;
