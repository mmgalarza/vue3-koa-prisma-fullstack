<template lang="pug">
v-card(elevation="1")
  v-card-text
    v-row
      v-col(cols="12" md="3")
        v-select(
          v-model="filters.estados"
          :items="estados"
          label="Estado"
          multiple
          clearable
        )

      v-col(cols="12" md="3")
        v-text-field(
          v-model.number="filters.idOperacion"
          label="Pedido #"
          type="number"
          clearable
        )

      v-col(cols="12" md="3")
        v-text-field(
          v-model.number="filters.totalMin"
          label="Total mínimo"
          type="number"
          clearable
        )

      v-col(cols="12" md="3")
        v-text-field(
          v-model.number="filters.totalMax"
          label="Total máximo"
          type="number"
          clearable
        )

    v-row.mt-2
      v-col(cols="12" md="6")
        v-text-field(
          v-model="filters.desde"
          label="Desde"
          type="date"
        )

      v-col(cols="12" md="6")
        v-text-field(
          v-model="filters.hasta"
          label="Hasta"
          type="date"
        )
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePedidosStore } from './store'
import type { EstadoOp } from './contract'

const pedidosStore = usePedidosStore()
const { filters } = storeToRefs(pedidosStore)

const estados: EstadoOp[] = [
  'BORRADOR',
  'CONFIRMADA',
  'ANULADA'
]
</script>
