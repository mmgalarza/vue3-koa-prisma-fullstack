<template lang="pug">
  ul(role="list" class="divide-y divide-gray-100")
    li(v-for="producto in productos" :key="producto.id" class="flex justify-between gap-x-6 py-5")
      .flex.min-w-0.gap-x-4
        img.size-12.flex-none.rounded-full.bg-gray-50(src="https://cdn-icons-png.flaticon.com/512/3081/3081233.png" alt="Producto")
        .min-w-0.flex-auto
          p(class="text-sm/6 font-semibold text-gray-900") {{ producto.nombre }}
          p(class="mt-1 truncate text-xs/5 text-gray-500") Precio: ${{ producto.precio }}
      div(class="hidden shrink-0 sm:flex sm:flex-col sm:items-end")
        p(class="text-sm/6 text-gray-900") Stock
        div(v-if="producto.stock > 0" class="mt-1 flex items-center gap-x-1.5")
          .div(class="flex-none rounded-full bg-emerald-500/20 p-1")
            div(class="size-1.5 rounded-full bg-emerald-500")
          p(class="text-xs/5 text-gray-500") {{ producto.stock }} disponible
        p(v-else class="mt-1 text-xs/5 text-gray-500") Agotado
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const productos = ref([])
const userStore = useUserStore()
const JWT = userStore.jwt

async function fetchProducts() {
  try {
    const res = await fetch('http://localhost:1337/api/productos', {
      headers: {
        'Authorization': `Bearer ${JWT}`
      }
    })
    const data = await res.json()
    productos.value = data.data.map(item => ({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      stock: item.stock
    }))
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

onMounted(() => {
  fetchProducts()
})
</script>
