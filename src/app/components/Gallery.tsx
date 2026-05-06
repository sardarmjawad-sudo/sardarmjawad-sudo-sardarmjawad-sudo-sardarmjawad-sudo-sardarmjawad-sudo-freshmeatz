'use client';

import { motion } from 'framer-motion';

const galleryImages = [
  { src: "/images/shop.jpeg", alt: "FreshMeatz shop" },
  { src: "/images/shop1.jpg", alt: "FreshMeatz shop interior" },
  { src: "/images/shop2.jpeg", alt: "FreshMeatz store front" },
  { src: "/images/shop3.jpeg", alt: "FreshMeatz halal butcher shop" },
  { src: "/images/shop4.jpeg", alt: "FreshMeatz outside view" },
  { src: "/images/shop5.jpeg", alt: "FreshMeatz fresh meat store" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-brand-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Our Gallery</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold">
            See the <span className="text-brand-red">Quality</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg border border-white/10 bg-white"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 md:h-72 w-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
