'use client';

import { Box, Typography, Paper, Avatar } from '@mui/material';
import { MedicalServices, Psychology } from '@mui/icons-material';
import { ChatMessage as ChatMessageType } from '@/types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isDoctor = message.sender === 'doctor';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isDoctor ? 'flex-start' : 'flex-end',
        alignItems: 'flex-start',
        gap: 1,
        mb: 1,
        width: '100%'
      }}
    >
      {isDoctor ? (
        <>
          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32, flexShrink: 0 }}>
            <MedicalServices sx={{ fontSize: 16 }} />
          </Avatar>
          <Box sx={{ maxWidth: '75%', display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Typography variant="caption" fontWeight="600" color="primary" sx={{ mb: 0.5 }}>
              Médico
            </Typography>
            <Paper
              elevation={1}
              sx={{
                p: 1,
                bgcolor: 'primary.50',
                color: 'text.primary',
                borderRadius: 2,
              }}
            >
              <Typography variant="body2">
                {message.content}
              </Typography>
            </Paper>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ maxWidth: '75%', display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'flex-end' }}>
            <Typography variant="caption" fontWeight="600" color="secondary.main" sx={{ mb: 0.5 }}>
              IA Médica
            </Typography>
            <Paper
              elevation={1}
              sx={{
                p: 1,
                bgcolor: 'white',
                color: 'text.primary',
                borderRadius: 2,
                border: 1,
                borderColor: 'grey.200'
              }}
            >
              <Typography variant="body2">
                {message.content}
              </Typography>
            </Paper>
          </Box>
          <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32, flexShrink: 0 }}>
            <Psychology sx={{ fontSize: 16 }} />
          </Avatar>
        </>
      )}
    </Box>
  );
};