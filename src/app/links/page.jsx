import React from 'react'
import "./module.css";

function Links() {
  return (
    <section id="section5">
        <div className="home-link">
            <div className="social-icons">
              <a href="https://linkedin.com/in/felipe-ignacio-alarcon-contreras-670a25286/" target="_blank"
              style={{ backgroundColor: "#0A66C2", boxShadow: "0 0 1rem #0A66C2"}}>
                <i className="bx bxl-linkedin"></i>
                <p>Linkedin</p>
              </a>
              <a href="https://github.com/felipe1521" target="_blank"
              style={{ backgroundColor: "#0D1117", boxShadow: "0 0 1rem #0D1117"}}>
                <i className="bx bxl-github"></i>
                <p>Github</p>
              </a>
              <a style={{ backgroundColor: "#C82401", boxShadow: "0 0 1rem #C82401"}}>
                <i className="bx bxl-gmail"></i>
                <p>felipealarcon44@gmail.com</p>
              </a>
              <a style={{ backgroundColor: "#25D366", boxShadow: "0 0 1rem #25D366"}}>
                <i className="bx bxl-whatsapp"></i>
                <p>+56950655634</p>
              </a>
            </div>
            <a href="/CV-FelipeAlarconContreras.pdf" target="_blank" className="btn">Revisa mi CV</a>
        </div>
    </section>
  )
}

export default Links;