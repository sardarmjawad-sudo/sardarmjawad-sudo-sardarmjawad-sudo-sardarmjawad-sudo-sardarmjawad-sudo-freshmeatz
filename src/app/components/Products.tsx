'use client';

import { useState, useEffect } from 'react';
import { Search, Phone, MessagesSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  'All',
  'Chicken',
  'Zabiha Organic Chicken',
  'Baby Goat',
  'Lamb',
  'Beef',
  'Seafood',
  'Marinades'
];

const products = [
  // User's Real Chicken Products
  { name: 'Halal Chicken AS IS', price: '$2.99 / lb', category: 'Chicken', image: '/images/chicken_whole.jpeg' },
  { name: 'Halal Chicken Cut', price: '$3.99 / lb', category: 'Chicken', image: '/images/chicken_cuts.png' },
  { name: 'Chicken Breast Boneless', price: '$4.99 / lb', category: 'Chicken', image: '/images/chicken_breast.png' },
  { name: 'Chicken Thigh Boneless', price: '$4.99 / lb', category: 'Chicken', image: '/images/chicken_thigh.jpeg' },
  { name: 'Chicken Leg Quarters', price: '$2.99 / lb', category: 'Chicken', image: '/images/chicken_leg_quarters.png' },
  { name: 'Chicken Drumsticks', price: '$2.99 / lb', category: 'Chicken', image: '/images/chicken_drumsticks.png' },
  { name: 'Chicken Liver', price: '$1.99 / lb', category: 'Chicken', image: '/images/chicken_liver.jpeg' },
  { name: 'Chicken Ground', price: '$5.99 / lb', category: 'Chicken', image: '/images/chicken_ground.jpeg' },
  { name: 'Chicken Wings', price: '$5.99 / lb', category: 'Chicken', image: '/images/chicken_wings.jpeg' },
  { name: 'Natu Kodi Chicken Burnt', price: '$19.99 / Bird', category: 'Chicken', image: '/images/chicken_burnt.jpeg' },
  { name: 'Country Chicken Burnt', price: '$19.99 / Bird', category: 'Chicken', image: '/images/chicken_burnt.jpeg' },
  
  // Zabiha Organic Chicken
  { name: 'Zabiha Organic Chicken Clean Cut', price: '$4.99 / lb', category: 'Zabiha Organic Chicken', image: '/images/organic_chicken_cuts.png' },
  { name: 'Zabiha Organic Chicken Leg Quarters', price: '$3.99 / lb', category: 'Zabiha Organic Chicken', image: '/images/organic_chicken_leg_quarters.png' },
  { name: 'Zabiha Organic Chicken Breast Boneless', price: '$6.99 / lb', category: 'Zabiha Organic Chicken', image: '/images/organic_chicken_breast.png' },
  { name: 'Zabiha Organic Chicken Thigh Boneless', price: '$6.99 / lb', category: 'Zabiha Organic Chicken', image: '/images/organic_chicken_thighs.jpeg' },

  // Baby Goat
  { name: 'Baby Goat Whole', price: '$11.99 / lb', category: 'Baby Goat', image: '/images/baby_goat_whole.jpg' },
  { name: 'Baby Goat Half', price: '$12.49 / lb', category: 'Baby Goat', image: '/images/baby_goat_half.jpg' },
  { name: 'Baby Goat Mix', price: '$13.99 / lb', category: 'Baby Goat', image: '/images/baby_goat_mix.jpg' },
  { name: 'Baby Goat Leg', price: '$14.99 / lb', category: 'Baby Goat', image: '/images/baby_goat_leg.jpg' },
  { name: 'Baby Goat Shoulder', price: '$14.99 / lb', category: 'Baby Goat', image: '/images/baby_goat_shoulder.jpg' },
  { name: 'Baby Goat Chops', price: '$12.99 / lb', category: 'Baby Goat', image: '/images/baby_goat_chops.jpg' },
  { name: 'Baby Goat Burnt Paya', price: '$13.99 / lb', category: 'Baby Goat', image: '/images/baby_goat_burnt_paya.jpg' },
  { name: 'Baby Goat Kidney', price: '$9.99 / lb', category: 'Baby Goat', image: '/images/baby_goat_kidney.jpg' },
  { name: 'Baby Goat Heart', price: '$9.99 / lb', category: 'Baby Goat', image: '/images/baby_goat_heart.jpg' },
  { name: 'Baby Goat Liver', price: '$9.99 / lb', category: 'Baby Goat', image: '/images/baby_goat_liver.jpg' },
  { name: 'Baby Goat Boti', price: '$9.99 / lb', category: 'Baby Goat', image: '/images/goat_boti.jpg' },
  { name: 'Baby Goat Intestine', price: '$9.99 / lb', category: 'Baby Goat', image: '/images/baby_goat_intestine.jpg' },
  { name: 'Baby Goat Testicles', price: '$9.99 / lb', category: 'Baby Goat', image: '/images/baby_goat_testicles.jpg' },
  { name: 'Baby Goat Paya', price: '$7.99 / lb', category: 'Baby Goat', image: '/images/goat_paya.jpg' },
  { name: 'Baby Goat Ground', price: '$13.99 / lb', category: 'Baby Goat', image: '/images/goat_ground.jpg' },

  // Lamb
  { name: 'Lamb Whole', price: '$11.99 / lb', category: 'Lamb', image: '/images/lamb_whole.jpg' },
  { name: 'Lamb Half', price: '$12.49 / lb', category: 'Lamb', image: '/images/lamb_half.jpg' },
  { name: 'Lamb Mix', price: '$12.99 / lb', category: 'Lamb', image: '/images/lamb_mix.jpg' },
  { name: 'Lamb Leg', price: '$13.99 / lb', category: 'Lamb', image: '/images/lamb_leg.jpg' },
  { name: 'Lamb Shoulder', price: '$13.99 / lb', category: 'Lamb', image: '/images/lamb_shoulder.jpg' },
  { name: 'Lamb Chops', price: '$12.99 / lb', category: 'Lamb', image: '/images/lamb_chops.jpg' },
  { name: 'Lamb Liver', price: '$12.99 / lb', category: 'Lamb', image: '/images/lamb_liver.jpg' },
  { name: 'Lamb Kidney', price: '$12.99 / lb', category: 'Lamb', image: '/images/lamb_kidney.jpg' },
  { name: 'Lamb Hearts', price: '$12.99 / lb', category: 'Lamb', image: '/images/lamb_heart.jpg' },
  { name: 'Lamb Ground', price: '$13.99 / lb', category: 'Lamb', image: '/images/lamb_ground.jpg' },

  // Seafood
  { name: 'Rohu (Clean Cut)', price: '$6.99 / lb', category: 'Seafood', image: '/images/rohu_clean_cut.jpg' },
  { name: 'Korameenu (Clean Cut)', price: '$9.99 / lb', category: 'Seafood', image: '/images/korameenu_clean_cut.jpg' },
  { name: 'Katla', price: '$7.99 / lb', category: 'Seafood', image: '/images/katla.jpg' },
  { name: 'Kingfish (Surmai)', price: '$15.99 / lb', category: 'Seafood', image: '/images/kingfish_surmai.jpg' },
  { name: 'Hilsha (Pulasa) Small', price: '$12.99 / lb', category: 'Seafood', image: '/images/hilsha_pulasa_small.jpg' },
  { name: 'Hilsha (Pulasa) Medium', price: '$16.99 / lb', category: 'Seafood', image: '/images/hilsha_pulasa_medium.jpg' },
  { name: 'Hilsha (Pulasa) Large', price: '$19.99 / lb', category: 'Seafood', image: '/images/hilsha_pulasa_large.jpg' },
  { name: 'Hilsha (Pulasa) XL', price: '$24.99 / lb', category: 'Seafood', image: '/images/hilsha_pulasa_xl.jpg' },
  { name: 'Hilsha (Pulasa) XXL', price: '$29.99 / lb', category: 'Seafood', image: '/images/hilsha_pulasa_xxl.jpg' },
  { name: 'Golden Pomfret', price: '$8.99 / lb', category: 'Seafood', image: '/images/golden_pomfret.jpg' },
  { name: 'Black Pomfret', price: '$8.99 / lb', category: 'Seafood', image: '/images/black_pomfret.jpg' },
  { name: 'Silver Pomfret', price: '$14.99 / lb', category: 'Seafood', image: '/images/silver_pomfret.jpg' },
  { name: 'Shrimp Small', price: '$10.99 / lb', category: 'Seafood', image: '/images/shrimp_small.jpg' },
  { name: 'Shrimp Large', price: '$13.99 / lb', category: 'Seafood', image: '/images/shrimp_large.jpg' },
  { name: 'Sardines', price: '$5.99 / lb', category: 'Seafood', image: '/images/sardines.jpg' },
  { name: 'Smelts', price: '$6.99 / lb', category: 'Seafood', image: '/images/smelts.jpg' },

  // Beef
  { name: 'Beef Mix', price: '$6.99 / lb', category: 'Beef', image: '/images/beef_mix.jpg' },
  { name: 'Beef Ground', price: '$7.99 / lb', category: 'Beef', image: '/images/beef_ground.jpg' },
  { name: 'Beef Boneless', price: '$7.99 / lb', category: 'Beef', image: '/images/beef_boneless.jpg' },
  { name: 'Beef Liver', price: '$5.99 / lb', category: 'Beef', image: '/images/beef_liver.jpg' },

  // Marinades
  { name: 'Chilli Chicken', price: '$6.99 / lb', category: 'Marinades', image: '/images/chicken_chilli.png' },
  { name: 'Tandoori Chicken', price: '$6.99 / lb', category: 'Marinades', image: '/images/chicken_tandoori.png' },
  { name: 'Haryali Green Chicken', price: '$6.99 / lb', category: 'Marinades', image: '/images/chicken_haryali.png' },
  { name: 'Fish Marination', price: '$9.99 / lb', category: 'Marinades', image: '/images/fish_marination.jpg' },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const [imgError, setImgError] = useState(false);

  const fallbackImage = product.category === 'Baby Goat'
    ? '/images/baby_goat_mix.jpg'
    : '/images/hero.png';

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="h-44 sm:h-48 md:h-52 w-full overflow-hidden rounded-2xl bg-white border border-gray-100 flex items-center justify-center">
        <img
          src={imgError ? fallbackImage : product.image}
          alt={product.name}
          loading="lazy"
          className={
            product.category === "Chicken" || product.category === "Zabiha Organic Chicken"
              ? "h-full w-full object-contain p-1"
              : "h-full w-full object-cover"
          }
          onError={() => setImgError(true)}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-red-700">
          {product.category}
        </p>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white via-[#fffaf5] to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-5xl rounded-[2rem] border border-red-100 bg-gradient-to-br from-white via-[#fff7ef] to-[#fff1e5] px-6 py-12 text-center shadow-xl sm:px-10"
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-red-800">
            Our Selection
          </p>
          <h2 className="text-5xl font-black tracking-tight text-[#111827] sm:text-6xl lg:text-7xl">
            Premium <span className="bg-gradient-to-r from-[#b45309] to-[#d97706] bg-clip-text text-transparent">Fresh Cuts</span>
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-28 rounded-full bg-gradient-to-r from-red-800 via-[#d97706] to-red-800"></div>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-gray-700 sm:text-xl">
            Browse our premium selection of 100% Zabiha Halal meats. Call us to place your order for pickup.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-red-800 shadow-sm border border-red-100">100% Zabiha Halal</span>
            <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-red-800 shadow-sm border border-red-100">Fresh Daily</span>
            <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-red-800 shadow-sm border border-red-100">Custom Cuts</span>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-8"
        >
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for products (chicken, goat, fish...)"
                className="w-full rounded-full border border-gray-200 bg-white px-6 py-4 pl-12 text-base font-medium text-gray-900 shadow-md outline-none transition focus:border-red-800 focus:ring-4 focus:ring-red-100"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "rounded-full bg-[#163c32] px-6 py-3 text-sm md:text-base font-bold text-white shadow-lg transition-transform scale-105"
                    : "rounded-full bg-white px-6 py-3 text-sm md:text-base font-bold text-gray-800 shadow-sm border border-gray-100 hover:bg-red-50 hover:text-red-800 transition"
                }
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 text-lg">No products found matching your search.</p>
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-20 bg-brand-black rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl -mr-32 -mt-32 rounded-full"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">Ready to Order?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Call us directly for the freshest cuts and current daily specials.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+16027038057"
                className="flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg"
              >
                <Phone size={20} />
                Call (602) 703-8057
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
