import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Contact from "./Contact";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
