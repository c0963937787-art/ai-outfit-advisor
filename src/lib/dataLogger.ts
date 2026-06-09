/**
 * 資料記錄工具
 * 記錄受試者的互動資料
 */

export interface InteractionRecord {
  participantId: string;
  conditionId: number;
  timestamp: string;
  stepName: string;
  userMessage?: string;
  aiResponse?: string;
  userChoice?: string;
}

/**
 * 本地儲存記錄（用於開發環境）
 */
const interactionLog: InteractionRecord[] = [];

/**
 * 記錄互動（本地）
 */
export function recordInteractionLocally(record: InteractionRecord): void {
  interactionLog.push(record);
  console.log('互動記錄:', record);
}

/**
 * 取得所有本地記錄
 */
export function getLocalInteractionLog(): InteractionRecord[] {
  return interactionLog;
}

/**
 * 導出記錄為 CSV 格式
 */
export function exportLogsAsCSV(): string {
  if (interactionLog.length === 0) {
    return '';
  }

  // CSV header
  const headers = [
    'participantId',
    'conditionId',
    'timestamp',
    'stepName',
    'userMessage',
    'aiResponse',
    'userChoice',
  ];

  // CSV rows
  const rows = interactionLog.map(record => [
    record.participantId,
    record.conditionId,
    record.timestamp,
    record.stepName,
    `"${(record.userMessage || '').replace(/"/g, '""')}"`,
    `"${(record.aiResponse || '').replace(/"/g, '""')}"`,
    record.userChoice || '',
  ]);

  const csv = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');

  return csv;
}

/**
 * 下載記錄為 CSV 文件
 */
export function downloadLogsAsCSV(filename = 'chat-logs.csv'): void {
  const csv = exportLogsAsCSV();
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

/**
 * 清空本地記錄
 */
export function clearLocalLogs(): void {
  interactionLog.length = 0;
}

/**
 * 生成參與者 ID
 */
export function generateParticipantId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `P-${timestamp}-${random}`.toUpperCase();
}