import React from "react";
import styles from './experience.module.css';

export default function Experience() {
  return (
    <section className={styles.timeline} id="section2">
      <h3 className="heading">Experiencia</h3>
      <div className={styles.timeline_title}>
        <h4>NTT DATA</h4>
      </div>
      <div className={styles.timeline_items}>
        <div className={styles.timeline_item}>
          <div className={styles.timeline_dot}></div>
          <div className={styles.timeline_date}>2020 - <br/>2021</div>
          <div className={styles.timeline_content}>
            <h3>Desarrollador Full-stack</h3>
            <p>
              He trabajado en la creación de un aplicativo web llamado New LDI, 
              el cual sirve para toda la gestión de los clientes de larga distancia y del Carrier 188 y 181.
            </p>
          </div>
        </div>
        <div className={styles.timeline_item}>
          <div className={styles.timeline_dot}></div>
          <div className={styles.timeline_date}>2022</div>
          <div className={styles.timeline_content}>
            <h3>Desarrollador Mobile</h3>
            <p>
              He trabajado en el mantenimiento de una aplicación móvil llamada App Delivery, 
              la cual sirve para que los despachadores de equipos móviles puedan gestionar las entregas.
            </p>
          </div>
        </div>
        <div className={styles.timeline_item}>
          <div className={styles.timeline_dot}></div>
          <div className={styles.timeline_date}>2023</div>
          <div className={styles.timeline_content}>
            <h3>Desarrollador Full-stack</h3>
            <p>
              He trabajado en el desarrollo un aplicativo web llamado Resolutor Web, 
              que sirve para poder gestionar los reclamos de la atención al cliente de Movistar TV.
            </p>
          </div>
        </div>
        <div className={styles.timeline_item}>
          <div className={styles.timeline_dot}></div>
          <div className={styles.timeline_date}>2023 - <br/>Actualidad</div>
          <div className={styles.timeline_content}>
            <h3>Desarrollador Full-stack</h3>
            <p>
            Estoy trabajando en el mantenimiento de un aplicativo llamado Registro MTV, 
            el cual sirve para que un cliente pueda registrarse y activar el servicio Movistar TV.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
