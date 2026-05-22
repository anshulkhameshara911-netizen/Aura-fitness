import { motion } from 'motion/react';
import { TrendingUp, Flame } from 'lucide-react';
import { useState, useRef, useMemo } from 'react';

export const TransformationSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const currentStats = useMemo(() => {
    const progress = sliderPosition / 100;
    return {
      fat: (25 - progress * 17).toFixed(1), // 25% down to 8%
      muscle: (65 + progress * 20).toFixed(1), // 65kg up to 85kg
      power: Math.floor(40 + progress * 560), // Bench/Deadlift score
    };
  }, [sliderPosition]);

  return (
    <section id="transformations" className="relative h-screen w-full bg-black overflow-hidden flex flex-col group/section">
      {/* Dynamic Data Overlays */}
      <div className="absolute top-32 left-10 md:left-20 z-40 space-y-8 pointer-events-none">
        <motion.div animate={{ opacity: sliderPosition < 30 ? 1 : 0.3 }} className="glass-premium p-6 rounded-2xl border-white/5 w-48">
          <div className="text-[8px] text-gray-500 uppercase tracking-widest font-black mb-1">Status: Baseline</div>
          <div className="text-2xl font-display font-bold text-white uppercase italic">Initial State</div>
        </motion.div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/30">
               <TrendingUp className="text-neon-cyan" size={20} />
             </div>
             <div>
               <div className="text-[10px] text-white/40 uppercase font-black tracking-widest">Strength Score</div>
               <div className="text-3xl font-display font-black text-white">{currentStats.power}<span className="text-xs text-neon-cyan ml-1">LVL</span></div>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-neon-magenta/20 flex items-center justify-center border border-neon-magenta/30">
               <Flame className="text-neon-magenta" size={20} />
             </div>
             <div>
               <div className="text-[10px] text-white/40 uppercase font-black tracking-widest">Body Fat</div>
               <div className="text-3xl font-display font-black text-white">{currentStats.fat}<span className="text-xs text-neon-magenta ml-1">%</span></div>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute top-32 right-10 md:right-20 z-40 pointer-events-none text-right">
        <motion.div animate={{ opacity: sliderPosition > 70 ? 1 : 0.3 }} className="glass-premium p-6 rounded-2xl border-neon-cyan/20 w-48 ml-auto">
          <div className="text-[8px] text-neon-cyan uppercase tracking-widest font-black mb-1">Status: Elite</div>
          <div className="text-2xl font-display font-bold text-white uppercase italic tracking-tighter">Bio-Legend</div>
        </motion.div>
      </div>

      {/* Main Split Screen */}
      <div 
        ref={sliderRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        className="relative flex-grow w-full cursor-col-resize overflow-hidden"
      >
        {/* BEFORE IMAGE (LEFT) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548690312-e3b507d17a47?auto=format&fit=crop&q=80&w=2070" 
            alt="Before Transformation" 
            className="w-full h-full object-cover grayscale brightness-[0.4] contrast-125 blur-[2px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>

        {/* AFTER IMAGE (RIGHT) */}
        <div 
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=2070" 
            alt="After Transformation" 
            className="w-full h-full object-cover saturate-[1.5] contrast-[1.1] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-neon-cyan/10 via-transparent to-transparent" />
        </div>

        {/* THE TRANSFORMATION LINE */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="h-full w-full bg-neon-cyan shadow-[0_0_30px_#00f2ff,0_0_60px_#00f2ff]" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 pointer-events-auto rounded-full group cursor-grab active:cursor-grabbing">
             <div className="absolute inset-0 glass-dark rounded-full border border-white/20 flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
               <div className="flex gap-2">
                  <div className="w-1 h-8 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_10px_#00f2ff]" />
                  <div className="w-1 h-8 bg-neon-cyan rounded-full animate-pulse delay-75 shadow-[0_0_10px_#00f2ff]" />
                  <div className="w-1 h-8 bg-neon-cyan rounded-full animate-pulse delay-150 shadow-[0_0_10px_#00f2ff]" />
               </div>
             </div>
             <div className="absolute inset-[-20px] bg-neon-cyan/10 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="absolute bottom-20 left-10 md:left-20 z-30 pointer-events-none">
           <div className="relative">
              <span className="text-neon-cyan text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Transformation Archive</span>
              <h3 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter italic uppercase leading-none">
                THE AURA<br /><span className="text-gradient-premium">EVOLUTION.</span>
              </h3>
           </div>
        </div>
      </div>
    </section>
  );
};
