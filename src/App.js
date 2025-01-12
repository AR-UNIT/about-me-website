import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Header will appear at the top */}
      <Header />
      
      {/* Navbar will appear below the header */}
      <Navbar />

      {/* All sections will be displayed at once */}
      <main>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="work">
          <WorkExperience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer will appear at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
