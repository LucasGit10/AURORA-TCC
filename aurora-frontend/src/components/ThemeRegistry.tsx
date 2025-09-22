'use client';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#66d9ff',
    },
    secondary: {
      main: '#f92672',
    },
    background: {
      default: '#1e1e2f',
      paper: '#27293d',
    },
    text: {
      primary: '#f8f8f2',
      secondary: '#b0b0c0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
    },
    h4: {
        fontWeight: 700,
    },
    h5: {
        fontWeight: 600,
    }
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
