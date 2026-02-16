import { Box, Card, CardContent, CardMedia, Typography, Skeleton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
// 🔄 Ajuste a v3
import { useKioskero } from '../store.2';
import { kioskero } from '../controller.4';

export const SeccionSugerencias = () => {
  // Consumimos el estado de la v3
  const { productosSugeridos, loading } = useKioskero();

  // Skeleton para no romper el layout mientras carga
  if (loading && productosSugeridos.length === 0) {
    return (
      <Box sx={{ height: '28%', p: 2, display: 'flex', gap: 2, overflow: 'hidden', bgcolor: '#fff' }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} variant="rounded" width={140} height="100%" sx={{ borderRadius: 3, flexShrink: 0 }} />
        ))}
      </Box>
    );
  }

  return (
    <Box sx={{ 
      height: '28%', 
      bgcolor: '#fff', 
      borderBottom: '1px solid #ddd', 
      p: 2, 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <Typography variant="subtitle2" sx={{ 
        mb: 1.5, display: 'flex', alignItems: 'center', gap: 1, 
        color: '#f57c00', fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase'
      }}>
        <StarIcon fontSize="small" /> Sugerencias del día
      </Typography>

      <Box sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        gap: 2, 
        overflowX: 'auto', 
        pb: 1,
        // Scrollbar discreto para no ensuciar la UI
        '&::-webkit-scrollbar': { height: 6 },
        '&::-webkit-scrollbar-thumb': { bgcolor: '#ddd', borderRadius: 10 },
      }}>
        {productosSugeridos.map((prod) => (
          <Card 
            key={prod.idProducto} 
            // ⚡️ Disparador al controlador agnóstico
            onClick={() => kioskero.anotarProducto(prod)}
            sx={{ 
              minWidth: 140, 
              maxWidth: 140, 
              borderRadius: 3, 
              cursor: 'pointer', 
              border: '1px solid #f0f0f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)', 
              transition: 'all 0.2s ease-in-out', 
              display: 'flex', 
              flexDirection: 'column',
              '&:hover': { 
                transform: 'translateY(-4px)', 
                boxShadow: '0 6px 15px rgba(245, 124, 0, 0.15)', 
                borderColor: '#ffb300' 
              },
              '&:active': { transform: 'scale(0.95)' }
            }}
          >
            <CardMedia
              component="img"
              height="70"
              // Priorizamos imagen activa/principal
              image={prod.imagenes?.find(img => img.principal || img.activo)?.url || 'https://via.placeholder.com/150?text=Prod'}
              sx={{ bgcolor: '#f9f9f9', objectFit: 'contain', p: 0.5 }}
            />
            <CardContent sx={{ p: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography variant="caption" fontWeight="800" sx={{ 
                lineHeight: 1.1, 
                display: '-webkit-box', 
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical', 
                overflow: 'hidden', 
                height: 28 
              }}>
                {prod.nombre}
              </Typography>
              <Typography variant="body2" color="primary.main" fontWeight="900" sx={{ mt: 0.5 }}>
                ${prod.precios.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};