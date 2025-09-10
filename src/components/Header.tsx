import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Lar', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre a Gran Clima', path: '/sobre' },
    { name: 'Contato', path: '/contato#contact-form' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-start space-x-2">
              <img 
                src="/images/logo.png" 
                alt="Gran Clima Logo" 
                className="w-24 h-24 object-contain"
              />
              <div className="flex flex-col h-full justify-start pt-4">
                <img 
                  src="/images/rotoplast.png" 
                  alt="Rotoplast Logo" 
                  className="h-12 object-contain"
                />
                <span className="bg-yellow-400 text-black text-[10px] font-bold px-1 py-0.5 rounded text-center whitespace-nowrap mt-2">
                  REPRESENTANTE AUTORIZADO
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:text-yellow-500 ${
                  isActive(item.path)
                    ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-yellow-500 bg-yellow-50'
                      : 'text-gray-700 hover:text-yellow-500 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;