import Router from '@koa/router';
import * as usuarioController from './controller';
import { authMiddleware } from '@modulos/auth/middleware';

const router = new Router({ prefix: '/usuarios' });

//router.post('/register', usuarioController.registrar);
//router.post('/login', usuarioController.login);
router.get('/', authMiddleware, usuarioController.listarUsuarios);
router.get('/:id', authMiddleware, usuarioController.obtenerUsuario);
router.patch('/:id', authMiddleware, usuarioController.actualizarUsuario);
router.delete('/:id', authMiddleware, usuarioController.eliminarUsuario);

export default router;
