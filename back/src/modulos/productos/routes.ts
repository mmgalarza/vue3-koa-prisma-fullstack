import Router from '@koa/router';
import { ProductoController } from './controller';
import { authMiddleware } from '@modulos/auth/middleware';
import { requireAdmin } from '@modulos/usuarios/middleware';

const router = new Router({ prefix: '/api/productos' });

/* ───────────────────────────────
   RUTAS PÚBLICAS (LECTURA)
─────────────────────────────── */
router.get('/', ProductoController.listarPaginado);
router.get('/categoria/:idCategoria', ProductoController.getByCategoria);
router.get('/:id', ProductoController.getById);
router.get('/all', ProductoController.list);

/* ───────────────────────────────
   RUTAS PRIVADAS (ADMIN)
─────────────────────────────── */
router.use(authMiddleware, requireAdmin);

router.post('/', ProductoController.create);

// actualización genérica (datos básicos)
router.patch('/:id', ProductoController.update);

// acciones de negocio explícitas
router.patch('/:id/precio', ProductoController.updatePrecio);
router.patch('/:id/stock/entrada', ProductoController.aumentarStock);
router.patch('/:id/stock/salida', ProductoController.reducirStock);
router.patch('/:id/desactivar', ProductoController.desactivarSiSinStock);

// eliminación lógica (opcional mantenerla)
router.delete('/:id', ProductoController.delete);

export default router;
