export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
  };
  medicalHistory?: MedicalRecord[];
  allergies?: string[];
  medications?: Medication[];
  insurance?: Insurance;
  createdAt: string;
  updatedAt: string;
}

export interface MedicalRecord {
  id: string;
  date: string;
  diagnosis: string;
  treatment: string;
  doctor: string;
  notes?: string;
  attachments?: string[];
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  prescribedBy: string;
}

export interface Insurance {
  provider: string;
  policyNumber: string;
  groupNumber?: string;
  validUntil: string;
}