import React, { useState } from 'react';
import { User, Voucher } from '../types';

interface RedeemTabProps {
  user: User;
  setUser: (user: User) => void;
}

const RedeemTab: React.FC<RedeemTabProps> = ({ user, setUser }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'shopping', name: 'Mua sắm' },
    { id: 'food', name: 'Ẩm thực' },
    { id: 'entertainment', name: 'Giải trí' }
  ];

  const vouchers: Voucher[] = [
    {
      id: '1',
      brand: 'Shopee',
      value: '50.000đ',
      price: 45000,
      expiry: '31/12/2026'
    },
    {
      id: '2',
      brand: 'Grab Food',
      value: '30.000đ',
      price: 27000,
      expiry: '31/12/2026'
    },
    {
      id: '3',
      brand: 'CGV',
      value: '100.000đ',
      price: 90000,
      expiry: '31/12/2026'
    },
    {
      id: '4',
      brand: 'Lazada',
      value: '70.000đ',
      price: 63000,
      expiry: '31/12/2026'
    }
  ];

  const handleRedeem = (voucher: Voucher) => {
    if (user.balance >= voucher.price) {
      const confirmRedeem = window.confirm(`Bạn muốn đổi voucher ${voucher.brand} ${voucher.value} với ${voucher.price.toLocaleString('vi-VN')}đ?`);
      if (confirmRedeem) {
        setUser({
          ...user,
          balance: user.balance - voucher.price
        });
        alert('Đổi voucher thành công! Kiểm tra email để nhận mã voucher.');
      }
    } else {
      alert('Số dư không đủ để đổi voucher này!');
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-success to-green-600 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 text-white shadow-xl">
        <h2 className="text-2xl md:text-4xl font-black mb-2">Đổi Thưởng</h2>
        <p className="text-white/90 font-medium mb-4">Đổi điểm thành quà tặng giá trị</p>
        <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl">
          <i className="fas fa-wallet text-2xl"></i>
          <div>
            <p className="text-xs font-semibold text-white/80">Số dư khả dụng</p>
            <p className="text-2xl font-black">{user.balance.toLocaleString('vi-VN')}đ</p>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-3 pb-2 hide-scrollbar">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex-shrink-0 px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
              selectedCategory === cat.id
                ? 'bg-success text-white shadow-lg scale-105'
                : 'bg-white dark:bg-cardDark text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vouchers.map(voucher => (
          <div
            key={voucher.id}
            className="bg-white dark:bg-cardDark rounded-[2rem] p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-success to-green-600 rounded-2xl flex items-center justify-center">
                <i className="fas fa-ticket-alt text-white text-2xl"></i>
              </div>
              <h3 className="font-black text-lg">{voucher.brand}</h3>
              <p className="text-3xl font-black text-success my-2">{voucher.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">HSD: {voucher.expiry}</p>
            </div>
            <button
              onClick={() => handleRedeem(voucher)}
              className="w-full py-3 bg-success text-white rounded-xl font-black text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all"
            >
              Đổi {voucher.price.toLocaleString('vi-VN')}đ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedeemTab;
