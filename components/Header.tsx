import React, { useState } from 'react';
import { Icon } from './Icon';
import { PROFILE_IMAGE } from '../constants';

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-white to-background-light dark:from-background-dark dark:to-background-dark/95 backdrop-blur-md pb-2 pt-2">
      <div className="flex items-start justify-between px-4 py-3">
        {/* Left Side: Time & Location */}
        <div className="flex flex-col flex-1 min-w-0 mr-4">
          <div className="flex items-center gap-1 mb-0.5">
            <h1 className="text-[22px] font-extrabold text-slate-900 dark:text-white leading-none">
              12 mins
            </h1>
            <span className="text-xs font-bold text-slate-900 dark:text-white bg-primary px-1.5 py-0.5 rounded-md leading-none tracking-tight">
              FAST
            </span>
          </div>
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 group cursor-pointer">
            <span className="text-xs font-semibold truncate max-w-[200px]">
              Home - 123 MG Road, Indiranagar...
            </span>
            <Icon 
              name="expand_more" 
              className="text-[16px] transition-transform group-hover:rotate-180" 
            />
          </div>
        </div>

        {/* Right Side: Profile */}
        <button className="relative flex items-center justify-center size-10 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden flex-shrink-0 active:scale-95 transition-transform">
          <img 
            src={PROFILE_IMAGE} 
            alt="Profile" 
            className="w-full h-full object-cover" 
          />
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-2">
        <div className="relative flex w-full items-center group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
            <Icon name="search" className="text-slate-400 group-focus-within:text-slate-600 dark:group-focus-within:text-primary transition-colors" />
          </div>
          <input 
            type="text" 
            className="block w-full h-12 rounded-xl border-none bg-white dark:bg-surface-dark py-3 pl-11 pr-12 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-card focus:ring-2 focus:ring-primary/50 text-[15px] font-medium transition-all"
            placeholder="Search 'milk', 'chips'..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 border-l border-slate-100 dark:border-slate-700 my-2 pl-3 cursor-pointer">
             <Icon name="mic" className="text-slate-400 hover:text-primary-dark transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;