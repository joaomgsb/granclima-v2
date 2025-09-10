import React, { useState } from 'react';
import { Search, Filter, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const productsPerPage = 9;

  const products = [
    {
      id: 1,
      name: 'Roto 46 Portátil',
      model: 'ROTO 46 Portátil',
      flow: '7.000 m³/h',
      consumption: '0,320 kWh',
      dimensions: '1228 x 680 x 426 mm (ALP)',
      weight: '20 kg',
      image: '/images/produtos/roto46.webp',
      category: 'Portátil',
      slug: 'roto-46-portatil'
    },
    {
      id: 2,
      name: 'Roto 95 Standard',
      model: 'ROTO 95 Standard',
      flow: '50.000 m³/h',
      consumption: '2,46 kWh',
      dimensions: '1200 x 2330 x 1230 mm (ALP)',
      weight: '250 kg',
      image: '/images/produtos/roto-95.webp',
      category: 'Standard',
      slug: 'roto-95-standard'
    },
    {
      id: 3,
      name: 'Roto 170 Standard',
      model: 'ROTO 170 Standard',
      flow: '70.000 m³/h',
      consumption: '2,57 kWh',
      dimensions: '1566 x 1980 x 1230 mm (ALP)',
      weight: '255 kg',
      image: '/images/produtos/roto-170.webp',
      category: 'Standard',
      slug: 'roto-170-standard'
    },
    {
      id: 4,
      name: 'Roto 140 Confort',
      model: 'ROTO 140 Confort/Touch',
      flow: '45.000 m³/h',
      consumption: '1,47 kWh',
      dimensions: '1380 x 1780 x 1230 mm (ALP)',
      weight: '200 kg',
      image: '/images/produtos/roto-140-confort.webp',
      category: 'Confort',
      slug: 'roto-140-confort'
    },
    {
      id: 5,
      name: 'ROTO 52 Portátil',
      model: 'ROTO 52 Portátil',
      flow: '16.000 m³/h',
      consumption: '0,385 kWh',
      dimensions: '1960 x 678 x 426 mm (ALP)',
      weight: '80 kg',
      image: '/images/produtos/roto52.webp',
      category: 'Portátil',
      slug: 'roto-52-portatil'
    },
    {
      id: 6,
      name: 'ROTO 100 Confort/Touch',
      model: 'ROTO 100 Confort/Touch',
      flow: '31.000 m³/h',
      consumption: '1,47 kWh',
      dimensions: '1200 x 1600 x 1230 mm (ALP)',
      weight: '160 kg',
      image: '/images/produtos/roto100.webp',
      category: 'Confort',
      slug: 'roto-100-confort-touch'
    },
    {
      id: 7,
      name: 'Exaustor 54',
      model: 'EXAUSTOR 54',
      flow: '9.000 m³/h',
      consumption: '0,37 kWh',
      dimensions: 'Diâmetro 540 mm x Largura 623 mm',
      weight: '22,6 kg',
      image: '/images/produtos/exaustor54.webp',
      category: 'Exaustor',
      slug: 'exaustor-54'
    },
    {
      id: 8,
      name: 'HVLS 2500 Ventilador Portátil',
      model: 'HVLS 2500 Ventilador Portátil',
      flow: '170.000 m³/h',
      consumption: '2,2 kWh',
      dimensions: 'Altura 2.900 mm | Diâmetro 2.600 mm',
      weight: '185 kg',
      image: '/images/produtos/hvls2500.webp',
      category: 'Ventilador',
      slug: 'hvls-2500-ventilador-portatil'
    },
    {
      id: 9,
      name: 'ROTO 85 Siroco',
      model: 'ROTO 85 Siroco',
      flow: '22.000 m³/h',
      consumption: '1,58 kWh',
      dimensions: '980 x 1100 x 1150 mm (ALP)',
      weight: '105 kg',
      image: '/images/produtos/roto85.webp',
      category: 'Siroco',
      slug: 'roto-85-siroco'
    },
    {
      id: 10,
      name: 'HVLS 5000',
      model: 'HVLS 5000 Ventilador',
      flow: '280.000 m³/h',
      consumption: '1,1 kWh',
      dimensions: 'Altura 900 mm | Diâmetro 5.315 mm',
      weight: '200 kg',
      image: '/images/produtos/hvls5000.webp',
      category: 'Ventilador',
      slug: 'hvls-5000'
    },
    {
      id: 11,
      name: 'Roto 55 Portátil',
      model: 'ROTO 55 Portátil',
      flow: '30.000 m³/h',
      consumption: '1,53 kWh',
      dimensions: '1730 x 1120 x 680 mm (ALP)',
      weight: '80 kg',
      image: '/images/produtos/roto55.webp',
      category: 'Portátil',
      slug: 'roto-55-portatil'
    },
    {
      id: 12,
      name: 'Roto 65 Sense',
      model: 'ROTO 65 Sense',
      flow: '12.000 m³/h',
      consumption: '0,60 kWh',
      dimensions: '1030 x 1030 x 780 mm (ALP)',
      weight: '65 kg',
      image: '/images/produtos/roto65.webp',
      category: 'Sense',
      slug: 'roto-65-sense'
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Nossos <span className="text-yellow-500">Produtos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Linha completa de climatizadores evaporativos e ventiladores industriais 
              com tecnologia de ponta
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Pesquisar</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Filter size={20} />
                  <span>CATEGORIAS</span>
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSearchTerm('')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      searchTerm === '' 
                        ? 'bg-yellow-500 text-black font-semibold' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Todos os Produtos
                  </button>
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        searchTerm === category 
                          ? 'bg-yellow-500 text-black font-semibold' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">SOLICITE UM ORÇAMENTO</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="DDD + Telefone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                  />
                  <textarea
                    placeholder="Mensagem"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg transform transition-all duration-300 hover:scale-105"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://wa.me/5511997688662?text=Olá! Gostaria de solicitar um orçamento para climatizadores Rotoplast.', '_blank');
                    }}
                  >
                    SOLICITAR ORÇAMENTO
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {currentProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Link 
                        to={`/produto/${product.slug}`}
                        className="bg-yellow-500 hover:bg-yellow-400 text-black p-2 rounded-full transform hover:scale-110 transition-all duration-200"
                      >
                        <Eye size={20} />
                      </Link>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {product.name}
                    </h3>
                    
                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Modelo:</span>
                        <span className="font-semibold">{product.model}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Vazão:</span>
                        <span className="font-semibold">{product.flow}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Consumo:</span>
                        <span className="font-semibold">{product.consumption}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dimensão:</span>
                        <span className="font-semibold text-xs">{product.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Peso:</span>
                        <span className="font-semibold">{product.weight}</span>
                      </div>
                    </div>

                    <Link 
                      to={`/produto/${product.slug}`}
                      className="w-full bg-gray-900 hover:bg-yellow-500 text-white hover:text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      VEJA MAIS
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                      currentPage === index + 1
                        ? 'bg-yellow-500 text-black shadow-lg scale-110'
                        : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;