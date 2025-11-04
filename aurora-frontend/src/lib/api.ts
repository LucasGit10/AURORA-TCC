import { Patient } from '@/types/patient';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const patientApi = {
  // GET /api/patients
  getPatients: async (): Promise<Patient[]> => {
    const response = await fetch(`${API_BASE_URL}/patients`);
    if (!response.ok) throw new Error('Failed to fetch patients');
    return response.json();
  },

  // GET /api/patients/:id
  getPatient: async (id: string): Promise<Patient> => {
    const response = await fetch(`${API_BASE_URL}/patients/${id}`);
    if (!response.ok) throw new Error('Failed to fetch patient');
    return response.json();
  },

  // POST /api/patients
  createPatient: async (patient: Omit<Patient, 'id' | 'createdAt' | 'updatedAt'>): Promise<Patient> => {
    const response = await fetch(`${API_BASE_URL}/patients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patient),
    });
    if (!response.ok) throw new Error('Failed to create patient');
    return response.json();
  },

  // PUT /api/patients/:id
  updatePatient: async (id: string, patient: Partial<Patient>): Promise<Patient> => {
    const response = await fetch(`${API_BASE_URL}/patients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patient),
    });
    if (!response.ok) throw new Error('Failed to update patient');
    return response.json();
  },

  // DELETE /api/patients/:id
  deletePatient: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/patients/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete patient');
  },
};