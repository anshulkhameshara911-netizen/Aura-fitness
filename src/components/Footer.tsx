import { motion } from 'motion/react';
import { Zap, Instagram, Twitter, Facebook, Youtube, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-12 relative overflow-hidden">
      {/* Animated waves/lines at top */}
      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden pointer-events-none opacity-20">
         <motion.div 
           animate={{ x: [0, -100] }}
           transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
           className="flex gap-4"
         >
           {Array.from({ length: 40 }).map((_, i) => (
             <div key={i} className="w-1 h-32 bg-neon-cyan/20 rotate-[20deg]" />
           ))}
         </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-10 group cursor-pointer w-fit">
              <div className="w-16 h-16 bg-neon-cyan rounded-2xl flex items-center justify-center shadow-[0_0_20px_#00f2ff] group-hover:rotate-12 transition-transform">
                <Zap className="text-black fill-black" size={32} />
              </div>
              <span className="text-5xl font-display font-black tracking-tighter text-white italic">AURA<span className="text-neon-cyan">FITNESS.</span></span>
            </div>
            <p className="text-gray-500 max-w-sm text-lg font-light leading-relaxed mb-10 uppercase tracking-tighter">
              Bhilwara&apos;s apex facility for human evolution. We don&apos;t just build bodies; we re-engineer legends.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-neon-cyan hover:text-black transition-all">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <div>
             <h4 className="text-white font-display font-black italic uppercase tracking-widest text-sm mb-10">Navigation</h4>
             <ul className="space-y-4">
                {['Home', 'Experience', 'Performance', 'Membership', 'Coaching', 'Transformations'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.2em] flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-4 h-[1px] bg-neon-cyan transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="text-white font-display font-black italic uppercase tracking-widest text-sm mb-10">Protocols</h4>
             <div className="space-y-6">
                <div className="glass-premium p-6 rounded-3xl border-white/5 group hover:border-neon-cyan/20 transition-all cursor-pointer">
                   <div className="text-[8px] text-neon-cyan uppercase font-black tracking-widest mb-1">Newsletter</div>
                   <div className="flex items-center justify-between">
                      <span className="text-white font-display italic uppercase tracking-tighter">Get Weekly Intel</span>
                      <ArrowRight size={16} className="text-gray-500 group-hover:translate-x-2 transition-transform" />
                   </div>
                </div>
                <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest leading-relaxed">
                   Mon - Sat: 05:00 - 23:00<br />
                   Sun: 08:00 - 15:00
                </div>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-[8px] text-gray-700 uppercase font-black tracking-[0.4em]">
             &copy; 2026 AURA FITNESS SYSTEMS. ALL RIGHTS RESERVED.
           </div>
           <div className="flex gap-8 text-[8px] text-gray-700 uppercase font-black tracking-[0.4em]">
              <a href="#" className="hover:text-neon-cyan transition-colors">Privacy Protocol</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Licensing</a>
           </div>
        </div>
      </div>
      
      {/* Footer Glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-screen h-64 bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};
