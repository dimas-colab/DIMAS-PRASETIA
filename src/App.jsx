import React from 'react';
// Last updated: 2026-02-04
import './App.css';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import MappingResults from './components/MappingResults';
import PastReads from './components/PastReads';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <MappingResults />
      <PastReads />
      <Contact />
    </Layout>
  );
}

export default App;
