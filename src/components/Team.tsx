import React, { useState } from 'react';
import { User, Crown, Star, Code, Shield, Search } from 'lucide-react';

const teamMembers = [
  {
    name: "45exile",
    role: "Chef",
    specialty: "reverse",
    quote: "Peut unpacker un binaire avant même que vous ayez fini de le télécharger...",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Loutre",
    role: "Membre",
    specialty: "web (xss)",
    quote: "A XSSé son propre frigo connecté. 'Mon yaourt a poppé une alert(1)...'",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Ognon",
    role: "Membre",
    specialty: "web, Active Directory",
    quote: "Fait pleurer les admins comme des oignons. 'Un DC de down ? Normal, j’ai juste ouvert Outlook.'",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Ssor",
    role: "Membre",
    specialty: "web",
    quote: "Son IDE préféré : cat. Son debugger : echo. 'Le reste c'est du confort inutile.'",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Tisco",
    role: "Membre",
    specialty: "web, réseau",
    quote: "Sniffe les paquets réseau en tendant l’oreille. 'Ping flood ? J’ai entendu un écho.'",
    avatar: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "vorstag34",
    role: "Membre",
    specialty: "goat ultime il sait tout faire",
    quote: "Peut faire une RCE avec une calculatrice Casio. 'Flag trouvé sur la TI-83.'",
    avatar: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "bloman",
    role: "Membre",
    specialty: "boot2root, couteau suisse",
    quote: "'Root trop facile ? Je me suis volontairement rétrogradé en nobody pour la beauté du geste.'",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "H4ldir",
    role: "Membre",
    specialty: "forensic, osint",
    quote: "Retrouve des clés privées dans les métadonnées des selfies. 'Ton flag fuit plus que ton ex sur Insta.'",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Shor",
    role: "Membre",
    specialty: "web, pwn",
    quote: "Pwner professionnel. 'Segfault ? Non, c'est ma feature de debug.'",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "z3d",
    role: "Membre",
    specialty: "web, crypto",
    quote: "Cryptographe en herbe. 'J’ai cassé ce RSA… la clé était sous le paillasson.'",
    avatar: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "toby",
    role: "Membre",
    specialty: "rev, crypto",
    quote: "Le crack du reverse. 'Pendant que tu lis ça, j’ai déjà fini le CTF.'",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "paw",
    role: "Membre",
    specialty: "web, pwn",
    quote: "Chasseur de bugs. 'C’est pas un bug, c’est ma backdoor perso.'",
    avatar: "https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Kuzamyy",
    role: "Membre",
    specialty: "web, couteau suisse",
    quote: "Polyvalent. 'J’ai recodé Metasploit en Brainfuck, pour le fun.'",
    avatar: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Blossom",
    role: "Membre",
    specialty: "forensic, crypto",
    quote: "Sort des flags de nulle part. 'Ton JPEG est un CTF à lui tout seul.'",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Prox",
    role: "Membre",
    specialty: "osint, stégano",
    quote: "A trouvé 16 failles critiques sur l’infra de 42 en une journée ! Et il est challmaker osint x stégano à ses heures perdues.",
    avatar: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Astral",
    role: "Membre",
    specialty: "réseau, web",
    quote: "Frag shooter & net hacker. 'Mon headshot ? Juste un exploit UDP.'",
    avatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Kaiimos",
    role: "Membre",
    specialty: "débutant",
    quote: "A déjà root son propre PC par accident. 'Exploit non intentionnel validé.'",
    avatar: "https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Szc0rpion",
    role: "Membre",
    specialty: "réseau, web",
    quote: "'Agir sans logs. Scanner sans bruit. Disparaître comme un TTL expiré.'",
    avatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Shlakii",
    role: "Membre",
    specialty: "réseau",
    quote: "Nouveau membre. Futur étudiant à Oteria. 'Son Wireshark a déjà un skin custom.'",
    avatar: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Reyko",
    role: "Membre",
    specialty: "hardware, forensic",
    quote: "A dumpé une clé RSA en écoutant le bruit d’une ampoule connectée. 'Ton chiffrement fuit par les ondes, bro.'",
    avatar: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export default function Team() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const specialties = ['all', 'web', 'crypto', 'reverse', 'forensic', 'osint', 'network', 'pwn'];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || 
                           member.specialty.toLowerCase().includes(selectedSpecialty);
    return matchesSearch && matchesSpecialty;
  });

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Rencontrez les hackers d'élite qui composent notre team CTF
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un membre..."
              className="pl-10 pr-4 py-3 bg-gray-800/50 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="px-4 py-3 bg-gray-800/50 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-400"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            {specialties.map(specialty => (
              <option key={specialty} value={specialty} className="bg-gray-800">
                {specialty === 'all' ? 'Toutes spécialités' : specialty.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={member.name}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {member.role === 'Chef' && (
                  <div className="absolute top-4 right-4">
                    <Crown className="w-6 h-6 text-yellow-400" />
                  </div>
                )}
                
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    {member.specialty.includes('web') && <Code className="w-5 h-5 text-blue-400" />}
                    {member.specialty.includes('crypto') && <Shield className="w-5 h-5 text-purple-400" />}
                    {member.specialty.includes('forensic') && <Search className="w-5 h-5 text-green-400" />}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {member.name}
                  </h3>
                  {member.role === 'Chef' ? (
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                      Chef
                    </span>
                  ) : (
                    <Star className="w-5 h-5 text-gray-400" />
                  )}
                </div>

                <div className="mb-3">
                  <span className="text-green-400 font-medium text-sm uppercase tracking-wide">
                    {member.specialty}
                  </span>
                </div>

                <p className="text-gray-300 text-sm italic leading-relaxed group-hover:text-white transition-colors">
                  "{member.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Envie de nous rejoindre ?</h3>
            <p className="text-gray-300 mb-6">
              Nous recherchons toujours de nouveaux talents passionnés de cybersécurité
            </p>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-black font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200">
              Postuler maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
