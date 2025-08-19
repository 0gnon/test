import React, { useState } from 'react';
import { BookOpen, Eye, ThumbsUp, Calendar, Tag, User, ExternalLink } from 'lucide-react';

const writeups = [
  {
    title: "RSA avec des indices cachés - Google CTF 2024",
    author: "z3d",
    category: "Crypto",
    difficulty: "Hard",
    date: "2024-06-25",
    views: 1247,
    likes: 89,
    readTime: "8 min",
    excerpt: "Comment j'ai cracké un RSA 2048 bits en exploitant des fuites d'information dans les paramètres...",
    tags: ["RSA", "Side-channel", "Python"],
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    title: "Reverse Engineering d'un malware polymorphe",
    author: "45exile",
    category: "Reverse",
    difficulty: "Extreme",
    date: "2024-06-20",
    views: 2156,
    likes: 156,
    readTime: "15 min",
    excerpt: "Analyse complète d'un malware utilisant des techniques de morphisme avancées pour échapper à la détection...",
    tags: ["Assembly", "IDA Pro", "Unpacking"],
    image: "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    title: "XSS to Admin Panel - Exploitation complète",
    author: "Loutre",
    category: "Web",
    difficulty: "Medium",
    date: "2024-06-18",
    views: 987,
    likes: 67,
    readTime: "6 min",
    excerpt: "De la découverte d'une XSS réfléchie à la prise de contrôle complète du panel d'administration...",
    tags: ["XSS", "JavaScript", "Session Hijacking"],
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    title: "Buffer Overflow avec DEP/ASLR bypass",
    author: "Shor",
    category: "Pwn",
    difficulty: "Hard",
    date: "2024-06-15",
    views: 1453,
    likes: 112,
    readTime: "12 min",
    excerpt: "Exploitation d'un buffer overflow classique en contournant les protections modernes DEP et ASLR...",
    tags: ["ROP", "Exploitation", "GDB"],
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    title: "OSINT - Retrouver une personne avec une photo",
    author: "H4ldir",
    category: "OSINT",
    difficulty: "Medium",
    date: "2024-06-12",
    views: 2341,
    likes: 203,
    readTime: "10 min",
    excerpt: "Méthodologie complète pour retrouver l'identité d'une personne à partir d'une simple photographie...",
    tags: ["Google Dorking", "Metadata", "Social Engineering"],
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    title: "Stéganographie dans les fichiers audio",
    author: "Blossom",
    category: "Forensic",
    difficulty: "Hard",
    date: "2024-06-08",
    views: 876,
    likes: 54,
    readTime: "9 min",
    excerpt: "Techniques avancées pour détecter et extraire des données cachées dans les fichiers audio WAV...",
    tags: ["Steganography", "Audio", "Spectral Analysis"],
    image: "https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export default function Writeups() {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const categories = ['all', 'Web', 'Crypto', 'Reverse', 'Pwn', 'OSINT', 'Forensic'];

  const filteredWriteups = writeups
    .filter(writeup => filter === 'all' || writeup.category === filter)
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'views') return b.views - a.views;
      if (sortBy === 'likes') return b.likes - a.likes;
      return 0;
    });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Hard': return 'bg-orange-500/20 text-orange-400';
      case 'Extreme': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Web: 'bg-blue-500/20 text-blue-400',
      Crypto: 'bg-purple-500/20 text-purple-400',
      Reverse: 'bg-red-500/20 text-red-400',
      Pwn: 'bg-orange-500/20 text-orange-400',
      OSINT: 'bg-green-500/20 text-green-400',
      Forensic: 'bg-cyan-500/20 text-cyan-400'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <section id="writeups" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Nos Writeups
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos analyses détaillées et solutions des challenges les plus intéressants
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === category 
                    ? 'bg-green-500 text-black' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category === 'all' ? 'Tous' : category}
              </button>
            ))}
          </div>
          
          <select
            className="px-4 py-2 bg-gray-800/50 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-400"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Plus récents</option>
            <option value="views">Plus vus</option>
            <option value="likes">Plus aimés</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredWriteups.map((writeup, index) => (
            <article
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-xl overflow-hidden border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={writeup.image}
                  alt={writeup.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(writeup.category)}`}>
                    {writeup.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(writeup.difficulty)}`}>
                    {writeup.difficulty}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-green-400 transition-colors">
                    {writeup.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{writeup.author}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(writeup.date).toLocaleDateString('fr-FR')}</span>
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {writeup.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {writeup.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{writeup.views}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{writeup.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{writeup.readTime}</span>
                    </span>
                  </div>
                  
                  <button className="flex items-center space-x-1 text-green-400 hover:text-white transition-colors duration-200">
                    <span className="text-sm">Lire</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mt-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Featured writeup"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
                  Extreme
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                  Crypto
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Article vedette: Attaque par canaux auxiliaires sur AES
              </h3>
              <p className="text-gray-300 mb-6">
                Une analyse approfondie d'une attaque par canaux auxiliaires sur une implémentation AES, 
                incluant la théorie, l'implémentation pratique et les contre-mesures possibles.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>Par toby</span>
                  <span>•</span>
                  <span>3,247 vues</span>
                  <span>•</span>
                  <span>20 min de lecture</span>
                </div>
                <button className="bg-green-500 hover:bg-green-400 text-black font-medium px-6 py-2 rounded-lg transition-colors duration-200">
                  Lire maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}