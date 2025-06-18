import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { MdMiscellaneousServices } from "react-icons/md";
import { ImUser } from "react-icons/im";
import { LuLaptopMinimal } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

const navLinks = [
  {
    id: 1,
    icon: <TiHome />,
    route: "/",
  },
  {
    id: 2,
    icon: <LuLaptopMinimal />,
    route: "/projects",
  },
  {
    id: 3,
    icon: <ImUser />,
    route: "/about",
  },
  {
    id: 4,
    icon: <MdMiscellaneousServices />,
    route: "/services",
  },
];

const Sidebar = ({ isTrue, setIsTrue }) => {
  const slideBarHandler = () => {
    setIsTrue(!isTrue);
  };

  return (
    <aside
      className={`z-111 h-screen bg-back text-grow flex flex-col items-center py-25 gap-1 shadow-[5px_1px_1px] shadow-accent/20 fixed top-0 ${
        isTrue ? "-left-20 border-none" : "left-0"
      } transition-all duration-300`}
    >
      {navLinks.map(({ id, icon, route }) => {
        return (
          <Link
            onClick={slideBarHandler}
            key={id}
            to={route}
            className="px-5 sm:px-7 pb-7 text-xl sm:text-2xl drop-shadow-[1px_5px_1px] shadow-accent  text-accent"
          >
            <div className="text-grow hover:text-primary hover:scale-110 transition-all duration-300">
              {icon}
            </div>
          </Link>
        );
      })}
      <div
        className={`absolute hover:bg-grow/1 rounded-full drop-shadow-[1px_5px_1px] text-accent top-1/2 -translate-y-1/2 transition-all duration-300 ${
          isTrue ? "rotate-180 -right-13 sm:-right-15" : "-right-5"
        }`}
      >
        <IoIosArrowForward
          onClick={slideBarHandler}
          className="text-grow rotate-180 text-4xl hover:text-primary cursor-pointer transition-all duration-300 hover:scale-120"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
