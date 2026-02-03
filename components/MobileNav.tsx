import React from 'react';
import { TabType } from '../types';

interface MobileNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: TabType.HOME, label: 'Trang chủ', icon: 'home' },
    { id: TabType.DEALS, label: 'Deals', icon: 'fire' },
    { id: TabType.REDEEM, label: 'Đổi thưởng', icon: 'gift' },
    { id: TabType.WALLET, label: 'Ví', icon: 'wallet' },
    { id: TabType.ACCOUNT, label: 'Tôi', icon: 'user-circle' }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-cardDark/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-700 pb-safe">
      <div className="flex items-center justify-around py-2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all ${
              activeTab === item.id
                ? 'text-primary scale-110'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <i className={`fas fa-${item.icon} text-xl mb-1`}></i>
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
