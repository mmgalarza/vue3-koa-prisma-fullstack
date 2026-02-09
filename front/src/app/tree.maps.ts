// src/router/tree.routes.ts
import type { RouteRecordRaw } from 'vue-router'
import { RouterView } from 'vue-router'

const tree: Record<string, RouteRecordRaw> = {
  // Auth routes - System routes
 authRoutes: {
  path: '/auth',
  name: 'auth',
  component: RouterView,  
  children: [
      { path: 'login', name: 'login', component: () => import('@auth/login.vue')},
      { path: 'register', name: 'register', component: () => import('@auth/register.vue')},
      { path: 'reset', name: 'reset', component: () => import('@auth/reset.vue')},
      { path: 'resend', name: 'resend', component: () => import('@auth/resend.vue')},
      { path: 'activate', name: 'activate', component: () => import('@auth/activate.vue')}
    ]
  },
  // Layout dinámico: Guest
  GuestRoot: {
    path: '',
    name: 'GUEST',
    component: () => import('@app/layout/guest.vue'),
    meta: {  dynamicRoute: true },
    children: [
      {
        path: '',
        name: 'homePage',
        component: () => import('@modulos/contenido/home/view.vue'),
      },
      {
        path: '/catalogo',
        name: 'catalogoPage',
        component: () => import('@modulos/productos/list.vue'),
      },
      {
        path: '/productos/:id',
        name: 'fichaProducto',
        component: () => import('@modulos/productos/form.vue'),
      }
    ]
  },

  // Layout dinámico: User
  UserRoot: {
    path: '',
    name: 'USER',
    component: () => import('@app/layout/user.vue'),
    meta: { requiresAuth: true, dynamicRoute: true },
    redirect: '/perfil',
    children: [
      {
        path: '/pedidos',
        name: 'pedidos',
        component: () => import('@modulos/pedidos/list.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/carro',
        name: 'carro',
        component: () => import('@modulos/carrito/list.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/catalogo',
        name: 'catalogoPage',
        component: () => import('@modulos/productos/list.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/productos/:id',
        name: 'fichaProducto',
        component: () => import('@modulos/productos/form.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/perfil',
        name: 'perfilUsuario',
        component: () => import('@modulos/perfil/perfil.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },

  // Layout dinámico: Admin
  AdminRoot: {
    path: '',
    name: 'ADMIN',
    component: () => import('@app/layout/admin.vue'),
    meta: { requiresAdmin: true, dynamicRoute: true },
    redirect: '/perfil',
    children: [
      {
        path: '/perfil',
        name: 'perfil',
        component: () => import('@modulos/perfil/perfil.vue'),
        meta: { requiresAdmin: true }
      },
      {
        path: '/usuarios',
        name: 'usuarios',
        component: () => import('@modulos/usuario/table.vue'),
        meta: { requiresAdmin: true }
      },
      {
        path: '/usuarios/:idUsuario/edit',
        name: 'editUsuario',
        component: () => import('@modulos/usuario/form.vue'),
        meta: { requiresAdmin: true }
      },
      {
        path: '/categorias',
        name: 'categorias',
        component: () => import('@modulos/categorias/vista.vue'),
        meta: { requiresAdmin: true }
      },
      {
        path: '/adminProductos',
        name: 'adminProductos',
        component: () => import('@modulos/adminProductos/vista4.vue'),
        meta: { requiresAdmin: true }
      }
    ]
  }
}

export default tree
