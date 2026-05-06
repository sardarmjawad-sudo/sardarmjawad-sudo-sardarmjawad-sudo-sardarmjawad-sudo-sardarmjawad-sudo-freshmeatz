'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto flex justify-between items-center px-4 py-3 max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center min-w-0">
            <a href="/" className="flex items-center gap-2 md:gap-4 min-w-0">
              <img
                src="/images/freshmeatz.png"
                alt="FreshMeatz Logo"
                className="w-14 h-14 md:w-24 md:h-24 object-contain flex-shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-3xl md:text-6xl font-extrabold text-[#c44732] leading-none tracking-tight truncate">
                  FreshMeatz
                </span>
                <span className="text-[9px] md:text-sm tracking-[0.25em] text-gray-500 font-semibold mt-1">
                  PREMIUM HALAL BUTCHER
                </span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-gray-900 hover:text-brand-red transition-colors font-bold text-sm">About</Link>
            <Link href="#products" className="text-gray-900 hover:text-brand-red transition-colors font-bold text-sm">Products</Link>
            <Link href="#gallery" className="text-gray-900 hover:text-brand-red transition-colors font-bold text-sm">Gallery</Link>
            <Link href="#contact" className="text-gray-900 hover:text-brand-red transition-colors font-bold text-sm">Location</Link>
            
            <a href="tel:+16027038057" className="hidden md:flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-brand-red hover:bg-brand-red-dark shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
              <Phone className="w-4 h-4 mr-2" />
              Call to Order
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 focus:outline-none flex-shrink-0"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="block h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          <nav className="fixed top-[75px] left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link href="#about" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-gray-700 hover:text-[#c44732] hover:bg-gray-50 transition-colors">About</Link>
              <Link href="#products" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-gray-700 hover:text-[#c44732] hover:bg-gray-50 transition-colors">Products</Link>
              <Link href="#gallery" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-gray-700 hover:text-[#c44732] hover:bg-gray-50 transition-colors">Gallery</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-gray-700 hover:text-[#c44732] hover:bg-gray-50 transition-colors">Location</Link>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a href="tel:+16027038057" className="w-full flex items-center justify-center gap-3 px-4 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-brand-red hover:bg-brand-red-dark shadow-lg shadow-red-200 transition-all">
                  <Phone className="w-5 h-5" />
                  Call to Order
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
