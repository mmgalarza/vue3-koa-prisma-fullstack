<template lang="pug">
v-container
  v-row.mb-4
    v-col(cols="12")
      h1.text-h5.font-weight-medium Pedido #{{ idPedido }}

  v-card
    v-card-text
      v-row
        v-col(cols="12")
          p.text-medium-emphasis
            | Aquí se mostrará el detalle completo del pedido:
            | datos del cliente, dirección, productos y totales.
</template>
<script lang="ts" setup>
</script>
