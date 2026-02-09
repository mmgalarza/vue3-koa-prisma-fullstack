<template lang="pug">
v-container(fluid)
  //- Toolbar de navegación
  v-btn.mb-4(
    variant="text" 
    prepend-icon="mdi-arrow-left" 
    @click="router.back()"
  ) Volver al listado

  //- Estado de Carga Centralizado
  v-row(v-if="store.loading" justify="center").ma-10
    v-progress-circular(indeterminate color="primary" size="64")

  //- Estado de Error Crítico (Zod o API)
  v-alert.mb-6(
    v-else-if="store.error"
    type="error"
    variant="tonal"
    title="Secuencia interrumpida"
    icon="mdi-alert-octagon"
  ) {{ store.error }}

  v-row(v-else-if="store.selected")
    //- Columna Izquierda: Datos de Usuario (Cuenta)
    v-col(cols="12" md="5")
      v-card(title="Datos de la Cuenta" border variant="flat")
        v-card-text
          v-form
            v-row(dense)
              v-col(cols="12")
                v-text-field(v-model="form.nombre" label="Nombre completo" variant="outlined")
              v-col(cols="12")
                v-text-field(v-model="form.username" label="Username" variant="outlined" prefix="@")
              v-col(cols="12")
                v-text-field(v-model="form.email" label="Email" variant="outlined")
              v-col(cols="12")
                v-switch(v-model="form.activo" :label="form.activo ? 'Cuenta Activa' : 'Cuenta Inactiva'" color="success" hide-details)
        
        v-divider
        v-card-actions.pa-4
          v-btn(
            color="primary" 
            variant="flat" 
            block 
            :loading="store.loading" 
            @click="save"
          ) Actualizar Usuario

    //- Columna Derecha: Datos de Cliente (Facturación)
    v-col(cols="12" md="7")
      v-fade-transition(mode="out-in")
        v-card(v-if="store.isCliente" title="Información de Cliente / Facturación" border variant="flat" color="grey-lighten-4")
          v-card-text
            v-row(dense)
              v-col(cols="12")
                v-text-field(:model-value="cliente.nombre" label="Nombre Facturación" variant="outlined" density="compact" readonly)
              v-col(cols="12" md="8")
                v-text-field(:model-value="cliente.calle" label="Calle" variant="outlined" density="compact" readonly)
              v-col(cols="12" md="4")
                v-text-field(:model-value="cliente.numero" label="Nº" variant="outlined" density="compact" readonly)
              v-col(cols="12" md="6")
                v-text-field(:model-value="cliente.ciudad" label="Ciudad" variant="outlined" density="compact" readonly)
              v-col(cols="12" md="6")
                v-text-field(:model-value="cliente.provincia" label="Provincia" variant="outlined" density="compact" readonly)
          v-alert.ma-4(type="info" variant="tonal" density="compact")
            | Los datos de cliente son de solo lectura. Se sincronizan con el proceso de pedido.
        
        //- Si no es cliente
        v-card(v-else variant="outlined" border).d-flex.align-center.justify-center.pa-10
          .text-center
            v-icon(size="large" color="grey") mdi-account-question
            .text-h6.text-grey El usuario aún no es Cliente
            .text-caption No existen datos de facturación asociados.
</template>

<script setup lang="ts">
import { reactive, onMounted, computed} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsuarioStore } from './store'
import type { UpdateUsuarioPayload } from './contract'

const store = useUsuarioStore()
const route = useRoute()
const router = useRouter()
  
const form = reactive<UpdateUsuarioPayload>({
  nombre: '',
  username: '',
  email: '',
  activo: true
})
const selected = computed(() => store.selected)
const cliente = computed(() => store.selected?.cliente)

// Cargar datos al montar
onMounted(async () => {
  const idUsuario = Number(route.params.idUsuario)
  
  try {
    // El store aplica validación Zod al ID y a la respuesta
    await store.getById(idUsuario)
    
    if (store.selected) {
      Object.assign(form, {
        nombre: store.selected.nombre,
        username: store.selected.username,
        email: store.selected.email,
        activo: store.selected.activo
      })
    }
  } catch (err) {
    console.error("Fallo en la carga de usuario por violación de contrato o red.")
  }
})

const save = async () => {
  if (!store.selected) return
  await store.update(store.selected.idUsuario, { ...form })
}
</script>