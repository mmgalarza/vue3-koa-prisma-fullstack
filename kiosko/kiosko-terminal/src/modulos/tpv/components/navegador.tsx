import { Box, Card, CardContent, CardMedia, Typography, IconButton, Breadcrumbs, Link, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import type { Categoria, Producto } from '../types';
import { kioskero } from '../controller.4';

interface Props {
  ruta: Categoria[];
  items: (Categoria | Producto)[];
  onNavegar: (cat: Categoria) => void;
  onVolver: () => void;
  onInicio: () => void;
}

export const NavegadorCatalogo = ({ ruta, items, onNavegar, onVolver, onInicio }: Props) => {
  const isProducto = (item: any): item is Producto => 'idProducto' in item;

  return (
    <Box sx={{ height: '72%', display: 'flex', flexDirection: 'column' }}>
      <Paper elevation={0} sx={{ p: 2, borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: 2, bgcolor: '#fff' }}>
        {ruta.length > 0 && (
          <IconButton onClick={onVolver} size="small" sx={{ border: '1px solid #ddd' }}>
            <ArrowBackIcon fontSize="small" />
          </IconButton>
        )}
        <Breadcrumbs>
          <Link underline="hover" sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 600 }} onClick={onInicio}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Inicio
          </Link>
          {ruta.map((m, idx) => (
            <Typography key={m.idCategoria} color={idx === ruta.length -1 ? "text.primary" : "text.secondary"} fontWeight={idx === ruta.length -1 ? 700 : 400}>
              {m.nombre}
            </Typography>
          ))}
        </Breadcrumbs>
      </Paper>

      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 3 }}>
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))' }}>
          {items.map(item => (
            <Card 
              key={isProducto(item) ? `p-${item.idProducto}` : `c-${item.idCategoria}`}
              onClick={() => isProducto(item) ? kioskero.anotarProducto(item) : onNavegar(item)}
              sx={{ 
                cursor: 'pointer', borderRadius: 3, transition: 'all 0.2s', border: '1px solid #eee',
                '&:hover': { boxShadow: '0 8px 20px rgba(0,0,0,0.12)', transform: 'translateY(-4px)', borderColor: 'primary.main' }
              }}
            >
              {isProducto(item) ? (
                <>
                  <CardMedia component="img" height="130" image={item.imagenes?.find(img => img.activo)?.url || 'https://via.placeholder.com/200'} />
                  <CardContent sx={{ p: 1.5 }}>
                    <Typography variant="caption" color="text.secondary" fontWeight={600}>REF: {item.idProducto}</Typography>
                    <Typography variant="body2" fontWeight="800" sx={{ height: 40, overflow: 'hidden', my: 0.5 }}>{item.nombre}</Typography>
                    <Typography variant="h6" color="primary.main" fontWeight="900">${item.precios.toFixed(2)}</Typography>
                  </CardContent>
                </>
              ) : (
                <Box sx={{ height: 190, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#fff' }}>
                  <FolderIcon sx={{ fontSize: 50, color: item.tipo === 'MADRE' ? 'primary.light' : 'warning.light' }} />
                  <Typography variant="subtitle2" fontWeight="800" textAlign="center" sx={{ mt: 1, px: 1 }}>{item.nombre}</Typography>
                  <Typography variant="caption" sx={{ mt: 1, px: 1, py: 0.2, bgcolor: '#f0f0f0', borderRadius: 1 }}>{item.tipo}</Typography>
                </Box>
              )}
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};