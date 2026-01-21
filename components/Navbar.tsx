import React, { useState, useEffect, useRef } from 'react';
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
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus management: move focus to first link when menu opens
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen]);

  // Close menu when resizing from mobile to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('button[aria-controls="mobile-menu"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
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
          className={`md:hidden z-[10000] p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ffcb33] focus:ring-offset-2 focus:ring-offset-[#1f1f1f] rounded-lg relative min-w-[44px] min-h-[44px] flex items-center justify-center transition-all duration-200 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
          }`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Öppna meny"
          aria-controls="mobile-menu"
          type="button"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[9998] transition-opacity duration-300 ease-in-out md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden={!isOpen}
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobilmeny"
        className={`fixed top-0 right-0 h-screen w-full bg-[#1f1f1f] z-[9999] transition-transform duration-300 ease-in-out flex flex-col md:hidden shadow-2xl ${
          isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        }`}
        aria-hidden={!isOpen}
        style={{ willChange: 'transform', backgroundColor: '#1f1f1f' }}
      >
        {/* Menu Header with Logo */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <Link 
            to="/" 
            className="z-50 group" 
            aria-label="MindSport AB Hem" 
            onClick={handleLogoClick}
          >
            <img 
              src={logoImage} 
              alt="MindSport AB Logo" 
              className="h-16 w-auto group-hover:opacity-80 transition-opacity"
            />
          </Link>
          <button
            className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#ffcb33] rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Stäng meny"
            type="button"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col flex-1 px-6 py-8 overflow-y-auto" aria-label="Mobilmeny">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              ref={index === 0 ? firstLinkRef : null}
              to={item.path}
              onClick={handleLinkClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleLinkClick();
                }
              }}
              className="min-h-[48px] flex items-center justify-center text-xl font-semibold tracking-wide transition-all duration-200 py-4 px-6 rounded-lg my-2 text-gray-200 hover:text-white hover:bg-[#4e4e4e] active:bg-[#4e4e4e] focus:outline-none"
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