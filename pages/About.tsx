import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import cjImage from '../Images/New Images/WhatsApp Image 2026-01-26 at 09.28.42 (1).jpeg';
import mentalStrengthImage from '../Images/New Images/WhatsApp Image 2026-01-26 at 09.28.42 (2).jpeg';
import experienceImage from '../Images/New Images/SSK.avif';
import missionImage from '../Images/New Images/8DC99442-76EE-45A4-BBEE-BA23D65B3D1B.jpeg';

const About: React.FC = () => {
  const introRef = useScrollAnimation({ threshold: 0.2 });
  const mentalStrengthRef = useScrollAnimation({ threshold: 0.2 });
  const experienceRef = useScrollAnimation({ threshold: 0.2 });
  const missionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="w-full bg-[#1f1f1f] font-sans text-[#f5f5f5] overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-10 py-12 md:py-20 lg:py-32">
        
        <h1 className="text-[36px] md:text-[42px] lg:text-4xl xl:text-5xl font-bold text-white mb-12 md:mb-16 tracking-tight leading-[1.2]">
          Om
        </h1>

        {/* Introduction Section - Image on Right */}
        <section className="py-8 md:py-12 lg:py-16" aria-labelledby="intro-title">
          <div 
            ref={introRef.elementRef}
            className={`transition-all duration-1000 ${
              introRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h2 id="intro-title" className="text-[28px] md:text-[32px] lg:text-3xl xl:text-4xl font-bold text-white leading-[1.2] mb-4 md:mb-6">
                  Carl-Johan Sjögren
                </h2>
                <div className="text-base md:text-lg text-gray-300 font-light leading-[1.6] md:leading-relaxed space-y-4 md:space-y-5">
                  <p>
                    Mitt namn är Carl-Johan Sjögren och jag har haft förmånen att ägna hela <strong className="text-white font-medium">13 år åt en professionell karriär inom ishockey</strong>. Under dessa år har jag fått arbeta hårt för att skaffa mig förståelse för vad som krävs för att nå framgång inom idrottens värld. Det har gett mig insikten att prestation handlar om mer än bara fysisk förmåga – det handlar också om din mentala styrka.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative order-1 lg:order-2 flex items-center justify-center w-full">
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-gray-800 w-full max-h-[60vh] md:max-h-[80vh] group">
                  <img 
                    src={cjImage} 
                    alt="Carl-Johan Sjögren - Professionell ishockeyspelare och mental tränare" 
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mental Strength Section - Image on Left */}
        <section className="py-8 md:py-12 lg:py-16 border-t border-gray-800" aria-labelledby="mental-strength-title">
          <div 
            ref={mentalStrengthRef.elementRef}
            className={`transition-all duration-1000 ${
              mentalStrengthRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative order-1 lg:order-1 flex items-center justify-center w-full">
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-gray-800 w-full max-h-[60vh] md:max-h-[80vh] group">
                  <img 
                    src={mentalStrengthImage} 
                    alt="Mental träning i idrott" 
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="order-2 lg:order-2">
                <h2 id="mental-strength-title" className="text-[28px] md:text-[32px] lg:text-3xl xl:text-4xl font-bold text-white leading-[1.2] mb-4 md:mb-6">
                  Varför Mental Styrka är Avgörande
                </h2>
                <div className="text-base md:text-lg text-gray-300 font-light leading-[1.6] md:leading-relaxed space-y-4 md:space-y-5">
                  <p>
                    Mental styrka är en avgörande faktor för att nå framgång inom idrott. Det handlar om att utveckla och träna din mentala förmåga på samma sätt som du tränar din fysiska. Oavsett om du är en professionell idrottare, en amatör eller någonstans där emellan, är din mentala inställning och styrka en avgörande faktor som kan ta din prestation till nya höjder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - Image on Right */}
        <section className="py-8 md:py-12 lg:py-16 border-t border-gray-800" aria-labelledby="experience-title">
          <div 
            ref={experienceRef.elementRef}
            className={`transition-all duration-1000 ${
              experienceRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h2 id="experience-title" className="text-[28px] md:text-[32px] lg:text-3xl xl:text-4xl font-bold text-white leading-[1.2] mb-4 md:mb-6">
                  Erfarenhet från Elitnivå
                </h2>
                <div className="text-base md:text-lg text-gray-300 font-light leading-[1.6] md:leading-relaxed space-y-4 md:space-y-5">
                  <p>
                    Under min tid som professionell ishockeyspelare har jag själv upplevt de fördelar som mental styrka kan erbjuda. Det handlar om att hantera press, bibehålla fokus, återhämta sig från motgångar och skapa en vinnande inställning. Genom att utveckla din mentala styrka kan du öka din prestation, självförtroende och välmående, både inom och utanför idrottsarenan.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative order-1 lg:order-2 flex items-center justify-center w-full">
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-gray-800 w-full aspect-[4/3] group">
                  <img 
                    src={experienceImage} 
                    alt="Carl-Johan Sjögren - Erfarenhet från elitnivå" 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    style={{ objectPosition: '50% 35%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section - Image on Left */}
        <section className="py-8 md:py-12 lg:py-16 border-t border-gray-800" aria-labelledby="mission-title">
          <div 
            ref={missionRef.elementRef}
            className={`transition-all duration-1000 ${
              missionRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative order-1 lg:order-1 flex items-center justify-center w-full">
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-gray-800 w-full max-h-[60vh] md:max-h-[80vh] group">
                  <img 
                    src={missionImage} 
                    alt="Carl-Johan Sjögren - Mitt uppdrag" 
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="order-2 lg:order-2">
                <h2 id="mission-title" className="text-[28px] md:text-[32px] lg:text-3xl xl:text-4xl font-bold text-white leading-[1.2] mb-4 md:mb-6">
                  Mitt Uppdrag
                </h2>
                <div className="text-base md:text-lg text-gray-300 font-light leading-[1.6] md:leading-relaxed space-y-4 md:space-y-5">
                  <p>
                    Efter min tid som professionell spelare har jag beslutat att ägna mig åt att hjälpa andra idrottare att utveckla sin mentala styrka. Jag erbjuder individuell coaching och träningsprogram som är skräddarsydda för att möta dina unika behov och mål. Oavsett om du vill nå toppen inom din sport, hantera prestationstryck eller helt enkelt förbättra ditt idrottsliga resultat, är jag här för att stötta dig på din resa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Message */}
        <section className="py-8 md:py-12 lg:py-16 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 px-4">
            <p className="text-base md:text-lg text-gray-300 font-light leading-[1.6] md:leading-relaxed">
              Tack för att du besöker min webbplats, och tveka inte att kontakta mig om du har några frågor eller om du är redo att börja din resa mot en starkare och mer självsäker idrottare.
            </p>
            <div className="pt-2 md:pt-4">
              <Link
                to="/kontakt"
                className="inline-block bg-[#ffcb33] text-[#1a1a1a] px-8 py-4 h-[56px] md:h-auto flex items-center justify-center rounded-lg text-base font-semibold tracking-wide hover:bg-[#e6b82e] active:bg-[#d4a626] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Kontakta mig
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
