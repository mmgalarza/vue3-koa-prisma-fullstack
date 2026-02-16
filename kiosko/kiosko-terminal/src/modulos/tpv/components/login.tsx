import React, { useState } from 'react';
import { 
  Dialog, DialogContent, Box, TextField, Button, Typography, 
  Alert, IconButton, InputAdornment 
} from '@mui/material';
import { 
  EmailOutlined, LockOutlined, Visibility, VisibilityOff, Close 
} from '@mui/icons-material';
import { useAuth } from '@app/auth/bridge.store';
import { kioskero } from '@modulos/tpv/controller.4'; // Importamos el singleton directamente

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [nIntento, setNIntento] = useState(0);
  const maxIntentos = 3;

  const loginHandler = async () => {
    if (nIntento >= maxIntentos) return;
    
    setErrorMessage('');
    try {
      // 1. Ejecutamos el login (esto actualiza el AuthStore)
      const res = await login({ email, password });
      
      // 2. SINCRONIZACIÓN: Inyectamos el usuario en el controlador del Kiosko
      // Asumimos que el bridge de auth devuelve el objeto con el user
      kioskero.setUser(res.user); 

      // 3. Limpieza y cierre
      setEmail('');
      setPassword('');
      setNIntento(0);
      onClose(); 
      
    } catch (error: any) {
      const nuevoIntento = nIntento + 1;
      setNIntento(nuevoIntento);
      setErrorMessage(nuevoIntento >= maxIntentos 
        ? 'Cuenta bloqueada temporalmente.' 
        : `Error de credenciales. Intentos: ${nuevoIntento}/${maxIntentos}`);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={onClose}><Close /></IconButton>
      </Box>
      <DialogContent sx={{ px: 4, pb: 6 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
          Acceso Terminal
        </Typography>
        
        <TextField
          fullWidth label="Email" margin="normal" size="small"
          value={email} onChange={(e) => setEmail(e.target.value)}
          slotProps={{ 
            input: { 
              startAdornment: <InputAdornment position="start"><EmailOutlined /></InputAdornment> 
            } 
          }}
        />

        <TextField
          fullWidth label="Password" type={visible ? 'text' : 'password'} margin="normal" size="small"
          value={password} onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && loginHandler()} // Login con la tecla Enter
          slotProps={{ 
            input: { 
              startAdornment: <InputAdornment position="start"><LockOutlined /></InputAdornment>,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setVisible(!visible)} edge="end">
                    {visible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            } 
          }}
        />

        {errorMessage && (
          <Box mt={2}>
            <Alert severity="error" variant="filled">{errorMessage}</Alert>
          </Box>
        )}

        <Button 
          fullWidth variant="contained" size="large" 
          onClick={loginHandler} 
          disabled={nIntento >= maxIntentos || !email || !password}
          sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}
        >
          {nIntento >= maxIntentos ? 'Bloqueado' : 'Iniciar Sesión'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;