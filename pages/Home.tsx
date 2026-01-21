import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Target, Zap } from 'lucide-react';
import heroImage from '../Images/Lägg till en rubrik.jpg';
import hockeyPlayerIcon from '../Images/hockey-player-icon.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const philosophyRef = useScrollAnimation({ threshold: 0.2 });
  const servicesRef = useScrollAnimation({ threshold: 0.1 });
  const quoteRef = useScrollAnimation({ threshold: 0.3 });

  useEffect(() => {
    // Trigger hero animation on mount
    const timer = setTimeout(() => {
      setHeroVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full font-sans text-[#f5f5f5] bg-[#1f1f1f]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#1f1f1f]" aria-label="Introduktion">
        {/* Background - hero image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="" 
            role="presentation"
            className="w-full h-full object-cover"
            // @ts-ignore
            fetchPriority="high"
          />
        </div>

        <div className="z-10 max-w-[1200px] w-full mx-auto px-5 md:px-10 flex flex-col items-start justify-center py-20">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] transition-all duration-1000 ease-out ${
              heroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="block">
              MENTAL PERFORM
              <img 
                src={hockeyPlayerIcon}
                alt=""
                className="inline-block h-[0.9em] w-auto mx-0.5 align-middle"
                style={{ verticalAlign: 'middle' }}
              />
              NCE
            </span>
            <span className="block">COACH</span>
          </h1>
          
          <div 
            className={`pt-4 transition-all duration-1000 ease-out delay-300 ${
              heroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="/?page_id=86"
              className="inline-block bg-white text-[#1a1a1a] px-6 py-3 rounded-lg text-sm md:text-base font-semibold tracking-wide uppercase hover:bg-[#ffcb33] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              UNLOCK YOUR FULL POTENTIAL
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy/Intro Section */}
      <section className="py-32 bg-[#1f1f1f]" aria-labelledby="philosophy-title">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div 
            ref={philosophyRef.elementRef}
            className={`max-w-4xl mx-auto text-center space-y-10 transition-all duration-1000 ${
              philosophyRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 id="philosophy-title" className="text-3xl md:text-4xl font-light text-white leading-tight">
              Mental träning för prestation i världsklass.
            </h2>
            <div className="w-24 h-1 bg-[#ffcb33] mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Vi hjälper idrottare, ledare och organisationer att nå sin fulla potential genom evidensbaserad idrottspsykologi. Bygg styrkan inifrån.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-[#1f1f1f]" aria-label="Tjänster">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div 
            ref={servicesRef.elementRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 transition-all duration-1000 ${
              servicesRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-6 group">
              <div className="w-20 h-20 bg-[#4e4e4e] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-700">
                <Brain size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#ffcb33] transition-colors">Mental Styrka</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Verktyg för att hantera press, motgångar och stress när det gäller som mest.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-6 group">
              <div className="w-20 h-20 bg-[#4e4e4e] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-700">
                <Target size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#ffcb33] transition-colors">Fokus & Mål</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Skapa tydliga visioner och strukturerade processer för att nå dina drömmar.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-6 group">
              <div className="w-20 h-20 bg-[#4e4e4e] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-700">
                <Zap size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#ffcb33] transition-colors">Prestation</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Optimera din vardag genom rutiner, återhämtning och ökad självinsikt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 bg-[#1f1f1f] border-t border-gray-800" aria-label="Citat">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <blockquote 
            ref={quoteRef.elementRef}
            className={`text-4xl md:text-5xl font-serif italic text-white leading-tight transition-all duration-1000 ${
              quoteRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            "Skillnader som gör skillnaden."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;