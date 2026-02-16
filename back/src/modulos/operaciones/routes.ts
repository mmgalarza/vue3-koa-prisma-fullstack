import Router from '@koa/router';
import { OperacionController } from './controller';
import { authMiddleware } from '@modulos/auth/middleware';
import { requireAdmin } from '@modulos/usuarios/middleware';

const router = new Router({ prefix: '/api/operaciones' });

/* ───────────────────────────────
   🚀 RUTA PRINCIPAL KIOSKO (ATÓMICA)
   Envío de cabecera y detalles en un solo paso.
─────────────────────────────── */

// Este es el nuevo endpoint "One-Shot" que evita errores de concurrencia
router.post('/full', OperacionController.checkoutCompleto);


/* ───────────────────────────────
   🛒 RUTAS GESTIÓN PASO A PASO (LEGACY/ADMIN)
   Útiles para editar carritos guardados o flujos manuales.
─────────────────────────────── */

// Iniciar operación borrador
router.post('/', OperacionController.create);

// Gestión de ítems individuales
router.post('/:id/detalles', OperacionController.addDetalle);
router.patch('/:id/detalles/:idDetalle', OperacionController.updateDetalle);
router.delete('/:id/detalles/:idDetalle', OperacionController.removeDetalle);

// Confirmar venta (Cierre de borrador)
router.post('/:id/confirmar', OperacionController.confirmarOperacion);


/* ───────────────────────────────
   👤 RUTAS PRIVADAS (USUARIO / PANEL)
─────────────────────────────── */

// Ver detalle de una operación específica
router.get('/:id', authMiddleware, OperacionController.getById);

// Historial de compras por cliente
router.get('/cliente/:idCliente', authMiddleware, OperacionController.listByIdCliente);


/* ───────────────────────────────
   🛡️ RUTAS EXCLUSIVAS ADMIN
─────────────────────────────── */

// Listado global para auditoría/reportes
router.get('/', authMiddleware, requireAdmin, OperacionController.list);

// Correcciones manuales de stock y eliminación física
router.patch('/:id/stock', authMiddleware, requireAdmin, OperacionController.ajustarStock);
router.delete('/:id', authMiddleware, requireAdmin, OperacionController.delete);

export default router;