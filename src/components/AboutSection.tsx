import { motion } from 'motion/react';
import { Target, Users, Zap, Award, ArrowRight } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-premium-black">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=2070" 
                alt="Gym Architecture" 
                className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-transparent to-transparent opacity-80" />
              
              {/* Floating Achievement Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 -right-10 glass-premium p-6 rounded-3xl border-neon-cyan/30 backdrop-blur-xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neon-cyan/20 flex items-center justify-center text-neon-cyan">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-xl font-display font-black text-white">#1 ELITE</div>
                    <div className="text-[8px] text-gray-500 uppercase font-black tracking-widest">Bhilwara Ranking</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 -left-10 glass-premium p-6 rounded-3xl border-neon-magenta/30 backdrop-blur-xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neon-magenta/20 flex items-center justify-center text-neon-magenta">
                    <Target size={24} />
                  </div>
                  <div>
                    <div className="text-xl font-display font-black text-white">2.5K+</div>
                    <div className="text-[8px] text-gray-500 uppercase font-black tracking-widest">Target Reached</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Rotating ring behind image */}
            <div className="absolute -inset-10 border border-white/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-20 border border-white/5 rounded-full animate-[spin_120s_linear_infinite_reverse] pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-neon-cyan text-[10px] font-black uppercase tracking-[0.8em] mb-6 block">Our Heritage</div>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter italic uppercase text-white leading-none mb-10">
              REDEFINING<br /><span className="text-gradient-premium">PEAK HUMANITY.</span>
            </h2>
            
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 uppercase tracking-tighter">
              Aura Fitness Bhilwara isn&apos;t just a gym; it&apos;s a high-performance lab where biology meets cutting-edge engineering. 
              Our story began with a simple mission: To bring international standards of fitness and recovery to India.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
               <div className="glass-premium p-8 rounded-3xl border-white/5 group hover:border-neon-cyan/30 transition-all">
                  <div className="text-4xl font-display font-black text-white mb-2 group-hover:text-neon-cyan transition-colors">10Y+</div>
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Industry Mastery</div>
               </div>
               <div className="glass-premium p-8 rounded-3xl border-white/5 group hover:border-neon-magenta/30 transition-all">
                  <div className="text-4xl font-display font-black text-white mb-2 group-hover:text-neon-magenta transition-colors">50+</div>
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Expert Coaches</div>
               </div>
            </div>

            <button className="flex items-center gap-4 group text-neon-cyan text-[10px] font-black uppercase tracking-[0.5em] hover:gap-6 transition-all">
              Initiate Your Story <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
