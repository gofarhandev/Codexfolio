const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className=" rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-lg trans">
      <div className="text-4xl mb-4 text-primary animate-pulse">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-grow text-sm mb-4">{description}</p>
    </div>
  );
};

export default ServicesCard;
