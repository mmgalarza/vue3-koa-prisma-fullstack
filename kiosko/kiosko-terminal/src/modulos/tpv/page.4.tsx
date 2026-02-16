import React, { useEffect, useState, useCallback } from 'react';
import { Box, CircularProgress, Typography, Fade } from '@mui/material';

// 🔄 Sincronización con el motor y estado global
import { kioskero } from './controller.4';
import { useKioskero } from './store.2'; 
import { productosService } from './services/productos.service';
import type { Categoria, Producto } from './types';

// Componentes
import { SeccionSugerencias } from './components/sugerencias';
import { NavegadorCatalogo } from './components/navegador.2';
import { CarritoTicket } from './components/carrito.3'; 
import { HeaderKiosko } from './components/identidad';
import { Checkout } from './components/checkout';
import { TicketConfirmacion } from './components/ticket';
import { Wellcome } from './components/wellcome'; // 🍔 La nueva landing

const KioskoPage: React.FC = () => {
  const { arbolCategorias, loading } = useKioskero();
  
  // Estado de flujo principal
  const [isWelcome, setIsWelcome] = useState(true); // Controla la publicidad
  const [isCheckout, setIsCheckout] = useState(false);
  const [operacionExitosa, setOperacionExitosa] = useState<{ id: number; total: number } | null>(null);

  // Estado de navegación local
  const [ruta, setRuta] = useState<Categoria[]>([]);
  const [itemsEnPantalla, setItemsEnPantalla] = useState<(Categoria | Producto)[]>([]);
  const [loadingVista, setLoadingVista] = useState(false);

  // 1. Inicialización
  useEffect(() => { 
    kioskero.abrirCaja(); 
  }, []);

  // 2. Sincronizar items iniciales
  useEffect(() => { 
    if (ruta.length === 0 && arbolCategorias.length > 0) {
      setItemsEnPantalla(arbolCategorias); 
    }
  }, [arbolCategorias, ruta.length]);

  // 3. Reset TOTAL y vuelta a Publicidad
  const finalizarYLimpiarTodo = useCallback(() => {
    kioskero.resetSistema(); // Mata carrito, user y puntos
    setRuta([]);
    setItemsEnPantalla(arbolCategorias);
    setIsCheckout(false);
    setOperacionExitosa(null);
    setIsWelcome(true); // 🔥 Cerramos el módulo volviendo al inicio
  }, [arbolCategorias]);

  const empezarPedido = () => {
    setIsWelcome(false);
  };

  // 4. Manejador de éxito
  const handleCheckoutFinalizado = (id: number, total: number) => {
    setOperacionExitosa({ id, total });
    setIsCheckout(false);
  };

  // 5. Lógica de navegación
  const navegar = async (cat: Categoria) => {
    if (cat.tipo === 'FAMILIA' || cat.tipo === 'MADRE') {
      setRuta(prev => [...prev, cat]);
      setItemsEnPantalla(cat.subcategorias || []);
    } 
    else if (cat.tipo === 'HIJA') {
      setLoadingVista(true);
      try {
        const prods = await productosService.getByCategoria(cat.idCategoria);
        setRuta(prev => [...prev, cat]);
        setItemsEnPantalla(prods);
      } catch (err) {
        console.error("Error:", err);
      } finally { 
        setLoadingVista(false); 
      }
    }
  };

  const volverAtras = useCallback(() => {
    const nuevaRuta = [...ruta]; 
    nuevaRuta.pop(); 
    setRuta(nuevaRuta);
    if (nuevaRuta.length === 0) {
      setItemsEnPantalla(arbolCategorias);
    } else {
      const categoriaPadre = nuevaRuta[nuevaRuta.length - 1];
      setItemsEnPantalla(categoriaPadre.subcategorias || []);
    }
  }, [ruta, arbolCategorias]);

  // --- RENDERIZADO CONDICIONAL ---

  // A. PANTALLA DE INICIO (PUBLICIDAD)
  if (isWelcome) {
    return <Wellcome onEmpezar={empezarPedido} />;
  }
  
  // B. PANTALLA DE TICKET (ÉXITO)
  if (operacionExitosa) {
    return (
      <Box sx={{ height: '100vh', width: '100vw', bgcolor: 'white' }}>
        <TicketConfirmacion 
          idOperacion={operacionExitosa.id} 
          total={operacionExitosa.total} 
          onFinalizar={finalizarYLimpiarTodo} 
        />
      </Box>
    );
  }

  // C. PANTALLA DE KIOSKO (CATÁLOGO / CHECKOUT)
  return (
    <Box sx={{ 
      display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', 
      bgcolor: '#f8f9fa', overflow: 'hidden', userSelect: 'none' 
    }}>
      
      <HeaderKiosko onLogoClick={finalizarYLimpiarTodo} />

      <Box sx={{ flexGrow: 1, display: 'flex', minHeight: 0 }}>
        
        <Box sx={{ 
          flexGrow: 1, display: 'flex', flexDirection: 'column', 
          minWidth: 0, bgcolor: 'white', position: 'relative' 
        }}>
          
          {isCheckout ? (
            <Fade in={isCheckout} timeout={300}>
              <Box sx={{ height: '100%', width: '100%' }}>
                <Checkout 
                  onFinalizado={handleCheckoutFinalizado} 
                  onCancelar={() => setIsCheckout(false)} 
                />
              </Box>
            </Fade>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <SeccionSugerencias />
              
              {loading || loadingVista ? (
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                  <CircularProgress size={60} thickness={5} sx={{ color: '#ff9800' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.secondary' }}>
                    CARGANDO...
                  </Typography>
                </Box>
              ) : (
                <NavegadorCatalogo 
                  ruta={ruta} 
                  items={itemsEnPantalla} 
                  onNavegar={navegar} 
                  onVolver={volverAtras} 
                  onInicio={finalizarYLimpiarTodo} 
                />
              )}
            </Box>
          )}
        </Box>

        {!isCheckout && (
          <Box sx={{ 
            width: 440, borderLeft: '1px solid #e0e0e0', bgcolor: '#fff', 
            display: 'flex', flexDirection: 'column', zIndex: 10
          }}>
             <CarritoTicket 
               onPagarClick={() => setIsCheckout(true)} 
               isCheckoutView={isCheckout} 
             />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default KioskoPage;