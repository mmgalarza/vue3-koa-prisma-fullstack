import Router from '@koa/router';
import { OperacionController } from './controller';
import { authMiddleware } from '@modulos/auth/middleware';
import { requireAdmin } from '@modulos/usuarios/middleware';

const router = new Router({ prefix: '/api/operaciones' });

/* ───────────────────────────────
   RUTAS PÚBLICAS (LECTURA)
─────────────────────────────── */

/* ───────────────────────────────
   RUTAS PRIVADAS (ADMIN / USUARIO)
─────────────────────────────── */
router.use(authMiddleware); // todas requieren autenticación

// LISTAR operaciones por idCliente con page y limit
router.get('/cliente/:idCliente', OperacionController.listByIdCliente);
router.get('/:id', OperacionController.getById);


// CREAR operación BORRADOR (usuario registrado)
router.post('/', OperacionController.create);

// CONFIRMAR operación (usuario registrado)
router.post('/:id/confirmar', OperacionController.confirmarOperacion);

// DETALLES DE OPERACIÓN
router.post('/:id/detalles', OperacionController.addDetalle);
router.patch('/:id/detalles/:idDetalle', OperacionController.updateDetalle);
router.delete('/:id/detalles/:idDetalle', OperacionController.removeDetalle);

// AJUSTAR STOCK (entrada/salida) - por admin
router.patch('/:id/stock', requireAdmin, OperacionController.ajustarStock);

// FINALIZAR operación (admin)
// router.post('/:id/finalizar', requireAdmin, OperacionController.finalizarOperacion);

// ELIMINAR operación (opcional, admin)
router.delete('/:id', requireAdmin, OperacionController.delete);
// LISTAR operaciones del usuario autenticado
router.get('/', requireAdmin, OperacionController.list);

export default router;
