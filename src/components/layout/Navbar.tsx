import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-neutral-950/80 backdrop-blur-md py-3 border-b border-white/10 shadow-lg" 
          : "bg-transparent py-5 border-b border-white/5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand */}
          <Link to="/" className="flex items-center gap-3.5 shrink-0 group">
            <div className="h-11 w-11 md:h-12 md:w-12 rounded-sm overflow-hidden bg-black border border-neutral-700 p-0.5 shadow-md group-hover:border-orange-500 transition-colors">
              <img 
                src="/logo.jpg" 
                alt="GOOD GUYS CO. Logo" 
                className="h-full w-full object-cover rounded-xs"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/48x48/0F172A/white?text=GG';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black font-['Barlow_Condensed'] uppercase tracking-[0.08em] text-white leading-none">
                GOOD GUYS CO<span className="text-orange-500">.</span>
              </span>
              <span className="text-[9px] font-bold font-['Barlow_Condensed'] uppercase tracking-[0.25em] text-neutral-400 leading-tight">
                Trenchless Sewer & Diagnostics
              </span>
            </div>
          </Link>

          {/* Zone 2: Nav Links (Desktop) - Clean & Untinted */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center px-4">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-xs lg:text-sm font-black font-['Barlow_Condensed'] uppercase tracking-[0.18em] py-1 transition-colors whitespace-nowrap relative group",
                    isActive 
                      ? "text-orange-500" 
                      : "text-neutral-300 hover:text-white"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 right-0 h-[2px] transition-transform",
                    isActive ? "bg-orange-500 scale-x-100" : "bg-neutral-500 scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              );
            })}
          </div>

          {/* Zone 3: Primary Action (Desktop) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link 
              to="/contact"
              className="px-6 lg:px-7 py-2.5 text-xs lg:text-sm font-black font-['Barlow_Condensed'] uppercase tracking-[0.2em] bg-orange-500 hover:bg-orange-600 text-white rounded-sm whitespace-nowrap shadow-md hover:shadow-orange-500/20 transition-all"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2.5 text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-sm transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} className="text-orange-500" /> : <Menu size={26} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[69px] bg-black z-40 transition-transform duration-300 md:hidden flex flex-col border-t border-neutral-800",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-8 gap-5 h-full">
          <span className="text-[10px] font-black font-['Barlow_Condensed'] uppercase tracking-[0.3em] text-neutral-400 border-b border-neutral-800 pb-2">
            Navigation Menu
          </span>
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-3xl font-black uppercase tracking-[0.1em] font-['Barlow_Condensed'] py-2 transition-all flex items-center justify-between border-b border-neutral-900",
                  isActive ? "text-orange-500 translate-x-2" : "text-white hover:text-orange-400"
                )}
              >
                <span>{link.name}</span>
                {isActive && <span className="text-xs bg-orange-500 text-black px-2 py-0.5 rounded-xs font-black">ACTIVE</span>}
              </Link>
            );
          })}
          <div className="mt-auto pb-12 flex flex-col gap-3">
            <Link 
              to="/contact"
              className="block w-full text-center bg-orange-500 text-white py-4 text-base font-black font-['Barlow_Condensed'] uppercase tracking-[0.2em] hover:bg-orange-600 transition-all rounded-sm shadow-xl"
            >
              Get a Quote / Partner With Us
            </Link>
            <p className="text-center text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
              Subcontractor For Plumbers · Southern California
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
