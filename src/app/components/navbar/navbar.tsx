'use client'

import { useState } from 'react';
import { Orbitron } from 'next/font/google';
import styles from './navbar.module.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const font = Orbitron({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={`${font.className} ${styles.header}`}>
      <a href="#" className={styles.logo}>Mi Portafolio</a>
      <label className={styles.icons}>
      <Bars3Icon onClick={handleToggle} className={(!isOpen) ? styles.icon : styles.display_none} />
      <XMarkIcon onClick={handleToggle} className={(isOpen) ? styles.icon : styles.display_none} />
      </label>
      <nav className={`${styles.navbar} ${(isOpen) ? styles.navbar_open : styles.navbar_close}`}>
        <a href="#section1" onClick={handleToggle} className={styles.link}>Inicio</a>
        <a href="#section2" onClick={handleToggle} className={styles.link}>Experiencia</a>
        <a href="#section4" onClick={handleToggle} className={styles.link}>Habilidades</a>
        <a href="#section3" onClick={handleToggle} className={styles.link}>Educación</a>
      </nav>
    </header>
  );
}
