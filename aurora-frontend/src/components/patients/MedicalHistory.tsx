import { MedicalRecord } from '@/types/patient';
import { Card } from '@/components/ui/Card';

interface MedicalHistoryProps {
  records: MedicalRecord[];
}

export const MedicalHistory = ({ records }: MedicalHistoryProps) => {
  return (
    <Card title="Histórico Médico">
      <div className="space-y-4">
        {records.map((record) => (
          <div key={record.id} className="border-l-4 border-blue-500 pl-4 py-2">
            <div className="flex justify-between items-start">
              <h4 className="font-semibold text-gray-800">{record.diagnosis}</h4>
              <span className="text-sm text-gray-500">
                {new Date(record.date).toLocaleDateString('pt-BR')}
              </span>
            </div>
            <p className="text-gray-600 mt-1">{record.treatment}</p>
            <p className="text-sm text-gray-500 mt-1">Médico: {record.doctor}</p>
            {record.notes && (
              <p className="text-sm text-gray-600 mt-2 bg-gray-50 p-2 rounded">
                {record.notes}
              </p>
            )}
          </div>
        ))}
        
        {records.length === 0 && (
          <p className="text-gray-500 text-center py-4">
            Nenhum registro médico encontrado.
          </p>
        )}
      </div>
    </Card>
  );
};