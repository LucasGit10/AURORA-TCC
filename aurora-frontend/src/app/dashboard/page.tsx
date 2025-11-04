'use client';

import { 
  Box, 
  Typography, 
  Paper,
  Button,
  CircularProgress,
  Alert
} from '@mui/material';
import { 
  People, 
  Event, 
  TrendingUp, 
  LocalHospital,
  Assignment,
  Hotel,
  Add
} from '@mui/icons-material';
import { useDashboard } from '@/hooks/useDashboard';
import { StatCard } from '@/components/dashboard/StatCard';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { AppointmentsList } from '@/components/dashboard/AppointmentsList';
import { SimpleChart } from '@/components/dashboard/SimpleChart';

export default function Dashboard() {
  const { stats, recentActivities, todayAppointments, chartData, loading } = useDashboard();

  if (loading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="60vh"
        flexDirection="column"
        gap={3}
      >
        <CircularProgress size={60} />
        <Typography variant="h6" color="text.secondary">
          Carregando dashboard...
        </Typography>
      </Box>
    );
  }

  if (!stats) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">
          Erro ao carregar dados do dashboard. Tente novamente.
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          border: '2px solid',
          borderColor: 'grey.200',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
          }
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Dashboard Hospitalar
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Visão geral do sistema - {new Date().toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            startIcon={<Add />}
            size="large"
            sx={{
              borderRadius: 3,
              px: 4,
              fontWeight: 600,
            }}
          >
            Nova Consulta
          </Button>
        </Box>
      </Paper>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(6, 1fr)'
          },
          gap: 3,
          mb: 4
        }}
      >
        <Box>
          <StatCard
            title="Pacientes"
            value={stats.totalPatients}
            icon={People}
            color="primary"
            trend={{ value: 12, isPositive: true }}
          />
        </Box>
        <Box>
          <StatCard
            title="Consultas Hoje"
            value={stats.appointmentsToday}
            icon={Event}
            color="success"
            subtitle="de 25 agendadas"
          />
        </Box>
        <Box>
          <StatCard
            title="Ocupação"
            value={`${stats.occupancyRate}%`}
            icon={TrendingUp}
            color="warning"
            progress={stats.occupancyRate}
          />
        </Box>
        <Box>
          <StatCard
            title="Receita"
            value={`R$ ${stats.revenue.toLocaleString()}`}
            icon={LocalHospital}
            color="info"
            trend={{ value: 8, isPositive: true }}
          />
        </Box>
        <Box>
          <StatCard
            title="Exames Pendentes"
            value={stats.pendingExams}
            icon={Assignment}
            color="error"
          />
        </Box>
        <Box>
          <StatCard
            title="Leitos Livres"
            value={stats.availableBeds}
            icon={Hotel}
            color="secondary"
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            lg: '2fr 1fr'
          },
          gap: 3,
          mb: 3
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          <Box sx={{ minHeight: 400 }}>
            {chartData && (
              <SimpleChart 
                data={chartData} 
                title="Consultas da Semana"
                height={400}
              />
            )}
          </Box>

          <Box>
            <AppointmentsList appointments={todayAppointments} />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          <Box sx={{ flex: 1 }}>
            <ActivityFeed activities={recentActivities} />
          </Box>

          <Box>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                Ações Rápidas
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 2,
                  mt: 1
                }}
              >
                <Button 
                  variant="outlined" 
                  fullWidth 
                  startIcon={<People />}
                  sx={{ py: 1.5, borderRadius: 2 }}
                >
                  Novo Paciente
                </Button>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  startIcon={<Event />}
                  sx={{ py: 1.5, borderRadius: 2 }}
                >
                  Agendar Consulta
                </Button>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  startIcon={<Assignment />}
                  sx={{ py: 1.5, borderRadius: 2 }}
                >
                  Solicitar Exame
                </Button>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  startIcon={<LocalHospital />}
                  sx={{ py: 1.5, borderRadius: 2 }}
                >
                  Registrar Internação
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}