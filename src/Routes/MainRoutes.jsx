import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Layout from "../layout/Layout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
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
