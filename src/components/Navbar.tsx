import { motion, AnimatePresence } from 'motion/react';
import { Zap, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Experience', href: '#experience' },
    { name: 'Performance', href: '#programs' },
    { name: 'Membership', href: '#pricing' },
    { name: 'Coaching', href: '#trainers' },
    { name: 'Transformation', href: '#transformations' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 glass-dark border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-12 h-12 bg-neon-cyan rounded-xl flex items-center justify-center shadow-[0_0_20px_#00f2ff] group-hover:rotate-12 transition-transform">
            <Zap className="text-black fill-black" size={24} />
          </div>
          <span className="text-3xl font-display font-black tracking-tighter text-white italic">AURA<span className="text-neon-cyan">FIT.</span></span>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item, i) => (
            <motion.a 
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-neon-cyan transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            href="#pricing"
            className="px-8 py-3 bg-white text-black rounded-full font-display font-black italic uppercase tracking-widest text-[10px] hover:bg-neon-cyan transition-all transform active:scale-95"
          >
            Initiate Access
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black z-[90] flex flex-col items-center justify-center gap-12"
          >
            <div className="absolute top-10 left-10 opacity-30">
               <Zap className="text-neon-cyan" size={100} />
            </div>
            
            {navItems.map((item, i) => (
              <motion.a 
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-display font-black italic uppercase tracking-tighter text-white hover:text-neon-cyan transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            
            <a 
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="mt-8 px-12 py-6 bg-neon-cyan text-black rounded-full font-display font-black italic uppercase tracking-widest"
            >
              Join the elite
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
