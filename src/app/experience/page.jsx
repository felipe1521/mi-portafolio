import React from "react";
import "./module.css";

export default function Experience() {
  return (
    <section id="section2">
      <h3 className="heading">Experiencia</h3>

      <div className="timeline-title">
        <h4>NTT DATA</h4>
      </div>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2020 - <br/>2021</div>
          <div className="timeline-content">
            <h3>Desarrollador Full-stack</h3>
            <p>
              He trabajado en la creación de un aplicativo web llamado
              <b> New LDI</b>, el cual sirve para toda la gestión de los clientes
              de larga distancia y del Carrier 188 y 181.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022</div>
          <div className="timeline-content">
            <h3>Desarrollador Mobile</h3>
            <p>
              He trabajado en el mantenimiento de una aplicación movil de
              llamada<b> App Delivery</b>, el cual sirve para que los
              despachadores de quipos moviles puedan gestionar las entregas.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2023</div>
          <div className="timeline-content">
            <h3>Desarrollador Full-stack</h3>
            <p>
              He trabajado en el desarrollo un aplicativo web llamado
              <b> Resolutor Web</b>, que sirve para poder gestionar los reclamos
              de la atención al cliente de Movistar TV.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2023 - <br/>Actualidad</div>
          <div className="timeline-content">
            <h3>Desarrollador Full-stack</h3>
            <p>
              Estoy trabajando en el mantenimiento de un aplicativo de llamado
              <b> Registro MTV</b>, el cual sirve para que un cliente pueda
              registrarse y activar el servicio Movistar TV.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
