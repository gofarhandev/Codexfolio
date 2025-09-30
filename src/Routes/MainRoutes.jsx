// src/Routes/MainRoutes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Layout from "../layout/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SEO from "../components/SEO"; 
import { routeMeta } from "./routeMeta";

// Wrapper that updates SEO per route
const MetaWrapper = ({ children }) => {
  const location = useLocation();
  const meta = routeMeta[location.pathname] || {
    title: "404",
    description: "Page not found — MD Farhan Sadik",
    canonical: "https://yourdomain.com/404",
  };

  return (
    <>
      <SEO {...meta} />
      {children}
    </>
  );
};

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <MetaWrapper>
              <Home />
            </MetaWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <MetaWrapper>
              <About />
            </MetaWrapper>
          }
        />
        <Route
          path="/projects"
          element={
            <MetaWrapper>
              <Projects />
            </MetaWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <MetaWrapper>
              <Services />
            </MetaWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <MetaWrapper>
              <Contact />
            </MetaWrapper>
          }
        />
        <Route
          path="*"
          element={
            <MetaWrapper>
              <div className="text-center mt-10 text-white">
                404 - Page Not Found
              </div>
            </MetaWrapper>
          }
        />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
