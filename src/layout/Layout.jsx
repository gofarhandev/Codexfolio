import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLoader from "../components/PageLoader";

gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  const lenisRef = useRef(null);
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    // AOS Animate on Scroll
    AOS.init({ duration: 1000, once: true });

    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      {!loadingDone ? (
        <PageLoader
          onFinish={() => {
            setTimeout(() => setLoadingDone(true), 50);
          }}
        />
      ) : (
        <div className="flex items-center justify-center bg-back font-montserrat">
          <div className="relative w-full flex overflow-x-hidden">
            <Navbar />
            <main className="relative px-5 overflow-hidden pt-25 lg:pt-[6vw] sm:px-20 lg:px-[5vw] w-full min-h-screen bg-back text-grow p-5 pb-10 lg:pb-[2.5vw] trans">
              <Outlet />
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
