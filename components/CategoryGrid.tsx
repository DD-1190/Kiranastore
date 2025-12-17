import React from 'react';
import { CATEGORIES } from '../constants';
import { Icon } from './Icon';
import { Category } from '../types';

const CategoryItem: React.FC<{ category: Category }> = ({ category }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform">
    <div 
      className="size-[72px] rounded-2xl overflow-hidden relative shadow-sm flex items-center justify-center p-0 transition-shadow hover:shadow-md"
      style={{ backgroundColor: category.color }} // Use inline style for dynamic hex colors not in Tailwind theme
    >
      <img 
        src={category.image} 
        alt={category.name} 
        className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal" 
        loading="lazy"
      />
    </div>
    <p className="text-slate-700 dark:text-slate-300 text-[11px] font-bold leading-tight text-center max-w-[64px]">
      {category.name}
    </p>
  </div>
);

const StaticCategoryItem: React.FC<{ 
  icon: string; 
  label: string; 
  bgColorClass: string;
  iconColorClass: string; 
}> = ({ icon, label, bgColorClass, iconColorClass }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform">
    <div className={`size-[72px] rounded-2xl overflow-hidden relative ${bgColorClass} shadow-sm flex items-center justify-center transition-shadow hover:shadow-md`}>
      <Icon name={icon} className={`${iconColorClass}`} />
    </div>
    <p className="text-slate-700 dark:text-slate-300 text-[11px] font-bold leading-tight text-center max-w-[64px]">
      {label}
    </p>
  </div>
);


const CategoryGrid: React.FC = () => {
  return (
    <>
      <div className="px-4 pt-6 pb-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-slate-900 dark:text-white text-[18px] font-extrabold tracking-tight">
            Shop by category
          </h2>
          <span className="text-xs text-slate-500 font-medium">Find what you need</span>
        </div>
        <button className="text-xs font-bold text-primary-dark hover:text-primary-dark/80 transition-colors bg-primary/10 px-3 py-1.5 rounded-full">
          See all
        </button>
      </div>
      
      <div className="px-4 pb-8">
        <div className="grid grid-cols-4 gap-y-6 gap-x-2">
          {CATEGORIES.map((cat) => (
            <CategoryItem key={cat.id} category={cat} />
          ))}
          
          {/* Static Items (Pharma, See All) */}
          <StaticCategoryItem 
            icon="medication" 
            label="Pharma" 
            bgColorClass="bg-[#FEF2F2] dark:bg-surface-dark" 
            iconColorClass="text-red-400 text-[32px]" 
          />
          
          <StaticCategoryItem 
            icon="grid_view" 
            label="See All" 
            bgColorClass="bg-white border border-slate-200 dark:bg-surface-dark dark:border-slate-700" 
            iconColorClass="text-slate-400 text-[28px]" 
          />
        </div>
      </div>
    </>
  );
};

export default CategoryGrid;