'use client';

import { useState, useCallback } from 'react';
import { ChatMessage, MedicalChatState } from '@/types/chat';

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    content: 'Olá Dr. Silva! Estou pronta para ajudar no diagnóstico. Por favor, descreva os sintomas do paciente.',
    sender: 'ia',
    timestamp: 'inicio',
    type: 'question'
  }
];

export const useMedicalChat = () => {
  const [state, setState] = useState<MedicalChatState>({
    messages: initialMessages,
    isComplete: false
  });

  const addMessage = useCallback((content: string, sender: 'doctor' | 'ia', type: ChatMessage['type']) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: 'chat',
      type
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));

    if (type === 'examination') {
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          isComplete: true,
          messages: [
            ...prev.messages,
            {
              id: (Date.now() + 1).toString(),
              content: 'Perfeito! Com base nas informações, solicito os seguintes exames para confirmação do diagnóstico: Hemograma completo, Eletrocardiograma e Radiografia de tórax.',
              sender: 'ia',
              timestamp: 'final',
              type: 'diagnosis'
            }
          ]
        }));
      }, 1500);
    } else if (sender === 'doctor') {
      setTimeout(() => {
        const responses = [
          'Entendo. Poderia me dar mais detalhes sobre a intensidade desses sintomas?',
          'Há quanto tempo o paciente apresenta esses sintomas?',
          'O paciente tem histórico familiar de condições similares?',
          'Existem outros sintomas associados que não foram mencionados?',
          'Com base no descrito, recomendo investigar mais a fundo. Poderia detalhar...',
          'Interessante. Esses sintomas melhoram ou pioram em alguma situação específica?'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        addMessage(randomResponse, 'ia', 'question');
      }, 1000);
    }
  }, []);

  const sendDoctorMessage = useCallback((content: string, type: ChatMessage['type'] = 'question') => {
    addMessage(content, 'doctor', type);
  }, [addMessage]);

  return {
    messages: state.messages,
    isComplete: state.isComplete,
    sendDoctorMessage
  };
};