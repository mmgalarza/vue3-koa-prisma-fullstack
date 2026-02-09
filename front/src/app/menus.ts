import type { NavigationItem } from '@componentes/my-navbar/navigationItem'

export const adminMenu: NavigationItem[] = [
  {
    name: 'Dashboard',
    icon: 'mdi-view-dashboard',
    path: '/admin/dashboard',
  },
  {
    name: 'Usuarios',
    icon: 'mdi-account-group',
    children: [
      {
        name: 'Listado',
        path: '/admin/users',
      },
      {
        name: 'Crear',
        path: '/admin/users/create',
      },
    ],
  },
]

export const userMenu: NavigationItem[] = [
  {
    name: 'Perfil',
    icon: 'mdi-view-dashboard',
    path: '/perfil',
  },
  {
    name: 'Usuarios',
    icon: 'mdi-account-group',
    children: [
      {
        name: 'Listado',
        path: '/admin/users',
      },
      {
        name: 'Crear',
        path: '/admin/users/create',
      },
    ],
  },
]

export const guestMenu: NavigationItem[] = [
  {
    name: 'Inicio',
    icon: 'mdi-view-dashboard',
    path: '/',
  },
  {
    name: 'Usuarios',
    icon: 'mdi-account-group',
    children: [
      {
        name: 'Listado',
        path: '/admin/users',
      },
      {
        name: 'Crear',
        path: '/admin/users/create',
      },
    ],
  },
]

