/**
 * 實驗條件配置
 * 2×2×2×2 設計，共 16 組條件
 * 
 * 操弄變數：
 * 1. 可解釋性 (explainability): high / low
 * 2. 雙面論點 (twoSidedMessage): high / low
 * 3. 擬人化程度 (anthropomorphism): high / low
 * 4. 回應主動性 (proactivity): high / low
 */

export interface Condition {
  conditionId: number;
  explainability: 'high' | 'low';
  twoSidedMessage: 'high' | 'low';
  anthropomorphism: 'high' | 'low';
  proactivity: 'high' | 'low';
  botName: string;
  avatarType: 'human' | 'system';
  greetingText: string;
  styleQuestionText: string;
  bodyShapeQuestionText: string;
  koreanStyleQuestionText: string;
  confirmationText: string;
  finalRecommendationText: string;
  surveyUrl: string;
}

export const CONDITIONS: Condition[] = [
  // Condition 1: 高可解釋性 × 高雙面論點 × 高擬人化 × 高回應主動性
  {
    conditionId: 1,
    explainability: 'high',
    twoSidedMessage: 'high',
    anthropomorphism: 'high',
    proactivity: 'high',
    botName: 'Emma',
    avatarType: 'human',
    greetingText: '嗨！👋 我是 Emma，你的 AI 穿搭顧問。接下來我會透過幾個簡單問題，幫你找出最適合重要面試的韓系穿搭。我會詳細解釋每個建議的原因，並同時提到優點和需要注意的地方，讓你做出最明智的選擇！',
    styleQuestionText: '首先想問你，你希望這套面試穿搭給人什麼感覺呢？',
    bodyShapeQuestionText: '接下來想了解一下你的身形。以下哪一種描述比較接近你呢？',
    koreanStyleQuestionText: '在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '謝謝你告訴我這些！我已經記下你的所有偏好，現在就幫你精心挑選最合適的穿搭組合。',
    finalRecommendationText: '根據你的偏好，我強烈推薦你選擇「淺藍色襯衫＋深灰色直筒西裝褲」！\n\n✨ 為什麼推薦這套？\n淺藍色能讓整體感覺更乾淨、柔和、親切，很適合想在面試中降低距離感的你。深灰色直筒褲則能保留正式與穩重感，修飾身形比例，讓你看起來既專業又自然。\n\n✅ 這套搭配的優點：\n• 風格專業但不會太僵硬\n• 非常適合韓系簡約審美\n• 能呈現自然自信的形象\n• 上下色彩搭配和諧，視覺平衡\n\n⚠️ 需要注意的地方：\n• 淺藍色襯衫的正式感可能比白襯衫低一些\n• 淺色衣物比較容易看出皺摺，面試前要確保平整度\n• 需要搭配深色皮鞋或樂福鞋才能更俐落\n\n💡 我的貼心建議：\n面試前一天晚上就把襯衫熨好，準備一條深色皮帶和深色皮鞋。這樣整體搭配會更加完美，讓你在面試中展現最自信的一面！',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 2: 高可解釋性 × 高雙面論點 × 高擬人化 × 低回應主動性
  {
    conditionId: 2,
    explainability: 'high',
    twoSidedMessage: 'high',
    anthropomorphism: 'high',
    proactivity: 'low',
    botName: 'Emma',
    avatarType: 'human',
    greetingText: '你好，我是 Emma。我會根據你的回答來幫助你挑選適合面試的韓系穿搭。',
    styleQuestionText: '你希望這套面試穿搭給人什麼感覺？',
    bodyShapeQuestionText: '以下哪一種描述比較接近你的身形？',
    koreanStyleQuestionText: '在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '了解，我已經記錄下你的偏好。',
    finalRecommendationText: '我建議你選擇「淺藍色襯衫＋深灰色直筒西裝褲」。\n\n📋 推薦原因：\n淺藍色襯衫能呈現乾淨、柔和的氣質，深灰色直筒褲則保留正式與穩重感。這個組合符合韓系簡約風格，適合面試場景。\n\n✅ 優點：\n• 風格專業但不僵硬\n• 符合韓系審美\n• 顏色搭配和諧\n\n⚠️ 限制：\n• 淺藍色的正式感較白襯衫低\n• 容易看出皺摺\n• 需要搭配深色鞋款',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 3: 高可解釋性 × 高雙面論點 × 低擬人化 × 高回應主動性
  {
    conditionId: 3,
    explainability: 'high',
    twoSidedMessage: 'high',
    anthropomorphism: 'low',
    proactivity: 'high',
    botName: 'AI 穿搭推薦系統',
    avatarType: 'system',
    greetingText: 'AI 穿搭推薦系統已啟動。本系統將依據你的風格偏好、身形條件與穿搭需求，產生面試穿搭建議。系統會詳細說明推薦理由，並提供優點與限制分析，幫助你做出最佳決策。',
    styleQuestionText: '請輸入或選擇：你希望這套面試穿搭給人什麼感覺？',
    bodyShapeQuestionText: '請選擇最接近你身形的描述：',
    koreanStyleQuestionText: '請輸入或選擇：在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '系統已記錄上述參數。正在進行穿搭推薦運算...',
    finalRecommendationText: '【AI 穿搭推薦結果】\n\n推薦穿搭：淺藍色襯衫＋深灰色直筒西裝褲\n\n【推薦依據分析】\n淺藍色襯衫具有乾淨、柔和的視覺特性，能降低觀眾的心理距離感。深灰色直筒褲則具備穩重感，並能修飾身形比例，適合正式場景。該組合符合韓系簡約設計哲學。\n\n【優勢分析】\n✓ 風格定位：專業但非呆板\n✓ 美學評估：符合韓系簡約風格\n✓ 氣質呈現：自然且自信\n✓ 色彩搭配：視覺層次分明\n\n【限制分析】\n✗ 正式度：淺藍色正式感低於白色襯衫\n✗ 維護需求：淺色易顯皺摺，需提前熨燙\n✗ 搭配要求：必須配深色腳飾件完成造型\n\n【系統建議】\n建議面試前 24 小時完成襯衫熨燙，並準備深色皮鞋或樂福鞋搭配，以優化整體視覺效果。',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 4: 高可解釋性 × 高雙面論點 × 低擬人化 × 低回應主動性
  {
    conditionId: 4,
    explainability: 'high',
    twoSidedMessage: 'high',
    anthropomorphism: 'low',
    proactivity: 'low',
    botName: 'AI 穿搭推薦系統',
    avatarType: 'system',
    greetingText: 'AI 穿搭推薦系統已啟動。系統將根據你的輸入進行穿搭推薦分析。',
    styleQuestionText: '你希望這套面試穿搭給人什麼感覺？',
    bodyShapeQuestionText: '請選擇最接近你身形的描述：',
    koreanStyleQuestionText: '在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '參數已記錄。',
    finalRecommendationText: '【推薦結果】\n推薦穿搭：淺藍色襯衫＋深灰色直筒西裝褲\n\n【推薦依據】\n淺藍色襯衫呈現乾淨感，深灰色直筒褲保留正式感。符合韓系簡約風格。\n\n【優點】\n• 專業但不呆板\n• 符合韓系風格\n• 視覺平衡\n\n【限制】\n• 淺藍色正式感較低\n• 易顯皺摺\n• 需配深色鞋款',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 5: 高可解釋性 × 低雙面論點 × 高擬人化 × 高回應主動性
  {
    conditionId: 5,
    explainability: 'high',
    twoSidedMessage: 'low',
    anthropomorphism: 'high',
    proactivity: 'high',
    botName: 'Emma',
    avatarType: 'human',
    greetingText: '嗨！👋 我是 Emma，你的 AI 穿搭顧問。我很高興能幫你挑選適合面試的穿搭！接下來我會透過幾個簡單問題，為你找到最完美的韓系穿搭。我會詳細解釋每個選擇的原因，確保你對推薦充滿信心！',
    styleQuestionText: '首先想問你，你希望這套面試穿搭給人什麼感覺呢？',
    bodyShapeQuestionText: '接下來想了解一下你的身形。以下哪一種描述比較接近你呢？',
    koreanStyleQuestionText: '在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '太好了！我已經完全理解你的需求。現在就為你推薦最合適的穿搭吧！',
    finalRecommendationText: '根據你的所有偏好，我強烈推薦你選擇「淺藍色襯衫＋深灰色直筒西裝褲」！\n\n✨ 為什麼這是最佳選擇？\n淺藍色襯衫的乾淨、柔和特性完美呼應了你對親切感的追求，同時深灰色直筒褲能展現穩重與專業。這個組合在韓系面試穿搭中是公認的經典搭配，能讓你在面試中展現最佳風采！\n\n💪 這套穿搭的強大優勢：\n• 風格專業卻不失親近感\n• 完全符合韓系簡約美學\n• 能有效提升你的自信度\n• 色彩組合完美和諧\n\n🎯 立即行動建議：\n建議你面試前一天晚上就準備好，熨好襯衫，搭配深色皮鞋。這樣你就能以最完美的狀態走進面試現場！',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 6: 高可解釋性 × 低雙面論點 × 高擬人化 × 低回應主動性
  {
    conditionId: 6,
    explainability: 'high',
    twoSidedMessage: 'low',
    anthropomorphism: 'high',
    proactivity: 'low',
    botName: 'Emma',
    avatarType: 'human',
    greetingText: '你好，我是 Emma。我會根據你的回答幫你挑選最適合的面試穿搭。',
    styleQuestionText: '你希望這套面試穿搭給人什麼感覺？',
    bodyShapeQuestionText: '以下哪一種描述比較接近你的身形？',
    koreanStyleQuestionText: '在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '我已經記下你的偏好。',
    finalRecommendationText: '我推薦你選擇「淺藍色襯衫＋深灰色直筒西裝褲」。\n\n這套穿搭的優勢：\n淺藍色襯衫呈現乾淨、柔和的氣質，深灰色直筒褲保留正式與穩重感。這個組合符合韓系簡約風格，是面試穿搭的理想選擇。能讓你展現專業且親切的形象。',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 7: 高可解釋性 × 低雙面論點 × 低擬人化 × 高回應主動性
  {
    conditionId: 7,
    explainability: 'high',
    twoSidedMessage: 'low',
    anthropomorphism: 'low',
    proactivity: 'high',
    botName: 'AI 穿搭推薦系統',
    avatarType: 'system',
    greetingText: 'AI 穿搭推薦系統已啟動。系統將根據你的風格偏好和身形條件，為你推薦最適合的面試穿搭。系統會詳細解釋推薦原因，幫助你做出最佳選擇。',
    styleQuestionText: '請輸入或選擇：你希望這套面試穿搭給人什麼感覺？',
    bodyShapeQuestionText: '請選擇最接近你身形的描述：',
    koreanStyleQuestionText: '請輸入或選擇：在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '系統已記錄參數。正在執行推薦演算...',
    finalRecommendationText: '【推薦穿搭】\n淺藍色襯衫＋深灰色直筒西裝褲\n\n【推薦理由】\n淺藍色襯衫具有乾淨感，深灰色直筒褲展現穩重感，二者結合完美詮釋韓系簡約風格。該穿搭選擇能有效提升你在面試中的整體形象。\n\n【優勢評析】\n✓ 風格定位準確\n✓ 符合韓系美學標準\n✓ 色彩搭配協調\n✓ 專業形象凸顯\n\n【建議】\n面試前確保衣物整潔，搭配深色腳飾件以完成整體造型。',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 8: 高可解釋性 × 低雙面論點 × 低擬人化 × 低回應主動性
  {
    conditionId: 8,
    explainability: 'high',
    twoSidedMessage: 'low',
    anthropomorphism: 'low',
    proactivity: 'low',
    botName: 'AI 穿搭推薦系統',
    avatarType: 'system',
    greetingText: 'AI 穿搭推薦系統已啟動。',
    styleQuestionText: '你希望這套面試穿搭給人什麼感覺？',
    bodyShapeQuestionText: '請選擇最接近你身形的描述：',
    koreanStyleQuestionText: '在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '參數已記錄。',
    finalRecommendationText: '【推薦結果】\n淺藍色襯衫＋深灰色直筒西裝褲\n\n淺藍色襯衫呈現乾淨感，深灰色直筒褲展現穩重感，符合韓系簡約風格。該選擇能提升面試形象。',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 9: 低可解釋性 × 高雙面論點 × 高擬人化 × 高回應主動性
  {
    conditionId: 9,
    explainability: 'low',
    twoSidedMessage: 'high',
    anthropomorphism: 'high',
    proactivity: 'high',
    botName: 'Emma',
    avatarType: 'human',
    greetingText: '嗨！👋 我是 Emma，你的 AI 穿搭顧問。我很期待幫你找到完美的面試穿搭。讓我們開始吧！',
    styleQuestionText: '首先，你希望這套面試穿搭給人什麼感覺呢？',
    bodyShapeQuestionText: '接下來，以下哪一種描述比較接近你的身形呢？',
    koreanStyleQuestionText: '在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '太好了！我已經了解你的需求。現在為你推薦最合適的穿搭！',
    finalRecommendationText: '根據你的偏好，我推薦「淺藍色襯衫＋深灰色直筒西裝褲」。\n\n✨ 這套穿搭很棒！\n它能展現你的風格，同時維持專業的形象。淺藍色搭配深灰色是經典組合，會讓你在面試中表現出色。\n\n✅ 主要優點：\n• 風格專業但親切\n• 非常適合面試場景\n• 韓系簡約風格\n\n⚠️ 需要考慮的方面：\n• 可能需要考慮一些細節搭配\n• 某些場合可能有不同效果\n\n💡 建議：\n面試前準備好，相信這套穿搭會讓你表現得很好！',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 10: 低可解釋性 × 高雙面論點 × 高擬人化 × 低回應主動性
  {
    conditionId: 10,
    explainability: 'low',
    twoSidedMessage: 'high',
    anthropomorphism: 'high',
    proactivity: 'low',
    botName: 'Emma',
    avatarType: 'human',
    greetingText: '你好，我是 Emma。我會幫你選擇適合的面試穿搭。',
    styleQuestionText: '你希望這套面試穿搭給人什麼感覺？',
    bodyShapeQuestionText: '以下哪一種描述比較接近你的身形？',
    koreanStyleQuestionText: '在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '好的，我已記錄。',
    finalRecommendationText: '我推薦「淺藍色襯衫＋深灰色直筒西裝褲」。\n\n這套穿搭不錯，能展現你的形象。淺藍色和深灰色的搭配很好看，適合面試。\n\n優點：\n• 風格不錯\n• 很適合面試\n\n可能需要考慮：\n• 一些場合細節',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 11: 低可解釋性 × 高雙面論點 × 低擬人化 × 高回應主動性
  {
    conditionId: 11,
    explainability: 'low',
    twoSidedMessage: 'high',
    anthropomorphism: 'low',
    proactivity: 'high',
    botName: 'AI 穿搭推薦系統',
    avatarType: 'system',
    greetingText: 'AI 穿搭推薦系統已啟動。系統將為你推薦合適的面試穿搭。請提供你的偏好信息。',
    styleQuestionText: '請輸入或選擇：你希望這套面試穿搭給人什麼感覺？',
    bodyShapeQuestionText: '請選擇最接近你身形的描述：',
    koreanStyleQuestionText: '請輸入或選擇：在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '系統已處理輸入信息。正在推薦...',
    finalRecommendationText: '【推薦穿搭】\n淺藍色襯衫＋深灰色直筒西裝褲\n\n【說明】\n該穿搭適合面試場景。\n\n【評估】\n✓ 適合面試\n✓ 風格合適\n\n✗ 可能有其他考慮因素',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 12: 低可解釋性 × 高雙面論點 × 低擬人化 × 低回應主動性
  {
    conditionId: 12,
    explainability: 'low',
    twoSidedMessage: 'high',
    anthropomorphism: 'low',
    proactivity: 'low',
    botName: 'AI 穿搭推薦系統',
    avatarType: 'system',
    greetingText: 'AI 穿搭推薦系統已啟動。',
    styleQuestionText: '你希望這套面試穿搭給人什麼感覺？',
    bodyShapeQuestionText: '請選擇最接近你身形的描述：',
    koreanStyleQuestionText: '在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '信息已記錄。',
    finalRecommendationText: '【推薦】\n淺藍色襯衫＋深灰色直筒西裝褲\n\n適合面試穿搭。',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 13: 低可解釋性 × 低雙面論點 × 高擬人化 × 高回應主動性
  {
    conditionId: 13,
    explainability: 'low',
    twoSidedMessage: 'low',
    anthropomorphism: 'high',
    proactivity: 'high',
    botName: 'Emma',
    avatarType: 'human',
    greetingText: '嗨！我是 Emma！讓我幫你挑選最完美的面試穿搭吧！',
    styleQuestionText: '你希望這套面試穿搭給人什麼感覺呢？',
    bodyShapeQuestionText: '以下哪一種描述比較接近你的身形呢？',
    koreanStyleQuestionText: '在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '完美！我已經知道什麼最適合你了！',
    finalRecommendationText: '我為你精心挑選了「淺藍色襯衫＋深灰色直筒西裝褲」！\n\n✨ 這真的是絕佳搭配！\n會讓你在面試中看起來很棒，充滿自信！相信我，你會很喜歡！',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 14: 低可解釋性 × 低雙面論點 × 高擬人化 × 低回應主動性
  {
    conditionId: 14,
    explainability: 'low',
    twoSidedMessage: 'low',
    anthropomorphism: 'high',
    proactivity: 'low',
    botName: 'Emma',
    avatarType: 'human',
    greetingText: '你好，我是 Emma。',
    styleQuestionText: '你希望這套面試穿搭給人什麼感覺？',
    bodyShapeQuestionText: '以下哪一種描述比較接近你的身形？',
    koreanStyleQuestionText: '在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '好的。',
    finalRecommendationText: '我推薦「淺藍色襯衫＋深灰色直筒西裝褲」。很適合。',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 15: 低可解釋性 × 低雙面論點 × 低擬人化 × 高回應主動性
  {
    conditionId: 15,
    explainability: 'low',
    twoSidedMessage: 'low',
    anthropomorphism: 'low',
    proactivity: 'high',
    botName: 'AI 穿搭推薦系統',
    avatarType: 'system',
    greetingText: 'AI 穿搭推薦系統已啟動。系統將為你推薦面試穿搭。',
    styleQuestionText: '請輸入或選擇：你希望這套面試穿搭給人什麼感覺？',
    bodyShapeQuestionText: '請選擇最接近你身形的描述：',
    koreanStyleQuestionText: '請輸入或選擇：在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '系統正在推薦...',
    finalRecommendationText: '【推薦穿搭】\n淺藍色襯衫＋深灰色直筒西裝褲',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },

  // Condition 16: 低可解釋性 × 低雙面論點 × 低擬人化 × 低回應主動性
  {
    conditionId: 16,
    explainability: 'low',
    twoSidedMessage: 'low',
    anthropomorphism: 'low',
    proactivity: 'low',
    botName: 'AI 穿搭推薦系統',
    avatarType: 'system',
    greetingText: 'AI 穿搭推薦系統已啟動。',
    styleQuestionText: '你希望這套面試穿搭給人什麼感覺？',
    bodyShapeQuestionText: '請選擇最接近你身形的描述：',
    koreanStyleQuestionText: '在韓系面試穿搭中，你比較偏好哪一種感覺？',
    confirmationText: '信息已記錄。',
    finalRecommendationText: '【推薦】淺藍色襯衫＋深灰色直筒西裝褲',
    surveyUrl: process.env.NEXT_PUBLIC_SURVEY_BASE_URL || 'https://your-survey-link.com',
  },
];

/**
 * 取得特定條件的配置
 */
export function getCondition(conditionId: number): Condition | undefined {
  return CONDITIONS.find(c => c.conditionId === conditionId);
}

/**
 * 取得隨機條件 ID
 */
export function getRandomConditionId(): number {
  const randomIndex = Math.floor(Math.random() * CONDITIONS.length);
  return CONDITIONS[randomIndex].conditionId;
}

/**
 * 取得所有條件 ID
 */
export function getAllConditionIds(): number[] {
  return CONDITIONS.map(c => c.conditionId);
}
