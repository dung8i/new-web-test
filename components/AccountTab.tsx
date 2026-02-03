import React, { useState, useEffect } from 'react';
import { User } from '../types';

interface AccountTabProps {
  user: User;
  setUser: (user: User) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  language: 'vi' | 'en';
  setLanguage: (value: 'vi' | 'en') => void;
  onLogout: () => void;
  autoOpenSettings: boolean;
  onSettingsOpened: () => void;
}

const AccountTab: React.FC<AccountTabProps> = ({
  user,
  setUser,
  isDarkMode,
  setIsDarkMode,
  language,
  setLanguage,
  onLogout,
  autoOpenSettings,
  onSettingsOpened
}) => {
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (autoOpenSettings) {
      setShowSettings(true);
      onSettingsOpened();
    }
  }, [autoOpenSettings, onSettingsOpened]);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-primary to-purple-500 rounded-[2rem] md:rounded-[3rem] p-8 text-white shadow-2xl">
        <div className="flex items-center space-x-6">
          <img src={user.avatar} alt={user.name} className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/20 p-1" />
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-1">{user.name}</h2>
            <p className="text-white/80 font-semibold">{user.rank}</p>
            <p className="text-sm text-white/60 mt-1">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-cardDark rounded-2xl p-6 text-center shadow-lg">
          <p className="text-3xl font-black text-primary mb-2">150</p>
          <p className="text-xs font-bold text-slate-600 dark:text-slate-400">Đơn hàng</p>
        </div>
        <div className="bg-white dark:bg-cardDark rounded-2xl p-6 text-center shadow-lg">
          <p className="text-3xl font-black text-success mb-2">2.5M</p>
          <p className="text-xs font-bold text-slate-600 dark:text-slate-400">Đã tiết kiệm</p>
        </div>
        <div className="bg-white dark:bg-cardDark rounded-2xl p-6 text-center shadow-lg">
          <p className="text-3xl font-black text-secondary mb-2">25</p>
          <p className="text-xs font-bold text-slate-600 dark:text-slate-400">Voucher</p>
        </div>
        <div className="bg-white dark:bg-cardDark rounded-2xl p-6 text-center shadow-lg">
          <p className="text-3xl font-black text-purple-500 mb-2">1.2K</p>
          <p className="text-xs font-bold text-slate-600 dark:text-slate-400">Điểm thưởng</p>
        </div>
      </div>

      <div className="bg-white dark:bg-cardDark rounded-[2rem] p-6 shadow-lg space-y-3">
        <button className="w-full flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all">
          <div className="flex items-center space-x-4">
            <i className="fas fa-user-edit text-primary text-xl w-6"></i>
            <span className="font-bold">Chỉnh sửa hồ sơ</span>
          </div>
          <i className="fas fa-chevron-right text-slate-400"></i>
        </button>
        <button className="w-full flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all">
          <div className="flex items-center space-x-4">
            <i className="fas fa-bell text-secondary text-xl w-6"></i>
            <span className="font-bold">Thông báo</span>
          </div>
          <i className="fas fa-chevron-right text-slate-400"></i>
        </button>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="w-full flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all"
        >
          <div className="flex items-center space-x-4">
            <i className="fas fa-cog text-success text-xl w-6"></i>
            <span className="font-bold">Cài đặt</span>
          </div>
          <i className={`fas fa-chevron-${showSettings ? 'down' : 'right'} text-slate-400`}></i>
        </button>

        {showSettings && (
          <div className="pl-10 space-y-3 py-2">
            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="font-semibold text-sm">Chế độ tối</span>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`w-14 h-7 rounded-full transition-all ${
                  isDarkMode ? 'bg-primary' : 'bg-slate-300'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-lg transition-transform ${
                  isDarkMode ? 'translate-x-8' : 'translate-x-1'
                }`}></div>
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="font-semibold text-sm">Ngôn ngữ</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'vi' | 'en')}
                className="px-3 py-1 rounded-lg bg-white dark:bg-slate-700 font-bold text-sm outline-none"
              >
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        )}

        <button className="w-full flex items-center justify-between p-4 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all">
          <div className="flex items-center space-x-4">
            <i className="fas fa-question-circle text-purple-500 text-xl w-6"></i>
            <span className="font-bold">Trợ giúp</span>
          </div>
          <i className="fas fa-chevron-right text-slate-400"></i>
        </button>
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-between p-4 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all text-red-600"
        >
          <div className="flex items-center space-x-4">
            <i className="fas fa-sign-out-alt text-xl w-6"></i>
            <span className="font-bold">Đăng xuất</span>
          </div>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default AccountTab;
