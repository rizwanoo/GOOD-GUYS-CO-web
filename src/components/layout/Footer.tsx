import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-12 w-12 overflow-hidden rounded bg-white flex-shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="GOOD GUYS CO. Logo" 
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/40x40/0F172A/white?text=GG';
                  }}
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter font-['Barlow_Condensed'] uppercase">
                Good Guys Co.
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Southern California's specialized underground sewer and trenchless plumbing subcontracting partner. Precision, technology, and workmanship in every line.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/goodguyscollc/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-orange-500 transition-colors rounded-sm group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573846273584" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-blue-600 transition-colors rounded-sm group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-orange-500">Navigation</h4>
            <nav className="flex flex-col gap-3 text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-orange-500">Expertise</h4>
            <ul className="flex flex-col gap-3 text-slate-400">
              <li>CIPP Pipe Lining</li>
              <li>Hydro Jetting</li>
              <li>Mechanical Descaling</li>
              <li>Sewer Camera Inspections</li>
              <li>Underground Diagnostics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-orange-500">Coverage</h4>
            <div className="flex flex-col gap-4 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span>Serving Southern California: Los Angeles, Orange County, Ventura & Inland Empire</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <span>Contact via Instagram / Facebook</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Good Guys Co. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>License Information Available Upon Request</span>
            <span className="hidden md:inline">·</span>
            <span>Subcontractor Specialist</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
