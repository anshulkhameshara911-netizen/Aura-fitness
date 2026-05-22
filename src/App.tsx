import { motion, useScroll, useSpring } from 'motion/react';
import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { PricingSection } from './components/PricingSection';
import { TransformationSection } from './components/TransformationSection';
import { TrainersSection } from './components/TrainersSection';
import { BMISection } from './components/BMISection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { AIAssistant } from './components/AIAssistant';
import { ParticleBackground } from './components/ParticleBackground';
import { MessageCircle, Phone, Zap } from 'lucide-react';

const FloatingCTAs = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
       <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-transform border border-white/20"
       >
          <MessageCircle className="text-white fill-white" size={32} />
       </motion.a>
       <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:+919876543210" 
          className="w-16 h-16 bg-neon-cyan rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-transform border border-white/20"
       >
          <Phone className="text-black fill-black" size={32} />
       </motion.a>
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center"
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-24 h-24 bg-neon-cyan rounded-3xl flex items-center justify-center shadow-[0_0_50px_#00f2ff] mb-8"
      >
        <Zap className="text-black fill-black" size={48} />
      </motion.div>
      <div className="text-4xl font-display font-black text-white italic tracking-tighter uppercase mb-4">
        AURA<span className="text-neon-cyan">FITNESS.</span>
      </div>
      <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-full bg-neon-cyan shadow-[0_0_10px_#00f2ff]"
        />
      </div>
      <div className="mt-4 text-[10px] text-gray-500 uppercase font-black tracking-[0.5em] animate-pulse">Synchronizing Bio-Metrics...</div>
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      
      <div className="bg-black text-white selection:bg-neon-cyan selection:text-black min-h-screen font-sans antialiased overflow-x-hidden relative">
        <ParticleBackground />
        <div className="scanline" />
        
        {/* Fixed Hanuman Background */}
        <div className="fixed inset-0 z-0 opacity-15 pointer-events-none overflow-hidden">
          <motion.img 
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=2070" 
            alt="Hanuman Meditation Silhouette" 
            className="w-full h-full object-cover grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Cursor Glow */}
        <div 
          className="fixed pointer-events-none z-[9999] w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 hidden md:block"
          style={{ left: mousePos.x, top: mousePos.y }}
        />

        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-neon-cyan z-[200] origin-left shadow-[0_0_10px_#00f2ff]"
          style={{ scaleX }}
        />

        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
          <PricingSection />
          <TransformationSection />
          <TrainersSection />
          <BMISection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        <Footer />
        <AIAssistant />
        <FloatingCTAs />
      </div>
    </>
  );
}
