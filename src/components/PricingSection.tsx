import { motion } from 'motion/react';
import { Check, Zap, Shield, Crown, Sparkles } from 'lucide-react';

export const PricingSection = () => {
  const plans = [
    {
      name: 'Essential',
      price: '1,999',
      icon: Zap,
      features: ['24/7 Global Access', 'Standard Bio-Metrics', 'Elite Gym Floor', 'Locker Service'],
      color: 'white',
      neon: 'shadow-none'
    },
    {
      name: 'Apex',
      price: '3,999',
      icon: Shield,
      features: ['Personal Bio-Analyst', 'Private Recovery Suite', 'Custom Supplements', 'All Apex Coaching', 'Priority Equipment'],
      popular: true,
      color: 'neon-cyan',
      neon: 'neon-shadow-cyan'
    },
    {
      name: 'Elysium',
      price: '9,999',
      icon: Crown,
      features: ['Dedicated Concierge', 'Neuro-Sync Coaching', 'Home Gym Integration', 'Exclusive Invitations', 'Private Training Bay'],
      color: 'neon-magenta',
      neon: 'neon-shadow-magenta'
    }
  ];

  return (
    <section id="membership" className="py-32 bg-premium-black relative">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-neon-cyan/5 blur-[150px] rounded-full pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <div className="text-neon-cyan text-[10px] font-black uppercase tracking-[0.6em] mb-4">Investment Tiers</div>
                <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter italic uppercase text-gradient-premium">
                  CHOOSE YOUR<br />EVOLUTION.
                </h2>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`relative glass-premium p-10 rounded-[40px] flex flex-col border-white/5 transition-all duration-500 overflow-hidden group ${plan.popular ? 'border-neon-cyan/30 bg-white/[0.04]' : 'hover:border-white/20'}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-neon-cyan text-black px-6 py-2 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_#00f2ff]">
                      Most Selected
                    </div>
                  )}

                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/10 ${plan.popular ? 'text-neon-cyan border-neon-cyan/30' : 'text-white'}`}>
                    <plan.icon size={32} />
                  </div>

                  <h3 className={`text-3xl font-display font-bold mb-2 uppercase italic ${plan.popular ? 'text-neon-cyan' : plan.name === 'Elysium' ? 'text-neon-magenta text-glow-cyan' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-3xl font-display font-bold">₹</span>
                    <span className="text-7xl font-display font-black tracking-tighter">{plan.price}</span>
                    <span className="text-gray-500 text-xs font-black uppercase tracking-widest ml-2">/ month</span>
                  </div>

                  <div className="space-y-4 mb-12 flex-grow">
                     {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                           <div className={`p-1 rounded-full ${plan.popular ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-white/10 text-white'}`}>
                              <Check size={12} />
                           </div>
                           {feature}
                        </div>
                     ))}
                  </div>

                  <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all relative overflow-hidden group/btn ${
                    plan.popular 
                      ? 'bg-neon-cyan text-black shadow-[0_0_30px_rgba(0,242,255,0.4)]' 
                      : plan.name === 'Elysium'
                      ? 'bg-neon-magenta text-white shadow-[0_0_30px_rgba(255,0,229,0.3)]'
                      : 'bg-white text-black hover:bg-neon-cyan'
                  }`}>
                    <span className="relative z-10">Initiate Membership</span>
                    <motion.div 
                      className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" 
                    />
                  </button>
                  
                  {/* Decorative background circle */}
                  <div className={`absolute -bottom-20 -right-20 w-64 h-64 blur-[100px] rounded-full mix-blend-screen opacity-10 pointer-events-none transition-all duration-1000 group-hover:scale-125 ${
                    plan.popular ? 'bg-neon-cyan' : plan.name === 'Elysium' ? 'bg-neon-magenta' : 'bg-white'
                  }`} />
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
};
