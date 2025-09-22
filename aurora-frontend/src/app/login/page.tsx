'use client';
import * as React from 'react';
import { 
  Box, 
  Button, 
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { keyframes } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AuthLayout from '@/components/AuthLayout';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <AuthLayout>
      <Stack sx={{ alignItems: 'center' }}>
        <LockOutlinedIcon 
          color="primary" 
          sx={{ 
            fontSize: 40, mb: 2, p: 1,
            animation: `${fadeIn} 0.6s 0.2s forwards`, opacity: 0,
            borderRadius: '50%',
            backgroundColor: 'rgba(25, 118, 210, 0.1)',
          }} 
        />
        <Typography 
          component="h1" 
          variant="h4" 
          sx={{ 
            fontWeight: 600, mb: 1,
            animation: `${fadeIn} 0.6s 0.3s forwards`, opacity: 0,
          }}
        >
          Acessar Plataforma
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            mb: 3,
            animation: `${fadeIn} 0.6s 0.4s forwards`, opacity: 0,
          }}
        >
          Entre com suas credenciais para continuar
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
          <Stack spacing={3}>
            <TextField
              required
              fullWidth
              id="email"
              label="Endereço de E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ animation: `${fadeIn} 0.6s 0.5s forwards`, opacity: 0 }}
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ animation: `${fadeIn} 0.6s 0.6s forwards`, opacity: 0 }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar-me"
              sx={{ animation: `${fadeIn} 0.6s 0.7s forwards`, opacity: 0 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disabled={isLoading}
              sx={{ 
                py: 1.5, fontSize: '1rem', fontWeight: 'bold', borderRadius: 2,
                '&:hover': { transform: 'translateY(-2px)', boxShadow: (theme) => `0 6px 16px ${theme.palette.primary.main}80` },
                animation: `${fadeIn} 0.6s 0.8s forwards`, opacity: 0
              }}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
            <Box 
              sx={{ 
                display: 'flex', justifyContent: 'space-between', width: '100%', mt: 1,
                animation: `${fadeIn} 0.6s 0.9s forwards`, opacity: 0
              }}
            >
              <Link href="#" variant="body2" color="primary">Esqueceu a senha?</Link>
              <Link href="/register" variant="body2" color="primary">Não tem conta? Cadastre-se</Link>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </AuthLayout>
  );
}
