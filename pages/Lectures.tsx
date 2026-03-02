import React, { useState } from 'react';
import { Lock, PlayCircle, ArrowRight, X } from 'lucide-react';
import { Lecture } from '../types';
import mentalPerformanceVideo from '../Föreläsningar/Mental Performance.mp4';
import lecturesHeroImage from '../Images/New Images/IMG_1076.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MOCK_PASSWORD = "Mindsport25";

const lecturesData: Lecture[] = [
  {
    id: 1,
    title: "Målsättning & Planering",
    date: "2026-02-23",
    description: "En genomgång av hur du sätter effektiva mål och skapar en plan för att nå din fulla potential.",
    duration: "",
    videoPath: mentalPerformanceVideo,
  }
];

const Lectures: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [playingId, setPlayingId] = useState<number | null>(null);
  const introRef = useScrollAnimation({ threshold: 0.1 });
  const loginRef = useScrollAnimation({ threshold: 0.1 });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MOCK_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Felaktigt lösenord. Försök igen.');
    }
  };

  return (
    <div className="w-full bg-[#1f1f1f] font-sans text-[#f5f5f5] overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-10 py-12 md:py-20 lg:py-32">

        {/* Page Header */}
        <p className="text-xs text-[#ffcb33] font-medium uppercase tracking-wider mb-3">
          Exklusivt material
        </p>
        <h1 className="text-[36px] md:text-[42px] lg:text-4xl xl:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.2]">
          Föreläsningar
        </h1>
        <div className="w-24 h-1 bg-[#ffcb33] rounded-full mb-8 md:mb-12"></div>

        {/* Intro Section - Text left, Image right */}
        <section className="py-8 md:py-12 lg:py-16 border-t border-gray-800">
          <div
            ref={introRef.elementRef}
            className={`transition-all duration-1000 ${
              introRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Text */}
              <div className="order-2 lg:order-1 flex flex-col gap-6">
                <h2 className="text-[26px] md:text-[30px] lg:text-3xl font-bold text-white leading-[1.2]">
                  Mentalt träningsinnehåll för MindSport-klienter
                </h2>
                <p className="text-base md:text-lg text-gray-300 font-light leading-[1.6]">
                  Som MindSport-klient får du tillgång till exklusiva föreläsningar och videomaterial om mental träning — anpassat för idrottare som vill ta sin prestation till nästa nivå.
                </p>
                <ul className="space-y-3">
                  {[
                    'Föreläsningar om målsättning & planering',
                    'Mentala verktyg för press och motgångar',
                    'Exklusivt material löpande uppdaterat',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300 text-sm md:text-base font-light">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#ffcb33] flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-gray-500 text-sm pt-2 border-t border-gray-800">
                  <Lock size={13} strokeWidth={1.5} />
                  <span>Tillgängligt för klienter — logga in nedan</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative order-1 lg:order-2 flex items-center justify-center w-full">
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-gray-800 w-full group">
                  <img
                    src={lecturesHeroImage}
                    alt="Föreläsning med publik i en mörk salong"
                    loading="eager"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Login / Content Section */}
        <section className="border-t border-gray-800">
          {!isAuthenticated ? (
            <div
              ref={loginRef.elementRef}
              className={`transition-all duration-1000 py-20 md:py-32 flex flex-col items-center ${
                loginRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-full max-w-md">
                <div className="bg-[#4e4e4e] rounded-2xl p-10 border border-gray-700 shadow-lg text-center">
                  <div className="w-16 h-16 bg-[#4e4e4e] rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm text-white border border-gray-600">
                    <Lock size={24} strokeWidth={1.5} />
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed font-light">
                    Detta innehåll är lösenordsskyddat. För att visa det, ange lösenordet nedan.
                  </p>

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Lösenord"
                        className="w-full px-5 py-4 rounded-lg bg-[#f0f0f0] text-gray-900 border border-gray-300 outline-none focus:border-[#ffcb33] focus:ring-4 focus:ring-[#ffcb33]/20 transition-all duration-300 placeholder-gray-500"
                      />
                    </div>

                    {error && (
                      <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-900/30">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-[#ffcb33] text-[#1a1a1a] font-medium text-lg py-4 rounded-lg shadow-lg hover:bg-[#e6b82e] hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Logga in</span>
                      <ArrowRight size={18} />
                    </button>
                  </form>
                </div>

                <p className="text-xs text-center text-gray-500 mt-8">
                  Har du glömt lösenordet? Kontakta oss på info@mindsport.se
                </p>
              </div>
            </div>
          ) : (
            <div className="py-20 md:py-32">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-gray-700 gap-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Föreläsningar & Material
                  </h2>
                  <p className="text-xl text-gray-400 font-light max-w-2xl">
                    Exklusivt material för MindSport-klienter.
                  </p>
                </div>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="text-sm font-medium text-gray-400 hover:text-red-400 transition-colors py-2 px-4 rounded-lg hover:bg-[#4e4e4e] border border-transparent hover:border-gray-600"
                >
                  Logga ut
                </button>
              </div>

              <div className="grid gap-6">
                {lecturesData.map((lecture) => (
                  <div key={lecture.id} className="bg-[#4e4e4e] border border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between group">
                      <div className="flex-1 mb-6 md:mb-0 pr-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="bg-[#ffcb33]/30 text-[#ffcb33] border border-[#ffcb33]/50 text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">Video</span>
                          <span className="text-gray-500 text-xs font-medium">{lecture.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ffcb33] transition-colors">
                          {lecture.title}
                        </h3>
                        <p className="text-gray-400 font-light leading-relaxed max-w-2xl">
                          {lecture.description}
                        </p>
                      </div>

                      <div className="flex items-center space-x-6 md:pl-8 border-l-0 md:border-l border-gray-700">
                        <div className="flex space-x-3 w-full md:w-auto">
                          <button
                            onClick={() => setPlayingId(playingId === lecture.id ? null : lecture.id)}
                            className="flex-1 md:flex-none flex items-center justify-center space-x-2 bg-white text-[#1a1a1a] px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#ffcb33] hover:text-[#1a1a1a] hover:shadow-lg transition-all duration-300"
                          >
                            {playingId === lecture.id ? <X size={18} /> : <PlayCircle size={18} />}
                            <span>{playingId === lecture.id ? 'Stäng' : 'Titta'}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {playingId === lecture.id && lecture.videoPath && (
                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <video
                          controls
                          autoPlay
                          className="w-full rounded-xl"
                          src={lecture.videoPath}
                        >
                          Din webbläsare stöder inte videouppspelning.
                        </video>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default Lectures;
