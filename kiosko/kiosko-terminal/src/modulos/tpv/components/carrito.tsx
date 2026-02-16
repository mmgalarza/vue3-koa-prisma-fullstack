import { Box, Typography, Button, CircularProgress } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useKioskero } from '../store';
import { kioskero } from '../controller';

export const CarritoTicket = () => {
  const { carrito, loading } = useKioskero();

  return (
    <Box sx={{ width: 350, minWidth: 350, bgcolor: 'white', borderLeft: '1px solid #ddd', display: 'flex', flexDirection: 'column', boxShadow: '-4px 0 10px rgba(0,0,0,0.02)' }}>
      <Box p={2.5} bgcolor="#1a1a1a" color="white" display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="800" sx={{ letterSpacing: 1 }}>MI TICKET</Typography>
        <ShoppingCartIcon />
      </Box>
      
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
        {carrito.operacionesDetalle.length === 0 ? (
          <Box sx={{ mt: 10, textAlign: 'center', opacity: 0.3 }}>
            <ShoppingCartIcon sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="body2">El carrito está vacío</Typography>
          </Box>
        ) : (
          carrito.operacionesDetalle.map(d => (
            <Box key={d.idProducto} sx={{ mb: 2, pb: 1, borderBottom: '1px dashed #ddd', display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="body2" fontWeight="800">{d.nombre || `Producto ${d.idProducto}`}</Typography>
                <Typography variant="caption" color="text.secondary">{d.cantidad} un. x ${d.precioUnitario.toFixed(2)}</Typography>
              </Box>
              <Typography variant="body2" fontWeight="900" color="primary.main">${d.subtotal.toFixed(2)}</Typography>
            </Box>
          ))
        )}
      </Box>

      <Box sx={{ p: 3, bgcolor: '#fafafa', borderTop: '2px solid #1a1a1a' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h6" fontWeight="600">TOTAL</Typography>
          <Typography variant="h4" fontWeight="900" color="primary.main">${carrito.total.toFixed(2)}</Typography>
        </Box>
        <Button 
          fullWidth variant="contained" size="large"
          disabled={loading || !carrito.operacionesDetalle.length}
          onClick={() => kioskero.cobrar({ idCliente: 1, nombre: "Mostrador", email: "mostrador@kiosko.com" })}
          sx={{ py: 2, borderRadius: 2, fontWeight: 900, fontSize: '1.1rem' }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'FINALIZAR PEDIDO'}
        </Button>
      </Box>
    </Box>
  );
};