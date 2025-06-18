import AfterProjects from "../components/AfterProjects";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../pages/About";

const Home = () => {
  return (
    <div className="bg-back pt-10">
      <Hero />
      <Skills />
      <About />
      <AfterProjects />
    </div>
  );
};

export default Home;
