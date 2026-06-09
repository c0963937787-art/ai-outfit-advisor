import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  type: 'ai' | 'user';
  content: string;
  timestamp: Date;
}

interface QuickReplyOption {
  label: string;
  value: string;
}

interface ChatInterfaceProps {
  botName: string;
  avatarType: 'human' | 'system';
  initialMessage: string;
  onSendMessage: (message: string) => Promise<string>;
  onQuickReplyClick?: (option: QuickReplyOption) => void;
  quickReplyOptions?: QuickReplyOption[];
  showQuickReplies?: boolean;
  isLoading?: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  botName,
  avatarType,
  initialMessage,
  onSendMessage,
  onQuickReplyClick,
  quickReplyOptions = [],
  showQuickReplies = true,
  isLoading = false,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: initialMessage,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsSending(true);

    try {
      // Get AI response
      const aiResponse = await onSendMessage(text);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSending(false);
    }
  };

  const handleQuickReply = (option: QuickReplyOption) => {
    if (onQuickReplyClick) {
      onQuickReplyClick(option);
    }
    handleSendMessage(option.value);
  };

  const getAvatarDisplay = () => {
    if (avatarType === 'human') {
      return (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
          E
        </div>
      );
    } else {
      return (
        <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white">
          🤖
        </div>
      );
    }
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="border-b border-gray-200 p-4 bg-white shadow-sm">
        <h2 className="font-semibold text-gray-900">
          {avatarType === 'human' ? botName : 'AI 穿搭顧問'}
        </h2>
        <p className="text-sm text-gray-500">線上穿搭諮詢</p>
      </div>

      {/* Messages Area */}
      <div className="chat-messages">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className="flex gap-2 max-w-md">
              {message.type === 'ai' && getAvatarDisplay()}
              <div
                className={`message-bubble ${
                  message.type === 'ai' ? 'message-ai' : 'message-user'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString('zh-TW', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}

        {isSending && (
          <div className="flex justify-start">
            <div className="flex gap-2">
              {getAvatarDisplay()}
              <div className="message-bubble message-ai">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Reply Options */}
      {showQuickReplies && quickReplyOptions.length > 0 && (
        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 flex flex-wrap gap-2">
          {quickReplyOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleQuickReply(option)}
              disabled={isSending}
              className="btn-option"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Input Area */}
      <div className="chat-input-area">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyPress={e => {
              if (e.key === 'Enter' && !isSending) {
                handleSendMessage(inputValue);
              }
            }}
            placeholder="輸入您的回答..."
            disabled={isSending || isLoading}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleSendMessage(inputValue)}
            disabled={isSending || !inputValue.trim() || isLoading}
            className="btn-primary"
          >
            {isSending ? '送出中...' : '送出'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;