import React, { useState } from 'react';
import { Mail, MessageCircle, Github, Twitter, Linkedin, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une question ? Une proposition de collaboration ? N'hésitez pas à nous écrire !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="recruitment">Recrutement</option>
                  <option value="writeup">Question sur un writeup</option>
                  <option value="training">Formation</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-black font-bold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-300">contact@teamctf.com</p>
                    <p className="text-gray-400 text-sm">Nous répondons sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Discord</h4>
                    <p className="text-gray-300">TeamCTF#1337</p>
                    <p className="text-gray-400 text-sm">Rejoignez notre serveur</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Localisation</h4>
                    <p className="text-gray-300">France, Europe</p>
                    <p className="text-gray-400 text-sm">Équipe distribuée</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Suivez-nous</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'GitHub', icon: Github, link: '#', color: 'hover:bg-gray-600' },
                  { name: 'Twitter', icon: Twitter, link: '#', color: 'hover:bg-blue-600' },
                  { name: 'LinkedIn', icon: Linkedin, link: '#', color: 'hover:bg-blue-700' },
                  { name: 'Discord', icon: MessageCircle, link: '#', color: 'hover:bg-indigo-600' }
                ].map(social => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.link}
                      className={`flex items-center space-x-3 p-4 bg-gray-700/30 rounded-lg transition-all duration-200 ${social.color} hover:text-white border border-gray-600/50 hover:border-transparent`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">🚀 Rejoignez-nous !</h3>
              <p className="text-gray-300 mb-4">
                Vous êtes passionné de cybersécurité ? Notre équipe recrute !
              </p>
              <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                Postuler maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}