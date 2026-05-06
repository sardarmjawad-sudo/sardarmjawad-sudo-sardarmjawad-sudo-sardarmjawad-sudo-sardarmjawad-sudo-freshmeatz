import { CheckCircle2, Leaf, ShieldCheck, Clock } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, title: '100% Zabiha Halal', desc: 'Certified pure & authentic' },
    { icon: Leaf, title: 'Organic & Fresh', desc: 'Premium quality cuts' },
    { icon: Clock, title: 'Cut Daily', desc: 'Guaranteed freshness' },
    { icon: CheckCircle2, title: 'Clean & Safe', desc: 'Highest hygiene standards' }
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-black">{badge.title}</h3>
                  <p className="text-sm text-gray-500">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
