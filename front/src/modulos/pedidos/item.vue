<template lang="pug">
v-card.cursor-pointer
  v-card-title.d-flex.align-center
    span.font-weight-medium Pedido #:{{ operacion.idOperacion }}
    v-spacer
    v-chip(
      size="small"
      variant="flat"
    ) {{ operacion.estado }}

  v-divider

  v-card-text
    v-row
      v-col(cols="6")
        small.text-medium-emphasis Total
        div.font-weight-medium {{ operacion.total }}

      v-col(cols="6")
        small.text-medium-emphasis Ítems
        div.font-weight-medium {{ operacion.operacionesDetalle.length }}

    v-row.mt-2
      v-col(cols="6")
        small.text-medium-emphasis Creado
        div {{ operacion.createdAt }}

      v-col(cols="6")
        small.text-medium-emphasis Confirmado
        div {{ operacion.confirmedAt || '-' }}

  v-divider

  v-card-actions(v-if="operacion.estado === 'BORRADOR'")
    v-btn(
      color="success"
      variant="tonal"
      @click="$emit('confirmar', operacion.idOperacion)"
    ) Confirmar

    v-btn(
      color="error"
      variant="tonal"
      @click="$emit('anular', operacion.idOperacion)"
    ) Anular
</template>
<script lang="ts" setup>
import type { Operacion } from './contract';
defineProps<{
  operacion: Operacion
}>()
defineEmits<{
  (e: 'confirmar', idOperacion: number): void
  (e: 'anular', idOperacion: number): void
}>()

</script>