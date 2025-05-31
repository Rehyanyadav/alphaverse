import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <span className={`ml-2 font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Alpha Verse
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-all ${
                isScrolled ? 'text-gray-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className={`font-medium transition-all ${
                isScrolled ? 'text-gray-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`font-medium transition-all ${
                isScrolled ? 'text-gray-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Pricing
            </button>
            <Link 
              to="/login" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-lg transition-all transform hover:scale-105"
            >
              Login
            </Link>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen bg-white shadow-lg' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4 py-4 space-y-3">
          <button 
            onClick={() => scrollToSection('services')}
            className="block w-full text-left font-medium text-gray-900 hover:text-primary-600 py-2"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="block w-full text-left font-medium text-gray-900 hover:text-primary-600 py-2"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="block w-full text-left font-medium text-gray-900 hover:text-primary-600 py-2"
          >
            Pricing
          </button>
          <Link 
            to="/login"
            className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-lg transition-all text-center"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;