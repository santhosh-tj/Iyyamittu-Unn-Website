import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, MessageSquare, Truck, CheckSquare } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Donor Posts Food",
      description: "Quickly upload details of surplus food including quantity and expiry."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "NGO Discovers",
      description: "Local NGOs receive alerts and find donations on their real-time map."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Instant Coordination",
      description: "Chat directly to finalize logistics and pickup/delivery details."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Food Delivered",
      description: "Either donor delivers or NGO picks up based on the agreement."
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Confirm Receipt",
      description: "Both parties confirm to ensure transparency and track impact."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-slate-900"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-p max-w-2xl mx-auto"
          >
            A simple 5-step process to ensure food reaches those who need it most.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-primary-100 -translate-y-1/2 hidden lg:block" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 bg-primary-100 text-primary-700 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                  {step.icon}
                </div>
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white flex items-center justify-center rounded-full font-bold shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
