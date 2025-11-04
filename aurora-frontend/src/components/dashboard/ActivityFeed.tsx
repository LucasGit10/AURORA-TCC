import { Card, CardContent, Typography, Box, List, ListItem, Chip } from '@mui/material';
import { RecentActivity } from '@/types/dashboard';
import { 
  Event, 
  LocalHospital, 
  Assignment, 
  LocalPharmacy,
  CheckCircle,
  Schedule,
  PlayCircle
} from '@mui/icons-material';

interface ActivityFeedProps {
  activities: RecentActivity[];
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'appointment':
      return Event;
    case 'admission':
      return LocalHospital;
    case 'exam':
      return Assignment;
    case 'prescription':
      return LocalPharmacy;
    default:
      return Event;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return CheckCircle;
    case 'in-progress':
      return PlayCircle;
    case 'pending':
      return Schedule;
    default:
      return CheckCircle;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'success';
    case 'in-progress':
      return 'warning';
    case 'pending':
      return 'info';
    default:
      return 'default';
  }
};

export const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight="600" gutterBottom>
          Atividade Recente
        </Typography>
        <List sx={{ mt: 1 }}>
          {activities.map((activity) => {
            const ActivityIcon = getActivityIcon(activity.type);
            const StatusIcon = getStatusIcon(activity.status);
            
            return (
              <ListItem 
                key={activity.id}
                sx={{ 
                  px: 0, 
                  py: 1.5,
                  borderBottom: '1px solid',
                  borderColor: 'grey.100',
                  '&:last-child': { borderBottom: 'none' }
                }}
              >
                <Box display="flex" alignItems="flex-start" gap={2} width="100%">
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      bgcolor: 'primary.50',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ActivityIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                  </Box>
                  
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="body2" fontWeight="500" noWrap>
                      {activity.patientName}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      {activity.description}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1} sx={{ mt: 0.5 }}>
                      <Chip
                        icon={<StatusIcon />}
                        label={activity.status === 'in-progress' ? 'Em andamento' : 
                               activity.status === 'completed' ? 'Concluído' : 'Pendente'}
                        size="small"
                        color={getStatusColor(activity.status) as any}
                        variant="outlined"
                      />
                      <Typography variant="caption" color="text.secondary">
                        {activity.time}
                      </Typography>
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