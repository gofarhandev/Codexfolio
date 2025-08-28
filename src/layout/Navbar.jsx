import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "About Me", route: "/about" },
  { name: "Works", route: "/projects" },
  { name: "Services", route: "/services" },
  { name: "Hire Me", route: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: "-100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down - slide navbar up (hide)
        gsap.to(navRef.current, { y: "-100%", duration: 0.5, ease: "power3.out" });
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - slide navbar down (show)
        gsap.to(navRef.current, { y: 0, duration: 0.5, ease: "power3.out" });
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNav = () => {
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 w-full py-5 lg:py-[1vw] z-[999] bg-back/30 backdrop-blur-2xl trans"
    >
      <div className="w-full h-full flex justify-between items-center px-4 sm:px-20 lg:px-[5vw]">
        {/* Logo */}
        <h2 className="text-primary text-xl lg:text-[1.5vw] font-bold">
          <a href="/">
            {".Dev"}
          </a>
        </h2>

        <div className="flex items-center gap-5 lg:gap-[2vw] md:gap-10 relative">
          {/* Desktop Nav */}
          {navLinks.map((item, index) => {
            const isActive = location.pathname === item.route;
            return (
              <Link
                key={index}
                to={item.route}
                className={`text-grow font-Michroma text-lg lg:text-[1.2vw] hidden lg:flex transition-all duration-300 ${
                  isActive ? "text-primary" : "text-accent hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Hamburger */}
          <button
            onClick={handleMobileNav}
            className="lg:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
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
            className={`absolute top-10 -right-4 rounded-b-lg w-[200px] flex flex-col items-center gap-3 overflow-hidden transition-all duration-700 lg:hidden ${
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
                  className={`font-Michroma text-xs h-10 w-full bg-accent flex items-center justify-center rounded-full border trans hover:text-base ${
                    isActive
                      ? "bg-primary text-back border-primary"
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
