import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router'; // Importa el router que configuramos con tu tree
import { CssBaseline, ThemeProvider, createTheme, Box, CircularProgress } from '@mui/material';

// Mantenemos tu tema coherente
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    // Añadimos negro para el ticket como en el diseño previo
    secondary: { main: '#1a1a1a' } 
  },
});

/**
 * Loader minimalista para las transiciones de rutas Lazy
 */
const GlobalLoader = () => (
  <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Ya no renderizamos <KioskoPage /> aquí directamente.
        Ahora RouterProvider se encarga de leer '/' y cargar KioskoPage
        según definimos en tree.routes.tsx
      */}
      <Suspense fallback={<GlobalLoader />}>
        <RouterProvider router={router} />
      </Suspense>
      
    </ThemeProvider>
  );
}

export default App;