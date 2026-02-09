import Router from '@koa/router';
import {
  getImagenes,
  getImagen,
  createImagen,
  updateImagen,
  deleteImagen,
} from './controller';
import { authMiddleware } from '@modulos/auth/middleware';
import { requireAdmin } from '@modulos/usuarios/middleware';

const router = new Router({ prefix: '/api/productos/imagenes' });

router.get('/', getImagenes);
router.get('/:id', getImagen);

/* ───────────────────────────────
   RUTAS PRIVADAS (ADMIN)
─────────────────────────────── */
const privateRouter = new Router();

privateRouter.use(authMiddleware, requireAdmin);

privateRouter.post('/', createImagen);
privateRouter.patch('/:id', updateImagen);
privateRouter.delete('/:id', deleteImagen);

router.use(privateRouter.routes(), privateRouter.allowedMethods());

export default router;
