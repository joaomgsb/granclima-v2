import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, MapPin, Calendar, ArrowRight } from 'lucide-react';

const Projetos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projetos = [
    {
      id: 1,
      nome: 'IGREJA CRISTÃ DO BRASIL',
      imagem: '/images/projetos/igreja.jpg',
      categoria: 'Religioso',
      descricao: 'Projeto de climatização para ambiente religioso, proporcionando conforto térmico durante os cultos e eventos.',
      ano: '2023'
    },
    {
      id: 2,
      nome: 'MCI EXAUSTORES',
      imagem: '/images/projetos/mci.jpg',
      categoria: 'Industrial',
      descricao: 'Sistema completo de exaustão industrial para otimização do ambiente de trabalho.',
      ano: '2023'
    },
    {
      id: 3,
      nome: 'FERPEREZ',
      imagem: '/images/projetos/ferperez.jpg',
      categoria: 'Industrial',
      descricao: 'Implementação de sistema de climatização evaporativa para ambiente industrial.',
      ano: '2023'
    },
    {
      id: 4,
      nome: 'MORENA LINGERIE',
      imagem: '/images/projetos/morena.jpg',
      categoria: 'Comercial',
      descricao: 'Solução de climatização para ambiente comercial, garantindo conforto para clientes e funcionários.',
      ano: '2023'
    },
    {
      id: 5,
      nome: 'PS DO BRASIL',
      imagem: '/images/projetos/ps.jpg',
      categoria: 'Industrial',
      descricao: 'Projeto de climatização e ventilação para indústria de portas e portões automatizados.',
      ano: '2023'
    },
    {
      id: 6,
      nome: 'BARBEARIA',
      imagem: '/images/projetos/barbearia.jpg',
      categoria: 'Comercial',
      descricao: 'Sistema de climatização para barbearia, criando ambiente agradável e confortável.',
      ano: '2023'
    },
    {
      id: 7,
      nome: 'MERCADO',
      imagem: '/images/projetos/mercado.jpg',
      categoria: 'Comercial',
      descricao: 'Solução de climatização para supermercado, mantendo produtos frescos e ambiente agradável.',
      ano: '2023'
    },
    {
      id: 8,
      nome: 'RESTAURANTE',
      imagem: '/images/projetos/restaurante.jpg',
      categoria: 'Comercial',
      descricao: 'Sistema de climatização para restaurante, proporcionando conforto térmico aos clientes.',
      ano: '2023'
    }
  ];

  const categorias = [...new Set(projetos.map(projeto => projeto.categoria))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Nossos <span className="text-yellow-500">Projetos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça alguns dos projetos realizados pela Gran Clima em diversos 
              segmentos e tipos de empresas
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300">
              Todos os Projetos
            </button>
            {categorias.map((categoria, index) => (
              <button
                key={index}
                className="bg-white hover:bg-yellow-500 hover:text-black text-gray-700 font-semibold py-3 px-6 rounded-full border border-gray-300 transition-all duration-300 hover:scale-105"
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {projetos.map((projeto) => (
              <div 
                key={projeto.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(projeto)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={projeto.imagem} 
                    alt={projeto.nome}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                  
                  {/* View Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-yellow-500 hover:bg-yellow-400 text-black p-2 rounded-full transform hover:scale-110 transition-all duration-200">
                      <Eye size={20} />
                    </button>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {projeto.categoria}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar size={16} className="text-yellow-500" />
                    <span className="text-sm text-gray-500">{projeto.ano}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {projeto.nome}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {projeto.descricao}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin size={16} />
                      <span>Ver detalhes</span>
                    </div>
                    <ArrowRight size={16} className="text-yellow-500 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Seu projeto pode ser o <span className="text-yellow-500">próximo</span>!
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e vamos desenvolver juntos a solução 
                ideal de climatização para sua empresa
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
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProject.nome}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <img 
                    src={selectedProject.imagem}
                    alt={selectedProject.nome}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {selectedProject.categoria}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar size={16} />
                      <span>{selectedProject.ano}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Sobre o Projeto</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.descricao}</p>
                  
                  <div className="pt-4">
                    <Link 
                      to="/contato#contact-form"
                      className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 text-center inline-block"
                    >
                      SOLICITAR PROJETO SIMILAR
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projetos;