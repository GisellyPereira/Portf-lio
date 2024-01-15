import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Renomeando BrowserRouter como Router para simplificar

import Home from "../pages/Home/Home.js";
import Projects from "../pages/Projects/Projects.js";
import History from "../components/BlogsOperational/History/History.js"

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
