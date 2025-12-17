import React, { useState } from 'react';
import { Icon } from './Icon';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', icon: 'home', label: 'Home', isActive: true },
  { id: 'categories', icon: 'category', label: 'Categories' },
  { id: 'cart', icon: 'shopping_cart', label: 'Cart', isCart: true, count: 2 },
  { id: 'orders', icon: 'receipt_long', label: 'Orders' },
  { id: 'profile', icon: 'person', label: 'Profile' },
];

const BottomNav: React.FC = () => {
  const [activeId, setActiveId] = useState('home');

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none px-4 pb-4">
      <div className="pointer-events-auto bg-white dark:bg-[#252525] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 dark:border-slate-800 p-2 mx-auto max-w-md">
        <div className="flex justify-around items-center">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            
            if (item.isCart) {
              return (
                <button 
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className="relative -mt-8 size-14 rounded-full bg-black dark:bg-primary shadow-lg shadow-black/20 dark:shadow-primary/30 flex items-center justify-center text-white dark:text-slate-900 active:scale-95 transition-transform"
                >
                  <Icon name={item.icon} className="text-[26px]" />
                  {item.count && (
                    <div className="absolute -top-1 -right-1 size-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white dark:border-slate-900">
                      {item.count}
                    </div>
                  )}
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`flex flex-col items-center justify-center gap-1 w-14 h-14 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white' 
                    : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
              >
                <Icon name={item.icon} className={`text-[24px] ${isActive ? 'fill-current' : ''}`} filled={isActive} />
                <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;