import React from 'react';
import { Testimonial, VideoTestimonial } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import hockeyallsvenskanLogo from '../Images/hockeyallsvenskan.png';
import ncaaLogo from '../Images/NCAA_logo.svg';
import ncdcLogo from '../Images/33518cb2-98ac-461d-981f-48e7552e0bae.svg';
import j18Logo from '../Images/Swedish_Ice_Hockey_Association_logo.svg';
import whoWeHelpImage from '../Images/New Images/Skillnaden som gör...jpeg';
import video1 from '../klient videos/WhatsApp Video 2026-02-12 at 17.50.08.mp4';
import video2 from '../klient videos/WhatsApp Video 2026-02-12 at 17.50.11.mp4';
import video1Poster from '../klient videos/Screenshot 2026-02-13 at 20.31.42.png';
import video2Poster from '../klient videos/Screenshot 2026-02-13 at 20.34.18.png';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Oscar Johansson",
    role: "Landslagsutövare ITF Taekwondo",
    quote: "Den mentala träningen med MindSport hjälpte mig att göra om negativ stress till positiv energi. Jag var mentalt förberedd och redo att prestera när det gällde - både på VM och andra tävlingar.",
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

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: "Alexander Malinowski",
    role: "FW - NAHL, SHL, NCAA",
    videoPath: video1,
    posterPath: video1Poster,
  },
  {
    id: 2,
    name: "Pontus Sjögren",
    role: "f.d Målvakt Hockeyallsvenskan, SHL, EIHL",
    videoPath: video2,
    posterPath: video2Poster,
  }
];

