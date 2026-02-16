import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

export const PageLoader: React.FC = () => (
  <Box sx={{ 
    display: 'flex', 
    flexDirection: 'column',
    height: '100vh', 
    width: '100vw',
    alignItems: 'center', 
    justifyContent: 'center',
    bgcolor: '#f8f9fa',
    position: 'fixed',
    inset: 0,
    zIndex: 11000 // Por encima de todo
  }}>
    <CircularProgress size={60} thickness={4} sx={{ color: '#000', mb: 2 }} />
    <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2 }}>
      Iniciando Sistema...
    </Typography>
  </Box>
);