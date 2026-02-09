<template lang="pug">
v-container(fluid)
  v-row.mb-4
    v-col(cols="12")
      pedido-filter
  v-row.align-center.mb-4
    v-col(cols="12")
      h1.text-h5.font-weight-medium Mis pedidos

  v-row(v-if="pedidosStore.cargando || usuarioStore.loading")
    v-col(cols="12")
      v-progress-linear(indeterminate)

  v-row(v-else-if="usuarioStore.loaded && !usuarioStore.isCliente")
    v-col(cols="12")
      v-alert(type="info" variant="tonal")
        | Este usuario no está asociado a un cliente.

  v-row(v-else-if="usuarioStore.error")
    v-col(cols="12")
      v-alert(type="error" variant="tonal")
        | {{ usuarioStore.error }}

  v-row(v-else-if="pedidosStore.pedidos.length === 0")
    v-col(cols="12")
      v-alert(type="info" variant="tonal")
        | No tienes pedidos registrados.

  v-row(v-else)
    v-col(
      v-for="op in pedidosStore.pedidosFiltrados"
      :key="op.idOperacion"
      cols="12"
      md="6"
      lg="4"
    )
      pedido-item(:operacion="op" 
                  @confirmar="(idOperacion) => pedidosStore.confirmarPedido(idOperacion)" 
                  @anular="(idOperacion) => idPedidoAnular.value = idOperacion"
                )

  v-row.mt-6(justify="center")
    v-pagination(
      v-model="page"
      :length="totalPages"
      @update:modelValue="onPageChange"
    )

  v-dialog(v-model="dlgAnular" max-width="500")
    v-card
      v-card-title.text-h5 Anular pedido
      v-card-text
        | ¿Estás seguro de que deseas anular este pedido?
      v-card-actions
        v-spacer
        v-btn(
          text
          @click="dlgAnular = false"
        ) Cancelar
        v-btn(
          color="error"
          @click="anularPedido(idPedidoAnular.value)"
        ) Anular
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { usePedidosStore } from './store'
import PedidoItem from './item.vue'
import PedidoFilter from './filter.vue'
import { useUsuarioStore } from '../usuario/store'
import { useAuthStore } from '@/app/auth/store'

const pedidosStore = usePedidosStore()
const usuarioStore = useUsuarioStore()
const authStore = useAuthStore()
const page = ref<number>(1)
const totalPages = computed(()=> Math.ceil(pedidosStore.meta.total/pedidosStore.meta.limit))
const onPageChange = (p: number) => {
  pedidosStore.loadMisPedidos(p)
}
const idPedidoAnular = ref<number>(0)
const dlgAnular = computed<boolean>({
  get: () => idPedidoAnular.value !== 0,
  set: (val) => {
    if (!val) idPedidoAnular.value = 0
  }
})

const anularPedido = (idOperacion: number) => {
  pedidosStore.anularPedido(idOperacion)
  idPedidoAnular.value = 0
}

onMounted(async () => {
  if (!usuarioStore.loading) await usuarioStore.getById(authStore.user?.id!)
  
  await pedidosStore.loadMisPedidos()
})
onUnmounted(() => {
  pedidosStore.reset()
})
</script>
