export interface ChatMessage {
  id: string;
  content: string;
  sender: 'doctor' | 'ia';
  timestamp: string;
  type: 'symptom' | 'question' | 'examination' | 'diagnosis';
}

export interface MedicalChatState {
  messages: ChatMessage[];
  isComplete: boolean;
}