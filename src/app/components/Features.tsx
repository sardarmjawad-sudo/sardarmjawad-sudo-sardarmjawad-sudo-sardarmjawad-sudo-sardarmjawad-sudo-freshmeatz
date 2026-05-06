'use client';

import { Award, Scissors, Truck, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      icon: Scissors,
      title: 'Custom Cuts',
      desc: 'Tell us exactly how you want it cut. Steaks, curries, or roasts—we prep it to your specifications.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      desc: 'We source only the highest grade meats. No hormones, no antibiotics, just natural premium taste.'
    },
    {
      icon: Truck,
      title: 'Fresh Daily',
      desc: 'Our meat arrives fresh and is cut daily to ensure you get the absolute best quality for your family.'
    },
    {
      icon: HeartHandshake,
      title: 'Local & Trusted',
      desc: 'Proudly serving the community with honesty, hygiene, and strict adherence to Zabiha Halal principles.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-red font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-brand-black">
            The FreshMeatz <span className="text-brand-gold">Difference</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group"
              >
                <div className="mx-auto w-16 h-16 bg-brand-gold/10 text-brand-gold-dark rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-1 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
