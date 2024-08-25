
import React from "react";
import "./module.css";

export default function Home() {
  return (
    <section className="home" id="section1">
      <div className="home-content">
        <h2>Me llamo</h2><h1>Felipe Ignacio Alarcón Contreras</h1>
        <div className="typing-container">
          <h3 className="typing-text">Soy un Desarrollador Web</h3>
        </div>
        <p>
          Tengo 5 años de experiencia en el campo del desarrollo
          de software, donde he colaborado con clientes de
          diversos sectores. Tengo experiencia utilizando diversas tecnologías
          de front-end, back-end, bases de datos, herramientas DevOps y
          metodologías ágiles como SCRUM.
        </p>   
      </div>
      <div className="home-content home-link">
        <div className="social-icons">
          <a href="https://linkedin.com/in/felipe-ignacio-alarcon-contreras-670a25286/" target="_blank"
          style={{ backgroundColor: "#0A66C2", boxShadow: "0 0 1rem #0A66C2"}}>
            <i className="bx bxl-linkedin"></i>
            <b>Linkedin</b>
          </a>
          <a href="https://github.com/felipe1521" target="_blank"
          style={{ backgroundColor: "#0D1117", boxShadow: "0 0 1rem #0D1117"}}>
            <i className="bx bxl-github"></i>
            <b>Github</b>
          </a>
          <a style={{ backgroundColor: "#C82401", boxShadow: "0 0 1rem #C82401"}}>
            <i className="bx bxl-gmail"></i>
            <b>felipealarcon44@gmail.com</b>
          </a>
          <a style={{ backgroundColor: "#25D366", boxShadow: "0 0 1rem #25D366"}}>
            <i className="bx bxl-whatsapp"></i>
            <b>+56950655634</b>
          </a>
        </div>
        <a href="/CV-FelipeAlarconContreras.pdf" target="_blank" className="btn">Revisa mi CV</a>
      </div>
    </section>
  );
}
