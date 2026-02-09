// routes/perfil.routes.ts
import Router from '@koa/router';
import { actualizarPerfil, obtenerPerfil } from './controller';
import { authMiddleware } from '@modulos/auth/middleware';

const router = new Router({ prefix: '/api/perfil' });

// 1. Rutas para el usuario AUTENTICADO (Usa su propio ID del Token)
// El Front llamará a: GET /api/perfil
router.get('/', authMiddleware, obtenerPerfil);
router.put('/', authMiddleware, actualizarPerfil);

// 2. Rutas para ADMINISTRACIÓN (Usa el ID de la URL)
// El Front llamará a: GET /api/perfil/123
// NOTA: Aquí deberías añadir un roleMiddleware para que solo ADMIN entre
router.get('/:id', authMiddleware, obtenerPerfil); 
router.put('/:id', authMiddleware, actualizarPerfil);

export default router;