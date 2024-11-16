import React from "react";
import styles from './education.module.css';

export default function Education() {
  return (
    <section className={styles.education} id="section3">
      <h2 className="heading">Educación</h2>
      <div className={styles.education_container}>
          <div className={styles.education_info}>
            <h5 className={styles.primary_title}>IP Santo Tomás</h5>
            <h4 className={styles.title}>Analista Programador</h4>
            <h4 className={styles.description}>Titulado (2017 - 2018)</h4>
          </div>
          <div className={styles.education_info}>
            <h5 className={styles.primary_title}>IP Santo Tomás</h5>
            <h4 className={styles.title}>Ingeniero Informático</h4>
            <h4 className={styles.description}>Titulado (2017 - 2021)</h4>
          </div>
      </div>
    </section>
  );
}
