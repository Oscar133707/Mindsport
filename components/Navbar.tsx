import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import logoImage from '../Images/skarmavbild-2023-09-29-kl.-10.55.36-1.png';

const navItems: NavItem[] = [
  { label: 'Klienter', path: '/klienter' },
  { label: 'Föreläsningar', path: '/forelasningar' },
  { label: 'Om', path: '/om' },
  { label: 'Kontakt', path: '/kontakt' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleLinkClick();
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className="fixed w-full z-50 bg-[#1f1f1f]/95 backdrop-blur-sm border-b border-gray-700 py-4 shadow-sm"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex justify-between items-center">
        <Link to="/" className="z-50 group" aria-label="MindSport AB Hem" onClick={handleLogoClick}>
          <img 
            src={logoImage} 
            alt="MindSport AB Logo" 
            className="h-16 md:h-24 w-auto group-hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12" aria-label="Huvudmeny">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#ffcb33] ${
                location.pathname === item.path ? 'text-[#ffcb33]' : 'text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-[110] p-2 text-white focus:outline-none relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-[#1f1f1f] z-[100] transition-transform duration-300 ease-in-out flex flex-col justify-center items-center md:hidden pt-20 pb-20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
        onClick={(e) => {
          // Close menu when clicking on overlay background
          if (e.target === e.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        <nav className="flex flex-col space-y-6 w-full max-w-sm px-8" aria-label="Mobilmeny">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={`text-3xl font-semibold tracking-wide transition-all duration-200 py-4 px-6 rounded-lg text-center ${
                location.pathname === item.path 
                  ? 'text-[#1a1a1a] bg-[#ffcb33] shadow-lg' 
                  : 'text-gray-200 hover:text-white hover:bg-[#4e4e4e] active:bg-[#4e4e4e]'
              }`}
              tabIndex={isOpen ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;