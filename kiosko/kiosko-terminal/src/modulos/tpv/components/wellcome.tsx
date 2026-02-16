import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import FastfoodIcon from '@mui/icons-material/Fastfood';

interface InicioPublicidadProps {
  onEmpezar: () => void;
}

export const Wellcome: React.FC<InicioPublicidadProps> = ({ onEmpezar }) => {
  return (
    <Box 
      onClick={onEmpezar} // Cualquier toque en la pantalla inicia la compra
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        bgcolor: 'black',
        cursor: 'pointer',
        overflow: 'hidden'
      }}
    >
      {/* Imagen de Fondo con Overlay Oscuro para que el texto resalte */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1920&q=80)', // Sustituir por foto de tu combo real
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.6)',
        transition: 'transform 20s linear',
        '&:hover': { transform: 'scale(1.1)' } // Efecto sutil de zoom
      }} />

      <Container maxWidth="md" sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        color: 'white',
        textAlign: 'center'
      }}>
        
        {/* Etiqueta de Oferta */}
        <Box sx={{ 
          bgcolor: '#ff9800', 
          px: 3, py: 1, 
          borderRadius: 2, 
          mb: 4,
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
          animation: 'bounce 2s infinite'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 900 }}>¡OFERTA LIMITADA!</Typography>
        </Box>

        <Typography variant="h1" sx={{ 
          fontWeight: 900, 
          fontSize: { xs: '4rem', md: '7rem' }, 
          lineHeight: 1,
          textShadow: '0 10px 30px rgba(0,0,0,0.5)',
          mb: 2
        }}>
          COMBO <br/> <span style={{ color: '#ff9800' }}>ULTIMATE</span>
        </Typography>

        <Typography variant="h4" sx={{ mb: 6, fontWeight: 300, opacity: 0.9 }}>
          Doble Burger + Patatas XL + Bebida
        </Typography>

        {/* El CTA (Call to Action) */}
        <Stack spacing={2} alignItems="center">
          <Button
            variant="contained"
            size="large"
            onClick={(e) => { e.stopPropagation(); onEmpezar(); }}
            sx={{
              py: 4, px: 8,
              borderRadius: 10,
              fontSize: '2.5rem',
              fontWeight: 900,
              bgcolor: 'white',
              color: 'black',
              '&:hover': { bgcolor: '#f0f0f0' },
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            }}
            startIcon={<FastfoodIcon sx={{ fontSize: '3rem !important' }} />}
          >
            PEDIR AHORA
          </Button>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 4, opacity: 0.7 }}>
            <TouchAppIcon className="animate-pulse" />
            <Typography variant="h6">TOCA PARA EMPEZAR</Typography>
          </Box>
        </Stack>
      </Container>

      {/* Estilos para animaciones */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </Box>
  );
};
export default Wellcome;