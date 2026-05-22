import { motion } from 'motion/react';
import { Play, Activity, Users, Clock, Star, ArrowRight, Zap, Target } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[110vh] w-full flex items-center pt-24 overflow-hidden bg-black">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=2070" 
            alt="Hanuman Strength Meditation" 
            className="w-full h-full object-cover brightness-[0.4] contrast-[1.1] saturate-[1.2]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80" />
      </div>

      {/* Floating Animated Energy Lines */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-pulse" />
        <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-magenta to-transparent animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-10 group cursor-default">
                 <div className="w-12 h-[1px] bg-neon-cyan shadow-[0_0_10px_#00f2ff]" />
                 <span className="text-neon-cyan text-[10px] font-black uppercase tracking-[0.8em] animate-pulse">Evolutionary Peak</span>
              </div>
              
              <h1 className="text-[10vw] md:text-[8vw] lg:text-[7vw] font-display font-black leading-[0.85] tracking-tighter mb-10 italic uppercase drop-shadow-[0_0_50px_rgba(0,0,0,1)]">
                BUILD YOUR<br />
                <span className="text-neon-cyan relative">
                  BEST BODY
                  <motion.div 
                    className="absolute -bottom-4 left-0 h-2 bg-neon-cyan shadow-[0_0_20px_#00f2ff] z-[-1]"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </span>
              </h1>
              
              <p className="max-w-xl text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-14 uppercase tracking-tighter">
                Train Hard. Stay Strong. <span className="text-white font-bold italic">Become Unstoppable.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <button className="group relative px-14 py-7 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all bg-neon-cyan text-black shadow-[0_0_40px_rgba(0,242,255,0.4)] hover:shadow-[0_0_60px_rgba(0,242,255,0.6)] neon-shadow-cyan">
                  <span className="relative z-10 flex items-center gap-3">
                    Join the elite <Zap size={16} className="fill-black" />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
                
                <button className="group px-14 py-7 border border-white/20 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] text-white hover:bg-white hover:text-black transition-all relative overflow-hidden">
                  <span className="relative z-10">Book Free Trial</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-cyan/50 rounded-2xl transition-all" />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 lg:block hidden">
             <div className="grid grid-cols-2 gap-6 perspective-1000">
                {[
                  { label: 'Active Members', value: '5000+', icon: Users, delay: 0.1 },
                  { label: 'Elite Trainers', value: '50+', icon: Target, delay: 0.2 },
                  { label: 'Service Access', value: '24/7', icon: Clock, delay: 0.3 },
                  { label: 'User Rating', value: '4.9/5', icon: Star, delay: 0.4 },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, rotateY: -30, x: 50 }}
                    animate={{ opacity: 1, rotateY: 0, x: 0 }}
                    transition={{ delay: 0.5 + stat.delay, duration: 0.8 }}
                    whileHover={{ y: -10, rotateY: 5 }}
                    className="glass-premium p-8 rounded-3xl border-white/5 flex flex-col gap-4 group"
                  >
                     <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-all text-sm">
                        <stat.icon />
                     </div>
                     <div>
                        <div className="text-3xl font-display font-black text-white">{stat.value}</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">{stat.label}</div>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] text-white/40 uppercase tracking-[0.5em] font-black">Initiate Scroll</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-neon-cyan to-transparent rounded-full shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
      </motion.div>
    </section>
  );
};
