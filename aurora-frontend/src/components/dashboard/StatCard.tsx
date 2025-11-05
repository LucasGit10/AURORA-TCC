import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';
import { ElementType } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ElementType;
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  progress?: number;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  color, 
  progress, 
  subtitle,
  trend 
}: StatCardProps) => {
  const colorMap = {
    primary: '#3b82f6',
    secondary: '#64748b',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#06b6d4'
  };

  const bgColorMap = {
    primary: 'rgba(59, 130, 246, 0.1)',
    secondary: 'rgba(100, 116, 139, 0.1)',
    success: 'rgba(16, 185, 129, 0.1)',
    warning: 'rgba(245, 158, 11, 0.1)',
    error: 'rgba(239, 68, 68, 0.1)',
    info: 'rgba(6, 182, 212, 0.1)'
  };

  return (
    <Card 
      sx={{ 
        height: '100%',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Box>
            <Typography 
              variant="h3" 
              fontWeight="bold" 
              color={colorMap[color]}
              lineHeight={1}
            >
              {value}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ mt: 1 }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="caption" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 3,
              bgcolor: bgColorMap[color],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon sx={{ fontSize: 28, color: colorMap[color] }} />
          </Box>
        </Box>

        {progress !== undefined && (
          <Box sx={{ mt: 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{
                height: 6,
                borderRadius: 3,
                bgcolor: `${colorMap[color]}20`,
                '& .MuiLinearProgress-bar': {
                  bgcolor: colorMap[color],
                  borderRadius: 3,
                }
              }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              {progress}% do objetivo
            </Typography>
          </Box>
        )}

        {trend && (
          <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography 
              variant="caption" 
              color={trend.isPositive ? 'success.main' : 'error.main'}
              fontWeight="600"
            >
              {trend.isPositive ? '↗' : '↘'} {Math.abs(trend.value)}%
            </Typography>
            <Typography variant="caption" color="text.secondary">
              vs último mês
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};