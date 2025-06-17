// App.jsx
import MainRoutes from "./Routes/MainRoutes";
import Navbar from "./layout/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
