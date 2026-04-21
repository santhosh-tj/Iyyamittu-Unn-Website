import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Bell, Sparkles, CheckCircle2, Download, Shield } from 'lucide-react';

const DownloadComingSoon = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Content - New Balanced Card Design */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] flex flex-col p-8 md:p-12"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all z-20"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 15, stiffness: 200 }}
                className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-emerald-200"
              >
                <Smartphone size={40} className="text-white" />
              </motion.div>

              <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-full mb-4 uppercase tracking-[0.2em] border border-emerald-100">
                Official Release v1.0
              </span>
              
              <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight">
                Download <span className="text-emerald-600">Iyyamittu Unn</span>
              </h3>
              
              <p className="text-slate-500 mb-10 text-sm leading-relaxed max-w-[280px]">
                Connect with local NGOs and share surplus food with your community today.
              </p>

              <div className="w-full space-y-3 mb-10 text-left">
                {[
                  { icon: <CheckCircle2 size={16} />, text: "Verified & Secure APK" },
                  { icon: <CheckCircle2 size={16} />, text: "Real-time Donation Alerts" },
                  { icon: <CheckCircle2 size={16} />, text: "Optimized for Android 8.0+" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 transition-colors hover:bg-emerald-50/50 hover:border-emerald-100">
                    <div className="text-emerald-500 shrink-0">{item.icon}</div>
                    <span className="text-xs font-bold text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <motion.a 
                href="./Iyyamittu_Unn.apk"
                download="Iyyamittu_Unn.apk"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={onClose}
                className="w-full bg-emerald-600 text-white py-4 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 text-base shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300 transition-all active:scale-[0.98] group no-underline"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download App Now
              </motion.a>
              
              <p className="mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Shield size={10} />
                Secure Direct Download
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DownloadComingSoon;
