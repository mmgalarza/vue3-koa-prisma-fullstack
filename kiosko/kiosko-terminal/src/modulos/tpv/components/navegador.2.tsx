import { Box, Card, CardContent, CardMedia, Typography, IconButton, Breadcrumbs, Link, Paper, Chip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import type { Categoria, Producto } from '../types';

// 🔄 Sincronizado con el controlador v4
import { kioskero } from '../controller.4';

interface Props {
  ruta: Categoria[];
  items: (Categoria | Producto)[];
  onNavegar: (cat: Categoria) => void;
  onVolver: () => void;
  onInicio: () => void;
}

export const NavegadorCatalogo = ({ ruta, items, onNavegar, onVolver, onInicio }: Props) => {
  
  // Type guard para diferenciar entre categoría y producto
  const isProducto = (item: any): item is Producto => 'idProducto' in item;

  // Manejador para navegar a un punto específico de la ruta desde el breadcrumb
  const saltarARuta = (idx: number) => {
    const nuevaRuta = ruta.slice(0, idx + 1);
    const ultimaCat = nuevaRuta[nuevaRuta.length - 1];
    // Forzamos la navegación a esa categoría específica
    onNavegar(ultimaCat);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      
      {/* BARRA DE NAVEGACIÓN (BREADCRUMBS) */}
      <Paper elevation={0} sx={{ p: 2, borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: 2, bgcolor: '#fff' }}>
        {ruta.length > 0 && (
          <IconButton 
            onClick={onVolver} 
            size="large" 
            sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        
        <Breadcrumbs separator="›" sx={{ '& .MuiBreadcrumbs-separator': { fontSize: '1.5rem', fontWeight: 300 } }}>
          <Link 
            underline="hover" 
            sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 700, color: 'text.secondary' }} 
            onClick={onInicio}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="small" /> INICIO
          </Link>
          
          {ruta.map((m, idx) => (
            <Typography 
              key={m.idCategoria} 
              onClick={() => idx < ruta.length - 1 && saltarARuta(idx)}
              sx={{ 
                cursor: idx < ruta.length - 1 ? 'pointer' : 'default',
                color: idx === ruta.length - 1 ? "primary.main" : "text.secondary",
                fontWeight: 800,
                fontSize: '0.9rem',
                textTransform: 'uppercase'
              }}
            >
              {m.nombre}
            </Typography>
          ))}
        </Breadcrumbs>
      </Paper>

      {/* GRID DE ITEMS */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 3, bgcolor: '#f4f6f8' }}>
        <Box sx={{ 
          display: 'grid', 
          gap: 2.5, 
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' 
        }}>
          {items.map(item => {
            const esProd = isProducto(item);
            
            return (
              <Card 
                key={esProd ? `p-${item.idProducto}` : `c-${item.idCategoria}`}
                onClick={() => esProd ? kioskero.anotarProducto(item) : onNavegar(item)}
                sx={{ 
                  cursor: 'pointer', 
                  borderRadius: 4, 
                  transition: 'all 0.2s ease-in-out', 
                  border: '2px solid transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  '&:hover': { 
                    boxShadow: '0 15px 30px rgba(0,0,0,0.08)', 
                    transform: 'translateY(-4px)', 
                    borderColor: 'primary.light' 
                  },
                  '&:active': { transform: 'scale(0.96)', opacity: 0.8 }
                }}
              >
                {esProd ? (
                  <>
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia 
                        component="img" 
                        height="160" 
                        image={item.imagenes?.find(img => img.principal)?.url || item.imagenes?.[0]?.url || 'https://via.placeholder.com/200?text=Sin+Imagen'} 
                        alt={item.nombre}
                        sx={{ objectFit: 'cover' }}
                      />
                      <Chip 
                        label={`$${item.precios.toFixed(2)}`}
                        sx={{ 
                          position: 'absolute', bottom: 8, right: 8, 
                          bgcolor: 'primary.main', color: 'white', fontWeight: 900,
                          fontSize: '1rem', height: 32, boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 1.5, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Typography variant="body2" fontWeight="700" textAlign="center" sx={{ 
                        lineHeight: 1.2, height: 34, overflow: 'hidden',
                        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' 
                      }}>
                        {item.nombre}
                      </Typography>
                    </CardContent>
                  </>
                ) : (
                  <Box sx={{ 
                    height: 220, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    bgcolor: '#fff',
                    p: 2
                  }}>
                    <FolderIcon sx={{ 
                      fontSize: 80, 
                      color: item.tipo === 'FAMILIA' ? 'primary.light' : 'warning.light',
                      mb: 1
                    }} />
                    <Typography variant="subtitle1" fontWeight="900" textAlign="center" sx={{ textTransform: 'uppercase', color: 'text.primary' }}>
                      {item.nombre}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 800 }}>
                      {item.tipo}
                    </Typography>
                  </Box>
                )}
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};