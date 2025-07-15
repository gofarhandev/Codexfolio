import { Link } from "react-router-dom";
import { FaArrowRightLong  } from "react-icons/fa6";

const LinkButton = ({
  to = "/",
  label = "Click",
  icon = <FaArrowRightLong  className="transition-transform duration-300  group-hover:text-sm lg:text-[1vw] lg:group-hover:text-[1.2vw] group-hover:-rotate-45" />,
  className = "",
  download = false,
}) => {
  return (
    <Link
      to={to}
      download={download}
      className={`group flex items-center justify-center h-10 w-50 lg:h-[3vw] lg:w-[15vw] gap-1 lg:gap-[.5vw] text-base lg:text-[1vw] font-medium rounded-full border border-primary text-primary hover:bg-primary hover:text-back hover:shadow-accent shadow-primary transition-all duration-300 ease-in-out hover:text-xl lg:hover:text-[1.2vw] ${className}`}
    >
      {label}
      {icon}
    </Link>
  );
};

export default LinkButton;
