'use client';
import * as React from 'react';
import { 
  Alert,
  Box, 
  Button, 
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { keyframes } from '@mui/system';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AuthLayout from '@/components/AuthLayout';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function CadastroPage() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError('As senhas não conferem.');
      setIsLoading(false);
      return;
    }

    try {
      await api.post('/auth/register', {
        name,
        email,
        password,
      });

      await login(email, password);

    } catch (err: any) {
      setIsLoading(false);
      setError(err.response?.data?.message || 'Ocorreu um erro no cadastro.');
    }
  };

  return (
    <AuthLayout>
      <Stack sx={{ alignItems: 'center' }}>
        <PersonAddAlt1Icon 
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
          Criar Nova Conta
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            mb: 3,
            animation: `${fadeIn} 0.6s 0.4s forwards`, opacity: 0,
          }}
        >
          Preencha os dados para se cadastrar na plataforma
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
          <Stack spacing={2.5}>

            {error && (
              <Alert severity="error" sx={{ animation: `${fadeIn} 0.6s forwards`, opacity: 0 }}>
                {error}
              </Alert>
            )}

            <TextField
              required
              fullWidth
              id="name"
              label="Nome Completo"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ animation: `${fadeIn} 0.6s 0.5s forwards`, opacity: 0 }}
            />
            <TextField
              required
              fullWidth
              id="email"
              label="Endereço de E-mail"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ animation: `${fadeIn} 0.6s 0.6s forwards`, opacity: 0 }}
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ animation: `${fadeIn} 0.6s 0.7s forwards`, opacity: 0 }}
            />
            <TextField
              required
              fullWidth
              name="confirmPassword"
              label="Confirmar Senha"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ animation: `${fadeIn} 0.6s 0.8s forwards`, opacity: 0 }}
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
                animation: `${fadeIn} 0.6s 0.9s forwards`, opacity: 0
              }}
            >
              {isLoading ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
            <Box 
              sx={{ 
                textAlign: 'center',
                width: '100%', 
                mt: 1, 
                animation: `${fadeIn} 0.6s 1s forwards`, opacity: 0
              }}
            >
              <Link href="/login" variant="body2" color="primary">
                Já tem uma conta? Faça login
              </Link>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </AuthLayout>
  );
}
