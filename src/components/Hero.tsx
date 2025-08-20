import React, { useEffect, useState } from 'react';
import { Terminal, Code, Shield, Zap } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = '> Hack the planet, one CTF at a time...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-8 flex justify-center space-x-4">
          {[Terminal, Code, Shield, Zap].map((Icon, index) => (
            <div
              key={index}
              className={`p-4 rounded-full border-2 border-green-400/30 bg-green-400/10 animate-pulse`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Icon className="w-8 h-8 text-green-400" />
            </div>
          ))}
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Freep0nx
        </h1>

        <div className="text-xl md:text-2xl text-green-400 font-mono mb-8 h-8">
          {text}
          <span className="animate-pulse">|</span>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Une équipe d'élite spécialisée dans les <span className="text-green-400 font-semibold">Capture The Flag</span>.
          Nous décortiquons, exploitons et dominons les challenges de cybersécurité les plus complexes.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-green-500 to-blue-500 text-black font-bold py-4 px-8 rounded-lg transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
            <span className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Rejoindre l'équipe</span>
            </span>
          </button>
          
          <button className="group border-2 border-green-400 text-green-400 font-bold py-4 px-8 rounded-lg transition-all duration-200 hover:bg-green-400 hover:text-black hover:shadow-lg hover:shadow-green-400/25">
            <span className="flex items-center space-x-2">
              <Terminal className="w-5 h-5" />
              <span>Nos writeups</span>
            </span>
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '20+', label: 'Membres actifs' },
            { number: '150+', label: 'CTFs participés' },
            { number: '500+', label: 'Challenges résolus' },
            { number: '#1', label: 'Classement mondial' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-green-400 group-hover:text-blue-400 transition-colors duration-200">
                {stat.number}
              </div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}