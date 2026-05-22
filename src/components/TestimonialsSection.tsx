import { motion } from 'motion/react';
import { Star, Quote, User, Activity, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    { 
      name: 'Karan Malik', 
      result: '-15kg Peak Shift', 
      comment: 'The metabolic precision at Aura is unparalleled. I didn&apos;t just lose weight; I redesigned my entire metabolic architecture.', 
      rating: 5,
      avatar: 'KM'
    },
    { 
      name: 'Sofia Khan', 
      result: 'Apex Strength Shift', 
      comment: 'The community here drives you to limits you didn&apos;t know existed. The environment alone adds 10kg to your bench.', 
      rating: 5,
      avatar: 'SK'
    },
    { 
      name: 'Rohan Gupta', 
      result: '+8kg Lean Mass', 
      comment: 'Finally, a facility that treats training like a high-end sport. The recovery protocols in the Elysium suite are life-changing.', 
      rating: 5,
      avatar: 'RG'
    }
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 bg-black relative overflow-hidden">
      {/* Moving background text */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
         <motion.div 
           animate={{ x: [0, -1000] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="text-[250px] font-display font-black whitespace-nowrap italic uppercase"
         >
           ELITE TESTIMONY SYSTEM ELITE TESTIMONY SYSTEM
         </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-cyan text-[10px] font-black uppercase tracking-[0.8em] mb-4 block">Biosync Feedback</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter italic uppercase text-white leading-none">
              SUCCESS STORIES<br /><span className="text-gradient-premium">TRANSCENDED.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex overflow-hidden">
             {testimonials.map((test, i) => (
                <motion.div
                  key={i}
                  animate={{ x: `-${activeIndex * 100}%`, opacity: activeIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="min-w-full glass-premium p-12 md:p-20 rounded-[60px] border-white/5 relative group shrink-0 shadow-2xl"
                >
                   <Quote className="absolute top-12 right-12 text-neon-cyan/10 group-hover:text-neon-cyan/20 transition-all duration-700" size={100} />
                   
                   <div className="flex gap-2 mb-10">
                      {[...Array(test.rating)].map((_, idx) => (
                        <Star key={idx} size={20} className="text-neon-cyan fill-neon-cyan drop-shadow-[0_0_10px_#00f2ff]" />
                      ))}
                   </div>
                   
                   <p className="text-2xl md:text-4xl text-gray-200 font-light leading-[1.3] mb-12 italic uppercase tracking-tighter">
                     &quot;{test.comment}&quot;
                   </p>
                   
                   <div className="flex items-center gap-8">
                      <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-neon-cyan border border-white/10 text-xl font-display font-black">
                         {test.avatar}
                      </div>
                      <div>
                         <h4 className="text-2xl font-display font-black text-white italic uppercase tracking-tighter leading-none mb-2">{test.name}</h4>
                         <div className="flex items-center gap-2">
                            <Activity size={12} className="text-neon-cyan" />
                            <span className="text-[10px] text-neon-cyan uppercase font-black tracking-widest">{test.result}</span>
                         </div>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-12 gap-6">
             <button onClick={prev} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                <ArrowLeft size={24} />
             </button>
             <button onClick={next} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                <ArrowRight size={24} />
             </button>
          </div>
          
          {/* Progress Markers */}
          <div className="flex justify-center mt-10 gap-3">
             {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  className={`h-1 transition-all rounded-full ${activeIndex === i ? 'w-12 bg-neon-cyan shadow-[0_0_10px_#00f2ff]' : 'w-4 bg-white/10'}`} 
                />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