const Clients: React.FC = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const clientsRef = useScrollAnimation({ threshold: 0.1 });
  const testimonialsRef = useScrollAnimation({ threshold: 0.1 });
  const videoTestimonialsRef = useScrollAnimation({ threshold: 0.1 });
  const categoriesRef = useScrollAnimation({ threshold: 0.2 });
  const communityQuoteRef = useScrollAnimation({ threshold: 0.3 });

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
            Jag samarbetar med idrottare på olika nivåer – men också med föreningar och tränare som vill utveckla den mentala delen av sin verksamhet.
          </p>
        </div>

        {/* Collaboration Environments */}
        <section 
          ref={clientsRef.elementRef}
          className={`mb-20 transition-all duration-1000 ${
            clientsRef.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Text Column */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Miljöer där jag verkar
              </h2>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                Mitt arbete handlar om att skapa mentalt starka miljöer där både individer och lag kan utvecklas. 
                I samarbeten med klubbar, akademier och tränare fokuserar vi på att bygga en kultur där prestation, 
                välmående och långsiktig utveckling går hand i hand.
              </p>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                Tillsammans skräddarsyr vi upplägg för just er verklighet – oavsett om det handlar om elitidrott, 
                juniorverksamhet eller vägen mot collegeidrott.
              </p>
            </div>

            {/* Image / Logo Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-700 hover:border-[#ffcb33]/40 transition-all duration-300 shadow-lg">
                <img 
                  src={hockeyallsvenskanLogo} 
                  alt="Hockeyallsvenskan" 
                  className="h-14 w-auto mb-4 object-contain"
                  loading="lazy"
                />
                <p className="text-sm text-gray-300 text-center">
                  Erfarenhet från samarbeten inom svensk elit- och juniorhockey.
                </p>
              </div>

              <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-700 hover:border-[#ffcb33]/40 transition-all duration-300 shadow-lg">
                <img 
                  src={ncaaLogo} 
                  alt="NCAA Division 1" 
                  className="h-14 w-auto mb-4 object-contain"
                  loading="lazy"
                />
                <p className="text-sm text-gray-300 text-center">
                  Stöttar idrottare i satsningar mot collegeidrott och NCAA.
                </p>
              </div>

              <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-700 hover:border-[#ffcb33]/40 transition-all duration-300 shadow-lg">
                <img 
                  src={ncdcLogo} 
                  alt="NCDC Junior League" 
                  className="h-14 w-auto mb-4 object-contain"
                  loading="lazy"
                />
                <p className="text-sm text-gray-300 text-center">
                  Mental coaching för spelare i internationella juniorligor.
                </p>
              </div>

              <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-700 hover:border-[#ffcb33]/40 transition-all duration-300 shadow-lg">
                <img 
                  src={j18Logo} 
                  alt="J18 Junior (SIF)" 
                  className="h-14 w-auto mb-4 object-contain"
                  loading="lazy"
                />
                <p className="text-sm text-gray-300 text-center">
                  Utveckling av unga spelare och ledare inom svensk juniorhockey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Quote Section */}
        <section className="py-12 md:py-16 border-t border-gray-800" aria-label="Citat om gemenskap">
          <div
            ref={communityQuoteRef.elementRef}
            className={`transition-all duration-1000 ${
              communityQuoteRef.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-4xl mx-auto text-center px-4">
              <p className="text-sm md:text-base text-[#ffcb33] font-medium uppercase tracking-wider mb-6">
                Detta är kärnan i allt vi gör
              </p>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic text-white leading-tight mb-8">
                "Omge dig med folk som du ser upp till, för att aldrig tappa inspirationen till att bli bättre varje dag"
              </blockquote>
              <div className="w-24 h-1 bg-[#ffcb33] mx-auto rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <div className="border-t border-gray-800 pt-24">
          <div 
            ref={testimonialsRef.elementRef}
            className={`transition-all duration-1000 ${
              testimonialsRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Röster från klienter
              </h2>
              <div className="w-24 h-1 bg-[#ffcb33] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Se vad andra idrottare och tränare säger om sitt samarbete med MindSport
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-2xl p-8 border border-gray-800 hover:border-[#ffcb33]/30 transition-all duration-300 flex flex-col h-full shadow-xl hover:shadow-2xl hover:-translate-y-2 group"
                >
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-[#ffcb33]"
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-200 font-light leading-relaxed mb-8 text-base flex-grow relative z-10">
                    "{item.quote}"
                  </blockquote>
                  <div className="border-t border-gray-800 pt-6 mt-auto relative z-10">
                    <p className="font-bold text-white text-lg mb-1">{item.name}</p>
                  <p className="text-sm text-[#ffcb33] font-medium">{item.role}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Video Testimonials Section */}
        <div className="border-t border-gray-800 pt-24 mt-24">
          <div
            ref={videoTestimonialsRef.elementRef}
            className={`transition-all duration-1000 ${
              videoTestimonialsRef.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Se våra klienter berätta
              </h2>
              <div className="w-24 h-1 bg-[#ffcb33] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Hör direkt från idrottare som har utvecklats med MindSport
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {videoTestimonials.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-2xl p-6 border border-gray-800 hover:border-[#ffcb33]/30 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                >
                  {/* Video Container */}
                  <div className="relative aspect-video mb-6 rounded-xl overflow-hidden bg-black">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      poster={item.posterPath}
                      aria-label={`Video testimonial från ${item.name}, ${item.role}`}
                    >
                      <source src={item.videoPath} type="video/mp4" />
                      <p className="text-gray-400 p-4">
                        Din webbläsare stödjer inte videouppspelning.
                        <a href={item.videoPath} className="text-[#ffcb33] underline ml-1">
                          Ladda ner videon här
                        </a>.
                      </p>
                    </video>
                  </div>

                  {/* Client Info */}
                  <div className="border-t border-gray-800 pt-6">
                    <p className="font-bold text-white text-lg mb-1">{item.name}</p>
                    <p className="text-sm text-[#ffcb33] font-medium">{item.role}</p>
                  </div>
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
              src={whoWeHelpImage}
              alt="Carl-Johan Sjögren coachar på isen" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-semibold text-2xl mb-1">Teamutveckling</p>
                <p className="text-sm opacity-80 font-light tracking-wide text-white">Skapa en vinnande kultur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;