import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/App.css";
import { useState } from "react";
import Events from "./pages/Blog";
import Projects from "./pages/Careers";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Event from "./pages/Donate";
import Project from "./pages/Gallery";
import AnimatedRoute from "./components/AnimatedRoute";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pages = [<Home />, <About />, <Events />, <Projects />, <Contact />];

  return (
    <div className="">
      <Navbar index={currentIndex} setPage={setCurrentIndex} />
      <AnimatedRoute />
      <Footer />
    </div>
  );
}

export default App;
