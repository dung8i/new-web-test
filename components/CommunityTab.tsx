import React from 'react';
import { User } from '../types';

interface CommunityTabProps {
  user: User;
}

const CommunityTab: React.FC<CommunityTabProps> = ({ user }) => {
  const posts = [
    {
      id: 1,
      author: 'Nguyễn Văn A',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User1',
      time: '2 giờ trước',
      content: 'Mình vừa mua được deal áo thun giảm 70% trên Shopee. Các bạn nhanh tay lên nhé!',
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      author: 'Trần Thị B',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User2',
      time: '5 giờ trước',
      content: 'Có ai biết cách tối ưu hoàn tiền trên Lazada không? Chia sẻ với mình với.',
      likes: 18,
      comments: 12
    },
    {
      id: 3,
      author: 'Lê Văn C',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User3',
      time: '1 ngày trước',
      content: 'Savyo thật sự giúp mình tiết kiệm được rất nhiều tiền mỗi tháng. Thanks Savyo!',
      likes: 45,
      comments: 8
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 text-white shadow-xl">
        <h2 className="text-2xl md:text-4xl font-black mb-2">Cộng Đồng</h2>
        <p className="text-white/90 font-medium">Chia sẻ và học hỏi kinh nghiệm mua sắm</p>
      </div>

      <div className="bg-white dark:bg-cardDark rounded-[2rem] p-6 shadow-lg">
        <div className="flex items-center space-x-4 mb-4">
          <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-2xl" />
          <input
            type="text"
            placeholder="Bạn đang nghĩ gì?"
            className="flex-1 px-4 py-3 bg-slate-100 dark:bg-slate-700 rounded-2xl outline-none font-medium"
          />
        </div>
        <div className="flex space-x-3">
          <button className="flex-1 py-2 bg-primary/10 text-primary rounded-xl font-bold text-sm hover:bg-primary/20 transition-colors">
            <i className="fas fa-image mr-2"></i> Ảnh
          </button>
          <button className="flex-1 py-2 bg-secondary/10 text-secondary rounded-xl font-bold text-sm hover:bg-secondary/20 transition-colors">
            <i className="fas fa-tag mr-2"></i> Deal
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white dark:bg-cardDark rounded-[2rem] p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-2xl" />
              <div className="flex-1">
                <h4 className="font-black">{post.author}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{post.time}</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">{post.content}</p>
            <div className="flex items-center space-x-6 pt-4 border-t border-slate-200 dark:border-slate-700">
              <button className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <i className="fas fa-heart"></i>
                <span className="font-bold text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <i className="fas fa-comment"></i>
                <span className="font-bold text-sm">{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <i className="fas fa-share"></i>
                <span className="font-bold text-sm">Chia sẻ</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityTab;
