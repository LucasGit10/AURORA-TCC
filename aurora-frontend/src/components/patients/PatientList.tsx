'use client';

import { Patient } from '@/types/patient';
import { PatientCard } from './PatientCard';
import { Box, Typography, Grid } from '@mui/material';
import { FolderOpen } from '@mui/icons-material';

interface PatientListProps {
  patients: Patient[];
  onPatientEdit: (patient: Patient) => void;
  onPatientView: (patient: Patient) => void;
}

export const PatientList = ({ patients, onPatientEdit, onPatientView }: PatientListProps) => {
  if (patients.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          px: 4,
          bgcolor: 'grey.50',
          borderRadius: 3,
          border: '2px dashed',
          borderColor: 'grey.300',
        }}
      >
        <FolderOpen sx={{ fontSize: 64, color: 'grey.400', mb: 2 }} />
        <Typography variant="h6" color="grey.600" gutterBottom>
          Nenhum paciente encontrado
        </Typography>
        <Typography variant="body2" color="grey.500">
          Clique em "Novo Paciente" para criar sua primeira ficha
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 3,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {patients.map((patient) => (
          <Box key={patient.id}>
            <PatientCard
              patient={patient}
              onEdit={onPatientEdit}
              onView={onPatientView}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};