import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import { Phone, Zap } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 z-40">
      <Link 
        to="/contact" 
        className="flex items-center justify-between bg-slate-900 text-white p-4 rounded-sm shadow-2xl border border-white/10 backdrop-blur-md"
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">Need a Quote?</span>
          <span className="font-bold uppercase tracking-tight">Partner With Us</span>
        </div>
        <div className="bg-orange-500 p-2 rounded-sm">
          <Zap size={20} className="fill-current" />
        </div>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <StickyMobileCTA />
        <Footer />
      </div>
    </Router>
  );
}
