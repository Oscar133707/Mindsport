import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { User, BookOpen, Users, Trophy, CheckCircle, ChevronDown } from 'lucide-react';

interface Feature {
  label: string;
  description: string;
}

interface PriceItem {
  name: string;
  price: string;
  note?: string;
}

interface Product {
  id: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  features: Feature[];
  prices: PriceItem[];
  ctaLabel: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 'coaching',
    title: '1-1 Coaching',
    tagline:
      'Systematisk mental styrka – konkret och långsiktigt. Rekommenderad arbetsperiod 6–12 månader.',
    icon: <User size={22} strokeWidth={1.5} />,
    features: [
      {
        label: 'Individuell utvecklingsplan (IUP)',
        description:
          'Vi skapar en tydlig plan för hur du ska ta nästa steg i din prestation – steg för steg.',
      },
      {
        label: 'Analys',
        description:
          'Vi kartlägger dina styrkor och utvecklingsområden för att skapa rätt fokus framåt.',
      },
      {
        label: 'Playercard',
        description: 'Din mentala gameplan – samlad på ett kort.',
      },
      {
        label: 'Verktyg',
        description:
          'Konkreta mentala verktyg för att hantera press, bygga självförtroende och prestera när det gäller.',
      },
      {
        label: 'Kontinuitet & Uppföljning',
        description:
          'Vi följer upp din utveckling och justerar planen för att säkerställa progression.',
      },
      {
        label: 'Resultat',
        description:
          'Ökad trygghet i din prestation, bättre fokus och en tydlig plan för att prestera på högsta nivå.',
      },
    ],
    prices: [
      {
        name: 'Enstaka session',
        price: '850 kr/session',
        note: 'För dig som vill testa eller få en snabb push',
      },
      {
        name: 'Månadsupplägg',
        price: '1 600–3 200 kr/mån',
        note: '2–4 sessioner – perfekt för långsiktig utveckling',
      },
      {
        name: 'Långsiktigt program 6 mån',
        price: '18 000 kr',
      },
      {
        name: 'Långsiktigt program 12 mån',
        price: '34 000 kr',
        note: 'Spara 6 800 kr',
      },
    ],
    ctaLabel: 'Boka ett möte',
  },
  {
    id: 'forelasningar',
    title: 'Mental Edge Program',
    tagline:
      'Strukturerat onlineprogram för din mentala prestation – steg för steg, när du vill.',
    icon: <BookOpen size={22} strokeWidth={1.5} />,
    features: [
      {
        label: 'Inspelade föreläsningar',
        description:
          'Tydliga genomgångar av mental träning, prestation och mindset.',
      },
      {
        label: 'Strukturerat 6-veckorsprogram',
        description: 'Du följer en tydlig progression vecka för vecka.',
      },
      {
        label: 'Praktiska uppgifter',
        description:
          'Övningar som gör att du inte bara förstår, utan främst att du utvecklas.',
      },
      {
        label: 'Playercard (mall)',
        description: 'Bygg din egen mentala gameplan.',
      },
      {
        label: 'Match-prep checklista',
        description:
          'Din personliga mentala rutin inför match som hjälper dig komma i rätt "mode".',
      },
      {
        label: 'Verktyg',
        description: 'För fokus, självförtroende och prestation under press.',
      },
    ],
    prices: [
      {
        name: 'Mental Edge Program',
        price: '2 995 kr',
        note: 'Full tillgång. Gör det i din egen takt. Tillgång direkt efter köp.',
      },
    ],
    ctaLabel: 'Kom igång',
  },
  {
    id: 'lag',
    title: 'Lag',
    tagline:
      'Bygg en mental kultur och struktur i hela laget – inte bara enstaka föreläsningar.',
    icon: <Users size={22} strokeWidth={1.5} />,
    features: [
      {
        label: 'Analys av nuläge',
        description:
          'Vi kartlägger lagets mentala styrkor, utmaningar och prestationsmiljö.',
      },
      {
        label: 'Teamprofil & spelarmapping',
        description:
          'Tydlig bild av hur individer fungerar i grupp – roller, beteenden och behov.',
      },
      {
        label: 'Playercard (individuella)',
        description:
          'Varje spelare får sin mentala gameplan för att prestera och bidra till laget.',
      },
      {
        label: 'Workshops & föreläsningar',
        description:
          'Vi skapar strukturer för fokus, kommunikation och prestation i träning och match.',
      },
      {
        label: 'Verktyg',
        description:
          'Konkreta strategier för att hantera motgångar, stress och situationer.',
      },
      {
        label: 'Uppföljning',
        description:
          'Kontinuerlig uppföljning månadsvis och justering utifrån lagets progression.',
      },
    ],
    prices: [
      {
        name: 'Workshop/uppstart',
        price: '9 000 kr',
        note: '60–90 min föreläsning/workshop, inkl. resekostnader',
      },
      {
        name: 'Team program Bas',
        price: '5 500 kr/mån',
        note: '1 session/mån – 250 kr/spelare/mån (kostnad räkn.ex 22 spelare), inkl. resekostnad',
      },
      {
        name: 'Team program Pro',
        price: '10 000 kr/mån',
        note: '2 sessioner/mån + ledarstab – 385 kr/person/mån (kostnad räkn.ex 22 spelare), inkl. resekostnad',
      },
      {
        name: 'Elite samarbete',
        price: 'Skräddarsytt',
        note: 'Kontakta oss för mer information',
      },
    ],
    ctaLabel: 'Ansök och boka första möte',
  },
  {
    id: 'mentorskap',
    title: 'Mentorskap (Ishockey)',
    tagline:
      'Mental träning kombinerat med hjälp på isen. För ishockeyspelaren som vill ta nästa steg.',
    icon: <Trophy size={22} strokeWidth={1.5} />,
    features: [
      {
        label: '1-1 Mental coaching',
        description:
          'Regelbundna sessioner med fokus på självförtroende, fokus och prestation under press.',
      },
      {
        label: 'Individuell utvecklingsplan (IUP)',
        description:
          'Vi skapar en tydlig plan för hur du ska ta nästa steg i din prestation – steg för steg.',
      },
      {
        label: 'Playercard',
        description: 'Din mentala gameplan – samlad på ett kort.',
      },
      {
        label: 'Videoanalys (match/träning)',
        description:
          'Genomgång av dina prestationer på isen – beslut, beteenden och mönster.',
      },
      {
        label: 'Tanke & prestation',
        description:
          'Vi kopplar ihop det mentala med det du faktiskt gör på isen.',
      },
      {
        label: 'Match-prep checklista',
        description:
          'Din personliga mentala rutin inför match som hjälper dig komma i rätt "mode".',
      },
      {
        label: 'Kontinuitet & Uppföljning',
        description:
          'Vi följer upp din utveckling och justerar planen för att säkerställa progression.',
      },
    ],
    prices: [
      {
        name: 'Mentorskap Ishockey',
        price: '5 500 kr/mån',
        note: '2 sessioner/mån samt 1 videoanalys/mån',
      },
    ],
    ctaLabel: 'Ansök och boka första möte',
  },
];

