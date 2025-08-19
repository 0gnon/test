import React from 'react';
import { Shield, Heart, Code, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-green-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Team CTF
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Une équipe d'élite spécialisée dans les Capture The Flag et la cybersécurité. 
              Nous repoussons les limites de la sécurité informatique un challenge à la fois.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '#home' },
                { name: 'Équipe', href: '#team' },
                { name: 'Statistiques', href: '#stats' },
                { name: 'CTFs', href: '#ctfs' },
                { name: 'Writeups', href: '#writeups' },
                { name: 'Contact', href: '#contact' }
              ].map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              {[
                'Guides débutants',
                'Outils recommandés', 
                'Formations',
                'Communauté Discord',
                'Blog technique',
                'FAQ'
              ].map(resource => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>and</span>
              <Code className="w-4 h-4 text-green-400" />
              <span>by Team CTF</span>
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              © {currentYear} Team CTF. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}