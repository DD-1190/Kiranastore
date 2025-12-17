import React from 'react';
import { useStore } from '../StoreContext';
import { Icon } from './Icon';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const CategoryDetails: React.FC = () => {
  const { setView, selectedCategory, cart } = useStore();
  
  if (!selectedCategory) return null;

  const categoryProducts = PRODUCTS.filter(p => p.categoryId === selectedCategory.id);
  const cartCount = Object.values(cart).reduce((a: number, b: number) => a + b, 0);

  return (
    <div className="min-h-screen pb-24 bg-background-light dark:bg-background-dark">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <button 
            onClick={() => setView('home')}
            className="size-10 -ml-2 flex items-center justify-center text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <Icon name="arrow_back" className="text-[20px]" />
          </button>
          
          <h1 className="text-base font-bold text-slate-900 dark:text-white flex-1 text-center pr-8">
            {selectedCategory.name}
          </h1>

          <button className="size-10 -mr-2 flex items-center justify-center text-slate-600 dark:text-slate-300">
            <Icon name="search" className="text-[22px]" />
          </button>
        </div>
      </header>

      {/* Product Grid */}
      <div className="p-4 grid grid-cols-2 gap-3">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {categoryProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center pt-20 px-10 text-center opacity-60">
           <Icon name="inventory_2" className="text-[48px] text-slate-300 mb-4" />
           <p className="text-sm text-slate-500 font-medium">No products found in this category yet.</p>
        </div>
      )}

      {/* Floating Cart Preview if Items in Cart */}
      {cartCount > 0 && (
        <div className="fixed bottom-24 left-4 right-4 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button 
            onClick={() => setView('cart')}
            className="w-full bg-primary hover:bg-primary-dark text-slate-900 rounded-xl p-3 shadow-lg flex items-center justify-between transition-colors"
          >
            <div className="flex flex-col items-start ml-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-700">
                {cartCount} Items
              </span>
              <span className="text-sm font-bold">
                View Cart
              </span>
            </div>
            <div className="flex items-center gap-1 mr-2">
               <span className="text-sm font-bold">Checkout</span>
               <Icon name="arrow_forward" className="text-[18px]" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryDetails;