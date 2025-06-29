const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className=" rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl mb-4 text-primary animate-pulse">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    </div>
  );
};

export default ServicesCard;
