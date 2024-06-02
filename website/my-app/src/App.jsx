import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import NavBar from "./Components/NavBar";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Recommendation from "./Components/Recommendation";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Blog from "./Components/Blog";
import Classes from "./Styles/Footer.module.css";

function App() {
  return (
    <Router>
      <div className={Classes.app}>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/service" element={<Service />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
