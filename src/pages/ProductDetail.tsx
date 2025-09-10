import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Zap, Wind, Weight, Ruler, Package } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams();

  const products = {
    'roto-46-portatil': {
      name: 'Roto 46 Portátil',
      model: 'ROTO 46 Portátil',
      image: '/images/produtos/roto46.webp',
      category: 'Portátil',
      specs: {
        vazao: '7.000 m³/h',
        consumo: '0,320 kWh',
        dimensoes: '1228 x 680 x 426 mm (ALP)',
        peso: '20 kg'
      },
      extras: []
    },
    'roto-95-standard': {
      name: 'Roto 95 Standard',
      model: 'ROTO 95 Standard',
      image: '/images/produtos/roto-95.webp',
      category: 'Standard',
      specs: {
        vazao: '50.000 m³/h',
        consumo: '2,46 kWh',
        dimensoes: '1200 x 2330 x 1230 mm (ALP)',
        abertura: '1010 x 2010 mm (AL)',
        peso: '250 kg'
      },
      extras: []
    },
    'roto-170-standard': {
      name: 'Roto 170 Standard',
      model: 'ROTO 170 Standard',
      image: '/images/produtos/roto-170.webp',
      category: 'Standard',
      specs: {
        vazao: '70.000 m³/h',
        consumo: '2,57 kWh',
        dimensoes: '1566 x 1980 x 1230 mm (ALP)',
        abertura: '1570 x 1570 mm (AL)',
        peso: '255 kg'
      },
      extras: []
    },
    'roto-140-confort': {
      name: 'Roto 140 Confort',
      model: 'ROTO 140 Confort/Touch',
      image: '/images/produtos/roto-140-confort.webp',
      category: 'Confort',
      specs: {
        vazao: '45.000 m³/h',
        consumo: '1,47 kWh',
        dimensoes: '1380 x 1780 x 1230 mm (ALP)',
        abertura: '1390 x 1390 mm (AL)',
        peso: '200 kg'
      },
      extras: ['Grade Swing']
    },
    'roto-52-portatil': {
      name: 'ROTO 52 Portátil',
      model: 'ROTO 52 Portátil',
      image: '/images/produtos/roto52.webp',
      category: 'Portátil',
      specs: {
        vazao: '16.000 m³/h',
        consumo: '0,385 kWh',
        dimensoes: '1960 x 678 x 426 mm (ALP)',
        peso: '80 kg'
      },
      extras: [
        'Capa Protetora (Opcional)',
        'Controle Remoto',
        'Tensão M/F 220v',
        '3 Velocidades',
        'Produzido no Brasil',
        'Grade Swing'
      ]
    },
    'roto-100-confort-touch': {
      name: 'ROTO 100 Confort/Touch',
      model: 'ROTO 100 Confort/Touch',
      image: '/images/produtos/roto100.webp',
      category: 'Confort',
      specs: {
        vazao: '31.000 m³/h',
        consumo: '1,47 kWh',
        dimensoes: '1200 x 1600 x 1230 mm (ALP)',
        abertura: '1210 x 1210 mm (AL)',
        peso: '160 kg'
      },
      extras: [
        'Nova Hélice com maior vazão',
        'Painel Analógico',
        'Tecnologia SMC',
        'Produzido no Brasil',
        'Tensão M/F 220v',
        '10 ou 12 Velocidades',
        'Motores WEG'
      ]
    },
    'exaustor-54': {
      name: 'Exaustor 54',
      model: 'EXAUSTOR 54',
      image: '/images/produtos/exaustor54.webp',
      category: 'Exaustor',
      specs: {
        vazao: '9.000 m³/h',
        consumo: '0,37 kWh',
        dimensoes: 'Diâmetro 540 mm x Largura 623 mm',
        abertura: 'Diâmetro 550 mm',
        peso: '22,6 kg'
      },
      extras: [
        'Produzido no Brasil',
        '10 Velocidades',
        'Tensão M/F 127v ou 220v',
        'Chave de Partida'
      ]
    },
    'hvls-2500-ventilador-portatil': {
      name: 'HVLS 2500 Ventilador Portátil',
      model: 'HVLS 2500 Ventilador Portátil',
      image: '/images/produtos/hvls2500.webp',
      category: 'Ventilador',
      specs: {
        vazao: '170.000 m³/h',
        consumo: '2,2 kWh',
        dimensoes: 'Altura 2.900 mm | Diâmetro 2.600 mm',
        peso: '185 kg'
      },
      extras: []
    },
    'roto-85-siroco': {
      name: 'ROTO 85 Siroco',
      model: 'ROTO 85 Siroco',
      image: '/images/produtos/roto85.webp',
      category: 'Siroco',
      specs: {
        vazao: '22.000 m³/h',
        consumo: '1,58 kWh',
        dimensoes: '980 x 1100 x 1150 mm (ALP)',
        abertura: '440 x 470 mm (AL)',
        peso: '105 kg'
      },
      extras: [
        'Tecnologia SMC',
        'Rotor em Aço Inox',
        'Painel Digital',
        'Produzido no Brasil',
        'Tensão M/F 220v',
        'Controle Remoto',
        '12 Velocidades',
        'Motores WEG'
      ]
    },
    'hvls-5000': {
      name: 'HVLS 5000',
      model: 'HVLS 5000 Ventilador',
      image: '/images/produtos/hvls5000.webp',
      category: 'Ventilador',
      specs: {
        vazao: '280.000 m³/h',
        consumo: '1,1 kWh',
        dimensoes: 'Altura 900 mm | Diâmetro 5.315 mm',
        peso: '200 kg'
      },
      extras: []
    },
    'roto-55-portatil': {
      name: 'Roto 55 Portátil',
      model: 'ROTO 55 Portátil',
      image: '/images/produtos/roto55.webp',
      category: 'Portátil',
      specs: {
        vazao: '30.000 m³/h | Hélice com maior vazão',
        consumo: '1,53 kWh',
        dimensoes: '1730 x 1120 x 680 mm (ALP)',
        peso: '80 kg'
      },
      extras: []
    },
    'roto-65-sense': {
      name: 'Roto 65 Sense',
      model: 'ROTO 65 Sense',
      image: '/images/produtos/roto65.webp',
      category: 'Sense',
      specs: {
        vazao: '12.000 m³/h',
        consumo: '0,60 kWh',
        dimensoes: '1030 x 1030 x 780 mm (ALP)',
        abertura: '810 x 810 mm (AL)',
        peso: '65 kg'
      },
      extras: []
    }
  };

  const product = products[slug];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
          <Link 
            to="/produtos"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg"
          >
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Link 
              to="/produtos"
              className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Voltar aos Produtos</span>
            </Link>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold">
              {product.name}
            </h1>
            <p className="text-xl text-gray-300">
              {product.model}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
              
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 rounded-2xl">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categoria</h3>
                  <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              {/* Specifications */}
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Especificações Técnicas</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Wind className="text-yellow-500" size={24} />
                      <span className="font-semibold text-gray-700">Vazão</span>
                    </div>
                    <span className="font-bold text-gray-900">{product.specs.vazao}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Zap className="text-yellow-500" size={24} />
                      <span className="font-semibold text-gray-700">Consumo</span>
                    </div>
                    <span className="font-bold text-gray-900">{product.specs.consumo}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Ruler className="text-yellow-500" size={24} />
                      <span className="font-semibold text-gray-700">Dimensões</span>
                    </div>
                    <span className="font-bold text-gray-900">{product.specs.dimensoes}</span>
                  </div>
                  
                  {product.specs.abertura && (
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Package className="text-yellow-500" size={24} />
                        <span className="font-semibold text-gray-700">Abertura da Parede</span>
                      </div>
                      <span className="font-bold text-gray-900">{product.specs.abertura}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Weight className="text-yellow-500" size={24} />
                      <span className="font-semibold text-gray-700">Peso</span>
                    </div>
                    <span className="font-bold text-gray-900">{product.specs.peso}</span>
                  </div>
                </div>
              </div>

              {/* Extras */}
              {product.extras.length > 0 && (
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Características Extras</h3>
                  <div className="space-y-3">
                    {product.extras.map((extra, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-700">{extra}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Interessado neste <span className="text-yellow-500">produto</span>?
                </h3>
                <p className="text-gray-300 mb-6">
                  Entre em contato conosco para receber um orçamento personalizado 
                  e informações detalhadas sobre instalação.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5511997688662?text=Olá! Gostaria de solicitar um orçamento para climatizadores Rotoplast."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 text-center"
                  >
                    SOLICITAR ORÇAMENTO
                  </a>
                  <a
                    href="https://wa.me/5511997688662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 text-center"
                  >
                    FALAR NO WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;