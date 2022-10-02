import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About';
import Events from '../pages/Blog';
import Projects from '../pages/Careers';
import Contact from '../pages/Contact';
import Event from '../pages/Donate';
import Project from '../pages/Gallery';
import {AnimatePresence} from "framer-motion"

function AnimatedRoute() {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path='/event' element={<Event />} />
        <Route path='/project' element={<Project />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </AnimatePresence>
  )
}

export default AnimatedRoute