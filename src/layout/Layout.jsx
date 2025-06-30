import SplitText from "../components/SplitText";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  let [isTrue, setIsTrue] = useState(true);
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
    // Loading.
    <div className="flex items-center justify-center bg-back font-montserrat">
      <div className="relative flex overflow-x-hidden max-w-[2000px]">
        <div
          className={`loadier z-111111111111 top-0 left-0 h-screen w-screen bg-back flex items-center justify-center ${
            loadAnimate ? "fixed" : "hidden"
          }`}
        >
          <SplitText
            text="ASSALAMU ALAIKUM"
            className="text-3xl sm:text-4xl xl:text-6xl font-semibold text-center text-grow"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Sidebar isTrue={isTrue} setIsTrue={setIsTrue} />
        <main className="px-5 overflow-hidden pt-25 sm:px-20 lg:px-30 w-full min-h-screen  bg-back  text-grow p-6 trans">
          {/* {children} */}
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
