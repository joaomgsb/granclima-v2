import React from 'react';
import { Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Roto 46 Portátil',
      image: '/images/produtos/roto46.webp',
      category: 'Portátil',
      slug: 'roto-46-portatil'
    },
    {
      id: 2,
      name: 'Roto 95 Standard',
      image: '/images/produtos/roto-95.webp',
      category: 'Standard',
      slug: 'roto-95-standard'
    },
    {
      id: 3,
      name: 'Roto 170 Standard',
      image: '/images/produtos/roto-170.webp',
      category: 'Standard',
      slug: 'roto-170-standard'
    },
    {
      id: 4,
      name: 'Roto 140 Confort',
      image: '/images/produtos/roto-140-confort.webp',
      category: 'Confort',
      slug: 'roto-140-confort'
    },
    {
      id: 5,
      name: 'ROTO 52 Portátil',
      image: '/images/produtos/roto52.webp',
      category: 'Portátil',
      slug: 'roto-52-portatil'
    },
    {
      id: 6,
      name: 'ROTO 100 Confort/Touch',
      image: '/images/produtos/roto100.webp',
      category: 'Confort',
      slug: 'roto-100-confort-touch'
    },
    {
      id: 7,
      name: 'Exaustor 54',
      image: '/images/produtos/exaustor54.webp',
      category: 'Exaustor',
      slug: 'exaustor-54'
    },
    {
      id: 8,
      name: 'HVLS 2500 Ventilador Portátil',
      image: '/images/produtos/hvls2500.webp',
      category: 'Ventilador',
      slug: 'hvls-2500-ventilador-portatil'
    },
    {
      id: 9,
      name: 'ROTO 85 Siroco',
      image: '/images/produtos/roto85.webp',
      category: 'Siroco',
      slug: 'roto-85-siroco'
    },
    {
      id: 10,
      name: 'HVLS 5000',
      image: '/images/produtos/hvls5000.webp',
      category: 'Ventilador',
      slug: 'hvls-5000'
    },
    {
      id: 11,
      name: 'Roto 55 Portátil',
      image: '/images/produtos/roto55.webp',
      category: 'Portátil',
      slug: 'roto-55-portatil'
    },
    {
      id: 12,
      name: 'Roto 65 Sense',
      image: '/images/produtos/roto65.webp',
      category: 'Sense',
      slug: 'roto-65-sense'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-yellow-500">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Linha completa de climatizadores evaporativos e ventiladores industriais 
            para atender todas as suas necessidades
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-black p-2 rounded-full transform hover:scale-110 transition-all duration-200">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-yellow-600 font-medium bg-yellow-100 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  {product.name}
                </h3>
                <Link 
                  to={`/produto/${product.slug}`}
                  className="w-full bg-gray-900 hover:bg-yellow-500 text-white hover:text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Ver Detalhes</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/produtos"
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2 justify-center"
            >
              <span>VER TODOS OS PRODUTOS</span>
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/5511997688662?text=Olá! Gostaria de solicitar um orçamento para climatizadores Rotoplast."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2 justify-center"
            >
              <span>SOLICITAR ORÇAMENTO</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;