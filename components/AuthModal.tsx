import React, { useState } from 'react';

interface AuthModalProps {
  onClose: () => void;
  onLoginSuccess: (email: string) => void;
  onDemoClick: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onLoginSuccess, onDemoClick }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLoginSuccess(email);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-cardDark rounded-[3rem] p-8 md:p-10 max-w-md w-full shadow-2xl animate-scaleUp">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black">{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h2>
          <button onClick={onClose} className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fas fa-times text-slate-600 dark:text-slate-300"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary"
              placeholder="example@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            {isLogin ? 'Đăng nhập' : 'Đăng ký'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-bold text-sm hover:underline"
          >
            {isLogin ? 'Chưa có tài khoản? Đăng ký ngay' : 'Đã có tài khoản? Đăng nhập'}
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={onDemoClick}
            className="w-full py-4 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
          >
            <i className="fas fa-flask mr-2"></i> Trải nghiệm Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
