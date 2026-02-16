import React, { useEffect } from 'react';
import { Box, Typography, Button, Paper, Divider, Fade, Container } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface TicketProps {
  idOperacion: number | string;
  total: number;
  onFinalizar: () => void;
}

export const TicketConfirmacion: React.FC<TicketProps> = ({ idOperacion, total, onFinalizar }) => {
  
  useEffect(() => {
    const timer = setTimeout(onFinalizar, 20000);
    return () => clearTimeout(timer);
  }, [onFinalizar]);

  const numeroOrden = String(idOperacion).padStart(3, '0').slice(-3);

  return (
    <Fade in timeout={800}>
      <Box sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: 'white',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        // Aseguramos que el contenido use toda la altura disponible
        height: '100vh',
        width: '100vw',
        overflow: 'hidden' // Evitamos scroll innecesario
      }}>
        <Container maxWidth="sm" sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          py: 6 // Padding vertical de seguridad
        }}>
          
          {/* 1. SECCIÓN SUPERIOR: Icono y Mensaje */}
          <Box sx={{ textAlign: 'center', flexShrink: 0 }}>
            <Box sx={{
              width: 80,
              height: 80,
              bgcolor: 'common.black',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <ArrowDownwardIcon sx={{ fontSize: 40 }} />
            </Box>

            <Typography variant="h3" sx={{ fontWeight: 900, letterSpacing: -1.5, mb: 1 }}>
              RETIRE SU TICKET
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
              Su pedido ha sido enviado a cocina.
            </Typography>
          </Box>

          {/* 2. SECCIÓN CENTRAL: El Número (FlexGrow para ocupar el espacio sobrante) */}
          <Box sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center' 
          }}>
            <Paper elevation={0} sx={{
              bgcolor: '#f8f9fa',
              borderRadius: 8,
              py: 6,
              textAlign: 'center',
              border: '1px solid',
              borderColor: 'divider'
            }}>
              <Typography sx={{ 
                fontSize: 12, 
                fontWeight: 800, 
                color: 'text.disabled', 
                textTransform: 'uppercase', 
                letterSpacing: 4,
                mb: 1
              }}>
                Número de Turno
              </Typography>
              <Typography sx={{ 
                fontSize: { xs: 100, md: 140 }, 
                fontWeight: 900, 
                lineHeight: 1,
                color: 'text.primary',
                letterSpacing: -5
              }}>
                {numeroOrden}
              </Typography>
            </Paper>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 4 }}>
              <Box textAlign="left">
                <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 700, textTransform: 'uppercase' }}>
                  Total
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  ${total.toLocaleString()}
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
              <Box textAlign="left">
                <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 700, textTransform: 'uppercase' }}>
                  Operación
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  #{idOperacion}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* 3. SECCIÓN INFERIOR: Botón (Siempre visible abajo) */}
          <Box sx={{ mt: 'auto', pt: 4, textAlign: 'center', flexShrink: 0 }}>
            <Button
              variant="contained"
              onClick={onFinalizar}
              fullWidth
              sx={{
                py: 2.5,
                borderRadius: 4,
                fontSize: '1.2rem',
                fontWeight: 800,
                bgcolor: 'common.black',
                '&:hover': { bgcolor: 'grey.900' },
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
              }}
            >
              FINALIZAR COMPRA
            </Button>
            <Typography variant="caption" sx={{ mt: 2, display: 'block', color: 'text.disabled', fontWeight: 600 }}>
              ESTA PANTALLA SE CERRARÁ EN 20 SEGUNDOS...
            </Typography>
          </Box>

        </Container>
      </Box>
    </Fade>
  );
};