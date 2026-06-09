/**
 * 聊天流程管理
 * 控制對話的進行步驟
 */

export type ChatStep =
  | 'greeting'
  | 'style_preference'
  | 'body_shape'
  | 'korean_style'
  | 'confirmation'
  | 'recommendation'
  | 'survey_link';

export interface ChatState {
  currentStep: ChatStep;
  userInputs: {
    stylePreference?: string;
    bodyShape?: string;
    koreanStyle?: string;
  };
  participantId: string;
  conditionId: number;
}

import { Condition } from '@/config/conditions';

/**
 * 初始化聊天狀態
 */
export function initializeChatState(
  conditionId: number,
  participantId: string
): ChatState {
  return {
    currentStep: 'greeting',
    userInputs: {},
    participantId,
    conditionId,
  };
}

/**
 * 取得 AI 的回覆消息
 * 根據當前步驟和使用者輸入進行回覆
 */
export function getAIResponse(
  step: ChatStep,
  condition: Condition,
  userMessage?: string
): string {
  switch (step) {
    case 'greeting':
      return condition.greetingText;

    case 'style_preference':
      return condition.styleQuestionText;

    case 'body_shape':
      return condition.bodyShapeQuestionText;

    case 'korean_style':
      return condition.koreanStyleQuestionText;

    case 'confirmation':
      return condition.confirmationText;

    case 'recommendation':
      return condition.finalRecommendationText;

    case 'survey_link':
      return '感謝你的配合！點擊下方按鈕前往問卷填答。';

    default:
      return '';
  }
}

/**
 * 進到下一個步驟
 */
export function getNextStep(currentStep: ChatStep): ChatStep {
  const stepFlow: Record<ChatStep, ChatStep> = {
    greeting: 'style_preference',
    style_preference: 'body_shape',
    body_shape: 'korean_style',
    korean_style: 'confirmation',
    confirmation: 'recommendation',
    recommendation: 'survey_link',
    survey_link: 'survey_link',
  };

  return stepFlow[currentStep];
}

/**
 * 取得當前步驟的快速回覆選項
 */
export function getQuickReplyOptions(step: ChatStep): Array<{
  label: string;
  value: string;
}> {
  switch (step) {
    case 'style_preference':
      return [
        { label: '專業、穩重', value: '專業、穩重' },
        { label: '親切、自然', value: '親切、自然' },
        { label: '有精神、有自信', value: '有精神、有自信' },
        { label: '正式但不要太嚴肅', value: '正式但不要太嚴肅' },
      ];

    case 'body_shape':
      return [
        { label: '肩膀與腰部比例接近', value: '肩膀與腰部比例接近' },
        { label: '肩膀較寬，腰部較窄', value: '肩膀較寬，腰部較窄' },
        { label: '腰腹較明顯，肩膀相對較窄', value: '腰腹較明顯，肩膀相對較窄' },
        { label: '身形偏瘦，希望穿起來不要太單薄', value: '身形偏瘦' },
        { label: '不確定', value: '不確定' },
      ];

    case 'korean_style':
      return [
        { label: '乾淨簡約', value: '乾淨簡約' },
        { label: '柔和親切', value: '柔和親切' },
        { label: '俐落正式', value: '俐落正式' },
        { label: '微寬鬆但不邋遢', value: '微寬鬆但不邋遢' },
      ];

    default:
      return [];
  }
}

/**
 * 記錄使用者輸入
 */
export function recordUserInput(
  state: ChatState,
  step: ChatStep,
  message: string
): ChatState {
  const updatedState = { ...state };

  switch (step) {
    case 'style_preference':
      updatedState.userInputs.stylePreference = message;
      break;
    case 'body_shape':
      updatedState.userInputs.bodyShape = message;
      break;
    case 'korean_style':
      updatedState.userInputs.koreanStyle = message;
      break;
  }

  return updatedState;
}