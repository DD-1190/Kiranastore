import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, Category } from './types';

export type View = 'home' | 'category' | 'cart' | 'orders' | 'profile';

interface StoreContextType {
  view: View;
  setView: (view: View) => void;
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
  cart: { [productId: string]: number };
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  getCartCount: () => number;
  getCartTotal: (products: Product[]) => number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [view, setView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [cart, setCart] = useState<{ [productId: string]: number }>({});

  const addToCart = (productId: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getCartCount = () => {
    return Object.values(cart).reduce((a: number, b: number) => a + b, 0);
  };

  const getCartTotal = (products: Product[]) => {
    return Object.entries(cart).reduce((total, [id, qty]) => {
      const product = products.find(p => p.id === id);
      return total + (product ? product.price * (qty as number) : 0);
    }, 0);
  };

  return (
    <StoreContext.Provider
      value={{
        view,
        setView,
        selectedCategory,
        setSelectedCategory,
        cart,
        addToCart,
        removeFromCart,
        getCartCount,
        getCartTotal
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};