// src/pages/Home.jsx
import React from "react";
import SEO from "../components/SEO";

import Hero from "../components/Hero";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "./Contact";
import Services from "./Services";
import Footer from "../layout/Footer";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="MD Farhan Sadik — Frontend Web Developer. Explore my portfolio showcasing modern, responsive web applications built with React, Tailwind CSS, and a focus on UI/UX."
        keywords="Farhan Sadik, frontend developer, React, Tailwind, portfolio, web developer, UI/UX"
        canonical="https://yourdomain.com/"
        image="https://yourdomain.com/og-home.png" 
      />

      <div className="bg-back pt-8 lg:pt-[2vw] trans">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