const AccordionItem: React.FC<{
  product: Product;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ product, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`border-b border-gray-800 last:border-b-0 ${isOpen ? 'border-[#ffcb33]/30' : ''}`}>
      {/* Trigger row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-5 md:py-6 px-0 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcb33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f1f] rounded"
        aria-expanded={isOpen}
        aria-controls={`panel-${product.id}`}
        id={`trigger-${product.id}`}
      >
        {/* Icon */}
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
          isOpen
            ? 'bg-[#ffcb33] text-[#1a1a1a]'
            : 'bg-[#2a2a2a] text-gray-400 group-hover:bg-[#333] group-hover:text-[#ffcb33]'
        }`}>
          {product.icon}
        </div>

        {/* Title + tagline */}
        <div className="flex-1 min-w-0">
          <h2 className={`text-lg md:text-xl lg:text-2xl font-bold leading-tight transition-colors duration-300 ${
            isOpen ? 'text-[#ffcb33]' : 'text-white group-hover:text-[#ffcb33]'
          }`}>
            {product.title}
          </h2>
          <p className={`text-xs md:text-sm text-gray-500 font-light mt-0.5 leading-snug hidden sm:block transition-opacity duration-300 ${
            isOpen ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
          }`}>
            {product.tagline}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDown
          size={20}
          strokeWidth={2}
          className={`shrink-0 text-gray-500 transition-all duration-300 ${
            isOpen ? 'rotate-180 text-[#ffcb33]' : 'group-hover:text-[#ffcb33]'
          }`}
        />
      </button>

      {/* Collapsible content */}
      <div
        id={`panel-${product.id}`}
        role="region"
        aria-labelledby={`trigger-${product.id}`}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 2000}px` : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease',
          overflow: 'hidden',
        }}
      >
        <div className="pb-8 md:pb-10">
          {/* Tagline when open */}
          <p className="text-gray-400 font-light leading-relaxed mb-6 text-sm md:text-base max-w-2xl">
            {product.tagline}
          </p>



          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 md:gap-8">
            {/* Feature list */}
            <div className="bg-[#242424] rounded-xl border border-gray-800 p-6 md:p-8">
              <ul className="space-y-6">
                {product.features.map((feature: Feature) => (
                  <li key={feature.label} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-[#ffcb33] shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <div>
                      <p className="text-sm md:text-base text-white font-semibold leading-snug">
                        {feature.label}
                      </p>
                      <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing + CTA */}
            <div className="flex flex-col gap-4">
              <div className="bg-[#2a2a2a] rounded-xl border border-gray-800 p-6 md:p-7">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#ffcb33] mb-4">
                  Priser
                </h3>
                <ul className="space-y-4">
                  {product.prices.map((price: PriceItem) => (
                    <li
                      key={price.name}
                      className="border-b border-gray-800 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-baseline justify-between gap-4 flex-wrap">
                        <span className="font-semibold text-white text-sm">{price.name}</span>
                        <span className="text-[#ffcb33] font-bold text-sm whitespace-nowrap">
                          {price.price}
                        </span>
                      </div>
                      {price.note && (
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{price.note}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center bg-[#ffcb33] text-[#1a1a1a] px-6 py-4 rounded-lg text-sm md:text-base font-semibold tracking-wide md:hover:bg-[#e6b82e] transition-all duration-300 shadow-lg md:hover:shadow-xl transform md:hover:-translate-y-1"
                aria-label={`${product.ctaLabel} – ${product.title}`}
              >
                {product.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Produkter: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev: string | null) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#1f1f1f] font-sans text-[#f5f5f5] overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-10 py-12 md:py-20 lg:py-24">

        {/* Page Header */}
        <div className="mb-10 md:mb-14">
          <h1 className="text-[36px] md:text-[42px] lg:text-4xl xl:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.2]">
            Produkter
          </h1>
          <div className="w-20 h-1 bg-[#ffcb33] rounded-full mb-5"></div>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xl">
            Välj det upplägg som passar dig bäst – allt bygger på mental styrka, konkreta verktyg och långsiktig utveckling.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-gray-800">
          {products.map((product) => (
            <AccordionItem
              key={product.id}
              product={product}
              isOpen={openId === product.id}
              onToggle={() => toggle(product.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 pt-10 border-t border-gray-800">
          <p className="text-white font-light text-sm md:text-base mb-5">
            Osäker på vilket alternativ som passar dig?
          </p>
          <Link
            to="/kontakt"
            className="inline-block bg-[#ffcb33] text-[#1a1a1a] px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide md:hover:bg-[#e6b82e] transition-all duration-300 shadow-lg md:hover:shadow-xl transform md:hover:-translate-y-1"
          >
            Ta kontakt
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Produkter;
