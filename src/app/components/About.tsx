'use client';

import { Check } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function About() {
  const points = [
    "Locally sourced premium meat",
    "Hand-slaughtered Zabiha Halal",
    "Custom cuts to your exact preference",
    "Highest standards of cleanliness",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 [perspective:1000px]">
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.02}
              gyroscope={true}
              className="relative w-full rounded-2xl shadow-2xl overflow-hidden"
            >
              <img
                src="/images/shop1.jpg"
                alt="FreshMeatz Butcher Shop Interior"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              {/* Floating Badge - Mobile Friendly */}
              <div className="absolute bottom-4 right-4 bg-brand-red text-white p-4 rounded-xl shadow-lg z-10 hidden sm:block">
                <p className="text-2xl font-bold font-serif">100%</p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-brand-gold-light">Fresh Daily</p>
              </div>
            </Tilt>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-brand-red font-bold tracking-wider uppercase text-sm">About Our Shop</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-brand-black">
                Tradition Meets <span className="text-brand-gold">Excellence</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We take pride in providing our community with the finest quality Zabiha Halal meat. Our expert butchers bring years of experience to ensure every cut meets our rigorous standards for freshness, tenderness, and taste.
            </p>
            
            <div className="space-y-4 pt-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-brand-gold-dark" />
                  </div>
                  <span className="text-gray-800 font-medium">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-white bg-brand-black hover:bg-gray-800 transition-colors shadow-md">
                Visit Our Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
