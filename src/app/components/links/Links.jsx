'use client'

import React from 'react';
import styles from './links.module.css';
import { ClipboardDocumentCheckIcon, CheckIcon } from '@heroicons/react/24/outline';

function Links() {
  return (
    <div className={styles.home_link}>
      <LinkData data={'felipealarcon44@gmail.com'} color={"#C82401"} type={"gmail"} />
      <LinkData data={'+56950655634'} color={"#25D366"} type={"whatsapp"} />
      <div className={styles.link_list}>
        <a href="https://linkedin.com/in/felipe-ignacio-alarcon-contreras-670a25286/" target="_blank"
        className={styles.link} style={{ backgroundColor: "#0A66C2", boxShadow: "0 0 1rem #0A66C2"}}>
          <i className="bx bxl-linkedin"></i>
          <p className={styles.link_data}>Linkedin</p>
        </a>
        <a href="https://github.com/felipe1521" target="_blank"
        className={styles.link} style={{ backgroundColor: "#0D1117", boxShadow: "0 0 1rem #0D1117"}}>
          <i className="bx bxl-github"></i>
          <p className={styles.link_data}>Github</p>
        </a>
      </div>
      <button href="/CV-FelipeAlarconContreras.pdf" target="_blank" className={styles.btn}>Revisa mi CV</button>
    </div>
  )
}

function LinkData({ data, color, type }) {
  const [opacity, setOpacity] = React.useState(0);
  const [icon, setIcon] = React.useState(0);
  const handleClick = async () => {
    const clipboardText = await navigator.clipboard.readText();
    if(clipboardText == data) {
      setOpacity(0);
      setIcon(0);
      return;
    }
    navigator.clipboard.writeText(data);
    setOpacity(1);
    setIcon(1);
    setTimeout(() => setOpacity(0), 2000);
  };
  return (
    <div className={styles.data_content} style={{backgroundColor: color, boxShadow: `0 0 10px ${color}`}}>
        <i className={`bx bxl-${type}`}></i>
        <p className={styles.data_text}>{data}</p>
        <p className={styles.clipboard_text} style={{opacity: opacity}}>Copiado!</p>
        <ClipboardDocumentCheckIcon onClick={handleClick}
          className={styles.clipboard_icon} style={{ display: icon == 1 ? 'none' : 'block' }} />
        <CheckIcon className={styles.clipboard_icon} style={{ display: icon == 0 ? 'none' : 'block' }} />
    </div>
  )
}

export default Links;