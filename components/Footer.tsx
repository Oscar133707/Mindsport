import React from 'react';
import { Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { Partner } from '../types';
import logoImage from '../Images/skarmavbild-2023-09-29-kl.-10.55.36-1.png';

const partners: Partner[] = [
  {
    name: 'Future Star Academy',
    url: 'https://futurestaracademy.com',
    logoAlt: 'FSA Logo',
  },
  {
    name: 'BB Goalie',
    url: 'https://bbgoalie.com',
    logoAlt: 'BB Goalie Logo',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f1f1f] pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <img 
              src={logoImage} 
              alt="MindSport AB Logo" 
              className="h-24 md:h-28 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Mental träning och prestationspsykologi för idrottare, tränare och organisationer som vill nå sin fulla potential.
            </p>
          </div>

          {/* Partners Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Partners</h4>
            <div className="flex flex-col space-y-4">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 text-gray-300 hover:text-[#ffcb33] transition-colors"
                >
                  <span className="font-medium">{partner.name}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Kontakt & Socialt</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/mindsportab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/carl-johan-sjögren-549070233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ffcb33] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} strokeWidth={1.5} />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <a href="mailto:info@mindsport.se" className="hover:text-[#ffcb33] transition-colors">
                info@mindsport.se
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} MindSport AB. Alla rättigheter förbehållna.</p>
          <p className="mt-2 md:mt-0">Rethink your game.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;