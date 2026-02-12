import React from 'react';
import { Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { Partner } from '../types';
import logoImage from '../Images/skarmavbild-2023-09-29-kl.-10.55.36-1.png';
import futureStarLogo from '../Images/FS-main-logo-slogan700-700.png';
import bbGoalieLogo from '../Images/images (1).jpeg';

const partners: Partner[] = [
  {
    name: 'Future Star Academy',
    url: 'https://futurestaracademy.com',
    logoAlt: 'Future Star Academy Logo',
    logo: futureStarLogo,
  },
  {
    name: 'BB Goalie',
    url: 'https://bbgoalie.com',
    logoAlt: '88 Goalie Academy Logo',
    logo: bbGoalieLogo,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f1f1f] pt-12 md:pt-20 pb-8 md:pb-10 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4 text-center md:text-left">
            <img 
              src={logoImage} 
              alt="MindSport AB Logo" 
              className="h-20 md:h-24 lg:h-28 w-auto max-w-[120px] md:max-w-none mx-auto md:mx-0"
            />
            <p className="text-gray-400 text-sm md:text-sm leading-[1.6] max-w-xs mx-auto md:mx-0">
              Mental träning och prestationspsykologi för idrottare, tränare och organisationer som vill nå sin fulla potential.
            </p>
          </div>

          {/* Partners Column */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Partners</h4>
            <div className="flex flex-col space-y-4 md:space-y-6">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center md:justify-start space-x-3 text-gray-300 active:text-[#ffcb33] transition-all min-h-[44px] px-2"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {partner.logo && (
                    <img 
                      src={partner.logo} 
                      alt={partner.logoAlt}
                      className="h-10 md:h-12 lg:h-16 w-auto object-contain opacity-80 group-active:opacity-100 transition-opacity"
                    />
                  )}
                  <span className="font-medium text-base">{partner.name}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact Column */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Kontakt & Socialt</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.instagram.com/mindsportab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 active:text-pink-500 transition-colors w-[44px] h-[44px] flex items-center justify-center"
                aria-label="Instagram"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/carl-johan-sjögren-549070233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 active:text-[#ffcb33] transition-colors w-[44px] h-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <Linkedin size={24} strokeWidth={1.5} />
              </a>
            </div>
            <div className="text-sm md:text-base text-gray-400">
              <a href="mailto:info@mindsport.se" className="active:text-[#ffcb33] transition-colors min-h-[44px] flex items-center justify-center md:justify-start" style={{ WebkitTapHighlightColor: 'transparent' }}>
                info@mindsport.se
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 space-y-2 md:space-y-0 leading-[1.6]">
          <p>&copy; {new Date().getFullYear()} MindSport AB. Alla rättigheter förbehållna.</p>
          <p>Rethink your game.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;