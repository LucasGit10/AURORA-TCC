'use client';

import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { Send } from '@mui/icons-material';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const ChatInput = ({ onSendMessage, disabled = false, placeholder = "Digite sua mensagem..." }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <Box sx={{ p: 1.5, bgcolor: 'white', borderTop: 1, borderColor: 'grey.200' }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
        <TextField
          fullWidth
          multiline
          maxRows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          variant="outlined"
          size="small"
        />
        <Button
          type="submit"
          variant="contained"
          disabled={!message.trim() || disabled}
          sx={{ 
            minWidth: '40px', 
            height: '40px',
            borderRadius: '8px'
          }}
        >
          <Send sx={{ fontSize: 18 }} />
        </Button>
      </Box>
    </Box>
  );
};