import { Card, CardContent, Typography, Box, List, ListItem, Chip, Button } from '@mui/material';
import { Appointment } from '@/types/dashboard';
import { AccessTime, CheckCircle, PlayCircle, Cancel } from '@mui/icons-material';

interface AppointmentsListProps {
  appointments: Appointment[];
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'scheduled':
      return AccessTime;
    case 'in-progress':
      return PlayCircle;
    case 'completed':
      return CheckCircle;
    case 'cancelled':
      return Cancel;
    default:
      return AccessTime;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'scheduled':
      return 'primary';
    case 'in-progress':
      return 'warning';
    case 'completed':
      return 'success';
    case 'cancelled':
      return 'error';
    default:
      return 'default';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'scheduled':
      return 'Agendada';
    case 'in-progress':
      return 'Em andamento';
    case 'completed':
      return 'Concluída';
    case 'cancelled':
      return 'Cancelada';
    default:
      return status;
  }
};

export const AppointmentsList = ({ appointments }: AppointmentsListProps) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h6" fontWeight="600">
            Consultas de Hoje
          </Typography>
          <Button variant="outlined" size="small">
            Ver Todas
          </Button>
        </Box>
        
        <List>
          {appointments.map((appointment) => {
            const StatusIcon = getStatusIcon(appointment.status);
            
            return (
              <ListItem 
                key={appointment.id}
                sx={{ 
                  px: 0, 
                  py: 2,
                  borderBottom: '1px solid',
                  borderColor: 'grey.100',
                  '&:last-child': { borderBottom: 'none' }
                }}
              >
                <Box display="flex" alignItems="flex-start" gap={2} width="100%">
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: 'grey.50',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      minWidth: 48,
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" color="primary.main">
                      {appointment.time}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="subtitle2" fontWeight="600" noWrap>
                      {appointment.patientName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {appointment.doctor} • {appointment.type}
                    </Typography>
                    
                    <Box display="flex" alignItems="center" gap={1} sx={{ mt: 1 }}>
                      <Chip
                        icon={<StatusIcon />}
                        label={getStatusText(appointment.status)}
                        size="small"
                        color={getStatusColor(appointment.status) as any}
                        variant="filled"
                        sx={{ fontWeight: 500 }}
                      />
                    </Box>
                  </Box>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};