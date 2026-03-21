import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Users, MessageSquareOff } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <Trash2 className="w-8 h-8 text-rose-500" />,
      title: "Massive Food Waste",
      description: "Tons of edible food are wasted daily due to lack of an efficient redistribution system."
    },
    {
      icon: <Users className="w-8 h-8 text-rose-500" />,
      title: "NGO Resource Gap",
      description: "NGOs often struggle to secure consistent food resources for the people they serve."
    },
    {
      icon: <MessageSquareOff className="w-8 h-8 text-rose-500" />,
      title: "Communication Barrier",
      description: "Lack of real-time communication between potential donors and nearby NGOs leads to missed opportunities."
    }
  ];

  return (
    <section id="problem" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-slate-900"
          >
            The Crisis We Face
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-p max-w-2xl mx-auto"
          >
            Thousands of people go hungry every day while massive amounts of perfectly edible food end up in landfills.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-10 rounded-3xl hover:border-rose-200 transition-all group"
            >
              <div className="w-16 h-16 bg-rose-50 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                {prob.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{prob.title}</h3>
              <p className="text-slate-600 leading-relaxed">{prob.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
