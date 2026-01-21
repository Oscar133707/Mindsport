import React, { useState, useEffect } from 'react';
import { ArrowRight, Target, Trophy, TrendingUp, Shield } from 'lucide-react';
import heroImage from '../Images/Lägg till en rubrik.jpg';
import hockeyPlayerIcon from '../Images/hockey-player-icon.png';
import cjImage from '../Images/CJ image.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const aboutRef = useScrollAnimation({ threshold: 0.2 });
  const approachRef = useScrollAnimation({ threshold: 0.2 });
  const trustRef = useScrollAnimation({ threshold: 0.2 });
  const quoteRef = useScrollAnimation({ threshold: 0.3 });
  const ctaRef = useScrollAnimation({ threshold: 0.2 });

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

      {/* About/Introduction Section */}
      <section className="py-24 md:py-32 bg-[#1f1f1f]" aria-labelledby="about-title">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div 
            ref={aboutRef.elementRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
              aboutRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Text Content */}
            <div className="space-y-6">
              <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Varför Mental Styrka?
              </h2>
              <div className="w-24 h-1 bg-[#ffcb33] rounded-full"></div>
              <div className="space-y-5 text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  Mitt namn är Carl-Johan Sjögren och jag har haft förmånen att ägna hela <strong className="text-white font-medium">13 år åt en professionell karriär inom ishockey</strong>. Under dessa år har jag fått arbeta hårt för att skaffa mig förståelse för vad som krävs för att nå framgång inom idrottens värld.
                </p>
                <p>
                  Det har gett mig insikten att <strong className="text-white font-medium">prestation handlar om mer än bara fysisk förmåga</strong> – det handlar också om din mentala styrka. Mental styrka är en avgörande faktor för att nå framgång inom idrott. Det handlar om att utveckla och träna din mentala förmåga på samma sätt som du tränar din fysiska.
                </p>
                <p>
                  Oavsett om du är en professionell idrottare, en amatör eller någonstans där emellan, är din <strong className="text-white font-medium">mentala inställning och styrka en avgörande faktor</strong> som kan ta din prestation till nya höjder.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 aspect-[4/3]">
                <img 
                  src={cjImage} 
                  alt="Carl-Johan Sjögren - Professionell ishockeyspelare och mental tränare" 
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Min Approach/Varför Jag Section */}
      <section className="py-24 md:py-32 bg-[#1f1f1f] border-t border-gray-800" aria-labelledby="approach-title">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div 
            ref={approachRef.elementRef}
            className={`transition-all duration-1000 ${
              approachRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <h2 id="approach-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Min Approach
              </h2>
              <div className="w-24 h-1 bg-[#ffcb33] mx-auto rounded-full"></div>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mt-6">
                Under min tid som professionell ishockeyspelare har jag själv upplevt de fördelar som mental styrka kan erbjuda. Jag erbjuder individuell coaching och träningsprogram som är skräddarsydda för att möta dina unika behov och mål.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-[#2a2a2a] border border-gray-800 hover:border-[#ffcb33]/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#4e4e4e] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#ffcb33] group-hover:text-[#1a1a1a] transition-all duration-300">
                  <Shield size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ffcb33] transition-colors">Hantera Press</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  Utveckla verktyg för att prestera under tryck och i avgörande situationer.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-[#2a2a2a] border border-gray-800 hover:border-[#ffcb33]/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#4e4e4e] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#ffcb33] group-hover:text-[#1a1a1a] transition-all duration-300">
                  <Target size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ffcb33] transition-colors">Bibehålla Fokus</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  Lär dig tekniker för att hålla koncentration och fokus när det gäller som mest.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-[#2a2a2a] border border-gray-800 hover:border-[#ffcb33]/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#4e4e4e] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#ffcb33] group-hover:text-[#1a1a1a] transition-all duration-300">
                  <TrendingUp size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ffcb33] transition-colors">Återhämta från Motgångar</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  Bygg mental resiliens och lär dig att komma tillbaka starkare efter svårigheter.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-[#2a2a2a] border border-gray-800 hover:border-[#ffcb33]/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#4e4e4e] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#ffcb33] group-hover:text-[#1a1a1a] transition-all duration-300">
                  <Trophy size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ffcb33] transition-colors">Vinnande Inställning</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  Skapa en mentalitet som driver dig framåt och hjälper dig att nå dina mål.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust-Building Section */}
      <section className="py-24 md:py-32 bg-[#4e4e4e]" aria-label="Erfarenhet och Kvalitet">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div 
            ref={trustRef.elementRef}
            className={`transition-all duration-1000 ${
              trustRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-bold text-[#ffcb33]">13</div>
                <h3 className="text-xl font-bold text-white">År Professionell Karriär</h3>
                <p className="text-gray-300 font-light">
                  Erfarenhet från toppnivå inom professionell ishockey
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-bold text-[#ffcb33]">100%</div>
                <h3 className="text-xl font-bold text-white">Individuell Coaching</h3>
                <p className="text-gray-300 font-light">
                  Skräddarsydda program anpassade efter dina unika behov
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-bold text-[#ffcb33]">∞</div>
                <h3 className="text-xl font-bold text-white">Personlig Inriktning</h3>
                <p className="text-gray-300 font-light">
                  Varje idrottare får ett program utformat specifikt för sina mål
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-24 bg-[#1f1f1f] border-t border-gray-800" aria-label="Citat">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <blockquote 
            ref={quoteRef.elementRef}
            className={`text-2xl md:text-3xl lg:text-4xl font-serif italic text-white leading-tight transition-all duration-1000 ${
              quoteRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            "VAD ÄR SKILLNADEN - SOM GÖR SKILLNADEN, NÄR MAN LYCKAS OCH INTE LYCKAS?"
          </blockquote>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 bg-[#1f1f1f]" aria-label="Kontakta mig">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div 
            ref={ctaRef.elementRef}
            className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-1000 ${
              ctaRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Upptäck skillnaden som gör skillnaden
            </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Svaret ligger ofta i din mentala styrka. Genom individuell coaching och skräddarsydda träningsprogram hjälper jag dig att utveckla den mentala förmågan som skiljer de som lyckas från de som inte gör det. Oavsett om du vill nå toppen inom din sport eller förbättra ditt idrottsliga resultat – tillsammans hittar vi skillnaden som gör skillnaden för dig.
            </p>
            <div className="pt-4">
              <a
                href="/kontakt"
                className="inline-block bg-[#ffcb33] text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-medium hover:bg-[#e6b82e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 mx-auto"
              >
                <span>Kontakta mig</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;