"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import styles from "./Header.module.css";

/**
 * Props for `Site`.
 */
export type SiteProps = SliceComponentProps<Content.SiteSlice>;

/**
 * Component for "Site" Slices.
 */
const Site = ({ slice }: SiteProps): JSX.Element => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <div className={styles.logo}>
          <span className={styles.slash}>/</span>
          <span className={styles.brand}>
            <span className={styles.green}>Barão</span>
            <span className={styles.blue}>Med</span>
          </span>
          <span className={styles.slash}>/</span>
        {/* Menu Toggle (hamburger) */}
        <div className={styles["menu-toggle"]} onClick={toggleMenu}>
          ☰
        </div>
        </div>

      </div>

      <nav className={`${styles.nav} ${menuActive ? styles.active : ""}`}>
        <a href="#" className={styles.link}>Home</a>
        <a href="#" className={styles.link}>Nossos serviços</a>
        <a href="#" className={styles.link}>Como funciona</a>
        <a href="#" className={styles.link}>Fundadores</a>
        <a href="#" className={styles.btnContact}>ENTRE EM CONTATO</a>
      </nav>
    </header>
  );
};

export default Site;
