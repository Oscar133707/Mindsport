import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import logoImage from '../Images/images.jpeg';

const navItems: NavItem[] = [
  { label: 'Klienter', path: '/klienter' },
  { label: 'Föreläsningar', path: '/forelasningar' },
  { label: 'Om', path: '/om' },
  { label: 'Kontakt', path: '/kontakt' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed md:sticky top-0 left-0 right-0 w-full z-[1000] bg-[#1f1f1f] md:bg-[#1f1f1f]/95 backdrop-blur-[10px] border-b border-gray-700 shadow-sm transition-all duration-300 ${
        scrolled ? 'h-16 md:h-16' : 'h-16 md:h-20'
      }`}
      style={{ 
        top: 0,
        left: 0,
        right: 0,
        width: '100%'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex justify-between items-center h-full">
        <Link 
          to="/" 
          className="z-50 group h-full flex items-center min-w-[44px] min-h-[44px] p-3 -ml-3 md:-ml-6" 
          aria-label="MindSport AB Hem" 
          onClick={handleLogoClick}
        >
          <img 
            src={logoImage} 
            alt="MindSport AB Logo" 
            className={`h-full w-auto transition-all duration-300 ${
              scrolled ? 'scale-90 md:scale-95' : 'scale-100'
            } group-active:opacity-80`}
            style={{ maxHeight: '100%' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12" aria-label="Huvudmeny">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors min-h-[44px] flex items-center px-2 ${
                location.pathname === item.path ? 'text-[#ffcb33]' : 'text-gray-300'
              } hover:text-[#ffcb33] focus:outline-none focus:ring-2 focus:ring-[#ffcb33] focus:ring-offset-2 focus:ring-offset-[#1f1f1f] rounded`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden z-[10000] text-white focus:outline-none focus:ring-2 focus:ring-[#ffcb33] focus:ring-offset-2 focus:ring-offset-[#1f1f1f] rounded-lg relative w-[44px] h-[44px] flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
          }`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Öppna meny"
          aria-controls="mobile-menu"
          type="button"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <Menu size={24} strokeWidth={2} />
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-[10px] z-[9998] transition-opacity duration-300 ease-in-out md:hidden"
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
        className={`fixed top-0 right-0 h-screen w-full max-w-sm bg-[#1f1f1f] z-[9999] transition-transform duration-300 ease-in-out flex flex-col md:hidden shadow-2xl ${
          isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        }`}
        aria-hidden={!isOpen}
        style={{ 
          willChange: 'transform', 
          backgroundColor: '#1f1f1f',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Menu Header with Logo */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <Link 
            to="/" 
            className="z-50 group min-w-[44px] min-h-[44px] flex items-center p-2" 
            aria-label="MindSport AB Hem" 
            onClick={handleLogoClick}
          >
            <img 
              src={logoImage} 
              alt="MindSport AB Logo" 
              className="h-10 w-auto max-w-[120px] group-active:opacity-80 transition-opacity"
            />
          </Link>
          <button
            className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#ffcb33] rounded-lg w-[44px] h-[44px] flex items-center justify-center transition-transform active:scale-95"
            onClick={toggleMenu}
            aria-label="Stäng meny"
            type="button"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col flex-1 px-5 py-6 overflow-y-auto" aria-label="Mobilmeny">
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
              className="min-h-[48px] flex items-center text-lg font-semibold tracking-wide transition-all duration-200 py-4 px-4 rounded-lg mb-2 text-gray-200 active:text-white active:bg-[#4e4e4e] focus:outline-none focus:ring-2 focus:ring-[#ffcb33] focus:ring-offset-2 focus:ring-offset-[#1f1f1f]"
              tabIndex={isOpen ? 0 : -1}
              style={{ WebkitTapHighlightColor: 'transparent' }}
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