import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Activity, 
  Truck 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ShoppingBag className="w-7 h-7" />,
      title: "Multi-food Posting",
      description: "Post multiple dishes from a single event or kitchen in one go."
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "OSM Location Sync",
      description: "Precise location tracking using OpenStreetMap for easy pickups."
    },
    {
      icon: <MessageCircle className="w-7 h-7" />,
      title: "Real-Time Chat",
      description: "Direct coordination between donors and NGOs within the app."
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Expiry Tracking",
      description: "Auto-notifications for dishes approaching their expiry time."
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: "Nutritional Info",
      description: "Support for tracking nutritional value and dietary needs."
    },
    {
      icon: <Truck className="w-7 h-7" />,
      title: "Flexible Delivery",
      description: "Choose between donor-led delivery or NGO-organized pickup."
    }
  ];

  return (
    <section id="features" className="section-padding bg-emerald-950 text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 border-4 border-white rounded-full" />
        <div className="absolute bottom-20 left-20 w-96 h-96 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="opacity-70 max-w-2xl mx-auto"
          >
            Everything you need to manage food donations efficiently and transparently.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:border-primary-400 group transition-all"
            >
              <div className="w-14 h-14 bg-primary-600 flex items-center justify-center rounded-2xl mb-8 group-hover:rotate-12 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="opacity-70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
