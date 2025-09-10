import React from 'react';
import { Award, Users, Calendar, MapPin, Target, Heart, Zap, CheckCircle, Wrench, Shield, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Anos de Experiência', value: '14+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '5000+' },
    { icon: MapPin, label: 'Estados Atendidos', value: '26' },
    { icon: Award, label: 'Representante Autorizado', value: 'Rotoplast' }
  ];

  const services = [
    {
      icon: CheckCircle,
      title: 'Climatizadores Evaporativos Rotoplast',
      description: 'Soluções eficientes e econômicas para climatização de ambientes.'
    },
    {
      icon: Target,
      title: 'Consultoria Técnica Especializada',
      description: 'Equipe experiente para ajudar a escolher a melhor solução para suas necessidades.'
    },
    {
      icon: Heart,
      title: 'Suporte Pós-venda Personalizado',
      description: 'Atendimento dedicado para garantir a satisfação do cliente.'
    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva e Corretiva',
      description: 'Serviços especializados para garantir o funcionamento eficiente e prolongar a vida útil dos climatizadores.'
    },
    {
      icon: Shield,
      title: 'PEMOC',
      description: 'Programa de Manutenção, Operação e Conservação com soluções personalizadas para garantir a eficiência e segurança dos climatizadores.'
    },
    {
      icon: Star,
      title: 'Montagem e Instalação',
      description: 'Equipe experiente para garantir a instalação correta e segura dos climatizadores evaporativos.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Qualidade e Inovação',
      description: 'Compromisso constante com produtos e serviços de alta qualidade, sempre buscando as melhores tecnologias do mercado.'
    },
    {
      icon: Heart,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único e merece um atendimento dedicado e soluções customizadas para suas necessidades específicas.'
    },
    {
      icon: Zap,
      title: 'Parcerias Duradouras',
      description: 'Construímos relacionamentos sólidos e de longo prazo com nossos clientes, baseados na confiança e resultados.'
    }
  ];

  const whyChooseUs = [
    'Experiência e conhecimento do mercado',
    'Produtos e serviços de alta qualidade',
    'Equipe dedicada e treinada',
    'Representação autorizada da Rotoplast, líder em climatizadores evaporativos na América Latina'
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Bem-vindo à <span className="text-yellow-500">Gran Clima</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Com mais de 14 anos de experiência no mercado, atuando desde 2010, 
              somos líderes em representações de climatização
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Introdução */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A Gran Clima se destaca como uma empresa líder em representações de climatização. 
                Nossa missão é fornecer soluções inovadoras e de alta qualidade para atender às necessidades de nossos clientes.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-black" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Nossa História */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
                Nossa <span className="text-yellow-500">História</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
                Fundada com o objetivo de oferecer produtos e serviços de excelência, a Gran Clima cresceu e se consolidou como uma referência no setor. 
                Ao longo dos anos, desenvolvemos parcerias estratégicas e investimos em tecnologia para garantir a melhor experiência para nossos clientes.
              </p>
            </div>
          </div>

          {/* Representante Autorizado */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-3xl p-8 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Representante Autorizado da <span className="text-yellow-600">Rotoplast</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Temos o orgulho de ser representante autorizado da Rotoplast, a maior indústria de climatizadores evaporativos da América Latina. 
                Isso nos permite oferecer produtos de alta qualidade e confiabilidade, garantindo a satisfação de nossos clientes.
              </p>
            </div>
          </div>

          {/* Nossos Produtos e Serviços */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Nossos <span className="text-yellow-500">Produtos e Serviços</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-black" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nossos Valores */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Nossos <span className="text-yellow-500">Valores</span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="text-black" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Por que escolher a Gran Clima - Full Width */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Por que escolher a <span className="text-yellow-500">Gran Clima?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-yellow-500 flex-shrink-0" size={24} />
                  <span className="text-lg">{reason}</span>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-300 mt-8">
              Estamos comprometidos em fornecer as melhores soluções de climatização para nossos clientes. 
              Entre em contato conosco e descubra como podemos ajudar você!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;