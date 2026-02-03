import React from 'react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  userBalance: number;
  isLoggedIn: boolean;
  onAuthClick: () => void;
  onLogout: () => void;
  onGoToSettings: () => void;
}

const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  userBalance,
  isLoggedIn,
  onAuthClick,
  onLogout,
  onGoToSettings
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-cardDark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-xl md:text-2xl">S</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-tight">Savyo</h1>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-semibold">Mua sắm thông minh</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {[
              { id: TabType.HOME, label: 'Trang chủ', icon: 'home' },
              { id: TabType.DEALS, label: 'Deals', icon: 'fire' },
              { id: TabType.REDEEM, label: 'Đổi thưởng', icon: 'gift' },
              { id: TabType.COMMUNITY, label: 'Cộng đồng', icon: 'users' },
              { id: TabType.WALLET, label: 'Ví', icon: 'wallet' },
              { id: TabType.ACCOUNT, label: 'Tài khoản', icon: 'user-circle' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <i className={`fas fa-${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            {isLoggedIn ? (
              <>
                <div className="hidden md:flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-xl">
                  <i className="fas fa-coins text-success"></i>
                  <span className="font-black text-sm">{userBalance.toLocaleString('vi-VN')}đ</span>
                </div>
                <button
                  onClick={onGoToSettings}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <i className="fas fa-cog text-slate-600 dark:text-slate-300"></i>
                </button>
              </>
            ) : (
              <button
                onClick={onAuthClick}
                className="px-4 md:px-6 py-2 md:py-2.5 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
              >
                Đăng nhập
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
