import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "About Me", route: "/about" },
  { name: "Works", route: "/projects" },
  { name: "Services", route: "/services" },
  { name: "Hire Me", route: "/contact" },
];

const Navbar = ({ isDark, setIsDark }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const DarkMoodHandler = () => {
    setIsDark(!isDark);
  };

  const handleMobileNav = () => {
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 z-[999] bg-back/30 backdrop-blur-2xl trans">
      <div className="w-full h-full flex justify-between items-center px-4 sm:px-20 lg:px-30">
        {/* Logo */}
        <h2 className="text-accent text-2xl drop-shadow-[1px_5px_1px]">
          <a href="/" className="text-primary font-bold">
            {"<Hi/>"}
          </a>
        </h2>

        <div className="flex items-center gap-5 md:gap-10 relative">
          {/* Desktop Nav */}
          {navLinks.map((item, index) => {
            const isActive = location.pathname === item.route;
            return (
              <Link
                key={index}
                to={item.route}
                className={`text-grow font-playfair text-lg hidden md:flex transition-all duration-300 ${
                  isActive ? "text-primary" : "text-accent hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Theme Toggle */}
          <div
            onClick={DarkMoodHandler}
            className="cursor-pointer text-xl text-grow hover:text-primary transition duration-300"
          >
            {isDark ? <MdSunny /> : <IoMdMoon />}
          </div>

          {/* Hamburger */}
          <button
            onClick={handleMobileNav}
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 stroke-grow stroke-[2] fill-none"
            >
              <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                className={`transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                className={`transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </svg>
          </button>

          {/* Mobile Nav */}
          <div
            className={`absolute top-16 -right-4 rounded-b-lg w-[200px] flex flex-col items-center gap-2 overflow-hidden transition-all duration-500 md:hidden ${
              isOpen ? "max-h-[500px] p-4" : "max-h-0 p-0"
            }`}
          >
            {navLinks.map((item, index) => {
              const isActive = location.pathname === item.route;
              return (
                <Link
                  key={index}
                  to={item.route}
                  onClick={() => setIsOpen(false)}
                  className={`font-playfair text-sm h-10 w-full bg-accent flex items-center justify-center rounded-full border trans hover:text-xl ${
                    isActive
                      ? "bg-primary text-xl text-back border-primary"
                      : "text-primary bg-back border-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
