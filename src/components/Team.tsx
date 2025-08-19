import React, { useState } from 'react';
import { User, Crown, Star, Code, Shield, Search } from 'lucide-react';

const teamMembers = [
  {
    name: "45exile",
    role: "Chef",
    specialty: "reverse",
    quote: "Peut désassembler un binaire rien qu'en le regardant. A déjà patché un kernel Linux avec un marteau.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Loutre",
    role: "Membre",
    specialty: "web (xss)",
    quote: "Expert en vulnérabilités web. A XSSé son propre navigateur pendant ses tests. 'C'est une feature, pas un bug!'",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Ognon",
    role: "Membre",
    specialty: "web, Active Directory",
    quote: "Fait pleurer les admins sys avec ses exploits. 'Mais pourquoi tu cries? C'est juste une petite requête LDAP...'",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Ssor",
    role: "Membre",
    specialty: "web",
    quote: "Code en PHP sans framework, comme un barbare. 'Les ORM? C'est pour les faibles!'",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Tisco",
    role: "Membre",
    specialty: "web, réseau",
    quote: "A déjà sniffé un paquet TCP avec des jumelles. 'Non mais je peux voir les bits passer!'",
    avatar: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "vorstag34",
    role: "Membre",
    specialty: "goat ultime il sait tout faire",
    quote: "Le couteau suisse ultime. Peut faire une RCE avec une calculatrice Casio.",
    avatar: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "bloman",
    role: "Membre",
    specialty: "boot2root, couteau suisse",
    quote: "Expert en escalade de privilèges. 'root? C'était trop facile, je me suis auto-déclassé en nobody pour le challenge.'",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "H4ldir",
    role: "Membre",
    specialty: "forensic, osint",
    quote: "A retrouvé la clé USB perdue du CEO rien qu'avec les métadonnées d'un screenshot.",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Shor",
    role: "Membre",
    specialty: "web, pwn",
    quote: "Pwner professionnel. 'Segfault? Non, c'est juste ma technique de débogage.'",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "z3d",
    role: "Membre",
    specialty: "web, crypto",
    quote: "Cryptographe en herbe. 'J'ai cracké ce RSA... enfin, quand je dis cracké, j'ai trouvé la clé sous le pot de fleur...'",
    avatar: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "toby",
    role: "Membre",
    specialty: "rev, crypto, c'est un crack",
    quote: "Le crack du reverse. 'Ce binaire? Déjà fait. Pendant que tu lisais cette description.'",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "paw",
    role: "Membre",
    specialty: "web, pwn",
    quote: "Chasseur de bugs. 'C'est pas un bug, c'est une backdoor. La mienne.'",
    avatar: "https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Kuzamyy",
    role: "Membre",
    specialty: "web, couteau suisse",
    quote: "Polyvalent et efficace. 'J'ai codé ce site en Brainfuck pour m'amuser.'",
    avatar: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Blossom",
    role: "Membre",
    specialty: "forensic, crypto",
    quote: "Génie du forensic. 'Cette image? C'est clairement un stégo. La preuve: sort un flag de nulle part'",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Prox",
    role: "Membre",
    specialty: "osint, stégano",
    quote: "A déjà trouvé une faille sur l'infra de 42 en regardant les EXIF d'une photo de chat.",
    avatar: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Astral",
    role: "Membre",
    specialty: "réseau, web",
    quote: "Son niveau sur Valo est impressionnant. 'Headshot? Non, j'ai juste exploité une vuln 0day dans le jeu.'",
    avatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Kaiimos",
    role: "Membre",
    specialty: "débutant",
    quote: "Passionné, gros potentiel. 'J'ai rooté mon propre PC... c'était pas intentionnel!'",
    avatar: "https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Szc0rpion",
    role: "Membre",
    specialty: "réseau, web",
    quote: "Agir sans laisser de trace. Servir sans nom.",
    avatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Shlakii",
    role: "Membre",
    specialty: "réseau",
    quote: "Nouveau membre, futur étudiant à Oteria !",
    avatar: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Reyko",
    role: "Membre",
    specialty: "hardware, forensic",
    quote: "A cracké une clé RSA en mesurant la consommation électrique d'une ampoule connectée. 'Ton chiffrement? Il fuit par les EMI, mon pote'",
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