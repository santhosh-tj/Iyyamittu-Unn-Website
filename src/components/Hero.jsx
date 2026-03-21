import React from 'react';
import { motion } from 'framer-motion';
import { Play, Download } from 'lucide-react';
import mockup from '../assets/mockup.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-mint-50">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-primary-200/20 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-primary-700 font-semibold text-sm tracking-wider uppercase bg-primary-100 rounded-full">
            Revolutionizing Food Redistribution
          </span>
          <h1 className="heading-xl mb-6 text-slate-900 leading-tight">
            Iyyamittu Unn: <span className="text-primary-600">Feeding Communities</span>
          </h1>
          <p className="text-p mb-10 max-w-xl">
            A smart, real-time platform connecting food donors with NGOs to bridge the gap between surplus and scarcity. Save food, save lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex items-center justify-center gap-2 group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download APK
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <Play className="w-5 h-5 fill-primary-600" />
              Watch Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative z-10 w-full max-w-[400px]">
            <img 
              src={mockup} 
              alt="App Mockup" 
              className="w-full drop-shadow-[0_35px_35px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-4 glass p-4 rounded-2xl shadow-lg md:flex items-center gap-3 hidden"
          >
            <div className="w-10 h-10 bg-emerald-100 flex items-center justify-center rounded-full text-emerald-600 font-bold">✓</div>
            <div>
              <p className="text-xs font-bold text-slate-800">Donation Accepted</p>
              <p className="text-[10px] text-slate-500">NGO nearby picked up</p>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl shadow-lg md:flex items-center gap-3 hidden"
          >
            <div className="w-10 h-10 bg-orange-100 flex items-center justify-center rounded-full text-orange-600 font-bold">!</div>
            <div>
              <p className="text-xs font-bold text-slate-800">Expiry Alert</p>
              <p className="text-[10px] text-slate-500">Post expires in 2 hours</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
