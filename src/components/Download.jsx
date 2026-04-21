import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone } from 'lucide-react';
import mockup from '../assets/mockup.png';
import DownloadComingSoon from './DownloadComingSoon';

const DownloadCTA = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary-800 to-primary-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg text-white mb-6">Start Making an Impact Today</h2>
              <p className="text-white/80 text-lg mb-10 max-w-md">
                Join our community of donors and NGOs to reduce food waste and support your local neighborhood. Download the app now and start saving lives.
              </p>
              
              <div className="space-y-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-10 py-5 bg-white text-primary-900 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-primary-50 transition-colors shadow-2xl"
                >
                  <Download className="w-6 h-6" />
                  Download APK
                </button>
                <div className="flex items-center gap-4 text-white/60 text-sm px-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Version 1.0.0 • 65MB • Android 11.0+</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={mockup} 
                alt="App Screen" 
                className="w-full max-w-[350px] mx-auto drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <DownloadComingSoon isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default DownloadCTA;
