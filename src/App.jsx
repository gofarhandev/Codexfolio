// src/App.jsx
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
