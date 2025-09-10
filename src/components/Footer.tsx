import React from 'react';
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    'Home', 'Produtos', 'Projetos', 'Serviços', 'Vídeos', 'Sobre', 'Contato'
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo.png" 
                alt="Gran Clima Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">GRAN CLIMA</h3>
                <p className="text-gray-400">AUTORIZADO ROTOPLAST</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Especialistas em climatização evaporativa, oferecendo soluções 
              sustentáveis e econômicas para diversos segmentos industriais e comerciais.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-600 hover:bg-pink-500 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-yellow-400">Contato</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">(11) 2816-9048</p>
                  <p className="text-gray-400 text-sm">WhatsApp / Telefone</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">contato@granclima.com.br</p>
                  <p className="text-gray-400 text-sm">Email comercial</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">Segunda à Sexta</p>
                  <p className="text-gray-400 text-sm">08:00 às 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">Rua Custódia do Nascimento Aguirre, 170</p>
                  <p className="text-gray-400 text-sm">Jardim das Tulipas, Jundiaí - SP, 13212-760</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-yellow-400">Navegação</h4>
            
            <nav className="space-y-3">
              {menuItems.map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400">
                © {currentYear} Gran Clima. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm">
                Desenvolvido com tecnologia e qualidade Rotoplast
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;