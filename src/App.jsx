import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from "./components/Banner"
import Experience from "./components/Experience"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import About from "./components/About"
import Menu from "./components/Menu"
import Projects from "./components/Projects"
import ProgressGraph from "./components/ProgressGraph"; // Import ProgressGraph


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <Menu />
          </>
        } />
        <Route path="/progress-graph" element={<ProgressGraph />} /> {/* Add ProgressGraph route */}
      </Routes>
    </Router>
  );
}

export default App;