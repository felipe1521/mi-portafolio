
import React from "react";
import Links from "../links/page";
import "./module.css";

export default function Home() {
  return (
    <section className="home" id="section1">
      <div className="home-content">
        <div>
          <h2>Me llamo</h2><h1>Felipe Ignacio Alarcón Contreras</h1>
          <div className="typing-container">
            <h3 className="typing-text">Soy un Desarrollador Web</h3>
          </div>
        </div>
        <p>
          Tengo 5 años de experiencia en el campo del desarrollo
          de software, donde he colaborado con clientes de
          diversos sectores. Tengo experiencia utilizando diversas tecnologías
          de front-end, back-end, bases de datos, herramientas DevOps y
          metodologías ágiles como SCRUM.
        </p>   
      </div>
      <Links />
    </section>
  );
}
