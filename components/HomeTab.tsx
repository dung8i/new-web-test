import React from 'react';
import { TabType } from '../types';

interface HomeTabProps {
  onSwitchTab: (tab: TabType) => void;
}

const HomeTab: React.FC<HomeTabProps> = ({ onSwitchTab }) => {
  const features = [
    {
      icon: 'coins',
      title: 'Hoàn tiền tức thì',
      desc: 'Nhận hoàn tiền lên đến 30%',
      color: 'from-primary to-blue-600'
    },
    {
      icon: 'fire',
      title: 'Deal hot mỗi ngày',
      desc: 'Săn deal giá tốt nhất',
      color: 'from-secondary to-orange-600'
    },
    {
      icon: 'gift',
      title: 'Đổi quà dễ dàng',
      desc: 'Voucher, thẻ cào và nhiều hơn',
      color: 'from-success to-green-600'
    },
    {
      icon: 'users',
      title: 'Cộng đồng sôi động',
      desc: 'Chia sẻ kinh nghiệm mua sắm',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-br from-primary via-blue-500 to-secondary rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-white shadow-2xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            Mua sắm thông minh<br />Tiết kiệm thật sự
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 font-medium">
            Savyo giúp bạn nhận hoàn tiền, săn deal hot và quản lý tài chính hiệu quả
          </p>
          <button
            onClick={() => onSwitchTab(TabType.DEALS)}
            className="px-8 py-4 bg-white text-primary rounded-2xl font-black text-sm uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            Khám phá ngay <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-black mb-6">Tính năng nổi bật</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-cardDark rounded-[2rem] p-6 shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                <i className={`fas fa-${feature.icon} text-white text-2xl`}></i>
              </div>
              <h4 className="font-black text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-black mb-6">Đối tác của chúng tôi</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {['Shopee', 'Lazada', 'Tiki', 'Sendo', 'Grab', 'Shopee Food'].map(partner => (
            <div key={partner} className="bg-white dark:bg-cardDark rounded-2xl p-6 flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
              <span className="font-black text-sm text-slate-700 dark:text-slate-300">{partner}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeTab;
