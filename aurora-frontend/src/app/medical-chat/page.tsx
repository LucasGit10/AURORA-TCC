'use client';

import { Box } from '@mui/material';
import { useMedicalChat } from '@/hooks/useMedicalChat';
import { ChatContainer } from '@/components/medical-chat/ChatContainer';

export default function MedicalChatPage() {
  const { messages, isComplete, sendDoctorMessage } = useMedicalChat();

  const handleSendDoctorMessage = (content: string) => {
    sendDoctorMessage(content, content.toLowerCase().includes('exame') ? 'examination' : 'question');
  };

  return (
    <Box sx={{ p: 2 }}>
      <ChatContainer
        messages={messages}
        onSendDoctorMessage={handleSendDoctorMessage}
        isComplete={isComplete}
      />
    </Box>
  );
}