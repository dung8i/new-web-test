import React from 'react';
import { User } from '../types';

interface WalletTabProps {
  user: User;
}

const WalletTab: React.FC<WalletTabProps> = ({ user }) => {
  const transactions = [
    { id: '1', type: 'in', title: 'Hoàn tiền Shopee', amount: 50000, date: '15/01/2026' },
    { id: '2', type: 'out', title: 'Đổi voucher Grab', amount: -30000, date: '14/01/2026' },
    { id: '3', type: 'in', title: 'Hoàn tiền Lazada', amount: 75000, date: '13/01/2026' },
    { id: '4', type: 'in', title: 'Thưởng giới thiệu', amount: 100000, date: '12/01/2026' }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-primary via-blue-500 to-purple-500 rounded-[2rem] md:rounded-[3rem] p-8 text-white shadow-2xl">
        <p className="text-white/80 font-semibold mb-2">Tổng số dư</p>
        <h2 className="text-4xl md:text-6xl font-black mb-6">{user.balance.toLocaleString('vi-VN')}đ</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="py-4 bg-white/20 backdrop-blur-md rounded-2xl font-black text-sm hover:bg-white/30 transition-all">
            <i className="fas fa-plus-circle mr-2"></i> Nạp tiền
          </button>
          <button className="py-4 bg-white/20 backdrop-blur-md rounded-2xl font-black text-sm hover:bg-white/30 transition-all">
            <i className="fas fa-arrow-circle-down mr-2"></i> Rút tiền
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white dark:bg-cardDark rounded-2xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
              <i className="fas fa-arrow-down text-success"></i>
            </div>
            <p className="text-sm font-bold text-slate-600 dark:text-slate-400">Tổng thu</p>
          </div>
          <p className="text-2xl font-black text-success">2.500.000đ</p>
        </div>
        <div className="bg-white dark:bg-cardDark rounded-2xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
              <i className="fas fa-arrow-up text-secondary"></i>
            </div>
            <p className="text-sm font-bold text-slate-600 dark:text-slate-400">Tổng chi</p>
          </div>
          <p className="text-2xl font-black text-secondary">500.000đ</p>
        </div>
        <div className="bg-white dark:bg-cardDark rounded-2xl p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <i className="fas fa-chart-line text-primary"></i>
            </div>
            <p className="text-sm font-bold text-slate-600 dark:text-slate-400">Tiết kiệm</p>
          </div>
          <p className="text-2xl font-black text-primary">2.000.000đ</p>
        </div>
      </div>

      <div className="bg-white dark:bg-cardDark rounded-[2rem] p-6 shadow-lg">
        <h3 className="text-xl font-black mb-6">Lịch sử giao dịch</h3>
        <div className="space-y-4">
          {transactions.map(tx => (
            <div key={tx.id} className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-slate-700 last:border-0">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  tx.type === 'in' ? 'bg-success/10' : 'bg-secondary/10'
                }`}>
                  <i className={`fas fa-${tx.type === 'in' ? 'arrow-down' : 'arrow-up'} ${
                    tx.type === 'in' ? 'text-success' : 'text-secondary'
                  }`}></i>
                </div>
                <div>
                  <h4 className="font-black">{tx.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{tx.date}</p>
                </div>
              </div>
              <p className={`text-xl font-black ${
                tx.type === 'in' ? 'text-success' : 'text-secondary'
              }`}>
                {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('vi-VN')}đ
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletTab;
