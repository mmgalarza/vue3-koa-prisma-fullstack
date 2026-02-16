import { Box, Typography, Button, CircularProgress, IconButton, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import StarsIcon from '@mui/icons-material/Stars';
//import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// 🔄 Sincronizado con v3 para evitar errores de tipo
import { useKioskero } from '../store.2'; 
import { kioskero } from '../controller.4';

// 📋 Definimos las Props para que page.3.tsx no de error
interface CarritoTicketProps {
  onPagarClick?: () => void;
  isCheckoutView?: boolean;
}

export const CarritoTicket: React.FC<CarritoTicketProps> = ({ 
  onPagarClick, 
  isCheckoutView 
}) => {
  const { carrito, loading, puntos } = useKioskero();

  const fCurrency = (valor: number) => `$${valor.toFixed(2)}`;
  const subtotalBruto = carrito.operacionesDetalle.reduce((acc, d) => acc + d.subtotal, 0);

  return (
    <Box sx={{ 
      width: '100%', // El ancho ahora lo controla el padre (400px)
      height: '100%',
      bgcolor: 'white', 
      display: 'flex', 
      flexDirection: 'column',
    }}>
      {/* HEADER TICKET */}
      <Box p={2.5} bgcolor="#1a1a1a" color="white" display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center" gap={1}>
          <ShoppingCartIcon fontSize="small" />
          <Typography variant="h6" fontWeight="800" sx={{ letterSpacing: 1 }}>MI TICKET</Typography>
        </Box>
        {carrito.operacionesDetalle.length > 0 && !isCheckoutView && (
          <IconButton 
            size="small" 
            onClick={() => kioskero.limpiarCarrito()} 
            sx={{ color: 'rgba(255,255,255,0.6)', '&:hover': { color: '#ff5252' } }}
          >
            <DeleteSweepIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
      
      {/* LISTADO DE PRODUCTOS */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
        {carrito.operacionesDetalle.length === 0 ? (
          <Box sx={{ mt: 10, textAlign: 'center', opacity: 0.3 }}>
            <ShoppingCartIcon sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="body2">El carrito está vacío</Typography>
          </Box>
        ) : (
          carrito.operacionesDetalle.map(d => (
            <Box 
              key={d.idProducto} 
              sx={{ 
                mb: 2, pb: 1.5, 
                borderBottom: '1px dashed #ddd', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                opacity: isCheckoutView ? 0.7 : 1 // Atenuamos si estamos en checkout
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body2" fontWeight="800" sx={{ lineHeight: 1.2, mb: 0.5 }}>
                  {d.nombre}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {/* Solo mostramos controles de cantidad si NO estamos en checkout */}
                  {!isCheckoutView ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f0f0f0', borderRadius: 1, p: 0.2 }}>
                      <IconButton size="small" onClick={() => kioskero.quitarProducto(d.idProducto)} sx={{ p: 0.3 }}>
                        <RemoveIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                      <Typography variant="body2" sx={{ mx: 1, fontWeight: 700, minWidth: '15px', textAlign: 'center' }}>
                        {d.cantidad}
                      </Typography>
                      <IconButton size="small" onClick={() => kioskero.anotarProducto(d as any)} sx={{ p: 0.3 }}>
                        <AddIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                    </Box>
                  ) : (
                    <Typography variant="body2" fontWeight="700">Cant: {d.cantidad}</Typography>
                  )}
                  
                  <Typography variant="caption" color="text.secondary">
                    x {fCurrency(d.precioUnitario)}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body2" fontWeight="900" color="primary.dark">
                {fCurrency(d.subtotal)}
              </Typography>
            </Box>
          ))
        )}
      </Box>

      {/* FOOTER: TOTAL Y BOTÓN DINÁMICO */}
      <Box sx={{ p: 3, bgcolor: '#fafafa', borderTop: '2px solid #1a1a1a' }}>
        
        {/* Desglose de descuentos (v3) */}
        {(puntos.aplicados > 0 || carrito.descuentos.length > 0) && (
          <Box sx={{ mb: 2 }}>
            <Box display="flex" justifyContent="space-between" mb={0.5}>
              <Typography variant="caption" color="text.secondary">Subtotal</Typography>
              <Typography variant="caption" fontWeight="bold">{fCurrency(subtotalBruto)}</Typography>
            </Box>
            {puntos.aplicados > 0 && (
              <Box display="flex" justifyContent="space-between" color="success.main">
                <Typography variant="caption" display="flex" alignItems="center" gap={0.5}><StarsIcon sx={{ fontSize: 14 }} /> Puntos</Typography>
                <Typography variant="caption" fontWeight="bold">-{fCurrency(puntos.aplicados)}</Typography>
              </Box>
            )}
            <Divider sx={{ my: 1 }} />
          </Box>
        )}

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h6" fontWeight="600" color="text.secondary">TOTAL</Typography>
          <Typography variant="h4" fontWeight="900" color="primary.main">
            {fCurrency(carrito.total)}
          </Typography>
        </Box>
        
        <Button 
          fullWidth 
          variant={isCheckoutView ? "outlined" : "contained"} 
          size="large"
          disabled={loading || (!isCheckoutView && !carrito.operacionesDetalle.length)} // Solo deshabilitado si está vacío Y no estamos en checkout
          onClick={onPagarClick} // <--- Este ahora ejecutará setIsCheckout(!isCheckout)
          startIcon={isCheckoutView ? <ArrowBackIcon /> : null}
          color={isCheckoutView ? "inherit" : "primary"} // Color neutro para "Volver"
          sx={{ 
              py: 2, 
              borderRadius: 2, 
              fontWeight: 900, 
              fontSize: '1.1rem',
              textTransform: 'none',
              boxShadow: isCheckoutView ? 'none' : '0 4px 14px 0 rgba(0,118,255,0.39)',
              // Animación suave al cambiar de estilo
              transition: 'all 0.3s ease'
          }}
          >
          {loading ? (
              <CircularProgress size={24} color="inherit" />
          ) : isCheckoutView ? (
              'Añadir más productos'
          ) : (
              'Confirmar y Pagar'
          )}
        </Button>
      </Box>
    </Box>
  );
};