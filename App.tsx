import React from 'react';
import Header from './components/Header';
import QuickActions from './components/QuickActions';
import Banners from './components/Banners';
import CategoryGrid from './components/CategoryGrid';
import BottomNav from './components/BottomNav';
import CategoryDetails from './components/CategoryDetails';
import CartPage from './components/CartPage';
import { StoreProvider, useStore } from './StoreContext';
import { Icon } from './components/Icon';

const AppContent: React.FC = () => {
  const { view } = useStore();

  return (
    <div className="max-w-md mx-auto bg-background-light dark:bg-background-dark min-h-screen relative shadow-2xl overflow-hidden">
      
      {/* Home View */}
      {view === 'home' && (
        <>
          <Header />
          <main className="pb-28">
            <QuickActions />
            <Banners />
            <CategoryGrid />
          </main>
          <BottomNav />
        </>
      )}

      {/* Category Details View */}
      {view === 'category' && <CategoryDetails />}

      {/* Cart View */}
      {view === 'cart' && <CartPage />}

      {/* Placeholder Views for Orders/Profile */}
      {(view === 'orders' || view === 'profile') && (
        <>
          <Header />
          <main className="flex flex-col items-center justify-center h-[70vh] text-slate-400">
            <Icon name="construction" className="text-6xl mb-4 opacity-50" />
            <p className="font-semibold text-lg">Coming Soon</p>
            <p className="text-sm">This feature is under development.</p>
          </main>
          <BottomNav />
        </>
      )}

    </div>
  );
};

const App: React.FC = () => {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
};

export default App;