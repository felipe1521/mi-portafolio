'use client'

import { useState } from 'react';
import styles from './links.module.css';
import LinkData from './LinkData';

function Links() {
  const [clipboard, setClipboard] = useState<string | null>(null);
  const handleToggle = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setClipboard(clipboardText);
  };
  return (
    <div className={styles.home_link}>
      <div>
        <LinkData data={'felipealarcon44@gmail.com'} type={"gmail"} handleToggle={handleToggle} clipboard={clipboard} />
        <LinkData data={'+56950655634'} type={"whatsapp"} handleToggle={handleToggle} clipboard={clipboard} />
      </div> 
      <div className={styles.link_list}>
        <a href="https://linkedin.com/in/felipe-ignacio-alarcon-contreras-670a25286/" target="_blank" rel="preconnect" className={styles.link}>
          <i className="bx bxl-linkedin"></i>
          <p className={styles.link_data}>Linkedin</p>
        </a>
        <a href="https://github.com/felipe1521" target="_blank" rel="preconnect" className={styles.link}>
          <i className="bx bxl-github"></i>
          <p className={styles.link_data}>Github</p>
        </a>
      </div>
      <div className={styles.btn}>
        <a href="/CV-FelipeAlarconContreras.pdf" target="_blank">Revisa mi CV</a>
      </div>
    </div>
  )
}

export default Links;