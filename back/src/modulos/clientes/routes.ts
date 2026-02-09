import Router from '@koa/router';
import { ClientesController } from './controller';
import { authMiddleware } from '@modulos/auth/middleware';
import { requireAdmin } from '@modulos/usuarios/middleware';

const router = new Router({ prefix: '/api/clientes' });

/* ───────────────────────────────
   RUTAS PÚBLICAS
─────────────────────────────── */
// router.get('/', ClientesController.getClientes);

/* ───────────────────────────────
   RUTAS PRIVADAS
─────────────────────────────── */
const privateRouter = new Router();

privateRouter.use(authMiddleware, requireAdmin);

// Definimos todas las rutas privadas aquí
privateRouter.get('/', ClientesController.getClientes);
privateRouter.get('/:id', ClientesController.getCliente);
privateRouter.post('/', ClientesController.createCliente);
privateRouter.patch('/:id', ClientesController.updateCliente);
privateRouter.delete('/:id', ClientesController.deleteCliente);

router.use(privateRouter.routes());

export default router;
