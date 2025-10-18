// App.js
import React from "react";
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </>
  )
}

export default App;
