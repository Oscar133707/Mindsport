import React from 'react';
import cjImage from '../Images/CJ image.png';

const About: React.FC = () => {
  return (
    <div className="w-full bg-[#1f1f1f] font-sans text-[#f5f5f5]">
      <div className="max-w-[800px] mx-auto px-5 md:px-10 py-20 md:py-32">
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
          Om
        </h1>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg aspect-[16/9] border border-gray-800">
          <img 
            src={cjImage} 
            alt="Carl-Johan Sjögren - MindSport" 
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="text-lg text-gray-300 font-light leading-[1.8] space-y-8">
          <p>
            Mitt namn är Carl-Johan Sjögren och jag har haft förmånen att ägna hela 13 år åt en professionell karriär inom ishockey. Under dessa år har jag fått arbeta hårt för att skaffa mig förståelse för vad som krävs för att nå framgång inom idrottens värld. Det har gett mig insikten att prestation handlar om mer än bara fysisk förmåga – det handlar också om din mentala styrka.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
              Varför Mental Styrka är Avgörande
            </h2>
            <p>
              Mental styrka är en avgörande faktor för att nå framgång inom idrott. Det handlar om att utveckla och träna din mentala förmåga på samma sätt som du tränar din fysiska. Oavsett om du är en professionell idrottare, en amatör eller någonstans där emellan, är din mentala inställning och styrka en avgörande faktor som kan ta din prestation till nya höjder.
            </p>
          </div>

          <p>
            Under min tid som professionell ishockeyspelare har jag själv upplevt de fördelar som mental styrka kan erbjuda. Det handlar om att hantera press, bibehålla fokus, återhämta sig från motgångar och skapa en vinnande inställning. Genom att utveckla din mentala styrka kan du öka din prestation, självförtroende och välmående, både inom och utanför idrottsarenan.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">
              Mitt Uppdrag
            </h2>
            <p>
              Efter min tid som professionell spelare har jag beslutat att ägna mig åt att hjälpa andra idrottare att utveckla sin mentala styrka. Jag erbjuder individuell coaching och träningsprogram som är skräddarsydda för att möta dina unika behov och mål. Oavsett om du vill nå toppen inom din sport, hantera prestationstryck eller helt enkelt förbättra ditt idrottsliga resultat, är jag här för att stötta dig på din resa.
            </p>
          </div>

          <p className="border-t border-gray-700 pt-8 mt-12 font-medium text-gray-400">
            Tack för att du besöker min webbplats, och tveka inte att kontakta mig om du har några frågor eller om du är redo att börja din resa mot en starkare och mer självsäker idrottare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;