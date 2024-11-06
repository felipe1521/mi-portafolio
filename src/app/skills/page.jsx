import React from 'react';
import Image from 'next/image';
import styles from './skills.module.css';

export default function Skills() {
  return (
    <section id="section4">
    <h2 className="heading">Habilidades Técnicas</h2>
    <div className={styles.section_card}>
        <div className={styles.card}>
            <Image src="/assets/skills/angular.png" alt="Angular" width="80" height="80" />
            <p className={styles.card_title}>Angular</p>
        </div>
        <div className={styles.card}>
            <Image src="/assets/skills/react.png" alt="React" width="80" height="80" />
            <p className={styles.card_title}>React</p>
        </div>
        <div className={styles.card}>
            <Image src="/assets/skills/nextjs.png" alt="Next.JS" width="80" height="80" />
            <p className={styles.card_title}>Next.JS</p>
        </div>
        <div className={styles.card}>
            <Image src="/assets/skills/springboot.png" alt="Springboot" width="80" height="80" />
            <p className={styles.card_title}>Springboot</p>
        </div>
        <div className={styles.card}>
            <Image src="/assets/skills/java.png" alt="Java" width="80" height="80" />
            <p className={styles.card_title}>Java</p>
        </div>
        <div className={styles.card}>
            <Image src="/assets/skills/node-js.png" alt="NodeJS" width="80" height="80" />
            <p className={styles.card_title}>Node JS</p>
        </div>
        <div className={styles.card}>
            <Image src="/assets/skills/javascript.png" alt="Javascript" width="80" height="80" />
            <p className={styles.card_title}>Javascript</p>
        </div>
        <div className={styles.card}>
            <Image src="/assets/skills/typescript.png" alt="Typescript" width="80" height="80" />
            <p className={styles.card_title}>Typescript</p>
        </div>
        <div className={styles.card}>
            <Image src="/assets/skills/html.png" alt="HTML" width="80" height="80" />
            <p className={styles.card_title}>HTML</p>
        </div>
        <div className={styles.card}>
            <Image src="/assets/skills/css.png" alt="CSS" width="80" height="80" />
            <p className={styles.card_title}>CSS</p>
        </div>
    </div>
</section>
  )
}
