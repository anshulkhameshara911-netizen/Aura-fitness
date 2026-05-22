import { motion } from 'motion/react';
import { Dumbbell, Flame, Activity, Wind, Layers, Target, ArrowUpRight } from 'lucide-react';

export const ProgramsSection = () => {
  const programs = [
    { title: 'Strength Training', icon: Dumbbell, desc: 'Hypertrophy protocols for maximal force generation.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800' },
    { title: 'Fat Loss', icon: Flame, desc: 'Metabolic conditioning to shred layers and reveal muscle.', img: 'https://images.unsplash.com/photo-1549476464-37392f719918?auto=format&fit=crop&q=80&w=800' },
    { title: 'Cardio Systems', icon: Activity, desc: 'Endurance systems for elite cardiovascular longevity.', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800' },
    { title: 'Zen Yoga', icon: Wind, desc: 'Unlocking range of motion and mental equilibrium.', img: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80&w=800' },
    { title: 'Elite CrossFit', icon: Layers, desc: 'Functional high-intensity movements across domains.', img: 'https://images.unsplash.com/photo-1533560279664-4bbcd1d83025?auto=format&fit=crop&q=80&w=800' },
    { title: 'Pro Coaching', icon: Target, desc: 'One-on-one bio-coaching for accelerated results.', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section id="programs" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-cyan text-[10px] font-black uppercase tracking-[0.8em] mb-4 block">Specialized Protocols</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter italic uppercase text-white leading-none">
              FORGED IN<br /><span className="text-gradient-premium">PRECISION.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="group relative h-[500px] rounded-[40px] overflow-hidden glass-premium border-white/5"
            >
              <img 
                src={prog.img} 
                alt={prog.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-50 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-neon-cyan group-hover:text-black transition-all">
                  <prog.icon size={32} />
                </div>
                <h3 className="text-3xl font-display font-black text-white italic uppercase tracking-tighter mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {prog.title}
                </h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {prog.desc}
                </p>
                
                <div className="absolute top-8 right-8 border border-white/20 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-neon-cyan group-hover:border-neon-cyan transition-all opacity-0 group-hover:opacity-100 group-hover:rotate-45 duration-500">
                  <ArrowUpRight size={24} className="text-white group-hover:text-black" />
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
