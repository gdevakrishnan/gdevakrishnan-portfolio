import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Footer from '../components/Footer'

function Routers() {
  return (
    <Fragment>
        <Router>
            <Navbar />
            <Routes>
                <Route path = "/" index element={<Home />}/>
                <Route path = "/about" element={<About />}/>
                <Route path = "/skills" element={<Skills />}/>
                <Route path = "/projects" element={<Projects />}/>
                <Route path = "/contact" element={<Contact />}/>
            </Routes>
            <Outlet />
            <Footer />
        </Router>
    </Fragment>
  )
}

export default Routers