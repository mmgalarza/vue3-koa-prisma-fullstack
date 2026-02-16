import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Error404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      height: '100vh', 
      width: '100vw',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      p: 5, 
      textAlign: 'center',
      bgcolor: 'white'
    }}>
      <Typography variant="h1" sx={{ fontSize: '8rem', fontWeight: 900, color: '#eee', lineHeight: 1 }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 900, mt: -4 }}>
        PÁGINA NO ENCONTRADA
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', maxWidth: 400 }}>
        Lo sentimos, la sección que buscas no existe o ha sido movida temporalmente.
      </Typography>
      <Button 
        variant="contained" 
        onClick={() => navigate('/')}
        sx={{ 
          bgcolor: 'black', 
          borderRadius: 10, 
          px: 6, 
          py: 2,
          '&:hover': { bgcolor: '#333' }
        }}
      >
        VOLVER AL INICIO
      </Button>
    </Box>
  );
};
export default Error404;