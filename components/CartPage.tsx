import React from 'react';
import { useStore } from '../StoreContext';
import { Icon } from './Icon';
import { PRODUCTS } from '../constants';

const CartPage: React.FC = () => {
  const { setView, cart, addToCart, removeFromCart, getCartTotal } = useStore();
  
  const cartItems = Object.entries(cart).map(([id, quantity]) => {
    const product = PRODUCTS.find(p => p.id === id);
    return product ? { ...product, quantity } : null;
  }).filter(Boolean) as (typeof PRODUCTS[0] & { quantity: number })[];

  const itemTotal = getCartTotal(PRODUCTS);
  const deliveryFee = 15;
  const grandTotal = itemTotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-background-dark flex flex-col">
        <header className="sticky top-0 z-40 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center px-4 h-14">
            <button 
              onClick={() => setView('home')}
              className="size-10 -ml-2 flex items-center justify-center text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <Icon name="arrow_back" className="text-[20px]" />
            </button>
            <h1 className="text-base font-bold text-slate-900 dark:text-white ml-2">Cart</h1>
          </div>
        </header>
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="size-24 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
            <Icon name="shopping_cart_off" className="text-[40px] text-slate-300 dark:text-slate-600" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Your cart is empty</h2>
          <p className="text-sm text-slate-500 mb-8 max-w-[200px]">
            Looks like you haven't added anything to your cart yet.
          </p>
          <button 
            onClick={() => setView('home')}
            className="bg-primary text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-40">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-surface-dark shadow-sm">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center">
            <button 
              onClick={() => setView('home')}
              className="size-10 -ml-2 flex items-center justify-center text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <Icon name="arrow_back" className="text-[20px]" />
            </button>
            <div className="ml-2">
              <h1 className="text-base font-bold text-slate-900 dark:text-white leading-none">Your Cart</h1>
              <span className="text-[11px] text-slate-500 font-medium">{cartItems.length} items</span>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Items List */}
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
          {cartItems.map((item, index) => (
            <div key={item.id} className={`flex gap-3 p-3 ${index !== cartItems.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''}`}>
              <div className="size-16 bg-slate-50 dark:bg-slate-800 rounded-lg flex-shrink-0 flex items-center justify-center p-1">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white truncate">{item.name}</h3>
                  <p className="text-xs text-slate-500">{item.weight}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">₹{item.price * item.quantity}</span>
                  
                  <div className="flex items-center bg-primary rounded-lg h-7 px-1">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="size-6 flex items-center justify-center text-slate-900 hover:bg-black/10 rounded"
                    >
                      <Icon name="remove" className="text-[14px]" />
                    </button>
                    <span className="text-xs font-bold text-slate-900 w-5 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => addToCart(item.id)}
                      className="size-6 flex items-center justify-center text-slate-900 hover:bg-black/10 rounded"
                    >
                      <Icon name="add" className="text-[14px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Tip */}
        <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 flex-shrink-0">
             <Icon name="electric_moped" className="text-[20px]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Delivery in 12 mins</h4>
            <p className="text-[11px] text-slate-500">Superfast delivery from nearby store</p>
          </div>
        </div>

        {/* Bill Details */}
        <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Bill Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
              <span>Item Total</span>
              <span>₹{itemTotal}</span>
            </div>
            <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
              <span>Platform Fee</span>
              <span>₹2</span>
            </div>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2 mt-2 flex justify-between text-sm font-bold text-slate-900 dark:text-white">
              <span>Grand Total</span>
              <span>₹{grandTotal + 2}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-slate-800 p-4 shadow-nav z-50">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-bold uppercase">Total</span>
            <span className="text-lg font-extrabold text-slate-900 dark:text-white">₹{grandTotal + 2}</span>
          </div>
          <button className="flex-1 bg-primary hover:bg-primary-dark text-slate-900 font-bold h-12 rounded-xl flex items-center justify-between px-6 transition-colors shadow-lg shadow-primary/20">
            <span>Proceed to Pay</span>
            <Icon name="arrow_forward" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;