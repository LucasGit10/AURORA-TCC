import { useState, useEffect } from 'react';
import { DashboardStats, RecentActivity, Appointment, ChartData } from '@/types/dashboard';

export const useDashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([]);
  const [todayAppointments, setTodayAppointments] = useState<Appointment[]>([]);
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockStats: DashboardStats = {
          totalPatients: 1247,
          appointmentsToday: 18,
          occupancyRate: 84,
          revenue: 125430,
          pendingExams: 23,
          availableBeds: 12
        };

        const mockActivities: RecentActivity[] = [
          {
            id: '1',
            type: 'appointment',
            description: 'Consulta de rotina',
            patientName: 'João Silva',
            time: '10:30',
            status: 'completed'
          },
          {
            id: '2',
            type: 'admission',
            description: 'Internação urgente',
            patientName: 'Maria Santos',
            time: '09:15',
            status: 'in-progress'
          },
          {
            id: '3',
            type: 'exam',
            description: 'Raio-X torácico',
            patientName: 'Pedro Costa',
            time: '14:20',
            status: 'pending'
          },
          {
            id: '4',
            type: 'prescription',
            description: 'Prescrição médica',
            patientName: 'Ana Oliveira',
            time: '11:45',
            status: 'completed'
          },
          {
            id: '5',
            type: 'appointment',
            description: 'Acompanhamento pós-cirúrgico',
            patientName: 'Carlos Lima',
            time: '16:00',
            status: 'in-progress'
          }
        ];

        const mockAppointments: Appointment[] = [
          {
            id: '1',
            patientName: 'João Silva',
            doctor: 'Dr. Carlos Mendes',
            time: '09:00',
            type: 'Consulta de Rotina',
            status: 'completed'
          },
          {
            id: '2',
            patientName: 'Maria Santos',
            doctor: 'Dra. Ana Costa',
            time: '10:30',
            type: 'Cardiologia',
            status: 'in-progress'
          },
          {
            id: '3',
            patientName: 'Pedro Almeida',
            doctor: 'Dr. Roberto Silva',
            time: '11:15',
            type: 'Ortopedia',
            status: 'scheduled'
          },
          {
            id: '4',
            patientName: 'Ana Oliveira',
            doctor: 'Dra. Juliana Santos',
            time: '14:00',
            type: 'Pediatria',
            status: 'scheduled'
          },
          {
            id: '5',
            patientName: 'Carlos Lima',
            doctor: 'Dr. Marcelo Costa',
            time: '15:30',
            type: 'Dermatologia',
            status: 'scheduled'
          }
        ];

        const mockChartData: ChartData = {
          labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
          datasets: [
            {
              label: 'Consultas',
              data: [45, 52, 38, 61, 55, 30, 25],
              backgroundColor: [
                'rgba(59, 130, 246, 0.8)',
                'rgba(16, 185, 129, 0.8)',
                'rgba(245, 158, 11, 0.8)',
                'rgba(239, 68, 68, 0.8)',
                'rgba(139, 92, 246, 0.8)',
                'rgba(14, 165, 233, 0.8)',
                'rgba(236, 72, 153, 0.8)'
              ],
              borderColor: [
                'rgb(59, 130, 246)',
                'rgb(16, 185, 129)',
                'rgb(245, 158, 11)',
                'rgb(239, 68, 68)',
                'rgb(139, 92, 246)',
                'rgb(14, 165, 233)',
                'rgb(236, 72, 153)'
              ],
              borderWidth: 2
            }
          ]
        };

        setStats(mockStats);
        setRecentActivities(mockActivities);
        setTodayAppointments(mockAppointments);
        setChartData(mockChartData);
      } catch (error) {
        console.error('Erro ao carregar dados do dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return {
    stats,
    recentActivities,
    todayAppointments,
    chartData,
    loading
  };
};