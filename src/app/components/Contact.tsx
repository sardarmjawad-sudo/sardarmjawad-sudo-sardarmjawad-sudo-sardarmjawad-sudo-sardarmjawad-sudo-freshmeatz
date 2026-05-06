'use client';

import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-red font-bold tracking-wider uppercase text-sm">Visit Us</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-brand-black">
            Location & <span className="text-brand-gold">Hours</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {/* Map Area */}
          <div className="h-64 lg:h-auto w-full bg-gray-200 relative">
            <iframe 
              src="https://maps.google.com/maps?q=1395%20S%20Arizona%20Ave%20%233,%20Chandler,%20AZ%2085286&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy"
              title="Store Location"
            ></iframe>
          </div>

          {/* Details Area */}
          <div className="p-8 lg:p-12 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-brand-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-brand-black">Address</h3>
                  <p className="mt-1 text-gray-600">
                    1395 S Arizona Ave #3<br />
                    Chandler, AZ 85286<br />
                    United States
                  </p>
                  <p className="mt-2 text-xs font-bold text-red-800 uppercase tracking-wide">
                    📍 Same plaza as Patel Brothers
                  </p>
                  <br />
                  <a href="https://maps.google.com/?q=1395+S+Arizona+Ave+%233,+Chandler,+AZ+85286" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-brand-red font-medium hover:text-brand-red-dark">
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-brand-red" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-brand-black">Contact</h3>
                  <p className="mt-1 text-gray-600">
                    <a href="tel:+16027038057" className="hover:text-brand-red">Phone: (602) 703-8057</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-6 h-6 text-brand-red" />
                </div>
                <div className="ml-4 w-full">
                  <h3 className="text-lg font-bold text-brand-black">Store Hours</h3>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex justify-between border-b border-gray-100 pb-1">
                      <span>Sunday - Thursday</span>
                      <span className="font-medium text-brand-black">10:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-1">
                      <span>Friday - Saturday</span>
                      <span className="font-medium text-brand-black">10:00 AM - 9:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
