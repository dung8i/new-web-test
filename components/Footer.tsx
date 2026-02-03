import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-cardDark border-t border-slate-200 dark:border-slate-700 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider mb-4">Về Savyo</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Liên hệ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tuyển dụng</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chính sách</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider mb-4">Đối tác</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Shopee</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lazada</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tiki</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider mb-4">Theo dõi</h3>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:scale-110 transition-transform">
                <i className="fab fa-facebook text-primary"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:scale-110 transition-transform">
                <i className="fab fa-instagram text-secondary"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:scale-110 transition-transform">
                <i className="fab fa-tiktok text-slate-800 dark:text-slate-200"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; 2026 Savyo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
