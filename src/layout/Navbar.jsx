import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = ({ isDark, setIsDark }) => {
  const DarkMoodHandler = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 z-999 shadow-[1px_4px_1px] shadow-accent bg-back transition-all duration-300">
      <div className="w-full h-full flex justify-between items-center pl-4 pr-10">
        <h2 className="drop-shadow-[1px_5px_1px] shadow-accent text-accent text-2xl">
          <Link to="/" className="text-primary font-bold">
            {"<Hi/>"}
          </Link>
        </h2>

        {/* DarkMoodHandler */}
        <div
          onClick={DarkMoodHandler}
          className="drop-shadow-[0px_3px_1px] shadow-accent text-accent text-xl cursor-pointer hover:rotate-15 transition-all duration-300"
        >
          <span className="text-grow transition-all duration-300 hover:text-primary">
            {isDark ? <MdSunny /> : <IoMdMoon />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
