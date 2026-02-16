import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Chip, IconButton } from '@mui/material';
import { 
  AccountCircleOutlined, 
  LogoutOutlined, 
  StorefrontOutlined,
  StarsOutlined 
} from '@mui/icons-material';
import { useKioskero } from '../store.2';
import { kioskero } from '../controller.4';
import { LoginModal } from './login';

// ✅ Definimos la interfaz para aceptar la prop del controlador
interface HeaderProps {
  onLogoClick?: () => void;
}

export const HeaderKiosko: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const { user, puntos } = useKioskero();
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    kioskero.setUser(null);
  };

  return (
    <AppBar position="static" color="inherit" elevation={1} sx={{ bgcolor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        {/* Lado Izquierdo: Branding (Ahora clickable para volver al inicio) */}
        <Box 
          onClick={onLogoClick}
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            cursor: onLogoClick ? 'pointer' : 'default',
            '&:hover': onLogoClick ? { opacity: 0.8 } : {}
          }}
        >
          <StorefrontOutlined color="primary" fontSize="large" />
          <Box>
            <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 'bold' }}>
              Terminal Kiosko
            </Typography>
            <Typography variant="caption" color="text.secondary">
              v3.0.1 • Punto de Venta Activo
            </Typography>
          </Box>
        </Box>

        {/* Lado Derecho: Identidad y Puntos */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          
          {user ? (
            <>
              {/* Información de Puntos (si tiene cliente) */}
              {user.idCliente && (
                <Chip 
                  icon={<StarsOutlined style={{ color: '#f57c00' }} />}
                  label={`${puntos.acumulados} pts`}
                  variant="outlined"
                  sx={{ borderColor: '#ffe0b2', bgcolor: '#fff3e0', fontWeight: 'bold' }}
                />
              )}

              {/* Info del Operador */}
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="body2" fontWeight="bold">
                  {user.nombre}
                </Typography>
                <Typography variant="caption" color="primary" sx={{ display: 'block' }}>
                  {user.rol}
                </Typography>
              </Box>

              <IconButton onClick={handleLogout} color="error" title="Cerrar Turno">
                <LogoutOutlined />
              </IconButton>
            </>
          ) : (
            <Button 
              variant="contained" 
              startIcon={<AccountCircleOutlined />}
              onClick={() => setModalOpen(true)}
              sx={{ borderRadius: 2 }}
            >
              Identificarse
            </Button>
          )}
        </Box>
      </Toolbar>

      <LoginModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </AppBar>
  );
};

export default HeaderKiosko;