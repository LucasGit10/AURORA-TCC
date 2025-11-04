import { Patient } from '@/types/patient';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Chip,
  Button,
  Stack,
  Avatar
} from '@mui/material';
import { 
  Person, 
  Phone, 
  Email, 
  LocationOn,
  Visibility,
  Edit,
  Warning,
  Folder,
  CalendarToday
} from '@mui/icons-material';

interface PatientCardProps {
  patient: Patient;
  onEdit?: (patient: Patient) => void;
  onView?: (patient: Patient) => void;
}

export const PatientCard = ({ patient, onEdit, onView }: PatientCardProps) => {
  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const getGenderColor = (gender: string) => {
    switch (gender) {
      case 'male': return 'primary';
      case 'female': return 'secondary';
      default: return 'default';
    }
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  const getStatusColor = () => {
    const created = new Date(patient.createdAt);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - created.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 7) return 'success';
    if (diffDays < 30) return 'warning';
    return 'info';
  };

  return (
    <Card 
      sx={{ 
        height: '100%',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        border: '2px solid #e2e8f0',
        borderRadius: 3,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'visible',
        '&:hover': { 
          transform: 'translateY(-8px) scale(1.02)',
          borderColor: '#3b82f6',
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          left: 20,
          right: 20,
          height: 12,
          background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          zIndex: 1,
        }
      }}
      onClick={() => onView?.(patient)}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 60,
          height: 16,
          bgcolor: 'primary.main',
          borderRadius: '8px 8px 0 0',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Folder sx={{ fontSize: 12, color: 'white' }} />
      </Box>

      <CardContent sx={{ pt: 4, pb: 3, px: 3 }}>
        <Box display="flex" alignItems="flex-start" gap={2} mb={3}>
          <Avatar
            sx={{
              width: 60,
              height: 60,
              bgcolor: 'primary.main',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
            }}
          >
            {getInitials(patient.firstName, patient.lastName)}
          </Avatar>
          
          <Box flex={1}>
            <Typography 
              variant="h6" 
              fontWeight="bold" 
              gutterBottom
              sx={{ 
                background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {patient.firstName} {patient.lastName}
            </Typography>
            
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip 
                icon={<Person />}
                label={`${calculateAge(patient.dateOfBirth)} anos`}
                size="small"
                variant="filled"
                color={getStatusColor()}
                sx={{ fontWeight: 600 }}
              />
              <Chip 
                label={patient.gender === 'male' ? 'Masculino' : 'Feminino'}
                size="small"
                variant="outlined"
                sx={{ borderWidth: 2, fontWeight: 600 }}
              />
            </Stack>
          </Box>
        </Box>

        <Stack spacing={2} mb={3}>
          <Box display="flex" alignItems="center" gap={2}>
            <Box
              sx={{
                p: 1,
                bgcolor: 'primary.50',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Phone sx={{ fontSize: 16, color: 'primary.main' }} />
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary" display="block">
                Telefone
              </Typography>
              <Typography variant="body2" fontWeight="600">
                {patient.phone}
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Box
              sx={{
                p: 1,
                bgcolor: 'secondary.50',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Email sx={{ fontSize: 16, color: 'secondary.main' }} />
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary" display="block">
                Email
              </Typography>
              <Typography variant="body2" fontWeight="600" noWrap>
                {patient.email}
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="flex-start" gap={2}>
            <Box
              sx={{
                p: 1,
                bgcolor: 'success.50',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 0.5,
              }}
            >
              <LocationOn sx={{ fontSize: 16, color: 'success.main' }} />
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary" display="block">
                Endereço
              </Typography>
              <Typography variant="body2" fontWeight="600">
                {patient.address.city}, {patient.address.state}
              </Typography>
            </Box>
          </Box>
        </Stack>

        {patient.allergies && patient.allergies.length > 0 && (
          <Box 
            sx={{ 
              p: 2, 
              bgcolor: 'error.50', 
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'error.100',
              mb: 2
            }}
          >
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Warning sx={{ fontSize: 16, color: 'error.main' }} />
              <Typography variant="caption" fontWeight="600" color="error.main">
                Alergias
              </Typography>
            </Box>
            <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
              {patient.allergies.slice(0, 3).map((allergy, index) => (
                <Chip 
                  key={index}
                  label={allergy}
                  size="small"
                  color="error"
                  variant="filled"
                  sx={{ fontSize: '0.7rem', height: 20 }}
                />
              ))}
              {patient.allergies.length > 3 && (
                <Chip 
                  label={`+${patient.allergies.length - 3}`}
                  size="small"
                  color="error"
                  variant="outlined"
                  sx={{ fontSize: '0.7rem', height: 20 }}
                />
              )}
            </Stack>
          </Box>
        )}

        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            startIcon={<Visibility />}
            onClick={(e) => {
              e.stopPropagation();
              onView?.(patient);
            }}
            fullWidth
            size="small"
            sx={{
              borderRadius: 2,
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              }
            }}
          >
            Abrir Ficha
          </Button>
          <Button
            variant="outlined"
            startIcon={<Edit />}
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.(patient);
            }}
            fullWidth
            size="small"
            sx={{
              borderRadius: 2,
              fontWeight: 600,
              textTransform: 'none',
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
              }
            }}
          >
            Editar
          </Button>
        </Stack>

        <Box 
          sx={{ 
            mt: 2, 
            pt: 2, 
            borderTop: '1px dashed', 
            borderColor: 'grey.300',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="caption" color="text.secondary">
            ID: {patient.id.slice(0, 8)}
          </Typography>
          <Box display="flex" alignItems="center" gap={0.5}>
            <CalendarToday sx={{ fontSize: 12, color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">
              {new Date(patient.createdAt).toLocaleDateString('pt-BR')}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};