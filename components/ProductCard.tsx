import React from 'react';
import { Product } from '../types';
import { Icon } from './Icon';
import { useStore } from '../StoreContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useStore();
  const quantity = cart[product.id] || 0;

  return (
    <div className="bg-white dark:bg-surface-dark rounded-xl p-3 shadow-card border border-slate-100 dark:border-slate-800 flex flex-col h-full relative group">
      {product.isBestSeller && (
        <div className="absolute top-0 left-0 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-br-lg rounded-tl-lg z-10 uppercase tracking-wide">
          Best Seller
        </div>
      )}
      
      <div className="relative mb-2 aspect-square rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal p-2 hover:scale-105 transition-transform duration-300" 
          loading="lazy"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="text-[10px] font-medium text-slate-500 mb-1 bg-slate-100 dark:bg-slate-800 self-start px-1.5 py-0.5 rounded">
          {product.weight}
        </div>
        <h3 className="text-[13px] font-semibold text-slate-900 dark:text-white leading-tight line-clamp-2 mb-2">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-end justify-between gap-2">
          <div className="flex flex-col">
             {product.originalPrice && (
              <span className="text-[10px] text-slate-400 line-through decoration-slate-400/70">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="text-[14px] font-bold text-slate-900 dark:text-white">
              ₹{product.price}
            </span>
          </div>

          {quantity === 0 ? (
            <button 
              onClick={() => addToCart(product.id)}
              className="h-8 min-w-[70px] px-3 rounded-lg border border-primary bg-primary/5 text-primary-dark dark:text-primary text-xs font-bold uppercase tracking-wide hover:bg-primary hover:text-slate-900 transition-all active:scale-95"
            >
              Add
            </button>
          ) : (
            <div className="h-8 min-w-[70px] flex items-center justify-between bg-primary rounded-lg text-slate-900 font-bold px-1">
              <button 
                onClick={() => removeFromCart(product.id)}
                className="size-6 flex items-center justify-center hover:bg-black/10 rounded active:scale-90"
              >
                <Icon name="remove" className="text-[14px]" />
              </button>
              <span className="text-xs w-4 text-center">{quantity}</span>
              <button 
                onClick={() => addToCart(product.id)}
                className="size-6 flex items-center justify-center hover:bg-black/10 rounded active:scale-90"
              >
                <Icon name="add" className="text-[14px]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;