import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Drill as Tool, Camera, Droplets, HardHat, Zap, Clock, ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    id: 'cipp',
    title: 'CIPP Pipe Lining',
    desc: 'Trenchless rehabilitation that restores structural integrity without excavation.',
    icon: Shield,
    image: '/src/assets/images/cipp_pipe_lining_1794045178085.jpg',
  },
  {
    id: 'hydro',
    title: 'Hydro Jetting',
    desc: 'High-pressure water cleaning to remove grease, debris, and hardened buildup.',
    icon: Droplets,
    image: '/src/assets/images/hydro_jetting_1794045177206.jpg',
  },
  {
    id: 'descale',
    title: 'Mechanical Descaling',
    desc: 'Precision removal of corrosion and scale from aged pipe interiors.',
    icon: Tool,
    image: '/src/assets/images/mechanical_descaling_1794045177740.jpg',
  },
  {
    id: 'camera',
    title: 'Sewer Camera Inspections',
    desc: 'High-definition diagnostic visibility to pinpoint issues before they escalate.',
    icon: Camera,
    image: '/src/assets/images/sewer_camera_inspection_1794045178029.jpg',
  },
];

const PROCESS_STEPS = [
  {
    title: 'HD Diagnostics',
    desc: 'We use high-definition cameras to map the exact condition of the line, pinpointing blockages or structural failures.',
    icon: Camera,
  },
  {
    title: 'Precision Cleaning',
    desc: 'Hydro jetting or mechanical descaling removes years of debris and corrosion, preparing the line for rehabilitation.',
    icon: Droplets,
  },
  {
    title: 'Structural Restore',
    desc: 'Our CIPP lining process installs a seamless new pipe within the old one, restoring flow and strength permanently.',
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Cinematic Hero */}
      <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Full-size Photo Background - Clear, properly fitted, completely natural */}
        <div className="absolute inset-0 z-0 bg-neutral-950">
          <img 
            src="/src/assets/images/cinematic_trenchless_hero_1794046173655.jpg" 
            alt="Good Guys Co. Specialized Underground Sewer & Trenchless Operations" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle natural contrast scrim so text is readable without any colored tint */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
        </div>

        {/* Hero Content - Shifted down below navbar with proper clearance */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-24 md:pt-36 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 mb-6 bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-xs border border-white/10">
              <span className="w-8 h-[2px] bg-orange-500" />
              <span className="text-orange-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
                Southern California Subcontractor
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white font-['Barlow_Condensed'] leading-[0.9] uppercase tracking-tight mb-8 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              BEHIND EVERY <br />
              <span className="text-orange-500">CLEAR LINE</span> IS <br />
              THE RIGHT CREW.
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-100 max-w-2xl mb-10 leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Specialized trenchless sewer solutions, precision diagnostics and pipe rehabilitation for plumbing contractors across Southern California.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start">
              <Link 
                to="/contact" 
                className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-[0.15em] transition-all rounded-xs flex items-center justify-center gap-3 shadow-2xl shadow-orange-500/30 text-base"
              >
                Start Partnership
                <Zap size={18} className="fill-current" />
              </Link>
              <Link 
                to="/services" 
                className="px-10 py-5 bg-black/40 hover:bg-black/60 border border-white/30 hover:border-white text-white font-bold uppercase tracking-[0.15em] transition-all rounded-xs flex items-center justify-center gap-3 backdrop-blur-md text-base"
              >
                View Tech Stack
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Strip - Positioned neatly at bottom with clean transparent border */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/60 backdrop-blur-md border-t border-white/10 hidden lg:block">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-4 gap-8">
              {[
                { label: 'Coverage Area', val: 'Southern California' },
                { label: 'Specialization', val: 'Trenchless Subcontract' },
                { label: 'Diagnostics', val: 'HD Video & Sonar' },
                { label: 'Response', val: 'Fast-Track Fleet' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400 font-black mb-0.5">{stat.label}</span>
                  <span className="text-base font-bold text-white uppercase tracking-tight">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Partnership Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-32 bg-white relative"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-slate-100 shadow-2xl relative z-10 border-[12px] border-white">
                <img 
                  src="/src/assets/images/industrial_equipment_showcase_1794045178057.jpg" 
                  alt="Good Guys Co. Fleet" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-slate-50 -z-0 border border-slate-200" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-orange-500 -z-0 flex items-center justify-center p-8 text-center text-white font-['Barlow_Condensed']">
                <div className="flex flex-col">
                  <span className="text-6xl font-black leading-none">100%</span>
                  <span className="text-xs font-bold uppercase tracking-widest mt-2">Plumber Focused Subcontracting</span>
                </div>
              </div>
            </motion.div>
            
            <div className="flex flex-col gap-10">
              <div className="space-y-4">
                <span className="text-orange-500 font-black uppercase tracking-widest text-xs">Contractor Partnership</span>
                <h2 className="text-5xl md:text-7xl font-bold font-['Barlow_Condensed'] uppercase tracking-tighter leading-[0.9] text-slate-900">
                  WE DO THE WORK. <br />
                  <span className="text-orange-500">YOU KEEP THE CLIENT.</span>
                </h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Good Guys Co. operates as a specialized technical partner for Southern California plumbers. We don't compete for your clients—we provide the industrial technology and specialized field skills you need to close the biggest jobs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: HardHat, title: 'Expert Field Crew', desc: 'Led by industry veteran Leo Anaya.' },
                  { icon: Clock, title: 'Trade Priority', desc: 'Subcontractors get first-priority scheduling.' },
                  { icon: Shield, title: 'White Label Prep', desc: 'Professional reports for your customers.' },
                  { icon: Tool, title: 'Million Dollar Tech', desc: 'Access to top-tier CIPP & Jetting rigs.' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 p-6 bg-slate-50 rounded-sm border border-slate-100 hover:border-orange-500 transition-colors group">
                    <item.icon size={24} className="text-orange-500 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-slate-900 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center gap-3 text-slate-900 font-black uppercase tracking-widest text-sm border-b-4 border-orange-500 pb-2 hover:translate-x-2 transition-transform">
                  Meet the Crew Behind the Clearance
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* The Process Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-32 bg-neutral-950 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mb-24">
            <h2 className="text-5xl md:text-7xl font-bold font-['Barlow_Condensed'] text-white uppercase tracking-tighter leading-[0.9]">
              THE PRECISION <br />
              <span className="text-orange-500">PROCESS.</span>
            </h2>
            <div className="w-32 h-2 bg-orange-500 mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 hidden md:block -translate-y-12" />
            
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col gap-8"
              >
                <div className="w-24 h-24 bg-slate-800 border border-white/10 flex items-center justify-center text-white rounded-sm relative z-10 shadow-2xl group hover:border-orange-500 transition-colors">
                  <step.icon size={40} className="text-orange-500 group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-orange-500 text-slate-900 flex items-center justify-center font-black text-xl font-['Barlow_Condensed']">
                    0{i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight font-['Barlow_Condensed'] mb-4">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Bento Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-32 bg-slate-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Arsenal</span>
              <h2 className="text-5xl md:text-7xl font-bold font-['Barlow_Condensed'] text-slate-900 uppercase tracking-tighter leading-none">
                CORE CAPABILITIES.
              </h2>
            </div>
            <Link to="/services" className="px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-orange-500 transition-all rounded-sm">
              Full Service Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative group overflow-hidden bg-slate-900 rounded-sm shadow-2xl transition-all duration-500 hover:shadow-orange-500/10",
                  index === 0 ? "md:col-span-8 h-[500px]" : "md:col-span-4 h-[500px]",
                  index === 3 ? "md:col-span-8 h-[500px]" : index === 2 ? "md:col-span-4 h-[500px]" : ""
                )}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <service.icon size={48} className="text-orange-500" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white font-['Barlow_Condensed'] uppercase tracking-tight mb-4 leading-none">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-lg max-w-md mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 leading-relaxed">
                    {service.desc}
                  </p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-xs group-hover:text-orange-500 transition-colors"
                  >
                    Explore Technical Specs <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final Conversion CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-40 bg-white relative overflow-hidden"
      >
        {/* Background Decorative Element */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-slate-950 p-12 md:p-24 rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-t border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full group-hover:bg-orange-500/20 transition-all duration-700" />
            
            <div className="relative z-10 text-center">
              <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block">Ready to Clear the Way?</span>
              <h2 className="text-5xl md:text-8xl font-bold font-['Barlow_Condensed'] text-white uppercase tracking-tighter leading-[0.85] mb-12">
                GET THE RIGHT CREW <br />
                <span className="text-orange-500">ON YOUR NEXT JOB.</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="px-16 py-8 bg-orange-500 text-white font-black uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all rounded-sm shadow-2xl shadow-orange-500/30 text-lg"
                >
                  Request Partnership Info
                </Link>
                <Link 
                  to="/services" 
                  className="px-16 py-8 bg-transparent border-2 border-white/20 text-white font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all rounded-sm text-lg"
                >
                  Our Tech Stack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
