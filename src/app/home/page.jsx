
import React from "react";
import "./module.css";
import Button from "../components/button";

export default function Home() {
  return (
    <section className="home" id="section1">
      <div className="home-content">
        <h1>Me llamo Felipe Ignacio Alarcón Contreras</h1>
        <div className="typing-container">
          <h3 className="typing-text">Soy un Desarrollador Web</h3>
        </div>
        <p>
          Soy un desarrollador Web con 5 años de experiencia en el campo del desarrollo
          de software, donde he colaborado con clientes de
          diversos sectores. Tengo experiencia utilizando diversas tecnologías
          de front-end, back-end, bases de datos, herramientas DevOps y
          metodologías ágiles como SCRUM.
        </p>
        <div className="social-icons">
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#">
            <i className="bx bxl-github"></i>
          </a>
          <a href="#">
            <i className="bx bxl-gmail"></i>
          </a>
          <a href="#">
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>
        <Button />
      </div>
    </section>
  );
}
