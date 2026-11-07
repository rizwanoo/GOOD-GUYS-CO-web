import { motion } from 'motion/react';
import { Shield, Droplets, Drill as Tool, Camera, ArrowRight, CheckCircle2, Zap, Cog, Activity, Binary } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICE_DETAILS = [
  {
    id: 'cipp',
    title: 'CIPP Pipe Lining',
    subtitle: 'Structural Trenchless Rehab',
    desc: 'Cured-In-Place Pipe (CIPP) lining is the gold standard of trenchless technology. We install a resin-saturated flexible liner that cures into a seamless, jointless, and structurally independent new pipe within the old one.',
    techSpecs: [
      { label: 'Lifespan', val: '50+ Years' },
      { label: 'Curing', val: 'Ambient or Steam' },
      { label: 'Materials', val: 'Epoxy / Vinyl Ester' }
    ],
    benefits: [
      'Stops root intrusion permanently',
      'Zero destructive excavation required',
      'Minimizes property disruption',
      'Optimal flow coefficient increase'
    ],
    image: '/src/assets/images/cipp_pipe_lining_1794045178085.jpg',
    icon: Shield,
    color: 'border-orange-500'
  },
  {
    id: 'hydro',
    title: 'Hydro Jetting',
    subtitle: 'Industrial Flow Restoration',
    desc: 'Our high-PSI hydro jetting rigs blast through the most stubborn obstructions. From heavy grease buildup to aggressive root systems, we scour the pipe walls back to bare material.',
    techSpecs: [
      { label: 'Pressure', val: 'Up to 4000 PSI' },
      { label: 'Flow Rate', val: '18 GPM+' },
      { label: 'Range', val: '500ft Distance' }
    ],
    benefits: [
      'Restores full pipe diameter',
      'Chemical-free cleaning process',
      'Prevents future accumulation',
      'Critical for CIPP preparation'
    ],
    image: '/src/assets/images/hydro_jetting_1794045177206.jpg',
    icon: Droplets,
    color: 'border-blue-600'
  },
  {
    id: 'descale',
    title: 'Mechanical Descaling',
    subtitle: 'Cast Iron Revitalization',
    desc: 'We use specialized rotating chain-knockers to strip corrosion, scale, and calcium from aged cast iron lines, saving thousands in replacement costs.',
    techSpecs: [
      { label: 'Tooling', val: 'Chain Knockers' },
      { label: 'Rotation', val: 'Variable RPM' },
      { label: 'Surface', val: 'Polished Finish' }
    ],
    benefits: [
      'Revitalizes aged cast iron',
      'Removes hardened deposits',
      'Prevents snag-related clogs',
      'Alternative to full replacement'
    ],
    image: '/src/assets/images/mechanical_descaling_1794045177740.jpg',
    icon: Tool,
    color: 'border-slate-500'
  },
  {
    id: 'camera',
    title: 'Sewer Camera Inspections',
    subtitle: 'HD Precision Diagnostics',
    desc: 'Precision starts with visibility. Our robotic crawler cameras provide 4K diagnostic data, allowing for exact mapping and project estimation.',
    techSpecs: [
      { label: 'Resolution', val: '4K Ultra HD' },
      { label: 'Mapping', val: 'Digital Sonar' },
      { label: 'Reporting', val: 'Cloud Delivery' }
    ],
    benefits: [
      'Accurate depth & location',
      'Verifiable condition proof',
      'Pre- & Post-work verification',
      'Cloud-accessible reporting'
    ],
    image: '/src/assets/images/sewer_camera_inspection_1794045178029.jpg',
    icon: Camera,
    color: 'border-orange-600'
  }
];

export default function Services() {
  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-slate-950 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/src/assets/images/industrial_equipment_showcase_1794045178057.jpg" alt="Background" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Trade Expertise</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-['Barlow_Condensed'] text-white uppercase tracking-tighter leading-[0.85] mb-8">
              OUR <span className="text-orange-500">ARSENAL.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-2xl">
              Specialized industrial technology designed to solve the most complex underground infrastructure challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-32"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-48">
            {SERVICE_DETAILS.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 gap-16 items-start",
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Content Side */}
                <div className={cn(
                  "lg:col-span-6 flex flex-col gap-10",
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                )}>
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-slate-900 text-orange-500 flex items-center justify-center rounded-sm shrink-0 shadow-xl">
                      <service.icon size={40} />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">{service.subtitle}</span>
                      <h2 className="text-4xl md:text-6xl font-bold font-['Barlow_Condensed'] uppercase tracking-tight text-slate-900 leading-none mt-1">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    {service.desc}
                  </p>

                  {/* Tech Specs Table */}
                  <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50 border border-slate-100 rounded-sm">
                    {service.techSpecs.map((spec) => (
                      <div key={spec.label}>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{spec.label}</div>
                        <div className="text-sm font-bold text-slate-900 uppercase">{spec.val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Key Outcomes</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3 group">
                          <div className="w-6 h-6 bg-orange-500/10 text-orange-500 flex items-center justify-center rounded-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            <CheckCircle2 size={14} />
                          </div>
                          <span className="text-sm font-bold uppercase tracking-wide text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link to="/contact" className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-sm hover:bg-orange-500 transition-all rounded-sm shadow-xl hover:shadow-orange-500/20">
                      Inquire About {service.title}
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                {/* Image Side */}
                <div className={cn(
                  "lg:col-span-6 relative",
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                )}>
                  <div className={cn(
                    "aspect-[16/11] overflow-hidden rounded-sm border-l-[12px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]",
                    service.color
                  )}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                  {/* Decorative Industrial Pattern */}
                  <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Highlights */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-32 bg-slate-950"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Cog, title: 'Modular Rigs', desc: 'Custom fleets for any site.' },
              { icon: Activity, title: 'Real-time Telemetry', desc: 'Live data during rehab.' },
              { icon: Binary, title: 'Cloud Reports', desc: 'Instant project verification.' },
              { icon: Zap, title: 'Rapid Deployment', desc: 'Fast turnaround in SoCal.' },
            ].map((tech, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 rounded-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <tech.icon size={32} />
                </div>
                <h4 className="text-white font-bold uppercase tracking-tight mb-2">{tech.title}</h4>
                <p className="text-slate-500 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final Conversion */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-40 bg-orange-500 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold font-['Barlow_Condensed'] text-white uppercase tracking-tighter mb-12 leading-[0.85]">
            HAVE A PROJECT <br />
            THAT NEEDS THE <span className="text-slate-900">RIGHT CREW?</span>
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex px-16 py-8 bg-slate-900 text-white font-black uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all rounded-sm gap-4 shadow-2xl text-lg"
          >
            Get a Technical Quote <ArrowRight size={24} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
