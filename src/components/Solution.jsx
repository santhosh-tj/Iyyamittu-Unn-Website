import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import mockup from '../assets/mockup.png';

const Solution = () => {
  const points = [
    "One-click surplus food posting for donors",
    "Real-time geolocation for nearby NGO discovery",
    "Instant in-app chat for coordination",
    "Flexible donor delivery or NGO pickup options",
    "Per-dish expiry and nutritional tracking"
  ];

  return (
    <section id="solution" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={mockup} 
            alt="Solution" 
            className="w-full max-w-[450px] mx-auto drop-shadow-2xl rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg text-slate-900">Our Solution: Bridging the Gap</h2>
          <p className="text-p mb-8">
            Iyyamittu Unn is a comprehensive platform designed to streamline the process of food redistribution. We make it easy for everyone to contribute.
          </p>

          <ul className="space-y-4">
            {points.map((point, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-slate-700 font-medium"
              >
                <CheckCircle2 className="text-primary-600 h-6 w-6 shrink-0" />
                {point}
              </motion.li>
            ))}
          </ul>

          <div className="mt-12 p-8 bg-primary-600 rounded-3xl text-white shadow-xl shadow-primary-200">
            <h4 className="text-xl font-bold mb-2">Sustainability First</h4>
            <p className="opacity-90">By optimizing logistics and communication, we reduce footprint and waste significantly.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
