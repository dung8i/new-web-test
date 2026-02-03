import React, { useState } from 'react';
import { Product } from '../types';

const DealsTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Tất cả', icon: 'th-large' },
    { id: 'fashion', name: 'Thời trang', icon: 'tshirt' },
    { id: 'electronics', name: 'Điện tử', icon: 'laptop' },
    { id: 'food', name: 'Ẩm thực', icon: 'utensils' },
    { id: 'beauty', name: 'Làm đẹp', icon: 'spa' },
    { id: 'home', name: 'Nhà cửa', icon: 'home' }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Áo thun nam basic',
      price: '149.000',
      oldPrice: '299.000',
      discount: '-50%',
      category: 'fashion',
      platform: 'Shopee',
      icon: 'tshirt'
    },
    {
      id: 2,
      name: 'Tai nghe Bluetooth',
      price: '299.000',
      oldPrice: '599.000',
      discount: '-50%',
      category: 'electronics',
      platform: 'Lazada',
      icon: 'headphones'
    },
    {
      id: 3,
      name: 'Combo đồ ăn vặt',
      price: '99.000',
      oldPrice: '199.000',
      discount: '-50%',
      category: 'food',
      platform: 'Tiki',
      icon: 'cookie-bite'
    },
    {
      id: 4,
      name: 'Kem dưỡng da',
      price: '199.000',
      oldPrice: '399.000',
      discount: '-50%',
      category: 'beauty',
      platform: 'Shopee',
      icon: 'pump-soap'
    },
    {
      id: 5,
      name: 'Bộ chăn ga gối',
      price: '499.000',
      oldPrice: '999.000',
      discount: '-50%',
      category: 'home',
      platform: 'Lazada',
      icon: 'bed'
    },
    {
      id: 6,
      name: 'Giày thể thao nam',
      price: '399.000',
      oldPrice: '799.000',
      discount: '-50%',
      category: 'fashion',
      platform: 'Tiki',
      icon: 'shoe-prints'
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-secondary to-orange-600 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 text-white shadow-xl">
        <h2 className="text-2xl md:text-4xl font-black mb-2">Deals Hot Hôm Nay</h2>
        <p className="text-white/90 font-medium">Săn deal ngay, tiết kiệm liền tay</p>
      </div>

      <div className="flex overflow-x-auto space-x-3 pb-2 hide-scrollbar">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex-shrink-0 px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
              selectedCategory === cat.id
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white dark:bg-cardDark text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <i className={`fas fa-${cat.icon} mr-2`}></i>
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-white dark:bg-cardDark rounded-[2rem] overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 h-48 flex items-center justify-center">
              <i className={`fas fa-${product.icon} text-6xl text-slate-400 dark:text-slate-500`}></i>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-lg text-xs font-black">
                  {product.discount}
                </span>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {product.platform}
                </span>
              </div>
              <h3 className="font-black text-lg mb-2">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-black text-primary">{product.price}đ</span>
                <span className="text-sm text-slate-400 line-through">{product.oldPrice}đ</span>
              </div>
              <button className="w-full mt-4 py-3 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all">
                Mua ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsTab;
