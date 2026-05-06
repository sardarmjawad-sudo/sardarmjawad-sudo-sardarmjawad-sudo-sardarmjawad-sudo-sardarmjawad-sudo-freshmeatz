'use client';

import { Phone } from 'lucide-react';

export default function FloatingCall() {
  return (
    <a
      href="tel:+16027038057"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#a53621] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#8e2e1c] focus:outline-none focus:ring-4 focus:ring-[#a53621]/30 active:scale-95"
      aria-label="Call FreshMeatz"
    >
      <Phone className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
      </span>
    </a>
  );
}
