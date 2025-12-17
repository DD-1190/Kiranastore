import React from 'react';
import { Icon } from './Icon';

interface ActionButtonProps {
  icon: string;
  label: string;
  colorClass: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, colorClass }) => (
  <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark rounded-full shadow-sm border border-slate-100 dark:border-slate-700 whitespace-nowrap active:scale-95 transition-transform">
    <Icon name={icon} className={`text-[18px] ${colorClass}`} />
    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{label}</span>
  </button>
);

const QuickActions: React.FC = () => {
  return (
    <div className="px-4 py-2 flex gap-3 overflow-x-auto no-scrollbar mb-2">
      <ActionButton icon="history" label="Reorder" colorClass="text-green-600" />
      <ActionButton icon="favorite" label="Favorites" colorClass="text-red-500" />
      <ActionButton icon="redeem" label="Offers" colorClass="text-blue-500" />
    </div>
  );
};

export default QuickActions;