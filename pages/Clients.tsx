import React from 'react';
import { Testimonial } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import hockeyallsvenskanLogo from '../Images/hockeyallsvenskan.png';
import ncaaLogo from '../Images/NCAA_logo.svg';
import ncdcLogo from '../Images/33518cb2-98ac-461d-981f-48e7552e0bae.svg';
import j18Logo from '../Images/Swedish_Ice_Hockey_Association_logo.svg';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Erik Karlsson",
    role: "Professionell Ishockeyspelare",
    quote: "Samarbetet med MindSport har hjälpt mig att hitta lugnet i avgörande situationer. Jag har fått verktyg som jag använder dagligen.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Anna Andersson",
    role: "Elittränare Fotboll",
    quote: "Att förstå gruppdynamik och ledarskap ur ett psykologiskt perspektiv har lyft mitt team till en ny nivå.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Juniorakademin",
    role: "Talangutveckling",
    quote: "Föreläsningarna gav våra ungdomar en fantastisk inblick i vad som krävs mentalt för att bli elit.",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

interface Client {
  id: number;
  name: string;
  image: string;
  league: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: "Marcus Andersson",
    image: hockeyallsvenskanLogo,
    league: "Hockeyallsvenskan"
  },
  {
    id: 2,
    name: "Emma Johansson",
    image: ncaaLogo,
    league: "NCAA Division 1"
  },
  {
    id: 3,
    name: "Lucas Bergström",
    image: ncdcLogo,
    league: "NCDC Junior League"
  },
  {
    id: 4,
    name: "Sofia Lindqvist",
    image: j18Logo,
    league: "J18 Junior (SIF)"
  }
];

const Clients: React.FC = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const clientsRef = useScrollAnimation({ threshold: 0.1 });
  const testimonialsRef = useScrollAnimation({ threshold: 0.1 });
  const categoriesRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="w-full bg-[#1f1f1f] font-sans text-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20 md:py-32">
        
        {/* Page Header */}
        <div 
          ref={headerRef.elementRef}
          className={`mb-8 text-center transition-all duration-1000 ${
            headerRef.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Klienter</h1>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
             Vi samarbetar med organisationer och ligor som sätter prestation och välmående i fokus.
          </p>
        </div>

        {/* Clients List */}
        <div 
          ref={clientsRef.elementRef}
          className={`space-y-4 md:space-y-5 mb-16 transition-all duration-1000 ${
            clientsRef.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 py-4 border-b border-gray-700 last:border-b-0 group hover:bg-[#4e4e4e]/30 transition-all duration-300 rounded-lg px-4"
            >
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#1f1f1f] rounded-lg p-3">
                <img 
                  src={client.image} 
                  alt={`${client.league} logo`} 
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#ffcb33] transition-colors">
                  {client.name}
                </h3>
                <p className="text-base md:text-lg text-[#ffcb33] font-medium">
                  {client.league}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="border-t border-gray-700 pt-24">
          <div 
            ref={testimonialsRef.elementRef}
            className={`transition-all duration-1000 ${
              testimonialsRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Röster från klienter</h2>
              <p className="text-gray-400 font-light">Erfarenheter från atleter och ledare vi arbetat med.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-[#4e4e4e] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-700 group">
                <div className="mb-6">
                  <h4 className="font-bold text-white mb-1">{item.name}</h4>
                  <p className="text-sm text-[#ffcb33] font-medium">{item.role}</p>
                </div>
                <blockquote className="text-gray-300 italic leading-relaxed flex-grow">
                  "{item.quote}"
                </blockquote>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Client Categories Section */}
        <div 
          ref={categoriesRef.elementRef}
          className={`mt-32 border-t border-gray-700 pt-20 transition-all duration-1000 ${
            categoriesRef.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Vem hjälper vi?</h3>
              <ul className="space-y-4">
                {[
                  'Individuella idrottare (Elit & Motionär)',
                  'Idrottslag och föreningar',
                  'Tränare och ledare',
                  'Företagsledare och organisationer',
                  'Ungdomsakademier'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#ffcb33]"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579952363873-27f3bade8f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=75" 
                alt="Hockey team huddle" 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4e4e4e] via-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-semibold text-2xl mb-1">Teamutveckling</p>
                <p className="text-sm opacity-80 font-light tracking-wide">Skapa en vinnande kultur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;