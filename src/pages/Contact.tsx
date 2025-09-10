import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-yellow-500">Contato</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar 
              com suas necessidades de climatização
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envie sua <span className="text-yellow-500">mensagem</span>
              </h2>
              
              <form id="contact-form" className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitação de Orçamento</option>
                    <option value="produto">Informações sobre Produtos</option>
                    <option value="instalacao">Instalação e Manutenção</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="parceria">Parcerias</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    placeholder="Descreva sua necessidade ou dúvida..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>ENVIAR MENSAGEM</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Fale <span className="text-yellow-500">Conosco</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nossa equipe está pronta para atender você e encontrar a melhor 
                  solução em climatização para sua empresa. Entre em contato através 
                  dos canais abaixo.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Contato e Atendimento</h3>
                    <p className="text-gray-700 font-semibold text-lg">(11) 2816-9048 / (11) 99768-8662</p>
                    <p className="text-gray-600">WhatsApp / Telefone</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Atendimento imediato via WhatsApp
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">E-mail Comercial</h3>
                    <p className="text-gray-700 font-semibold">contato@granclima.com.br</p>
                    <p className="text-gray-600">Orçamentos e informações comerciais</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Resposta em até 2 horas úteis
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border border-green-200">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Localização</h3>
                    <p className="text-gray-700 font-semibold">Rua Custódia do Nascimento Aguirre, 170</p>
                    <p className="text-gray-600">Jardim das Tulipas, Jundiaí - SP, 13212-760</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Atendemos todo o território nacional
                    </p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Horário de Funcionamento</h3>
                    <p className="text-gray-700 font-semibold">Segunda à Sexta: 08:00 às 18:00</p>
                    <p className="text-gray-600">Sábado: 08:00 às 12:00</p>
                    <p className="text-sm text-gray-500 mt-1">
                      WhatsApp disponível 24h para emergências
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Precisa de <span className="text-yellow-500">atendimento imediato</span>?
                </h3>
                <p className="text-gray-300 mb-6 text-left">
                  Nossa equipe está disponível no WhatsApp para tirar suas dúvidas 
                  e fornecer orçamentos personalizados.
                </p>
                <a
                  href="https://wa.me/5511997688662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105"
                >
                  <Phone size={20} />
                  <span>FALAR NO WHATSAPP</span>
                </a>
                <div className="mt-4">
                  <a 
                    href="tel:+5511997688662"
                    className="text-yellow-400 hover:text-yellow-300 font-semibold text-lg"
                  >
                    📞 (11) 2816-9048
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

export default Contact;