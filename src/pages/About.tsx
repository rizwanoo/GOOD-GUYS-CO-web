import { motion } from 'motion/react';
import { ShieldCheck, Truck, Users, HardHat, Target, Drill as Tool, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-orange-500" />
                <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">Our Identity</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-['Barlow_Condensed'] uppercase tracking-tighter leading-[0.8] text-slate-900 mb-10">
                THE CREW <br />
                <span className="text-blue-600">BEHIND THE</span> <br />
                <span className="text-orange-500 italic underline decoration-blue-600 underline-offset-8 decoration-8">CLEARANCE.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed mb-10 font-medium">
                Good Guys Co. was forged with a singular mission: to provide the Southern California plumbing trade with high-end trenchless technology and the technical mastery required to solve the most complex underground failures.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-10 border-t border-slate-100">
                <div>
                  <div className="text-5xl font-black font-['Barlow_Condensed'] text-slate-900 leading-none">100%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Contractor Support</div>
                </div>
                <div>
                  <div className="text-5xl font-black font-['Barlow_Condensed'] text-slate-900 leading-none">SoCal</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Coverage Area</div>
                </div>
                <div className="hidden md:block">
                  <div className="text-5xl font-black font-['Barlow_Condensed'] text-slate-900 leading-none">CIPP</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Specialists</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] bg-slate-100 overflow-hidden rounded-sm shadow-2xl relative z-10 border-[16px] border-white">
                <img 
                  src="/assets/images/industrial_equipment_showcase_1794045178057.jpg" 
                  alt="Good Guys Co. Fleet" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/5 -z-0 border border-orange-500/10" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-orange-500 -z-10 rounded-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold font-['Barlow_Condensed'] uppercase tracking-tighter mb-8 leading-none">
              A PARTNERSHIP BUILT <br />
              <span className="text-orange-500">ON THE TRADE.</span>
            </h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Target,
                title: 'No Conflict Policy',
                desc: 'We never compete for your service calls. We are your technical backup, not your competitor. You keep the relationship, we provide the results.'
              },
              {
                icon: ShieldCheck,
                title: 'Proven Workmanship',
                desc: 'Led by industry veterans, our field operations are executed with precision, ensuring that every CIPP liner and jetting job meets high-spec standards.'
              },
              {
                icon: Award,
                title: 'Certified Fleet',
                desc: 'Our million-dollar fleet is equipped with the latest diagnostic and rehabilitation tech, giving you a competitive edge without the overhead.'
              }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-6 group"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 text-orange-500 flex items-center justify-center rounded-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <value.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold font-['Barlow_Condensed'] uppercase tracking-tight text-white leading-none">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Founder Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img src="/assets/images/cipp_pipe_lining_1794045178085.jpg" alt="Field Work" className="rounded-sm aspect-square object-cover grayscale" />
                  <img src="/assets/images/hydro_jetting_1794045177206.jpg" alt="Field Work" className="rounded-sm aspect-[3/4] object-cover grayscale" />
                </div>
                <div className="space-y-6 pt-12">
                  <img src="/assets/images/sewer_camera_inspection_1794045178029.jpg" alt="Field Work" className="rounded-sm aspect-[3/4] object-cover grayscale" />
                  <img src="/assets/images/mechanical_descaling_1794045177740.jpg" alt="Field Work" className="rounded-sm aspect-square object-cover grayscale" />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col gap-10">
              <div className="space-y-4">
                <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">Field Operations</span>
                <h2 className="text-5xl md:text-7xl font-bold font-['Barlow_Condensed'] uppercase tracking-tighter leading-none text-slate-900">
                  LEADERSHIP <br />
                  <span className="text-blue-600">IN THE TRENCH.</span>
                </h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Founder Leo Anaya brings a decade of field-first experience to every project. Good Guys Co. isn't just about the equipment—it's about the technical intuition required to navigate the most complex Southern California sewer systems.
              </p>
              
              <div className="space-y-6">
                <div className="p-8 bg-slate-50 border-l-8 border-orange-500 rounded-sm">
                  <p className="text-lg text-slate-900 font-bold italic leading-relaxed">
                    "We built this company to be the partner I wish I had when I was in the field. Precision technology combined with trade-focused respect."
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-full font-black">LA</div>
                    <div>
                      <div className="font-black text-slate-900 uppercase tracking-tight">Leo Anaya</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Founder & Lead Operator</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-slate-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-8xl font-bold font-['Barlow_Condensed'] text-white uppercase tracking-tighter mb-12 leading-[0.85]">
            THE RIGHT CREW <br />
            <span className="text-orange-500">IS JUST A CALL AWAY.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="px-12 py-6 bg-orange-500 text-white font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all rounded-sm text-lg shadow-2xl shadow-orange-500/20">
              Request Partnership Info
            </a>
            <a href="/services" className="px-12 py-6 bg-white/5 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all rounded-sm text-lg">
              Explore Our Arsenal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
