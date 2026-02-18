import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Trophy, TrendingUp, Shield, Quote, Users, UserCheck, Check } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import heroImage from '../Images/Lägg till en rubrik.jpg';
import hockeyPlayerIcon from '../Images/hockey-player-icon.png';
import cjImage from '../Images/New Images/A0C8D704-6197-4CC0-AEB4-F4DB2610E6F5.jpeg';
import stageImage from '../Images/New Images/Avancemang.jpeg';
import finalBannerImage from '../Images/New Images/Lägg till en rubrik (4).jpg';
import heroPlayerImage from '../Images/New Images/WhatsApp Image 2026-01-26 at 09.28.42.jpeg';
import actionShotImage from '../Images/New Images/8A4ACFB3-16EF-4BBB-90C9-0F4549D60D21.png';
import athleteImage from '../Images/New Images/nathanael-desmeules-W35u_L1l8HA-unsplash.jpg';
import coachImage from '../Images/New Images/pexels-franco-monsalvo-252430633-32101180.jpg';
import mentalTrainingImage from '../Images/New Images/32438065-B68B-4701-BFAA-3392520E4242.jpeg';
import nybroImage from '../Images/New Images/Nybro.jpeg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { useLayeredMouseParallax } from '../hooks/useLayeredMouseParallax';
import { Testimonial } from '../types';
import {
  heroTextVariants,
  staggerContainerVariants,
  subtitleVariants,
  ctaEntranceVariants,
  ctaButtonVariants,
  arrowSlideVariants
} from '../components/animations/variants';
import { GeometricShapes } from '../components/hero/GeometricShapes';
import { LightStreaks } from '../components/hero/LightStreaks';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Oscar Johansson",
    role: "Landslagsutövare ITF Taekwondo",
    quote: "Den mentala träningen med MindSport hjälpte mig att göra om negativ stress till positiv energi. Jag var mentalt förberedd och redo att prestera när det gällde - både på VM och andra tävlingar.",
  },
  {
    id: 2,
    name: "Anna Andersson",
    role: "Elittränare Fotboll",
    quote: "Att förstå gruppdynamik och ledarskap ur ett psykologiskt perspektiv har lyft mitt team till en ny nivå.",
  },
  {
    id: 3,
    name: "Juniorakademin",
    role: "Talangutveckling",
    quote: "Föreläsningarna gav våra ungdomar en fantastisk inblick i vad som krävs mentalt för att bli elit.",
  },
];

