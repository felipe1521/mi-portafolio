
import Links from '../components/links/Links';
import styles from './home.module.css';

export default function Home() {
  return (
    <section className={styles.home} id="section1">
      <div className={styles.title_content}>
        <h1>Felipe Alarcón Contreras</h1>
        <div className={styles.typing_content}>
          <h3 className={styles.typing_text}>Desarrollador Web</h3>
        </div>
      </div>
      <div className={styles.description_content}>
        Tengo 5 años de experiencia en el campo del desarrollo
        de software, donde he colaborado con clientes de
        diversos sectores. Tengo experiencia utilizando diversas tecnologías
        de front-end, back-end, bases de datos, herramientas DevOps y
        metodologías ágiles como SCRUM.  
      </div>
      <Links />
    </section>
  );
}
