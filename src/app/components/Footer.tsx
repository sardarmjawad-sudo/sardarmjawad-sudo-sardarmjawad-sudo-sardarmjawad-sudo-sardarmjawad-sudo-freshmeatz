import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8 border-t-[6px] border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-5 mb-4">
              <img 
                src="/images/freshmeatz.png" 
                alt="FreshMeatz Logo" 
                className="h-20 w-20 rounded-full bg-white p-1 shadow-xl ring-2 ring-gray-100"
              />
              <span className="text-5xl font-black tracking-tighter text-[#a53621]">
                FreshMeatz
              </span>
            </div>
            <p className="mt-2 text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium 100% Zabiha Halal meat shop offering the freshest organic chicken, baby goat, lamb, beef, and seafood cut daily to your preference.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-brand-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-brand-red transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-brand-red transition-colors">Our Products</a></li>
              <li><a href="#gallery" className="hover:text-brand-red transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-red transition-colors">Location & Hours</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-brand-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Phone: (602) 703-8057</li>

              <li>Address: 1395 S Arizona Ave #3, Chandler, AZ 85286</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FreshMeatz Halal Market. All rights reserved.</p>
          <p className="mt-2 md:mt-0">100% Hand-Slaughtered Zabiha Halal</p>
        </div>
      </div>
    </footer>
  );
}
