import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Wind, Thermometer, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              A GRAN CLIMA é a sua parceira em{' '}
              <span className="text-yellow-500">climatização!</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed text-left md:text-left text-justify">
              Oferecemos soluções completas em climatização evaporativa, 
              proporcionando conforto térmico sustentável e econômico para 
              diversos tipos de ambientes industriais e comerciais.
            </p>
            
            <p className="text-lg text-gray-600 text-left md:text-left text-justify">
              Nossa equipe especializada desenvolve projetos personalizados, 
              garantindo máxima eficiência energética e qualidade do ar interior.
            </p>
            
            <Link 
              to="/contato#contact-form"
              className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span>SOLICITE UM CATÁLOGO COMPLETO</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Right Side - Infographic */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Como Funciona o Climatizador Evaporativo
              </h3>
              
              <img 
                src="/images/climatizador.png"
                alt="Como Funciona o Climatizador Evaporativo"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;