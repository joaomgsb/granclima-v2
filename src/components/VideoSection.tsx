import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Award, Users, TrendingUp } from 'lucide-react';

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Com a <span className="text-yellow-500">Rotoplast</span> você tem 
                mais qualidade de ensino!
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed text-left md:text-left text-justify">
                Proporcione o melhor ambiente de aprendizado com climatização 
                eficiente e sustentável. Salas de aula mais confortáveis 
                garantem maior concentração e produtividade.
              </p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Award className="text-yellow-500 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-yellow-500">15+</div>
                <div className="text-sm text-gray-300">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Users className="text-yellow-500 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-yellow-500">5000+</div>
                <div className="text-sm text-gray-300">Clientes Satisfeitos</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <TrendingUp className="text-yellow-500 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-yellow-500">80%</div>
                <div className="text-sm text-gray-300">Economia de Energia</div>
              </div>
            </div>

            <Link 
              to="/contato#contact-form"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg transform transition-all duration-300 hover:scale-105"
            >
              SOLICITAR ORÇAMENTO
            </Link>
          </div>

          {/* Right Side - Video */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 rounded-2xl">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                {!isVideoPlaying ? (
                  <div className="relative h-80 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <img 
                      src="https://images.pexels.com/photos/8142943/pexels-photo-8142943.jpeg"
                      alt="Video Thumbnail"
                      className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="relative z-10 w-20 h-20 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 shadow-2xl"
                    >
                      <Play className="text-black ml-1" size={32} fill="currentColor" />
                    </button>
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                ) : (
                  <iframe
                    className="w-full h-80"
                    src="https://www.youtube.com/embed/bVZuKr04CK0?autoplay=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse animation-delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;