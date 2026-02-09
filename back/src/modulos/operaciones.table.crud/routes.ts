import Router from '@koa/router';
import { OperacionController } from './controller';
import { authMiddleware } from '@modulos/auth/middleware';
import { requireAdmin } from '@modulos/usuarios/middleware';

const router = new Router({ prefix: '/api/operaciones' });

/* ───────────────────────────────
   RUTAS PÚBLICAS (LECTURA)
─────────────────────────────── */
router.get('/', OperacionController.list);
router.get('/:id', OperacionController.getById);

/* ───────────────────────────────
   RUTAS PRIVADAS (ADMIN)
─────────────────────────────── */
router.use(authMiddleware, requireAdmin);

// CRUD operaciones
router.post('/', OperacionController.create);
router.delete('/:id', OperacionController.delete);

// CRUD detalles
router.post('/:id/detalles', OperacionController.addDetalle);
router.patch('/:id/detalles/:idDetalle', OperacionController.updateDetalle);
router.delete('/:id/detalles/:idDetalle', OperacionController.removeDetalle);

// Confirmar operación
router.patch('/:id/confirmar', OperacionController.confirmarOperacion);

export default router;
