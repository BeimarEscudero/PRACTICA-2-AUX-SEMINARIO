import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          {/* Saludo */}
          <span className="hero-greeting">¡Hola! Soy</span>
          
          {/* Nombre */}
          <h1 className="hero-title">
            Beimar <span className="hero-title-highlight">Escudero</span>
          </h1>
          
          {/* Título/Especialización */}
          <h2 className="hero-subtitle">
            Desarrollador Full Stack & 
            <span className="hero-subtitle-highlight"> Diseñador UI/UX</span>
          </h2>
          
          {/* Descripción */}
          <p className="hero-description">
            Creo experiencias digitales impactantes combinando código limpio 
            con diseño centrado en el usuario. Especializado en React, Node.js 
            y soluciones escalables.
          </p>
          
          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Ver Proyectos
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contáctame
            </a>
          </div>
          
          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Años Exp.</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfacción</span>
            </div>
          </div>
        </div>
        
        {/* Imagen/Avatar */}
        <div className="hero-image">
          <div className="avatar-container">
            <div className="avatar-placeholder">
              <span className="avatar-text">BE</span>
            </div>
            <div className="tech-icons">
              <div className="tech-icon react">⚛️</div>
              <div className="tech-icon js">🟨</div>
              <div className="tech-icon node">🟢</div>
              <div className="tech-icon css">🎨</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;