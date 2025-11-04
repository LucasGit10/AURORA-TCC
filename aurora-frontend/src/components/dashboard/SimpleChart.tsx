import { Card, CardContent, Typography, Box } from '@mui/material';
import { ChartData } from '@/types/dashboard';

interface SimpleChartProps {
  data: ChartData;
  title: string;
  height?: number;
}

export const SimpleChart = ({ data, title, height = 200 }: SimpleChartProps) => {
  const maxValue = Math.max(...data.datasets[0].data);
  const chartHeight = height - 60;

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight="600" gutterBottom>
          {title}
        </Typography>
        
        <Box sx={{ mt: 3, position: 'relative', height: chartHeight }}>
          <Box 
            display="flex" 
            alignItems="end" 
            justifyContent="space-between"
            gap={1}
            sx={{ height: '100%' }}
          >
            {data.datasets[0].data.map((value, index) => {
              const barHeight = (value / maxValue) * (chartHeight - 30);
              const backgroundColor = data.datasets[0].backgroundColor[index];
              
              return (
                <Box key={index} sx={{ flex: 1, textAlign: 'center' }}>
                  <Box
                    sx={{
                      height: barHeight,
                      bgcolor: backgroundColor,
                      borderRadius: '4px 4px 0 0',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        opacity: 0.8,
                        transform: 'scale(1.05)',
                      }
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    {data.labels[index]}
                  </Typography>
                  <Typography variant="caption" fontWeight="600" color="text.primary">
                    {value}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            Consultas por dia da semana
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};