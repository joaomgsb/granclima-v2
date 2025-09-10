import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Award, MapPin } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 2,
      title: 'ROTO 140 CONFORT',
      subtitle: 'Climatizador Evaporativo de Alto Desempenho',
      image: '/images/produtos/roto-140-confort.webp',
      buttonText: 'SOLICITAR ORÇAMENTO',
      whatsappLink: true
    },
    {
      id: 3,
      title: 'ROTO 52 PORTÁTIL',
      subtitle: 'Climatização Portátil com Controle Remoto',
      image: '/images/produtos/roto52.webp',
      buttonText: 'SOLICITAR ORÇAMENTO',
      whatsappLink: true
    },
    {
      id: 1,
      title: 'ROTO 100 CONFORT',
      subtitle: 'Climatizador Evaporativo com Tecnologia Touch',
      image: '/images/produtos/roto100.webp',
      buttonText: 'SOLICITAR ORÇAMENTO',
      whatsappLink: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-auto min-h-[500px] md:h-[600px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden pt-16 md:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-spin-slow"
              style={{
                right: `${i * 15}%`,
                top: `${i * 10}%`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <div className="w-24 h-24 border-4 border-yellow-400 rounded-full opacity-30" />
            </div>
          ))}
        </div>
      </div>

      {/* Slide Content */}
      <div className="relative h-full flex items-center py-8 md:py-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Product Image */}
            <div className="relative">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl transform transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Right Side - Content */}
            <div className="text-white space-y-4 lg:space-y-6 text-left">
              <div className="space-y-2 lg:space-y-4 px-2 sm:px-0">
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-yellow-400 animate-fadeInUp">
                  {slides[currentSlide].title.split(' ')[0]} {slides[currentSlide].title.split(' ')[1]}
                  <span className="block text-2xl sm:text-4xl lg:text-6xl mt-1 sm:mt-2">
                    {slides[currentSlide].title.split(' ').slice(2).join(' ')}
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-300 animate-fadeInUp animation-delay-200">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              <a
                href="https://wa.me/5511997688662?text=Olá! Gostaria de solicitar um orçamento para climatizadores Rotoplast."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fadeInUp animation-delay-400"
              >
                {slides[currentSlide].buttonText}
              </a>

              {/* Badges */}
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-start animate-fadeInUp animation-delay-600 pb-8 sm:pb-0">
                <div className="flex items-center justify-center space-x-2 bg-yellow-500 text-black px-3 py-2 lg:px-4 lg:py-2 rounded-full">
                  <Award size={14} className="w-4 h-4" />
                  <span className="font-semibold text-xs sm:text-sm">Nº 1 LATINA</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-green-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-full">
                  <MapPin size={14} className="w-4 h-4" />
                  <span className="font-semibold text-xs sm:text-sm">Fabricado no Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hidden lg:block"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hidden lg:block"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-yellow-500 scale-125 lg:scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;