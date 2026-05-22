import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Twitter, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: any;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {}, // Public form, no auth info
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export const ContactSection = () => {
  const MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.916898!2d74.553965!3d25.333857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2270967aead%3A0xe9712a20b12bc65!2sBhilwara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1715243000000!5m2!1sen!2sin";

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'contacts');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-premium-black overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] scale-150 pointer-events-none rotate-12">
        <MapPin size={800} strokeWidth={0.5} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-cyan text-[10px] font-black uppercase tracking-[0.8em] mb-6 block">Command Center</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter italic uppercase text-white leading-none mb-12">
              INITIATE<br /><span className="text-gradient-premium">CONTACT.</span>
            </h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-[20px] glass-premium flex items-center justify-center text-neon-cyan border border-white/5 group-hover:border-neon-cyan/50 transition-all shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">Location</div>
                  <p className="text-xl text-white font-display italic uppercase tracking-tighter">
                    Block-A, Tech Plaza, Near Shastri Circle,<br />Bhilwara, Rajasthan 311001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-[20px] glass-premium flex items-center justify-center text-neon-magenta border border-white/5 group-hover:border-neon-magenta/50 transition-all shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">Hotline</div>
                  <p className="text-xl text-white font-display italic uppercase tracking-tighter">
                    +91 91234 56780<br />+91 99887 76655
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-[20px] glass-premium flex items-center justify-center text-white border border-white/5 group-hover:border-white/50 transition-all shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">Network</div>
                  <p className="text-xl text-white font-display italic uppercase tracking-tighter">
                    hq@aura-fitness.com<br />support@aura-fitness.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 flex gap-6">
               {[Instagram, Twitter, MessageCircle].map((Icon, i) => (
                  <button key={i} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-neon-cyan hover:text-black hover:border-neon-cyan transition-all">
                    <Icon size={20} />
                  </button>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="glass-premium p-10 md:p-14 rounded-[50px] border-white/5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                 <div className="space-y-4">
                    <label className="text-[8px] text-gray-500 uppercase font-black tracking-widest ml-4">Full Identity</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-neon-cyan transition-all text-white font-display italic placeholder:text-white/20" 
                    />
                 </div>
                 <div className="space-y-4">
                    <label className="text-[8px] text-gray-500 uppercase font-black tracking-widest ml-4">Comms Channel</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@aura.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 outline-none focus:border-neon-magenta transition-all text-white font-display italic placeholder:text-white/20" 
                    />
                 </div>
              </div>
              
              <div className="space-y-4 mb-10">
                 <label className="text-[8px] text-gray-500 uppercase font-black tracking-widest ml-4">Transmission Payload</label>
                 <textarea 
                   rows={4} 
                   required
                   placeholder="Brief your requirements..." 
                   value={formData.message}
                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                   className="w-full bg-white/5 border border-white/10 rounded-[30px] px-8 py-5 outline-none focus:border-white transition-all text-white font-display italic placeholder:text-white/20 resize-none"
                 />
              </div>

              <button 
                type="submit"
                disabled={submitting}
                className="w-full bg-white text-black py-6 rounded-[30px] font-display font-black italic uppercase tracking-widest text-lg hover:bg-neon-cyan transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
              >
                {submitted ? (
                  <>Transmission Sent <CheckCircle size={20} className="text-black" /></>
                ) : (
                  <>Send Transmission <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /></>
                )}
              </button>
            </form>

            <div className="mt-12 h-[300px] rounded-[40px] overflow-hidden border border-white/10 grayscale saturate-0 hover:grayscale-0 hover:saturate-100 transition-all duration-1000">
               <iframe 
                 src={MAP_URL}
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
            
            {/* Glow Decorative */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-neon-cyan/10 blur-[100px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
