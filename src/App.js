import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <section id="about" className="section-placeholder">
          <h1>Sección Sobre Mí - Próximamente</h1>
        </section>
        <section id="projects" className="section-placeholder">
          <h1>Sección Proyectos - Próximamente</h1>
        </section>
        <section id="skills" className="section-placeholder">
          <h1>Sección Habilidades - Próximamente</h1>
        </section>
        <section id="contact" className="section-placeholder">
          <h1>Sección Contacto - Próximamente</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
