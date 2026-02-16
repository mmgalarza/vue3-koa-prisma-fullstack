import React, { useState } from 'react';
import { Box, Typography, Button, Divider, Switch, Paper, Stack, Alert, CircularProgress, IconButton } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useKioskero } from '../store.2';
import { kioskero } from '../controller.4';

// ✅ Definimos la interfaz para que coincida con lo que envía page.4.tsx
interface CheckoutProps {
  onFinalizado: (id: number, total: number) => void;
  onCancelar: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onFinalizado, onCancelar }) => {
  const { puntos, carrito, user, loading } = useKioskero();
  const [metodoPago, setMetodoPago] = useState<'EFECTIVO' | 'TARJETA'>('EFECTIVO');

  const subtotalAntesPuntos = carrito.total + (puntos.aplicados || 0);

  const ejecutarCobro = async () => {
    const res = await kioskero.cobrar();
    
    // Verificamos que tengamos éxito y que el backend nos haya devuelto el ID
    if (res?.success && res.idOperacion) {
      // 🚀 Pasamos el ID y el Total hacia arriba (KioskoPage)
      // El total lo puedes sacar del estado del kioskero o del res si lo añadiste
      onFinalizado(res.idOperacion, res.total || 0); 
    } else {
      // Aquí podrías manejar un error visual si el cobro falla
      console.error("Error en el proceso de cobro");
    }
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#fff' }}>
      
      {/* HEADER DE CHECKOUT (Botón Volver) */}
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton onClick={onCancelar} color="primary">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" fontWeight="800" color="text.secondary">
          Volver al catálogo
        </Typography>
      </Box>

      {/* CUERPO SCROLLEABLE */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 3, pt: 1 }}>
        <Typography variant="h4" fontWeight="900" sx={{ mb: 3 }}>
          Finalizar Pedido
        </Typography>

        <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: '#f8f9fa', borderRadius: 4 }}>
          <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 800 }}>
            Programa de Puntos
          </Typography>
          
          {user?.idCliente ? (
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
              <Box display="flex" alignItems="center" gap={1.5}>
                <StarsIcon color="warning" sx={{ fontSize: 32 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="800" sx={{ lineHeight: 1 }}>
                    {puntos.acumulados} puntos
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Equivale a ${puntos.acumulados.toFixed(2)}
                  </Typography>
                </Box>
              </Box>
              <Switch 
                sx={{ transform: 'scale(1.3)' }} 
                checked={puntos.aplicados > 0} 
                onChange={(e) => kioskero.aplicarPuntos(e.target.checked)} 
              />
            </Stack>
          ) : (
            <Alert severity="info" variant="outlined" sx={{ mt: 1, py: 0 }}>
              Identifícate para usar puntos.
            </Alert>
          )}
        </Paper>

        <Typography variant="overline" color="text.secondary" sx={{ mb: 1.5, fontWeight: 800, display: 'block' }}>
          Método de Pago
        </Typography>
        <Stack direction="row" gap={2} sx={{ mb: 2 }}>
          <Button 
            fullWidth 
            variant={metodoPago === 'EFECTIVO' ? 'contained' : 'outlined'}
            onClick={() => setMetodoPago('EFECTIVO')}
            startIcon={<PaymentsIcon />}
            sx={{ py: 2, borderRadius: 3, fontWeight: 700 }}
          >
            Efectivo
          </Button>
          <Button 
            fullWidth 
            variant={metodoPago === 'TARJETA' ? 'contained' : 'outlined'}
            onClick={() => setMetodoPago('TARJETA')}
            startIcon={<CreditCardIcon />}
            sx={{ py: 2, borderRadius: 3, fontWeight: 700 }}
          >
            Tarjeta
          </Button>
        </Stack>
      </Box>

      {/* PIE FIJO (Totales y Botón) */}
      <Box sx={{ 
        p: 3, 
        bgcolor: '#fff', 
        borderTop: '2px solid #f4f4f4',
        boxShadow: '0 -10px 20px rgba(0,0,0,0.05)' 
      }}>
        <Stack gap={1} sx={{ mb: 2 }}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" color="text.secondary">Subtotal:</Typography>
            <Typography variant="body1" fontWeight="700">${subtotalAntesPuntos.toFixed(2)}</Typography>
          </Box>
          
          {puntos.aplicados > 0 && (
            <Box display="flex" justifyContent="space-between" color="success.main">
              <Typography variant="body1">Descuento aplicado:</Typography>
              <Typography variant="body1" fontWeight="900">-${puntos.aplicados.toFixed(2)}</Typography>
            </Box>
          )}

          <Divider sx={{ my: 0.5 }} />

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" fontWeight="900">TOTAL</Typography>
            <Typography variant="h4" fontWeight="900" color="primary.main">
              ${carrito.total.toFixed(2)}
            </Typography>
          </Box>
        </Stack>

        <Button 
          fullWidth 
          variant="contained" 
          disabled={loading || carrito.operacionesDetalle.length === 0}
          onClick={ejecutarCobro}
          sx={{ 
            py: 2.5, 
            borderRadius: 4, 
            fontWeight: 900, 
            fontSize: '1.4rem',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
          }}
        >
          {loading ? <CircularProgress size={30} color="inherit" /> : `CONFIRMAR PAGO`}
        </Button>
      </Box>
    </Box>
  );
};

export default Checkout;