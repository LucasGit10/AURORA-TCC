'use client';

import { useState } from 'react';
import { usePatients } from '@/hooks/usePatients';
import { PatientList } from '@/components/patients/PatientList';
import { PatientForm } from '@/components/patients/PatientForm';
import { Patient } from '@/types/patient';
import { 
  Container, 
  Typography, 
  Box, 
  Button,
  CircularProgress,
  Alert,
  Paper,
  Stack,
  Chip
} from '@mui/material';
import { 
  Add, 
  Folder, 
  Search,
  FilterList,
  ViewModule,
  ViewList 
} from '@mui/icons-material';

export default function PatientsPage() {
  const { patients, loading, error, updatePatient, createPatient } = usePatients();
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [formMode, setFormMode] = useState<'view' | 'edit' | 'create'>('create');
  const [formOpen, setFormOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleEditPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    setFormMode('edit');
    setFormOpen(true);
  };

  const handleViewPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    setFormMode('view');
    setFormOpen(true);
  };

  const handleCreatePatient = () => {
    setSelectedPatient(null);
    setFormMode('create');
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setSelectedPatient(null);
  };

  const handleSubmitForm = async (patientData: Partial<Patient>) => {
    try {
      if (formMode === 'create') {
        await createPatient(patientData as Omit<Patient, 'id' | 'createdAt' | 'updatedAt'>);
      } else if (formMode === 'edit' && selectedPatient) {
        await updatePatient({ ...selectedPatient, ...patientData });
      }
      handleCloseForm();
    } catch (error) {
      console.error('Erro ao salvar paciente:', error);
    }
  };

  if (loading) {
    return (
      <Box 
        display="flex" 
        flexDirection="column"
        justifyContent="center" 
        alignItems="center" 
        minHeight="60vh"
        gap={3}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'inline-flex',
          }}
        >
          <CircularProgress 
            size={80} 
            thickness={2}
            sx={{
              color: 'primary.main',
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Folder sx={{ fontSize: 32, color: 'primary.main' }} />
          </Box>
        </Box>
        <Typography variant="h6" color="text.secondary">
          Carregando arquivos de pacientes...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert 
          severity="error" 
          sx={{ 
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'error.light',
          }}
        >
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
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
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={3}>
          <Box>
            <Box display="flex" alignItems="center" gap={2} mb={1}>
              <Folder sx={{ fontSize: 32, color: 'primary.main' }} />
              <Typography 
                variant="h4" 
                fontWeight="bold"
                sx={{
                  background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Arquivos de Pacientes
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" mb={2}>
              Sistema de gerenciamento de fichas médicas - {patients.length} paciente(s) cadastrado(s)
            </Typography>
            
            <Stack direction="row" spacing={1}>
              <Chip 
                label={`${patients.length} arquivos`}
                variant="outlined"
                color="primary"
                size="small"
              />
              <Chip 
                label="Sistema Hospitalar"
                variant="outlined"
                size="small"
              />
            </Stack>
          </Box>
          
          <Button 
            variant="contained" 
            startIcon={<Add />}
            onClick={handleCreatePatient}
            size="large"
            sx={{
              borderRadius: 3,
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)',
              '&:hover': {
                boxShadow: '0 12px 32px rgba(59, 130, 246, 0.4)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Nova Ficha
          </Button>
        </Box>

        <Paper
          elevation={1}
          sx={{
            p: 2,
            bgcolor: 'white',
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'grey.200',
          }}
        >
          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
            <Button 
              startIcon={<Search />}
              variant="outlined"
              size="small"
              sx={{ borderRadius: 2 }}
            >
              Buscar paciente...
            </Button>
            
            <Button 
              startIcon={<FilterList />}
              variant="outlined"
              size="small"
              sx={{ borderRadius: 2 }}
            >
              Filtros
            </Button>
            
            <Box sx={{ flexGrow: 1 }} />
            
            <Button 
              startIcon={<ViewModule />}
              variant={viewMode === 'grid' ? 'contained' : 'outlined'}
              size="small"
              onClick={() => setViewMode('grid')}
              sx={{ borderRadius: 2 }}
            >
              Grade
            </Button>
            
            <Button 
              startIcon={<ViewList />}
              variant={viewMode === 'list' ? 'contained' : 'outlined'}
              size="small"
              onClick={() => setViewMode('list')}
              sx={{ borderRadius: 2 }}
            >
              Lista
            </Button>
          </Box>
        </Paper>
      </Paper>

      <PatientList
        patients={patients}
        onPatientEdit={handleEditPatient}
        onPatientView={handleViewPatient}
      />

      <PatientForm
        patient={selectedPatient}
        mode={formMode}
        onSubmit={handleSubmitForm}
        onClose={handleCloseForm}
        open={formOpen}
      />
    </Container>
  );
}