import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const QuoteBar = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <h2 className="text-xl lg:text-2xl font-bold text-black text-center lg:text-left">
            Transforme o calor em conforto com os Climatizadores Rotoplast
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://wa.me/5511997688662?text=Olá! Gostaria de solicitar um orçamento para climatizadores Rotoplast."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              ORÇAMENTO
            </a>
            
            <a 
              href="tel:+5511997688662"
              className="flex items-center space-x-2 text-black font-semibold hover:text-gray-800 transition-colors"
            >
              <Phone size={20} />
              <span className="text-lg">(11) 2816-9048</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBar;