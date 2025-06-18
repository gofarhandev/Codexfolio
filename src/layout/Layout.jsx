import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  let [isTrue, setIsTrue] = useState(false);
  let [isDark, setIsDark] = useState(true);
  if (!isDark) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }

  const [loadAnimate, setLoadAnimate] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const timeout = setTimeout(() => {
      setLoadAnimate(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    // Loading
    <div className="relative flex overflow-x-hidden">
      <div
        className={`loadier z-111111111111 top-0 left-0 h-screen w-screen bg-back flex items-center justify-center ${
          loadAnimate ? "fixed" : "hidden"
        }`}
      >
        <div className="text-center flex justify-center">
          <div className="w-full loding-Text text-3xl sm:text-4xl lg:text-6xl font-bold drop-shadow-[1px_5px_1px] shadow-accent text-accent sm:tracking-widest">
            <h1 className="text-grow">ASSALAMU ALAIKUM</h1>
          </div>
        </div>
      </div>

      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Sidebar isTrue={isTrue} setIsTrue={setIsTrue} />
      <main className="px-10 pt-25 sm:px-20 lg:px-30 w-full min-h-screen  bg-back  text-grow p-6 transition-all duration-300">
        {/* {children} */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
