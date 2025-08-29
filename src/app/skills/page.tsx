import Image from 'next/image';
import styles from './skills.module.css';

export default function Skills() {
    const skils = [
        { name: 'React', img: '/assets/skills/react.png' },
        { name: 'Next JS', img: '/assets/skills/nextjs.png' },
        { name: 'Angular', img: '/assets/skills/angular.png' },
        { name: 'Springboot', img: '/assets/skills/springboot.png' },
        { name: 'Java', img: '/assets/skills/java.png' },
        { name: 'Python', img: '/assets/skills/python.png' },
        { name: 'Javascript', img: '/assets/skills/javascript.png' },
        { name: 'Typescript', img: '/assets/skills/typescript.png' },
        { name: 'HTML', img: '/assets/skills/html.png' },
        { name: 'CSS', img: '/assets/skills/css.png' },
        { name: 'Node JS', img: '/assets/skills/node-js.png' },
    ];
    const containerSkills = skils.map((skill) => (
        <div key={skill.name} className={styles.card}>
            <Image src={skill.img} alt={skill.name} width="80" height="80" />
            <p className={styles.card_title}>{skill.name}</p>
        </div>
    ));
  return (
    <section className={styles.section_skills} id="section4">
    <h2 className="heading">Habilidades Técnicas</h2>
    <div className={styles.section_card}>
        {containerSkills} 
    </div>
</section>
  )
}
