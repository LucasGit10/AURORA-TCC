'use client';

import { useState } from 'react';
import { Patient } from '@/types/patient';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  Chip,
  IconButton,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Divider
} from '@mui/material';
import { 
  Close, 
  Add, 
  Description,
  Save,
  Cancel
} from '@mui/icons-material';

interface PatientFormProps {
  patient?: Patient | null;
  mode: 'view' | 'edit' | 'create';
  onSubmit: (patientData: Partial<Patient>) => void;
  onClose: () => void;
  open: boolean;
}

export const PatientForm = ({ patient, mode, onSubmit, onClose, open }: PatientFormProps) => {
  const [formData, setFormData] = useState<Partial<Patient>>(
    patient || {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: 'male',
      email: '',
      phone: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: '',
      }
    }
  );

  const [newAllergy, setNewAllergy] = useState('');

  const isViewMode = mode === 'view';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addAllergy = () => {
    if (newAllergy.trim()) {
      setFormData(prev => ({
        ...prev,
        allergies: [...(prev.allergies || []), newAllergy.trim()]
      }));
      setNewAllergy('');
    }
  };

  const removeAllergy = (index: number) => {
    setFormData(prev => ({
      ...prev,
      allergies: prev.allergies?.filter((_, i) => i !== index)
    }));
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="lg" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        }
      }}
    >
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: 120,
            height: 120,
            background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }
        }}
      >
        <DialogTitle sx={{ pb: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box display="flex" alignItems="center" gap={2}>
              <Description sx={{ fontSize: 32 }} />
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  {mode === 'create' ? 'Nova Ficha de Paciente' : 
                   mode === 'edit' ? 'Editar Ficha Médica' : 'Ficha do Paciente'}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {mode === 'view' ? 'Visualização de documento' : 'Preencha os dados do paciente'}
                </Typography>
              </Box>
            </Box>
            <IconButton 
              onClick={onClose} 
              sx={{ color: 'white' }}
            >
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
      </Paper>

      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ p: 4 }}>
            <Paper
              elevation={1}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'grey.200',
              }}
            >
              <Typography variant="h6" fontWeight="600" gutterBottom color="primary">
                📋 Informações Pessoais
              </Typography>
              <Divider sx={{ mb: 3 }} />
              
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr 1fr',
                  },
                  gap: 3,
                }}
              >
                <TextField
                  label="Nome"
                  value={formData.firstName || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  disabled={isViewMode}
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  label="Sobrenome"
                  value={formData.lastName || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  disabled={isViewMode}
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  label="Data de Nascimento"
                  type="date"
                  value={formData.dateOfBirth || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                  disabled={isViewMode}
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
                <FormControl fullWidth>
                  <InputLabel>Gênero</InputLabel>
                  <Select
                    value={formData.gender || 'male'}
                    onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value as any }))}
                    disabled={isViewMode}
                    label="Gênero"
                    variant="outlined"
                  >
                    <MenuItem value="male">Masculino</MenuItem>
                    <MenuItem value="female">Feminino</MenuItem>
                    <MenuItem value="other">Outro</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Email"
                  type="email"
                  value={formData.email || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  disabled={isViewMode}
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  label="Telefone"
                  value={formData.phone || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  disabled={isViewMode}
                  fullWidth
                  required
                  variant="outlined"
                />
              </Box>
            </Paper>

            <Paper
              elevation={1}
              sx={{
                p: 3,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'grey.200',
              }}
            >
              <Typography variant="h6" fontWeight="600" gutterBottom color="error">
                ⚠️ Alergias e Alertas
              </Typography>
              <Divider sx={{ mb: 3 }} />
              
              {!isViewMode && (
                <Box display="flex" gap={1} mb={2}>
                  <TextField
                    value={newAllergy}
                    onChange={(e) => setNewAllergy(e.target.value)}
                    placeholder="Digite uma alergia..."
                    fullWidth
                    size="small"
                    variant="outlined"
                  />
                  <Button 
                    variant="outlined" 
                    onClick={addAllergy} 
                    startIcon={<Add />}
                    sx={{ borderRadius: 2 }}
                  >
                    Adicionar
                  </Button>
                </Box>
              )}
              
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {formData.allergies?.map((allergy, index) => (
                  <Chip
                    key={index}
                    label={allergy}
                    onDelete={!isViewMode ? () => removeAllergy(index) : undefined}
                    color="error"
                    variant="filled"
                    sx={{ mb: 1 }}
                  />
                ))}
                {(!formData.allergies || formData.allergies.length === 0) && (
                  <Typography variant="body2" color="text.secondary" fontStyle="italic">
                    Nenhuma alergia registrada
                  </Typography>
                )}
              </Stack>
            </Paper>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 3, borderTop: '1px solid', borderColor: 'grey.200' }}>
          <Button 
            onClick={onClose} 
            startIcon={<Cancel />}
            variant="outlined"
            sx={{ borderRadius: 2 }}
          >
            {isViewMode ? 'Fechar' : 'Cancelar'}
          </Button>
          {!isViewMode && (
            <Button 
              type="submit" 
              variant="contained" 
              startIcon={<Save />}
              sx={{ 
                borderRadius: 2,
                px: 4,
              }}
            >
              {mode === 'create' ? 'Criar Ficha' : 'Salvar Alterações'}
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
};