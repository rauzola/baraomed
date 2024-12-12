"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import "./Header.css";

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  const [menuActive, setMenuActive] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1207px)' });

  const toggleMenu = () => {
    setMenuActive(prevState => !prevState);
  };

  return (
    <>
      <header className="header">
        <div className={`header-column logo-column ${isMobile || isTablet ? 'mobile' : ''}`}>
          <img
            src={slice.primary.logo.url || "https://baraomed.com.br/wp-content/uploads/2023/07/Logo-V001-Original-Bicolor-1024x175.png"}
            alt={slice.primary.logo.alt ||"Logo"}
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
            {slice.primary.link_menu.map((item) => (
              <a href={item.link_do_item || "#"} key={item.menu}>{item.menu}</a>
            ))}

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

export default Header;
