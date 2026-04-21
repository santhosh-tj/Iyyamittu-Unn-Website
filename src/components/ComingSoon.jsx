import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Bell, Sparkles, Film, Clock, Smartphone, Globe } from 'lucide-react';

const ComingSoon = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
        >
          {/* Backdrop with very dark tint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
          />

          {/* Modal Content - Cinema Style */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-[#0f172a] rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(16,185,129,0.15)] flex flex-col md:flex-row border border-white/5"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-all z-20"
            >
              <X size={20} />
            </button>

            {/* Left Side - Cinematic Preview */}
            <div className="md:w-1/2 relative min-h-[300px] flex flex-col items-center justify-center overflow-hidden bg-slate-900">
              {/* Background Gradient/Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-slate-900 to-slate-900" />
              
              {/* Animated Rings */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute w-80 h-80 rounded-full border border-emerald-500/30"
              />
              <motion.div 
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute w-[500px] h-[500px] rounded-full border border-emerald-500/10"
              />

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.5)] cursor-pointer group"
              >
                <Play size={40} className="text-white fill-white ml-2 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-center relative z-10 px-6"
              >
                <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Full Showcase</h2>
                <p className="text-emerald-400 font-bold uppercase tracking-widest text-[10px]">Coming Next Week</p>
              </motion.div>
            </div>

            {/* Right Side - Details */}
            <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center relative bg-[#0f172a]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full" />
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-full mb-6 w-fit uppercase tracking-[0.2em] border border-emerald-500/20">
                  <Play size={12} className="fill-emerald-400" />
                  Product Walkthrough
                </span>
                
                <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                  See the <br /><span className="text-emerald-500">Journey of a Meal</span>
                </h3>
                
                <p className="text-slate-400 mb-10 text-sm leading-relaxed max-w-sm">
                  Watch how we bridge the gap between food surplus and scarcity through a seamless, real-time connection between donors and NGOs.
                </p>

                <div className="grid gap-6">
                  {[
                    { icon: <Smartphone size={18} />, title: "One-Tap Listing", desc: "See how donors can post surplus food in seconds." },
                    { icon: <Globe size={18} />, title: "Smart Matching", desc: "Watch how nearby NGOs find and accept donations." },
                    { icon: <Clock size={18} />, title: "Real-time Tracking", desc: "Follow the journey from pickup to delivery." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{item.title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="mt-12 bg-white text-slate-950 w-full py-4 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 text-sm shadow-xl hover:bg-emerald-50 transition-all group"
                >
                  <Bell size={18} className="group-hover:animate-bounce" />
                  Get Premiere Notification
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoon;
