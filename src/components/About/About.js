import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'Node.js', level: 80, color: '#339933' },
    { name: 'HTML/CSS', level: 95, color: '#E34F26' },
    { name: 'Git', level: 85, color: '#F05032' },
    { name: 'UI/UX Design', level: 75, color: '#FF6B6B' },
  ];

  const experiences = [
    { year: '2023-Presente', role: 'Desarrollador Full Stack', company: 'Freelance' },
    { year: '2021-2023', role: 'Desarrollador Frontend', company: 'Tech Solutions Inc.' },
    { year: '2019-2021', role: 'Practicante Desarrollo Web', company: 'Startup Innovadora' },
  ];

  const education = [
    { year: '2018-2022', degree: 'Ingeniería de Software', institution: 'Universidad Nacional' },
    { year: '2023', degree: 'Certificación React Avanzado', institution: 'Platzi' },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        {/* Sección Título */}
        <div className="section-header">
          <h2 className="section-title">Sobre <span className="highlight">Mí</span></h2>
          <p className="section-subtitle">Conoce más sobre mi trayectoria y habilidades</p>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          {/* Columna Izquierda - Información Personal */}
          <div className="about-info">
            <div className="info-card">
              <h3 className="info-title">Mi Historia</h3>
              <p className="info-text">
                Soy un apasionado desarrollador full stack con más de 3 años de experiencia 
                creando aplicaciones web modernas y escalables. Mi enfoque combina código 
                limpio con diseño atractivo para ofrecer experiencias de usuario excepcionales.
              </p>
              <p className="info-text">
                Me especializo en el ecosistema JavaScript (React, Node.js) y siempre estoy 
                aprendiendo nuevas tecnologías. Creo firmemente en el aprendizaje continuo 
                y en compartir conocimiento con la comunidad.
              </p>
            </div>

            <div className="info-card">
              <h3 className="info-title">Mis Valores</h3>
              <div className="values-list">
                <div className="value-item">
                  <div className="value-icon">💡</div>
                  <div className="value-content">
                    <h4>Innovación</h4>
                    <p>Busco soluciones creativas a problemas complejos</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🎯</div>
                  <div className="value-content">
                    <h4>Calidad</h4>
                    <p>Código limpio, testeado y bien documentado</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <div className="value-content">
                    <h4>Colaboración</h4>
                    <p>Trabajo en equipo y comunicación efectiva</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Habilidades y Experiencia */}
          <div className="about-details">
            {/* Habilidades Técnicas */}
            <div className="skills-section">
              <h3 className="skills-title">Habilidades Técnicas</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experiencia y Educación */}
            <div className="timeline-section">
              <div className="timeline-tabs">
                <button className="timeline-tab active">Experiencia</button>
                <button className="timeline-tab">Educación</button>
              </div>

              <div className="timeline-content">
                {/* Experiencia */}
                <div className="timeline active">
                  {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                      <div className="timeline-year">{exp.year}</div>
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h4>{exp.role}</h4>
                        <p>{exp.company}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Educación */}
                <div className="timeline">
                  {education.map((edu, index) => (
                    <div className="timeline-item" key={index}>
                      <div className="timeline-year">{edu.year}</div>
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h4>{edu.degree}</h4>
                        <p>{edu.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <a href="#contact" className="cta-button">Trabajemos Juntos</a>
          <a href="#projects" className="cta-button secondary">Ver Proyectos</a>
        </div>
      </div>
    </section>
  );
};

export default About;