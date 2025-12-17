import React from 'react';
import { Icon } from './Icon';

const HyperlocalBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#FFE500] dark:bg-[#e6ce00] min-h-[160px] flex flex-row items-center justify-between px-6 shadow-soft group cursor-pointer active:scale-[0.98] transition-all">
      {/* Background Decor */}
      <div className="absolute left-[-20px] top-[-20px] w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute right-[-20px] bottom-[-40px] w-40 h-40 bg-orange-400/20 rounded-full blur-3xl"></div>

      {/* Text Content */}
      <div className="relative z-10 w-3/5 py-4">
        <span className="inline-block px-2 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded mb-2">
          Hyperlocal
        </span>
        <p className="text-slate-900 text-2xl font-extrabold leading-tight mb-3">
          Delivered from nearby kiranas
        </p>
        <div className="inline-flex items-center justify-center size-8 bg-black text-white rounded-full group-hover:scale-110 transition-transform">
          <Icon name="arrow_forward" className="text-[18px]" />
        </div>
      </div>

      {/* Illustration */}
      <div className="relative z-10 w-2/5 h-full flex items-center justify-center">
        <div className="relative">
          <Icon name="storefront" className="text-slate-900/10 text-[120px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150" />
          <Icon name="storefront" className="text-slate-900 text-[80px] drop-shadow-xl relative z-10" />
        </div>
      </div>
    </div>
  );
};

const FreshPromiseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 min-h-[120px] flex items-center px-5 shadow-card group cursor-pointer active:scale-[0.98] transition-all">
      <div className="flex-1 z-10">
        <div className="flex items-center gap-2 mb-1">
          <Icon name="eco" className="text-green-600 text-[20px]" filled />
          <p className="text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wide">
            Fresher Promise
          </p>
        </div>
        <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">
          No warehouse.<br />Direct from shelves.
        </p>
      </div>
      <div className="relative w-24 h-24 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-full ml-4">
        <Icon name="inventory_2" className="text-slate-300 dark:text-slate-600 text-[60px]" />
        <div className="absolute -bottom-2 -right-2 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded-full border border-green-200 shadow-sm">
          100% Fresh
        </div>
      </div>
    </div>
  );
};

const Banners: React.FC = () => {
  return (
    <div className="px-4 py-2 space-y-4">
      <HyperlocalBanner />
      <FreshPromiseBanner />
    </div>
  );
};

export default Banners;