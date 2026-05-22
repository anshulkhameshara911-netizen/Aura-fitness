import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, ArrowRight, User, Ruler, Weight } from 'lucide-react';

export const BMISection = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState('');

  const calculate = () => {
    if (!weight || !height) return;
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const result = w / (h * h);
    setBmi(parseFloat(result.toFixed(1)));

    if (result < 18.5) setStatus('Underweight');
    else if (result < 25) setStatus('Optimal');
    else if (result < 30) setStatus('Overweight');
    else setStatus('Extreme');
  };

  const getMeterColor = () => {
    if (!bmi) return 'bg-gray-800';
    if (bmi < 18.5) return 'bg-yellow-400';
    if (bmi < 25) return 'bg-neon-cyan';
    if (bmi < 30) return 'bg-orange-500';
    return 'bg-red-600';
  };

  return (
    <section id="bmi" className="py-32 bg-premium-black relative overflow-hidden">
      {/* Decorative background machine silhouette */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] scale-150 pointer-events-none">
        <Calculator size={800} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-neon-cyan text-[10px] font-black uppercase tracking-[0.5em] mb-4">Metric Analysis</div>
            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter italic leading-none mb-8">
              MEASURE TO<br />MANAGE.
            </h2>
            <p className="text-gray-400 max-w-sm mb-12">
              Body Mass Index is the first data point in your transformation architecture. 
              Precision leads to results.
            </p>

            <div className="space-y-6 max-w-sm">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <Weight size={18} />
                </div>
                <input
                  type="number"
                  placeholder="WEIGHT (KG)"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-6 outline-none focus:border-neon-cyan transition-all text-sm font-bold tracking-widest"
                />
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <Ruler size={18} />
                </div>
                <input
                  type="number"
                  placeholder="HEIGHT (CM)"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-6 outline-none focus:border-neon-cyan transition-all text-sm font-bold tracking-widest"
                />
              </div>
              <button 
                onClick={calculate}
                className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-neon-cyan transition-all group overflow-hidden relative shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Calculate Metrics <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-neon-cyan translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {bmi ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                className="glass-premium p-12 rounded-[40px] text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Calculator size={160} />
                </div>
                
                <div className="text-neon-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4">Analytical Result</div>
                <div className="text-s text-gray-500 font-black mb-2">SCORE</div>
                <div className="text-[120px] font-display font-black leading-none text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  {bmi}
                </div>
                <div className={`inline-block px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 ${getMeterColor()} text-black`}>
                  Status: {status}
                </div>
                
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-12">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((bmi / 40) * 100, 100)}%` }}
                    className={`h-full ${getMeterColor()}`}
                  />
                </div>
                
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                  Recommended: Consult our Bio-Analysts for a custom protocol.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-2 border-dashed border-white/5 rounded-[40px] h-[450px] flex items-center justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-gray-700 uppercase tracking-[0.5em] font-black text-xs">Waiting for bio-data...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
