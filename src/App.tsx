import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import Stats from './components/Stats';
import CTFs from './components/CTFs';
import Writeups from './components/Writeups';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Team />
        <Stats />
        <CTFs />
        <Writeups />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;