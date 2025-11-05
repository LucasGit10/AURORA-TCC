import { useState, useEffect } from 'react';
import { Patient } from '@/types/patient';

// Dados mockados
const mockPatients: Patient[] = [
  {
    id: '1',
    firstName: 'João',
    lastName: 'Silva',
    dateOfBirth: '1985-03-15',
    gender: 'male',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999',
    address: {
      street: 'Rua das Flores, 123',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234-567'
    },
    emergencyContact: {
      name: 'Maria Silva',
      relationship: 'Esposa',
      phone: '(11) 98888-8888'
    },
    medicalHistory: [
      {
        id: '1',
        date: '2024-01-15',
        diagnosis: 'Hipertensão Arterial',
        treatment: 'Losartana 50mg 1x/dia',
        doctor: 'Dr. Carlos Mendes',
        notes: 'Paciente respondeu bem ao tratamento'
      }
    ],
    allergies: ['Penicilina'],
    medications: [
      {
        id: '1',
        name: 'Losartana',
        dosage: '50mg',
        frequency: '1x ao dia',
        startDate: '2024-01-15',
        prescribedBy: 'Dr. Carlos Mendes'
      }
    ],
    insurance: {
      provider: 'Unimed',
      policyNumber: 'UM123456',
      validUntil: '2024-12-31'
    },
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-15T14:30:00Z'
  },
  {
    id: '2',
    firstName: 'Maria',
    lastName: 'Santos',
    dateOfBirth: '1990-07-22',
    gender: 'female',
    email: 'maria.santos@email.com',
    phone: '(11) 97777-7777',
    address: {
      street: 'Av. Paulista, 1000',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01310-100'
    },
    emergencyContact: {
      name: 'Pedro Santos',
      relationship: 'Marido',
      phone: '(11) 96666-6666'
    },
    medicalHistory: [],
    allergies: [],
    medications: [],
    createdAt: '2024-01-02T09:00:00Z',
    updatedAt: '2024-01-02T09:00:00Z'
  }
];

export const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        // Aqui vai vir a chamada real para a API
        // const response = await fetch('/api/patients');
        // const data = await response.json();
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPatients(mockPatients);
      } catch (err) {
        setError('Erro ao carregar pacientes');
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const updatePatient = async (patient: Patient) => {
    try {
      setPatients(prev => prev.map(p => p.id === patient.id ? patient : p));
    } catch (err) {
      setError('Erro ao atualizar paciente');
      throw err;
    }
  };

  const createPatient = async (patient: Omit<Patient, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newPatient: Patient = {
        ...patient,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      setPatients(prev => [...prev, newPatient]);
      return newPatient;
    } catch (err) {
      setError('Erro ao criar paciente');
      throw err;
    }
  };

  return {
    patients,
    loading,
    error,
    updatePatient,
    createPatient
  };
};