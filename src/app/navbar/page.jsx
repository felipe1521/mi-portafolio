import React from 'react';
import './module.css';

export default function Navbar() {
  return (
    <header className="header">
        <a href="#" className="logo">Portafolio</a>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <i className="bx bx-menu" id="menu-icon"></i>
          <i className="bx bx-x" id="close-icon"></i>
        </label>
        <nav className="navbar">
            <a href="#section1" className="a0">Inicio</a>
            <a href="#section2" className="a1">Experiencia</a>
            <a href="#section3" className="a2">Educacion</a>
            <a href="#section4" className="a3">Habilidades</a>
        </nav>
    </header>
  );
}
