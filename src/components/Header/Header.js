import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="#home" className="logo-link">
            <span className="logo-text">Beimar</span>
            <span className="logo-dot">.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                <a 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;