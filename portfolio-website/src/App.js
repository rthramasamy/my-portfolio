import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/css/styles.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;