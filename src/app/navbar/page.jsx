import React from 'react';
import './module.css';

export default function Navbar() {
  return (
    <header className="header">
        <h1 className="logo">Portafolio</h1>
        <i className="bx bx-menu" id="menu-icon"></i>
        <nav className="navbar">
            <a href="#">Inicio</a>
            <a href="#">Experiencia</a>
            <a href="#">Educacion</a>
            <a href="#">Habilidades</a>
        </nav>
    </header>
  );
}
