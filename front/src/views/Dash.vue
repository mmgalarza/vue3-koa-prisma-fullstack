<template lang="pug">
v-layout
  // Navbar
  my-navbar(
    :user="user"
    :navigation="navigation"
    :user-navigation="userNavigation"
    title="Barra principal"
    icon="/logo.svg"
    :cb="handleNavbarSelect"
  )

  // Contenido principal
  v-main
    v-container.pa-6
      v-card.mb-6
        v-card-title.text-h5 Bienvenido
        v-card-text
          p Este es el Home usando el componente MyNavbar.
          p El contenido es independiente del navbar.
    
      v-card.mb-6
        v-card-title.text-h6 Ejemplo de tabla
        v-card-text
          usuarios-view
      v-card.mb-6
        v-card-title.text-h6 Estado
        v-card-text
          pre {{ lastAction }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationItem } from '@/contracts/navigationItem'
import MyNavbar from '@/components/MyNavbar.vue'
import type { User } from '@/contracts/user'
import UsuariosView from './UsuariosView.vue'

/*
|--------------------------------------------------------------------------
| Usuario (simulado)
|--------------------------------------------------------------------------
*/

const user: User = {
  name: 'Juan Pérez',
  email: 'juan.perez@ejemplo.com',
  imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
}

// Estado global
const lastAction = ref<string>('Ninguna')

/*
|--------------------------------------------------------------------------
| Callbacks de ejemplo
|--------------------------------------------------------------------------
*/
function MyCallBack(item: NavigationItem): void {
  lastAction.value = `Callback ejecutado: ${item.name}`
  console.log('Callback del ítem:', item)
}

/*
|--------------------------------------------------------------------------
| Navegación principal del sistema de registros
|--------------------------------------------------------------------------
*/
/*
|--------------------------------------------------------------------------
| Navegación principal – Vuetify
|--------------------------------------------------------------------------
*/
const navigation: NavigationItem[] = [
  {
    name: 'Inicio',
    path: '/dash',
    icon: 'mdi-view-dashboard'
  },

  {
    name: 'Registros',
    icon: 'mdi-file-document-multiple-outline',
    children: [
      { name: 'Nuevo registro', path: '/registros/nuevo', icon: 'mdi-file-plus-outline' },
      { name: 'Todos los registros', path: '/registros', icon: 'mdi-format-list-bulleted' },
      { name: 'Registros propios', path: '/registros/propios', icon: 'mdi-file-account-outline' },
      { name: 'Registros externos', path: '/registros/externos', icon: 'mdi-file-import-outline' }
    ]
  },

  {
    name: 'Maestros',
    icon: 'mdi-database-outline',
    children: [
      { name: 'Proveedores', path: '/proveedores', icon: 'mdi-truck-outline' },
      { name: 'Productos', path: '/productos', icon: 'mdi-package-variant-closed' },
      { name: 'Categorías', path: '/categorias', icon: 'mdi-tag-multiple-outline' },
      { name: 'Almacenes', path: '/almacenes', icon: 'mdi-warehouse' },
      { name: 'Listas de precios', path: '/listas', icon: 'mdi-currency-usd' }
    ]
  },

  {
    name: 'Empresa',
    icon: 'mdi-domain',
    children: [
      { name: 'Empresas', path: '/empresas', icon: 'mdi-office-building-outline' },
      { name: 'Actividades', path: '/actividades', icon: 'mdi-briefcase-outline' },
      { name: 'Configuración activa', path: '/configuracion', icon: 'mdi-cog-outline' }
    ]
  },

  {
    name: 'Documentos',
    icon: 'mdi-clipboard-text-outline',
    children: [
      { name: 'Tipos de documento', path: '/tipos-documento', icon: 'mdi-file-certificate-outline' },
      { name: 'Talonarios', path: '/talonarios', icon: 'mdi-numeric' }
    ]
  },

  {
    name: 'Reportes',
    icon: 'mdi-chart-bar',
    children: [
      { name: 'Registros por actividad', path: '/reportes/registros-actividad', icon: 'mdi-chart-timeline-variant' },
      { name: 'Movimientos por producto', path: '/reportes/productos', icon: 'mdi-chart-box-outline' },
      { name: 'Compras por proveedor', path: '/reportes/proveedores', icon: 'mdi-chart-pie-outline' }
    ]
  },

  {
    name: 'Usuarios y seguridad',
    icon: 'mdi-account-group-outline',
    children: [
      { name: 'Usuarios', path: '/usuarios', icon: 'mdi-account-outline' },
      { name: 'Roles', path: '/roles', icon: 'mdi-shield-account-outline' },
      { name: 'Usuarios por empresa', path: '/usuarios-empresa', icon: 'mdi-account-multiple-check-outline' }
    ]
  }
]


/*
|--------------------------------------------------------------------------
| Navegación de usuario
|--------------------------------------------------------------------------
*/

const userNavigation: NavigationItem[] = [
  {
    name: 'Perfil',
    path: '/perfil',
    icon: 'mdi-account-circle-outline'
  },
  {
    name: 'Configuración',
    path: '/configuracion',
    icon: 'mdi-cog-outline'
  },
  {
    name: 'Cerrar sesión',
    icon: 'mdi-logout',
    cb: () => {
      lastAction.value = 'Sesión cerrada'
      console.log('Logout')
    }
  }
]


/*
|--------------------------------------------------------------------------
| Callback global del navbar
|--------------------------------------------------------------------------
*/

function handleNavbarSelect(item: NavigationItem): void {
  lastAction.value = `Acción global: ${item.name}`
  console.log('Navbar select:', item)
}

/*|--------------------------------------------------------------------------
| Callbacks de la tabla
*/
const crearCliente = () => {
  console.log('Abrir modal nuevo cliente')
}

const editarCliente = (cliente: Cliente) => {
  console.log('Editar', cliente)
}

const eliminarCliente = (cliente: Cliente) => {
  console.log('Confirmar borrado', cliente)
}

</script>
