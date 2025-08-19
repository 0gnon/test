import React, { useState } from 'react';
import { Calendar, Trophy, Users, Clock, ExternalLink, Star } from 'lucide-react';

const ctfEvents = [
  {
    name: "DefCon 31 CTF Finals",
    date: "2024-08-10",
    status: "completed",
    rank: 12,
    participants: 1200,
    category: "international",
    difficulty: "extreme",
    points: 15420,
    writeups: 8,
    image: "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Google CTF 2024",
    date: "2024-06-21",
    status: "completed",
    rank: 8,
    participants: 2100,
    category: "international",
    difficulty: "extreme",
    points: 22150,
    writeups: 12,
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "PicoCTF 2024",
    date: "2024-03-15",
    status: "completed",
    rank: 3,
    participants: 15000,
    category: "educational",
    difficulty: "medium",
    points: 18750,
    writeups: 15,
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "FCSC 2024",
    date: "2024-04-05",
    status: "completed",
    rank: 5,
    participants: 3200,
    category: "national",
    difficulty: "hard",
    points: 19840,
    writeups: 10,
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "BSides SF CTF",
    date: "2024-12-15",
    status: "upcoming",
    participants: 800,
    category: "regional",
    difficulty: "medium",
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "HackTheBox Cyber Apocalypse",
    date: "2024-01-20",
    status: "ongoing",
    participants: 5000,
    category: "international",
    difficulty: "hard",
    image: "https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export default function CTFs() {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredCTFs = ctfEvents
    .filter(ctf => filter === 'all' || ctf.status === filter)
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'rank') return (a.rank || 999) - (b.rank || 999);
      if (sortBy === 'points') return (b.points || 0) - (a.points || 0);
      return 0;
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'ongoing': return 'text-yellow-400';
      case 'upcoming': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/20 text-green-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'hard': return 'bg-orange-500/20 text-orange-400';
      case 'extreme': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank <= 3) return 'bg-gold';
    if (rank <= 10) return 'bg-silver';
    if (rank <= 50) return 'bg-bronze';
    return 'bg-gray-500/20';
  };

  return (
    <section id="ctfs" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Nos CTFs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos participations et performances dans les différents Capture The Flag
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          <div className="flex gap-2">
            {['all', 'completed', 'ongoing', 'upcoming'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === status 
                    ? 'bg-green-500 text-black' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {status === 'all' ? 'Tous' : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
          
          <select
            className="px-4 py-2 bg-gray-800/50 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-400"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Trier par date</option>
            <option value="rank">Trier par rang</option>
            <option value="points">Trier par points</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCTFs.map((ctf, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-xl overflow-hidden border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={ctf.image}
                  alt={ctf.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(ctf.status)} bg-black/50 backdrop-blur-sm`}>
                    {ctf.status}
                  </span>
                </div>

                {ctf.rank && (
                  <div className="absolute top-4 right-4">
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-full ${getRankBadge(ctf.rank)} bg-black/50 backdrop-blur-sm`}>
                      <Trophy className="w-4 h-4" />
                      <span className="text-white font-bold">#{ctf.rank}</span>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{ctf.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(ctf.date).toLocaleDateString('fr-FR')}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{ctf.participants.toLocaleString()}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(ctf.difficulty)}`}>
                    {ctf.difficulty}
                  </span>
                  <span className="text-sm text-gray-400 uppercase tracking-wide">
                    {ctf.category}
                  </span>
                </div>

                {ctf.points && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                      <span>Points obtenus</span>
                      <span className="text-green-400 font-bold">{ctf.points.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                        style={{ width: `${Math.min(100, (ctf.points / 25000) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    {ctf.writeups && (
                      <span className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{ctf.writeups} writeups</span>
                      </span>
                    )}
                  </div>
                  
                  <button className="flex items-center space-x-2 text-green-400 hover:text-white transition-colors duration-200">
                    <span className="text-sm">Voir détails</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Summary */}
        <div className="mt-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">156</div>
              <div className="text-gray-300">CTFs participés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">47</div>
              <div className="text-gray-300">Victoires</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">23</div>
              <div className="text-gray-300">Top 10</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">892k</div>
              <div className="text-gray-300">Points totaux</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}