export interface DashboardStats {
  totalPatients: number;
  appointmentsToday: number;
  occupancyRate: number;
  revenue: number;
  pendingExams: number;
  availableBeds: number;
}

export interface RecentActivity {
  id: string;
  type: 'appointment' | 'admission' | 'exam' | 'prescription';
  description: string;
  patientName: string;
  time: string;
  status: 'completed' | 'pending' | 'in-progress';
}

export interface Appointment {
  id: string;
  patientName: string;
  doctor: string;
  time: string;
  type: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}