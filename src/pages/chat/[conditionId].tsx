import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ChatInterface from '@/components/ChatInterface';
import ProductCard from '@/components/ProductCard';
import { getCondition, Condition } from '@/config/conditions';
import {
  ChatStep,
  ChatState,
  initializeChatState,
  getAIResponse,
  getNextStep,
  getQuickReplyOptions,
  recordUserInput,
} from '@/lib/chatFlow';
import {
  recordInteractionLocally,
  generateParticipantId,
} from '@/lib/dataLogger';

const ChatPage: React.FC = () => {
  const router = useRouter();
  const { conditionId } = router.query;

  const [condition, setCondition] = useState<Condition | null>(null);
  const [chatState, setChatState] = useState<ChatState | null>(null);
  const [currentMessage, setCurrentMessage] = useState('');
  const [participantId, setParticipantId] = useState('');
  const [showRecommendation, setShowRecommendation] = useState(false);

  // 初始化
  useEffect(() => {
    if (!conditionId) return;

    const id = parseInt(conditionId as string);
    const cond = getCondition(id);

    if (!cond) {
      router.push('/start');
      return;
    }

    const pid = generateParticipantId();
    setParticipantId(pid);
    setCondition(cond);
    setChatState(initializeChatState(id, pid));

    // 記錄進入
    recordInteractionLocally({
      participantId: pid,
      conditionId: id,
      timestamp: new Date().toISOString(),
      stepName: 'chat_started',
    });
  }, [conditionId, router]);

  const handleSendMessage = async (message: string): Promise<string> => {
    if (!chatState || !condition) return '';

    // 記錄使用者輸入
    const updatedState = recordUserInput(chatState, chatState.currentStep, message);
    setChatState(updatedState);

    recordInteractionLocally({
      participantId: updatedState.participantId,
      conditionId: updatedState.conditionId,
      timestamp: new Date().toISOString(),
      stepName: chatState.currentStep,
      userMessage: message,
    });

    // 進到下一步
    const nextStep = getNextStep(chatState.currentStep);
    setChatState(prev => prev ? { ...prev, currentStep: nextStep } : null);

    // 如果到達推薦步驟，顯示推薦商品卡片
    if (nextStep === 'recommendation') {
      setShowRecommendation(true);
    }

    // 回傳下一步的 AI 回覆
    const aiResponse = getAIResponse(nextStep, condition);
    setCurrentMessage(aiResponse);

    recordInteractionLocally({
      participantId: updatedState.participantId,
      conditionId: updatedState.conditionId,
      timestamp: new Date().toISOString(),
      stepName: nextStep,
      aiResponse: aiResponse,
    });

    return aiResponse;
  };

  const handleGoToSurvey = () => {
    if (!chatState || !condition) return;

    recordInteractionLocally({
      participantId: chatState.participantId,
      conditionId: chatState.conditionId,
      timestamp: new Date().toISOString(),
      stepName: 'survey_clicked',
    });

    // 構建問卷 URL
    const surveyUrl = new URL(condition.surveyUrl);
    surveyUrl.searchParams.append('condition', chatState.conditionId.toString());
    surveyUrl.searchParams.append('participant', chatState.participantId);

    // 跳轉到問卷
    window.location.href = surveyUrl.toString();
  };

  if (!condition || !chatState) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-lg text-gray-600">載入中...</p>
        </div>
      </div>
    );
  }

  const quickReplyOptions = getQuickReplyOptions(chatState.currentStep);
  const shouldShowQuickReplies = ['style_preference', 'body_shape', 'korean_style'].includes(
    chatState.currentStep
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        <ChatInterface
          botName={condition.botName}
          avatarType={condition.avatarType}
          initialMessage={getAIResponse('greeting', condition)}
          onSendMessage={handleSendMessage}
          quickReplyOptions={quickReplyOptions}
          showQuickReplies={shouldShowQuickReplies && !showRecommendation}
        />
      </div>

      {/* Recommendation Area */}
      {showRecommendation && (
        <div className="w-96 border-l border-gray-200 bg-white overflow-y-auto p-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">推薦穿搭</h3>

            <ProductCard
              name="淺藍色襯衫 + 深灰色直筒西裝褲"
              style="韓系簡約"
              occasion="重要面試"
              description="乾淨、柔和、正式但不僵硬的完美搭配"
            />

            <div className="space-y-3 mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={handleGoToSurvey}
                className="btn-primary w-full"
              >
                前往問卷 →
              </button>

              <p className="text-xs text-gray-500 text-center">
                參與者ID: {chatState.participantId}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPage;