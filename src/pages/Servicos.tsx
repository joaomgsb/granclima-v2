import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wind, 
  Thermometer, 
  Fan, 
  Home, 
  Factory, 
  ArrowUpDown, 
  Smartphone, 
  DoorOpen 
} from 'lucide-react';

const Servicos = () => {
  const services = [
    {
      id: 1,
      title: 'Evolution',
      description: 'Toda a tecnologia desenvolvida pela Rotoplast está presente nos climatizadores da linha Evolution.',
      icon: Thermometer,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Confort',
      description: 'Climatizadores Rotoplast da linha Confort oferecem 10 velocidades para que você possa utilizá-lo da melhor forma.',
      icon: Wind,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Teto',
      description: 'Toda a tecnologia desenvolvida pela Rotoplast está presente nos climatizadores da linha Teto.',
      icon: ArrowUpDown,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Siroco',
      description: 'Com grande vazão de ar, os modelos Sirocos da Rotoplast fazem parte da linha Confort e são climatizadores robustos e funcionais. Indicado para indústrias e comércios, possuem saída de duto opcional, para baixo ou lateral.',
      icon: Factory,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Portátil',
      description: 'Proporcione mais saúde e bem-estar para sua família com os climatizadores portáteis da Rotoplast. Através do filtro colmeia, ele remove as impurezas e odores do ambiente, deixando o ar limpo e fresco.',
      icon: Smartphone,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 6,
      title: 'Exautor',
      description: 'Seja para residências, comércio ou indústria, os climatizadores exaustores são a melhor escolha para melhorar o ar em ambientes abafados. Além de consumirem pouca energia, são leves e indicados para lugares frequentados por muitas pessoas.',
      icon: Fan,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 7,
      title: 'Ventilador HVLS',
      description: 'Ventilador Portátil, indicado para indústrias e comércios...',
      icon: Wind,
      color: 'from-indigo-500 to-indigo-600'
    },

  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Nossos <span className="text-yellow-500">Serviços</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas em climatização evaporativa, ventilação e exaustão 
              com tecnologia de ponta
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Company Description */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sobre a <span className="text-yellow-500">Gran Clima</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-left md:text-left text-justify">
                Gran Clima é empresa especializada em climatização evaporativa, ventilação, exaustão, 
                confecção de Dutos MPU, é também representante autorizado dos Climatizadores Rotoplast 
                e das portas de Rolo PS do Brasil com venda e assistência técnica.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  <div className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm text-left md:text-left text-justify">
                      {service.description}
                    </p>

                    {/* Hover Effect Line */}
                    <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-6 transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 lg:p-12 rounded-2xl text-center">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Precisa de uma <span className="text-yellow-500">solução personalizada</span>?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Nossa equipe de especialistas está pronta para desenvolver o projeto 
                ideal para suas necessidades específicas de climatização
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5511997688662?text=Olá! Gostaria de solicitar um orçamento para climatizadores Rotoplast."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
                >
                  SOLICITAR ORÇAMENTO
                </a>
                <Link 
                  to="/contato#contact-form"
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 text-center"
                >
                  FALAR COM ESPECIALISTA
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Serviços <span className="text-yellow-500">Adicionais</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos suporte completo desde o projeto até a manutenção
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Projeto Personalizado',
                  description: 'Desenvolvimento de projetos sob medida para suas necessidades específicas',
                  icon: '🎯'
                },
                {
                  title: 'Instalação Profissional',
                  description: 'Equipe técnica especializada para instalação segura e eficiente',
                  icon: '🔧'
                },
                {
                  title: 'Assistência Técnica',
                  description: 'Suporte técnico autorizado Rotoplast com peças originais',
                  icon: '⚙️'
                },
                {
                  title: 'Manutenção Preventiva',
                  description: 'Planos de manutenção para garantir máxima eficiência dos equipamentos',
                  icon: '🛠️'
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;