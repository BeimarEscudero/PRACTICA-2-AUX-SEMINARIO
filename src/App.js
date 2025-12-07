import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main style={{ paddingTop: "80px" }}>
        <section id="about" style={{ height: "100vh", padding: "2rem" }}>
          <h1>Sección Sobre Mí - Próximamente</h1>
        </section>
        <section id="projects" style={{ height: "100vh", padding: "2rem" }}>
          <h1>Sección Proyectos - Próximamente</h1>
        </section>
        <section id="skills" style={{ height: "100vh", padding: "2rem" }}>
          <h1>Sección Habilidades - Próximamente</h1>
        </section>
        <section id="contact" style={{ height: "100vh", padding: "2rem" }}>
          <h1>Sección Contacto - Próximamente</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
