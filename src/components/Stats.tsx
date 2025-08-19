import React from 'react';
import { TrendingUp, Award, Target, Users, Calendar, Trophy, Zap, Shield } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, label: 'Membres actifs', value: '20+', change: '+3 ce mois', color: 'green' },
    { icon: Trophy, label: 'CTFs gagnés', value: '47', change: '+5 ce mois', color: 'yellow' },
    { icon: Target, label: 'Challenges résolus', value: '1,247', change: '+89 cette semaine', color: 'blue' },
    { icon: Award, label: 'Podiums', value: '23', change: '+2 ce mois', color: 'purple' },
    { icon: Calendar, label: 'CTFs participés', value: '156', change: '+12 ce mois', color: 'pink' },
    { icon: Zap, label: 'Points totaux', value: '45,892', change: '+1,203 cette semaine', color: 'orange' },
    { icon: Shield, label: 'Vulns trouvées', value: '312', change: '+24 ce mois', color: 'red' },
    { icon: TrendingUp, label: 'Classement mondial', value: '#42', change: '↑ 5 places', color: 'cyan' }
  ];

  const colorClasses = {
    green: 'from-green-500 to-emerald-500',
    yellow: 'from-yellow-500 to-orange-500',
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-violet-500',
    pink: 'from-pink-500 to-rose-500',
    orange: 'from-orange-500 to-red-500',
    red: 'from-red-500 to-pink-500',
    cyan: 'from-cyan-500 to-blue-500'
  };

  return (
    <section id="stats" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Nos Performances
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos statistiques et notre progression dans l'univers des CTF
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {stat.value}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {stat.label}
                  </h3>
                  <div className="text-xs text-green-400 font-medium">
                    {stat.change}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div 
                      className={`h-1 bg-gradient-to-r ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-full transition-all duration-1000 group-hover:w-full`}
                      style={{ width: `${Math.random() * 40 + 60}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Graphiques de progression */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Progression mensuelle</h3>
            <div className="space-y-4">
              {['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'].map((month, index) => (
                <div key={month} className="flex items-center justify-between">
                  <span className="text-gray-300 w-20">{month}</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000"
                        style={{ width: `${(index + 1) * 15 + Math.random() * 20}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-green-400 font-medium w-16 text-right">
                    {Math.floor(Math.random() * 500 + 200)} pts
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Top catégories</h3>
            <div className="space-y-4">
              {[
                { category: 'Web Exploitation', score: 98, color: 'from-blue-500 to-cyan-500' },
                { category: 'Reverse Engineering', score: 95, color: 'from-purple-500 to-violet-500' },
                { category: 'Cryptography', score: 87, color: 'from-green-500 to-emerald-500' },
                { category: 'Forensics', score: 82, color: 'from-yellow-500 to-orange-500' },
                { category: 'OSINT', score: 79, color: 'from-pink-500 to-rose-500' },
                { category: 'Pwn', score: 74, color: 'from-red-500 to-pink-500' }
              ].map((item, index) => (
                <div key={item.category} className="flex items-center justify-between">
                  <span className="text-gray-300 w-32 text-sm">{item.category}</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-green-400 font-medium w-12 text-right">
                    {item.score}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}