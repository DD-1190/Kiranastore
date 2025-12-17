import React from 'react';
import Header from './components/Header';
import QuickActions from './components/QuickActions';
import Banners from './components/Banners';
import CategoryGrid from './components/CategoryGrid';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-background-light dark:bg-background-dark min-h-screen relative shadow-2xl">
      <Header />
      <main>
        <QuickActions />
        <Banners />
        <CategoryGrid />
      </main>
      <BottomNav />
    </div>
  );
};

export default App;