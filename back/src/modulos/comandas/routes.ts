import Router from '@koa/router';
import * as ComandaController from './controller';

const router = new Router({ prefix: '/api/v1/comandas' });

/* ───────────────────────────────
    🍳 GESTIÓN DE TABLERO
   ─────────────────────────────── */

// Crear una nueva comanda (desde sistema de ventas)
router.post('/', ComandaController.crear);

// Obtener todas las comandas para el tablero
router.get('/', ComandaController.obtenerTodas);

// Obtener una comanda específica por ID de operación
router.get('/:id', ComandaController.obtenerPorId);

// Filtrar comandas por estado (PENDIENTE, PREPARACION, etc.)
router.get('/estado/:estado', ComandaController.obtenerPorEstado);

// Anulación lógica/física de la comanda
router.delete('/:id', ComandaController.anular);


/* ───────────────────────────────
    🤝 ACCIONES DE COCINA
   ─────────────────────────────── */

// El cocinero reclama un producto específico de la comanda
router.patch('/coger', ComandaController.coger);

// El cocinero actualiza la cantidad servida/preparada de un ítem
router.patch('/servir', ComandaController.servir);

// El cocinero libera el producto (vuelve a estar disponible sin cocinero)
router.patch('/liberar', ComandaController.liberar);

export default router;