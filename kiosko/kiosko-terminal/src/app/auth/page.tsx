import React, { useState } from 'react';
import { 
  Container, Box, Card, TextField, Button, Typography, 
  Alert, IconButton, InputAdornment, Link 
} from '@mui/material';
import { 
  EmailOutlined, LockOutlined, Visibility, VisibilityOff, ChevronRight 
} from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from './bridge.store';
import type { LoginPayload } from './contract';

export const AuthPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  // Estados del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Lógica de intentos
  const [nIntento, setNIntento] = useState(0);
  const maxIntentos = 3;

  const loginHandler = async () => {
    setErrorMessage('');
    const payload: LoginPayload = { email, password };

    try {
      await login(payload);
      navigate('/'); // O la ruta protegida que desees
    } catch (error: any) {
      const nuevoIntento = nIntento + 1;
      setNIntento(nuevoIntento);
      
      let msg = `Te quedan ${maxIntentos - nuevoIntento} intentos. `;
      msg += error?.message || 'Error desconocido.';
      
      if (nuevoIntento >= maxIntentos) {
        msg = 'Has alcanzado el número máximo de intentos. Tu cuenta ha sido bloqueada temporalmente.';
      }
      setErrorMessage(msg);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Box display="flex" justifyContent="center" mb={4}>
        <img 
          src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg" 
          alt="Logo" 
          style={{ maxWidth: '228px' }} 
        />
      </Box>

      <Card sx={{ p: 4, borderRadius: 2, boxShadow: 8 }}>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Cuenta
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Email address"
          margin="normal"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
        />

        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="subtitle1" color="text.secondary">
            Password
          </Typography>
          <Link component={RouterLink} to="/auth/reset" variant="caption" underline="none" color="primary">
            ¿Olvidaste tu contraseña?
          </Link>
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          type={visible ? 'text' : 'password'}
          placeholder="Enter your password"
          margin="normal"
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setVisible(!visible)} edge="end" size="small">
                    {visible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Box my={3}>
          {!errorMessage ? (
            <Alert severity="info" variant="filled">
              Advertencia: Solo tienes {maxIntentos - nIntento} intentos antes de que se bloquee tu cuenta.
            </Alert>
          ) : (
            <Alert severity="warning" variant="filled">
              {errorMessage}
            </Alert>
          )}
        </Box>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          onClick={loginHandler}
          disabled={nIntento >= maxIntentos}
          sx={{ mb: 2, py: 1.5 }}
        >
          Entrar
        </Button>

        <Box textAlign="center">
          <Link component={RouterLink} to="/auth/register" underline="none" color="primary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Registra tu nueva cuenta <ChevronRight fontSize="small" />
          </Link>
        </Box>
      </Card>
    </Container>
  );
};

export default AuthPage;