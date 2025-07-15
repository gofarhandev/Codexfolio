import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
  return (
    <div className="bg-back pt-8 lg:pt-[2vw] trans">
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
