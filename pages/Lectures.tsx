import React, { useState } from 'react';
import { Lock, PlayCircle, FileText, ArrowRight } from 'lucide-react';
import { Lecture } from '../types';

const MOCK_PASSWORD = "mindsport2024";

const lecturesData: Lecture[] = [
  {
    id: 1,
    title: "Grunderna i mental träning",
    date: "2024-02-15",
    description: "En introduktion till de psykologiska faktorerna som påverkar prestation.",
    duration: "45 min"
  },
  {
    id: 2,
    title: "Att hantera nervositet",
    date: "2024-03-10",
    description: "Praktiska verktyg för att vända anspänning till fokus.",
    duration: "60 min"
  },
  {
    id: 3,
    title: "Målsättning och motivation",
    date: "2024-04-05",
    description: "Workshop om hur man sätter effektiva mål som håller över tid.",
    duration: "55 min"
  }
];

const Lectures: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MOCK_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Felaktigt lösenord. Försök igen.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="w-full bg-[#1f1f1f] font-sans text-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20 md:py-32 flex flex-col items-center min-h-[60vh]">
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
            Föreläsningar
          </h1>

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
      </div>
    );
  }

  return (
    <div className="w-full bg-[#4e4e4e] font-sans text-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20 md:py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-gray-700 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Föreläsningar & Material
            </h1>
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
            <div key={lecture.id} className="bg-[#4e4e4e] border border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between group">
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
                <div className="text-right hidden lg:block">
                  <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Längd</span>
                  <span className="text-sm font-medium text-gray-300">{lecture.duration}</span>
                </div>
                <div className="flex space-x-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center space-x-2 bg-white text-[#1a1a1a] px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#ffcb33] hover:text-[#1a1a1a] hover:shadow-lg transition-all duration-300">
                    <PlayCircle size={18} />
                    <span>Titta</span>
                    </button>
                    <button className="flex-none p-3 text-gray-400 hover:text-[#ffcb33] hover:bg-[#4e4e4e] rounded-lg transition-all" aria-label="Ladda ner material">
                    <FileText size={20} />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lectures;