import React from 'react';
import { 
  DollarSign, 
  Heart, 
  Wrench, 
  Wind, 
  VolumeX, 
  Leaf 
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Economia de energia e dinheiro',
      description: 'Consumo até 80% menor que ar condicionado tradicional, reduzindo significativamente os custos operacionais.'
    },
    {
      icon: Heart,
      title: 'Ambiente saudável',
      description: 'Renova constantemente o ar do ambiente, proporcionando maior qualidade e conforto respiratório.'
    },
    {
      icon: Wrench,
      title: 'Fácil Instalação',
      description: 'Sistema simples de instalação que não requer grandes modificações na estrutura existente.'
    },
    {
      icon: Wind,
      title: 'Ar limpo e fresco',
      description: 'Filtragem natural do ar através do processo de evaporação, removendo impurezas e partículas.'
    },
    {
      icon: VolumeX,
      title: 'Silencioso',
      description: 'Operação extremamente silenciosa, ideal para ambientes que exigem baixo nível de ruído.'
    },
    {
      icon: Leaf,
      title: 'Sustentável',
      description: 'Processo 100% natural usando apenas água e ar, sem emissão de gases que poluem o meio ambiente.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Benefícios dos{' '}
            <span className="text-yellow-500">Climatizadores Rotoplast</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-left">
            Descubra as vantagens de escolher a tecnologia de climatização evaporativa 
            mais avançada do mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-gray-50 hover:bg-white p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-yellow-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-black" size={28} />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors text-left md:text-left text-justify">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-left md:text-left text-justify text-base">
                  {benefit.description}
                </p>

                {/* Hover Effect Line */}
                <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-4 transition-all duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;