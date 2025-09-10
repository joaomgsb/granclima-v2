import React from 'react';
import { Link } from 'react-router-dom';

const ClientsSection = () => {
  const clients = [
    { name: 'Cliente 1', logo: '/images/clientes/1.png' },
    { name: 'Cliente 2', logo: '/images/clientes/2.png' },
    { name: 'Cliente 3', logo: '/images/clientes/3.png' },
    { name: 'Cliente 4', logo: '/images/clientes/4.png' },
    { name: 'Cliente 5', logo: '/images/clientes/5.png' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Clientes <span className="text-yellow-500">Rotoplast</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-left">
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Grandes empresas confiam em nossas soluções de climatização
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-infinite hover:pause-animation">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 mx-8"
              >
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-110 p-6 flex items-center justify-center">
                  <img 
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
            {/* Second set of logos for seamless loop */}
            {clients.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 mx-8"
              >
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-110 p-6 flex items-center justify-center">
                  <img 
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6 text-center">
            Junte-se a essas e outras grandes empresas que já escolheram a Rotoplast
          </p>
          <Link 
            to="/contato#contact-form"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            SEJA NOSSO CLIENTE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;