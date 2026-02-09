<template lang="pug">
v-container.pa-4(fluid)
  //- 1. Prioridad: Feedback de Carga (Algoritmo de control)
  v-progress-linear(
    v-if="store.loading"
    indeterminate
    color="primary"
    height="6"
    class="mb-6"
  )

  //- 2. Bloqueo: Mensaje de Error (Si Zod o la API fallan)
  v-alert(
    v-else-if="store.error"
    type="error"
    variant="tonal"
    class="mb-6"
    closable
    @click:close="store.error = null"
  ) {{ store.error }}

  //- 3. Éxito: Ficha Principal (Usamos usrord para representar la carga de getById)
  v-card(v-else-if="usr" class="mb-6 elevation-3" border variant="flat")
    v-card-title.d-flex.align-center.justify-space-between.pa-4
      div.d-flex.align-center.ga-2
        v-icon(color="primary") mdi-account-circle
        span.text-h6 Perfil de Usuario
        v-chip(
          :color="usr.activo ? 'success' : 'error'"
          size="x-small"
          variant="flat"
          label
        ) {{ usr.activo ? 'Activo' : 'Inactivo' }}
      
      div.d-flex.ga-2
        v-btn(
          v-if="store.isCliente"
          to="/pedidos"
          variant="outlined"
          color="primary"
          prepend-icon="mdi-package-variant"
          size="small"
        ) Mis pedidos
        
        v-btn(
          color="error"
          variant="text"
          prepend-icon="mdi-logout"
          @click="app.Logout()"
          size="small"
        ) Cerrar sesión

    v-divider

    v-card-text.pa-6
      v-row
        v-col(cols="12" sm="6" md="4")
          .text-caption.text-grey ID Usuario
          .text-body-1.font-weight-bold {{ usr.idUsuario }}
        
        v-col(cols="12" sm="6" md="4")
          .text-caption.text-grey Username
          .text-body-1.font-weight-medium @{{ usr.username }}
        
        v-col(cols="12" sm="6" md="4")
          .text-caption.text-grey Rol de acceso
          v-chip(color="primary" size="small" variant="tonal" label) {{ usr.rol }}

        v-col(cols="12" sm="6" md="4")
          .text-caption.text-grey Nombre Completo
          .text-body-1 {{ usr.nombre }}
        
        v-col(cols="12" sm="6" md="8")
          .text-caption.text-grey Email Registrado
          .text-body-1 {{ usr.email }}

    //- Sección de Cliente (Subtipo) mediante transiciones suaves
    v-expand-transition
      div(v-if="store.isCliente && usr.cliente")
        v-divider
        v-card-title.bg-grey-lighten-4.text-subtitle-2.py-3
          v-icon(start size="18" color="blue-grey") mdi-shield-check
          | DATOS DE FACTURACIÓN Y ENVÍO
        
        v-card-text.pa-6
          v-row
            v-col(cols="12" sm="6")
              .text-caption.text-grey Razón Social / Nombre Fiscal
              .text-body-1.font-weight-medium {{ usr.cliente.nombre }}
            
            v-col(cols="12" sm="6")
              .text-caption.text-grey Email de Facturación
              .text-body-1 {{ usr.cliente.email || usr.email }}
            
            v-col(cols="12")
              .text-caption.text-grey Diusrción Registrada
              //- Getter fullDiusrcion del store
              .text-body-1 {{ store.fullDiusrcion }}
            
            v-col(cols="12" sm="6" v-if="usr.cliente.contacto")
              .text-caption.text-grey Persona de Contacto
              .text-body-1 {{ usr.cliente.contacto }}

</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useUsuarioStore } from './store'
import { useAppStore } from '@app/store' // Ajusta el path según tu proyecto
import { useAuthStore } from '@auth/store' 

const store = useUsuarioStore()
const auth = useAuthStore()
const app = useAppStore()
const usr = computed(() => store.selected)

onMounted(async () => {
    await store.getById(auth.user?.id!)
})
</script>