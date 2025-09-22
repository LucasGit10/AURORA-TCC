'use client';
import * as React from 'react';
import { 
  Box, 
  Paper,
  Stack,
  Typography 
} from '@mui/material';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';

import { AuthModalProps } from '@/types';
import { zoomIn, shimmerAnimation } from '@/styles/animations';

export default function AuthModal({ children }: AuthModalProps) {
  return (
    <Box 
      sx={{ 
        minHeight: '98vh', 
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #f0f4f8 0%, #d9e2ec 100%)',
        position: 'relative',
        overflow: 'hidden',
        p: 2
      }}
    >
      <Paper
        elevation={24}
        sx={{
          width: { xs: '90%', sm: '85%', md: '75%', lg: '800px' },
          maxWidth: '800px',
          display: 'flex',
          borderRadius: 4,
          overflow: 'hidden',
          animation: `${zoomIn} 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards`,
          maxHeight: '90vh',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
          }
        }}
      >
        <Box 
          sx={{
            flex: 1,
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
            color: '#fff',
            background: 'linear-gradient(160deg, #3a3a5e 0%, #1e1e2f 100%)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(45deg, rgba(129, 212, 250, 0.1) 0%, rgba(187, 222, 251, 0.2) 100%)',
              opacity: 0.5,
            }
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '-50%', left: '-50%',
              width: '200%', height: '200%',
              animation: `${shimmerAnimation} 8s linear infinite`,
              background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
              transform: 'rotate(30deg)',
            }}
          />
          <Stack 
            direction="row" 
            spacing={2} 
            alignItems="center" 
            sx={{ mb: 3, zIndex: 1 }}
          >
            <AutoAwesomeMosaicIcon sx={{ fontSize: '3rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #81d4fa, #f8f8f2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              Aurora
            </Typography>
          </Stack>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              textAlign: 'center', 
              zIndex: 1,
              fontSize: '1.1rem',
            }}
          >
            A precisão da IA a serviço da medicina.
          </Typography>
        </Box>
        
        <Box 
          sx={{
            flex: 1.2,
            p: { xs: 3, sm: 5 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            bgcolor: '#fff'
          }}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  );
}
