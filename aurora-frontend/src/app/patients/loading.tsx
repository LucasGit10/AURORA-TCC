import { Box, CircularProgress, Typography } from '@mui/material';

export default function Loading() {
  return (
    <Box 
      display="flex" 
      flexDirection="column"
      justifyContent="center" 
      alignItems="center" 
      minHeight="60vh"
      gap={2}
    >
      <CircularProgress size={60} />
      <Typography variant="h6" color="text.secondary">
        Carregando pacientes...
      </Typography>
    </Box>
  );
}