const Home: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Hero slideshow state
  const SLIDE_HOLD_MS = 4000;
  const SLIDE_TRANSITION_MS = 1200;
  const heroImages = [heroPlayerImage, actionShotImage];
  const heroImagePositions = ['center 20%', 'center 40%'];
  const heroSlides = [
    { line1: 'RETHINK', line2: 'YOUR GAME', subtitle: 'Mental träning för idrottare som vill nå sin fulla potential' },
    { line1: 'TRAIN', line2: 'YOUR MIND', subtitle: 'Lås upp din mentala styrka och prestera när det gäller' },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const heroImageRef = React.useRef<HTMLDivElement>(null);
  const heroSectionRef = React.useRef<HTMLElement>(null);
  const aboutRef = useScrollAnimation({ threshold: 0.2 });
  const approachRef = useScrollAnimation({ threshold: 0.2 });
  const servicesRef = useScrollAnimation({ threshold: 0.2 });
  const testimonialsRef = useScrollAnimation({ threshold: 0.2 });
  const lecturesRef = useScrollAnimation({ threshold: 0.2 });
  const quoteRef = useScrollAnimation({ threshold: 0.3 });
  const ctaRef = useScrollAnimation({ threshold: 0.2 });

  // Multi-layer parallax: Scroll-linked transforms
  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to scale and opacity values (entire section)
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  // Layer-specific scroll parallax transforms (Y-axis movement)
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, -150]); // Deep background (slowest)
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Mid-background decorative
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, -50]);  // Background glows
  const layer4Y = useTransform(scrollYProgress, [0, 1], [0, 0]);    // Hero image (baseline)
  const layer5Y = useTransform(scrollYProgress, [0, 1], [0, 50]);   // Foreground highlights (fastest)

  // Multi-layer parallax: Mouse-based transforms with center-point perspective
  const layeredMouseParallax = useLayeredMouseParallax({
    layers: [
      { strength: 5 },   // Layer 1: Deep background
      { strength: 8 },   // Layer 2: Geometric shapes
      { strength: 12 },  // Layer 3: Glows
      { strength: 15, enableRotation: true },  // Layer 4: Hero image (with 3D tilt)
      { strength: 20 },  // Layer 5: Light streaks
    ],
  });


  useEffect(() => {
    // Trigger hero animation on mount
    const timer = setTimeout(() => {
      setHeroVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Detect mobile devices for conditional parallax rendering
  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 769;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance hero slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroImages.length);
    }, SLIDE_HOLD_MS + SLIDE_TRANSITION_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full font-sans text-[#f5f5f5] bg-[#1f1f1f]">
      {/* Hero Section */}
      <motion.section
        ref={heroSectionRef}
        className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-[#1f1f1f]"
        aria-label="Introduktion"
        style={{
          scale: heroScale,
          opacity: heroOpacity,
        }}
      >
        <style>{`
          @keyframes heroTextReveal {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes heroButtonReveal {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes heroImageZoom {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
          
          @keyframes buttonPulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.02);
            }
          }
          
          .hero-text-reveal-1 {
            animation: heroTextReveal 0.8s ease-out forwards;
            opacity: 0;
          }
          
          .hero-text-reveal-2 {
            animation: heroTextReveal 0.8s ease-out 0.2s forwards;
            opacity: 0;
          }
          
          .hero-text-reveal-3 {
            animation: heroTextReveal 0.8s ease-out 0.4s forwards;
            opacity: 0;
          }
          
          .hero-text-reveal-4 {
            animation: heroButtonReveal 0.8s ease-out 0.6s forwards;
            opacity: 0;
          }
          
          .hero-image-zoom {
            animation: heroImageZoom 20s ease-in-out infinite;
          }
          
          .hero-button-pulse {
            animation: buttonPulse 3s ease-in-out infinite;
          }
          
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          .hero-gradient-overlay {
            background: linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 25%, #1f1f1f 50%, #252525 75%, #1f1f1f 100%);
            background-size: 200% 200%;
            animation: gradientShift 15s ease-in-out infinite;
          }
          
          .hero-image-container {
            border-radius: 1rem;
            overflow: hidden;
          }
          
          
          .hero-image-container img {
            border-radius: 1rem;
            will-change: transform;
          }
          
          /* Mobile optimizations */
          @media (max-width: 768px) {
            .hero-image-zoom {
              animation: heroImageZoomMobile 20s ease-in-out infinite;
            }
            
            @keyframes heroImageZoomMobile {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.03);
              }
              100% {
                transform: scale(1);
              }
            }
            
            .hero-button-pulse {
              animation-duration: 3s;
            }
          }
          
          .hero-image-zoom-delayed {
            animation: heroImageZoom 20s ease-in-out -7.5s infinite;
          }

          @media (max-width: 768px) {
            .hero-image-zoom-delayed {
              animation: heroImageZoomMobile 20s ease-in-out -7.5s infinite;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-image-zoom,
            .hero-image-zoom-delayed,
            .hero-button-pulse,
            .hero-text-reveal-1,
            .hero-text-reveal-2,
            .hero-text-reveal-3,
            .hero-text-reveal-4 {
              animation: none !important;
            }
          }

        `}</style>

        {/* Layer 1: Deep Background - Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 hero-gradient-overlay pointer-events-none z-0"
          style={!isMobile && layeredMouseParallax.isEnabled ? {
            y: layer1Y,
            x: layeredMouseParallax.layers[0].x,
          } : {}}
        />

        {/* Layer 2: Mid-Background - Geometric Decorative Elements */}
        <motion.div
          className="absolute inset-0 z-10"
          style={!isMobile && layeredMouseParallax.isEnabled ? {
            y: layer2Y,
            x: layeredMouseParallax.layers[1].x,
          } : {}}
        >
          <GeometricShapes />
        </motion.div>

        {/* Layer 3: Background Glows - Ambient Light Effects */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={!isMobile && layeredMouseParallax.isEnabled ? {
            y: layer3Y,
            x: layeredMouseParallax.layers[2].x,
          } : {}}
        >
          {/* Ambient glow - top right */}
          <div
            className={`hidden lg:block absolute top-20 right-1/4 w-64 h-64 bg-[#ffcb33]/10 rounded-full blur-3xl transition-opacity duration-2000 delay-300 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
          />
          {/* Ambient glow - bottom left */}
          <div
            className={`hidden lg:block absolute bottom-32 left-1/3 w-48 h-48 bg-[#ffcb33]/8 rounded-full blur-3xl transition-opacity duration-2000 delay-500 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
          />
        </motion.div>

        <div className="max-w-[1400px] w-full mx-auto px-5 md:px-6 lg:px-10 relative z-30 h-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch h-full py-6 md:py-8 lg:py-0">
            {/* Image Column - Top on mobile */}
            <div className="order-1 lg:order-1 flex items-stretch h-[40vh] md:h-[45vh] lg:h-full relative">
              {/* Layer 4: Hero Image with 3D Tilt */}
              <motion.div
                ref={heroImageRef}
                className={`hero-image-container relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ease-out ${
                  heroVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
                style={!isMobile && layeredMouseParallax.isEnabled ? {
                  y: layer4Y,
                  x: layeredMouseParallax.layers[3].x,
                  rotateX: layeredMouseParallax.layers[3].rotateX,
                  rotateY: layeredMouseParallax.layers[3].rotateY,
                  transformStyle: 'preserve-3d',
                } : {}}
              >
                {/* Slideshow: stacked images with crossfade */}
                {heroImages.map((src, index) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={index === 0 ? "Mental träning för idrottare" : "Idrottare i aktion"}
                    className={`absolute inset-0 w-full h-full object-cover rounded-2xl ${
                      index === 0 ? 'hero-image-zoom' : 'hero-image-zoom-delayed'
                    }`}
                    style={{ objectPosition: heroImagePositions[index] }}
                    {...(index === 0
                      ? { fetchPriority: 'high' as any }
                      : { loading: 'lazy' as const }
                    )}
                    initial={{ opacity: index === 0 ? 1 : 0 }}
                    animate={{ opacity: activeSlide === index ? 1 : 0 }}
                    transition={{ duration: SLIDE_TRANSITION_MS / 1000, ease: 'easeInOut' }}
                  />
                ))}
                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none z-10 rounded-2xl" />
              </motion.div>

              {/* Layer 5: Foreground Light Streaks (positioned over image column) */}
              <motion.div
                className="absolute inset-0 z-40 pointer-events-none"
                style={!isMobile && layeredMouseParallax.isEnabled ? {
                  y: layer5Y,
                  x: layeredMouseParallax.layers[4].x,
                } : {}}
              >
                <LightStreaks />
              </motion.div>
            </div>

            {/* Text Column - Bottom on mobile */}
            <div className="order-2 lg:order-2 flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4 md:space-y-6">
                {/* Main Heading - synced with image slideshow */}
                <motion.h1
                  className="relative text-[40px] md:text-[48px] lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.2]"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainerVariants}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                      <span className="block">{heroSlides[activeSlide].line1}</span>
                      <span className="block">{heroSlides[activeSlide].line2}</span>
                    </motion.div>
                  </AnimatePresence>
                </motion.h1>

                {/* Subtitle - synced with image slideshow */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeSlide}
                      className="text-base md:text-lg lg:text-2xl xl:text-3xl text-gray-300 font-light leading-[1.5] md:leading-relaxed px-2 md:px-0"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
                    >
                      {heroSlides[activeSlide].subtitle}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* CTA Button */}
              <motion.div
                className="pt-2 md:pt-4"
                initial="hidden"
                animate="visible"
                variants={ctaEntranceVariants}
              >
                <Link to="/kontakt">
                  <motion.button
                    className="inline-flex items-center justify-center gap-2 bg-[#ffcb33] text-[#1a1a1a] w-[90%] max-w-[400px] md:w-auto md:max-w-none md:px-10 h-[56px] md:h-auto md:py-5 rounded-lg text-lg md:text-lg lg:text-xl font-bold tracking-wide uppercase shadow-lg mx-auto md:mx-0"
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    variants={ctaButtonVariants}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span>Börja din resa</span>
                    <motion.div variants={arrowSlideVariants}>
                      <ArrowRight size={20} />
                    </motion.div>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About/Introduction Section */}
      <section className="py-24 md:py-32 bg-[#1f1f1f]" aria-labelledby="about-title">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div 
            ref={aboutRef.elementRef}
            className={`transition-all duration-1000 ${
              aboutRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h2 id="about-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
                  Carl-Johan Sjögren
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 font-semibold mb-8">
                  Grundare av Mindsport
                </p>
                <div className="space-y-5 text-lg text-gray-300 font-light leading-relaxed mb-8">
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
                <Link
                  to="/om"
                  className="inline-block bg-[#ffcb33] text-[#1a1a1a] px-8 py-4 rounded-lg text-base font-semibold tracking-wide hover:bg-[#e6b82e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Läs mer om Carl-Johan
                </Link>
              </div>

              {/* Image */}
              <div className="relative order-1 lg:order-2 flex items-center justify-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 w-full max-h-[80vh] aspect-[3/4] md:aspect-[4/5]">
                  <img 
                    src={cjImage} 
                    alt="Carl-Johan Sjögren - Professionell ishockeyspelare och mental tränare" 
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 35%' }}
                  />
                </div>
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
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#2a2a2a] border border-gray-800 hover:border-[#ffcb33]/50 transition-all duration-300 group h-full">
                <div className="w-16 h-16 bg-[#4e4e4e] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#ffcb33] group-hover:text-[#1a1a1a] transition-all duration-300 mb-4">
                  <Shield size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ffcb33] transition-colors mb-4 min-h-[3rem] flex items-center justify-center">Hantera Press</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm mt-auto">
                  Utveckla verktyg för att prestera under tryck och i avgörande situationer.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#2a2a2a] border border-gray-800 hover:border-[#ffcb33]/50 transition-all duration-300 group h-full">
                <div className="w-16 h-16 bg-[#4e4e4e] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#ffcb33] group-hover:text-[#1a1a1a] transition-all duration-300 mb-4">
                  <Target size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ffcb33] transition-colors mb-4 min-h-[3rem] flex items-center justify-center">Bibehålla Fokus</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm mt-auto">
                  Lär dig tekniker för att hålla koncentration och fokus när det gäller som mest.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#2a2a2a] border border-gray-800 hover:border-[#ffcb33]/50 transition-all duration-300 group h-full">
                <div className="w-16 h-16 bg-[#4e4e4e] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#ffcb33] group-hover:text-[#1a1a1a] transition-all duration-300 mb-4">
                  <TrendingUp size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ffcb33] transition-colors mb-4 min-h-[3rem] flex items-center justify-center">Återhämta från Motgångar</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm mt-auto">
                  Bygg mental resiliens och lär dig att komma tillbaka starkare efter svårigheter.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#2a2a2a] border border-gray-800 hover:border-[#ffcb33]/50 transition-all duration-300 group h-full">
                <div className="w-16 h-16 bg-[#4e4e4e] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#ffcb33] group-hover:text-[#1a1a1a] transition-all duration-300 mb-4">
                  <Trophy size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ffcb33] transition-colors mb-4 min-h-[3rem] flex items-center justify-center">Vinnande Inställning</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm mt-auto">
                  Skapa en mentalitet som driver dig framåt och hjälper dig att nå dina mål.
                </p>
              </div>
            </div>

            {/* Inline Resilience Quote */}
            <div className="mt-16 max-w-3xl mx-auto">
              <p className="text-xs md:text-sm text-[#ffcb33] font-medium uppercase tracking-wider mb-4 text-center">
                Filosofin bakom vår coaching
              </p>
              <blockquote className="text-lg md:text-xl font-light italic text-gray-200 leading-relaxed border-l-4 border-[#ffcb33] pl-6 py-4">
                "En motgång är inte något konstant, motgångar har alla, oavsett om du är bäst eller inte. Styrkan ligger bara i att kunna vända en motgång till framgång."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - For Athletes & Coaches */}
      <section className="py-12 md:py-16 bg-[#1f1f1f] border-t border-gray-800" aria-label="Tjänster">
        <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
          <div 
            ref={servicesRef.elementRef}
            className={`transition-all duration-1000 ${
              servicesRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-8">
              {/* For Athletes */}
              <div className="flex flex-col bg-[#2a2a2a] rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 shadow-lg">
                <div className="p-0">
                  <div className="relative h-[50vh] md:h-[45vh] lg:h-56 overflow-hidden">
                    <img 
                      src={athleteImage} 
                      alt="Mental träning för idrottare" 
                      loading="lazy"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 30%' }}
                    />
                    <div className="absolute top-4 left-4">
                      <h3 className="text-[28px] md:text-[32px] font-bold text-white uppercase tracking-wide drop-shadow-lg">
                        För Idrottare
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ffcb33] rounded-xl flex items-center justify-center p-3 md:p-4">
                        <Users className="text-[#1a1a1a]" size={24} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 flex-grow flex flex-col">
                  <div className="bg-[#1f1f1f] rounded-xl p-6 md:p-5 flex-grow flex flex-col">
                    <h4 className="text-base md:text-lg font-bold text-white mb-3 leading-[1.6] md:leading-tight">
                      Utveckla din mentala styrka och nå din fulla potential genom skräddarsydda träningsprogram och individuell coaching.
                    </h4>
                    <p className="text-gray-300 font-medium mb-4 text-xs uppercase tracking-wide">
                      I min coaching lär du dig att:
                    </p>
                    <ul className="space-y-3 mb-5 flex-grow">
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="text-[#ffcb33]" size={18} strokeWidth={2.5} />
                        </div>
                        <p className="text-gray-300 leading-[1.6] text-[15px] md:text-sm">
                          Prestera ditt bästa när det gäller som mest genom att utveckla en <strong className="text-white">elitmentalitet</strong> och mentala rutiner.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="text-[#ffcb33]" size={18} strokeWidth={2.5} />
                        </div>
                        <p className="text-gray-300 leading-[1.6] text-[15px] md:text-sm">
                          Hantera press och motgångar genom att bygga <strong className="text-white">mental resiliens</strong> och återhämtningsförmåga.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="text-[#ffcb33]" size={18} strokeWidth={2.5} />
                        </div>
                        <p className="text-gray-300 leading-[1.6] text-[15px] md:text-sm">
                          Få klarhet över <strong className="text-white">vem du är</strong> och vad du vill uppnå, samt vilka beteenden som krävs för att nå dina mål.
                        </p>
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <Link
                        to="/kontakt"
                        className="w-full md:w-auto inline-block bg-[#ffcb33] text-[#1a1a1a] px-8 py-4 h-[56px] md:h-auto flex items-center justify-center rounded-lg text-base md:text-base font-semibold tracking-wide hover:bg-[#e6b82e] active:bg-[#d4a626] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        Kom igång
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Coaches */}
              <div className="flex flex-col bg-[#2a2a2a] rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 shadow-lg">
                <div className="p-0">
                  <div className="relative h-[50vh] md:h-[45vh] lg:h-56 overflow-hidden">
                    <img 
                      src={coachImage} 
                      alt="Mental träning för tränare" 
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-4 left-4">
                      <h3 className="text-[28px] md:text-[32px] font-bold text-white uppercase tracking-wide drop-shadow-lg">
                        För Tränare
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-[#4e4e4e] rounded-xl flex items-center justify-center p-3 md:p-4">
                        <UserCheck className="text-white" size={24} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 flex-grow flex flex-col">
                  <div className="bg-[#1f1f1f] rounded-xl p-6 md:p-5 flex-grow flex flex-col">
                    <h4 className="text-base md:text-lg font-bold text-white mb-3 leading-[1.6] md:leading-tight">
                      Hjälp dina idrottare att bemästra det mentala spelet så att de kan övervinna hinder och behålla fokus under tryck.
                    </h4>
                    <p className="text-gray-300 font-medium mb-4 text-xs uppercase tracking-wide">
                      I min coaching lär du dig att:
                    </p>
                    <ul className="space-y-3 mb-5 flex-grow">
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="text-[#ffcb33]" size={18} strokeWidth={2.5} />
                        </div>
                        <p className="text-gray-300 leading-[1.6] text-[15px] md:text-sm">
                          Få dina idrottare att prestera sitt bästa när det gäller som mest genom att använda ett <strong className="text-white">SYSTEM</strong> för att skapa en elitmentalitet.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="text-[#ffcb33]" size={18} strokeWidth={2.5} />
                        </div>
                        <p className="text-gray-300 leading-[1.6] text-[15px] md:text-sm">
                          Tävla på en högre nivå, mer konsekvent – samtidigt som du hanterar distraktioner och motgångar – genom att etablera <strong className="text-white">rätta rutiner</strong>.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="text-[#ffcb33]" size={18} strokeWidth={2.5} />
                        </div>
                        <p className="text-gray-300 leading-[1.6] text-[15px] md:text-sm">
                          Skapa den <strong className="text-white">mästerskapskultur</strong> du behöver i ditt program för att utveckla elitidrottare och ledare med en tydlig vision som håller ditt lag motiverat.
                        </p>
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <Link
                        to="/kontakt"
                        className="w-full md:w-auto inline-block bg-[#ffcb33] text-[#1a1a1a] px-8 py-4 h-[56px] md:h-auto flex items-center justify-center rounded-lg text-base md:text-base font-semibold tracking-wide hover:bg-[#e6b82e] active:bg-[#d4a626] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        Boka en tid
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-[#1f1f1f] border-t border-gray-800" aria-label="Röster från klienter">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
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
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
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
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-gray-800 pt-6 mt-auto relative z-10">
                    <p className="font-bold text-white text-lg mb-1">{testimonial.name}</p>
                    <p className="text-sm text-[#ffcb33] font-medium">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lectures Section */}
      <section className="py-24 md:py-32 bg-[#1f1f1f] border-t border-gray-800" aria-labelledby="lectures-title">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div 
            ref={lecturesRef.elementRef}
            className={`transition-all duration-1000 ${
              lecturesRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <h2 id="lectures-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Föreläsningar
              </h2>
              <div className="w-24 h-1 bg-[#ffcb33] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-800 group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={mentalTrainingImage} 
                    alt="Föreläsning om mental träning" 
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="bg-[#2a2a2a] p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Mental Träning i Idrott</h3>
                  <p className="text-gray-400 text-sm">Grundläggande tekniker för mental styrka</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-800 group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={nybroImage} 
                    alt="Föreläsning om att prestera under tryck" 
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="bg-[#2a2a2a] p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Prestera Under Tryck</h3>
                  <p className="text-gray-400 text-sm">Verktyg för att hantera press och nervositet</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-800 group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={stageImage} 
                    alt="Föreläsning om ledarskap och gruppdynamik" 
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="bg-[#2a2a2a] p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Ledarskap & Gruppdynamik</h3>
                  <p className="text-gray-400 text-sm">Bygg en vinnande kultur i ditt lag</p>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Utveckla din mentala styrka tillsammans med andra idrottare och tränare. Mina föreläsningar ger dig praktiska verktyg och insikter som du kan använda direkt för att förbättra din prestation.
              </p>
              <div className="pt-4">
                <Link
                  to="/forelasningar"
                  className="inline-block bg-[#ffcb33] text-[#1a1a1a] px-8 py-4 rounded-lg text-base font-semibold tracking-wide hover:bg-[#e6b82e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Se alla föreläsningar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote & CTA Section */}
      <section className="py-24 md:py-32 bg-[#1f1f1f] border-t border-gray-800" aria-label="Skillnaden som gör skillnaden">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div 
            ref={quoteRef.elementRef}
            className={`transition-all duration-1000 ${
              quoteRef.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Main Heading */}
            <div className="text-center mb-16">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-white leading-tight">
                "VAD ÄR SKILLNADEN - SOM GÖR SKILLNADEN, NÄR MAN LYCKAS OCH INTE LYCKAS?"
              </blockquote>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
              {/* Left Column - Text */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Upptäck skillnaden som gör skillnaden
                </h3>
                <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
                  Oavsett om du kallar det mental träning, mentala färdigheter, idrottspsykologi eller prestationspsykologi.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcb33] text-xl font-bold mt-1">•</span>
                    <p className="text-gray-300 leading-relaxed">
                      Vi hjälper dig att bygga en mentalitet baserad på din personlighet och nuvarande omständigheter.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcb33] text-xl font-bold mt-1">•</span>
                    <p className="text-gray-300 leading-relaxed">
                      Därifrån arbetar vi med det som tar din uppmärksamhet och hur du behåller fokus på det som spelar roll.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcb33] text-xl font-bold mt-1">•</span>
                    <p className="text-gray-300 leading-relaxed">
                      Genom individuell coaching och skräddarsydda träningsprogram hjälper jag dig att utveckla den mentala förmågan som skiljer de som lyckas från de som inte gör det.
            </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    to="/kontakt"
                    className="inline-block bg-[#ffcb33] text-[#1a1a1a] px-8 py-4 rounded-lg text-base font-semibold tracking-wide hover:bg-[#e6b82e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Kontakta mig
                  </Link>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="flex items-center justify-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 w-full max-w-[680px] max-h-[680px]">
                  <img 
                    src={finalBannerImage} 
                    alt="Mental träning och prestationspsykologi" 
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;