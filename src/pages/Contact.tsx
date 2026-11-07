import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, ShieldCheck, Zap, Truck, Users } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-slate-950 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Ready to Partner?</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-['Barlow_Condensed'] text-white uppercase tracking-tighter leading-[0.85] mb-8">
              GET THE RIGHT <br />
              <span className="text-orange-500 underline underline-offset-[12px] decoration-blue-600 decoration-[12px]">CREW ON BOARD.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              Southern California's specialized subcontracting partner. We provide the equipment, you maintain the client relationship.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Info & Trust Checklist */}
            <div className="lg:col-span-5 flex flex-col gap-16">
              <div className="flex flex-col gap-10">
                <h2 className="text-4xl md:text-5xl font-bold font-['Barlow_Condensed'] uppercase tracking-tight text-slate-900 leading-none">
                  Trade-Only <br />
                  <span className="text-blue-600">Communication.</span>
                </h2>
                
                <div className="space-y-8">
                  {[
                    { icon: MapPin, title: 'Regional Deployment', detail: 'Serving LA, OC, Ventura & Inland Empire', color: 'text-orange-500' },
                    { icon: Instagram, title: 'Social Connect', detail: '@goodguyscollc', color: 'text-blue-600', link: 'https://www.instagram.com/goodguyscollc/' },
                    { icon: Facebook, title: 'Project Feed', detail: 'Good Guys Co LLC', color: 'text-blue-800', link: 'https://www.facebook.com/profile.php?id=61573846273584' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6 group">
                      <div className={cn("w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-sm transition-all group-hover:bg-slate-900 group-hover:text-white", item.color)}>
                        <item.icon size={28} />
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-1">{item.title}</h4>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-slate-900 hover:text-orange-500 transition-colors">
                            {item.detail}
                          </a>
                        ) : (
                          <p className="text-xl font-bold text-slate-900">{item.detail}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partnership Checklist */}
              <div className="bg-slate-900 p-10 rounded-sm shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full" />
                <h3 className="text-2xl font-bold font-['Barlow_Condensed'] uppercase tracking-tight text-white mb-8 relative z-10">
                  Why Partner With Us?
                </h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    'Subcontractor-exclusive pricing structure.',
                    'Direct communication with Leo Anaya.',
                    'CIPP-certified rigs & field operators.',
                    'We respect your client relationships (100%).',
                    'High-definition diagnostic reports for your bid.'
                  ].map((check) => (
                    <li key={check} className="flex items-start gap-4">
                      <ShieldCheck className="text-orange-500 shrink-0 mt-1" size={18} />
                      <span className="text-slate-300 font-medium text-sm leading-snug">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-16 shadow-[0_64px_128px_-32px_rgba(0,0,0,0.15)] rounded-sm border border-slate-100 relative">
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 font-black font-['Barlow_Condensed'] uppercase tracking-widest text-xs rotate-3 shadow-xl">
                  Trade Inquiries Only
                </div>
                
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-24"
                  >
                    <div className="w-24 h-24 bg-blue-600 text-white rounded-sm flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-600/30">
                      <Send size={48} />
                    </div>
                    <h2 className="text-4xl font-bold font-['Barlow_Condensed'] uppercase tracking-tight text-slate-900 mb-4 leading-none">PROJECT BRIEF RECEIVED</h2>
                    <p className="text-slate-500 mb-10 max-w-sm mx-auto font-medium text-lg leading-relaxed">
                      We've received your project specs. A member of our crew will reach out shortly to discuss deployment.
                    </p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="px-10 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-sm hover:bg-orange-500 transition-all rounded-sm"
                    >
                      Send New Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="group">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block group-focus-within:text-orange-500 transition-colors">Point of Contact</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full px-6 py-4 bg-slate-50 border-b-4 border-slate-200 focus:border-orange-500 focus:outline-none transition-all text-slate-900 font-bold placeholder:font-medium"
                        />
                      </div>
                      <div className="group">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block group-focus-within:text-orange-500 transition-colors">Trade Business</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="Your Company Name" 
                          className="w-full px-6 py-4 bg-slate-50 border-b-4 border-slate-200 focus:border-orange-500 focus:outline-none transition-all text-slate-900 font-bold placeholder:font-medium"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="group">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block group-focus-within:text-orange-500 transition-colors">Phone Number</label>
                        <input 
                          required 
                          type="tel" 
                          placeholder="(555) 000-0000" 
                          className="w-full px-6 py-4 bg-slate-50 border-b-4 border-slate-200 focus:border-orange-500 focus:outline-none transition-all text-slate-900 font-bold placeholder:font-medium"
                        />
                      </div>
                      <div className="group">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block group-focus-within:text-orange-500 transition-colors">Project Region</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="e.g. Los Angeles, OC" 
                          className="w-full px-6 py-4 bg-slate-50 border-b-4 border-slate-200 focus:border-orange-500 focus:outline-none transition-all text-slate-900 font-bold placeholder:font-medium"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block group-focus-within:text-orange-500 transition-colors">Requested Capability</label>
                      <select className="w-full px-6 py-5 bg-slate-50 border-b-4 border-slate-200 focus:border-orange-500 focus:outline-none transition-all text-slate-900 font-bold appearance-none">
                        <option>CIPP Pipe Lining (Trenchless)</option>
                        <option>Industrial Hydro Jetting</option>
                        <option>Mechanical Scale Removal</option>
                        <option>Robotic Camera Inspection</option>
                        <option>Complete Line Diagnostic</option>
                        <option>Other / Multi-Service</option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block group-focus-within:text-orange-500 transition-colors">Project Specifications</label>
                      <textarea 
                        required 
                        rows={5} 
                        placeholder="Please describe the pipe diameter, material, and estimated length if known..." 
                        className="w-full px-6 py-4 bg-slate-50 border-b-4 border-slate-200 focus:border-orange-500 focus:outline-none transition-all text-slate-900 font-bold placeholder:font-medium resize-none"
                      />
                    </div>

                    <div className="pt-6">
                      <button 
                        disabled={formState === 'submitting'}
                        className="w-full py-8 bg-slate-950 text-white font-black uppercase tracking-[0.3em] hover:bg-orange-500 transition-all rounded-sm disabled:opacity-50 flex items-center justify-center gap-4 text-lg shadow-2xl"
                      >
                        {formState === 'submitting' ? 'PROCESING PROJECT BRIEF...' : 'SEND PROJECT INQUIRY'}
                        <Zap size={20} className="fill-current" />
                      </button>
                      <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400 mt-6">
                        Leo Anaya and the crew will review your specs within 2 hours during trade hours.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
