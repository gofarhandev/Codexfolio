import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "./Contact";
import Services from "./Services";
import Footer from "../layout/Footer";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="bg-back pt-8 lg:pt-[2vw] trans">
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Services />
      <Testimonials/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
