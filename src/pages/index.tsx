import React from 'react';

const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">👔 AI 穿搭顧問</h1>
          <p className="text-xl text-gray-600">智慧化面試穿搭推薦系統</p>
        </div>

        <div className="space-y-4 text-gray-700">
          <div>
            <h2 className="text-lg font-semibold mb-2">歡迎使用</h2>
            <p>
              這是一個創新的 AI 穿搭顧問系統，旨在幫助即將參加重要面試的您，挑選最合適的韓系穿搭。
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">操作流程</h2>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>點擊下方「開始」按鈕</li>
              <li>系統將自動分派您到實驗組別</li>
              <li>與 AI 顧問進行互動對話</li>
              <li>完成穿搭推薦後填答問卷</li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm text-blue-900">
              💡 <strong>提示：</strong>
              請在安靜、舒適的環境中完成本調查。預計需要 5-10 分鐘。
            </p>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <a
            href="/start"
            className="flex-1 btn-primary text-center py-3 text-lg font-semibold rounded-lg"
          >
            開始使用 →
          </a>
        </div>

        <p className="text-xs text-center text-gray-500 pt-4">
          © 2026 AI Fashion Advisor Research System
        </p>
      </div>
    </div>
  );
};

export default IndexPage;