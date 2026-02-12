import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Lectures from './pages/Lectures';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#1f1f1f] text-[#f5f5f5]">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-white text-[#ffcb33] px-6 py-3 rounded-md shadow-lg font-medium transition-transform duration-200"
      >
        Hoppa till huvudinnehåll
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow pt-16 md:pt-20 focus:outline-none" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/klienter" element={<Clients />} />
          <Route path="/forelasningar" element={<Lectures />} />
          <Route path="/om" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;