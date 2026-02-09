<template lang="pug">
v-container(fluid)
  v-row
    //- Columna de la Tabla
    v-col(cols="12" md="8")
      v-card(variant="outlined")
        v-card-title.pa-4 Tu pedido
        v-divider
        template(v-if="!store.isEmpty")
          v-table
            thead
              tr
                th.text-left Producto
                th.text-center(style="width: 150px") Cantidad
                th.text-right Subtotal
                th.text-right Acciones
            tbody
              //- Inyectamos el componente hijo por cada item
              item-row(
                v-for="product in store.items" 
                :key="product.idProducto" 
                :item="product"
              )
        
        v-alert.ma-4(v-else type="info" variant="tonal" text="Carrito vacío")

    //- Columna de Checkout
    v-col(cols="12" md="4")
      v-card.pa-4(color="surface-light" border)
        .text-h5.mb-4 Checkout
        .d-flex.justify-space-between.text-h6.mb-6
          span Total:
          span.text-primary.font-weight-black {{ store.totalPrecio }}€
        
        v-form(v-model="formValid" @submit.prevent="realizarPago")
          v-text-field(v-model="cliente.nombre" label="Nombre" variant="underlined" :rules="[rules.required]")
          v-text-field(v-model="cliente.email" label="Email" variant="underlined" :rules="[rules.required, rules.email]")
          v-btn.mt-4(type="submit" color="primary" block size="large" :loading="store.loading" :disabled="!formValid || store.isEmpty")
            | Confirmar Pedido
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCarritoStore } from './store'
import ItemRow from './item.vue' 

const store = useCarritoStore()
const formValid = ref(false)
const cliente = ref({ nombre: '', email: '' })

const rules = {
  required: (v: string) => !!v || 'Requerido',
  email: (v: string) => /.+@.+\..+/.test(v) || 'E-mail no válido'
}

const realizarPago = async () => {
  if (!formValid.value) return
  try {
    await store.checkout(cliente.value)
    alert('Operación confirmada')
  } catch (e) {
    console.error(e)
  }
}
</script>
