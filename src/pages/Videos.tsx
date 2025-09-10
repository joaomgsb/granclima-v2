import React, { useState } from 'react';
import { Play, Eye } from 'lucide-react';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'Como Funciona o Climatizador Evaporativo',
      description: 'Entenda o processo de climatização evaporativa e suas vantagens',
      thumbnail: 'https://images.pexels.com/photos/8142943/pexels-photo-8142943.jpeg',
      category: 'Educativo',
      duration: '5:30'
    },
    {
      id: 2,
      title: 'Instalação do ROTO 140 CONFORT',
      description: 'Processo completo de instalação do climatizador industrial',
      thumbnail: 'https://images.pexels.com/photos/8142899/pexels-photo-8142899.jpeg',
      category: 'Instalação',
      duration: '8:45'
    },
    {
      id: 3,
      title: 'Economia de Energia com Rotoplast',
      description: 'Veja como economizar até 80% na conta de energia',
      thumbnail: 'https://images.pexels.com/photos/10498702/pexels-photo-10498702.jpeg',
      category: 'Economia',
      duration: '3:20'
    },
    {
      id: 4,
      title: 'Manutenção Preventiva',
      description: 'Dicas para manter seu climatizador sempre funcionando',
      thumbnail: 'https://images.pexels.com/photos/8142896/pexels-photo-8142896.jpeg',
      category: 'Manutenção',
      duration: '6:15'
    },
    {
      id: 5,
      title: 'Ventiladores HVLS em Ação',
      description: 'Conheça a linha de ventiladores industriais de alta performance',
      thumbnail: 'https://images.pexels.com/photos/8142943/pexels-photo-8142943.jpeg',
      category: 'Produtos',
      duration: '4:50'
    },
    {
      id: 6,
      title: 'Cases de Sucesso - Indústria Automobilística',
      description: 'Como a climatização evaporativa transformou o ambiente industrial',
      thumbnail: 'https://images.pexels.com/photos/8142899/pexels-photo-8142899.jpeg',
      category: 'Cases',
      duration: '7:30'
    },
    {
      id: 7,
      title: 'Tecnologia Rotoplast',
      description: 'Inovações e tecnologias aplicadas nos climatizadores',
      thumbnail: 'https://images.pexels.com/photos/10498702/pexels-photo-10498702.jpeg',
      category: 'Tecnologia',
      duration: '5:45'
    },
    {
      id: 8,
      title: 'Sustentabilidade e Meio Ambiente',
      description: 'O impacto positivo da climatização evaporativa no meio ambiente',
      thumbnail: 'https://images.pexels.com/photos/8142896/pexels-photo-8142896.jpeg',
      category: 'Sustentabilidade',
      duration: '4:20'
    },
    {
      id: 9,
      title: 'Projeto Personalizado - Galpão Industrial',
      description: 'Do planejamento à instalação de um projeto industrial completo',
      thumbnail: 'https://images.pexels.com/photos/8142943/pexels-photo-8142943.jpeg',
      category: 'Projetos',
      duration: '9:15'
    }
  ];

  const categories = [...new Set(videos.map(video => video.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-yellow-500">Vídeos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça mais sobre nossos produtos, tecnologias e soluções 
              através dos nossos vídeos educativos
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Featured Video */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Vídeo em <span className="text-yellow-500">Destaque</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 rounded-2xl">
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  <div className="relative h-96 flex items-center justify-center">
                    <img 
                      src={videos[0].thumbnail}
                      alt={videos[0].title}
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                    />
                    <button 
                      onClick={() => setSelectedVideo(videos[0])}
                      className="relative z-10 w-24 h-24 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 shadow-2xl"
                    >
                      <Play className="text-black ml-1" size={40} fill="currentColor" />
                    </button>
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{videos[0].title}</h3>
                    <p className="text-gray-300">{videos[0].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full">
              Todos
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-white hover:bg-yellow-500 hover:text-black text-gray-700 font-semibold py-2 px-6 rounded-full border border-gray-300 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Play className="text-black ml-1" size={24} fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {video.duration}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                    {video.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-yellow-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Eye size={16} />
                      <span>Ver vídeo</span>
                    </div>
                    <div className="text-yellow-500 font-semibold text-sm">
                      Assistir →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Quer saber mais sobre nossos <span className="text-yellow-500">produtos</span>?
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Entre em contato conosco e receba informações detalhadas sobre 
                toda nossa linha de climatizadores
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105">
                  SOLICITAR CATÁLOGO
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105">
                  FALAR COM ESPECIALISTA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="bg-gray-900 rounded-xl overflow-hidden mb-4">
                <div className="h-96 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Play className="mx-auto mb-4" size={48} />
                    <p>Vídeo: {selectedVideo.title}</p>
                    <p className="text-gray-400 text-sm mt-2">Duração: {selectedVideo.duration}</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;