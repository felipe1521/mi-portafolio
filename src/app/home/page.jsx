
import React from "react";
import "./module.css";
import Button from "../components/button";

export default function Home() {
  return (
    <section className="home" id="section1">
      <div className="home-content">
        <h1>
          Me llamo
          Felipe Ignacio Alarcón Contreras
        </h1>
        <h3 className="text-animation">
          Soy un <span></span>
        </h3>
        <p>
          Soy un desarrollador Full Stack con 5 años de experiencia y
          actualmente trabajo en NTT DATA, donde he colaborado con clientes de
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
