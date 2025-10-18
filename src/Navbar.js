import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Smooth scroll
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="nav-menu">
      <div className="navbar">
        <h4 className="logo">
          Port<span className="highlight">folio</span>
        </h4>

        {/* Hamburger Icon for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Desktop Menu */}
        <div className="nav-contents desktop-menu">
          <span className="nav-link" onClick={() => handleScroll("Home")}>
            Home
          </span>
          <span className="nav-link" onClick={() => handleScroll("about-2")}>
            About
          </span>
          <span className="nav-link" onClick={() => handleScroll("Skills")}>
            Skills
          </span>
          <span className="nav-link" onClick={() => handleScroll("Projects")}>
            Projects
          </span>
          <span className="nav-link" onClick={() => handleScroll("contact-2")}>
            Contact
          </span>
        </div>

        {/* Resume Button */}
        <div className="resume desktop-menu">
          <a
            href="/Resume-to-Praveen.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary">
              <FaFileAlt className="btn-icon" /> Resume
            </button>
          </a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay"></div>}

      {/* Sidebar (Mobile) */}
      <div ref={menuRef} className={`side-menu ${menuOpen ? "open" : ""}`}>
        <span className="side-link" onClick={() => handleScroll("Home")}>
          <FaHome className="side-icon" /> Home
        </span>
        <span className="side-link" onClick={() => handleScroll("about-2")}>
          <FaUser className="side-icon" /> About
        </span>
        <span className="side-link" onClick={() => handleScroll("Skills")}>
          <FaTools className="side-icon" /> Skills
        </span>
        <span className="side-link" onClick={() => handleScroll("Projects")}>
          <FaProjectDiagram className="side-icon" /> Projects
        </span>
        <span className="side-link" onClick={() => handleScroll("contact-2")}>
          <FaEnvelope className="side-icon" /> Contact
        </span>

        <a
          href="/Resume-to-Praveen.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="side-resume"
        >
          <button className="btn btn-primary">
            <FaFileAlt className="btn-icon" /> Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
