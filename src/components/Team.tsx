import React, { useState } from 'react';
import { User, Crown, Star, Code, Shield, Search } from 'lucide-react';

const teamMembers = [
  {
    name: "45exile",
    role: "Chef",
    specialty: "reverse",
    quote: "Peut unpacker un binaire avant même que vous ayez fini de le télécharger...",
    avatar: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Loutre",
    role: "Membre",
    specialty: "web (xss)",
    quote: "A XSSé son propre frigo connecté. 'Mon yaourt a poppé une alert(1)...'",
    avatar: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&h=400&fit=crop"
  },
  {
    name: "Ognon",
    role: "Membre",
    specialty: "web, Active Directory",
    quote: "Fait pleurer les admins comme des oignons. 'Un DC de down ? Normal, j'ai juste ouvert Outlook.'",
    avatar: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop"
  },
  {
    name: "Ssor",
    role: "Membre",
    specialty: "web",
    quote: "Son IDE préféré : cat. Son debugger : echo. 'Le reste c'est du confort inutile.'",
    avatar: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop"
  },
  {
    name: "Tisco",
    role: "Membre",
    specialty: "web, réseau",
    quote: "Sniffe les paquets réseau en tendant l'oreille. 'Ping flood ? J'ai entendu un écho.'",
    avatar: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=400&h=400&fit=crop"
  },
  {
    name: "vorstag34",
    role: "Membre",
    specialty: "goat ultime il sait tout faire",
    quote: "Peut faire une RCE avec une calculatrice Casio. 'Flag trouvé sur la TI-83.'",
    avatar: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400&h=400&fit=crop"
  },
  {
    name: "bloman",
    role: "Membre",
    specialty: "boot2root, couteau suisse",
    quote: "'Root trop facile ? Je me suis volontairement rétrogradé en nobody pour la beauté du geste.'",
    avatar: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=400&fit=crop"
  },
  {
    name: "H4ldir",
    role: "Membre",
    specialty: "forensic, osint",
    quote: "Retrouve des clés privées dans les métadonnées des selfies. 'Ton flag fuit plus que ton ex sur Insta.'",
    avatar: "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?w=400&h=400&fit=crop"
  },
  {
    name: "Shor",
    role: "Membre",
    specialty: "web, pwn",
    quote: "Pwner professionnel. 'Segfault ? Non, c'est ma feature de debug.'",
    avatar: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop"
  },
  {
    name: "z3d",
    role: "Membre",
    specialty: "web, crypto",
    quote: "Cryptographe en herbe. 'J'ai cassé ce RSA… la clé était sous le paillasson.'",
    avatar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop"
  },
  {
    name: "toby",
    role: "Membre",
    specialty: "rev, crypto",
    quote: "Le crack du reverse. 'Pendant que tu lis ça, j'ai déjà fini le CTF.'",
    avatar: "https://images.unsplash.com/photo-1614064643087-96ce7f0737c8?w=400&h=400&fit=crop"
  },
  {
    name: "paw",
    role: "Membre",
    specialty: "web, pwn",
    quote: "Chasseur de bugs. 'C'est pas un bug, c'est ma backdoor perso.'",
    avatar: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop"
  },
  {
    name: "Kuzamyy",
    role: "Membre",
    specialty: "web, couteau suisse",
    quote: "Polyvalent. 'J'ai recodé Metasploit en Brainfuck, pour le fun.'",
    avatar: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
  },
  {
    name: "Blossom",
    role: "Membre",
    specialty: "forensic, crypto",
    quote: "Sort des flags de nulle part. 'Ton JPEG est un CTF à lui tout seul.'",
    avatar: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=400&h=400&fit=crop"
  },
  {
    name: "Prox",
    role: "Membre",
    specialty: "osint, stégano",
    quote: "A trouvé 16 failles critiques sur l'infra de 42 en une journée ! Et il est challmaker osint x stégano à ses heures perdues.",
    avatar: "https://images.unsplash.com/photo-1568027763595-ef293f388029?w=400&h=400&fit=crop"
  },
  {
    name: "Astral",
    role: "Membre",
    specialty: "réseau, web",
    quote: "Frag shooter & net hacker. 'Mon headshot ? Juste un exploit UDP.'",
    avatar: "https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?w=400&h=400&fit=crop"
  },
  {
    name: "Kaiimos",
    role: "Membre",
    specialty: "débutant",
    quote: "A déjà root son propre PC par accident. 'Exploit non intentionnel validé.'",
    avatar: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop"
  },
  {
    name: "Szc0rpion",
    role: "Membre",
    specialty: "réseau, web",
    quote: "'Agir sans logs. Scanner sans bruit. Disparaître comme un TTL expiré.'",
    avatar: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=400&fit=crop"
  },
  {
    name: "Shlakii",
    role: "Membre",
    specialty: "réseau",
    quote: "Nouveau membre. Futur étudiant à Oteria. 'Son Wireshark a déjà un skin custom.'",
    avatar: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop"
  },
  {
    name: "Reyko",
    role: "Membre",
    specialty: "hardware, forensic",
    quote: "A dumpé une clé RSA en écoutant le bruit d'une ampoule connectée. 'Ton chiffrement fuit par les ondes, bro.'",
    avatar: "https://images.unsplash.com/photo-1519575706483-221027bfbb31?w=400&h=400&fit=crop"
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