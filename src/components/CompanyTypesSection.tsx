import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Factory, 
  HeartHandshake, 
  GraduationCap, 
  Building2, 
  ShoppingCart, 
  Truck, 
  Store, 
  Hotel, 
  Wrench, 
  Users, 
  Home, 
  Car, 
  Building 
} from 'lucide-react';

const CompanyTypesSection = () => {
  const companyTypes = [
    { icon: Dumbbell, name: 'Academias', color: 'from-red-400 to-red-600' },
    { icon: Factory, name: 'Indústrias', color: 'from-blue-400 to-blue-600' },
    { icon: HeartHandshake, name: 'Clínicas', color: 'from-green-400 to-green-600' },
    { icon: GraduationCap, name: 'Escolas', color: 'from-purple-400 to-purple-600' },
    { icon: Building2, name: 'Escritórios', color: 'from-gray-400 to-gray-600' },
    { icon: ShoppingCart, name: 'Supermercados', color: 'from-orange-400 to-orange-600' },
    { icon: Truck, name: 'Logística', color: 'from-yellow-400 to-yellow-600' },
    { icon: Store, name: 'Lojas', color: 'from-pink-400 to-pink-600' },
    { icon: Hotel, name: 'Hotéis', color: 'from-indigo-400 to-indigo-600' },
    { icon: Wrench, name: 'Oficinas', color: 'from-teal-400 to-teal-600' },
    { icon: Users, name: 'Eventos', color: 'from-rose-400 to-rose-600' },
    { icon: Home, name: 'Residencial', color: 'from-emerald-400 to-emerald-600' },
    { icon: Car, name: 'Concessionárias', color: 'from-cyan-400 to-cyan-600' },
    { icon: Building, name: 'Corporativo', color: 'from-violet-400 to-violet-600' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ideal para todo tipo de{' '}
            <span className="text-yellow-500">empresa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossas soluções de climatização atendem diversos segmentos, 
            proporcionando conforto e economia em qualquer ambiente
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {companyTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div 
                key={index}
                className="group flex flex-col items-center p-6 bg-gray-50 hover:bg-white rounded-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-2xl cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                
                <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-yellow-600 transition-colors">
                  {type.name}
                </h3>

                {/* Hover Effect */}
                <div className="w-0 group-hover:w-8 h-0.5 bg-yellow-500 mt-2 transition-all duration-300 rounded-full"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6 text-left">
            Não encontrou seu segmento? Entre em contato conosco!
          </p>
          <Link 
            to="/contato#contact-form"
            className="bg-gray-900 hover:bg-yellow-500 text-white hover:text-black font-bold py-4 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            FALE COM UM ESPECIALISTA
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyTypesSection;