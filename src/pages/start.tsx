import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getRandomConditionId } from '@/config/conditions';

const StartPage: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // 延遲 1 秒後隨機分派
    const timer = setTimeout(() => {
      const randomConditionId = getRandomConditionId();
      setIsLoading(false);

      // 重定向到聊天頁面
      router.push(`/chat/${randomConditionId}`);
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">AI 穿搭顧問</h1>
          <p className="text-xl text-gray-600">為你的面試挑選完美穿搭</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"></div>
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="text-gray-600">正在為你準備最佳穿搭方案...</p>
        </div>

        <div className="text-sm text-gray-500">
          <p>實驗系統 v1.0</p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;