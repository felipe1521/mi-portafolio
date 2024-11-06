'use client'

import React from 'react';
import styles from './navbar.module.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>Mi Portafolio</a>
      <label className={styles.icons}>
      <Bars3Icon onClick={handleToggle} className={(!isOpen) ? styles.icon : styles.display_none} />
      <XMarkIcon onClick={handleToggle} className={(isOpen) ? styles.icon : styles.display_none} />
      </label>
      <nav className={`${styles.navbar} ${(isOpen) ? styles.navbar_open : styles.navbar_close}`}>
        <a href="#section1" className={styles.link}>Inicio</a>
        <a href="#section3" className={styles.link}>Educación</a>
        <a href="#section2" className={styles.link}>Experiencia</a>
        <a href="#section4" className={styles.link}>Habilidades</a>
      </nav>
    </header>
  );
}
