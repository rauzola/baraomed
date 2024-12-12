"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import "./Header.css";

/**
 * Props for `Site` component.
 */
export type SiteProps = SliceComponentProps<Content.SiteSlice>;

/**
 * Component for "Site" Slices.
 */
const Site = ({ slice }: SiteProps): JSX.Element => {
  const [menuActive, setMenuActive] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1207px)' });

  const toggleMenu = () => {
    setMenuActive(prevState => !prevState);
    console.log("Menu toggle clicked, menuActive:", !menuActive);
  };

  return (
    <>
      <header className="header">
        <div className={`header-column logo-column ${isMobile || isTablet ? 'mobile' : ''}`}>
          <img
            src="https://baraomed.com.br/wp-content/uploads/2023/07/Logo-V001-Original-Bicolor-1024x175.png"
            alt="Logo Barao Med"
            className={`logo ${isMobile || isTablet ? 'mobile-logo' : ''}`}
          />
        </div>

        <div className={`header-column nav-column ${isMobile || isTablet ? 'mobile-nav' : ''}`}>
          {(isMobile || isTablet) && (
            <div className="menu-toggle" onClick={toggleMenu}>
              ☰
            </div>
          )}

          <nav className={`nav ${menuActive ? 'active' : ''}`}>
            <ScrollLink to="home" smooth={true} duration={500} offset={10}>
              Home
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} offset={10}>
              Nossos serviços
            </ScrollLink>
            <ScrollLink to="how-it-works" smooth={true} duration={500} offset={10}>
              Como funciona
            </ScrollLink>
            <ScrollLink to="founders" smooth={true} duration={500} offset={10}>
              Fundadores
            </ScrollLink>

            {/* Botão "ENTRE EM CONTATO" no menu responsivo */}
            {(isMobile || isTablet) && (
              <a href="#" className="contact-button-menu">
                ENTRE EM CONTATO
              </a>
            )}
          </nav>
        </div>



        <div className="header-column button-column">

          <a href="#" className="contact-button-header">
            ENTRE EM CONTATO
          </a>
        </div>
      </header>
    </>
  );
}

export default Site;
