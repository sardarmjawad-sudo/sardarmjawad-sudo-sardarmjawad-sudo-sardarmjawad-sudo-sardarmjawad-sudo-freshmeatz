'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Reviews() {
  const reviews = [
    { name: "Ahmed K.", text: "Best Zabiha halal meat in town. Always fresh, and the butcher cuts exactly how I ask.", rating: 5 },
    { name: "Sarah M.", text: "The organic chicken is amazing. Very clean shop and professional service.", rating: 5 },
    { name: "Omar F.", text: "Premium quality lamb chops. We drive 30 minutes just to get our meat from here. Highly recommend!", rating: 5 },
    { name: "Tariq H.", text: "Finally, a reliable Halal butcher in Chandler! The baby goat mix was incredibly tender and perfect for biryani. Will be coming back weekly.", rating: 5 },
    { name: "Ravi K.", text: "Their Natu Kodi (country chicken) is the best I've found in Arizona. Reminds me exactly of back home. Clean shop and great service!", rating: 5 },
    { name: "Aisha R.", text: "The pre-marinated Tandoori Chicken saves me so much time for BBQ weekends. Highly recommended, the prices are very fair for the quality.", rating: 5 },
  ];

  return (
    <section className="py-20 bg-brand-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold">
            What Our <span className="text-brand-red">Customers Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 relative"
            >
              <div className="flex text-brand-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">&quot;{review.text}&quot;</p>
              <p className="font-bold text-white">— {review.name}</p>
              <div className="absolute top-0 right-8 transform -translate-y-1/2 text-6xl text-gray-800 font-serif leading-none opacity-50">
                &quot;
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
