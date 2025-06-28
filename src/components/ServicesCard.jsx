import { FaLaptopCode, FaMobileAlt, FaFigma } from "react-icons/fa";

const ServicesArray = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    name: "Frontend Development",
    description:
      "Building interactive, fast, and scalable user interfaces using React and modern tools.",
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    name: "Responsive Design",
    description:
      "Ensuring seamless user experiences across all screen sizes and devices.",
  },
  {
    id: 3,
    icon: <FaFigma />,
    name: "UI/UX Design",
    description:
      "Crafting user-friendly and visually appealing designs with a focus on usability.",
  },
];

const ServicesCard = () => {
  return (
    <div className="">
      <div className="relative overflow-hidden mt-6  w-full rounded grid gap-10 grid-cols-1 md:grid-cols-3">
        <div className="absolute -top-15 -left-20 h-30 w-20 rounded-full bg-primary shadow-[0px_10px_10vw] shadow-primary"></div>

        {ServicesArray.map(({ id, icon, name, description }) => {
          return (
            <div
              key={id}
              className="p-5 text-grow font-bold tracking-wider rounded border-grow bg-accent/10 backdrop-blur-2xl"
            >
              <div className="text-4xl ">{icon}</div>
              <div className="text-xl  pt-5 pb-2">{name}</div>
              <p className="text-medium font-medium">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCard;
