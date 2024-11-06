
import React from 'react';
import Links from '@/app/components/links/Links';
import styles from './home.module.css';

export default function Home() {
  return (
    <section className={styles.home} id="section1">
      <div className={styles.title_content}>
        <h3>Me llamo</h3><h1>Felipe Ignacio Alarcón Contreras</h1>
        <div className={styles.typing_content}>
          <h3 className={styles.typing_text}>Soy Desarrollador Web</h3>
        </div>
      </div>
      <div className={styles.description_content}>
        <p>
          Tengo 5 años de experiencia en el campo del desarrollo
          de software, donde he colaborado con clientes de
          diversos sectores. Tengo experiencia utilizando diversas tecnologías
          de front-end, back-end, bases de datos, herramientas DevOps y
          metodologías ágiles como SCRUM.
        </p>  
      </div>
      <div className={styles.links_content}>
        <Links />
      </div>
    </section>
  );
}
