'use client';
import * as React from 'react';
import { 
  AppBar, 
  Avatar,
  Box, 
  Button, 
  Card, 
  CardContent, 
  Chip,
  Container, 
  Divider,
  Grid,
  IconButton,
  Paper,
  Toolbar, 
  Typography,
  useScrollTrigger,
  Fade,
  Slide
} from '@mui/material';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ArticleIcon from '@mui/icons-material/Article';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { keyframes } from '@mui/system';

// Animações personalizadas
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shimmerAnimation = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

// Componente para efeito de elevação no AppBar ao rolar
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      ...children.props.sx,
      backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: trigger ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
    }
  });
}

export default function HomePage() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', color: 'text.primary' }}>
      <ElevationScroll>
        <AppBar position="fixed" sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <Container maxWidth="xl">
            <Toolbar>
              <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                <AutoAwesomeIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', background: 'linear-gradient(45deg, #1976d2, #42a5f5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Aurora IA
                </Typography>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                <Button href="#features" color="inherit">Recursos</Button>
                <Button href="#how-it-works" color="inherit">Como Funciona</Button>
                <Button href="#testimonials" color="inherit">Depoimentos</Button>
                <Button href="#benefits" color="inherit">Vantagens</Button>
              </Box>
              <Button variant="contained" color="primary" sx={{ ml: 4, borderRadius: 2 }}>
                Acessar Plataforma
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Toolbar /> {/* Espaço para o AppBar fixo */}

      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: { xs: 8, md: 16 }, 
          pb: { xs: 8, md: 16 }, 
          textAlign: 'center', 
          background: 'linear-gradient(-45deg, #1e1e2f, #3a3a5e, #2c2c4c, #252542)',
          backgroundSize: '400% 400%',
          animation: `${gradientAnimation} 15s ease infinite`,
          color: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(129, 212, 250, 0.2) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(187, 222, 251, 0.3) 0%, transparent 40%)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="md">
          <Chip 
            icon={<AutoAwesomeIcon />} 
            label="Tecnologia de Ponta em Saúde" 
            sx={{ 
              mb: 3, 
              background: 'rgba(255, 255, 255, 0.15)', 
              color: 'white', 
              backdropFilter: 'blur(10px)',
              animation: `${pulseAnimation} 2s infinite`
            }} 
          />
          <Typography 
            component="h1" 
            variant="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #81d4fa, #f8f8f2, #bbdefb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3
            }}
          >
            A Próxima Geração de Diagnósticos Médicos
          </Typography>
          <Typography variant="h5" sx={{ mt: 3, color: 'rgba(255, 255, 255, 0.9)', mb: 4 }}>
            Capacite profissionais de saúde com análises inteligentes, seguras e instantâneas para decisões clínicas mais assertivas.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large" 
              color="primary" 
              sx={{ 
                py: 1.5, 
                px: 5, 
                fontSize: '1.1rem',
                borderRadius: 2,
                animation: `${pulseAnimation} 2s infinite`
              }}
            >
              Solicitar Demonstração
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{ 
                py: 1.5, 
                px: 5, 
                fontSize: '1.1rem',
                borderRadius: 2,
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Saiba Mais
            </Button>
          </Box>
        </Container>
        <IconButton 
          sx={{ 
            position: 'absolute', 
            bottom: 40, 
            left: '50%', 
            transform: 'translateX(-50%)',
            color: 'white',
            animation: `${floatAnimation} 2s ease-in-out infinite`,
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
          href="#features"
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>

      {/* Stats Section */}
      <Container sx={{ py: 8, transform: 'translateY(-50px)' }}>
        <Paper 
          elevation={8} 
          sx={{ 
            p: 4, 
            borderRadius: 4, 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,245,255,0.9) 100%)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} sm={3} textAlign="center">
              <Typography variant="h3" color="primary" fontWeight="bold">98%</Typography>
              <Typography variant="body1" color="text.secondary">Precisão</Typography>
            </Grid>
            <Grid item xs={6} sm={3} textAlign="center">
              <Typography variant="h3" color="primary" fontWeight="bold">5.000+</Typography>
              <Typography variant="body1" color="text.secondary">Profissionais</Typography>
            </Grid>
            <Grid item xs={6} sm={3} textAlign="center">
              <Typography variant="h3" color="primary" fontWeight="bold">2M+</Typography>
              <Typography variant="body1" color="text.secondary">Análises</Typography>
            </Grid>
            <Grid item xs={6} sm={3} textAlign="center">
              <Typography variant="h3" color="primary" fontWeight="bold">0.2s</Typography>
              <Typography variant="body1" color="text.secondary">Tempo Médio</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Features Section */}
      <Container id="features" sx={{ py: 10 }} maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
          Inteligência a Serviço da Saúde
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
          Descubra como nossa plataforma está revolucionando o diagnóstico médico com tecnologia de ponta
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Fade in={isVisible} timeout={1000}>
              <Card sx={{ 
                height: '100%', 
                transition: '0.3s', 
                borderRadius: 4,
                '&:hover': { 
                  transform: 'translateY(-8px)', 
                  boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                  '& .MuiCardContent-root': {
                    background: 'linear-gradient(135deg, rgba(25,118,210,0.03) 0%, rgba(25,118,210,0.1) 100%)'
                  }
                }
              }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ 
                    display: 'inline-flex', 
                    p: 2, 
                    mb: 2, 
                    borderRadius: 3, 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    animation: `${floatAnimation} 3s ease-in-out infinite`
                  }}>
                    <AutoAwesomeIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                    Análise Preditiva
                  </Typography>
                  <Typography color="text.secondary">
                    Utiliza algoritmos avançados para analisar dados complexos, identificando padrões que o olho humano poderia não perceber.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>

          <Grid item xs={12} md={4}>
            <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '100ms' }}>
              <Card sx={{ 
                height: '100%', 
                transition: '0.3s', 
                borderRadius: 4,
                '&:hover': { 
                  transform: 'translateY(-8px)', 
                  boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                  '& .MuiCardContent-root': {
                    background: 'linear-gradient(135deg, rgba(25,118,210,0.03) 0%, rgba(25,118,210,0.1) 100%)'
                  }
                }
              }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ 
                    display: 'inline-flex', 
                    p: 2, 
                    mb: 2, 
                    borderRadius: 3, 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    animation: `${floatAnimation} 3s ease-in-out infinite`,
                    animationDelay: '1s'
                  }}>
                    <SpeedIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                    Velocidade e Eficiência
                  </Typography>
                  <Typography color="text.secondary">
                    Receba pré-diagnósticos e relatórios em segundos. Otimize seu tempo e foque no que realmente importa: seus pacientes.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>

          <Grid item xs={12} md={4}>
            <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '200ms' }}>
              <Card sx={{ 
                height: '100%', 
                transition: '0.3s', 
                borderRadius: 4,
                '&:hover': { 
                  transform: 'translateY(-8px)', 
                  boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                  '& .MuiCardContent-root': {
                    background: 'linear-gradient(135deg, rgba(25,118,210,0.03) 0%, rgba(25,118,210,0.1) 100%)'
                  }
                }
              }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ 
                    display: 'inline-flex', 
                    p: 2, 
                    mb: 2, 
                    borderRadius: 3, 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    animation: `${floatAnimation} 3s ease-in-out infinite`,
                    animationDelay: '2s'
                  }}>
                    <VerifiedUserIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                    Segurança Inabalável
                  </Typography>
                  <Typography color="text.secondary">
                    Construído sobre uma infraestrutura robusta e em conformidade com a LGPD, garantindo total privacidade dos dados.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Container>
      
      {/* How It Works Section */}
      <Box id="how-it-works" sx={{ py: 10, bgcolor: 'rgba(25, 118, 210, 0.03)', position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 10% 20%, rgba(25, 118, 210, 0.05) 0%, transparent 30%)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            Simples, Rápido e Preciso
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 700, mx: 'auto' }}>
            Três passos simples para obter análises de inteligência artificial de alta qualidade
          </Typography>
          
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={4}>
              <Fade in={isVisible} timeout={1000}>
                <Paper elevation={0} sx={{ p: 4, textAlign: 'center', bgcolor: 'transparent', position: 'relative' }}>
                  <Box sx={{ 
                    position: 'absolute', 
                    top: -20, 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 24,
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)'
                  }}>
                    1
                  </Box>
                  <UploadFileIcon sx={{ fontSize: 60, color: 'primary.main', mt: 3, mb: 2 }} />
                  <Typography variant="h5" sx={{ mt: 2, fontWeight: 600 }}>Envio de Dados</Typography>
                  <Typography color="text.secondary" sx={{ mt: 2 }}>Faça o upload seguro de exames, laudos e históricos do paciente em nossa plataforma intuitiva.</Typography>
                </Paper>
              </Fade>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '200ms' }}>
                <Paper elevation={0} sx={{ p: 4, textAlign: 'center', bgcolor: 'transparent', position: 'relative' }}>
                  <Box sx={{ 
                    position: 'absolute', 
                    top: -20, 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 24,
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)'
                  }}>
                    2
                  </Box>
                  <PsychologyIcon sx={{ fontSize: 60, color: 'primary.main', mt: 3, mb: 2 }} />
                  <Typography variant="h5" sx={{ mt: 2, fontWeight: 600 }}>Análise da IA</Typography>
                  <Typography color="text.secondary" sx={{ mt: 2 }}>Nossa IA processa as informações em segundos, cruzando dados com milhões de casos clínicos.</Typography>
                </Paper>
              </Fade>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '400ms' }}>
                <Paper elevation={0} sx={{ p: 4, textAlign: 'center', bgcolor: 'transparent', position: 'relative' }}>
                  <Box sx={{ 
                    position: 'absolute', 
                    top: -20, 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 24,
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)'
                  }}>
                    3
                  </Box>
                  <ArticleIcon sx={{ fontSize: 60, color: 'primary.main', mt: 3, mb: 2 }} />
                  <Typography variant="h5" sx={{ mt: 2, fontWeight: 600 }}>Relatório Detalhado</Typography>
                  <Typography color="text.secondary" sx={{ mt: 2 }}>Receba um relatório completo com insights, probabilidades diagnósticas e sugestões baseadas em evidências.</Typography>
                </Paper>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box id="benefits" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            Vantagens de Utilizar a Aurora IA
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 700, mx: 'auto' }}>
            Descubra todos os benefícios que nossa plataforma pode oferecer para sua prática médica
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Fade in={isVisible} timeout={1000}>
                <Box sx={{ display: 'flex', mb: 4 }}>
                  <HealthAndSafetyIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>Melhor Precisão Diagnóstica</Typography>
                    <Typography color="text.secondary">
                      Nossa IA analisa padrões complexos em exames com uma precisão de 98%, reduzindo significativamente os erros diagnósticos.
                    </Typography>
                  </Box>
                </Box>
              </Fade>
              
              <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '100ms' }}>
                <Box sx={{ display: 'flex', mb: 4 }}>
                  <AnalyticsIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>Economia de Tempo</Typography>
                    <Typography color="text.secondary">
                      Reduza o tempo de análise de exames em até 70%, permitindo que você atenda mais pacientes sem perder a qualidade.
                    </Typography>
                  </Box>
                </Box>
              </Fade>
              
              <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '200ms' }}>
                <Box sx={{ display: 'flex' }}>
                  <GroupsIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>Suporte à Decisão Clínica</Typography>
                    <Typography color="text.secondary">
                      Obtenha insights valiosos baseados em milhões de casos para apoiar suas decisões clínicas com mais confiança.
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '300ms' }}>
                <Paper sx={{ p: 4, borderRadius: 4, bgcolor: 'primary.main', color: 'white', height: '100%' }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Comece Agora Mesmo</Typography>
                  <Typography sx={{ mb: 3 }}>Experimente gratuitamente por 14 dias e descubra como a Aurora IA pode transformar sua prática médica.</Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CheckCircleIcon sx={{ mr: 1 }} />
                      <Typography>Análise de até 5 exames por mês</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CheckCircleIcon sx={{ mr: 1 }} />
                      <Typography>Relatórios completos e detalhados</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CheckCircleIcon sx={{ mr: 1 }} />
                      <Typography>Suporte técnico especializado</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircleIcon sx={{ mr: 1 }} />
                      <Typography>Sem compromisso, cancele quando quiser</Typography>
                    </Box>
                  </Box>
                  
                  <Button 
                    variant="contained" 
                    size="large" 
                    sx={{ 
                      bgcolor: 'white', 
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)'
                      }
                    }}
                  >
                    Experimente Grátis
                  </Button>
                </Paper>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box id="testimonials" sx={{ py: 10, bgcolor: 'rgba(25, 118, 210, 0.03)' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            O que os Especialistas Dizem
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 700, mx: 'auto' }}>
            Confira a opinião de profissionais de saúde que já utilizam a Aurora IA em sua prática clínica
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Fade in={isVisible} timeout={1000}>
                <Paper variant="outlined" sx={{ p: 4, borderRadius: 4, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 60, height: 60 }}>AD</Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>Dra. Ana Dutra</Typography>
                      <Typography variant="body2" color="text.secondary">Cardiologista • Hospital Albert Einstein</Typography>
                    </Box>
                  </Box>
                  <FormatQuoteIcon sx={{ color: 'primary.main', fontSize: 40, mb: 2 }} />
                  <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 3 }}>
                    "A Aurora IA transformou a forma como analiso ecocardiogramas. A velocidade e a precisão dos insights me dão mais segurança e tempo para focar no tratamento."
                  </Typography>
                  <Box sx={{ display: 'flex' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Box key={star} sx={{ color: 'gold', mr: 0.5 }}>★</Box>
                    ))}
                  </Box>
                </Paper>
              </Fade>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '200ms' }}>
                <Paper variant="outlined" sx={{ p: 4, borderRadius: 4, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 60, height: 60 }}>ML</Avatar>
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>Dr. Marcos Lima</Typography>
                      <Typography variant="body2" color="text.secondary">Neurologista • Hospital Sírio-Libanês</Typography>
                    </Box>
                  </Box>
                  <FormatQuoteIcon sx={{ color: 'primary.main', fontSize: 40, mb: 2 }} />
                  <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 3 }}>
                    "Impressionante a capacidade da plataforma de identificar padrões sutis em ressonâncias magnéticas. É uma ferramenta de apoio diagnóstico indispensável."
                  </Typography>
                  <Box sx={{ display: 'flex' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Box key={star} sx={{ color: 'gold', mr: 0.5 }}>★</Box>
                    ))}
                  </Box>
                </Paper>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* CTA Section */}
      <Box sx={{ 
        py: 10, 
        background: 'linear-gradient(-45deg, #1e1e2f, #3a3a5e, #2c2c4c, #252542)',
        backgroundSize: '400% 400%',
        animation: `${gradientAnimation} 15s ease infinite`,
        color: '#fff', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 70% 30%, rgba(129, 212, 250, 0.2) 0%, transparent 40%)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Pronto para Revolucionar sua Prática Clínica?
          </Typography>
          <Typography sx={{ my: 2, color: 'rgba(255, 255, 255, 0.9)', mb: 4 }}>
            Descubra como a Aurora IA pode otimizar seu fluxo de trabalho e aprimorar a precisão dos seus diagnósticos.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large" 
              color="primary" 
              sx={{ 
                py: 1.5, 
                px: 5, 
                fontSize: '1.1rem',
                borderRadius: 2,
                animation: `${pulseAnimation} 2s infinite`
              }}
            >
              Fale com um Especialista
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{ 
                py: 1.5, 
                px: 5, 
                fontSize: '1.1rem',
                borderRadius: 2,
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Ver Planos e Preços
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AutoAwesomeIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  Aurora IA
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                A plataforma de inteligência artificial que está revolucionando o diagnóstico médico com tecnologia de ponta.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton size="small"><FacebookIcon /></IconButton>
                <IconButton size="small"><TwitterIcon /></IconButton>
                <IconButton size="small"><LinkedInIcon /></IconButton>
                <IconButton size="small"><InstagramIcon /></IconButton>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>Recursos</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display: 'block', mb: 1 }}>Análise de Imagens</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display: 'block', mb: 1 }}>Diagnóstico Preditivo</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display: 'block', mb: 1 }}>Relatórios Detalhados</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display: 'block' }}>Integrações</Typography>
            </Grid>
            
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>Empresa</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display: 'block', mb: 1 }}>Sobre Nós</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display: 'block', mb: 1 }}>Carreiras</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display: 'block', mb: 1 }}>Blog</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ display: 'block' }}>Contato</Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>Inscreva-se para Novidades</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Receba as últimas atualizações e novidades da Aurora IA.</Typography>
              <Box sx={{ display: 'flex' }}>
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  style={{ 
                    flexGrow: 1, 
                    padding: '10px 16px', 
                    border: '1px solid #ccc', 
                    borderRadius: '4px 0 0 4px',
                    fontSize: '14px'
                  }} 
                />
                <Button variant="contained" color="primary" sx={{ borderRadius: '0 4px 4px 0' }}>
                  Inscrever
                </Button>
              </Box>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4 }} />
          
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Aurora IA. Todos os direitos reservados.'}
          </Typography>
          <Typography variant="caption" color="text.secondary" align="center" display="block" sx={{ mt: 1 }}>
            A plataforma Aurora IA é uma ferramenta de suporte à decisão clínica e não substitui o julgamento de um profissional de saúde qualificado.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}