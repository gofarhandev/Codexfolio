import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Layout from "../layout/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="text-center mt-10 text-white">
              404 - Page Not Found
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
