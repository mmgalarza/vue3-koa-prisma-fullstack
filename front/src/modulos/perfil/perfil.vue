<template lang="pug">
v-container.pa-4(fluid)
  //- 1. Feedback de Carga
  v-progress-linear(
    v-if="store.loading && !editDialog"
    indeterminate
    color="primary"
    height="6"
    class="mb-6"
  )

  //- 2. Feedback de Error
  v-alert(
    v-else-if="store.error"
    type="error"
    variant="tonal"
    class="mb-6"
    closable
    @click:close="store.error = null"
  ) {{ store.error }}

  //- 3. Ficha Principal (Lectura)
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
          color="secondary"
          variant="tonal"
          prepend-icon="mdi-pencil"
          size="small"
          @click="abrirEditor"
        ) Editar Datos
        
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
          .text-caption.text-grey Nombre Completo
          .text-body-1.font-weight-bold {{ usr.nombre }}
        
        v-col(cols="12" sm="6" md="4")
          .text-caption.text-grey Username
          .text-body-1 @{{ usr.username }}
        
        v-col(cols="12" sm="6" md="4")
          .text-caption.text-grey Rol
          v-chip(color="primary" size="small" variant="tonal" label) {{ usr.rol }}

    //- Sección de Cliente
    v-expand-transition
      div(v-if="store.isCliente && usr.cliente")
        v-divider
        v-card-title.bg-grey-lighten-4.text-subtitle-2.py-3
          v-icon(start size="18" color="blue-grey") mdi-map-marker
          | DATOS DE CONTACTO Y ENVÍO
        
        v-card-text.pa-6
          v-row
            v-col(cols="12" sm="6")
              .text-caption.text-grey Teléfono / Contacto
              .text-body-1 {{ usr.cliente.contacto || 'No definido' }}
            
            v-col(cols="12")
              .text-caption.text-grey Dirección Completa
              .text-body-1 {{ store.fullDireccion }}

  //- 4. Diálogo de Edición
  v-dialog(v-model="editDialog" max-width="600px" persistent)
    v-card(title="Editar Perfil")
      v-card-text
        v-form(ref="formRef")
          v-row(dense)
            v-col(cols="12")
              v-text-field(
                v-model="form.nombre"
                label="Nombre Completo"
                :error-messages="apiErrors.nombre"
                variant="outlined"
              )
            
            //- Campos dinámicos de cliente (si existe)
            template(v-if="form.cliente")
              v-col(cols="12" sm="6")
                v-text-field(
                  v-model="form.cliente.contacto"
                  label="Teléfono"
                  :error-messages="apiErrors['cliente.contacto']"
                  variant="outlined"
                )
              v-col(cols="12" sm="6")
                v-text-field(
                  v-model="form.cliente.ciudad"
                  label="Ciudad"
                  :error-messages="apiErrors['cliente.ciudad']"
                  variant="outlined"
                )
              v-col(cols="12")
                v-text-field(
                  v-model="form.cliente.calle"
                  label="Calle"
                  :error-messages="apiErrors['cliente.calle']"
                  variant="outlined"
                )

      v-card-actions.pa-4
        v-spacer
        v-btn(variant="text" @click="editDialog = false") Cancelar
        v-btn(
          color="primary"
          variant="flat"
          :loading="store.loading"
          @click="ejecutarUpdate"
        ) Guardar Cambios

</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useUsuarioStore } from './store'
import { useAppStore } from '@app/store' 
import { useAuthStore } from '@auth/store' 

const store = useUsuarioStore()
const auth = useAuthStore()
const app = useAppStore()

const usr = computed(() => store.usr)
const editDialog = ref(false)
const apiErrors = ref<Record<string, string>>({})

// Estado reactivo para el formulario (clon)
const form = reactive({
  nombre: '',
  cliente: {
    contacto: '',
    ciudad: '',
    calle: ''
  }
})

const abrirEditor = () => {
  if (!usr.value) return
  apiErrors.value = {}
  
  // Clonamos valores actuales al formulario
  form.nombre = usr.value.nombre
  if (usr.value.cliente) {
    form.cliente.contacto = usr.value.cliente.contacto || ''
    form.cliente.ciudad = usr.value.cliente.ciudad || ''
    form.cliente.calle = usr.value.cliente.calle || ''
  }
  
  editDialog.value = true
}

const ejecutarUpdate = async () => {
  apiErrors.value = {}
  const res = await store.actualizar(form)
  
  if (res.success) {
    editDialog.value = false
  } else if (res.errors) {
    // Mapeo automático de errores de Zod a los inputs
    res.errors.forEach((e: any) => {
      apiErrors.value[e.field] = e.message
    })
  }
}

const cargarDatos = async () => {
  const userId = auth.user?.id
  if (userId) await store.getById(userId)
}

onMounted(cargarDatos)

watch(() => auth.user?.id, (newId) => {
  if (newId) cargarDatos()
})
</script>