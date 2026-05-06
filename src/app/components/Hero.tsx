'use client';

import Image from 'next/image';
import { Phone, Navigation, MessagesSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative bg-brand-black w-full h-[80vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero.png"
          alt="Premium Halal Meat Selection"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-black/50 backdrop-blur-sm"
          >
            <span className="text-brand-gold text-sm font-semibold tracking-wide uppercase">100% Zabiha Halal Certified</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight"
          >
            Premium Quality <br />
            <span className="text-brand-gold">Fresh Halal Meat</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-200 md:text-xl font-light max-w-xl"
          >
            Your local trusted butcher offering the highest grade organic chicken, baby goat, lamb, beef, and fresh seafood. Cut perfectly to your preference.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
          >
            <span className="text-white font-medium">📍 Located nearby <span className="font-bold text-brand-gold">Patel Brothers, Chandler</span></span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-6 flex flex-col sm:flex-row gap-4"
          >
            <a href="tel:+16027038057" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-brand-red hover:bg-brand-red-dark transition-all shadow-lg hover:shadow-brand-red/20 w-full sm:w-auto transform hover:scale-105">
              <Phone className="w-5 h-5 mr-2" />
              Call (602) 703-8057
            </a>

            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto transform hover:scale-105">
              <Navigation className="w-5 h-5 mr-2" />
              Directions
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
