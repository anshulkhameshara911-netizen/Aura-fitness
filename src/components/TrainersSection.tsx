import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Star, ArrowUpRight } from 'lucide-react';

export const TrainersSection = () => {
  const trainers = [
    { name: 'Vikram Singh', role: 'Apex Pro Coach', specialty: 'Advanced Biomechanics', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800' },
    { name: 'Aditi Sharma', role: 'Physiological Specialist', specialty: 'Metabolic Conditioning', img: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&q=80&w=800' },
    { name: 'Aryan Verma', role: 'Elite Combat Coach', specialty: 'Functional Strength', img: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section id="trainers" className="py-32 relative bg-premium-black overflow-hidden">
      {/* Background machine silhouette */}
      <div className="absolute top-0 right-0 opacity-[0.02] -rotate-12 pointer-events-none scale-150">
        <Star size={800} strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <span className="text-neon-cyan text-[10px] font-black uppercase tracking-[0.8em] mb-4 block">Biological Engineers</span>
              <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter italic uppercase text-white leading-none">
                MEET THE<br /><span className="text-gradient-premium">MASTERS.</span>
              </h2>
           </motion.div>
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-gray-500 max-w-xs text-right text-xs uppercase tracking-widest font-black"
           >
              Architects of the human form, trained in neuro-metrics and peak athletic performance.
           </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className="relative h-[600px] rounded-[50px] overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-neon-cyan/50 perspective-1000">
                <img 
                  src={trainer.img} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 brightness-50 group-hover:brightness-75" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Neon Border Trail Animation */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-cyan/40 rounded-[50px] transition-all duration-1000" />
                
                <div className="absolute bottom-10 left-10 right-10 z-20">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-3 bg-neon-cyan/10 backdrop-blur-md rounded-2xl border border-neon-cyan/20 w-fit mb-4"
                  >
                    <span className="text-neon-cyan text-[10px] font-black uppercase tracking-widest">{trainer.role}</span>
                  </motion.div>
                  <h4 className="text-4xl font-display font-black text-white italic uppercase tracking-tighter mb-4">{trainer.name}</h4>
                  
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
                      <button key={idx} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-neon-cyan hover:text-black transition-all border border-white/10">
                        <Icon size={20} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                   <div className="w-14 h-14 rounded-full bg-neon-cyan flex items-center justify-center text-black shadow-[0_0_30px_#00f2ff] animate-pulse">
                      <ArrowUpRight size={24} />
                   </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 glass-premium px-8 py-4 rounded-3xl border-white/10 z-30 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Specialization</div>
                <div className="text-sm font-bold text-white italic">{trainer.specialty}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
