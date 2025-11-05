'use client';

import { Box, Typography, Paper } from '@mui/material';
import { Psychology } from '@mui/icons-material';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ChatMessage as ChatMessageType } from '@/types/chat';

interface ChatContainerProps {
  messages: ChatMessageType[];
  onSendDoctorMessage: (message: string) => void;
  isComplete: boolean;
}

export const ChatContainer = ({
  messages,
  onSendDoctorMessage,
  isComplete
}: ChatContainerProps) => {
  return (
    <Paper elevation={2} sx={{ height: '865px', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ 
        flex: 1,
        overflow: 'auto', 
        p: 2,
      }}>
        {messages.length === 0 ? (
          <Box sx={{ 
            height: '100%',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <Box>
              <Psychology sx={{ fontSize: 40, color: 'grey.400', mb: 1 }} />
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Inicie a descrição dos sintomas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Descreva os sintomas do paciente
              </Typography>
            </Box>
          </Box>
        ) : (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        )}
        
        {isComplete && (
          <Paper
            elevation={1}
            sx={{
              p: 2,
              bgcolor: 'success.light',
              color: 'success.contrastText',
              borderRadius: 2,
              textAlign: 'center',
              mt: 2
            }}
          >
            <Typography variant="body2" fontWeight="600">
              ✅ Diagnóstico Concluído
            </Typography>
            <Typography variant="caption" sx={{ mt: 0.5, opacity: 0.9 }}>
              Exames solicitados com sucesso
            </Typography>
          </Paper>
        )}
      </Box>

      {!isComplete && (
        <ChatInput
          onSendMessage={onSendDoctorMessage}
          placeholder="Descreva os sintomas do paciente..."
        />
      )}
    </Paper>
  );
};